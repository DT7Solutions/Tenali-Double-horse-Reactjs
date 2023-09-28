import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';




const FeedbackDrawer = () => {
  
  const [showDrawer, setShowDrawer] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleShowDrawer = () => {
    setShowDrawer(!showDrawer);
  };
   

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    const formData = {
        fullName,
        email,
        phoneNumber,
        message,
      };
      const serviceId = 'service_u0jehlt';
      const templateId = 'template_aamrei5';
      const userId = 'cjCRUWDX0cKAQSKL6'; // Your public key
    
      emailjs.send(serviceId, templateId, formData, userId)
        .then((response) => {
          console.log('Email sent successfully:', response);
          alert("Message successfully sent!");
          // Show success message or take other actions as needed
        })
        .catch((error) => {
          console.error('Email sending error:', error);
          // Show error message or take other actions as needed
        });
      // Perform your API call or form submission logic here
      // For simplicity, we'll just log the form data to the console
      
    
      // Reset the form fields after submission
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
    
      
      setShowDrawer(false)
  };

  return (
    <div>
      <style>
        {/* Include the CSS styles here using React's inline style syntax */}
        {`
          /* Your CSS styles go here */
        `}
      </style>
      <div id="feedbackDrawer" className={showDrawer ? 'showDrawer' : ''}>
        {/* Feedback Form */}
        <div id="feedbackForm">
        <Form onSubmit={handleSubmitFeedback}>
            <h2>Submit Feedback</h2>
            <Form.Group controlId="fullName" style={{marginBottom:'5px'}}>
              <Form.Control
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                required
              />
            </Form.Group>
           
            <Form.Group controlId="email" style={{marginBottom:'5px'}}>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber" style={{ marginBottom: '5px' }}>
              <Form.Control
                type="tel" // Use type="tel" for phone number input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                required
              />
            </Form.Group>
            <Form.Group controlId="message"style={{marginBottom:'5px'}}>
              <Form.Control
                as="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows="5"
                required
              />
            </Form.Group>
            <button type="submit" className="btn-custom btn-sm primary" name="button">Send Message</button>
          </Form>
        </div>
        {/* Success Message */}
        <div id="feedbackSuccess">
          <h2>Thank You</h2>
          <p>Your feedback was successfully submitted</p>
          <button onClick={handleShowDrawer}>Submit More Feedback</button>
        </div>
        {/* Error Message */}
        <div id="feedbackError">
          <h2>Aw, Snap!</h2>
          <p>There was an error submitting your feedback</p>
          <button onClick={handleShowDrawer}>Try Again</button>
        </div>
        {/* Feedback Trigger */}
        <div id="feedbackTrigger" onClick={handleShowDrawer}>
       Feedback
          <span id="close">&raquo;</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDrawer;
