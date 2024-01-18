import { useContext } from "react";
import { UserContext } from "./context/context";


export const Logout = () => {
    const { dispatchUserEvent } = useContext(UserContext);
  dispatchUserEvent("LOGOUT");
};
