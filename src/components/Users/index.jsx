import UsersScreen from "./UsersScreen.component";
import UsersTable from "./UsersTable.compoenent";
import NewUserModal from "./NewUserModal.component";
import UserDetails from "./UserDetails.component";
const usersTableHeaders = [
  {
    id: "HEAD-0",
    title: "Id",
  },
  {
    id: "HEAD-1",
    title: "Nombre",
  },
  {
    id: "HEAD-2",
    title: "Empresa",
  },
  {
    id: "HEAD-3",
    title: "Correo",
  },
  {
    id: "HEAD-4",
    title: "Acciones",
  },
];
export {
  UsersScreen,
  usersTableHeaders,
  UsersTable,
  NewUserModal,
  UserDetails,
};
