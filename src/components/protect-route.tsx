import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";

function ProtectRoute({ children }: { children: React.ReactNode }) {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}

export default ProtectRoute;
