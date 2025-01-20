import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import FireworksDisplay from './components/FireworksDisplay.jsx';
import ErrorPage from "./components/ErrorPage.jsx";
/**
 * @description The main component of the application
 * @returns {JSX.Element} The main component
 * -------------------------------------
 * @projectname CanvasCelebration
 * @authors Nethmi Umaya, Gayanuka Bulegoda
 * @version 1.0.0
 */
function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/display" element={<FireworksDisplay/>}/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;