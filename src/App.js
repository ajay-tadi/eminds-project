
// import { BrowserRouter, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CarouselComp from './components/CarouselComp';
import TrustedComponent from './components/TrustedComponent';
import ReinventComponent from './components/ReinventComponent';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
        <Header />
        <CarouselComp /> 
        <TrustedComponent />  
        <ReinventComponent />
    </>
    
  );
}

export default App;
