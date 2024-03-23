import { Button, Snackbar, TextField } from "@mui/material";
import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="contactMe">
      <h1 style={{ fontWeight: "400", fontSize: "3.3vw" }}>CONTACT ME</h1>
      <div className="contactMeContainer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pRIMn2vZsjBVNzbbeeO9pb8pzd0IG4F2i1PeIf0zWw&s"
          alt="contact"
          className="contactUs"
        />
        <div className="inputsContainer">
          <TextField
            value={formData.name}
            sx={{ width: "40vw", marginBlock: "0.5vw" }}
            label="Name"
            variant="outlined"
            name="name"
            onChange={handleChange}
          />
          <TextField
            value={formData.email}
            sx={{ width: "40vw", marginBlock: "0.5vw" }}
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
          />
          <TextField
            value={formData.message}
            sx={{ width: "40vw", marginBlock: "0.5vw" }}
            multiline
            rows={5}
            label="Type something"
            variant="outlined"
            name="message"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClick}
            disabled={formData.name && formData.email && formData.message}
          >
            Send
          </Button>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Hurray! We've received your message and will get back to you soon."
      />
    </div>
  );
}
