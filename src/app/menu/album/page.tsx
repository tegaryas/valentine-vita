"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function AlbumPage() {
  const router = useRouter();
  const album = [
    "../assets/album/photo-1.jpeg",
    "../assets/album/photo-2.jpeg",
    "../assets/album/photo-3.jpeg",
    "../assets/album/photo-4.jpeg",
    "../assets/album/photo-5.jpeg",
    "../assets/album/photo-6.jpeg",
    "../assets/album/photo-7.jpeg",
    "../assets/album/photo-8.jpeg",
    "../assets/album/photo-9.jpeg",
    "../assets/album/photo-10.jpeg",
    "../assets/album/photo-11.jpeg",
    "../assets/album/photo-12.jpeg",
    "../assets/album/photo-13.jpeg",
  ];

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={clsx("w-full h-full content-center")}>
      <img
        className={clsx("w-full h-[100vh] object-cover fixed")}
        src="../assets/background/background.jpg"
      />
      <div className={clsx("z-20 fixed bg-black opacity-10 w-full h-full")} />
      <div
        className={clsx(
          "relative grid grid-flow-row w-full h-full",
          "items-end content-center justify-center",
          "gap-y-[3rem] gap-x-[5rem] py-[5rem]",
          "md:grid md:grid-cols-3 md:items-center md:content-center md:justify-items-center md:justify-center",
          "overflow-y-auto"
        )}
      >
        {album.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "relative items-center content-center place-items-center justify-items-center gap-[1rem]",
                "w-[250px] h-[250px]",
                "md:w-[300px] md:h-[300px]"
              )}
            >
              <img
                className={clsx(
                  "z-50 w-[250px] h-[250px] object-cover",
                  "md:w-[300px] md:h-[300px]"
                )}
                src="../assets/frame.png"
              />
              <img
                className={clsx(
                  "top-0 left-0 right-0 bottom-0 z-50 absolute w-[200px] h-[200px] object-cover m-[29px]",
                  "md:w-[250px] md:h-[250px] md:m-[25px]"
                )}
                src={item}
              />
            </div>
          );
        })}
        <button
          onClick={handleBack}
          className={clsx(
            "grid grid-flow-row items-center content-center place-items-center gap-[1rem]"
          )}
        >
          <img
            className={clsx("z-50 w-[60px] object-cover rotate-180")}
            src="../assets/arrow-back.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
