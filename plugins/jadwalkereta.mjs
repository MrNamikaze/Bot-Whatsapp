// import puppeteer from 'puppeteer'
// import axios from 'axios'
// import fs from 'fs'
// import path from 'path'

// export default {
//     cmd: ['jadwalkereta'],
//     tag: 'krl',
//     response: async (msg, client, xt) => {
//         const pesan = await xt.body
//         const pesan_kereta = pesan.split(" ");
//         if(pesan_kereta.length == 4){
//             let text = pesan_kereta[1];
//             let result = text.toUpperCase();
//             let kode_kereta = ''
//             if(result == 'ANCOL'){
//                 kode_kereta = 'AC'
//             }
//             else if(result == 'ANGKE'){
//                 kode_kereta = 'AK'
//             }
//             else if(result == 'BOJONGGEDE'){
//                 kode_kereta = 'BJD'
//             }
//             else if(result == 'BEKASI'){
//                 kode_kereta = 'BKS'
//             }
//             else if(result == 'BEKASITIMUR'){
//                 kode_kereta = 'BKST'
//             }
//             else if(result == 'BOJONGINDAH'){
//                 kode_kereta = 'BOI'
//             }
//             else if(result == 'BOGOR'){
//                 kode_kereta = 'BOO'
//             }
//             else if(result == 'BATUCEPER'){
//                 kode_kereta = 'BPR'
//             }
//             else if(result == 'BUARAN'){
//                 kode_kereta = 'BUA'
//             }
//             else if(result == 'CIBINONG'){
//                 kode_kereta = 'CBN'
//             }
//             else if(result == 'CICAYUR'){
//                 kode_kereta = 'CC'
//             }
//             else if(result == 'CIBITUNG'){
//                 kode_kereta = 'CIT'
//             }
//             else if(result == 'CILEJIT'){
//                 kode_kereta = 'CJT'
//             }
//             else if(result == 'CIKINI'){
//                 kode_kereta = 'CKI'
//             }
//             else if(result == 'CIKARANG'){
//                 kode_kereta = 'CKR'
//             }
//             else if(result == 'CIKOYA'){
//                 kode_kereta = 'CKY'
//             }
//             else if(result == 'CILEBUT'){
//                 kode_kereta = 'CLT'
//             }
//             else if(result == 'CISAUK'){
//                 kode_kereta = 'CSK'
//             }
//             else if(result == 'CITAYAM'){
//                 kode_kereta = 'CTA'
//             }
//             else if(result == 'CITERAS'){
//                 kode_kereta = 'CTR'
//             }
//             else if(result == 'CAKUNG'){
//                 kode_kereta = 'CUK'
//             }
//             else if(result == 'CAWANG'){
//                 kode_kereta = 'CW'
//             }
//             else if(result == 'DARU'){
//                 kode_kereta = 'DAR'
//             }
//             else if(result == 'DEPOK'){
//                 kode_kereta = 'DP'
//             }
//             else if(result == 'DEPOKBARU'){
//                 kode_kereta = 'DPB'
//             }
//             else if(result == 'DURENKALIBATA'){
//                 kode_kereta = 'DRN'
//             }
//             else if(result == 'DURI'){
//                 kode_kereta = 'DU'
//             }
//             else if(result == 'GONDANGDIA'){
//                 kode_kereta = 'GDD'
//             }
//             else if(result == 'GROGOL'){
//                 kode_kereta = 'GGL'
//             }
//             else if(result == 'GANGSENTIONG'){
//                 kode_kereta = 'GST'
//             }
//             else if(result == 'JAKARTAKOTA'){
//                 kode_kereta = 'JAKK'
//             }
//             else if(result == 'JAYAKARTA'){
//                 kode_kereta = 'JAY'
//             }
//             else if(result == 'JURANGMANGU'){
//                 kode_kereta = 'JMU'
//             }
//             else if(result == 'JATINEGARA'){
//                 kode_kereta = 'JNG'
//             }
//             else if(result == 'JUANDA'){
//                 kode_kereta = 'JUA'
//             }
//             else if(result == 'KARET'){
//                 kode_kereta = 'KAT'
//             }
//             else if(result == 'KEBAYORAN'){
//                 kode_kereta = 'KBY'
//             }
//             else if(result == 'KALIDERES'){
//                 kode_kereta = 'KLD'
//             }
//             else if(result == 'KLENDER'){
//                 kode_kereta = 'KLD'
//             }
//             else if(result == 'KLENDERBARU'){
//                 kode_kereta = 'KLDB'
//             }
//             else if(result == 'KEMAYORAN'){
//                 kode_kereta = 'KMO'
//             }
//             else if(result == 'KRAMAT'){
//                 kode_kereta = 'KMT'
//             }
//             else if(result == 'KAMPUNGBANDAN'){
//                 kode_kereta = 'KPB'
//             }
//             else if(result == 'KRANJI'){
//                 kode_kereta = 'KRI'
//             }
//             else if(result == 'LENTENGAGUNG'){
//                 kode_kereta = 'LNA'
//             }
//             else if(result == 'MANGGABESAR'){
//                 kode_kereta = 'MGB'
//             }
//             else if(result == 'MAJA'){
//                 kode_kereta = 'MJ'
//             }
//             else if(result == 'MANGGARAI'){
//                 kode_kereta = 'MRI'
//             }
//             else if(result == 'M.TELAGAMURNI'){
//                 kode_kereta = 'TLM'
//             }
//             else if(result == 'NAMBO'){
//                 kode_kereta = 'NMO'
//             }
//             else if(result == 'PONDOKRANJI'){
//                 kode_kereta = 'PDJ'
//             }
//             else if(result == 'PORIS'){
//                 kode_kereta = 'PI'
//             }
//             else if(result == 'PALMERAH'){
//                 kode_kereta = 'PLM'
//             }
//             else if(result == 'PONDOKCINA'){
//                 kode_kereta = 'POC'
//             }
//             else if(result == 'PONDOKJATI'){
//                 kode_kereta = 'POK'
//             }
//             else if(result == 'PARUNGPANJANG'){
//                 kode_kereta = 'PRP'
//             }
//             else if(result == 'PSSENEN'){
//                 kode_kereta = 'PSE'
//             }
//             else if(result == 'PESING'){
//                 kode_kereta = 'PSG'
//             }
//             else if(result == 'PSMINGGU'){
//                 kode_kereta = 'PSM'
//             }
//             else if(result == 'PSMINGGUBARU'){
//                 kode_kereta = 'PSMB'
//             }
//             else if(result == 'RAJAWALI'){
//                 kode_kereta = 'RJW'
//             }
//             else if(result == 'RANGKASBITUNG'){
//                 kode_kereta = 'RK'
//             }
//             else if(result == 'RAWABUNTU'){
//                 kode_kereta = 'RU'
//             }
//             else if(result == 'RAWABUAYA'){
//                 kode_kereta = 'RW'
//             }
//             else if(result == 'SUDIMARA'){
//                 kode_kereta = 'SDM'
//             }
//             else if(result == 'SERPONG'){
//                 kode_kereta = 'SRP'
//             }
//             else if(result == 'SUDIRMAN'){
//                 kode_kereta = 'SUD'
//             }
//             else if(result == 'SAWAHBESAR'){
//                 kode_kereta = 'SW'
//             }
//             else if(result == 'TAMBUN'){
//                 kode_kereta = 'TB'
//             }
//             else if(result == 'TEBET'){
//                 kode_kereta = 'TEB'
//             }
//             else if(result == 'TENJO'){
//                 kode_kereta = 'TEJ'
//             }
//             else if(result == 'TIGARAKSA'){
//                 kode_kereta = 'TGS'
//             }
//             else if(result == 'TANAHABANG'){
//                 kode_kereta = 'THB'
//             }
//             else if(result == 'TAMANKOTA'){
//                 kode_kereta = 'TKO'
//             }
//             else if(result == 'TANGERANG'){
//                 kode_kereta = 'TNG'
//             }
//             else if(result == 'TANJUNGBARAT'){
//                 kode_kereta = 'TNT'
//             }
//             else if(result == 'TANJUNGPRIUK'){
//                 kode_kereta = 'TPK'
//             }
//             else if(result == 'TANAHTINGGI'){
//                 kode_kereta = 'TTI'
//             }
//             else if(result == 'UNINDONESIA'){
//                 kode_kereta = 'UI'
//             }
//             else if(result == 'UNPANCASILA'){
//                 kode_kereta = 'UP'
//             }
//             //
//             axios.get('https://api-partner.krl.co.id/krlweb/v1/schedule?stationid='+kode_kereta+'&timefrom='+pesan_kereta[2]+':00&timeto='+pesan_kereta[3]+':00')
//             .then(response => {
//                 // Log the response data
//                 var kereta1 = 'JADWAL KERETA \n\n'
//                 for(var a = 0; a < response.data.data.length; a++){
//                     var b = a+1
//                     var kereta2 = ''
//                     kereta2 += b+'. Nama Rute: '+response.data.data[a].route_name+' | Jam: '+response.data.data[a].time_est+'\n\n'
//                     kereta1 += kereta2
//                 }
//                 msg.reply(kereta1)
//             })
//             .catch(error => {
//                 // Handle errors
//                 msg.reply('ERROR')
//             });
//         }
//         else if(pesan_kereta.length == 1){
//             msg.reply('Untuk menggunakan fitur ini caranya adalah \n\n.jadwalkereta tanjungbarat 07 08 \n\napabila nama stasiun terdiri dari dua kata atau lebih maka tidak usah memakai spasi, dan untuk stasiun yang ada kata PASAR diganti PS atau UNIVERSITAS diganti UN \n\nuntuk jamnya dalam satuan 24 jam dan apabila dibawah jam 10 maka angka 0 tetap ditulis')
//         }
//         else{
//             msg.reply('perintah anda ada yang salah')
//         }
//     }
// }