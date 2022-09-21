// dropdown props: multi (boolean), header, items
import React, { useState } from "react";
import "./Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

function Dropdown(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [listDown, setListDown] = useState(false);
  const { multi, title, items } = props;

  // main button text
  const getButtonText = () => {
    if (multi) {
      if (selectedItems.length == 0) {
        return "Select multiple";
      } else {
        return selectedItems.join(", ");
      }
    }

    if (selectedItems.length == 0) {
      return "Select one";
    } else {
      return selectedItems[0];
    }
  };

  // moves list up or down
  const toggleList = () => {
    setListDown(!listDown);
  };

  // adds or removes item (for multi select lists)
  const selectItem = (item) => {
    if (!multi) {
      toggleList();
      setSelectedItems([item]);
    } else {
      // if multi, remove item on select if it's already in list
      if (selectedItems.includes(item)) {
        setSelectedItems(
          selectedItems.filter((currItem) => {
            return currItem != item;
          })
        );
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    }
  };

  // creates list of items for user to select from
  const listItems = () => {
    if (listDown) {
      return items.map((item) => (
        <div key={item}>
          <button onClick={() => selectItem(item)} className="btn-group-child">
            {item}
            {multi && selectedItems.includes(item) && (
              <FontAwesomeIcon icon={faCheck} />
            )}
          </button>
        </div>
      ));
    }
  };

  const selectAllItems = () => {
    setSelectedItems([...items]);
  };

  const deselectAllItems = () => {
    setSelectedItems([]);
  };

  return (
    <div classNmae="dropdown-group">
      <h1 className="dropdown-header"> {title} </h1>
      <div className="btn-group">
        <button
          onClick={toggleList}
          className="btn-group-child alignleft main-button"
        >
          {getButtonText()}
          {listDown ? (
            <FontAwesomeIcon className="alignright" icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon className="alignright" icon={faCaretDown} />
          )}
        </button>
        <div className="item-btn-group">{listItems()}</div>
        {listDown && multi && (
          <div className="btn-group-child">
            <button className="half-btn-group-child" onClick={selectAllItems}>
              Select all
            </button>
            <button className="half-btn-group-child" onClick={deselectAllItems}>
              Deselect all
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
