"use client";
import styled from "styled-components";

const FooterComponent = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height: 40px;
  background-color: #ef233c;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: #ef233c;
    border-radius: 2px;
    .icon {
      font-size: 30px;
      color: #ffffff;
    }
  }
`;

export { FooterComponent };
