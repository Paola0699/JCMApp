import * as fontIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getDocuments } from '../../actions/documentsActions';
import { useNavigate } from 'react-router-dom';

const DocumentsListCard = ({ document }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const getDocumentsList = () => {
    try {
      dispatch(getDocuments({ url: document.document, category: document.title }));
      navigate('/documentos/preview');
    } catch {
      alert('No hay docs');
    }
  };
  return (
    <ListItem
      disabled={!document.document}
      button
      divider
      onClick={getDocumentsList}
      secondaryAction={
        <IconButton>
          <FontAwesomeIcon icon={fontIcons.faChevronRight} />
        </IconButton>
      }>
      <ListItemAvatar>
        <Avatar style={{ backgroundColor: '#001E3C' }}>
          <FontAwesomeIcon icon={fontIcons[document.icon]} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={document.title} />
    </ListItem>
  );
};
export default DocumentsListCard;
