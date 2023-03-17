import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { userDetailsTableHeaders } from ".";
import { useSelector } from "react-redux";
import moment from "moment";

const UserDetailsTable = () => {
  const { userDocs } = useSelector((state) => state.documents);

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
          {userDocs.map((document) => (
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
