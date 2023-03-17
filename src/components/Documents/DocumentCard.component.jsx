import { Card, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fontIcons from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const DocumentCard = ({ cardCathegory }) => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate(`./${cardCathegory.id}`);
    }
    return (
        <Grid item xs={6} md={2}>
            <Card onClick={handleRedirect}
                elevation={5}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '15rem',
                    backgroundColor: '#001E3C',
                    color: 'white',
                    borderRadius: '15px'
                }}>
                <FontAwesomeIcon icon={fontIcons[cardCathegory.icon]} size='3x' style={{ marginBottom: '1rem' }} />
                <Typography variant='body1' textAlign='center'>{cardCathegory.title}</Typography>
            </Card>
        </Grid>
    )
}
export default DocumentCard;
