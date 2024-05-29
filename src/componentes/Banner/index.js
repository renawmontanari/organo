import "./Banner.css";

function Banner() {
  return (
    <header className="banner">
      <video 
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
        <source src="./video/matrix.mp4" type="video/mp4" />
      </video>
    </header>
  );
}

export default Banner;
