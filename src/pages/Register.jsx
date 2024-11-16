import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="flex  justify-center items-center py-20 ">
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl rounded-none ">
                <h3 className="text-2xl font-semibold  text-center pt-10">Register your account</h3>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo-url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-sm font-semibold text-center pb-5">Already Have An Account ? <Link to="/auth/login" className="text-red-400">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;