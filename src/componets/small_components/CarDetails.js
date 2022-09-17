import React, { useEffect } from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useLocation } from "react-router-dom";
// const items = [
//   {
//     imgUrl:
//       "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
//   },
//   {
//     imgUrl:
//       "https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg",
//   },
// ];

function CarDetails() {
  const { state } = useLocation();
  console.log(state.props.id,"state");
  
  const [images, setImages] = useState();
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  useEffect(() => {
    const getData = () => {
      fetch(`https://picsum.photos/v2/list`, {})
        .then((res) => {
          const data = res.data;
          const img = data.map((m) => <img src={m.download_url} alt="" />);
          setImages({
            galleryItems: img,
          });
        })
        .catch((error) => {
          console.log(error,"error");
        });
    };
    getData();
  }, []);

  console.log(images,"images");
  //     const item = items?.map((coin) => {

  //     })
  return (
    <div>
      <div>
        <AliceCarousel
          mouseTracking
          infinite
          disableButtonsControls
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          responsive={responsive}
          autoPlay
          items={images}
        />
      </div>
    </div>
  );
}

export default CarDetails;
