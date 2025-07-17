import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./shared_components/Header"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Bylaws from './components/Bylaws/Bylaws';
import Policies from './components/Policies/Policies';
import WorkOrder from './components/WorkOrder/WorkOrder';
import UnitSample from './components/UnitSample/UnitSample';
import IncidentReport from './components/IncidentReport/IncidentReport'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bylaws" element={<Bylaws />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/workorder" element={<WorkOrder />} />
          <Route path="/incidentreport" element={<IncidentReport />} />
          <Route path="/unitsample" element={<UnitSample />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
