import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy__D0eMFDAYlvSzj-SvIjaCXRt2YdrO0",
  authDomain: "app-capa-c22b8.firebaseapp.com",
  projectId: "app-capa-c22b8",
  storageBucket: "app-capa-c22b8.appspot.com",
  messagingSenderId: "1081262867583",
  appId: "1:1081262867583:web:08bf88712788f03004ab4a"
};

const firebaseApp = initializeApp(firebaseConfig);

export const loginFirebase = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const idToken = userCredential._tokenResponse.idToken;

        sessionStorage.setItem("idTokenFirebase", idToken);

        resolve(userCredential);
      })
      .catch((error) => {
        // Error en la autenticación, rechazamos la promesa con el error
        reject(error);
      });
  });
};

export const isAuthenticated = (): boolean => {
  return !!sessionStorage.getItem("idTokenFirebase");
};

export { getAuth, signInWithEmailAndPassword, firebaseApp };
