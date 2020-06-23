import styled, {css} from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
  }

export const Header = styled.div`
    max-width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    flex: 1;

    div{
        display: flex;
    }

    img {
        width: 200px;
        height: 200px;
    }
    
`;

export const MainHeader = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    width: 100%;

    img {
        width: 200px;
    }
 `   

export const BtnCart = styled.button`
    width: 140px;
    height: 40px;
    border: 0px;
    
    background: #ffffff;
    svg{
        color: #000;
        margin-top: 1px;
    }
    span {
        margin-left: 4px;
        background-color: #ffffff;
    }

`;

export const BtnMinhaConta = styled.button`
    width: 140px;
    height: 40px;
    border: 0px;
    
    background: #ffffff;
    svg{
        color: #000;
        margin-top: 1px;
    }
    span {
        margin-left: 4px;
        background-color: #ffffff;
    }

`;

export const Form = styled.form<FormProps>`
  max-width: 400px;
  display: contents;
  input {
    flex: 1;
    width: 400px;
    height: 70px;
    padding: 0 24px;
    border: 0px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
  }

  button {
    width: 39px;
    height: 70px;
    background: #ffffff;
    border-radius: 0 5px 5px 0;
    border: 0px;
    color: #000;
    transition: background-color 0.2s;
    font-weight: bold;
    }`
;

export const ProductsC = styled.div`
    max-width: 100%;
    height: 350px;
    display:flex;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;

    div {
        max-width: 216px;

    & + div {
        margin-left: 5%;
        }    

    &:hover button{
        display: block;
        margin-left: 28px;
        margin-top: 30px;
        }
    }
    
    p {
        font-size: 12px;
        color: #676565;
    }
    button {
        margin-left: 10px;
        width: 155px;
        height: 45px;
        background: #000;
        border-radius: 6px;
        border: 0px;
        color: #fff;
        transition: background-color 0.2s;
        font-weight: bold;
        display: none;

        &:hover {
            display:inline-block;
            background: ${shade(0.2, '#333333')};
        }
    }

    img {
        width: 100%;
        margin-top: 30px;

    }
     
`;

export const Products = styled.div `
    max-width: 100%;
    height: 410px;
    display:block;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;

    hr {
        /* Line */
        max-width: 75px;
        border: 3.29723px solid #C0C0C0;

     }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 30px;
  text-align: initial;
  
`;

export const MainDivNews = styled.div `
    width: 100%;
    background: #F2F2F2;
    flex-direction: row;
    `;


export const News = styled.form `
    width: 100%;
    max-height: 50%;
    background: #F2F2F2;
    padding: 40px;
    text-align: center;
     
    div {
        display: flex;
        margin-top: 30px;
        /* width: 100%; */
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        
    }
    
    
    input {
    flex: 1;
    width: 400px;
    height: 70px;
    padding: 0px 24px;
    border-radius: 12px;
    color: #3a3a3a;
    border: 2px solid #fff;

    & + input {
        margin-left: 20px;
    }

    }

  button {
    margin-left: 10px;
    width: 210px;
    height: 70px;
    background: #000;
    border-radius: 10px;
    border: 0px;
    color: #fff;
    transition: background-color 0.2s;
    font-weight: bold;

    &:hover {
      background: ${shade(0.2, '#333333')};
    }
  }
  
  

`;

export const DivInputNews = styled.div `
    margin-left: 20px;
        display: block !important;
`;

export const DivAfterSend = styled.div `
    width: 100%;
    max-height: 50%;
    background: #FFFFFF;
    padding: 40px;
    text-align: center;
p {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
}
span{
    font-size: 16px;
}
button {
    margin-top: 12px;
    width: 515px;
    height: 70px;
    background: #000;
    font-size: 20px;
    border-radius: 10px;
    border: 0px;
    color: #fff;
    transition: background-color 0.2s;
    font-weight: bold;

    &:hover {
      background: ${shade(0.2, '#333333')};
    }
  }`
  ;

export const CreatedBy = styled.div `
    display: flex;
    margin-top: 3%;

    div {
        display: grid;
        height: 20px;

        & + div {
      margin-left: 25px;
        }
    }

    img {
        max-width: 100%;
    }
`;

export const BtnFooter = styled.div `
    margin-top: 5px;

    svg{
        padding-top: 3px;
    }

    button {
        display: flex;
        align-items: center;
        margin-top: 0px;
        padding-left: 30px;
        height: 55px;
        background: #fff;
        border-radius: 10px;
        border: 0px;
        color: #000;

        transition: background-color 0.2s;
        font-weight: bold;

        &:hover {
        background: ${shade(0.2, '#333333')};
        }

        & + button {
            margin-top: 10px;
        }

        p{
        width: 190px;
        font-size:14px;

        }
    }

    

`;

export const Localization = styled.div `

    h3 {
        color: #FFFFFF;
        font-family: inherit;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        /* identical to box height */
    }
    hr {
        /* Line */
        margin-top: 5px;
        max-width: 50px;
        border: 2.29723px solid #FFFFFF;

     }

     p {
        margin-top: 5px;
        color: #FFFFFF;
     }

`;

export const Footer = styled.div `
    width: 100%;
    max-height: 60%;
    background: #000;
    text-align: start;
    padding: 40px 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly

`;

