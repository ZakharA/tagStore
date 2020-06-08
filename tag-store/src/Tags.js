import React from 'react';
import 'antd/dist/antd.css';
import "./App.css";
import { Tag } from 'antd';


const TagsList = () => {
    return (
       <div>
            <Tag>Tag 1</Tag>
        <Tag>
        <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
        </Tag>
        {/* onClose={log} */}
        <Tag closable > 
        Tag 2
        </Tag>
        <Tag closable >
        Prevent Default
        </Tag>
       </div>

    );
}

export default TagsList;
