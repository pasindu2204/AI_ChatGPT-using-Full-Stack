import Chat from '../models/Chat.js';

// text-base AI chat meassage controller
export const textMeassageController = async (req, res) => {

    try {
        const userId = req.user._id;
        const { chatId, prompt } = req.body;

        const chat = await Chat.findOne({ _id: chatId, userId });
        chat.messages.push({
            isImage: false,
            role: 'user',
            content: prompt,
            timestamp: Date.now()
        });
        
        // this gei open gemini ai website
          const {choices} = await openai.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
        {
            role: "user",
            content: prompt,
        },
    ],
});

const reply = {...choices[0].message, timestamp: Date.now(), isImage: false};
res.json({ success: true, reply });

        chat.messages.push(reply);
        await chat.save();
        await user.updateOne({_id: userId}, { $inc: { credits: -1 }});

        

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
} 

