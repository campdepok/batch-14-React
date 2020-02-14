import React from "react";
// import { contextApp } from "../contexts/state";
// import { withRouter, useLocation } from "react-router-dom";
import "../styles/HeadFoot.css";

class HeadFoot extends React.Component {
  render() {
    // console.log(value);
    return (
      <div>
        <h1 className='headfoot'>
          {this.props.title}
        </h1>
      </div>
    );
  }
}

// function HeadFoot(props) {
//   return (
//     <div>
//       <h1 className="headfoot">{props.title}</h1>
//     </div>
//   );
// }

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// const HeadFoot = props => {
//   let query = useQuery();
//   console.log("query", query.get("name"));
//   return (
//     <div>
//       <h1 className="headfoot">{props.title}</h1>
//     </div>
//   );
// };

// HeadFoot.contextType = contextApp;

// export default withRouter(HeadFoot);

export default HeadFoot;
