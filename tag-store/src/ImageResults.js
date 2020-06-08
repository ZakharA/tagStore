import React from 'react';
import 'antd/dist/antd.css';
import "./App.css";
import { Card } from 'antd'

const ImageResults = () => {
    return (
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >  </Card>,
        </div>
    );
}

export default ImageResults;
