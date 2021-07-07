const MovieModal = () => {
  return (
    <div id='movie-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>This is a modal</div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default MovieModal;
