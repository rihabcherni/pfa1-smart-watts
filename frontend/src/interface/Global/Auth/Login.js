import React, { useState } from "react";
import '../../../Styles/login.css'
import axios from "axios";
import Swal from "sweetalert"
import { Grid, Paper, Avatar, Button, Typography, Link, FormControl, FormHelperText, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import loginImg from '../../../assets/user/internaute/login.jpg'
axios.defaults.withCredentials = true;

const Login = () => {
  const [loginRecaptcha, setLoginRecaptcha] = useState("");
  function onChange(value) {
    setLoginRecaptcha(value);
  }
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    mot_de_passe: "",
    recaptcha: "",
    showPassword: false,
    error_list: [],
  });
  const handleInput = (e) => {
    e.persist();
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: loginInput.email,
      mot_de_passe: loginInput.mot_de_passe,
      recaptcha: loginRecaptcha,
    };
      const response = await axios.post("http://127.0.0.1:8000/api/login", data);
      if(response.data.token!=undefined){
        var role = response.data.Role;
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem('Role',role);
        localStorage.setItem('profile', JSON.stringify(response.data.details));
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        axios.defaults.headers.common["Content-Type"] = `application/json`;
        window.location.reload();  
        navigate("/"+role);
        Swal('Success',response.data.message,"success");
      }else{
      setLoginInput({ ...loginInput, error_list: response.data.validation_errors });
    }
  };
  const handleClickShowPassword = () => {
    setLoginInput({
      ...loginInput,
      showPassword: !loginInput.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const paperStyle = { padding: 8, height: "90%", width: "80%",margin: "25px auto " };
  const avatarStyle = { backgroundColor: "#0936A8", width: 60, height: 60 };
  const btnstyle = { backgroundColor: "#0936A8", margin: "8px 0" };
  return (              
      <div className="back-login">       
        <Paper elevation={20} style={paperStyle}>
          <img width='120px' src={logo} />
          <div className="container-login">
            <div>
              <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2 style={{paddingBottom:"30px", marginTop:"5px"}}>Connexion</h2>
              </Grid>
              <form onSubmit={loginSubmit}>
                <FormControl fullWidth variant="outlined" color="success">
                    <InputLabel htmlFor="Email" sx={{width:"200px"}} >Adresse Email</InputLabel>
                    <OutlinedInput id="email" type='email' name="email" value={loginInput.email}
                    onChange={handleInput} placeholder='Entrer votre email'
                    startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
                    error={!!loginInput.error_list.email}  label="Adresse Email" 
                  />
                    <FormHelperText error={true}>
                    {loginInput.error_list.email}           
                  </FormHelperText> 
                </FormControl>

                <FormControl fullWidth sx={{ marginTop: 2 }} variant="outlined" color="success" >
                  <InputLabel htmlFor="mot_de_passe" >Mot de passe</InputLabel>
                  <OutlinedInput 
                    id="mot_de_passe"
                    type={loginInput.showPassword ? 'text' : 'password'}
                    value={loginInput.mot_de_passe}
                    name="mot_de_passe"
                    onChange={handleInput}
                    placeholder='Entrer votre mot de passe'
                    startAdornment={
                      <InputAdornment position="start">
                        <LockIcon/>
                      </InputAdornment>
                    }
                    endAdornment={<InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end" >
                            {loginInput.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    error={!!loginInput.error_list.mot_de_passe}
      
                    label="mot de passe" /> 
                    <FormHelperText error={true}>
                    {loginInput.error_list.mot_de_passe}           
                  </FormHelperText> 
                </FormControl>
                <br/>
                <FormControl fullWidth sx={{ marginTop: 2 }} variant="outlined" color="success" >
                  <ReCAPTCHA sitekey='6LcApHsfAAAAAHz09e3JvjZHKzd-8xV4d3BhmeQH' onChange={onChange}  />          
                  <OutlinedInput id="recaptcha" type='text' name="recaptcha" value={loginInput.recaptcha=loginRecaptcha}
                      onChange={handleInput} 
                      startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
                      error={!!loginInput.error_list.recaptcha}  label=" recaptcha" 
                      sx={{ display:"none" }}
                    />
                  <FormHelperText error={true}>
                      {loginInput.error_list.recaptcha}           
                  </FormHelperText> 
                </FormControl>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth> Se connecter </Button>
                <Typography sx={{textAlign:"center"}}>
                  <Link href="/oublier-mot-de-passe" >
                  Avez-vous oublié votre mot de passe ?
                  </Link>
                </Typography>
              </form>
            </div>
            <div>
                <img src={loginImg} alt="login image" className="login-img"/>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
  export default Login;