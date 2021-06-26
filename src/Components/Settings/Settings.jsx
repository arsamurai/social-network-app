import React from "react";
import s from "./Settings.module.css";
import { savePhoto } from "../../Redux/Profile-reducer";
import { compose } from "redux";
import { connect } from "react-redux";

class Settings extends React.Component {
  onMainPhotoSelected = (e) => {
    if (e.target.files[0]) {
      this.props.savePhoto(e.target.files[0]);
    }
  };

  render() {
    return (
      <div className={s.settings}>
        <div className={s.title}>Settings</div>
        <div className={s.settings__inner}>
          <div className={s.settings__inner__item}>
            Изменить аватарку:{" "}
            <input
              className={s.change__photo}
              type="file"
              onChange={this.onMainPhotoSelected}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default compose(
  connect(mapStateToProps, {
    savePhoto,
  })
)(Settings);
