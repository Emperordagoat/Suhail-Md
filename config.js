const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348111971782";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_24_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTkzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc3LFxuICAgICAgICA5NixcbiAgICAgICAgMTQzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibVlDZG9lbzFmYUtTMjdSMUVjK2NkQXJ3T2VlUmVrYU5XWGdVcGQ4blBWbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZFVRNkZTMjNRY1duYjN1VEpSamtxQVwiLFxuICBcInBob25lSWRcIjogXCJiMjhhMzRjZS1iODRiLTQ1M2EtYTY3ZC0wMTQ4ZTA3MzEwOTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgNjIsXG4gICAgICAxNzgsXG4gICAgICA3NSxcbiAgICAgIDIxMSxcbiAgICAgIDIyMixcbiAgICAgIDY1LFxuICAgICAgOTYsXG4gICAgICA2NixcbiAgICAgIDIwNCxcbiAgICAgIDE1OSxcbiAgICAgIDQxLFxuICAgICAgNzksXG4gICAgICAxNjEsXG4gICAgICAyMjQsXG4gICAgICA5MyxcbiAgICAgIDE1OSxcbiAgICAgIDIzMCxcbiAgICAgIDEyNCxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICA3OCxcbiAgICAgIDY2LFxuICAgICAgMzcsXG4gICAgICA5NCxcbiAgICAgIDE3MSxcbiAgICAgIDc1LFxuICAgICAgNDgsXG4gICAgICAxMDMsXG4gICAgICA2MixcbiAgICAgIDMxLFxuICAgICAgMTIsXG4gICAgICAyMjQsXG4gICAgICA4LFxuICAgICAgMTE4LFxuICAgICAgMjAyLFxuICAgICAgMTU0LFxuICAgICAgNjcsXG4gICAgICAyMixcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3WjZBMkczOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNTcwNjg5Mjo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI1NTYzNDM2MDQwMjg5OjUzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lIMDJ2NEVFTm5RNGJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaFp5V1BXSzlqVU0rU29SUUQ5eEF4anZPRXhMb0xzV1J6bHFSMlZDV0lXaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmN3NOWWdOODZGODJRdldiUWd4dzBCVWFZNFl4MnRFa3o5UGFoQW0wei9nemFvL1gwV0ZlNEYwMXdFdmRCMlhxcmd3cVVkZGpPa1pRb3orMjBKeWxnUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCOFYxSU1uaFMyQUQ4akozWHVBUjFLcHhZUHZJUW55aVNITVhuUVpTRUY5MWhGamJzOHFLbEJLNmxraVdpdVBxdVRtbG5CQnNpMEVObzFpcFhFd2VoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA1NzA2ODkyOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkxNjcwNjlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Emperor-md",
  ownername:process.env.OWNER_NAME|| "sam",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
