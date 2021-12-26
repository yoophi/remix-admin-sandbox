import { Link, Outlet } from "remix";

export default function Dashboard() {
  return (
    <div>
      <h1>
        <Link to="/">Home</Link>
        {" / "}
        Dashboard
      </h1>
      <div
        style={{
          border: "1px solid silver",
          padding: "1em",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
