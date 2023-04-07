import { CircularProgress, Grid } from '@mui/material';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAllDocumentCategories } from '../services/documentsService';
import NavBar from '../components/Common/NavBar.component';
import { DocumentCard } from '../components/Documents/index';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingDocumentTypes } from '../actions/loadingActions';
const auth = getAuth();

const DocumentsMenuScreen = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [user, setUser] = useState({});
  const { user: userRole } = useSelector((state) => state.auth);
  const { loadingDocumentTypes } = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const getCategoriesList = async () => {
    dispatch(setLoadingDocumentTypes(true));
    const documentCategories = await getAllDocumentCategories();
    setCategoriesList(documentCategories);
    dispatch(setLoadingDocumentTypes(false));
  };
  useEffect(() => {
    getCategoriesList();
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  return user && userRole?.type === 'user' ? (
    <>
      <img
        alt="cover"
        style={{ width: '100%', height: '10rem', objectFit: 'cover' }}
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_538661656_367462.jpg"
      />
      <Grid container spacing={2} padding={2}>
        {loadingDocumentTypes && (
          <Grid item xs={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <CircularProgress />
          </Grid>
        )}
        {categoriesList &&
          categoriesList.map((item) => <DocumentCard cardCathegory={item} key={item.id} />)}
      </Grid>
      <NavBar />
    </>
  ) : (
    <Navigate to={'/login'} replace={true} />
  );
};
export default DocumentsMenuScreen;
