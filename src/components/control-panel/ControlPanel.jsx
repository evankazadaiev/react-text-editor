import React, {useEffect, useState} from 'react';
import './ControlPanel.scss';

import Button from "../button/Button";

const ControlPanel = () => {
  const [buttonStyles, setButtonStyles] = useState({
    bold: false,
    italic: false,
    underline: false
  });
  
  const { bold, italic, underline } = buttonStyles;
  
  const handleStyles = (style) => {
    switch (style) {
      case 'bold':
        setButtonStyles({ ...buttonStyles, bold: !bold });
        document.execCommand('bold');
        break;
      case 'italic':
        setButtonStyles({ ...buttonStyles, italic: !italic });
        document.execCommand('italic');
        break;
      case 'underline':
        setButtonStyles({ ...buttonStyles, underline: !underline });
        document.execCommand('underline');
        break;
      default:
        return;
    }
  };
  
  useEffect(() => {
    // document.onselectionchange = () => {
    //   if(document.queryCommandState('bold')) {
    //     setButtonStyles({ ...buttonStyles, bold: !bold });
    //   } else if(document.queryCommandState('italic')) {
    //     setButtonStyles({ ...buttonStyles, italic: !italic });
    //   } else if(document.queryCommandState('underline')) {
    //     setButtonStyles({ ...buttonStyles, underline: !underline });
    //   }
    // };
  }, []);

  return (
    <div id="control-panel">
      <div id="format-actions">
        <Button className={`${bold ? 'active' : ''} format-action`}  type="button"
                handleClick={() => handleStyles('bold')}><b>B</b></Button>
        <Button className={`${italic ? 'active' : ''} format-action`} type="button"
                handleClick={() => handleStyles('italic')}><i>I</i></Button>
        <Button className={`${underline ? 'active' : ''} format-action`}  type="button"
                handleClick={() => handleStyles('underline')}><u>U</u></Button>
      </div>
    </div>
  );
}

export default ControlPanel;
