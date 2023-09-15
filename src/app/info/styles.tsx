"use client";
import styled from "styled-components";

const InfoComponent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0f0d1d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .box-text {
    width: 80%;
    p {
      font-size: 20px;
      color: #ffffff;
    }
  }
  .logo {
    width: 200px;
    height: 200px;
  }
`;

export { InfoComponent };
