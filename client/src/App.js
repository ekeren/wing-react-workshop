// src/FormComponent.js
import React, { useState } from 'react';
​
const FormComponent = () => {
  const [formData, setFormData] = useState({
    broughtToWorkshop: '',
    achievedGoals: '',
    recommendWorkshop: '',
  });
​
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
​
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can send the form data to your backend or perform other actions
  };
​
  return (
    <form onSubmit={handleSubmit}>
      <h2>Thank you for flying with Wing!</h2>
​
      <label>
        1. What inspired you to attend the workshop?
        <input
          type="text"
          name="broughtToWorkshop"
          value={formData.broughtToWorkshop}
          onChange={handleChange}
        />
      </label>
      <br />
​
      <label>
        2. Reflecting on your goals for attending, did you achieve them? If not, what could be improved?
        <textarea
          name="achievedGoals"
          value={formData.achievedGoals}
          onChange={handleChange}
        />
      </label>
      <br />
​
      <label>
        3. Would you kindly recommend this workshop to other developers in the community? If not, we'd love to hear your thoughts on how we can improve.
        <input
          type="text"
          name="recommendWorkshop"
          value={formData.recommendWorkshop}
          onChange={handleChange}
        />
      </label>
      <br />
​
      <button type="submit">Submit</button>
    </form>
  );
};
​
export default FormComponent;
