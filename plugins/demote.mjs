export default {
    cmd: ['demote'],
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
                                        const pesan = xt.body
                                        const pesan1 = pesan.split(' ')
                                        // console.log(pesan1)
                                        if(pesan1.length < 2){
                                            await msg.reply('tag member atau reply pesan member yang masih ada didalam grup!!')
                                        }
                                        else{
                                            var tes_member = 'a'
                                            for (let k = 0; k < groupMem.length; k++){
                                                const no_member = pesan1[1].replace("@", "")
                                                if(no_member == groupMem[k].id.user){
                                                    tes_member = 'b'
                                                    const id_grup = xt.group.id
                                                    const id_user = groupMem[k].id.user+'@c.us'
                                                    if(groupMem[k].isAdmin || groupMem[k].isSuperAdmin){
                                                        if(no_bot != groupMem[k].id.user){
                                                            const chat = await client.getChatById(id_grup); // Group Id
                                                            await chat.demoteParticipants([id_user]);
                                                            client.sendMessage(xt.from, `@${groupMem[k].id.user} Turun pangkat`, {
                                                                quotedMessageId: msg.id._serialized,
                                                                mentions: [id_user]
                                                            })
                                                        }
                                                        else{
                                                            await msg.reply('Berhentikan bot secara manual!')
                                                        }
                                                        
                                                    }
                                                    else{
                                                        await msg.reply('Member tidak menjadi admin')
                                                    }
                                                    // console.log(id_grup+'\n'+id_user)
                                                    break
                                                }
                                                else{
                                                    tes_member = 'a'
                                                }
                                            }
                                            if(tes_member == 'a'){
                                                await msg.reply('member yang anda tag atau reply tidak ada didalam grup!!')
                                            }
                                            // console.log(tes_member)
                                        }
                                    }
                                    else{
                                        var tes_member = 'a'
                                        const id_grup = xt.quoted.msg.id.remote
                                        const id_user = xt.quoted.msg.id.participant._serialized
                                        for (let l = 0; l < groupMem.length; l++){
                                            var no_member = id_user.replace("@c.us", "")
                                            if(no_member == groupMem[l].id.user){
                                                tes_member = 'b'
                                                if(groupMem[l].isAdmin || groupMem[l].isSuperAdmin){
                                                    if(no_bot != groupMem[l].id.user){
                                                        const chat = await client.getChatById(id_grup); // Group Id
                                                        await chat.demoteParticipants([id_user])
                                                        client.sendMessage(xt.from, `@${groupMem[l].id.user} Turun pangkat`, {
                                                            quotedMessageId: msg.id._serialized,
                                                            mentions: [id_user]
                                                        })
                                                    }
                                                    else{
                                                        await msg.reply('Berhentikan bot secara manual!')
                                                    }
                                                    // console.log('a')
                                                }
                                                else{
                                                    await msg.reply('Member tidak menjadi admin')
                                                    // console.log('b')
                                                }
                                                break
                                            }
                                            else{
                                                tes_member = 'a'
                                            }
                                        }
                                        if(tes_member == 'a'){
                                            await msg.reply('member yang anda tag atau reply tidak ada didalam grup!!')
                                        }
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