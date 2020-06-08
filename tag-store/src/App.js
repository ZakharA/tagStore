import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Login from './Login';
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
     <Login />
      {/* <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer> */}
    </div>
  );
}

export default App;
