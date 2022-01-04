import logo from './logo.svg';
import './App.css';
import MyInput from "./components/UI/MyInput/MyInput";
import Form from "./components/Form/Form";
import {Routes, Route, Outlet} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/AboutPage/AboutPage";
import {createContext, useState} from "react";

export const AppContext = createContext(null);

function App() {



  return (
    <AppContext.Provider value={{

}}>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Form/>}/>
                <Route path={'about'} element={<AboutPage/>}/>
            </Route>
        </Routes>
    </AppContext.Provider>



  );
}

function Layout() {
    return (
        <div className="App">
            <Header/>
            <main className={'content'}>
                <Outlet/>
            </main>
        </div>
    )
}



export default App;
