
import Main from "./components/main/main";
import Chat from "./components/another/Chat";
import Kor from "./components/another/Kor";
import Usa from "./components/another/Usa";
import Chinese from "./components/another/Chinese";
import Japanese from "./components/another/Japanese";



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/kor" element={<Kor />} />
        <Route path="/Usa" element={<Usa />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/Japanese" element={<Japanese />} />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <>
      <Main/>
  </>
);



export default App;
