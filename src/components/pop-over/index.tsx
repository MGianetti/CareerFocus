import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  closeStyles,
  contentSmStyles,
  contentStyles,
  contentWrapperStyles,
} from "./pop-over.styles";
import { IconButton } from "@components";
import useEscapeKey from "@hooks/useEscapeKey";
import { useResponsiveness } from "@contexts/responsiveness";

type PopoverContentProps = {
  onClose: () => void;
  children: ReactNode;
};

const PopoverContent: React.FC<PopoverContentProps> = (props) => {
  const { onClose, children } = props;

  const { isExtraSmall } = useResponsiveness();
  useEscapeKey(onClose);

  return (
    <>
      <div style={contentWrapperStyles} onClick={onClose} />

      <div style={isExtraSmall ? contentSmStyles : contentStyles}>
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
