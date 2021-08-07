import React from "react";
import "./TaskList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskList(props) {
  const items = props.data;
  console.log("Props Item - ", props.data);
  const listItems =
    // items &&
    items.map((item) => {
      return (
        <div className='list continer mx-auto' key={item.key}>
          <p>
            <input
              type='text'
              id={item.key}
              value={item.text}
              className='task'
              onChange={(e) => {
                props.setUpdate(e.target.value, item.key);
              }}
            />{" "}
            <span>
              <FontAwesomeIcon
                className='faicons'
                onClick={() => {
                  props.deleteItem(item.key);
                }}
                icon='trash'
              />
            </span>
          </p>
        </div>
      );
    });
  return <div>{listItems}</div>;
}

export default TaskList;
