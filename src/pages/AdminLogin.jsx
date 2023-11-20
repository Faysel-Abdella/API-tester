import { Form, redirect, useNavigation } from "react-router-dom";

export const action = async ({ request }) => {
  //Change the request to the formData to simplify
  const formData = await request.formData();
  //Change the formData w/c is array to normal JS obj to send to the backend
  const data = Object.fromEntries(formData);

  try {
    fetch("http://localhost:8080/api/v1/auth/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
  } catch (error) {
    console.log(error);

    return error;
  }
  return redirect("/dashboard");
};

const AdminLogin = () => {
  return (
    <div className="inside-singup">
      <Form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" />
        </div>
        <button type="submit">Admin Login</button>
      </Form>
    </div>
  );
};

export default AdminLogin;
