import e, { request, response } from "express";
import Stripe from "stripe"

export const stripeWebhooks = async (req, res) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const sig = req.headers['stripe-signature'];


    let event;
    try {
        event = stripe.webhooks.constructEvent(request.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

    } catch (error) {
        return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    try {
        switch (event.type) {
            case "payment_intent.succeeded":{
                const paymentIntent = event.data.object;
                const sessionList = await stripe.checkout.sessions.list({
                    payment_intent: paymentIntent.id,
                });
                const session = sessionList.data[0];
                const {transactionId, appId} = session.metadata;

                if(appId === 'quickgpt'){

                    const transaction = await Transaction.findById({_id: transactionId, isPaid: false});

                    // update user account
                    await User.updateOne({_id: transaction.userId}, {$inc: {credits: transaction.credits}});

                    // mark transaction as paid
                    transaction.isPaid = true;
                    await transaction.save();
                }else{
                    return response.json({ received: true, message: "ignord event invalid app" });
            }
            break;
        }
            default:
                console.log("Unhandled event type:", event.type);
                break;
         }
         response.json({ received: true });
        
    } catch (error) {
        console.error("Webhook processing error:", error);
        response.status(500).send("Internal server Error");
    }
}