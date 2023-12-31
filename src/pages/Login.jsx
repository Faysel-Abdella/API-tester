import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";

export const action = async ({ request }) => {
  //Change the request to the formData to simplify
  const formData = await request.formData();
  //Change the formData w/c is array to normal JS obj to send to the backend
  const data = Object.fromEntries(formData);

  try {
    fetch(
      "https://bag6xc5pd2.us-east-1.awsapprunner.com/api/v1/auth/complete-register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );
  } catch (error) {
    console.log(error);

    return error;
  }
  return redirect("/dashboard");
};

const Login = () => {
  return (
    <div className="inside-singup">
      <Form method="POST">
        <div>
          <label>Nick Name</label>
          <input name="nickName" />
        </div>
        <div>
          <label>Gender</label>
          <input name="gender" />
        </div>
        <div>
          <label>Heigth</label>
          <input name="height" />
        </div>
        <div>
          <label>Weight</label>
          <input name="weight" />
        </div>
        <button type="submit"> Submit</button>
      </Form>
    </div>
  );
};

export default Login;
