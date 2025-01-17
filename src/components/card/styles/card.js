import styled from "styled-components/macro";

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-right: 56px;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  box-sizing: border-box;
  margin-left: 56px;
  overflow-x: scroll;
  overflow-y: hidden;
  touch-action: pan-x;

  &::-webkit-scrollbar {
    display: none;
  }
  &:nth-child(1) {
    margin-top: 15px;
  }

  @media (max-width: 1000px) {
    margin-left: 36px;
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    margin-left: 16px;
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    margin-left: 6px;
    margin-bottom: 10px;
  }
  > ${Title} {
    /* > * {
      &:first-child {
        margin-top: 10px;
      }
    } */
    @media (max-width: 1000px) {
      font-size: 16px;
    }
    @media (max-width: 600px) {
      font-size: 13px;
    }
    @media (max-width: 400px) {
      font-size: 10px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alingItems }) => alingItems && `align-items: ${alingItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  /* > ${Container}:first-of-type {
    @media (max-width: 1000px) {
      margin-top: -150px;
    }
  } */
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : "normal"};
  margin: 0;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: contain;
  }
  @media (max-width: 600px) {
    background-size: cover;
  }

  ${Title} {
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  ${FeatureText} {
    font-size: 14px;
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating > 15 ? "red" : "green")};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #00000026;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 35px 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.4);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 250px;
  min-width: 215px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;
