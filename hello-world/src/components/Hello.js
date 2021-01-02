import React, { Component } from 'react';

const Hello = () => {
    //return (
     //   <div>
     //     <h>Hello Meek</h>  
      //  </div>
   // );
   return React.createElement(
       'div',
       { id:'hello' , className:'dummyClass'},
       React.createElement('h1',null,'Hello meek')
       )
}

export default Hello;