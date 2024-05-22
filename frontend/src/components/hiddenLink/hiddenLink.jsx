import { useSelector } from "react-redux";

const ShowOnLogin = ({ children }) => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state.auth);

    if(isLoggedIn){
        return children;
    }
    return null;
};

export const ShowOnLogout = ({ children }) => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state.auth);

    if(!isLoggedIn){
        return children;
    }
    return null;
};

export default ShowOnLogin;