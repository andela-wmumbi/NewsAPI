import React from 'react';

const propDemo = (props) => {
    console.log(props);
    return <i>{props.name} is awesome</i>
};

export default propDemo;
