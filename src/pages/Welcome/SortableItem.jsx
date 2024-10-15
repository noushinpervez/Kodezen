import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import colorIcon from "../../assets/color.svg";
import menu from "../../assets/menu.svg";
import edit from "../../assets/edit.svg";
import copy from "../../assets/copy.svg";
import dlt from "../../assets/delete.svg";
import drag from "../../assets/drag.svg";
import { rgbaToHex } from "../../utils/convert";

const SortableItem = ({ id, item, handleEdit, handleDuplicate, handleDelete, isInitialColor }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr ref={ setNodeRef } style={ style } { ...attributes } { ...listeners }>
      <td>
        <img src={ drag } alt="Drag icon" className="kzui-design__table--drag" />
      </td>
      <td>
        <div className="kzui-design__table--content">
          <img src={ colorIcon } alt="Color icon" />
          <p>{ item.title }</p>
        </div>
      </td>
      <td className="kzui-design__table--value">
        <div className="kzui-design__table--value-box">
          <div className="kzui-design__table--color" style={ { backgroundColor: rgbaToHex(item.color) } }></div>
          <p>{ rgbaToHex(item.color) }</p>
        </div>
        <div className="kzui-design__table--menu">
          <img src={ menu } alt="Menu icon" className="kzui-design__menu-icon" />
          <div className="kzui-design__dropdown">
            <button onClick={ () => handleEdit(item) }>
              <img src={ edit } alt="Edit icon" />
              Edit
            </button>
            <button onClick={ () => handleDuplicate(item) }>
              <img src={ copy } alt="Copy icon" />
              Duplicate
            </button>
            <button onClick={ () => handleDelete(item.id) } className={ isInitialColor ? "kzui-design__disabled" : "" } disabled={ isInitialColor }>
              <img src={ dlt } alt="Delete icon" />
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SortableItem;