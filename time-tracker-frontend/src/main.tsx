import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import BaseLayout from './layout/BaseLayout.tsx';
import Dashboard from './views/dashboard/Dashboard.tsx';
import Tracker from './views/tracker/Tracker.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
         <Route element={<BaseLayout />}>
            <Route index element={<Tracker />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tracker" element={<Tracker />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
