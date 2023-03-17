import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';
import app from '../firebaseElements/firebase';

const db = getFirestore(app);
export const getAllUsers = async() => {
    const usersCol = query(collection(db, 'accounts'), where('type', '==', 'user'));
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return usersList;
}