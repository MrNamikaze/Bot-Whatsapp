import mysql from 'mysql'

export default {
    cmd: ['setwelcome'],
    tag: 'grup',
    response: async (msg, client, xt) => {
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "bot_wa"
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
                    if(pesan_bot.length == 2){
                        var result = pesan_bot[1].toLowerCase();
                        if(result == 'enable'){
                          var id_grup = xt.group.id
                          con.connect(function(err) {
                              if (err) throw err;
                              con.query("SELECT * FROM intro_grup WHERE id_grup = '"+xt.group.id+"'", function (err, result) {
                                if (err) throw err;
                                if(result.length === 0){
                                  var sql = "INSERT INTO intro_grup (id_grup, intro_grup, status) VALUES ('"+id_grup+"', '', 'enable')";
                                  con.query(sql, function (err, result) {
                                      if (err) throw err;
                                      msg.reply('Set Welcome berhasil diaktifkan')
                                  });
                                }
                                else{
                                  var sql = "UPDATE intro_grup SET status = 'enable' WHERE id_grup = '"+id_grup+"';";
                                  con.query(sql, function (err, result) {
                                      if (err) throw err;
                                      msg.reply('Set Welcome berhasil diaktifkan')
                                  });
                                }
                              });
                            });
                        }
                        else if(result == 'disable'){
                          var id_grup = xt.group.id
                          con.connect(function(err) {
                              if (err) throw err;
                              con.query("SELECT * FROM intro_grup WHERE id_grup = '"+xt.group.id+"'", function (err, result) {
                                if (err) throw err;
                                if(result.length === 0){
                                  var sql = "INSERT INTO intro_grup (id_grup, intro_grup, status) VALUES ('"+id_grup+"', '', 'disable')";
                                  con.query(sql, function (err, result) {
                                      if (err) throw err;
                                      msg.reply('Set Welcome berhasil dinonaktifkan')
                                  });
                                }
                                else{
                                  var sql = "UPDATE intro_grup SET status = 'disable' WHERE id_grup = '"+id_grup+"';";
                                  con.query(sql, function (err, result) {
                                      if (err) throw err;
                                      msg.reply('Set Welcome berhasil dinonaktifkan')
                                  });
                                }
                              });
                            });
                        }
                        else{
                          msg.reply('Masukkan perintah dengan benar!!')
                        }
                      }
                      else if(pesan_bot.length == 1){
                        msg.reply('Ketik enable/disable!!')
                      }
                      else{
                        msg.reply('Masukkan perintah dengan benar!!')
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