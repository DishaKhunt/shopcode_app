import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRdaNNG4lY9EAGXAuIx1DUBu8xDfVpNVo",
  authDomain: "shop-c0cb6.firebaseapp.com",
  projectId: "shop-c0cb6",
  storageBucket: "shop-c0cb6.appspot.com",
  messagingSenderId: "597308372710",
  appId: "1:597308372710:web:144d6e98cdb1f75f65ed27",
  measurementId: "G-605CCTSY1X"
};

// Initialize Firebase
const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig;