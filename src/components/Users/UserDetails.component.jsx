import React, { Fragment, useEffect } from "react";
import UserDetailsTable from "./UserDetailsTable.component";
import { useDispatch } from "react-redux";
import { startGetDocumentsSuccess } from "../../actions/userActions";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { idUsuario } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetDocumentsSuccess(idUsuario));
  }, []);
  return (
    <Fragment>
      <UserDetailsTable />
    </Fragment>
  );
};
export default UserDetails;
