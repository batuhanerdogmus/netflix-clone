import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Bacground = styled.div`
  display: flex;
  flex-direction: column;
  background-size: contain;
  max-height: 70vh;

  background: top left / cover no-repeat;
  ${({ src }) =>
    src
      ? `background-image: url(../images/misc/${src}.jpg); `
      : `background-image: url(../images/misc/home-bg.jpg); `}

  @media (max-width:1100px) {
    background-size: contain;
    min-height: 50vw;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1100px) {
    margin: 0 20px;
    padding: 8px 0;
  }
  @media (max-width: 400px) {
    margin: 0 10px;
    padding: 0;
  }
`;

export const Link = styled.p`
  color: white;
  text-transform: capitalize;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 400px) {
    margin-right: 10px;
    font-size: 12px;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src}) no-repeat;
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media (max-width: 400px) {
    width: 16px;
    height: 16px;
  }
`;

export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }
  /* 
  @media (max-width: 700px) {
    display: none;
  } */
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
    @media (max-width: 400px) {
      width: 10px;
    }
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  border-radius: 5px;
  padding: 10px 20px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active ? "10px" : "0")};
  padding: ${({ active }) => (active ? "0 10px" : "0")};
  opacity: ${({ active }) => (active ? "1" : "0")};
  width: ${({ active }) => (active ? "200px" : "0")};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 400px) {
    margin-left: 5px;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (max-width: 400px) {
    height: 16px;
    width: 58px;
    margin-right: 10px;
  }

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;

export const Feature = styled.div`
  padding: 150px 0 500px 0;
  margin: 0 56px;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    transform: scale(0.7) translateX(-50px);
    width: 80%;
    padding: 0px;
    margin: 0;
  }
  @media (max-width: 600px) {
    position: absolute;

    transform: scale(0.4) translateX(-80vw) translateY(-20vw);
    width: 120%;
    padding: 50px 0;
  }
  @media (max-width: 400px) {
    transform: scale(0.3) translateX(-120vw) translateY(-75vw);
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`;
