import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Landing } from './Landing';
import { RegistroProducto } from './RegistroProducto';
import { VerAlgo } from './VerAlgo';
import { VerVentas } from './VerVentas';

// CSS
import './index.css';
import { AgregarVenta } from './AgregarVenta';


function App() {
    return (
        <Router> {/* <--- este es el que faltaba */}
            <div className='App'>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/ver-ventas" element={<VerVentas />} />
                    <Route path="/registro-producto" element={<RegistroProducto />} />
                    <Route path="/ver-algo" element={<VerAlgo />} />
                    <Route path="/agregar-venta" element={<AgregarVenta />} />
                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;
