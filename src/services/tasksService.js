import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where
} from 'firebase/firestore/lite';
import app from '../firebaseElements/firebase';

const db = getFirestore(app);

export const getTaksSuccess = async (userId) => {
  const tasksCol = query(collection(db, 'alerts'), where('user', '==', userId));
  const tasksSnapshot = await getDocs(tasksCol);
  const tasksList = tasksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return tasksList;
};

export const postEditTask = async (taskId) => {
  return await updateDoc(doc(db, 'alerts', taskId), {
    status: 'Completada'
  });
};
