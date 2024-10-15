import { useState } from "react";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem"; 
import searchIcon from "../../assets/search.svg";
import addIcon from "../../assets/add.svg";
import close from "../../assets/close.svg";
import ColorPicker from "./ColorPicker";
import { rgbaToHex } from "../../utils/convert";

const initialColors = [
  { id: 1, title: "Primary", color: { r: 21, g: 107, b: 237, a: 1 } },
  { id: 2, title: "Secondary", color: { r: 237, g: 25, b: 118, a: 1 } },
  { id: 3, title: "Title Text", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: 4, title: "Supporting Text", color: { r: 89, g: 89, b: 89, a: 1 } },
];

const DesignSystem = () => {
  const [colors, setColors] = useState(initialColors);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [selectedColor, setSelectedColor] = useState({ r: 0, g: 0, b: 0, a: 1 });

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 10 } }));

  const handleAddColor = () => {
    setIsDrawerOpen(true);
    setEditItem(null);
    setSelectedColor({ r: 0, g: 0, b: 0, a: 1 });
  };

  const handleEditColor = (item) => {
    setEditItem(item);
    setIsDrawerOpen(true);
    setSelectedColor(item.color);
  };

  const handleDuplicateColor = (item) => {
    const newItem = {
      ...item,
      id: colors.length + 1,
      title: `${item.title} Copy`,
    };
    setColors([...colors, newItem]);
  };

  const handleDeleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  const handleSaveColor = (newItem) => {
    if (editItem) {
      // Edit existing item
      setColors(colors.map((color) => (color.id === newItem.id ? newItem : color)));
    } else {
      // Add new item
      setColors([...colors, { ...newItem, id: colors.length + 1 }]);
    }
    setIsDrawerOpen(false);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setColors((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor); // Update with the selected color object
  };

  return (
    <section className="kzui-design">
      <div className="kzui-design__heading">Design System</div>
      <hr />
      <div className="kzui-design__flex">
        <div className="kzui-design__tabs">
          <button className="kzui-design__tab kzui-design__tab--active">Color</button>
          <button className="kzui-design__tab">Typography</button>
          <button className="kzui-design__tab">Shadow</button>
        </div>
        <div className="kzui-design__input">
          <img src={ searchIcon } alt="Search" />
          <input type="search" name="search" id="search" placeholder="Search..." />
        </div>
      </div>
      <DndContext sensors={ sensors } collisionDetection={ closestCenter } onDragEnd={ handleDragEnd }>
        <SortableContext items={ colors } strategy={ verticalListSortingStrategy }>
          <table className="kzui-design__table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              { colors.map((item) => (
                <SortableItem
                  key={ item.id }
                  id={ item.id }
                  item={ item }
                  handleEdit={ handleEditColor }
                  handleDuplicate={ handleDuplicateColor }
                  handleDelete={ handleDeleteColor }
                  isInitialColor={ initialColors.some((color) => color.id === item.id) } // Check if it's an initial color
                />
              )) }
              <tr>
                <td></td>
                <td colSpan="2" className="kzui-design__table--add" onClick={ handleAddColor }>
                  <img src={ addIcon } alt="Add icon" />
                  <p>Add Color</p>
                </td>
              </tr>
            </tbody>
          </table>
        </SortableContext>
      </DndContext>
      { isDrawerOpen && (
        <aside className="kzui-drawer">
          <div className="kzui-drawer__heading">Name</div>
          <form
            onSubmit={ (e) => {
              e.preventDefault();
              handleSaveColor({
                id: editItem ? editItem.id : colors.length + 1,
                title: e.target.elements.title.value,
                color: selectedColor,
              });
            } }
          >
            <div className="kzui-drawer__input">
              <input
                type="text"
                name="title"
                defaultValue={ editItem ? editItem.title : "" }
                required
              />
              <img src={ close } alt="Close icon" onClick={ handleDrawerClose } />
            </div>
            <div className="kzui-drawer__heading">Value</div>
            <div className="kzui-drawer__flex">
              <h6>Color</h6>
              <div className="kzui-drawer__value-box">
                <div className="kzui-drawer__color" style={ { backgroundColor: rgbaToHex(selectedColor) } }></div>
                <p>{ rgbaToHex(selectedColor) }</p>
              </div>
            </div>
            <ColorPicker
              selectedColor={ selectedColor }
              onChange={ handleColorChange }
            />
            <div className="kzui-drawer__actions">
              <button type="button" className="kzui-drawer__cancel" onClick={ handleDrawerClose }>Cancel</button>
              <button type="submit" className="kzui-drawer__submit">{ editItem ? "Save Changes" : "Add Color" }</button>
            </div>
          </form>
        </aside>
      ) }
    </section>
  );
};

export default DesignSystem;