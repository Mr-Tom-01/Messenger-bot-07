const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  versionconstconst: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
    
var tl = [ "Meri gf hoti to mai v usse bt krta aaj puri rt time hi time hai 🤭🤭", "Aao tmhare sath relationship post laga ke tmhe Femous kr du😊", "EK QUESTION HAI SABHI SE BTAO MAI ACHA LGTA HU YA MERI MEMES 🙈😾🤤", "Chakar arhy hein apki Ib ma aa k gir jaun>>🥺🚶🏻‍♀️", "Mout ka farishta ya Mera  rishta?🙂❤️🙊•", "Wife k sath date pe gya tha \nJis ki thi usne dhek lya", "_ Sab ko loyal bnda chahiye tw hum dhokebaz kidhar jayen? 🥺💔", "WhatsApp k last seen k elwa mera koi or scene nai hai🙂", "Hai Tamna TumhY ChaHt sy Girayn🙂",  "Finally es group kee do teen  larkiya mujH pasanD agai Hai🚶‍♂😪🌚", "میرا دل یہ پکارے آجا پیچھے والے مقام میں 🤝🙂🤞", "Suno👀\n\nKya tum mery leye surf kha kar muu sy bulbly nikal skti ho🙂🫴", "- GhUlabii آنــکھیں jh0 terii dekhii Harami Yevw Dill h0 Gya   3; 🙂 😆", "- مجھــــــے کیـــــا مــــیں تــــو سنــــگل ہــــوں 😒", "Dil ko krar Aya khud pa Pyr aya😒🙈😂", "Ehsaas kryn Bakwas nahi, Janam 🥺Shukria_😊🙆‍♂️", "Bs yar daily 3 4 crore ki zarorat mahsos Hoti hai 😂", "Begum walaw مــــــوســـــم ho rahaw haii aj to 🙂", "Shkl insani, soch ibleesi\n\nHnji apki hee ", "تـــــم میــــری بیگـــــم بنو گی کیا -🥺🖤", "LARKIO KAY BHI MAZAY HAY🥴 \nNO BRAIN NO TNSN⛑🔪⚡", "تمہارے حصے کی چُمیاں مچھر لے رہے ہیں.🙂💔", "Sirf Maggie noodles bna'ny sy Ghar nahi chalta SHABANA..🙂💔", "Wp pa add hona chahty ha apky sath ☺️💔", "- کھاؤ قسم تمہارے پاؤں کالے نہیں۔۔!!👣🙄", "Meny fail hokr bhi dekha hai Ye log shadi nh kraty 🙂💔", "Or batao kb ayga tumahara dill mujhe py😌🥺", "bht bura hu na mai? bhiin dedo apnii🙂", "Pyari Pyari ladkiyan Hazir Ho jay😁", "Kisi k pss لاش wali dp h tw send krein janu replY nahi de rhy..!", "MerKo abhi tk pink clr ki gf nh meli 😒🥺🙂💔:⁠-⁠)", "میرے مولا ایک thrkii بچــی yess کروا دے..🙂", "ایک kiss ادهار دے دو 💋\nکل واپس کردوں گا پکّا 😝", "Ajeeb ghr wale hain yr, mera phone 28% pr nikal kr apne 90% ko charge karte 𝐡𝐚𝐢𝐧-🌚", "Lagta hai mery sabar k phal  ka koi juice bna k pee gya..😐", "Dil Dany ki Umar ma  Exam's  Dy raha hoo 🙂🤝", "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Breakup k waqT kE dUa \n\n( KHUSH RAHEIN ) 🙂", "Thora sa Whatsapp number dy do naw🥺♥️", "لوٹ آؤ اور کہدو کہ \nمیں لسی پی کے سو گئی تھی😫", "Kuch Log achy ki Talaash Mein Mery Jaisy Masoom ko kho dety Hain☺️", "Tum wohi ho na jiska mood bilawaja khrab hojata h...!!!🙂", "Pyari pyari larkio ki talash ma berozgar larky add krliye hain 🥲💔", "Jab mera Message aye toh sare kaam chor kar sirf Mujhe reply kia karo😾😒", "Or Btao Real Life Ma bh itnyy Achy ho jitny social media per Bntyy ho>>🙂", "Pakistani Relationship:\nTum Feel Kro Meh Tumary uper hun 😒💔", "Us k jany k bd uski Pasnd ki Nail Polish lgaa k khana khata hu aesw lgta ha jesy wo khela rhee ha😒", "Be a Good Human.Delete GB Whatsapp💔🙂", "2 Din Pyar sy Baat kr loo tou Ammiyan bn  jatii hain🙂😒", "Girls after One Mint of Relationship...\nBegam hu mn apki🙂🤦", "Larkiyon ko achy sy pta hai kahan -Bhai- Bolna kaha -Ap- or kaha -Tum- 🙂", "Aaj mein ny Khud ko TV py dheka \n\nJab Tv Band Tha 🙂", "Qadar krlo Meri...\nKya pta Main b Panadol ki trha aik dam shaat hojun😒", "Naraz bandy ko manany ka sab sy acha tareka Ap khud us sy naraz hojaoo🙂🐣", "Jaisi meri shakal hai kunwara he marunga🙂👀", "میں نے جس دن سکول میں پہلی پوزیشن حاصل کی میں اسی دن سمجھ گیا تھا کے یہ ملک کبھی ترقی نہیں کر سکتا😐😐", "یقین کریں میٹرک کے پیپر بہت آسان ہیں.میں نے خود سات دفعہ دیئے ہیں😐", "Itni memories mere khud k dimagh mai nahi hai jitni Snapchat ny bna rkhi ha","چکی 🥌 چکی پیارا سی دلہن نکال 🙂🔪","گرمی اپنی پوری کوشش کر رہی ہے تمہاری شکلیں تمہارے آئی ڈی کارڈ سے ملانے کی.. 🤣😂👈","🤔*وہ پوچھنا یہ تھا کہ کون سی آنکھ مارنے سے*آنکھ مٹکا شروع ہوتا ھے🙈😁🤣*،،______🥀","⸙ ₍ S u k o o n ~ مـــطلـب shadi ki raat 🙂♥️✨.😂","➪𝗨𝗳𝗳𝗳𝗳➪𝗬𝗲𝗛 𝗔𝘄𝗣 𝗞𝗶𝗶 𝗥𝗲𝗗 𝗟𝗶𝗣𝗦𝗧𝗶𝗖𝗸➪🤗➪𝗞𝗼𝗡 𝗞𝗛𝗮𝗥𝗮𝗮𝗕 𝗞𝗮𝗿𝗧𝗮 𝗛𝘆_?➪😹🤣😂","➪𝗔𝘄𝗣 𝗕𝗮𝗮𝗧𝗲𝗡 𝗠𝘂𝗝𝗛 𝗦𝗮𝗬➪❤️➪𝗔𝘂𝗿➪🤨➪𝗟𝗼𝘃𝗘 𝘆𝗘𝘄 𝗠𝘂𝗪𝗮𝗮𝗛 𝗞𝗶𝗦𝗶𝗶 𝗢𝗿 𝗞𝗼𝗢 𝗕𝗼𝗼𝗟𝗧𝗮𝗬 𝗛𝗼𝗢➪🙄🙄🙄","➪𝗦𝗛𝗼𝗪𝗲𝗿 𝗟𝘆 𝗥𝗮𝗛𝗮 𝗛𝗼𝗢𝗡➪😹➪𝗞𝗼𝗢𝗶𝗶 𝗭𝗮𝗿𝗢𝗼𝗿𝗶𝗶 𝗕𝗮𝗮𝗧 𝗛𝘆 𝗧𝗼𝗢 𝗬𝗮𝗛𝗶𝗡 𝗔𝗮 𝗝𝗮𝗬𝗲𝗡➪😘😹","➪𝗦𝘂𝗡𝗼𝗢➪❤️➪𝗞𝗼𝗶𝗶 𝗠𝗘𝗿𝗔 𝗣𝗼𝗼𝗖𝗛𝗮𝗬 𝗧𝗼𝗢 𝗕𝗮𝗧𝗮 𝗗𝗲𝗡𝗮➪😎➪𝗧𝘂𝗠𝗛𝗮𝗿𝗬 𝗗𝗶𝗹𝗟 𝗠𝗲𝗶𝗡 𝗥𝗲𝗛𝗧𝗮 𝗛𝗼𝗢𝗡 𝗠𝗲𝗶𝗡➪😘🤣😎","➪🥵💋➪𝗧𝘂𝗠 𝗦𝗮𝗬 𝗝𝗼𝗢 𝗠𝗶𝗹𝗟𝗮𝗮 𝗛𝗼𝗢𝗡 𝗧𝗼𝗢 𝗞𝗮𝗠𝗭𝗼𝗢𝗥 𝗦𝗮𝗮 𝗛𝗼𝗢 𝗚𝗲𝗬𝗮 𝗛𝗼𝗢𝗡➪🤧😂","➪𝗔𝗿𝗿𝗬 𝗞𝗮𝗛𝗮𝗡 𝗦𝗬 𝗔𝗔 𝗥𝗮𝗛𝗮𝗬 𝗔𝘄𝗣 𝗠𝘂𝗡𝗛 𝗞𝗮𝗮𝗟𝗮 𝗞𝗮𝗿𝗪𝗮 𝗞𝘆➪🫣🤣","➪𝗦𝘂𝗡𝗼𝗢➪❤️➪𝗔𝗚𝗮𝗿 𝗧𝘂𝗠 𝗦𝗮𝗮𝗡𝗪𝗮𝗟𝗶𝗶 𝗛𝗼𝗢 𝗧𝗼𝗢 𝗠𝘂𝗝𝗛 𝗞𝗼𝗢 𝗔𝗪𝗮𝗮𝗭 𝗠𝗮𝗧 𝗗𝗲𝗡𝗮➪🙏🙏😹","➪𝗬𝗮𝗮𝗿 𝗕𝗮𝗿𝗧𝗮𝗡 𝗗𝗛𝗼𝗼 𝗗𝗛𝗼𝗼 𝗞𝘆 𝗧𝘂𝗠𝗛𝗮𝗿𝗔 𝗔𝗽𝗡𝗮 𝗥𝗮𝗡𝗚 𝗟𝗲𝗠𝗼𝗡_𝗠𝗮𝗫 𝗝𝗲𝗦𝗮 𝗛𝗼𝗢 𝗚𝗲𝗬𝗮 𝗛𝘆➪🙏🤣😂","➪𝗠𝗘𝗿𝗶𝗶 𝗗𝘂𝗮 𝗛𝘆. 𝗬𝗮𝗮𝗗 𝗥𝗮𝗞𝗛𝗡𝗮➪❤️➪𝗞𝗶𝗦𝗶𝗶 𝗞𝗮𝗮𝗟𝗶𝗶 𝗦𝗛𝗮𝗞𝗮𝗟 𝗦𝘆 𝗦𝗛𝗮𝗮𝗗𝗶𝗶 𝗛𝗼𝗼𝗡𝗶 𝗧𝘂𝗠𝗛𝗮𝗿𝗶𝗶➪🥰😂🙏","➪𝗢𝗣𝗘𝗿 𝗡𝗮𝗛𝗲 𝗡𝗲𝗖𝗛𝗮𝗬 𝗗𝗲𝗸𝗛➪🙄➪𝗧𝗘𝗿𝗬 𝗧𝗢 𝗣𝗮𝗢𝗼𝗡 𝗕𝗛𝗲 𝗞𝗮𝗟𝗮𝗬 𝗛𝗮𝗶𝗡➪🤧"," ➪𝗭𝗮𝗗𝗮 𝗖𝗟𝗼𝗦𝗲 𝗠𝗮𝗧 𝗛𝗼𝗢𝗡 𝗠𝗘𝗿𝗬➪🤧➪𝗠𝗨𝗝𝘆 𝘃 𝗙𝗹𝗟𝘂𝗘 𝗛𝗼𝗢 𝗝𝗮𝗡𝗮➪😝😝"," ➪𝗬𝗲𝗛 𝗠𝗮𝗮𝗟𝗧𝗮𝗬 𝗝𝗲𝗦𝗮 𝗙𝗮𝗖𝗘 𝗞𝗶𝗦𝗶𝗶 𝗢𝗿 𝗞𝗼𝗢 𝗗𝗶𝗸𝗛𝗮➪😡➪𝗠𝗲𝗶𝗡 𝗝𝘂𝗶𝗖𝗲 𝗡𝗶𝗸𝗮𝗮𝗟 𝗞𝘆 𝗥𝗮𝗞𝗛 𝗗𝗲𝗡𝗮➪🤧","➪𝗙𝗟𝗶𝗿𝗧 𝗞𝗮𝗿𝗡𝗮 𝗕𝗛𝗲 𝗧𝘂𝗠 𝗛𝗲 𝗦𝘆 𝗦𝗲𝗲𝗞𝗛𝗮 𝗛𝘆➪🖤","*اتر چکی ہو دل سے تم* اب گرمیوں میں برف مانگنے بھی مت آنا🥺🤕🤧","ماڑا ہم تم کو کیشا لگدا اے۔۔ 😛❤👀","👑 میرے آنے سے بھی سج جاتا ھے گروپ⭐🙈💎 ضروری نہیں زمین پر چاند اتارا جائے🌙👻😋😜😜","کہ رہی تھی گھر پر اکیلی ہوں...میں نے اس کے گھر چوری کروا دی 😁🤝", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂",  "chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪", "Block Your ‘’ bf ‘’ And Purpose me 🙂💔", "Sary Rishtydaron ky number delete krdiye🔪Ab Safe feel krha hu🙂🥹", "LUX Khane se Dmag teez hota-//-^)) 🙂", " K0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN 🙂", "  ســـــــٹیــل دی قــولــی ورگــا منـــــہ اے تـــــــیرا 😾🙌",  "زہـــؔـرکــــھّــــانــــےســــے رؘنــــگ گـــؔـورا ہـــؔـوتــــا ہــــے!🤗🤭❣️😘", "𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒",  "سنو مجھے اللہ سے مانگ لو نہ۔۔۔۔۔🥹🤭آپ تو شکل سے بھی مانگنے والے لگتے ہوl۔۔♥️",  "<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸", "Lips kissing is not Romance It's sharing Bacteria>>>🙂", "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼", "Waiting 💘for Shadi'w ky baad wali Halal Chummian 🫦🫶🥹",  "Imagine I am your Ex 🥲say whatever you want to say", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓",  "Agar Payarw hota to Real DP lagataw - :) 💔🤌", "Time Pass ky liye 1 Female Chat partner Chahye 🙂❤️‍🩹🫶", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo",  "Pta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔",  "💚🦋 Iʈɴɪ⃪͡  𝗰ᴜ⃪⃨ʈə  D𝐩 𝐦ʈ  Ɩ𝐠ɑɣɑ kɽ𝐨͢ kɪ⃪͡ssɪ⃪͡ 💋 ᴡ⃪⃨ɪ⃪͡ssɪ⃪͡ kɑɽɴə kɑ ɖɪ⃪͡Ɩ kɑɽʈɑ нɑɪ⃪͡ 😗😗",  "❤- App kı Photo To Bahut cutƏ hıı'-😍- ☆'Koıı Ətna Bhıı CutƏ Hota hƏ💋🙊👈🏻", "➪😘oye shaper bola kya hai msala 🙂",  "Koi 70 Rupee dy do Mera Pas 20 Han Sting Peeni Hai🥺", "Na Pakistan me rehny k pese hain na niklny k🤝🏽🙂💔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺",  "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں",  "*😈✨آ تجــᷭھے خـــراب کــــروں💋🤤*",  "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", " جہاں پیاری لڑکیاں وہاں میں 🙂❤️🥀 " , "بھای جان گروپ میں گندی باتیں نهیں گریں🤧😳 " , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂🤣" , "دل بڑا ہونا چاہیے🙌😒منہ تو کھوتے کا v بڑا ہوتا ہے🤝🙂" , "بہت کر چکے منتیں تیری اب میں تمہیں اغوا کرو گا😒😂" , "ہے تمنا ہمیں تمہیں اپنا بنائیں🙊" , "کہتے ہیں زندگی سب کچھ سکھا دیتی ہے😾تے فیر مینوں انگلش کیوں نہیں سکھاندی🤧😒" , "چکن 🐔 کڑاہی جیسے خواب🧐ساگ 🌿 جیسی زندگی 😑🤐" ,  "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝" , "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊" , "میــــــرے نال ویا کــــــر لو 😊💔" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "𝐊𝐚𝐬𝐇 𝐇𝐚𝐦 𝐁 𝐊𝐢𝐬𝐢 𝐊𝐚𝐲 𝐂𝐫𝐮𝐬𝐇 𝐇𝐨𝐭𝐘 .🙂👑♥", "Ary yrr MaZak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow 1 PaPpi Idher d0o 1 PaPpi idher 😘" , "Dur HaT Tere k0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Dekh lena 1 din mazak mazak may he sbsy handsome lrki pata longa🧐🙂", "Uski yaadein mujhe aisy ghair leti hain jaise shadi mein khusre ko 4 harami🙂💔", "Piyara NH Hun is lya koi dost NH h 🙃🌚", "Tum msg to kro, Tumhe ptane ki zimmedari meri 🌚🙂", "Teacher: any questions? Me: Kyun kisi ko wafa ke badly wafa nahi milti😕😂",  "شــــــٹ اپــــ ہــــــوا بـــــــاز شــــــــــاپــــر 🙂💔",  "kCh LaRkian MujHe srf islYe ignOre krti Hen k Kahen Unhe pyar na hO JaE 😗💚", "Allah kray tmhari shadi py Nadra ka photographer aye🙂🕺", "Someone : I love u Me : shakkall dekhiii he meriiiiw-🙄🙄", "Salyy tujhe koi janu nai kehtaa to idhar a ke bot bot krna LG Jata", "Hn bol hrammi a gaii yaad", "Teri janu kisi or sath busy to idhar mou mRNA a gyaa", "Control bebe jald bazi me kahi muskan na ho jay Ohh sorry (nuksan*)🙂",  "🤣آپ میرے ساتھ پھنس جاو🤣 نہ🤣آپ میرے نکھرے ایسے اٹھانا جیسے چرسی ساہیکل اٹھاتا ھے 🤣", "muaziz sarif aapka muhh relation ke liye naa kafi he shukriya🙂🤝", "Ek ladki thii diwani sii har ladke par wo marti thiiw🙂",  "Hn bol hrammi a gaii yaad",  "حـــکومـــت ســـے'تـــسدیــک شـــدا'حــرامــی 🙂", "Hn bol bot ki Jan IB a ak secret btaoo 😂", "AK br biwi mil jaye Run mureedi k sary record Tor deny hn....🙂💔😐", "SharaM kr0'w LarKiy0' mujhe aaj AnTii ne propose Kar Diiy4'w ___/////😞🍁☠️🌸", "BuHt GrEeB huN 'JiSki JiTNi ToFeeQ Hai utNi 'ChuMiyA' DeTi JaYe😔🥲", "ThArKii LaRkiAn ReQ BhEj SaKti HeN (-🌚🦥💔", "Ufff aap Ki اداٸیں😗 Chaly Shabas Apna'w munh Dho kY aye'w..]] . 🙂✨//. 🦋🍒)", "🦋🍒____________🙂🎀پتہ لگا تینوں شوق لتراں دا🤝🏻🔐🫰🏻", "⚠️*•❤🙂 Awj hum hai - kal HumhaRy بچـــــــــے  hOngy agAr Tum maaN jaO 🙂🌼", "-Jab tk mein single hun yeh bh meri hai wo bhi meri ha Tum kia parh rahi tum bh meri ho😒❤🙂", "SuNo Me OwnEr ki trf se Ek ZoR DaR ChuMi De RaHa HoN JaHa DiL KaRe Le LeNa (-😗🌚", "M❍aziz sarif ...🐻       i Love You..🙂♥", "Ya Allah MuJ PaR KiSi MaaLL DaR ANti Ka DiL A JaYe 🤌😞♥️", "Pyaar محـــــــــبـــت Sab دھــــــــوکہ Haiiw 😒😂مجـھـــــــے  pta لــــــــــــو abi bhiiw مـــــــوکـــا  haiiw😹🙊💋", "Dolut shorhat kya mein krni  jb tum khud he ameer hoo 😐🌚", "Pt jaOgii tw rishta du ga nai patogi tw chammat du ga 😹😐💔", "Tum mere dil me ayse aty ho jese Gurde me phatrii<<🥺💗", "-Bilkul  سیاہ larkiyan bhi Chlein gi dOn't worry Come ib🙃"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   if ((event.body.toLowerCase() == "@hamza jutt") || (event.body.toLowerCase() == "@hamza")) {
     return api.sendMessage("️Imlli kaa hun ywl🥵💋", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "@hazoorbakhsh") || (event.body.toLowerCase() == "jerry")) {
     return api.sendMessage("️➪𝗦𝗛𝗼𝗪𝗲𝗿 𝗟𝘆 𝗥𝗮𝗛𝗮 𝗛𝗼𝗢𝗡➪😹➪𝗞𝗼𝗢𝗶𝗶 𝗭𝗮𝗿𝗢𝗼𝗿𝗶𝗶 𝗕𝗮𝗮𝗧 𝗛𝘆 𝗧𝗼𝗢 𝗬𝗮𝗛𝗶𝗡 𝗔𝗮 𝗝𝗮𝗬𝗲𝗡➪😘😹", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "😝")) {
     return api.sendMessage("70 Rupee dy do Mera Pas 20 Han Sting Peeni Hai🫣🤭", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "myfbname") || (event.body.toLowerCase() == "fb")) {
     return api.sendMessage("𒁍𝐉𝐄𝐑𝐑𝐘 ⓫➎⓫⓫⓫⓫⓫⓫⓫⓫ ;* ((((((((❷⓿⓶❸)))))))))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "myludoname") || (event.body.toLowerCase() == "ludo")) {
     return api.sendMessage("נєяяу", threadID, messageID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `🌿🧡${name}🧡🌿, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };
   if ((event.body.toLowerCase() == "@itz jerry") || (event.body.toLowerCase() == "itz jerry")) {
     return api.sendMessage("️haan bol aagai yaad harami🥺🙃", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "@rizwan💖🥀") || (event.body.toLowerCase() == "rizwan")) {
     return api.sendMessage("️آودرد بانٹتے ہیں تم دروازے میں اُنگلی دو پھر میل کر چیخیں مارتے ہیں", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "@𒁍𝐉𝐄𝐑𝐑𝐘 ⓫➎⓫⓫⓫⓫⓫⓫⓫⓫ ;* ((((((((❷⓿⓶❸)))))))))")) {
     return api.sendMessage("➪𝗦𝗛𝗼𝗪𝗲𝗿 𝗟𝘆 𝗥𝗮𝗛𝗮 𝗛𝗼𝗢𝗡➪😹➪𝗞𝗼𝗢𝗶𝗶 𝗭𝗮𝗿𝗢𝗼𝗿𝗶𝗶 𝗕𝗮𝗮𝗧 𝗛𝘆 𝗧𝗼𝗢 𝗬𝗮𝗛𝗶𝗡 𝗔𝗮 𝗝𝗮𝗬𝗲𝗡➪😘😹", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥵")) {
     return api.sendMessage("️➪𝗨𝗳𝗳𝗳𝗳➪𝗬𝗲𝗛 𝗔𝘄𝗣 𝗞𝗶𝗶 𝗥𝗲𝗗 𝗟𝗶𝗣𝗦𝗧𝗶𝗖𝗸➪🤗➪𝗞𝗼𝗡 𝗞𝗛𝗮𝗥𝗮𝗮𝗕 𝗞𝗮𝗿𝗧𝗮 𝗛𝘆_?➪😹🤣😂", threadID, messageID);
   };
if ((event.body.toLowerCase() == "asslam o alaikum") || (event.body.toLowerCase() == "Asslamoalaikam ")) {
     return api.sendMessage("walikum Asalam ♥️", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "harami") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("TaRii Maa Ki Chut Jattu Gali KiS Ko Da Rha Hai", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "@meerab khan") || (event.body.toLowerCase() == "meeru")) {
     return api.sendMessage("Tum mere dil me ayse aty ho jese Gurde me phatrii<<🥺💗", threadID);
   };
   if ((event.body.toLowerCase() == "code") || (event.body.toLowerCase() == "team up?")) {
     return api.sendMessage("️➪𝗟𝘂𝗗𝗼 𝗧𝗶𝗠𝗲 𝗪𝗮𝗦𝗧𝗲➪😂🤣", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("️HaN Ji Or Sunao KiYa Kr RhY ho Aj Kal❤️", threadID, messageID);
   };
    if ((event.body.toLowerCase() == "ye bot nhi hai") || (event.body.toLowerCase() == "Ya robot nhi hai")) {
     return api.sendMessage("️NHi To Kia TaRa BaP Hai Salya ChUp Kr K Bay 🤣", threadID, messageID);
   };
if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😱")) {
     return api.sendMessage("ITna HaiRan hoNy waLi KoNsi bat ha😒🙎🏾‍♂️", threadID, messageID);
   }
   if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "🫤")) {
     return api.sendMessage("️Tum To kHud hi Terhy ho ShaKl kHak seedhi ho Gi😬", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Jaa So Ja lGta ha BukHar ho Gyaw🙄", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("️Mujh Masoom Py Ghussa kRty Ho JaO ma nARaz Hu🥺🖤", threadID, messageID);
   };
   if ((event.body.toLowerCase() =="😠") || (event.body.toLowerCase() == "🤬")) {
     return api.sendMessage("️CoOl COOl babY GhuSsa HaRm ha 🙆😶", threadID, messageID);
   };
if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😤")) {
     return api.sendMessage("️ Attitude tu kHusRy dekHtY hN mEri Jan😏🙎🏾‍♂️", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😜")) {
     return api.sendMessage("️AnDar kR isKo wRna Kaat Du ga yE ganDi zaBan🙎🏾‍♂️", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("DaFa ho Ja YaHa sy Alsee😒🙄", threadID);
   };
   if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹")) {
     return api.sendMessage("RoNy ki ActiNg tu SaHi sy kRlo ThaRki insaN🙂", threadID);
   };
   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("KiTna GanDy LooG Hn Rula DeTy Hn KamiNy🥺🏃", threadID);
   };
   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("itNa baRa Muhh kHol k HanS RaHe ho GaNfo ho kYa🙂)", threadID);
   };
  if ((event.body.toLowerCase() == "@amritha💖🥀") || (event.body.toLowerCase() == "amritha")) {
     return api.sendMessage("𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕", threadID);
   };
if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😚")) {
     return api.sendMessage("Bsh krdo tharki insaan ziyada Mar lii tharak🙄😒", threadID);
   };
  if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😆")) {
     return api.sendMessage("DanT nikaL kr ApNi beiZti na kRwaYn ShuKria😒🙎", threadID);
   };
if ((event.body.toLowerCase() == "🤫🤫") || (event.body.toLowerCase() == "🤫")) {
     return api.sendMessage("Han Han kRwa Lo Chup Sb ko Pr maiN ni kRny waLa Chup,🤐😒", threadID);
   };
if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("ShaKl Sy GhAreeb LGtyHo btaO Tala Qw lgaYa Muh py🙄", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔")) {
     return api.sendMessage("BewaFa lOog Hn Dil Tor DeTy Hn JaNu🥺🙆", threadID);
   };
   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("️Ally alYy BaBy Asy hi HNsty RaHa kRo🙆🙊", threadID);
   };
   if ((event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️Asyy kiS ko DekH raHe Ho ShkaL sy Tu ThaRki lg raHy Ho🙆😑 :)", threadID);
   };
   if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "🥺")) {
     return api.sendMessage("️AnKho M piYar Dil ma خمار PiYar tu ni ho Gyw ksi Sy 🙆", threadID);
   };
   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️aRy mEri JaN kYa howa Qw M0od KhRb kR rHe Ho APna🙂❤️", threadID);
   };
   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("Ally Asi bat hi Q kRty Ho K mUh ChuPhana PaRry🤨", threadID);
   };
   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("😐Yeh Emoji Tumhary Papa jerry Use Karty HN Tum Mat Kiya Karo 😝🙆:))", threadID);
   };
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👎")) {
     return api.sendMessage("Abby Like deny ka ziada shoq ha kya🙆🙄", threadID);
   };
    if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("Edr Udr Qw Dekh RaHe Ho Koi Patny Wala Ni😤🙄:)", threadID);
   };
   if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😂")) {
     return api.sendMessage("Abby Yawl Hansty H0Y bHi R0o RaHa Hai 💁", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "/unsend") || (event.body.toLowerCase() == "/uns")) {
     return api.sendMessage("️Aise kaam hi q kerte ho ywl k chhupane parhen😂🤣🖐️", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "Delete kr") || (event.body.toLowerCase() == "delete kr")) {
     return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "🫣") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("️MaiN SaDky Jaun Jawn k🥵💋", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "group") || (event.body.toLowerCase() == "group")) {
     return api.sendMessage("️ႰᏋᏒᏒᎽ ᵏᶦ ᏲᎯᏇᏋႱᎥ>>>🐬😜🖤", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "😇")) {
     return api.sendMessage("️ABby Yawl ki hOya ab tEnu😒🙄", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "good night @everyone") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("️good Night So jao Shabash take care ❤️Allah pak Hamesha Khush rakhy apko🥰", threadID);
   };
   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("️Itna Matt S0Cho JaNu PiYar ho JaY ga Mujh Se🙊😒 :)", threadID);
   };
   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😢")) {
     return api.sendMessage("️Allly Ally BabY mEry Hoty Huy Q Ro ReHy Ho🥺🙆🙄:)", threadID);
   };
   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ap ka owner kon hai")) {
     return api.sendMessage("hazoorbakhsh ♥️ Hai Naw /inf likho link Mil Jay Ga  :))", threadID, messageID);
   };
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
