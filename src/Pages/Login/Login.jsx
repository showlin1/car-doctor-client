import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const Login = () => {

    const {signIn}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleLogin = e => {
        e.preventDefault();
        const form =e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user={email};
           
            // get access token
            axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    navigate(location?.state ? location?.state : '/')
                }
            })

        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-14">
                <img
                    src={login}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='text-4xl font-bold text-center mt-5'>Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error" type="submit" value="Login" />
                        </div>
                        <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to='/signUp'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;