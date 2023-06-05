import React from 'react'

const ModalAudio = ({ open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="h-screen bg-red-500 ">ModalAudio</div>
  )
}

export default ModalAudio
