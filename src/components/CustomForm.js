import { useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomForm() {
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    purpose: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      setValidated(false);
      axios
        .post("/submit", formData) // Updated relative URL
        .then((response) => {
          console.log(response.data);
          navigate("/submitted-form");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div id="customFormCSS">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <FloatingLabel
              controlId="floatingLastName"
              label="שם מלא"
              className="text-end"
            >
              <Form.Control
                required
                type="text"
                placeholder="שם מלא"
                className="text-right"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              <Form.Control.Feedback>!שם תקין</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                שם לא תקין
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustomPhone">
            <FloatingLabel
              controlId="floatingPhone"
              label="מספר טלפון"
              className="text-end"
            >
              <Form.Control
                required
                type="tel"
                placeholder="מספר טלפון"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Form.Control.Feedback>!מספר טלפון תקין</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                מספר טלפון לא תקין
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="12"
            controlId="validationCustom03"
            className="pb-3"
          >
            <FloatingLabel
              controlId="floatingEmail"
              label="כתובת מייל"
              className="text-end"
            >
              <Form.Control
                required
                type="email"
                placeholder="כתובת מייל"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback>!כתובת מייל תקינה</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                כתובת מייל לא תקינה
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="12"
            controlId="validationCustom04"
            className="pb-3"
          >
            <Form.Select
              aria-label="Default select example"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
            >
              <option>בחר במטרה שלך</option>
              <option value="אורח חיים בריא">אורח חיים בריא</option>
              <option value="לרזות">לרזות</option>
              <option value="חיטוב">חיטוב</option>
              <option value="להעלות במסת השריר">להעלות במסת השריר</option>
              <option value="לשפר את הרכב הגוף">לשפר את הרכב הגוף</option>
              <option value="אחר">אחר</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <button type="submit" class="btn btn-primary">
          שלח
        </button>
      </Form>
    </div>
  );
}
