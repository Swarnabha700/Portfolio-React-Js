import React, { useRef } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pmc8fxw", "template_jv5o4tx", formRef.current, {
        publicKey: "dqQ1PuifKIS9mq9W1",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <motion.div
        className="Contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>Let's Work Together</motion.h1>
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>chakrabortyswarnabha700@gmail.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>Saltlake sector-1, Bidhannagar, Kolkata</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Phone </h2>
            <span>+91 7001844407</span>
          </motion.div>
        </motion.div>
        <div className="formContainer">
          <motion.div
            className="phoneSVG"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="400px"
              height="400px"
              color="#f5a623"
              fill="none"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 5.4 }}
                d="M13 3C17.4183 3 21 6.58172 21 11M13.5 6.5C15.7091 6.5 17.5 8.29086 17.5 10.5"
                stroke="currentColor"
                stroke-width="0.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M9.15825 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.1638 3.69101C7.91707 3.40694 7.59547 3.19794 7.23567 3.08785C6.94858 3 6.62446 3 5.97621 3C5.02791 3 4.55375 3 4.15573 3.18229C3.68687 3.39702 3.26343 3.86328 3.09473 4.3506C2.95151 4.76429 2.99253 5.18943 3.07458 6.0397C3.94791 15.0902 8.90981 20.0521 17.9603 20.9254C18.8106 21.0075 19.2357 21.0485 19.6494 20.9053C20.1367 20.7366 20.603 20.3131 20.8177 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0823 15.6393 19.7861 15.5077 19.1937 15.2444L18.2878 14.8417C17.6462 14.5566 17.3255 14.4141 16.9995 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5063 14.8544 14.967 15.3038C14.4301 15.7512 14.1617 15.9749 13.8337 16.0947C13.543 16.2009 13.1586 16.2403 12.8523 16.1951C12.5069 16.1442 12.2423 16.0029 11.7133 15.7201C10.0672 14.8405 9.15953 13.9328 8.27986 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64661 7.3124 9.61694 7.00048C9.58594 6.67452 9.44338 6.35376 9.15825 5.71223Z"
                stroke="currentColor"
                stroke-width="0.2"
                stroke-linecap="round"
              />
            </svg>
          </motion.div>
          <motion.form
            ref={formRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              required
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              rows={8}
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <motion.button whileHover={{ scale: 1.05 }}>Submit</motion.button>
            {error && "Message not sent!"}
            {success && "Message sent successfully!"}
          </motion.form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
