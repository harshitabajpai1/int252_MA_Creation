// import React, { useState } from 'react';
// import { Form, Button, Container, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);

//     const handleLogin = (e) => {
//         e.preventDefault();
    
//         const storedEmail = localStorage.getItem("userEmail");
//         const storedPassword = localStorage.getItem("userPassword");
    
//         if (email === storedEmail && password === storedPassword) {
//             navigate('/'); // Redirect to dashboard on success
//         } else {
//             setError("Invalid email or password");
//         }
//     };
    
    

//     return (
//         <Container style={{ maxWidth: '400px', marginTop: '50px' }}>
//             <h3>Login</h3>
//             {error && <Alert variant="danger">{error}</Alert>}
//             <Form onSubmit={handleLogin}>
//                 <Form.Group controlId="formEmail" className="mb-3">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control 
//                         type="email" 
//                         placeholder="Enter email" 
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="formPassword" className="mb-3">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control 
//                         type="password" 
//                         placeholder="Password" 
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)} 
//                         required
//                     />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                     Login
//                 </Button>
//             </Form>
//         </Container>
//     );
// };

// export default Login;




import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });

            if (response.status === 200) {
                // Redirect to home page or dashboard after successful login
                navigate('/');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Server error');
        }
    };

    return (
        <Container style={{ maxWidth: '400px', marginTop: '50px' }}>
            <h3>Login</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
