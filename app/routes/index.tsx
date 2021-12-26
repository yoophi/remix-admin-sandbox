import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <p>
        <code>index</code> 페이지 입니다.
      </p>
      <ul>
        <li>
          <Link to="/auth/login">Login</Link>
        </li>
        <li>
          <Link to="/dashboard/users">User Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}
