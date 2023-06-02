import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Liên hệ với tôi</h2>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:anhquankk51@gmail.com">anhquankk51@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone Number" />
          <a href="tel:+84333935933">0333935933</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}