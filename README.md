## Revil Network (powered by Blockchain)

# Share Infection experiences
online platform which community members can use to capture their health-based experiences and share these health experiences with other community members through text, photos or videos.(photo and video- on next release)

The focus should be to develop a platform that allows community member to share their health experiences and and find more information about an illness(alarming or mild)  with other community members.


## Raise illness alert in real-time
Develop a referral process platform that helps community members to raise and escalate major illness signs, awareness and symptoms  in the community in real-time.

The platform would work like a community health management tool that will help expert health community worker to share real-­time information on their community members.

The system should record all assessments made by the community health experts for future reference and annual evaluations.


## Goal
The goal is to unite in the fight against COVID-19. Together we can develop and launch open-source code using AI and/or blockchain to combat COVID-19, reduce risks from future infectious outbreaks, and cope with the COVID-19 pandemic situation.


## Installation

With Link and its built-in private blockchain, there is no need to use common blockchain development tools such as Infura or acquire an underlying token such as ETH from an exchange to pay for gas fees - it just works!

A simple front-end template is provided and [Parcel](https://parceljs.org/) will be used as the web application bundler and server.

The key steps of this activity are:
1. Setup project and install dependencies
2. Deploy a basic evil Network smart contract to the blockchain using Link
3. Configure a front-end JavaScript file
4. Run your decentralized evil Network application

### Setup

You will need to setup the following for this activity:

> Install `Node` and `npm`: https://nodejs.org/en/download/ (note - you can also use `yarn`)

> Clone the Github repo: https://github.com/blockmason/Revil-app-demo into a new folder.

> In the new folder, run `npm install` which will install the following key dependencies:

* `@blockmason/link-sdk` - https://www.npmjs.com/package/@blockmason/link-sdk - a simple SDK for interacting with the Link project.

* `parcel-bundler` - https://parceljs.org/getting_started.html - for bundling and running the web application

> Create a .env file in the project folder

> Create a Blockmason Link account - register at https://mason.link/sign-up and then setup your demo organization.

### Deploy the evil Network Smart Contract
The `Revil-app.sol` file contains a very simple Smart Contract:
```
pragma solidity ^0.5.8;

contract evilNetwork {
  struct Profile {
    uint256 id;
    string displayName;
    string avatarUrl;
  }

  mapping (address => Profile) private addressToProfile;
  mapping (uint256 => address) private profileIdToAddress;

  event Message(uint256 senderId, uint256 timestamp, string message);

  function postMessage(string memory message) public {
    emit Message(addressToProfile[msg.sender].id, block.timestamp, message);
  }

  function setProfile(uint256 id, string memory displayName, string memory avatarUrl) public {
    require(profileIdToAddress[id] == address(0));
    profileIdToAddress[id] = msg.sender;
    addressToProfile[msg.sender].id = id;
    addressToProfile[msg.sender].displayName = displayName;
    addressToProfile[msg.sender].avatarUrl = avatarUrl;
  }

  function getProfile(uint256 id) public view returns (string memory displayName, string memory avatarUrl) {
    return (addressToProfile[profileIdToAddress[id]].displayName, addressToProfile[profileIdToAddress[id]].avatarUrl);
  }
}
```

> Sign into your Link account and copy and paste the `Revil-app.sol` contract code into the Link IDE. We'll call this project `Revil-app`. 

> Now click on the `API` button on the `Code/API` toggle and you will see API endpoints for all the evil Network smart contract functions and attributes!

**That's it!** Our evil Network smart contract is automatically deployed to the Link private blockchain and we are ready to use our web API endpoints in our front-end DApp. 

### Configure DApp Front-End

> Take a look at `index.html` and `index.js` code templates, which is where we will focus our efforts.

#### index.html
We see that the html template has a basic layout with a text area that will be used to submit messages on this profile page. It also has a feed that will display those messages.

#### index.js
The template code has been provided and we just need to fill in the details by adding in our clinetID and clientSecret to a .env file.
```
//Requirements
require('dotenv').config();
const { link } = require('@blockmason/link-sdk');
const fetch = require('node-fetch');
const project = link({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
}, {
    fetch
});
```
We import the `@blockmason/link-sdk` package. We then need to provide the `clientId` and `clientSecret` from Link in order to use the `.get` and `.post` methods provided by the `link` object. 

> Copy and paste your specific `clientId` and `clientSecret` from the bottom of the Link IDE screen:

> In the .env file add ```CLIENT_ID="<YOUR-CLIENT_ID>" CLIENT_SECRET="<YOUR-CLIENT-SECRET>"```


```
    // Get All Messages
    async function getMessages() {
        let allMessages = await project.get('/events/Message');

        return allMessages;
    }

    // Post a Message
    async function postMessage(newMessage) {

        await project.post('/postMessage', { message: newMessage });

    }
```
The above code:
* Loads all the messages from the blockchain

* Submits a message to the blockchain 
```
    // Get The Profile Data Based on ID
    async function getProfile(userID) {

        let profileData = await project.get('/getProfile', {
                "id": userID
            });

        return profileData;
    }

    // Set Profile Data Based on ID
    async function setProfile(idOfProfile) {
        // Set some profile settings for the demo
        let profilePost = {
            "id": idOfProfile,
            "displayName": "Mason Link",
            "avatarUrl": 'https://blockmason.link/wp-content/uploads/2019/04/download.jpg'
        }

        await project.post('/setProfile', profilePost);
    }
```
Here, we will call the `GET /getProfile` API endpoint to retrieve the profile data, and `POST /setProfile` to set the profile image and name. 

> Find the complete code in `index.js`. 

Note - we didn't use any complex or large libraries like `web3.js`, which requires an instance of the `evilNetwork` contract to be created before the contract function methods can be called. **Except for our confirm message, there is nothing in the code to even indicate that blockchains are involved!**

### Run your DApp

> Run the application from the project root folder with:
```
npm start
```
See the full command this executes under `scripts` in `package.json`. 

> Run the ```setProfile()``` function once to set the url and profile name (running more than once will result in an error ```{"errors":[{"detail":"Authentication failed"}],"jsonapi":"1.0","meta":{"name":"@blockmason/link-api","version":"1.16.1"}}```)

Note the following:
* By default, the DApp will run at https://localhost:1234 . You can specify the `-p` flag in the scripts command in `package.json` if you want to use a specific port.

* `Parcel` will create the following folders in your project folder: `.cache/` and `dist/`. If you run into any errors while running your DApp, delete these folders and run `npm start` again.

Copy and paste in an Ethereum wallet address (for example `0xca14563Ce2585B6026b7691f264ac2173CdEC530`) and try to own one of the Collectible Stamps. *Note:* if you do not enter in a valid address, you will see the following error alert pop up:


When running, your DApp should look similar to the following:

![evil Network](/images/revil.png)

**Congrats** on getting your first DApp running from scratch using Link!

## Acknowledgements

- [Manson Link](https://mason.link)


## Copyright 2020 Dickens Juma

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.