import { Grid } from '@mui/material';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { getAllDocumentCategories } from '../../services/documentsService';
import NavBar from '../Common/NavBar.component';
import { DocumentCard } from './index';
const auth = getAuth();

const DocumentsMenuScreen = () => {
    const [categoriesList, setCategoriesList] = useState([]);
    const [user, setUser] = useState({});
    const getCategoriesList = async () => {
        const documentCategories = await getAllDocumentCategories();
        setCategoriesList(documentCategories);
    };
    useEffect(() => {
        getCategoriesList();
    }, []);

    auth.onAuthStateChanged(async (user) => {
        if (user){ 
            setUser(user)
        }else{
            setUser(false)
        }
    });

    return !user ? <Navigate to={'/login'} replace={true} /> :  (
        <>
            <img alt='cover' style={{ width: '100%', height: '10rem', objectFit: 'cover' }} src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_538661656_367462.jpg' />
            <Grid container spacing={2} padding={2}>
                {categoriesList && categoriesList.map(item => (
                    <DocumentCard cardCathegory={item} key={item.id} />
                ))}
            </Grid>
            <NavBar />
        </>
    )
}
export default DocumentsMenuScreen;