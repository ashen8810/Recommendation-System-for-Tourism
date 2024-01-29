import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";



const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px" color="white"  sx={{
      background: "rgba(0, 0, 0, 0.59)",
      borderRadius: "20px",
      padding: "2rem",
      display:"flex",
      flexDirection:"column",
      gap: "1rem"
    }}>
      {/* <Box display="flex">
        <Header title="CREATE USER" subtitle="Create a New User Profile" />
      </Box> */}

      <Box sx={{display:"flex",alignItems:"center", justifyContent:"center",fontWeight:"500", fontSize:"1.2rem", color:"rgb(54, 234, 54)"}}>Create User</Box>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Username"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{
                  gridColumn: "span 4",
                  '& .MuiFilledInput-root': {
                    backgroundColor: ' rgba(255,255,255,0.496)',
                    color: 'white',
                    // background:"transparent"
                   
                  },

                  '& .MuiInputLabel-root': {
                    color: 'black',
                    
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 4",
                  '& .MuiFilledInput-root': {
                    background: 'rgba(255,255,255,0.496)',
                    // background:"transparent",
                    color: 'white',
                  },

                  '& .MuiInputLabel-root': {
                    color: 'black',
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{
                  gridColumn: "span 4",
                  '& .MuiFilledInput-root': {
                    background: 'rgba(255,255,255,0.496)',
                    // background:"transparent",
                    color: 'white',
                  },

                  '& .MuiInputLabel-root': {
                    color: 'black',
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                name="confirmPassword"
                error={!!touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{
                  gridColumn: "span 4",
                  '& .MuiFilledInput-root': {
                    background: 'rgba(255,255,255,0.496)',
                    // background:"transparent",
                    color: 'white',
                  },

                  '& .MuiInputLabel-root': {
                    color: 'black',
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                name="country"
                error={!!touched.country && !!errors.country}
                helperText={touched.country && errors.country}
                sx={{
                  gridColumn: "span 4",
                  '& .MuiFilledInput-root': {
                    background: 'rgba(255,255,255,0.496)',
                    // background:"transparent",
                    color: 'white',
                  },

                  '& .MuiInputLabel-root': {
                    color: 'black',
                  },
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" 
                sx={{
                  backgroundColor: '#ff805d', 
                  '&:hover': {
                    backgroundColor: '#ff5d5d', 
                  },
                }}
              
              >
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  country: yup.string().required("Country is required"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  country: "",
};

export default Form;
