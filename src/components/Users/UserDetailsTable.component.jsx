import {
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import React, { Fragment, useState } from 'react';
import { NewDocumentModal, userDetailsTableHeaders } from '.';
import { useSelector } from 'react-redux';
import EditDocumentModal from './EditDocumentModal.component';
import ViewDocumentModal from './ViewDocumentModal.component';
import moment from 'moment';

const UserDetailsTable = () => {
  const { userDocuments } = useSelector((state) => state.documents);
  const [selectedDoc, setSelectedDoc] = useState('');
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const handleOpenEditModal = (document) => {
    setSelectedDoc(document);
    setOpenEdit(true);
  };
  const handleOpenViewModal = (document) => {
    setSelectedDoc(document);
    setOpenView(true);
  };
  const handleOpenNewModal = (document) => {
    setSelectedDoc(document);
    setOpenNew(true);
  };
  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {userDetailsTableHeaders.map((header) => (
                <TableCell style={{ color: '#001E3C' }} key={header.id}>
                  {header.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {userDocuments.map((document) => (
              <TableRow key={document.id}>
                <TableCell style={{ color: '#001E3C' }}>{document.title}</TableCell>
                <TableCell style={{ color: '#001E3C' }}>
                  {document.lastUpdate ? (
                    <Chip label="Se ha subido un documento" color="success" />
                  ) : (
                    <Chip label="No se ha cargado ningún documento" color="error" />
                  )}
                </TableCell>
                <TableCell style={{ color: '#001E3C' }}>
                  {document.lastUpdate
                    ? moment(document.lastUpdate.seconds * 1000).format('DD MMMM YYYY')
                    : 'NA'}
                </TableCell>
                <TableCell>
                  {document.lastUpdate ? (
                    <>
                      <Button
                        variant="contained"
                        onClick={() => handleOpenViewModal(document)}
                        style={{ marginRight: '5px' }}>
                        Ver
                      </Button>
                      <Button variant="outlined" onClick={() => handleOpenEditModal(document)}>
                        Actualizar
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          handleOpenNewModal(document);
                        }}>
                        Subir Documento
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <EditDocumentModal open={openEdit} setOpen={setOpenEdit} documentType={selectedDoc} />
      <NewDocumentModal open={openNew} setOpen={setOpenNew} documentType={selectedDoc} />
      <ViewDocumentModal open={openView} setOpen={setOpenView} documentData={selectedDoc} />
    </Fragment>
  );
};
export default UserDetailsTable;
