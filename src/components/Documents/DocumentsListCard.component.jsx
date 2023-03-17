import * as fontIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { getDocumentByDocumentType } from "../../services/documentsService";
import { useDispatch } from 'react-redux'
import { getDocuments } from "../../actions/documentsActions";
import { useNavigate } from "react-router-dom";
const auth = getAuth();

const DocumentsListCard = ({ document }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(false);
  auth.onAuthStateChanged(async (user) => {
    if (user) setUser(user.uid);
  });
  const getDocumentsList = async () => {
    const newDocument = await getDocumentByDocumentType(user, document.id);
    dispatch(getDocuments({ url: newDocument.document, category: document.title }));
    navigate('/documentos/preview');
  };
  return (
    <ListItem button divider onClick={getDocumentsList} secondaryAction={
      <IconButton><FontAwesomeIcon icon={fontIcons.faChevronRight} /></IconButton>
    }>
      <ListItemAvatar>
        <Avatar style={{ backgroundColor: '#001E3C' }}>
          <FontAwesomeIcon icon={fontIcons[document.icon]} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={document.title} />
    </ListItem>
  )
}
export default DocumentsListCard;