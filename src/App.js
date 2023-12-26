import "./App.css";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import { GitHubProvider } from "./context/Github/GitHubContext";
import User from "./Pages/User";
function App() {
  return (
 <>
   <GitHubProvider>
    <Router>
      <div className ='flex flex-col justify-between h-screen'>
        <Header />
        <main className = 'container mx-auto px-3 pb-12'>
          <Routes>
            <Route path = '/' element={<Home />} />
            <Route path = '/about' element={<About />} />
            <Route path ="/user/:login" element={<User />} />
            <Route path = '/notfound' element={<NotFound />} />
            <Route path = '/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </GitHubProvider>
 </>
  );
}

export default App;
