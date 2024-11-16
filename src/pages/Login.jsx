import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email');
        const password = form.get('password');
        signInUser(email, password)
            .catch(error => {
                alert(error.message)
            })
    }
    return (
        <div className="min-h-screen flex  justify-center items-center">
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl rounded-none ">
                <h3 className="text-2xl font-semibold  text-center pt-10">Login your account</h3>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-sm font-semibold text-center pb-5">Dont’t Have An Account ? <Link to="/auth/register" className="text-red-400">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;