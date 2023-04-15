import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 95vh;
  width: 95vw;

  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  height: 100%;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 100%;
    padding-bottom: 50px;
  }
`;

const Title = styled.h1`
  font-weight: 100;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  color: black;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  color: black;
`;

const Button = styled.button`
  background-color: #da4ea2;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 10px;
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameInput = ref.current!.elements.namedItem(
      "name"
    ) as HTMLInputElement;
    const emailInput = ref.current!.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const messageInput = ref.current!.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;
    let isValid = true;
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add("error");
      isValid = false;
    } else {
      emailInput.classList.remove("error");
    }

    // Check if name, email, and message are not empty
    if (nameInput.value === "") {
      nameInput.classList.add("error");
      isValid = false;
    } else {
      nameInput.classList.remove("error");
    }
    if (messageInput.value === "") {
      messageInput.classList.add("error");
      isValid = false;
    } else {
      messageInput.classList.remove("error");
    }
    if (isValid === false) return;
    emailjs
      .sendForm(
        "service_9momwq4",
        "template_58qec39",
        ref.current!,
        "RbwvdtQtwuDQw5vjG"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setSuccess(false);
        }
      );
  };

  return (
    <Section id="contact">
      <style>
        {`
      .error {
        border: 2px solid red; /* red border for error state */
      }
      .error-message {
        color: red; /* red text color for error message */
        margin-top: 4px; /* add margin to separate from input field */
      }`}
      </style>
      <Container>
        <Left>
          {success === true ? (
            <Title>Message sent successfully!</Title>
          ) : (
            <Form ref={ref} onSubmit={handleSubmit}>
              <Title>Contact me</Title>
              <Input placeholder="Name" name="name"></Input>
              <Input placeholder="Email" name="email"></Input>
              <TextArea
                placeholder="Write Your Message"
                rows={10}
                name="message"
              ></TextArea>
              <Button type="submit">Send</Button>
            </Form>
          )}
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
