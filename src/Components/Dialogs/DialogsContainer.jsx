import React from "react";
import { addMessage } from "../../Redux/Dialogs-reducer";
//import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";
import { getDialogsData, getMessagesData } from "../../Redux/Dialogs-selectors";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {({ store }) => {
//         let state = store.getState().dialogsPage;

//         let onAddMessage = () => {
//           store.dispatch(addMessageActionCreator());
//         };

//         let onMessageChange = (message) => {
//           let action = updateNewMessageTextActionCreator(message);
//           store.dispatch(action);
//         };
//         return (
//           <Dialogs
//             updateNewMessageText={onMessageChange}
//             addMessage={onAddMessage}
//             newMessageText={state.newMessageText}
//             dialogsData={state.dialogsData}
//             messagesData={state.messagesData}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogsData: getDialogsData(state),
    messagesData: getMessagesData(state),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addMessage: () => {
//       dispatch(addMessageActionCreator());
//     },
//     updateNewMessageText: (message) => {
//       dispatch(updateNewMessageTextActionCreator(message));
//     },
//   };
// };

export default compose(
  connect(mapStateToProps, {
    addMessage,
  }),
  withAuthRedirect
)(Dialogs);
