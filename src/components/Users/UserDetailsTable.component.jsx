import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { userDetailsTableHeaders } from ".";
import { useSelector } from "react-redux";
import moment from "moment";
import { useDispatch } from "react-redux";
import { startGetDocumentsSuccess } from "../../actions/userActions";
import { useParams } from "react-router-dom";
import EditDocumentModal from "./EditDocumentModal.component";
import ViewDocumentModal from "./ViewDocumentModal.component";

const UserDetailsTable = () => {
  const { userDocuments } = useSelector((state) => state.documents);
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEdit(true);
  };
  const handleOpenViewModal = () => {
    setOpenView(true);
  };
  const dispatch = useDispatch();
  const { idUsuario } = useParams();

  useEffect(() => {
    dispatch(startGetDocumentsSuccess(idUsuario));
  }, []);

  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {userDetailsTableHeaders.map((header) => (
                <TableCell key={header.id}>{header.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {userDocuments.map((document) => (
              <TableRow key={document.id}>
                <TableCell>{document.title}</TableCell>
                <TableCell>
                  {document.lastUpdate
                    ? "Se ha subido un documento"
                    : "No se ha cargado ningún documento"}
                </TableCell>
                <TableCell>
                  {document.lastUpdate
                    ? moment(document.lastUpdate.toDate()).format(
                        "MMMM DD YYYY hh:mm:ss"
                      )
                    : "NA"}
                </TableCell>
                <TableCell>
                  {document.lastUpdate ? (
                    <>
                      <Button variant="contained" onClick={handleOpenViewModal}>
                        Ver
                      </Button>
                      <ViewDocumentModal
                        open={openView}
                        setOpen={setOpenView}
                        documentURL={document.document}
                      />
                      <Button variant="outlined" onClick={handleOpenEditModal}>
                        Actualizar
                      </Button>
                    </>
                  ) : (
                    <Button variant="outlined">Subir Documento</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditDocumentModal open={openEdit} setOpen={setOpenEdit} />
    </Fragment>
  );
};
export default UserDetailsTable;
