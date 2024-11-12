// import logo from './logo.svg';
// import './App.css';
// import Card from './components/card';
// import REGISTRATION from './components/registration';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar';
// import Login from './components/login';
// import Footer from './components/footer';
// import Intro from './components/Intro';
// import Faq from './components/faq';
// import Contact from './components/contact';



// function App() {
//   return  (
//     <Router>
//     <div  className="App">
//       <Navbar></Navbar>
//       <Routes>
//         <Route path='/card' element={<Card></Card>}></Route>
//         <Route path='/login' element={<Login></Login>}> </Route>
//         <Route path='/intro' element={<Intro></Intro>}></Route>
//         <Route path='/registration' element={<REGISTRATION></REGISTRATION>}></Route>
//         <Route path='/faq' element={<Faq></Faq>}></Route>
//         <Route path='/contact' element={<Contact></Contact>}></Route>
        
          
        
//       </Routes>
//       <Footer></Footer>
      
//       {/* <Card></Card>
//       <REGISTRATION></REGISTRATION> */}
      
//     </div>
//     </Router>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import REGISTRATION from './components/registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Footer from './components/footer';
import Intro from './components/Intro';
import Faq from './components/faq';
import Contact from './components/contact';
import Annuncio from './components/annuncio';
import Profilo from './components/profilo';
import Modifica from './components/modifica';
import Curriculum from './components/curriculum';
 
 
 
function App() {
  return  (
    <Router>
    <div  className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/card' element={<Card></Card>}></Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/' element={<Intro></Intro>}></Route>
        <Route path='/registration' element={<REGISTRATION></REGISTRATION>}></Route>
        <Route path='/faq' element={<Faq></Faq>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/annuncio' element={<Annuncio></Annuncio>}></Route>
        <Route path='/profilo' element={<Profilo></Profilo>}></Route>
        <Route path='/modifica' element={<Modifica></Modifica>}></Route>
        <Route path='/curriculum' element={<Curriculum></Curriculum>}></Route>
       
         
       
      </Routes>
      <Footer></Footer>
     
      {/* <Card></Card>
      <REGISTRATION></REGISTRATION> */}
     
    </div>
    </Router>
  );
}
 
export default App;
 
