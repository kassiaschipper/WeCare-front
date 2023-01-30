import styled from "styled-components";
import React from "react";

export default function LogoBox() {
    return (
        <Wrapper>
            <div>
               <h1>We Care</h1>
            </div>            
         </Wrapper>
    )
}

const Wrapper = styled.div`
   width: 62%;
   height: 100vh;
    

      h1 {
         color: #FFFFFF;
         font-weight: 300;
         font-size: 6.6rem;
         margin-top: 28vh;
         margin-left: 10vw;
         font-family: 'Amatic', cursive;         
      }

      @media (max-width: 650px) {
         width: 100%;
         height: 35vh;
         display: flex;
         justify-content: center;
         align-items: center;

         div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
         }

         h1 {
            margin-top: 0px;
            margin-left: 0px;
            font-size: 4.5rem;
         }
    
  }
   
`;