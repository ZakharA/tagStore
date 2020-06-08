import React from 'react';
import 'antd/dist/antd.css';
import "./App.css";
import TagsList from './Tags';
import ImageResults from './ImageResults';

const TagSrearch = () => {
    return (
        <div>
            <TagsList />
            <ImageResults />
        </div>
    );
}

export default TagSrearch;
