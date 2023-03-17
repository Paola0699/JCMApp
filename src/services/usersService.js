import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, query, where, setDoc, doc } from 'firebase/firestore/lite';
import app from '../firebaseElements/firebase';

const db = getFirestore(app);
const auth = getAuth();

export const getAllUsers = async() => {
    const usersCol = query(collection(db, 'accounts'), where('type', '==', 'user'));
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return usersList;
}

export const postNewUser =  async(user) => {
    const {USER_NAME, EMAIL, PASSWORD, COMPANY} = user;
    return await createUserWithEmailAndPassword(auth, EMAIL, PASSWORD).then(async(userCredential)=>{
        return await setDoc(doc(db, 'accounts', userCredential.user.uid), {
            company: COMPANY,
            email: EMAIL,
            name: USER_NAME,
            type: 'user'

        });
    })
}