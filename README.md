# Get All Your CloudFlare Account Domains

The purpose of this app is to list all the Domains in your CloudFlare account. Currently, the CloudFlare dashboard has not way to export the domain names. By using their API and this React App, you can get the list for yourself.

## Requirements
To use their API, you will need to run a Linux Bash shell script which is included in this repository. The script is called getAllDomains.sh. 

## ScreenShot
<img width="663" alt="Get All Your CloudFlare Account Domains" src="https://user-images.githubusercontent.com/30946443/186796275-4fe4358e-3251-4b5a-8e7c-1cd87b0b8157.png">

## Intructions
* Open your terminal (Linux Recommended)
* Clone this repository `git clone https://github.com/edwinaquino/cloudflare-api-app.git`
* Change Directory: `cd cloudflare-api-app`
* Give execute permissions to the getAllDomains.sh script: `$ chmod +x getAllDomains.sh`
* Run the bash script: `./getAllDomains.sh`
* The script will save all the JSON data into the public/data/domains.txt file
* Install packages: `npm install`
* Run the App: `npm start`
* Open browser to http://localhost:3000

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

Source: 15T, VirtualBox > Docker-ubuntu-100G USE THIS ONE

PATH: /home/developer/CloudFlare_API/test/test1/cloudflare-api-app
