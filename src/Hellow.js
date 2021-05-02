import React , { Component } from 'react';

// class Hellow1 extends Component {
//     render (){
//     return (
//         <div className='f1 tc'>
//             <h1>Hellow World</h1>
//             <p>Wellcome to React</p>
//             <p>{this.props.greeting}</p>
//         </div>
//     );
//     }
// }

const Hellow = (props) => {

    return (
        <div className='f1 tc'>
            <h1>Hellow World</h1>
            <p>Wellcome to React</p>
            <p>{props.greeting}</p>
        </div>
    );
    
}

export default Hellow;