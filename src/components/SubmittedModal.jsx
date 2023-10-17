import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  borderRadius:'10px',
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "grid",
  placeItems: "center",
};

const SubmittedModal = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CheckCircleIcon color="primary" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Submitted
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SubmittedModal;
