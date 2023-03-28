import { initializeApp } from 'firebase/app';

var firebaseConfig = {
  apiKey: 'AIzaSyDeJQuGv48Ei9k9JHIASzN8y-EjFAc8I_o',
  authDomain: 'jcmexpansion.firebaseapp.com',
  projectId: 'jcmexpansion',
  storageBucket: 'jcmexpansion.appspot.com',
  messagingSenderId: '116949457374',
  appId: '1:116949457374:web:96ef5869b81a7fd786e54f'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
