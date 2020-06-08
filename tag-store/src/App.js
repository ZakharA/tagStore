import React from 'react';
import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import TagSrearch from './TagSearch';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
     <TagSrearch />
      {/* <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer> */}
    </div>
  );
}

export default App;
