import Joi from "joi-browser";
import useForm from "./hooks/useForm";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

function Contact(props) {
  const formData = {
    username: "",
    email: "",
    phone: "",
    message: "",
  };

  const formSchema = {
    username: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    phone: Joi.number().label("Number"),
    message: Joi.string().required().label("Message"),
  };

  const doSubmit = () => {
    toast.success("message sent");
    props.history.replace("/products");
    console.log(data);
  }

  const { data, renderInput, renderTextarea, renderButton, handleSubmit } =
    useForm(formData, formSchema, doSubmit);

  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      {renderInput("username", "Username")}
      {renderInput("email", "Email")}
      {renderInput("phone", "Phone")}
      {renderTextarea("message", "Message")}
      {renderButton("SEND")}
    </Form>
  );
}

export default Contact;