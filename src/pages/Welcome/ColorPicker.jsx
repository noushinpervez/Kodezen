import { SketchPicker } from 'react-color';

const ColorPicker = ({ selectedColor, onChange }) => {
  const handleChangeComplete = (color) => {
    onChange(color.rgb);
  };

  return (
    <div className="kzui-color-picker">
      <SketchPicker
        color={ selectedColor }
        onChangeComplete={ handleChangeComplete }
        presetColors={ [] }
      />
    </div>
  );
};

export default ColorPicker;