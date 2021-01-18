import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Bacground, ButtonLink, Container, Logo } from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Bacground {...restProps}> {children} </Bacground> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}> {children} </ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
