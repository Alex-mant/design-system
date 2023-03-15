import React from 'React';
import styled from 'styled-components';

const SampleUi = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  background: ${(props : IStyledProps) => !props.theme.isLight ? '#23262F' : '#fff'};
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  width: 318px;
  height: 318px;
  top : 50px;
  h4{
    color: ${(props : IStyledProps) => !props.theme.isLight && '#fff'};
  }
  `
  const Title = styled.h4`
  position: absolute;
  width: 194px;
  height: 80px;
  left: 63px;
  top: 103px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.01em;
  `
  const Header = styled.div`
  background: ${(props : IStyledProps) => !props.theme.isLight ? '#353945':'#F4F5F6'};
  color: ${(props : IStyledProps) => !props.theme.isLight && '#fff'};
  position: absolute;
  width: 318px;
  height: 48px;
  top: 0px;
  left: 0px;
`
const TopSpan = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  position: absolute;
  width: 34px;
  height: 24px;
  left: 16px;
  top: 14px;
`
const TopCircle = styled.div`
box-sizing: border-box;
position: absolute;
cursor: pointer;
width: 16px;
height: 16px;
left: 286px;
top: 16px;
border: 2px solid #B1B5C4;
border-radius: 50%;
`
const BotCircle = styled.div`
background : #3772FF;
border-radius: 50%;
position: absolute;
cursor: pointer;
width: 40px;
height: 40px;
left: 262px;
top: 262px;
`
const BotSpan = styled.span`
  color: #777E91;
  position: absolute;
  width: 194px;
  height: 24px;
  left: 63px;
  top: 199px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`

interface IStyledProps {
  theme: Object & {
    isLight: boolean
  },
}

interface IProps {
  content : object & {
    title: string,
    bot: string,
    //setState & state below
    setTheme(arg0: object): void,
    theme: {
      currentTheme: string,
      isLight: boolean
    },
  }
}


export const SampleUI = ({content}: IProps ) => {

  const handleClick = () => {
    content.setTheme(content.theme.currentTheme === 'Light' ? {currentTheme: 'Dark', isLight: false} : {currentTheme: 'Light', isLight: true})
  }

  return (
    <SampleUi theme={content.theme}>
      <Header theme={content.theme}>
        <TopSpan>{content.theme.currentTheme}</TopSpan>
        <TopCircle onClick={handleClick}/>
      </Header>
      <Title>{content.title}</Title>
      <BotSpan>{content.bot}</BotSpan>
      <BotCircle/>
    </SampleUi>
  )
}

export default SampleUI;