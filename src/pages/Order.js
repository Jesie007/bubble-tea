import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Order.module.css";

function Order() {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      const data = await response.json();
      console.log("Order submitted successfully", data);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div>
      <PageNav />
      <div className={styles.order}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Ready to order? Let's go!</h2>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Order now</button>
        </form>
        <h2 className={styles.call}>
          Or feel free to call us for pickup 012345678
        </h2>
      </div>
    </div>
  );
}

export default Order;
