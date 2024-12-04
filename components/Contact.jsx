import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.user_email.value;

    // Enviar correo al administrador
    emailjs
      .sendForm(
        "service_suom3hw", 
        "template_0gyjsra", 
        form.current,
        "r6eqLHhN-rHTneVRs" 
      )
      .then(
        (result) => {
          console.log("Admin email sent:", result);

          // Enviar correo al usuario que llenó el formulario
          emailjs
            .send(
              "service_suom3hw",
              "template_yb8oml8",
              {
                from_name: form.current.from_name.value,
                user_email: userEmail,
              },
              "r6eqLHhN-rHTneVRs"
            )
            .then(
              (userResult) => {
                console.log("User email sent:", userResult);
                toast.success("Message Sent Successfully!", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                document.getElementById("myForm").reset();
              },
              (userError) => {
                console.error("Error sending user email:", userError);
                toast.error("Ops! Message to user not sent!", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
            );
        },
        (error) => {
          console.error("Error sending admin email:", error);
          toast.error("Ops! Message to admin not sent!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <form
        className="contact_form"
        id="myForm"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="first_row">
          <input type="text" placeholder="Name *" name="from_name" required />
        </div>
        {/* End .first_row */}

        <div className="second">
          <input
            type="email"
            placeholder="Email *"
            name="user_email"
            required
          />
        </div>
        {/* End .second */}

        <div className="third">
          <textarea placeholder="Message *" name="message" required></textarea>
        </div>
        {/* End .third */}

        <div className="edina_tm_button">
          <button type="submit" className="color">
            Submit
          </button>
        </div>
        {/* End edina_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
