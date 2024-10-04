import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';


AOS.init(); // Initialize AOS

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
