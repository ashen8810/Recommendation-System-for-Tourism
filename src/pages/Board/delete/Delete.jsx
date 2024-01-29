import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";


const Delete = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px"
    sx={{
      background: "rgba(0, 0, 0, 0.59)",
      borderRadius: "20px",
      padding: "2rem",
      display:"flex",
      flexDirection:"column",
      gap: "1rem",
      marginBottom:"10rem"
    }}
    >
      {/* <Header title="DELETE USER" subtitle="Delete a User Profile" /> */}
      <Box sx={{display:"flex",alignItems:"center", justifyContent:"center",fontWeight:"500", fontSize:"1.2rem", color:"#ff5d5d"}}>Delete User</Box>
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
                    background: ' rgba(255,255,255,0.496)',
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
                    background: ' rgba(255,255,255,0.496)',
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
                Delete User
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
});
const initialValues = {
  username: "",
  email: "",
};

export default Delete;
