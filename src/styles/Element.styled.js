import styled from 'styled-components';

//import { Link } from 'react-router-dom';

const Header = styled.header`
  background-color: ${p => p.theme.colors.accent};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-left: 48px;
    padding-right: 48px;
  }
`;

const HeaderContainer = styled.div`
  padding: 0 32px;
`;

const Container = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SearchBox = styled.div`
  padding: 16px 32px;
`;

const ContainerInfo = styled.div`
  padding: 16px 32px;
  display: flex;
  //flex-direction: column;
  //justify-content: center;
  gap: 30px;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeTitle = styled.h1`
  color: hsl(269, 35%, 53%);
  padding-top: 32px;
  padding-bottom: 32px;
  margin: 10px auto;
`;
const HomeContainer = styled.div`
  padding-top: 36px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  gap: 10px;
`;

const SelectText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: hsl(257, 46%, 27%);
`;

const SelectInput = styled.select`
  width: 100px;
  border-radius: 4px;
  font-size: 14px;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;

  @media screen and (min-width: 768px) {
    min-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

const ListItem = styled.li`
  width: 380px;
  text-align: center;
  text-transform: uppercase;
  background: ${p => p.theme.colors.cardBackground};
  box-shadow: ${p => p.theme.boxShadow.card};
  border-radius: ${p => p.theme.radii.card};
  &.none {
    display: none;
  }
`;

const ContentBox = styled.div`
  padding: 20px;
  flex-basis: calc((100% - 60px) / 2);
  border: solid 1px black;
  border-radius: 8px;
`;

const Text = styled.p`
  color: ${p => p.theme.colors.accent};
  line-height: ${p => p.theme.lineHeight.card};
  text-transform: uppercase;
  :not(:last-of-type) {
    margin-bottom: 16px;
  }
  :last-of-type {
    margin-bottom: 26px;
  }
`;

const Button = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.bold};

  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.button};

  cursor: pointer;
  box-shadow: ${p => p.theme.boxShadow.button};
  transition: color 250ms linear;
  transition: background-color 250ms linear;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
  }
  &.active {
    background-color: ${p => p.theme.colors.buttonActiveBg};
  }
`;

const LoadButton = styled.button`
  align-self: center;
  padding: 8px 16px;
  max-width: fit-content;
  margin-top: 32px;
  border: none;
  border-radius: 8px;
  background-color: #3f51b5;
  color: white;
  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: background-color 250ms linear;
  transition: transform 250ms linear;
  &:hover {
    background-color: #303f9f;
    transform: scale(1.1);
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  //max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
`;
const Input = styled.input`
  display: inline-block;
  //width: 100%;
  width: 300px;
  font: inherit;
  font-size: 16px;
  // border: none;
  // outline: none;
  border-radius: 8px;
  padding: 4px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  background-color: inherit;
  width: 40px;
  height: 40px;
  border: 0;
  margin-right: 4px;
  margin-left: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    transform: scale(1.2);
  }
`;

export {
  Button,
  ButtonIcon,
  ContainerInfo,
  Form,
  Header,
  HeaderContainer,
  HomeContainer,
  HomeTitle,
  Input,
  List,
  ListItem,
  LoadButton,
  LoaderContainer,
  Container,
  Text,
  SearchBox,
  SelectContainer,
  SelectInput,
  SelectText,
  ContentBox,
};

// const Button = styled.button`
//   padding: 8px 16px;
//   margin-top: ${p => p.theme.space[4]}px;
//   border: none;
//   border-radius: 15px;
//   background-color: #3f51b5;
//   color: white;

//   text-decoration: none;
//   font-family: inherit;
//   font-size: 16px;
//   line-height: 24px;
//   font-style: normal;
//   font-weight: 500;
//   min-width: 180px;
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

//   cursor: pointer;
//   transition: background-color 250ms linear;
//   &:hover {
//     background-color: #303f9f;
//   }
// `;

/*const P = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
*/
