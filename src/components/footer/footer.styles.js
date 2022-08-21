import styled from "styled-components";

export const Box = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 10px 5px;
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 10px 2px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #008080;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 15px;
  font-weight: bold;
`;
