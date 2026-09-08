import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../../../context/auth/AuthContext";

function SignUp() {
  const { signUp } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    signUp(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Nmae</label>
          <input
            type="text"
            className="input"
            placeholder="Name"
            {...register("name", { required: "Nmae is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register("password", {
              required: "password is required",
              min: 8,
              max: 14,
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div>
            <p className="link link-hover">
              Already have accounts?
              <Link to="/login">
                <span className="underline text-blue-400 font-bold">
                  {" "}
                  Login
                </span>
              </Link>
            </p>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUp;
