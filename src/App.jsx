import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import FireworksDisplay from './components/FireworksDisplay.jsx';
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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/display" element={<FireworksDisplay/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;