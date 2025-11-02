import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { 
  AiOutlineMail, 
  AiOutlinePhone, 
  AiOutlineLinkedin, 
  AiOutlineGithub,
  AiOutlineSend,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineLoading3Quarters
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  // Character count for message
  const maxMessageLength = 1000;
  const messageLength = formData.message.length;

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validateSubject = (subject) => {
    if (!subject.trim()) return "Subject is required";
    if (subject.trim().length < 3) return "Subject must be at least 3 characters";
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10) return "Message must be at least 10 characters";
    if (message.length > maxMessageLength) return `Message must not exceed ${maxMessageLength} characters`;
    return "";
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "subject":
        error = validateSubject(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate field in real-time if it has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error
      });
    }

    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message)
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors before submitting.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I will get back to you soon.' 
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setErrors({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setTouched({
          name: false,
          email: false,
          subject: false,
          message: false
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container 
      fluid 
      className="contact-section" 
      style={{ 
        background: "linear-gradient(135deg, rgba(12, 5, 19, 0.95) 0%, rgba(26, 10, 46, 0.95) 50%, rgba(22, 33, 62, 0.95) 100%)", 
        minHeight: "auto", 
        padding: "80px 0",
        position: "relative",
        zIndex: 10,
        overflow: "hidden"
      }}
    >
      {/* Hide any particle/star backgrounds */}
      <style>{`
        .contact-section #tsparticles,
        .contact-section canvas,
        .contact-section [id*="particle"],
        .contact-section [class*="particle"],
        .contact-section::before,
        .contact-section::after {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        .contact-section {
          background-image: none !important;
          background: transparent !important;
        }
        /* Hide stars from parent containers */
        .page-background-container .contact-section {
          background-image: none !important;
        }
        /* Ensure no radial gradients (stars) show */
        body:has(.contact-section),
        html:has(.contact-section) {
          background-image: none !important;
        }
      `}</style>
      <Container>
        {/* Header Section */}
        <Row style={{ justifyContent: "center", padding: "50px 0 30px 0" }}>
          <Col md={12} style={{ textAlign: "center" }}>
            <h1 className="project-heading" style={{ 
              fontSize: "3em", 
              marginBottom: "20px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "800"
            }}>
              Contact <strong style={{ 
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>Me</strong>
            </h1>
            <p style={{ 
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "1.2em", 
              marginBottom: "50px",
              fontWeight: "500",
              lineHeight: "1.6"
            }}>
              Let's connect and discuss opportunities
            </p>
          </Col>
        </Row>
        
        {/* Contact Cards - Horizontal Layout */}
        <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
          <Col md={4} style={{ padding: "10px" }}>
            <div 
              className="contact-info-card"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "20px",
                padding: "30px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
                height: "100%",
                transition: "all 0.4s ease",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(102, 126, 234, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.4)";
              }}
            >
              <div style={{
                position: "absolute",
                top: "-50%",
                right: "-50%",
                width: "200%",
                height: "200%",
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                pointerEvents: "none"
              }}></div>
              <AiOutlineMail style={{ color: "white", fontSize: "3em", marginBottom: "20px", position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }} />
              <h4 style={{ color: "white", marginBottom: "12px", fontSize: "1.4em", fontWeight: "600", position: "relative", zIndex: 1, textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>Email</h4>
              <p style={{ color: "rgba(255, 255, 255, 0.95)", fontSize: "1em", margin: 0, position: "relative", zIndex: 1, fontWeight: "400" }}>rehanmajid95082@gmail.com</p>
            </div>
          </Col>
          
          <Col md={4} style={{ padding: "10px" }}>
            <div 
              className="contact-info-card"
              style={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                borderRadius: "20px",
                padding: "30px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(245, 87, 108, 0.4)",
                height: "100%",
                transition: "all 0.4s ease",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(245, 87, 108, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(245, 87, 108, 0.4)";
              }}
            >
              <div style={{
                position: "absolute",
                top: "-50%",
                right: "-50%",
                width: "200%",
                height: "200%",
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                pointerEvents: "none"
              }}></div>
              <AiOutlinePhone style={{ color: "white", fontSize: "3em", marginBottom: "20px", position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }} />
              <h4 style={{ color: "white", marginBottom: "12px", fontSize: "1.4em", fontWeight: "600", position: "relative", zIndex: 1, textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>Phone</h4>
              <p style={{ color: "rgba(255, 255, 255, 0.95)", fontSize: "1em", margin: 0, position: "relative", zIndex: 1, fontWeight: "400" }}>(+91) 9508205417</p>
            </div>
          </Col>
          
          <Col md={4} style={{ padding: "10px" }}>
            <div 
              className="contact-info-card"
              style={{
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                borderRadius: "20px",
                padding: "30px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(79, 172, 254, 0.4)",
                height: "100%",
                transition: "all 0.4s ease",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(79, 172, 254, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(79, 172, 254, 0.4)";
              }}
            >
              <div style={{
                position: "absolute",
                top: "-50%",
                right: "-50%",
                width: "200%",
                height: "200%",
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                pointerEvents: "none"
              }}></div>
              <FaMapMarkerAlt style={{ color: "white", fontSize: "3em", marginBottom: "20px", position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }} />
              <h4 style={{ color: "white", marginBottom: "12px", fontSize: "1.4em", fontWeight: "600", position: "relative", zIndex: 1, textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>Location</h4>
              <p style={{ color: "rgba(255, 255, 255, 0.95)", fontSize: "1em", margin: 0, position: "relative", zIndex: 1, fontWeight: "400" }}>BiharSharif, Nalanda, Bihar</p>
            </div>
          </Col>
        </Row>
        
        {/* Connect With Me Section */}
        <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <h3 style={{ 
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "700", 
              marginBottom: "30px", 
              fontSize: "2em",
              textShadow: "none"
            }}>
              Connect With Me
            </h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap" }}>
              <a 
                href="https://github.com/Rehan9508" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
                style={{
                  background: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
                  color: "white",
                  padding: "16px 40px",
                  borderRadius: "15px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontWeight: "600",
                  fontSize: "1.1em",
                  transition: "all 0.4s ease",
                  boxShadow: "0 6px 20px rgba(45, 55, 72, 0.5)",
                  border: "2px solid rgba(255, 255, 255, 0.15)",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.08)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(45, 55, 72, 0.7)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #374151 0%, #1f2937 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(45, 55, 72, 0.5)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)";
                }}
              >
                <FaGithub style={{ fontSize: "1.5em", zIndex: 1, position: "relative" }} />
                <span style={{ zIndex: 1, position: "relative" }}>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rehan-mallick-7a83092a6/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
                style={{
                  background: "linear-gradient(135deg, #0077b5 0%, #004182 100%)",
                  color: "white",
                  padding: "16px 40px",
                  borderRadius: "15px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontWeight: "600",
                  fontSize: "1.1em",
                  transition: "all 0.4s ease",
                  boxShadow: "0 6px 20px rgba(0, 119, 181, 0.5)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.08)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 119, 181, 0.7)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #0099cc 0%, #0066aa 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 119, 181, 0.5)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #0077b5 0%, #004182 100%)";
                }}
              >
                <FaLinkedinIn style={{ fontSize: "1.5em", zIndex: 1, position: "relative" }} />
                <span style={{ zIndex: 1, position: "relative" }}>in LinkedIn</span>
              </a>
            </div>
          </Col>
        </Row>
        
        {/* Contact Form */}
        <Row style={{ justifyContent: "center", marginBottom: "50px" }}>
          <Col md={8}>
            <div style={{
              background: "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 50%, rgba(245, 87, 108, 0.15) 100%)",
              borderRadius: "25px",
              padding: "45px",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 15px 35px rgba(102, 126, 234, 0.3), inset 0 0 60px rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{
                position: "absolute",
                top: "-100px",
                right: "-100px",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "-100px",
                left: "-100px",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(245, 87, 108, 0.2) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none"
              }}></div>
              <h3 style={{ 
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "35px", 
                display: "flex", 
                alignItems: "center",
                fontSize: "2em",
                fontWeight: "700",
                position: "relative",
                zIndex: 1
              }}>
                <AiOutlineSend style={{ marginRight: "15px", color: "#667eea", fontSize: "1.3em", filter: "drop-shadow(0 2px 8px rgba(102, 126, 234, 0.5))" }} />
                Send Me a Message
              </h3>
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label style={{ color: "white", fontWeight: "500", marginBottom: "8px", display: "block" }}>
                        Name <span style={{ color: "#ff4444" }}>*</span>
                      </Form.Label>
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          isInvalid={touched.name && !!errors.name}
                          isValid={touched.name && !errors.name && formData.name.length > 0}
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            border: touched.name && errors.name 
                              ? "2px solid #f87171" 
                              : touched.name && !errors.name && formData.name.length > 0
                              ? "2px solid #4ade80"
                              : "2px solid rgba(14, 165, 233, 0.5)",
                            color: "white",
                            borderRadius: "12px",
                            padding: "14px 18px",
                            fontSize: "1em",
                            transition: "all 0.3s ease",
                            boxShadow: touched.name && errors.name
                              ? "0 0 0 3px rgba(248, 113, 113, 0.1)"
                              : touched.name && !errors.name && formData.name.length > 0
                              ? "0 0 0 3px rgba(74, 222, 128, 0.1)"
                              : "none"
                          }}
                          className="contact-input"
                        />
                        {touched.name && !errors.name && formData.name.length > 0 && (
                          <AiOutlineCheckCircle 
                            style={{
                              position: "absolute",
                              right: "15px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: "#4ade80",
                              fontSize: "1.3em",
                              pointerEvents: "none"
                            }}
                          />
                        )}
                        {touched.name && errors.name && (
                          <AiOutlineCloseCircle 
                            style={{
                              position: "absolute",
                              right: "15px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: "#f87171",
                              fontSize: "1.3em",
                              pointerEvents: "none"
                            }}
                          />
                        )}
                      </div>
                  {touched.name && errors.name && (
                    <div style={{
                      color: "#f87171",
                      fontSize: "0.9em",
                      marginTop: "8px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      animation: "fadeIn 0.3s ease",
                      wordWrap: "break-word",
                      overflowWrap: "break-word"
                    }}>
                      <AiOutlineCloseCircle style={{ fontSize: "1em", marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ flex: 1 }}>{errors.name}</span>
                    </div>
                  )}
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label style={{ color: "white", fontWeight: "500", marginBottom: "8px", display: "block" }}>
                        Email <span style={{ color: "#ff4444" }}>*</span>
                      </Form.Label>
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          isInvalid={touched.email && !!errors.email}
                          isValid={touched.email && !errors.email && formData.email.length > 0}
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            border: touched.email && errors.email 
                              ? "2px solid #f87171" 
                              : touched.email && !errors.email && formData.email.length > 0
                              ? "2px solid #4ade80"
                              : "2px solid rgba(14, 165, 233, 0.5)",
                            color: "white",
                            borderRadius: "12px",
                            padding: "14px 18px",
                            fontSize: "1em",
                            transition: "all 0.3s ease",
                            boxShadow: touched.email && errors.email
                              ? "0 0 0 3px rgba(248, 113, 113, 0.1)"
                              : touched.email && !errors.email && formData.email.length > 0
                              ? "0 0 0 3px rgba(74, 222, 128, 0.1)"
                              : "none"
                          }}
                          className="contact-input"
                        />
                        {touched.email && !errors.email && formData.email.length > 0 && (
                          <AiOutlineCheckCircle 
                            style={{
                              position: "absolute",
                              right: "15px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: "#4ade80",
                              fontSize: "1.3em",
                              pointerEvents: "none"
                            }}
                          />
                        )}
                        {touched.email && errors.email && (
                          <AiOutlineCloseCircle 
                            style={{
                              position: "absolute",
                              right: "15px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: "#f87171",
                              fontSize: "1.3em",
                              pointerEvents: "none"
                            }}
                          />
                        )}
                      </div>
                  {touched.email && errors.email && (
                    <div style={{
                      color: "#f87171",
                      fontSize: "0.9em",
                      marginTop: "8px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      animation: "fadeIn 0.3s ease",
                      wordWrap: "break-word",
                      overflowWrap: "break-word"
                    }}>
                      <AiOutlineCloseCircle style={{ fontSize: "1em", marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ flex: 1 }}>{errors.email}</span>
                    </div>
                  )}
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4">
                  <Form.Label style={{ color: "white", fontWeight: "500", marginBottom: "8px", display: "block" }}>
                    Subject <span style={{ color: "#ff4444" }}>*</span>
                  </Form.Label>
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      isInvalid={touched.subject && !!errors.subject}
                      isValid={touched.subject && !errors.subject && formData.subject.length > 0}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: touched.subject && errors.subject 
                          ? "2px solid #f87171" 
                          : touched.subject && !errors.subject && formData.subject.length > 0
                          ? "2px solid #4ade80"
                          : "2px solid rgba(14, 165, 233, 0.5)",
                        color: "white",
                        borderRadius: "12px",
                        padding: "14px 18px",
                        fontSize: "1em",
                        transition: "all 0.3s ease",
                        boxShadow: touched.subject && errors.subject
                          ? "0 0 0 3px rgba(248, 113, 113, 0.1)"
                          : touched.subject && !errors.subject && formData.subject.length > 0
                          ? "0 0 0 3px rgba(74, 222, 128, 0.1)"
                          : "none"
                      }}
                      className="contact-input"
                    />
                    {touched.subject && !errors.subject && formData.subject.length > 0 && (
                      <AiOutlineCheckCircle 
                        style={{
                          position: "absolute",
                          right: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#4ade80",
                          fontSize: "1.3em",
                          pointerEvents: "none"
                        }}
                      />
                    )}
                    {touched.subject && errors.subject && (
                      <AiOutlineCloseCircle 
                        style={{
                          position: "absolute",
                          right: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#f87171",
                          fontSize: "1.3em",
                          pointerEvents: "none"
                        }}
                      />
                    )}
                  </div>
                  {touched.subject && errors.subject && (
                    <div style={{
                      color: "#f87171",
                      fontSize: "0.9em",
                      marginTop: "8px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      animation: "fadeIn 0.3s ease",
                      wordWrap: "break-word",
                      overflowWrap: "break-word"
                    }}>
                      <AiOutlineCloseCircle style={{ fontSize: "1em", marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ flex: 1 }}>{errors.subject}</span>
                    </div>
                  )}
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <Form.Label style={{ color: "white", fontWeight: "500", margin: 0 }}>
                      Message <span style={{ color: "#ff4444" }}>*</span>
                    </Form.Label>
                    <span style={{
                      color: messageLength > maxMessageLength ? "#f87171" : messageLength > maxMessageLength * 0.9 ? "#fbbf24" : "rgba(255, 255, 255, 0.6)",
                      fontSize: "0.85em",
                      fontWeight: "500",
                      transition: "color 0.3s ease"
                    }}>
                      {messageLength} / {maxMessageLength}
                    </span>
                  </div>
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      maxLength={maxMessageLength}
                      isInvalid={touched.message && !!errors.message}
                      isValid={touched.message && !errors.message && formData.message.length > 0}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: touched.message && errors.message 
                          ? "2px solid #f87171" 
                          : touched.message && !errors.message && formData.message.length > 0
                          ? "2px solid #4ade80"
                          : "2px solid rgba(14, 165, 233, 0.5)",
                        color: "white",
                        borderRadius: "12px",
                        padding: "14px 18px",
                        fontSize: "1em",
                        transition: "all 0.3s ease",
                        resize: "vertical",
                        minHeight: "140px",
                        boxShadow: touched.message && errors.message
                          ? "0 0 0 3px rgba(248, 113, 113, 0.1)"
                          : touched.message && !errors.message && formData.message.length > 0
                          ? "0 0 0 3px rgba(74, 222, 128, 0.1)"
                          : "none"
                      }}
                      className="contact-input"
                    />
                    {touched.message && !errors.message && formData.message.length > 0 && (
                      <AiOutlineCheckCircle 
                        style={{
                          position: "absolute",
                          right: "15px",
                          top: "20px",
                          color: "#4ade80",
                          fontSize: "1.3em",
                          pointerEvents: "none"
                        }}
                      />
                    )}
                    {touched.message && errors.message && (
                      <AiOutlineCloseCircle 
                        style={{
                          position: "absolute",
                          right: "15px",
                          top: "20px",
                          color: "#f87171",
                          fontSize: "1.3em",
                          pointerEvents: "none"
                        }}
                      />
                    )}
                  </div>
                  {touched.message && errors.message && (
                    <div style={{
                      color: "#f87171",
                      fontSize: "0.9em",
                      marginTop: "8px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      animation: "fadeIn 0.3s ease",
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                      whiteSpace: "normal",
                      lineHeight: "1.5"
                    }}>
                      <AiOutlineCloseCircle style={{ fontSize: "1em", marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ flex: 1 }}>{errors.message}</span>
                    </div>
                  )}
                </Form.Group>
                
                {/* Status Message */}
                {submitStatus.type && (
                  <div style={{
                    padding: "16px 20px",
                    borderRadius: "12px",
                    marginBottom: "24px",
                    backgroundColor: submitStatus.type === 'success' 
                      ? 'rgba(34, 197, 94, 0.15)' 
                      : 'rgba(239, 68, 68, 0.15)',
                    color: submitStatus.type === 'success' ? '#4ade80' : '#f87171',
                    border: `2px solid ${submitStatus.type === 'success' ? '#4ade80' : '#f87171'}`,
                    textAlign: "center",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    animation: "slideDown 0.4s ease",
                    boxShadow: submitStatus.type === 'success'
                      ? "0 4px 12px rgba(74, 222, 128, 0.2)"
                      : "0 4px 12px rgba(248, 113, 113, 0.2)"
                  }}>
                    {submitStatus.type === 'success' ? (
                      <AiOutlineCheckCircle style={{ fontSize: "1.3em" }} />
                    ) : (
                      <AiOutlineCloseCircle style={{ fontSize: "1.3em" }} />
                    )}
                    {submitStatus.message}
                  </div>
                )}
                
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: isSubmitting 
                        ? "linear-gradient(135deg, #64748b, #475569)" 
                        : "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                      border: "none",
                      fontSize: "1.15em",
                      padding: "16px 55px",
                      borderRadius: "35px",
                      fontWeight: "700",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "12px",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      opacity: isSubmitting ? 0.8 : 1,
                      transition: "all 0.4s ease",
                      boxShadow: isSubmitting
                        ? "0 4px 15px rgba(100, 116, 139, 0.3)"
                        : "0 8px 25px rgba(102, 126, 234, 0.5), 0 4px 15px rgba(240, 147, 251, 0.3)",
                      transform: isSubmitting ? "scale(0.98)" : "scale(1)",
                      position: "relative",
                      overflow: "hidden"
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.transform = "scale(1.08) translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 12px 35px rgba(102, 126, 234, 0.6), 0 6px 20px rgba(240, 147, 251, 0.4)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.transform = "scale(1) translateY(0)";
                        e.currentTarget.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.5), 0 4px 15px rgba(240, 147, 251, 0.3)";
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <AiOutlineLoading3Quarters 
                          style={{ 
                            fontSize: "1.2em",
                            animation: "spin 1s linear infinite"
                          }} 
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <AiOutlineSend style={{ fontSize: "1.1em" }} />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        
        {/* Footer Message */}
        <Row>
          <Col md={12} style={{ textAlign: "center", marginTop: "20px", marginBottom: "30px" }}>
            <p style={{ color: "#666", fontSize: "0.95em", fontStyle: "italic" }}>
              I'm always interested in new opportunities and collaborations. Let's connect!
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
