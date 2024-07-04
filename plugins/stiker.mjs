import '../config.mjs'
import PhoneNumber from'awesome-phonenumber'
import moment from 'moment-timezone'

export default {
    cmd: ['s', 'stiker', 'sticker'],
    tag: 'stiker',
    info: '',
    response: async (msg, client, xt) => {
        xt.quoted = {}
        if (xt.is.quoted) {
            xt.quoted.msg = await msg.getQuotedMessage()
            xt.quoted.media = await xt.quoted.msg.downloadMedia()
            xt.quoted.id = xt.quoted.msg.id._serialized
        }
        //console.log(xt.quoted.msg.type)
        if(xt.is.group){
            let dmy = moment.tz('Asia/Jakarta').format('DD-MM-YYYY')
            let hms = moment.tz('Asia/Jakarta').format('HH:mm:ss')
            let number=PhoneNumber(`+${xt.number}`).getNumber('international')
            let stickerName = `${bot.name3}\n@${owner.ig}`, stickerAuthor = `Stiker dibuat oleh:\n${number}`

            //const quotedMsg = await msg.getQuotedMessage()
            if (msg.hasMedia && (xt.type == "image" || xt.type == "video")) {
                //let media = await msg.downloadMedia()
                return msg.reply(xt.media.msg, xt.from, { sendMediaAsSticker: true, stickerName, stickerAuthor })
            } else if (xt.is.quoted && (xt.quoted.msg.type == "image" || xt.quoted.msg.type == "video")) {
                //let media = await xt.quoted.downloadMedia()
                return msg.reply(xt.quoted.media, xt.from, { sendMediaAsSticker: true, stickerName, stickerAuthor })
            } else {
                return msg.reply("*[ ! ] Reply/kirim pesan media*")
            }
        }
        else{
            if(xt.is.owner){
                let dmy = moment.tz('Asia/Jakarta').format('DD-MM-YYYY')
                let hms = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                let number=PhoneNumber(`+${xt.number}`).getNumber('international')
                let stickerName = `${bot.name3}\n@${owner.ig}`, stickerAuthor = `Stiker dibuat oleh:\n${number}`

                //const quotedMsg = await msg.getQuotedMessage()
                if (msg.hasMedia && (xt.type == "image" || xt.type == "video")) {
                    //let media = await msg.downloadMedia()
                    return msg.reply(xt.media.msg, xt.from, { sendMediaAsSticker: true, stickerName, stickerAuthor })
                } else if (xt.is.quoted && (xt.quoted.msg.type == "image" || xt.quoted.msg.type == "video")) {
                    //let media = await xt.quoted.downloadMedia()
                    return msg.reply(xt.quoted.media, xt.from, { sendMediaAsSticker: true, stickerName, stickerAuthor })
                } else {
                    return msg.reply("*[ ! ] Reply/kirim pesan media*")
                }
            }
            else{
                return msg.reply("ELU BUKAN OWNER TOLOL!!")
            }
        }
        
    }
}