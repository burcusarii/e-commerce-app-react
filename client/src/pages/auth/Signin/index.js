import React from "react";
import {
  Box,
  Flex,
  Button,
  Input,
  Heading,
  FormControl,
  FormLabel,
  Alert,
} from "@chakra-ui/react";
import validationSchema from "./validations";
import { useFormik } from "formik";
import { fetchLogin } from "../../../api.js";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
function Signin() {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  console.log("isLoggedIn", isLoggedIn);
  // useFormik ile yapılan form tanımlamaları
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,

      // form submit olduğunda calısacak
      onSubmit: async (values, bag) => {
        try {
          const loginResponse = await fetchLogin({
            email: values.email,
            password: values.password,
          });
          login(loginResponse);
          navigate("/profile");
          console.log(loginResponse);
        } catch (e) {
          bag.setErrors({ general: e.response.data.message });
          console.log(e);
        }
      },
    });

  return (
    <Flex align={"center"} width={"%100"} justify={"center"}>
      <Box
        py={"10"}
        px={"20"}
        bgGradient="radial(gray.300, pink.200)"
        borderRadius={"20"}
        boxShadow="2xl"
        width={"500px"}
      >
        <Box>
          <Heading textAlign={"center"}>Sign In</Heading>
        </Box>
        <Box my={5}>
          {errors.general && <Alert status="error">{errors.general}</Alert>}
        </Box>
        <Box mt={"4"}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="e-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                isInvalid={touched.email && errors.email}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </FormControl>
            <FormControl mt={"4"}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                isInvalid={touched.password && errors.password}
              />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}
            </FormControl>

            <Button
              mt={"4"}
              type="submit"
              width="full"
              bgGradient="linear(to-t, blue.200, pink.500)"
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Signin;
