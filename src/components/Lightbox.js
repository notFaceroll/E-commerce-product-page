import Gallery from './Gallery';

const Backdrop = (props) => {
  return <div  onClick={props.onClose}></div>;
};

const Lightbox = (props) => {
  return (
    <>
      <Backdrop onClose={props.onClose}/>
      <div>
        <Gallery />
      </div>
    </>
  );
};

export default Lightbox;
