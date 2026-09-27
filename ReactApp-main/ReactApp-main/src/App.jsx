import React from 'react'
import Registration from './components/Registration'
import "./App.css"
import AddBlog from './components/AddBlog'
import UpdateBlog from './components/UpdateBlog.jsx'
import Blogs from './components/Blogs'
import { NavLink, Route, Routes } from 'react-router-dom'
export default function App() {
    return (
        <>
            {/* <Registration /> */}
           
            <nav>
                    <NavLink to="/"> addblog</NavLink>
                <NavLink to="/blogs"> blogs</NavLink>
            </nav>
                <Routes>
                    <Route path="/" element={<AddBlog />}></Route>
                    <Route path="/blogs" element={<Blogs />}></Route>
                    <Route path="/updateblog/:id" element={<UpdateBlog />}></Route>
                </Routes>
            
        </>
    )
}

// import { Route, Routes } from "react-router-dom";
// import Layout from "./layout/Layout";
// import Home from "./pages/Home";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
// import Services from "./pages/Services.jsx";
// import Error from "./pages/Error.jsx";
// import Registration from "./components/Registration.jsx";
// import AddBlog from "./components/AddBlog.jsx";
// import Blogs from "./components/Blogs.jsx";
// function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/registration" element={<Registration />} />
//         <Route path="/addblog" element={<AddBlog />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="*" element={<Error />} />


//       </Routes>
//     </Layout>
//   )
// }

// export default App;