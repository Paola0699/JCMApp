import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../components/Common';
import { PDFView } from '../components/Documents';
import {
  LoginScreen,
  UsersScreen,
  UserDetailsScreen,
  DocumentsMenuScreen,
  DocumentsListScreen,
  AlertsScreen,
  TasksScreen
} from '../pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/documentos" element={<DocumentsMenuScreen />} />
        <Route path="/documentos/:idCategory" element={<DocumentsListScreen />} />
        <Route path="/documentos/preview" element={<PDFView />} />
        <Route path="/usuarios" element={<UsersScreen />} />
        <Route path="/:idUsuario" element={<UserDetailsScreen />} />
        <Route path="/alertas" element={<AlertsScreen />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/tareas" element={<TasksScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
