import React, { useRef, useState } from 'react';
import styles from './Registration.module.css';
import axios from 'axios';


// refactor the code to use useRef instaed of useState for the user object
// change the input fields to use the ref object to get the value of the input fields


function Registration() {

//    const nameRef = useRef(null);
//     const emailRef = useRef(null);
//     const phoneRef = useRef(null);
//     const passwordRef = useRef(null);
//const user={name:'',email:'',phone:'',password:''};
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [phone,setPhone]=useState('');
const [password,setPassword]=useState('');

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log('Handle Change');
        // update the user state with prevState
        // validate the input fields
       // validateFields(name, value);
       
    }   

    // const validateFields = (name, value) => {
    //     let errorMessage = '';

    //     switch (name) {
    //         case 'name':
    //             errorMessage = value.length < 3 ? 'Name must be at least 3 characters long' : '';
    //             break;
    //         case 'email':
    //             errorMessage = value.trim() ?
    //             /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format.' :
    //             'Email is required';
    //             break;
    //         case 'phone':
    //             errorMessage = value.trim() ?
    //             /^\d{10}$/.test(value) ? '' : 'Phone number must be a valid Indian phone number (10 digits).' :
    //             'Phone is required';
    //             break;
    //         case 'password':
    //             errorMessage = value.trim() ?
    //             /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(value) ? '' : 'Password must be at least 8 characters long and include at least one number, one uppercase letter, and one special character.' :
    //             'Password is required';
    //             break;
    //         default:
    //             break;
    //     }

    //     setErrors((prevState) => ({ 
    //         ...prevState,
    //         [name]: errorMessage
    //     }));

    // }

    function getUserInfo  () {
       // fetch user information from the server using axios with the name entered in the name field
       console.log("--------getUserInfo by Name----"); 
       
       console.log(name);
        axios.get(`http://localhost:5000/api/users/${name}`)

            .then((response) => {
                console.log(response.data);
                // update the fields in the UO with the response data
                // e.target.name.value = response.data.email;
                // e.target.phone.value = response.data.phone;
                // e.target.password.value = response.data.password;
            }
            )
            .catch((error) => {
                console.log(error);
                // e.target.name.value = "";
                // e.target.phone.value = "";
                // e.target.password.value = ""
            });

    }

    const updateUserInfo = (e) => {
        // update user information on the server using axios with the name entered in the name field

        const updatedUser = {
            email,
            phone,
            password
        };

        axios.put(`http://localhost:5000/api/users/${name}`, updatedUser)

            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const deleteUserInfo = () => {
        // delete user information on the server using axios with the name entered in the name field
        axios.delete(`http://localhost:5000/api/users/${name}`)

            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    

    const handleSubmit = (event) => {
        event.preventDefault();
         
         const newUser={name,email,phone,password};
         console.log(newUser);
        // Object.keys(newUser).forEach((key) => {
        //     validateFields(key, newUser[key]);
        // });

        // post this user information to the server using axios
        // post user api available at http://localhost:5000/api/users

        axios.post('http://localhost:5000/api/users', newUser)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
       
    return (
        <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    className={styles.input}
                    onChange={(e)=>setName(e.target.value)} 
                  
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    className={styles.input}
                    onChange={(e)=>setEmail(e.target.value)} 
                  
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    className={styles.input}
                  
                    onChange={(e)=>setPhone(e.target.value)}
                   
                />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className={styles.input}
                    onChange={(e)=>setPassword(e.target.value)}
                   
                />
            </div>
                {errors.password && <p className={styles.error}>{errors.password}</p>}
                <button type="button" className={styles.submitButton} onClick={getUserInfo}>GetUserInfo</button>
                <button type="button" className={styles.submitButton} onClick={updateUserInfo}>UpdateUserInfo</button>
                <button type="button" className={styles.submitButton} onClick={deleteUserInfo}>DeleteUserInfo</button>
            <button type="submit" className={styles.submitButton}>Register</button>
        </form>
    );
}

export default Registration;