
import './App.css';
import Navbar from './Components/Navbar';
import Meating from './Components/Meating';
// import Footer from './Components/Footer';
import AddMeating from './Components/AddMeating';
import UpdateMeating from './Components/UpdateMeating';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingUp from './Components/SingUp';
import LogIn from './Components/LogIn';

function App() {
  return (
    <div className="App">
                <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meating/>}></Route>
        <Route path='addmeating' element={<AddMeating/>}></Route>
        <Route path='updatemeating/:id' element={<UpdateMeating/>}></Route>
      </Routes>
      <Routes>
        {/* <Route  path='singup' element={<SingUp/>}></Route> */}
        <Route  path='login' element={<LogIn/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    

    </div>
  );
}

export default App;
