/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import reactDom from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
// start the Stimulus application
import './bootstrap';
import React from 'react'

  import TravelerTable from './components/TravelerTable';
 import TravelerContextProvider from './contexts/TravelerContext';
 import TravelTable from './components/TravelTable';
 
 const App = () => {
  return (
   <TravelerContextProvider>
       <CssBaseline>
        
       <TravelerTable />  
        </CssBaseline>     
   </TravelerContextProvider> 

    
  )
}
reactDom.render(<App/>,document.getElementById('root'))
    