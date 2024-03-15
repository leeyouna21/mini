
import Main from "./components/main/main";
import Chat from "./components/another/Chat";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/Chat" element={<Chat />} />
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
