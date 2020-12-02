import React from "react";
import styled from "styled-components";

const Head = styled.div`
  background-color: var(--header-color);
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
`;

const navItem = styled.div`
  font-size: 14px;
  font-family: "Read";
`;

export default function Header() {
  return (
    <Head>
      <navItem>Home</navItem>
      <navItem>Sobre</navItem>
      <navItem>Contato  </navItem>
    </Head>
  );
}
