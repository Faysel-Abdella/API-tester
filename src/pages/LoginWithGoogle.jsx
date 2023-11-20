import { Form, redirect, useNavigation } from "react-router-dom";

const action = async (e) => {
  e.preventDefault();
  try {
    const dataFromServer = await fetch(
      "http://localhost:8080/api/v1/auth/google"
    );

    return redirect("/dashboard");
  } catch (error) {
    console.log(error);

    return error;
  }
};

const LoginWithGoogle = () => {
  return (
    <div>
      <form method="GET">
        <button onClick={action}>Login with google</button>
        <a href="http://localhost:8080/api/v1/auth/google">Login now</a>
      </form>
    </div>
  );
};

export default LoginWithGoogle;
