import {Route, Routes} from "react-router-dom";
import Pages from "./components/Pages/Pages.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/contacts"} element={<Contacts />}></Route>
            <Route path={"/pages"} element={<Pages />}></Route>
            <Route path={"/posts"} element={<Posts />}></Route>
          </Routes>
        </main>
    </div>
  )
}
export default App
