import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

import { IconButton } from "@components";
import { useEscapeKey } from "@hooks";
import { useResponsiveness } from "@contexts/responsiveness";
import { PopoverContentProps } from "./pop-over.types";
import {
  closeStyles,
  contentSmStyles,
  contentStyles,
  contentWrapperStyles,
} from "./pop-over.styles";

const PopoverContent: React.FC<PopoverContentProps> = (props) => {
  const { onClose, children } = props;

  const { isSmall } = useResponsiveness();
  useEscapeKey(onClose);

  return (
    <>
      <div style={contentWrapperStyles} onClick={onClose} />

      <div style={isSmall ? contentSmStyles : contentStyles}>
        <div style={closeStyles} onClick={(e) => e.stopPropagation()}>
          <IconButton
            icon="close"
            onClick={onClose}
            size={32}
            position="fixed"
            margin={"48px 27px 0 0"}
          />
        </div>
        {children}
      </div>
    </>
  );
};

type PopoverProps = {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

const Popover: React.FC<PopoverProps> = (props) => {
  const { children, onClose, isOpen } = props;

  const handleClosePopover = () => {
    onClose();
  };

  return (
    <div>
      {isOpen &&
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
