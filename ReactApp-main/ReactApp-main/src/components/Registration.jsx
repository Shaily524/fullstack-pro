import { useState } from 'react'
// import { saveStored } from '../utils/storage'
 
function Registration() {
    const initialForm = {
        name: '',
        email: '',
        password: '',
        mobilenumber: '',
        age: '',
        address: '',
        gender: '',
        image: '',
    }
    const [Form, setForm] = useState(initialForm)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
 
    function handleChange(event) {
        const { name, value } = event.target
        setForm((currentData) => ({ ...currentData, [name]: value }))
        setSubmitted(false)
        setError('')
    }
 
    function handleImageChange(event) {
        const file = event.target.files?.[0]
        if (!file) {
            setForm((currentData) => ({ ...currentData, image: '' }))
            return
        }
        setForm((currentData) => ({ ...currentData, image: file }))
 
    }
 
    async function handleSubmit(event) {
        event.preventDefault()
        setSubmitted(false)
        setError('')
 
        try {
            console.log(Form);
            let data = new FormData;
            for (let i in Form) {
                if (i == "image") {
                    data.append("profileimage", Form[i])
                } else {
                    data.append(i, Form[i])
                }
            }
            let user = await fetch("https://project1-5swv.onrender.com/api/users/register", {
                method: "POST",
                body: data,
            });
            let res = await user.json();
            console.log(res)
 
        } catch (error) {
            console.log(error)
            setError('We could not save your registration. Please try again.')
        }
    }
 
    return (
        <main className="registration-page">
            <section className="registration-card" aria-labelledby="registration-title">
                <p className="eyebrow">Create your account</p>
                <h1 id="registration-title">Join our <em>community</em></h1>
                <p className="muted">Complete your details below to get started.</p>
 
                <form className="registration-form" onSubmit={handleSubmit}>
                    <div className="registration-grid">
                        <label>
                            Full name
                            <input type="text" name="name" value={Form.name} onChange={handleChange} placeholder="Your name" autoComplete="name" required />
                        </label>
                        <label>
                            Email address
                            <input type="email" name="email" value={Form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" required />
                        </label>
                        <label>
                            Password
                            <input type="password" name="password" value={Form.password} onChange={handleChange} placeholder="Create a password" autoComplete="new-password" minLength="8" required />
                        </label>
                        <label>
                            Mobile number
                            <input type="tel" name="mobilenumber" value={Form.mobilenumber} onChange={handleChange} placeholder="e.g. 9876543210" autoComplete="tel" pattern="[0-9+() -]{7,}" required />
                        </label>
                        <label>
                            Age
                            <input type="number" name="age" value={Form.age} onChange={handleChange} placeholder="Your age" min="13" max="120" required />
                        </label>
                        <label>
                            Profile image
                            <input type="file" name="image" onChange={handleImageChange} accept="image/*" />
                        </label>
                    </div>
 
                    <label>
                        Address
                        <textarea name="address" value={Form.address} onChange={handleChange} placeholder="Enter your full address" rows="3" required />
                    </label>
 
                    <fieldset className="gender-fieldset">
                        <legend>Gender</legend>
                        <div className="gender-options">
                            <label><input type="radio" name="gender" value="female" checked={Form.gender === 'female'} onChange={handleChange} required /> Female</label>
                            <label><input type="radio" name="gender" value="male" checked={Form.gender === 'male'} onChange={handleChange} /> Male</label>
                            <label><input type="radio" name="gender" value="other" checked={Form.gender === 'other'} onChange={handleChange} /> Other</label>
                        </div>
                    </fieldset>
 
                    <button className="btn dark full" type="submit">Create account</button>
                    {submitted && <p className="form-success" role="status">Your registration details are ready to submit.</p>}
                    {error && <p className="form-error" role="alert">{error}</p>}
                </form>
            </section>
        </main>
 
 
    )
}
export default Registration
 