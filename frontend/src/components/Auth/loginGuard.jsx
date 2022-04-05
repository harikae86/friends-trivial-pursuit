import { useContext, useEffect } from "react";
import { userContext } from "../Auth";
import { useNavigate } from "react-router-dom";

const loginGuard = (Component) => {
  const Guarded = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(userContext);

    useEffect(() => {
      if (!user) {
        navigate("/");
      }
    }, [navigate, user]);

    if (user) {
      return <Component {...props} user={user} />;
    }
    return null;
  };

  return Guarded;
};

export default loginGuard;
