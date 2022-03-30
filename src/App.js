import './App.scss';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Details from './Details/Details'
import { useState } from 'react';
import Footer from './Footer/Footer'
import portfoliologo from './Assets/portfoliologo.png'
import Todos from './Todos/Todos'
import Feedback from './Feedback/Feedback';

function App() {

    const [checknav, changenav] = useState(false);

    return (
        <Router>
            <div className="allin">
                <div className="LogoImgDiv">
                    <img className="LogoImg" src={portfoliologo} alt="Code Wars Logo"/>
                </div>

                <div className="nav-container">
                    <div className={checknav? "burger active": "burger"} onClick={() => changenav(!checknav)} >
                        <div class="bun top"></div>
                        <div class="filling"></div>
                        <div class="bun bottom"></div>
                    </div>
                </div>

                <nav className={checknav? "topnav show": "topnav"}>
                    <ul>
                        <li className="green"><Link to={'/'} className="nav-link"> Details </Link></li>
                        <li className="red"><Link to={'/todos'} className="nav-link"> Todos </Link></li>
                        <li className="blue"><Link to={'/feedback'} className="nav-link"> Feedback </Link></li>
                    </ul>
                </nav>


                <Routes>
                    <Route exact path='/' element={<Details />} />
                    <Route exact path='/todos' element={<Todos />} />
                    <Route exact path='/feedback' element={<Feedback />} />
                </Routes>
                <Footer/>
            </div>
            
        </Router>
    );
}

export default App;