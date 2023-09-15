"use client";
import styled from "styled-components";

const MainComponent = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #ef233c;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .logo {
    width: 300px;
    height: 300px;
  }

  .logo-dnd {
    margin-bottom: 10px;
    width: 100px;
    height: 100px;
  }
`;
export { MainComponent };
