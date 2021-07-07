const MovieModal = () => {
  return (
    <div id='movie-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>This is a modal</div>
      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect blue waves-light btn'>
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
  zIndex: 5,
  transform: 'translate(0px, -50%)',
  top: '50%',
};

export default MovieModal;
