import React from "react";
import styled from "styled-components";
const StyledButton = styled.button `
  display: ${(props) => props.display ? props.display : 'flex'};
  flex-direction: ${(props) => props.iconSide === 'left' ? 'row-reverse' : 'row'};
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding ? props.padding : '12px 16px'};
  gap: 12px;
  cursor: pointer;
  border: ${(props) => props.border ? props.border : 'none'};
  border-radius: 90px;
  background: ${(props) => props.background ? props.background : '#3772FF'};
  color: ${(props) => props.color ? props.color : '#FCFCFD'};
  opacity: ${(props) => props.disabled ? "50%" : "100%"};
  font-family: ${(props) => props.fontFamily ? props.fontFamily : 'DM Sans'};
  font-style: ${(props) => props.fontStyle ? props.fontStyle : 'normal'};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : 700};
  font-size: ${(props) => props.fontSize ? props.fontSize : '14px'};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : '16px'};
  text-align: center;
  &:hover{
    background: ${(props) => !props.disabled && `linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), ${props.hoverBackground ? props.hoverBackground : props.background ? props.background : '#3772FF'}`};
    color: ${(props) => !props.disabled && props.hoverColor};
  }
`;
export const Button = ({ text, options }) => {
    return (React.createElement(StyledButton, { display: options === null || options === void 0 ? void 0 : options.display, background: options === null || options === void 0 ? void 0 : options.background, color: options === null || options === void 0 ? void 0 : options.color, hoverColor: options === null || options === void 0 ? void 0 : options.hoverColor, hoverBackground: options === null || options === void 0 ? void 0 : options.hoverBackground, disabled: options === null || options === void 0 ? void 0 : options.disabled, iconSide: options === null || options === void 0 ? void 0 : options.iconSide, fontFamily: options === null || options === void 0 ? void 0 : options.fontFamily, fontSize: options === null || options === void 0 ? void 0 : options.fontSize, fontStyle: options === null || options === void 0 ? void 0 : options.fontStyle, fontWeight: options === null || options === void 0 ? void 0 : options.fontWeight, lineHeight: options === null || options === void 0 ? void 0 : options.lineHeight, border: options === null || options === void 0 ? void 0 : options.border, padding: options === null || options === void 0 ? void 0 : options.padding },
        text,
        (options === null || options === void 0 ? void 0 : options.icon) && React.createElement("img", { src: options === null || options === void 0 ? void 0 : options.icon, alt: options === null || options === void 0 ? void 0 : options.iconAltText })));
};
