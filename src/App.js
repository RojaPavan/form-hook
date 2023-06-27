import "./App.css";
import Input from "./Components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Username is a required field"),
  phoneNumber: yup
    .string()
    .required("Phonenumber is a required field")
    .matches(
      "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
      "phone number is not valid!."
    ),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not Valid!"),
  password: yup.string().min(6, "Password must be minimum six characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must be match."),
});

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.log(data);
    if (schema) {
      alert("Registration sucessfull");
    }
  };

  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <div className="Sign-up">
      <form onSubmit={handleSubmit(formSubmit, onError)}>
        <Input
          id="username"
          label="Username"
          type="text"
          placeholder="Enter your name"
          register={{ ...register("username") }}
          errorMessage={errors.username?.message}
        />

        <Input
          id="phonenumber"
          label="Phone-Number"
          type="phoneNumber"
          placeholder="Enter your phonenumber"
          register={{ ...register("phoneNumber") }}
          errorMessage={errors.phoneNumber?.message}
        />
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="Enter your E-mail"
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
        />
        <Input
          id="confirmPassword"
          label="Cofirm Password"
          type="password"
          placeholder="Confirm Password"
          register={{ ...register("confirmPassword") }}
          errorMessage={errors.confirmPassword?.message}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
