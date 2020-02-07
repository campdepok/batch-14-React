import React from "react";
// import { contextApp } from "../contexts/state";
import "../styles/HeadFoot.css";

// class HeadFoot extends Component {
//   render() {
//     let value = this.context;
//     // console.log(value);
//     return (
//       <div>
//         <h1 className='headfoot'>
//           {this.props.title} ke {value}
//         </h1>
//       </div>
//     );
//   }
// }

// function HeadFoot(props) {
//   return (
//     <div>
//       <h1 className="headfoot">{props.title}</h1>
//     </div>
//   );
// }

const HeadFoot = props => {
  return (
    <div>
      <h1 className="headfoot">{props.title}</h1>
    </div>
  );
};

// HeadFoot.contextType = contextApp;

export default HeadFoot;
