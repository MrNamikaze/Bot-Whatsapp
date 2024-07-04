import mysql from 'mysql'

export default {
    cmd: ['welcome'],
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
                    const bot_pesan = xt.body.replace(".welcome ", "")
                    if(pesan_bot.length == 1){
                      msg.reply('Masukkan intro!!')
                    }
                    else{
                      var id_grup = xt.group.id
                      var nama_grup = xt.group.name
                      var intro_grup = xt.body.replace(".welcome ", "")
                        con.connect(function(err) {
                            if (err) throw err;
                            con.query("SELECT * FROM intro_grup WHERE id_grup = '"+id_grup+"'", function (err, result) {
                              if (err) throw err;
                              // console.log(result[0].intro_grup)
                              // msg.reply(result[0].intro_grup)
                              if(result.length === 0){
                                var sql = "INSERT INTO intro_grup (id_grup, nama_grup, intro_grup, status) VALUES ('"+id_grup+"', '"+nama_grup+"', '"+bot_pesan+"', 'enable')";
                                con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    msg.reply('Set Welcome berhasil dibuat dan diaktifkan')
                                });
                              }
                              else{
                                var sql = "UPDATE intro_grup SET nama_grup = '"+nama_grup+"', intro_grup = '"+bot_pesan+"' WHERE id_grup = '"+id_grup+"';";
                                con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    msg.reply('Set Welcome berhasil diubah dan diaktifkan')
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