import React, { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { contentStyles, contentWrapperStyles } from "./pop-over.styles";

type PopoverContentProps = {
  onClose: () => void;
  children: ReactNode;
};

const PopoverContent: React.FC<PopoverContentProps> = (props) => {
  const { onClose, children } = props;

  return (
    <div style={contentWrapperStyles}>
      <div style={contentStyles}>
        <div>
          <button onClick={onClose}>Close</button>
        </div>
        {children}
      </div>
    </div>
  );
};

type PopoverProps = {
  children: ReactNode;
};

const Popover: React.FC<PopoverProps> = (props) => {
  const { children } = props;
  const [showPopover, setShowPopover] = useState(false);

  const handleOpenPopover = () => {
    setShowPopover(true);
  };

  const handleClosePopover = () => {
    setShowPopover(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopover}>Open Popover</button>
      {showPopover &&
        createPortal(
          <PopoverContent onClose={handleClosePopover}>
            {children}
          </PopoverContent>,
          document.body
        )}
    </div>
  );
};

export default Popover;
