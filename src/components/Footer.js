import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--footer-color);
  height: 90px;
`;

const FooterItem = styled.span`
  text-decoration: none;
  font-size: 16px;
  color: #000;
  font-weight:bold;
`;

function footer() {
  return (
    <>
      <Footer>
        <FooterItem>Aula de styled components</FooterItem>
      </Footer>
    </>
  );
}

export default footer;
