import fs from 'fs'
import pkg from 'whatsapp-web.js'
const { MessageMedia } = pkg

export default {
    cmd: ['lihat'],
    tag: 'info',
    response: async (msg, client, xt) => {
        xt.quoted = {}
        if (xt.is.quoted) {
            xt.quoted.msg = await msg.getQuotedMessage()
            xt.quoted.media = await xt.quoted.msg.downloadMedia()
            xt.quoted.id = xt.quoted.msg.id._serialized
        }
    	if (xt.is.quoted && xt.quoted.msg.type=='image'){
            await msg.reply(xt.quoted.media, xt.from,{ caption: (xt.quoted.msg.body) ? `Caption: ${xt.quoted.msg.body}` : ''})
        } else return msg.reply('*[ ! ] Reply pesan gambar sekali lihat*')
    }
}