
import { Route,Routes } from 'react-router-dom';
import './App.css';
import { About } from './component/About';
import { Home } from './component/Home';
import { Support } from './component/Support';
import { NotFound } from './component/NotFound';
import { NavLink} from 'react-router-dom';
import { Labs } from './component/Labs';
import { MainHaeader } from './component/MainHaeader';
function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/lab">Lab</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHaeader></MainHaeader>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/lab" element={<Labs></Labs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
