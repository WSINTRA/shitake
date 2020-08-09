# shitake
codename:Shitake

This is an app dedicated to distributing fine, culinary mushrooms to enthusiasts. 

It's currently built as a React Native App for use with Expo. 

Prerequisites
This repository is built on the Expo CLI. Also, be sure to have XCode installed. In "Preferences > Components", you can download the specific iOS simulators you would like to run (I recommend the most recent one).

Setting up Development Environment
Instructions
npm and yarn are both available as package managers, but yarn is prefered.

Clone the master branch
Run cd Shitake in the terminal to get to the application's directory
Run npm install or yarn in the terminal to make sure all dependancies are installed
Run yarn clean:ios or yarn clean:android to start and launch the Expo CLI on your browser and subsequently on the iOS or Android simulator (if you don't have Expo CLI installed, this command should install Expo for you and then launch the application).
If you have Expo installed on your phone, run yarn start which should start the server. You should be able to run the simulator on your phone through the Expo app using the QR code.
Changes will be reflected after you save on your text-editor and hitting CMD + R when on the simulator, initiating a refresh.
To close/end the Expo server, simply run CMD + C on the terminal that is running the Expo package.
Notes

