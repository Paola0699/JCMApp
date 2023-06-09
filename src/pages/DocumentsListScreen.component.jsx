import { CircularProgress, Grid, List } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getAllDocumetsByCategory } from '../services/documentsService';
import NavBar from '../components/Common/NavBar.component';
import DocumentsListCard from '../components/Documents/DocumentsListCard.component';
import { useDispatch, useSelector } from 'react-redux';
import NoDocumetsType from '../components/Documents/NoDocumetsType.component';
import { setLoadingDocumentCategories } from '../actions/loadingActions';
const auth = getAuth();

const style = {
  width: '100%',
  maxWidth: 500
};
const DocumentsListScreen = () => {
  const { idCategory } = useParams();
  const { user: userRole } = useSelector((state) => state.auth);
  const { loadingDocumentCategories } = useSelector((state) => state.loading);
  const [documentsList, setDocumentsList] = useState([]);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const getDocumentsList = async () => {
    dispatch(setLoadingDocumentCategories(true));
    const documentsByCategorie = await getAllDocumetsByCategory(userRole.uid, idCategory);
    setDocumentsList(documentsByCategorie);
    dispatch(setLoadingDocumentCategories(false));
  };
  useEffect(() => {
    if (idCategory) getDocumentsList();
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
      <Grid
        container
        spacing={2}
        padding={2}
        display="flex"
        alignItems="center"
        justifyContent="center">
        {loadingDocumentCategories && <CircularProgress />}
        {documentsList && documentsList.length > 0 && (
          <List sx={style} component="nav" aria-label="mailbox folders">
            {documentsList?.map((document) => (
              <DocumentsListCard document={document} key={document.id} />
            ))}
          </List>
        )}
        {!loadingDocumentCategories &&
          (!documentsList || (documentsList.length == 0 && <NoDocumetsType />))}
      </Grid>
      <NavBar />
    </>
  ) : (
    <Navigate to={'/login'} replace={true} />
  );
};
export default DocumentsListScreen;
