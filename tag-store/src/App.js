import React from 'react';
import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import SignUp from './SignUp';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
     <SignUp />
      {/* <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer> */}
    </div>
  );
}

export default App;
