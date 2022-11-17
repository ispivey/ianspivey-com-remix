import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>ianspivey.com</h1>
      <Link
        to="/posts">
          Posts
      </Link>
    </div>
  );
}
