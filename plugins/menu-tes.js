import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let imgr = fla.getRandom()
    let pp = imgr + 'Menu Info'
    let name = await conn.getName(who)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    
    let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: true,
        money: 0,
        pasangan: "",
      }
     }
     
  let cap = `${htki} ğğğğ ğğğğ ${htka}
  
â¥ *ğğğğ USER*
  â ğğğºğ : ${name}
  â ğğ­ğğ­ğ®ğ¬ : ${who.premiumTime > 0 ? 'Premium' : 'Free'}
  â Lğ¢ğºğ¢ğ­ : ${limit}
  â Sğğ¥ğğ¼ : Rğ© ${money}
  â ğğ±ğ© : ${exp}
  â ğğ¼ğ¥ğ : ${role}
  â ğğ ğ : ${age}

â¥ *ğğğğ ğğğ*
  â Rğ®ğ§ğ§ğ¢ğ§ğ  Oğ§ : Pğğ§ğğ¥
  â Mğ¼ğğ : Public
  â ğğ¢ğºğ : ${time} ï¹É¢á´á´ +5:30ï¹
  â ğğğ­ğ : ${date}
  â ğğ¼ğ­ğğ¥ ğğğğ­ğ®ğ«ğ : ${totalf.length}
  â ğğ¬ğğ« ğğğ§ğ§ğğ : ${users.length}

${global.cmenua}
  `
await conn.send2ButtonDoc(m.chat, cap, botdate, 'ğğ¢ğ¬ğ­ğğğ§ğ®', '.listmenu', 'ğğğ¬ğğ¼ğğ«ğ', '.db', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: 'Â© ğµğ²ğ»ğ¯ğ¼ğ',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: 'Â© ğµğ²ğ»ğ¯ğ¼ğ',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: bottime  
				}
			}
})
/*await conn.send2ButtonVid(m.chat, pp, cap, botdate, 'ğğ¢ğ¬ğ­ğğğ§ğ®', '.listmenu', 'ğğğ¬ğğ¼ğğ«ğ', '.db', m, adReply)*/
}

handler.command = /^(m)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }