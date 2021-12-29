# Get All Your CloudFlare Account Domains

The purpose of this app is to list all the Domains in your CloudFlare account. Currently, the CloudFlare dashboard has not way to export the domain names. By using their API and this React App, you can get the list for yourself.

## Requirements
To use their API, you will need to run a Linux Bash shell script which is included in this repository. The script is called getAllDomains.sh. 

## Intructions
* Clone this repository `git clone https://github.com/edwinaquino/cloudflare-api-app.git`
* Change Directory: `cd cloudflare-api-app`
* Give execute permissions to the getAllDomains.sh script: `$ chmod +x getAllDomains.sh`
* Run the bash script: `./getAllDomains.sh`
* The script will save all the JSON data into the public/data/domains.txt file
* Install packages: `npm install`
* Run the App: `npm start`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)