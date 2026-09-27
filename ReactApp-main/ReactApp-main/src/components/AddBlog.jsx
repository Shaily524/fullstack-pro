import React from 'react'
 import { useNavigate } from 'react-router-dom';

export default function AddBlog() {
    let nav = useNavigate()
    let submitHandler = async (event) => {
        event.preventDefault();
        let title = event.target.title.value
        let description = event.target.description.value
        let image = event.target.image.files[0];
        let newblog = new FormData;
        newblog.append("title", title)
        newblog.append("description", description)
        newblog.append("blogImage", image)
 
        let data = await fetch("https://project1-5swv.onrender.com/api/blogs/newblog", {
            method: "POST",
            body: newblog
        });
        let res = await data.json();
        if (res.success) {
            console.log(res);
            alert(res.message)
        } else {
            console.error(res.message)
            alert(res.message)
        }
    }
    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center" }}>
            <form onSubmit={submitHandler} style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px", width: "500px", height: "500px", background: "aqua" }}>
                <input type="text" name="title" placeholder='title' />
                <input type="text" name="description" placeholder='description' />
                <input type="file" name="image" />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
 