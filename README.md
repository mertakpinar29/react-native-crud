# Sources:
## https://rnfirebase.io/
## https://reactnative.dev/docs/
## https://reactnavigation.org/docs/getting-started/
## https://github.com/oblador/react-native-vector-icons#android
## https://reactnativeelements.com/docs/
## https://firebase.google.com/docs/firestore/query-data/listen

[x] - Set up the development environment. (https://reactnative.dev/docs/environment-setup)

[x] - Create a React Native project and run it. ( npx react-native init crud & npx react-native run-android )

[x] - Sign in to https://firebase.google.com/ and create a new project

[x] - Create a cloud firestore database

[x] - Install firebase module to react native project ( npm install --save @react-native-firebase/app )

[x] - Install firestore module. ( @react-native-firebase/firestore )

[x] - Configure your React Native app for android
    [x] - Android package name for your Firebase project must match local projects package name.
        ( you can find /android/app/src/main/AndroidManifest.xml )
    [x] - The debug signing certificate is optional to use Firebase with your app, but is required for Dynamic Links, Invites and Phone Authentication.
    [x] - Download the config file and place it in /android/app/google-services.json
    [x] - To allow Firebase on Android to use the credentials, the google-services plugin must be enabled on the project. This requires modification to two files in the Android directory.
        [x] - Add the google-services plugin as a dependency inside of your /android/build.gradle
        [x] - Execute the plugin by adding the following to your /android/app/build.gradle file

[x] - Install required packages for React Navigation.

[x] - Configure MainActivity.java

[x] - Install @react-navigation/bottom-tabs

[x] - Create a Screens folder. Create 3 screens: HomeScreen, CreateScreen, UpdateScreen

[x] - Install react-native-vector-icons and react-native-elements

[x] - Edit App.js to create Navigation. Add HomeScreen and Create screen to navigation.

[x] - Edit android/app/build.gradle to make Icons show up 
    [x] - add apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

[x] - Design CreateScreen to create a data

[x] - Design HomeScreen to get all data
    [x] - Create a Stack navigator with 2 screens ( Feed and UpdateScreen )
    [x] - Design Feed
        [x] - Fetch all students
        [x] - Delete students
    [x] - Design UpdateScreen

[x] - Edit Feed.js to keep the data fresh. (Listen for snapshots)
    [x] - Add "type" attribute to documents for easy querying
