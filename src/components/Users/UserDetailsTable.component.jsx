import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { userDetailsTableHeaders } from ".";
import { useSelector } from "react-redux";
import moment from "moment";
import { useDispatch } from "react-redux";
import { startGetDocumentsSuccess } from "../../actions/userActions";
import { useParams } from "react-router-dom";

const UserDetailsTable = () => {
  const { userDocuments } = useSelector((state) => state.documents);
  const dispatch = useDispatch();
  const { idUsuario } = useParams();

  useEffect(() => {
    dispatch(startGetDocumentsSuccess(idUsuario));
  }, []);

  return (
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
                    <Button variant="contained">Ver</Button>
                    <Button variant="outlined">Actualizar</Button>
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
  );
};
export default UserDetailsTable;
