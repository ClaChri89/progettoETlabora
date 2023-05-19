import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = () => {

        axios.post('http://localhost:4000/login', [], {

            headers: {

                'email': email,
                'password': password

            }

        })
        .then((response) => {

            if ( response.status == 200 ) {

                navigate('/form');

            }

        })
        .catch((error) => {

            console.log(error);

        });

    }
    
    return (
        <>
        
            <div className="container">

                <div className="row">

                    <div className="col-sm-6 col-sm-offset-3">

                        <br /><br />

                        <label>Email</label>

                        <input type="email" className="form-control" onChange={(e) => { setEmail( e.target.value ) }} />

                        <br />

                        <label>Password</label>

                        <input type="password" className="form-control" onChange={(e) => { setPassword( e.target.value ) }} />

                        <br />

                        <button onClick={login} className="btn">Login</button>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Login