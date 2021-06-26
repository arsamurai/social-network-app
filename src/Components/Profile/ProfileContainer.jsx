import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateStatus,
  addPost,
  saveProfile,
} from "../../Redux/Profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";
import {
  getProfile,
  getStatus,
  getAutorithedUserId,
  getIsAuth,
  getPostData,
} from "../../Redux/Profile-selectors";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorithedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        addPost={this.props.addPost}
        saveProfile={this.props.saveProfile}
        postData={this.props.postData}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: getProfile(state),
  status: getStatus(state),
  autorithedUserId: getAutorithedUserId(state),
  isAuth: getIsAuth(state),
  postData: getPostData(state),
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateStatus,
    addPost,
    saveProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
