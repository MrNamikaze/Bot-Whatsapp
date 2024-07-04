export default {
    cmd: ['d', 'delete'],
    tag: 'grup',
    response: async (msg, client, xt) => {
        const groupMem = await xt.group.participants
        const groupMem2 = await xt.group.participants
        let no_pengirim = xt.phoneNumber
        let no_pengirim1 = no_pengirim.replace("+", "")
        let no_pengirim2 = no_pengirim1.replace("-", "")
        let no_pengirim3 = no_pengirim2.replace("-", "")
        let no_pengirim4 = no_pengirim3.replace("-", "")
        let no_pengirim5 = no_pengirim4.replace(" ", "")
        let no_bot = "6289653945341"
        xt.quoted = {}
        if (xt.is.quoted) {
            xt.quoted.msg = await msg.getQuotedMessage()
            xt.quoted.media = await xt.quoted.msg.downloadMedia()
            xt.quoted.id = xt.quoted.msg.id._serialized
        }
        if(xt.is.group){
            for (let i = 0; i < groupMem.length; i++) {
                if(no_bot == groupMem[i].id.user){
                    if(groupMem[i].isAdmin || groupMem[i].isSuperAdmin){
                        for (let j = 0; j < groupMem2.length; j++){
                            if(no_pengirim5 == groupMem2[j].id.user){
                                if(groupMem2[j].isAdmin || groupMem2[j].isSuperAdmin){
                                    if(xt.quoted.msg == undefined){
                                        await msg.reply('REPLY PESAN YANG INGIN DIHAPUS ')
                                    }
                                    else{
                                        xt.quoted.msg.delete(true)
                                    }
                                }
                                else{
                                    await msg.reply('ELU ITU BUKAN ADMIN!!')
                                }
                            }
                        }
                    }
                    else{
                        await msg.reply('JADIIN ADMIN DULU EA')
                    }
                }
            }
        }
        else{
            await msg.reply('INI FITUR GROUP TOLOL!!')
        }
    }
}