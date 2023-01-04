 const input = require("input")
const axios = require('axios-https-proxy-fix');
const randomUseragent = require('random-useragent');
const clc = require('cli-color');

const main = async () => {
const mail = await input.text("Enter your mail");
 const password = await input.password("Enter your password");
const token =await input.text("Enter your Token");

 proxy = {
        host: "Proxy Host",
        port: "Proxy Port",
        auth: {username: "Proxy Username", password: "Proxy Pass"}
      }
  axios.patch("https://discord.com/api/v9/users/@me", {
          "email":`${mail}`,
          "password": `${password}`
        }, {
          headers: {
 "content-type": "application/json",
 'User-Agent': randomUseragent.getRandom( ua => ua.browserName === 'Chrome'),
"authorization": token
},
  proxy: proxy
        }).then(
      response => {
        if (response.status == 200) {
			
			console.log(clc.green(`Mail Doğrulama İsteği Başarıyla ${mail} Adresine Gönderildi`))
		} else {
			console.log(clc.red(`Mail Doğrulama İsteği ${mail} Adresine Gönderilemedi`))
		}
	  }
    )
}
main();
