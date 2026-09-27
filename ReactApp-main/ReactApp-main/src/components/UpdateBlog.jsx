import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateBlog() {
    let { id } = useParams();
    let nav = useNavigate()
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")
    let [blog, setBlog] = useState({ title: "", description: "" })
    let submitHandler = async (event) => {
        event.preventDefault();
        try {
            let data = await fetch("https://project1-5swv.onrender.com/api/blogs/updateblog/" + id, {
                method: "PUT",
                body: JSON.stringify({ title, description }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            let res = await data.json();
            if (res.success) {
                alert(res.message);
                nav("/blogs")
            } else {
                console.error(res.message)
                alert(res.message)
            }
        } catch (error) {
            console.error("Failed to update blog:", error)
            alert("Unable to update the blog. Please try again.")
        }
    }

    let getblog = async () => {
        let allblogs = await fetch("https://project1-5swv.onrender.com/api/blogs/getblog/" + id,);
        let res = await allblogs.json();
        console.log(res);
        if (res.success) {
            setBlog({ ...res.data });
            setTitle(res.data.title)
            setDescription(res.data.description)
        } else {
            console.log(res)
        }
    }

    useEffect(() => {
        getblog()
    }, []);

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
            <h1>Update Blog form</h1>
            <form onSubmit={submitHandler} style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px", width: "500px", height: "500px", background: "pink" }}>
                <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='title' />
                <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder='description' />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
