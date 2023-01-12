import styled from "styled-components";
import img from "../assets/img.png";
import Form from "./Form";
const LoginPage = () => {
  return (
    <Wrapper>
      <div className=" gap flex space-btw">
        <div>
          <img src={img} alt="img" />
        </div>
        <div className="login-container">
          <Form />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  width: 90%;
  margin: auto;

  .login-container {
    width: 747px;
    height: 600px;
    flex: 2;
    background: #ffffff;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  img {
    width: 420px;
    height: 500px;
    /* padding-left: 9rem ; */
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    img {
      width: 35vw;
      height: 420px;
    }

    .login-container {
      width: 45vw;
      height: 500px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    img {
      width: 400px;
      height: 400px;
    }

    .login-container {
      width: 90vw;
      height: 650px;
    }
  }
`;

export default LoginPage;
