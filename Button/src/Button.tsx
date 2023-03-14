import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: ${(props: IStyledProps) => props.display ? props.display : 'flex'};
  flex-direction: ${(props) => props.iconSide === 'left' ? 'row-reverse' : 'row'};
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding ? props.padding : '12px 16px'};
  gap: 12px;
  cursor: pointer;
  border: ${(props : IStyledProps) => props.border ? props.border : 'none'};
  border-radius: 90px;

  background: ${(props : IStyledProps) => props.background ? props.background : '#3772FF'};
  color: ${(props : IStyledProps) => props.color ? props.color : '#FCFCFD'};
  opacity: ${(props: IStyledProps) => props.disabled ? "50%" : "100%"};

  font-family: ${(props: IStyledProps) => props.fontFamily ? props.fontFamily :'DM Sans'};
  font-style: ${(props: IStyledProps) => props.fontStyle ? props.fontStyle : 'normal'};
  font-weight: ${(props: IStyledProps) => props.fontWeight ? props.fontWeight : 700};
  font-size: ${(props: IStyledProps) => props.fontSize ? props.fontSize : '14px'};
  line-height: ${(props: IStyledProps) => props.lineHeight ? props.lineHeight : '16px'};
  text-align: center;

  &:hover{
    background: ${(props : IStyledProps) => !props.disabled && props.hoverBackground };
    color: ${(props : IStyledProps) => !props.disabled && props.hoverColor };
  }
`
interface IStyledProps {
  display?: string,
  background?: string,
  color?: string,
  hoverColor?: string,
  hoverBackground?: string, 
  disabled?: boolean,
  iconSide?: string,
  fontFamily?: string,
  fontSize?: string,
  fontStyle?: string,
  fontWeight?: number,
  lineHeight?: string,
  border?: string,
  padding?: string,
}
interface IProps {
  text: string,
  options?: {
    display?: string,
    background?: string,
    color?: string,
    hoverColor?: string,
    hoverBackground?: string, 
    disabled?: boolean,
    iconSide?: string,
    fontFamily?: string,
    fontSize?: string,
    fontStyle?: string,
    fontWeight?: number,
    lineHeight?: string,
    border?: string,
    padding?: string,
    //For the following parameters, don't put them in the tag
    icon?: string,
    iconAltText?: string,
  },
}

export const Button = ({text, options} : IProps) => {
  return (
    <StyledButton 
      display= {options?.display}
      background={options?.background}
      color={options?.color}
      hoverColor={options?.hoverColor}
      hoverBackground={options?.hoverBackground}
      disabled={options?.disabled}
      iconSide={options?.iconSide}
      fontFamily={options?.fontFamily}
      fontSize={options?.fontSize}
      fontStyle={options?.fontStyle}
      fontWeight={options?.fontWeight}
      lineHeight={options?.lineHeight}
      border={options?.border}
      padding={options?.padding}
    >
      {text}
      {options?.icon && <img src={options?.icon} alt={options?.iconAltText} />}
    </StyledButton>
  )
}