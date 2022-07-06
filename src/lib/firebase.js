import { browser } from "$app/env";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// import { onMount } from "svelte";

// import { http } from './api.js';


// onMount(()=>{
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ75aporABBQmi2Da_kiQBy_rT4Jr1CpI",
  authDomain: "esign-apps.firebaseapp.com",
  projectId: "esign-apps",
  storageBucket: "esign-apps.appspot.com",
  messagingSenderId: "586264015120",
  appId: "1:586264015120:web:7e312630e350bb64383595",
  measurementId: "G-324TCXM89J"
};
if(browser){

  // // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging();
  getToken({vapidKey:'BD1M8tbGUKYuC8tbNUhOG0ALB6AFYwjFwOwTFYrQ_Z1B9J1q5ANgIxyr_Bc-FQEvIfGwYuixwPT5rRu8FQskvho'}).then(r=>{
    console.log(r)
  })
  console.log(messaging)
  // messaging.requestPermission().then(function () {
  //     return messaging.getToken()
  // }).catch(err=>{console.log(err)})
}
// console.log(messaging)
// function initFirebaseMessagingRegistration() {
//   console.log(messaging)
//   messaging.requestPermission().then(function () {
//       return messaging.getToken()
//   })
  // .then(function(token) {
  //     http('patch','/api/update-token', token)
  //     // axios.post("{{ route('fcmToken') }}",{
  //     //     _method:"PATCH",
  //     //     token
  //     // })
  //     .then(({data})=>{
  //         console.log(data)
  //     }).catch(({response:{data}})=>{
  //         console.error(data)
  //     })

  // }).catch(function (err) {
  //     console.log(`Token Error :: ${err}`);
  // });
// }


  // initFirebaseMessagingRegistration();
  
  // messaging.onMessage(function({data:{body,title}}){
  //   new Notification(title, {body});
  // });
// });
export default {
} 