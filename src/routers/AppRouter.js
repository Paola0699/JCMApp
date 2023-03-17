import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorPage } from '../components/Common';
import { DocumentsList, DocumentsMenuScreen, PDFView } from '../components/Documents';
import { LoginScreen } from '../components/Login';
import { UsersScreen } from '../components/Users';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginScreen />} />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/documentos' element={<DocumentsMenuScreen />} />
                <Route path='/documentos/:idCategory' element={<DocumentsList />} />
                <Route path='/documentos/preview' element={<PDFView />} />
                <Route path='/usuarios' element={<UsersScreen/>}/>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;