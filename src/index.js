import React from 'react';
import reactDom from 'react-dom/client'
import { MyProvider } from './context';
import Stage1 from './components/stage1';

const Index = () => {
    return (
        <MyProvider>
            <Stage1/>
        </MyProvider>
    );
};

const root = reactDom.createRoot(document.getElementById('root'))
root.render(<Index/>)