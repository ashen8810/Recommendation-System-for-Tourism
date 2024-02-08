import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import { toast } from "react-toastify";


const Ban = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values, actions) => {

    try {
        const response = await axios.post('http://localhost:8000/api/user/ban/', values); 
        console.log(response)
        if (response.status === 200) {
        
          toast.warn(response.data.message)
      }
        
    } catch (error) {
        console.error('Error banning user:', error);
        
    } 
};

  return (
    <Box m="20px" sx={{
      background: "rgba(0, 0, 0, 0.59)",
      borderRadius: "20px",
      padding: "2rem",
      display:"flex",
      flexDirection:"column",
      gap: "1rem"
    }}>
      {/* <Header title="BAN USER" subtitle="Ban a User" /> */}

      <Box sx={{display:"flex",alignItems:"center", justifyContent:"center",fontWeight:"500", fontSize:"1.2rem", color:"#ff805d"}}>Ban User</Box>  

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
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },    // To target all the direct children of this box component.
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
                    },

                    '&:hover .MuiInputLabel-root': {
                      color: 'white',
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
                    backgroundColor: ' rgba(255,255,255,0.496)',
                    color: 'white',
                  },

                  '&:hover .MuiInputLabel-root': {
                    color: 'white',
                  },
                }}
              />

               
                <TextField
                fullWidth
                variant="filled"
                select
                label="Duration"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.duration}
                name="duration"
                error={!!touched.duration && !!errors.duration}
                helperText={touched.duration && errors.duration}
                sx={{
                  gridColumn: "span 4",
                  '& .MuiFilledInput-root': {
                    backgroundColor: ' rgba(255,255,255,0.496)',
                    color: 'white',
                  },

                  '&:hover .MuiInputLabel-root': {
                    color: 'white',
                  },
                }}
                >
                <MenuItem value="14">2 Weeks</MenuItem>
                <MenuItem value="30">1 Month</MenuItem>
                <MenuItem value="90">3 Months</MenuItem>
                
                </TextField>


                <TextField
                fullWidth
                variant="filled"
                multiline
                rows={4}
                label="Reason (max 100 characters)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.reason}
                name="reason"
                error={!!touched.reason && !!errors.reason}
                helperText={touched.reason && errors.reason}
                sx={{
                  gridColumn: "span 4",
                  '& .MuiFilledInput-root': {
                    backgroundColor: ' rgba(255,255,255,0.496)',
                    color: 'white',
                  },

                  '&:hover .MuiInputLabel-root': {
                    color: 'white',
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
                Ban User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  
  username: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  duration: yup.string().required("required"),
  reason: yup.string().max(100, "Reason must be at most 100 characters").required("required")
});


const initialValues = {
  username: "",
  email: "",
  duration: "",
  reason: ""
};
export default Ban;
