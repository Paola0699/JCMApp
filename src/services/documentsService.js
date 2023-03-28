import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  doc,
  updateDoc
} from 'firebase/firestore/lite';
import app from '../firebaseElements/firebase';
import { getUserDocument } from './usersService';

const db = getFirestore(app);
export const getAllDocumentCategories = async () => {
  const categoriesCol = collection(db, 'categories');
  const categoriesSnapshot = await getDocs(categoriesCol);
  const categoriesList = categoriesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return categoriesList;
};

export const getAllDocumetsByCategory = async (userId, id) => {
  const documentsCol = query(collection(db, 'documentType'), where('category', '==', id));
  const documentsSnapshot = await getDocs(documentsCol);
  const documentsList = documentsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const newDocumentList = await Promise.all(
    documentsList.map(async (document) => {
      const response = await getUserDocument(userId, document.id);
      return {
        ...document,
        ...response[0]
      };
    })
  );
  return newDocumentList;
};

export const getDocumentByDocumentType = async (uid, documentType) => {
  const documentCol = query(
    collection(db, 'documents'),
    where('documentType', '==', documentType),
    where('user', '==', uid)
  );
  const documentSnapshot = await getDocs(documentCol);
  const document = documentSnapshot.docs.map((doc) => doc.data());
  return document[0];
};

export const postNewDocument = async (user, documentURL, documentType) => {
  return await addDoc(collection(db, 'documents'), {
    document: documentURL,
    documentType: documentType,
    lastUpdate: new Date(),
    user: user
  });
};

export const postEditDocument = async (documentId, documentURL) => {
  return await updateDoc(doc(db, 'documents', documentId), {
    document: documentURL,
    lastUpdate: new Date()
  });
};
