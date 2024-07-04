import mysql from 'mysql'

export default {
    cmd: ['leave'],
    tag: 'grup',
    response: async (msg, client, xt) => {
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "bot_wa",
            charset: "utf8mb4"
        });
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
                    const pesan = await xt.body
                    const pesan_bot = pesan.split(" ");
                    const bot_pesan = xt.body.replace(".leave ", "")
                    if(pesan_bot.length == 1){
                      msg.reply('Masukkan outro!!')
                    }
                    else{
                      var id_grup = xt.group.id
                      var nama_grup = xt.group.name
                      var outro_grup = xt.body.replace(".leave ", "")
                        con.connect(function(err) {
                            if (err) throw err;
                            con.query("SELECT * FROM outro_grup WHERE id_grup = '"+id_grup+"'", function (err, result) {
                              if (err) throw err;
                              // console.log(result[0].outro_grup)
                              // msg.reply(result[0].outro_grup)
                              if(result.length === 0){
                                var sql = "INSERT INTO outro_grup (id_grup, nama_grup, outro_grup, status) VALUES ('"+id_grup+"', '"+nama_grup+"', '"+bot_pesan+"', 'enable')";
                                con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    msg.reply('Set leave berhasil dibuat dan diaktifkan')
                                });
                              }
                              else{
                                var sql = "UPDATE outro_grup SET nama_grup = '"+nama_grup+"', outro_grup = '"+bot_pesan+"' WHERE id_grup = '"+id_grup+"';";
                                con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    msg.reply('Set leave berhasil diubah dan diaktifkan')
                                });
                              }
                            });
                          });
                    }
                  }
                  else{
                      await msg.reply('ELU ITU BUKAN ADMIN!!')
                  }
              }
          }
          //
        }
        else{
            await msg.reply('INI FITUR GROUP TOLOL!!')
        }
    }
}