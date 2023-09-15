"use client";
import styled from "styled-components";

type Props = {
  altura: string;
};

const HeaderComponent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height: ${(props) => props.altura};
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);

  overflow-x: hidden;
  transition: height 0.3s ease-in-out;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  .ficha {
  }
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ffffff;

    .icon {
      font-size: 30px;
    }
  }
  .circle-donw {
    position: fixed;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ffffff;

    .icon {
      font-size: 30px;
    }
  }
`;

export { HeaderComponent };
