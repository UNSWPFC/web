"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import { Image } from "@nextui-org/react";

export default function Gallery(props: { pubNav: string; images: string[] }) {
  const images = props.images;
  const pubNav = props.pubNav;
  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Pagination, Navigation, EffectCreative]}
        grabCursor={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-screen justify-center items-center px-4">
              <Image
                src={"/publications/" + pubNav + "/" + image}
                alt={image}
                width={800}
                height={800}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
