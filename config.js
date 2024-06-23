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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_12_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDQzLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvR09xNEZhcysrMzhjUnVNZ0JoSFRLZjR1THFxcGdreWRxcHVMNVJsVk1vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJraUtjMlJlRFRsdW1LTGd2cDRkNjZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYzMjUwNjQ4LTIxNzktNDJhNS1iMTYxLWNlYWRiNjdmNjY3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODYsXG4gICAgICA1MCxcbiAgICAgIDEwMSxcbiAgICAgIDE2NixcbiAgICAgIDY2LFxuICAgICAgMTYzLFxuICAgICAgNDMsXG4gICAgICAxODksXG4gICAgICA0MyxcbiAgICAgIDQsXG4gICAgICAxNDksXG4gICAgICAyMjUsXG4gICAgICAxODYsXG4gICAgICA5MCxcbiAgICAgIDQ3LFxuICAgICAgMTg1LFxuICAgICAgMjM2LFxuICAgICAgMTI2LFxuICAgICAgNTYsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMjA5LFxuICAgICAgMTExLFxuICAgICAgMjEwLFxuICAgICAgMjIxLFxuICAgICAgMTkyLFxuICAgICAgMTY5LFxuICAgICAgNDIsXG4gICAgICA1LFxuICAgICAgMTk5LFxuICAgICAgMzAsXG4gICAgICAzNyxcbiAgICAgIDU0LFxuICAgICAgMjIxLFxuICAgICAgNzUsXG4gICAgICA1MCxcbiAgICAgIDE0NyxcbiAgICAgIDEyNyxcbiAgICAgIDIzMixcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxBVktRTVgzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQxNjIwNjE3OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjA3NzQ2NTY5MDk0NTM6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZpOGJnRkVLdUc0TE1HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1MlRIajhyRmF0T2VPclpkZ1E4ckJQc3lMb0tVRjNoM0NuNmdtd1hKRmpnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhLcmptbW5hbWtMN2hXeGI1bld1UE9aRzgyWVAzajFsdDR1T0hhS1B4cVBwSmJvVk1pZU02RW5JS0hhOU1IKzNrbGR6UENLeTlDZ2x6VHgyblM5MERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImthSE1ZVFlUd21uRThqNStuNWdnazNOeTJ2RmpueVZ2YmJaZElQQ280dW1VNHFhNVFRQjVxMHhiN2FmQmRhRXdQcExPVS9zNUxHemM1R3hQYzJQQkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDE2MjA2MTc6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTQxMTY2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Emperor-md",
  ownername:process.env.OWNER_NAME|| "Emperor",


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
