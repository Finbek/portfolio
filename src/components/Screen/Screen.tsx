import React from 'react';
import styled from 'styled-components';
import Topbar from '../Topbar/Topbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;




const AppContainer = styled.div`
  flex: 1;
  display: flex;
`;

const App = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

const AppBar = styled.div`
  display: flex;
  height: 64px;
  background-color: #f8f8f8;
  border-top: 1px solid #eee;
  padding: 0 32px;
`;

const AppIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: #eee;
  margin-right: 16px;
`;

const AppTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Screen = () => {


  return (
    <Container>
      <Topbar/>
      <AppContainer>
        <App>
          <div>App 1</div>
        </App>
        <App>
          <div>App 2</div>
        </App>
        <App>
          <div>App 3</div>
        </App>
      </AppContainer>
      <AppBar>
        <AppIcon />
        <AppTitle>App Store</AppTitle>
      </AppBar>
    </Container>
  );
};

export default Screen;
