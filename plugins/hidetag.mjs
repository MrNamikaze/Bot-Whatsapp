export default {
    cmd: ['hidetag'],
    tag: 'grup',
    response: async (msg, client, xt) => {
        const groupMem = await xt.group.participants
        let no_pengirim = xt.phoneNumber
        let no_pengirim1 = no_pengirim.replace("+", "")
        let no_pengirim2 = no_pengirim1.replace("-", "")
        let no_pengirim3 = no_pengirim2.replace("-", "")
        let no_pengirim4 = no_pengirim3.replace("-", "")
        let no_pengirim5 = no_pengirim4.replace(" ", "")
        if(xt.is.group){
            for (let i = 0; i < groupMem.length; i++) {
                if(no_pengirim5 == groupMem[i].id.user){
                    if(groupMem[i].isAdmin || groupMem[i].isSuperAdmin){
                        if(xt.is.media){
                            client.sendMessage(xt.from, xt.media.msg, {caption: xt.body.replace(".hidetag ", "")}, {
                                quotedMessageId: msg.id._serialized,
                                mentions: groupMem.map(a => a.id._serialized)
                            })
                        }
                        else{
                            client.sendMessage(xt.from, xt.body.replace(".hidetag ", ""), {
                                quotedMessageId: msg.id._serialized,
                                mentions: groupMem.map(a => a.id._serialized)
                            })
                        }
                    }
                    else{
                        await msg.reply('ELU ITU BUKAN ADMIN!!')
                    }
                }
            }
        }
        else{
            await msg.reply('INI FITUR GROUP TOLOL!!')
        }
    }
}