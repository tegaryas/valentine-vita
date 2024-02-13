"use client";
import { timeEllapsed } from "@/src/utils/time";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TimePage() {
  const router = useRouter();
  const [time, setTimer] = useState(timeEllapsed());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timeEllapsed());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={clsx("w-full h-full content-center")}>
      <img
        className={clsx("w-full h-[100vh] object-cover", "absolute")}
        src="../assets/background/background.jpg"
      />
      <div
        className={clsx("z-20 absolute bg-black opacity-20 w-full h-full")}
      />

      <div
        className={clsx(
          "z-50 absolute w-full h-full",
          "grid grid-flow-row gap-x-[1rem] gap-y-[2rem]",
          "items-center content-center justify-center",
          "px-[5rem]"
        )}
      >
        <div
          className={clsx(
            "grid place-items-center gap-y-[1rem]",
            "md:flex md:gap-x-[2rem]"
          )}
        >
          <img
            className={clsx(
              "w-[100px] h-[100px] object-cover rounded-[50%] border border-black border-[6px]"
            )}
            src="../assets/album/photo-4.jpeg"
            alt=""
          />
          <p
            className={clsx(
              "text-center md:text-left text-[12px] md:text-[16px]"
            )}
          >
            {"Sudah berapa lama sih kita udah bersama????"}
          </p>
        </div>
        <div
          className={clsx(
            "grid grid-flow-col",
            "items-center content-center justify-center gap-x-[1rem]"
          )}
        >
          <div className={clsx("p-[1rem] bg-slate-500 rounded-[0.5rem]")}>
            <p className={clsx("text-center text-[20px] md:text-[24px]")}>
              {time.days}
            </p>
            <p className={clsx("text-center text-[12px]")}>{"Hari"}</p>
          </div>
          <div className={clsx("p-[1rem] bg-slate-500 rounded-[0.5rem]")}>
            <p className={clsx("text-center text-[20px] md:text-[24px]")}>
              {time.hours}
            </p>
            <p className={clsx("text-center text-[12px]")}>{"Jam"}</p>
          </div>
          <div className={clsx("p-[1rem] bg-slate-500 rounded-[0.5rem]")}>
            <p className={clsx("text-center text-[20px] md:text-[24px]")}>
              {time.minutes}
            </p>
            <p className={clsx("text-center text-[12px]")}>{"Menit"}</p>
          </div>
          <div className={clsx("p-[1rem] bg-slate-500 rounded-[0.5rem]")}>
            <p className={clsx("text-center text-[20px] md:text-[24px]")}>
              {time.seconds}
            </p>
            <p className={clsx("text-center text-[12px]")}>{"Detik"}</p>
          </div>
        </div>
        <button
          onClick={handleBack}
          className={clsx(
            "grid grid-flow-row items-center content-center place-items-center gap-[1rem]"
          )}
        >
          <img
            className={clsx("z-50 w-[50px] object-cover rotate-180")}
            src="../assets/arrow-back.png"
          />
        </button>
      </div>
    </div>
  );
}
