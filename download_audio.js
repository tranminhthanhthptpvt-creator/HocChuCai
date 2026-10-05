const fs = require('fs');
const path = require('path');
const https = require('https');

const phonics = [
  "A", "Á", "Ớ", "Bờ", "Cờ", "Dờ", "Đờ", "E", "Ê", "Gờ",
  "Hờ", "I", "Ca", "Lờ", "Mờ", "Nờ", "O", "Ô", "Ơ", "Pờ",
  "Quờ", "Rờ", "Sờ", "Tờ", "U", "Ư", "Vờ", "Xờ", "I"
];

const names = [
  "A", "Á", "Ớ", "Bê", "Xê", "Dê", "Đê", "E", "Ê", "Giê",
  "Hát", "I ngắn", "Ca", "E lờ", "Em mờ", "En nờ", "O", "Ô", "Ơ", "Pê",
  "Quy", "E rờ", "Ét", "Tê", "U", "Ư", "Vê", "Ích", "I dài"
];

const words = [
  "Con cá", "Mặt trăng", "Cái cây", "Quả bóng", "Con cò", "Con dê", "Đồng hồ", "Em bé", "Con ếch", "Con gà",
  "Bông hoa", "Viên bi", "Cái kẹo", "Quả lê", "Con mèo", "Ngôi nhà", "Con ong", "Cái ô", "Lá cờ", "Đèn pin",
  "Quả cam", "Con rùa", "Ngôi sao", "Con tàu", "Cái mũ", "Con hươu", "Con voi", "Xe đạp", "Y tá"
];

function download(text, dest) {
  return new Promise((resolve, reject) => {
    const encoded = encodeURIComponent(text);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
    const file = fs.createWriteStream(dest);

    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`Status ${res.statusCode} for ${text}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const dir of ['audio/phonics', 'audio/names', 'audio/words']) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (let i = 0; i < 29; i++) {
    process.stdout.write(`Downloading ${i}/28: ${phonics[i]}... `);
    await download(phonics[i], path.join('audio/phonics', `${i}.mp3`));
    await download(names[i], path.join('audio/names', `${i}.mp3`));
    await download(words[i], path.join('audio/words', `${i}.mp3`));
    console.log('Done');
    await new Promise(r => setTimeout(r, 100));
  }
  console.log('All audio downloaded successfully!');
}

main().catch(console.error);
