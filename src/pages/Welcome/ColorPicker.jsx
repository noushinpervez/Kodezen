import { SketchPicker } from "react-color";
import PropTypes from 'prop-types';

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

ColorPicker.propTypes = {
  selectedColor: PropTypes.object,
  onChange: PropTypes.func,
};

export default ColorPicker;