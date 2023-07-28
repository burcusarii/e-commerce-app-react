import { useNavigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Text, Button } from "@chakra-ui/react";

function Profile() {
  const { user, logout } = useAuth();
  let navigate = useNavigate();

  const handleLogout = async () => {
    logout(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <Text fontSize="22">Profile</Text>
      <code>{JSON.stringify(user)}</code>
      <br />
      <br />
      <Button colorScheme="blue" variant="solid" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Profile;
