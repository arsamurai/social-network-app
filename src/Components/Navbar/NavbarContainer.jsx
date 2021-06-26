import React from "react";
import Navbar from "./Navbar";
//import StoreContext from "../../StoreContext";
import { connect } from "react-redux";

// const NavbarContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {({ store }) => {
//         let state = store.getState().sideBar;
//         return <Navbar state={state} />;
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
