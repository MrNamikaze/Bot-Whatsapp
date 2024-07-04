// import  ytdl from 'ytdl-core'
// import fs from 'fs'
// import pkg from 'whatsapp-web.js'
// const {MessageMedia} = pkg
// export default {
//     cmd: ['ytmp4'],
//     tag: 'info',
//     info: '',
//     response: async (msg, client, xt) => {
//         // client.sendMessage(xt.from, media, {caption: `*Owner*: @${owner.number}`}, {
//         //     quotedMessageId: msg.id._serialized,
//         //     mentions: [no_pengirim5]
//         // })
//         var title = (Math.random() * (999999999 - 111111111) + 111111111)
//         var title1 = Math.trunc(title)
//         const videoId = 'https://www.youtube.com/watch?v=_jW0WrjwiVI';
//         var titleFormat = title1+'.mp4'
//         let no_pengirim = xt.phoneNumber
//         let no_pengirim1 = no_pengirim.replace("+", "")
//         let no_pengirim2 = no_pengirim1.replace("-", "")
//         let no_pengirim3 = no_pengirim2.replace("-", "")
//         let no_pengirim4 = no_pengirim3.replace("-", "")
//         let no_pengirim5 = no_pengirim4.replace(" ", "")
//         // Get video info from YouTube
//         const bare = xt.from
//         ytdl.getInfo(videoId).then((info) => {
        
//         client.sendMessage(xt.from, 'Sabar ya!!', {
//             quotedMessageId: msg.id._serialized,
//         })
//         // Select the video format and quality
//         const format = ytdl.chooseFormat(info.formats,{quality:"18"});
//         // Create a write stream to save the video file

//         const outputFilePath = './assets/'+titleFormat;
//         const outputStream = fs.createWriteStream(outputFilePath);
//         // Download the video file
//         ytdl.downloadFromInfo(info, { format: format }).pipe(outputStream);
//         // When the download is complete, show a message
//         outputStream.on('finish', () => {
//             // console.log(`Finished downloading: ${outputFilePath}`);
//             const media = MessageMedia.fromFilePath(outputFilePath);
//             client.sendMessage(bare, media, {
//                 caption: 'Done gan',
//                 quotedMessageId: msg.id._serialized,
//             })
//         });
//         }).catch((err) => {
//             msg.reply('Error, Harap ulang lagi!!')
//         });
//     }
// }