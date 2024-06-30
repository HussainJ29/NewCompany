import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/globals.css'
import StateProvider from './Providers/stateProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <StateProvider>
    <Layout/>
    </StateProvider>
  </React.StrictMode>,
)
