import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const SignUp = () => {

    const {createUser}=useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form =e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name, email, password);

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
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
                    <h2 className='text-4xl font-bold text-center mt-5'>Sign Up</h2>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <input className="btn btn-error" type="submit" value="Sign Up" />
                        </div>
                        <p className='my-4 text-center'>Already have an Account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;