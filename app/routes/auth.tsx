import { Link, Outlet } from "remix";

export default function Auth() {
  return (
    <div>
      <h1>
        <Link to="/">Home</Link>
        {" / "}
        Auth
      </h1>
      <Outlet />
    </div>
  );
}
