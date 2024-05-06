const fs = require('fs')
const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')

global.d = new Date()
global.calender = d.toLocaleDateString('id')

    //General Settings 
global.apikey = 'ptla_aORomnjMxKbutwJmXJmaB9bPORK7I0NyjAIxxtwhMCr' //Ganti pake apikey panel lu
global.capikey = 'ptlc_U5fwq86umF5wiwy8cI2VwTcP5jqBCi4X9KYmNW4o8X2' //Ganti Pake Capikey Panel Lu
global.domain = 'https://order.jasavirtex.pro'
global.eggsnya = '15' //Ganti Pake Eggs Panel Lu
global.location = '1' //Ganti Pake Location Panel Lu
global.prefa = ['','!','.',',','🐤','🗿']
global.Contributor = '254104301695'
global.NamaOwner = '𝖐𝖎𝖓𝖌 𝖘𝖆𝖒' //gausah diganti 
global.sessionName = 'ryokunsession'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = '𝕾𝖕𝖎𝖉𝖊𝖗 - 𝖂𝖊𝖇 ' //ganti aj klo mau
global.author = '𝖐𝖎𝖓𝖌 𝖘𝖆𝖒' //ganti aj klo mau
global.packname = '🕷️ 𝕾𝖕𝖎𝖉𝖊𝖗🕷️ 🕸️𝖂𝖊𝖇🕸️' //ganti aj klo mau
global.yt = 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk' //gausah diganti
global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`

global.country = `254`

global.system = {
    gmail: `samuelcircute@gmail.com`,
}

   //Respon
global.mess = { // bagian ini gausah diganti 
    ingroup: 'I cant be funny, this feature is specifically for groups💢',
    admin: '❗Youre not a stupid admin, you won't be able to use this feature. Awokawokawok 😝',
    owner: 'Wow! , youre not my owner bro🗣️',
    premium: 'You are not a premium user, you cant access this feature because youre not premium, aowkawokawok🐦',
    seller: 'Youre not a seller, so you wont be able to use it😹',
    usingsetpp: 'Setpp can only be used by the owner, do you think I'm stupid? 🤓',
    wait: 'Wait processing🕙',
    success: '🌆Success darling😆',
    bug response: '> 🌆Successful Send Bug, Must Pause 1 Minute'
}

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})