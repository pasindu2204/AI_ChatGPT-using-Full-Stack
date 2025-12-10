import axios from 'axios';
import Chat from '../models/Chat.js';
import user from '../models/userModel.js';
import imageKit from '../configs/imageKit.js';

import { genAI } from '../configs/genAI.js';  // correct path to your genAI.js



// TEXT BASED AI CONTROLLER
export const textMessageController = async (req, res) => {
    try {
        const userId = req.user._id;

        // check user credits
        if (req.user.credits < 1) {
            return  res.json({ success: false, message: "You don't have enough credits to use this feature" });
        }

        const { chatId, prompt } = req.body;

        // find chat
        const chat = await Chat.findOne({ _id: chatId, userId });

        // push user message
        chat.messages.push({
            isImage: false,
            role: 'user',
            content: prompt,
            timestamp: Date.now()
        });

// 
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

                // Generate content
                const result = await model.generateContent(req.body.prompt);

                // Get text
                const aiText = result.response.text();

                // Prepare reply object
                const reply = {
                message: aiText,        // store AI text here
                timestamp: Date.now(),
                isImage: false
                };

                // Send response
                res.json({ success: true, reply });


//         const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// const result = await model.generateContent(req.body.prompt);

// const aiText = result.response.text();


        // call openai/gemini api
        // const {choices} = await openai.chat.completions.create({
        //     model: "gemini-2.0-flash",
        //     messages: [
               
        //         {
        //             role: "user",
        //             content: prompt,
        //         }
        //     ]
        // });

        // const reply = {...choices?.[0].message, timestamp: Date.now(), isImage: false};
        // res.json({ success: true, reply });


        // push AI reply
        chat.messages.push(reply);
        await chat.save();

        // deduct credits
        await user.updateOne({ _id: userId }, { $inc: { credits: -1 } });

        

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}


// IMAGE GENERATION CONTROLLER
export const imageMessageController = async (req, res) => {
    try {
        const userId = req.user._id;
          // check user credits
        if (req.user.credits < 2) {
            return res.json({ success: false, message: "You don't have enough credits to use this feature" });
        }

        const { chatId, prompt, isPublished } = req.body;
        // find chat
        const chat = await Chat.findOne({ _id: chatId, userId });
        // if (!chat) return res.json({ success: false, message: "Chat not found" });

        // push user message
        chat.messages.push({
            isImage: false,
            role: 'user',
            content: prompt,
            timestamp: Date.now()
        });

        // encode prompt
        const encodePrompt = encodeURIComponent(prompt);

        // GENERATE IMAGE URL (fixed)
        const generatedImageUrl =
            `${process.env.IMAGEKIT_URL_ENDPOINT}/ik-genimg-prompt-${encodePrompt}/quickgpt/${Date.now()}.png?tr=w-800,h-800`;

        // fetch generated from imagekit
        const aiImageResponse = await axios.get(generatedImageUrl, {
            responseType: 'arraybuffer'
        });

        // convert to base64
        const base64Image = `data:image/png;base64,${Buffer.from(aiImageResponse.data, "binary").toString('base64')}`;

        // upload to imagekit
        const uploadResponse = await imageKit.upload({
            file: base64Image,
            fileName: `${Date.now()}.png`,
            folder: 'quickgpt'
        });

        const reply = {
            role: 'assistant',
            content: uploadResponse.url,
            timestamp: Date.now(),
              isImage: true,
            isPublished : isPublished || false
        };

        // send response
        res.json({ success: true, reply });

        // save chat
        chat.messages.push(reply);
        await chat.save();

        // deduct credits
        await user.updateOne({ _id: userId }, { $inc: { credits: -2 } });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
