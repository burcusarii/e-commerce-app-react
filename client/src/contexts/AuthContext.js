import { createContext, useState, useContext, useEffect } from "react";
import { fetcMe } from "../api";
import { Flex, Spinner } from "@chakra-ui/react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };

  useEffect(() => {
    (async () => {
      try {
        const me = await fetcMe();
        setIsLoggedIn(true);
        setUser(me);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);
  const values = {
    user,
    isLoggedIn,
    login,
  };

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          size="xl"
          color="red"
        ></Spinner>
      </Flex>
    );
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
