import React from "react"

const Footer = () =>{

    return (

<div className="container my-5">

  <footer className="text-center text-lg-start">
    <div className="container d-flex justify-content-center py-3">
      <button type="button" className="btn btn-primary mx-2">
        <i className="fab fa-facebook-f"></i>
      </button>
      <button type="button" className="btn btn-primary mx-2">
        <i className="fab fa-youtube"></i>
      </button>
      <button type="button" className="btn btn-primary mx-2">
        <i className="fab fa-instagram"></i>
      </button>
      <button type="button" className="btn btn-primary  mx-2">
        <i className="fab fa-twitter"></i>
      </button>
      <div className="text-center text-white">
      © 2023 Copyright: Victor Magalhães  
    </div>
    </div>
    
    
  </footer>
  
</div>
)
}
export default Footer;