import { Form, Link } from "remix";

export default function Index() {
  return (
    <div>
      <h2>Login</h2>
      <Form>
        <div>
          <label>username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </Form>
    </div>
  );
}
