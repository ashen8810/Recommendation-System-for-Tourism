import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import { toast } from "react-toastify";


const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = async (values) => {
    try {
      console.log(values)
      const response = await axios.post('http://localhost:8000/api/user/register-admin/', values);
      console.log(response.data);
      if(response.status===201){
        toast.success(response.data.msg)
      }
    } catch (error) {
      console.error('Error creating admin user:', error.message);
    }
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
      <Typography
      variant="h4"
      align="center"
      sx={{ fontWeight: "500", color: "rgb(54, 234, 54)" }}
    >
      Create Admin User
    </Typography>
      {/* <Box sx={{display:"flex",alignItems:"center", justifyContent:"center",fontWeight:"500", fontSize:"1.2rem", color:"rgb(54, 234, 54)"}}>Create User</Box> */}

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
                value={values.adminName}
                name="adminName"
                error={!!touched.adminName && !!errors.adminName}
                helperText={touched.adminName && errors.adminName}
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
                value={values.password2}
                name="password2"
                error={!!touched.password2 && !!errors.password2}
                helperText={touched.password2 && errors.password2}
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
  adminName: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  country: yup.string().required("Country is required"),
});

const initialValues = {
  adminName: "",
  email: "",
  password: "",
  password2: "",
  country: "",
};



// const isNonMobile = useMediaQuery("(min-width:600px)");

//   const handleFormSubmit = async (values) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/user/register-admin/",
//         values
//       );
//       if (response.status === 201) {
//         toast.success(response.data.msg);
//       }
//     } catch (error) {
//       console.error("Error creating admin user:", error.message);
//     }
//   };

//   return (
//     <Box
//       m="20px"
//       color="white"
//       sx={{
//         background: "rgba(0, 0, 0, 0.59)",
//         borderRadius: "20px",
//         padding: "2rem",
//         display: "flex",
//         flexDirection: "column",
//         gap: "1rem",
//       }}
//     >
//       <Typography
//         variant="h4"
//         align="center"
//         sx={{ fontWeight: "500", color: "rgb(54, 234, 54)" }}
//       >
//         Create User
//       </Typography>

//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={initialValues}
//         validationSchema={checkoutSchema}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(1, minmax(0, 1fr))"
//               sx={{
//                 "& > div": {
//                   gridColumn: isNonMobile ? undefined : "span 1",
//                 },
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Username"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.adminName}
//                 name="adminName"
//                 error={!!touched.adminName && !!errors.adminName}
//                 helperText={touched.adminName && errors.adminName}
//                 InputProps={{
//                   sx: {
//                     backgroundColor: "rgba(255,255,255,0.7)",
//                     color: "white",
//                   },
//                 }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Email"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.email}
//                 name="email"
//                 error={!!touched.email && !!errors.email}
//                 helperText={touched.email && errors.email}
//                 InputProps={{
//                   sx: {
//                     backgroundColor: "rgba(255,255,255,0.7)",
//                     color: "white",
//                   },
//                 }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="password"
//                 label="Password"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.password}
//                 name="password"
//                 error={!!touched.password && !!errors.password}
//                 helperText={touched.password && errors.password}
//                 InputProps={{
//                   sx: {
//                     backgroundColor: "rgba(255,255,255,0.7)",
//                     color: "white",
//                   },
//                 }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="password"
//                 label="Confirm Password"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.password2}
//                 name="password2"
//                 error={!!touched.password2 && !!errors.password2}
//                 helperText={touched.password2 && errors.password2}
//                 InputProps={{
//                   sx: {
//                     backgroundColor: "rgba(255,255,255,0.7)",
//                     color: "white",
//                   },
//                 }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Country"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.country}
//                 name="country"
//                 error={!!touched.country && !!errors.country}
//                 helperText={touched.country && errors.country}
//                 InputProps={{
//                   sx: {
//                     backgroundColor: "rgba(255,255,255,0.7)",
//                     color: "white",
//                   },
//                 }}
//               />
//             </Box>
//             <Box display="flex" justifyContent="center" mt="20px">
//               <Button
//                 type="submit"
//                 color="secondary"
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#ff805d",
//                   "&:hover": {
//                     backgroundColor: "#ff5d5d",
//                   },
//                 }}
//               >
//                 Create New User
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// const checkoutSchema = yup.object().shape({
//   adminName: yup.string().required("Username is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup.string().required("Password is required"),
//   password2: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
//   country: yup.string().required("Country is required"),
// });

// const initialValues = {
//   adminName: "",
//   email: "",
//   password: "",
//   password2: "",
//   country: "",
// };


export default Form;
