import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Blogs() {
    let nav = useNavigate()
    let [blogs, setBlogs] = useState([{
        title: "", description: "", blogImage: { url: "favicon.svg", name: "" }
    }]);


    let getblogs = async () => {
        let allblogs = await fetch("https://project1-5swv.onrender.com/api/blogs/allblogs",);
        let res = await allblogs.json();
        console.log(res);
        if (res.success) {
            setBlogs([...res.data])
        } else {
            console.log(res)
        }
    }
    useEffect(() => {
        getblogs();
    }, []);
    let deleteBlog = async (id) => {
        let deleteblog = await fetch("https://project1-5swv.onrender.com/api/blogs/deleteblog/" + id, {
            method: "DELETE",
        });
        let res = await deleteblog.json();
        if (res.success) {
            alert(res.message);
            getblogs();
        } else {
            console.log(res.message)
        }
    }
    let updateBlog = async (id) => {
        nav("/updateblog/" + id)
    }
    return (
        <div className='blogs'>
            <div className="blog-container">
                {blogs.map((v, i) => {
                    return (
                        <>
                            <div className='blog-card'>
                                <div>
                                    <p>{v.title}</p>
                                    <p>{v.description}</p>
                                </div>
                                <div className='blogimg'>
                                    <img style={{ width: "200px", height: "auto" }} src={v.blogImage.url} alt={v.blogImage.name} />
                                    <button onClick={() => { deleteBlog(v._id) }}>Delete</button>
                                    <button onClick={() => { updateBlog(v._id) }}>Update</button>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}


// import React, { useEffect, useState } from 'react'
 
// export default function Blogs() {
//     let [blogs, setBlogs] = useState([{
//         title: "", description: "", blogImage: { url: "favicon.svg", name: "" }
//     }]);
 
 
//     let getblogs = async () => {
//         let allblogs = await fetch("http://localhost:8000/api/blogs/allblogs");
//         let res = await allblogs.json();
//         console.log(res);
//         if (res.success) {
//             setBlogs([...res.data])
//         } else {
//             console.log(res)
//         }
//     }
//     useEffect(() => {
//         getblogs();
//     }, []);
//     let deleteBlog = async (id) => {
//         let deleteblog = await fetch("http://localhost:8000/api/blogs/deleteblog/" + id, {
//             method: "DELETE",
//         });
//         let res = await deleteblog.json();
//         if (res.success) {
//             alert(res.message);
//             getblogs();
//         } else {
//             console.log(res.message)
//         }
//     }
//     return (
//         <div className='blogs'>
//             <div className="blog-container">
//                 {blogs.map((v, i) => {
//                     return (
//                         <>
//                             <div className='blog-card'>
//                                 <div>
//                                     <p>{v.title}</p>
//                                     <p>{v.description}</p>
//                                 </div>
//                                 <div>
//                                     <img style={{ width: "200px", height: "auto" }} src={v.blogImage.url} alt={v.blogImage.name} />
//                                     <button onClick={() => { deleteBlog(v._id) }}>Delete</button>
//                                 </div>
//                             </div>
//                         </>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }