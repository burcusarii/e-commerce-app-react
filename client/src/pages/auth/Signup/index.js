import React from "react";
import {
  Box,
  Flex,
  Button,
  Input,
  Heading,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import validationSchema from "./validations";
import { useFormik } from "formik";

function Singup() {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema,
      onSubmit: async (values, bag) => {
        console.log(values);
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
          <Heading textAlign={"center"}>Sign Up</Heading>
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
            <FormControl mt={"4"}>
              <FormLabel>Password Confirm</FormLabel>
              <Input
                placeholder="password confirm"
                name="passwordConfirm"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirm}
                isInvalid={touched.passwordConfirm && errors.passwordConfirm}
              />
              {touched.passwordConfirm && errors.passwordConfirm && (
                <div>{errors.passwordConfirm}</div>
              )}
            </FormControl>
            <Button
              mt={"4"}
              type="submit"
              width="full"
              bgGradient="linear(to-t, blue.200, pink.500)"
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Singup;
