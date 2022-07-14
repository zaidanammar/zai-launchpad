import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { GrClose } from "react-icons/gr";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  content: {
    title?: string;
    body?: JSX.Element;
    footer?: JSX.Element;
  };
};

const ADialogBox = ({ isOpen, handleClose, content }: Props) => {
  return (
    <Dialog maxWidth="xs" fullWidth onClose={() => handleClose()} open={isOpen}>
      <DialogTitle>
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-textPrimary">{content.title}</p>
          <GrClose cursor="pointer" size={20} onClick={() => handleClose()} />
        </div>
      </DialogTitle>
      <DialogContent dividers>{content.body}</DialogContent>
      {content.footer}
    </Dialog>
  );
};

export default ADialogBox;
