import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;

}


html {
  font-size: 62.5%;
   scroll-behavior: smooth; 
    overflow-x: hidden;
}


button {
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
  width: 80%;
  margin:  25px auto; 
height: 46px;
background: ${({ theme }) => theme.colors.helper};
border-radius: 8px;
border: none;
}



${"" /* resuable code section  */}


.flex {
  display: flex;
  align-items: center;
}
.space-btw{
  justify-content: space-between;
}
.space-around{
  justify-content: space-around;
}
.gap{
  gap: 9rem;

}
.row{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

}
 .underline{
  text-decoration: underline;
 }
.input{
  width: 70%;
    color: ${({ theme }) => theme.colors.black};
    border:none;
    outline:none;
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
   
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  .flex{
    flex-direction:column ;
  }
  }

`;
