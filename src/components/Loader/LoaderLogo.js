import React from "react";
import "./LoaderLogo.css";
import logo from "../../assets/logo/logos.png";
class LogoLoader extends React.Component {
  render() {
    return <img src={logos} alt="logo" id="logo" />;
  }
}
export default LogoLoader;
