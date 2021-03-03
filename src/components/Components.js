import React, { Component } from "react";

const Components = ({ message }) => (
  <div>
    <p>{message}</p>
  </div>
);

// function Components({ message }) {
//   return (
//     <div>
//       <p>{message}</p>
//     </div>
//   );
// }

// class Components extends Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.message}</p>
//       </div>
//     );
//   }
// }

export default Components;
