import React, { useEffect, useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activeEditMode = () => {
    setEditMode(true);
  };

  const deActiveEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <div>
        {!editMode && (
          <div>
            <span onDoubleClick={activeEditMode}>{status || "-----"}</span>
          </div>
        )}
        {editMode && (
          <div>
            <input
              className={s.status__input}
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deActiveEditMode}
              value={status}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileStatus;
