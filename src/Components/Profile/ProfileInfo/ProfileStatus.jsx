import React, { useEffect, useState } from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    status: this.props.status,
    editMode: false,
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deActiveEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          {!this.state.editMode && (
            <div>
              <span onDoubleClick={this.activeEditMode}>
                {this.state.status}
              </span>
            </div>
          )}
          {this.state.editMode && (
            <div>
              <input
                className={s.status__input}
                onChange={this.onStatusChange}
                autoFocus={true}
                onBlur={this.deActiveEditMode}
                value={this.state.status}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
