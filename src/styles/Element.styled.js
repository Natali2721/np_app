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
  margin: auto;
  text-align: center;
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

const List = styled.ul``;

const ListItem = styled.li`
  border-radius: ${p => p.theme.radii.card};
  height: 24px;
  margin-bottom: 8px;
  font-weight: bold;
`;

const SelectButton = styled.button`
  border-radius: ${p => p.theme.radii.card};
  height: 24px;
  border: none;
  background-color: inherit;
  font-weight: inherit;
  cursor: pointer;
  &:first-of-type {
    font-weight: bold;
  }
`;

const ContentBox = styled.div`
  position: relative;
  padding: 20px;
  flex-basis: calc((100% - 60px) / 2);
  border: solid 1px black;
  border-radius: 8px;
`;

const Text = styled.p`
  color: black;
  font-weight: bold;
  line-height: ${p => p.theme.lineHeight.card};

  :not(:last-of-type) {
    margin-bottom: 16px;
  }
  :last-of-type {
    margin-bottom: 26px;
  }
`;

const TextInfo = styled.span`
  font-weight: normal;
`;

const Button = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.bold};
  margin: 0 auto;
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.button};
  border-color: transparent;
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
  outline: none;
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

const ButtonDelete = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Galery = styled.ul`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  gap: 20px;
  list-style: none;
`;

const GaleryItem = styled.li`
  // display: block;
  flex-basis: calc((100% - 60px) / 4);
  padding: 12px;
  //height: auto;
  //overflow: hidden;
  border: solid 1px black;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export {
  Button,
  ButtonIcon,
  ButtonDelete,
  ContainerInfo,
  Form,
  Galery,
  GaleryItem,
  Header,
  HeaderContainer,
  HomeContainer,
  HomeTitle,
  Input,
  List,
  ListItem,
  LoaderContainer,
  Container,
  Text,
  TextInfo,
  SearchBox,
  SelectContainer,
  SelectInput,
  SelectText,
  SelectButton,
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
