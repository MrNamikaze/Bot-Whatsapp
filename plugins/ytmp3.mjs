// import YoutubeMp3Downloader from 'youtube-mp3-downloader'
// import pkg from 'whatsapp-web.js'
// const {MessageMedia} = pkg
// export default {
//     cmd: ['ytmp3'],
//     tag: 'info',
//     info: '',
//     response: async (msg, client, xt) => {
//         var YD = new YoutubeMp3Downloader({
//             "ffmpegPath": "ffmpeg",        // FFmpeg binary location
//             "outputPath": "assets",    // Output file location (default: the home directory)
//             "youtubeVideoQuality": "highestaudio",  // Desired video quality (default: highestaudio)
//             "queueParallelism": 2,                  // Download parallelism (default: 1)
//             "progressTimeout": 2000,                // Interval in ms for the progress reports (default: 1000)
//             "allowWebm": false                      // Enable download from WebM sources (default: false)
//         });
        
//         //Download video and save as MP3 file
//         YD.download("pqw4O9LerGc");
//         const bare = xt.from
//         YD.on("finished", function(err, data) {
//             // console.log('./'+data.videoTitle);
//             const media = MessageMedia.fromFilePath('./'+data.file);
//             // client.sendMessage(xt.from, media);
//             client.sendMessage(bare, media, {
//                 quotedMessageId: msg.id._serialized,
//             })
//         });
        
//         YD.on("error", function(error) {
//             msg.reply('Error, Harap ulang lagi!!')
//             // console.log(error);
//         });
//         var ae = 'a'
//         YD.on("progress", function(progress) {
//             if(ae == 'a'){
//                 client.sendMessage(xt.from, 'Sabar ya!!', {
//                     quotedMessageId: msg.id._serialized,
//                 })
//                 ae = 'b'
//             }
//         });
//     }
// }