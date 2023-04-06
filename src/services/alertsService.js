import { getFirestore, collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore/lite';
import app from '../firebaseElements/firebase';

const db = getFirestore(app);

export const postNewAlert = async (user, alert) => {
  return await addDoc(collection(db, 'alerts'), {
    title: alert.TITLE,
    description: alert.DESCRIPTION,
    status: 'Pendiente',
    date: new Date(),
    user: user.id,
    userName: user.name
  });
};

export const getAlertsSuccess = async () => {
  const alertsCol = query(collection(db, 'alerts'), orderBy('date', 'desc'));
  const alertsSnapshot = await getDocs(alertsCol);
  const alertsList = alertsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return alertsList;
};
