import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';
import app from '../firebaseElements/firebase';

const db = getFirestore(app);
export const getAllDocumentCategories = async () => {
    const categoriesCol = collection(db, 'categories');
    const categoriesSnapshot = await getDocs(categoriesCol);
    const categoriesList = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return categoriesList;
};
export const getAllDocumetsByCategory = async (id) => {
    const documentsCol = query(collection(db, 'documentType'), where('category', '==', id));
    const documentsSnapshot = await getDocs(documentsCol);
    const documentsList = documentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return documentsList;
};

export const getDocumentByDocumentType = async (uid, documentType) => {
    const documentCol = query(collection(db, 'documents'), where('documentType', '==', documentType), where('user', '==', uid));
    const documentSnapshot = await getDocs(documentCol);
    const document = documentSnapshot.docs.map(doc => doc.data());
    return document[0];
};