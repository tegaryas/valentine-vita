"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function MenuPage() {
  const router = useRouter();

  const handleClickMoment = () => {
    router.push("/menu/album");
  };

  const handleClickTime = () => {
    router.push("/menu/time");
  };

  const handleClickMessage = () => {
    router.push("/menu/message");
  };

  return (
    <div className={clsx("w-full h-full content-center")}>
      <img
        className={clsx("w-full h-[100vh] object-cover", "absolute")}
        src="../assets/background/background.jpg"
      />
      <div
        className={clsx("z-20 absolute bg-black opacity-10 w-full h-full")}
      />
      <div
        className={clsx(
          "z-50 absolute grid grid-flow-row w-full h-full ",
          "items-end content-center justify-center",
          "gap-y-[3rem] gap-x-[10rem]",
          "md:grid-flow-col md:items-end"
        )}
      >
        <button
          onClick={handleClickMoment}
          className={clsx(
            "grid grid-flow-row items-center content-center place-items-center gap-[1rem]"
          )}
        >
          <img
            className={clsx("w-[60px] md:w-[170px] object-cover")}
            src="./assets/menu/camera.png"
          />
          <p className={clsx("text-[16px] text-center", "md: text-[23px]")}>
            {"MOMENT"}
          </p>
        </button>
        <button
          onClick={handleClickTime}
          className={clsx(
            "grid grid-flow-row items-center content-center justify-items-center gap-[1rem]"
          )}
        >
          <img
            className={clsx("w-[60px] md:w-[130px] object-cover")}
            src="./assets/menu/clock.png"
          />
          <p className={clsx("text-[16px] text-center", "md: text-[23px]")}>
            {"TIME"}
          </p>
        </button>
        <button
          onClick={handleClickMessage}
          className={clsx(
            "grid grid-flow-row items-center content-center justify-items-center gap-[1rem]"
          )}
        >
          <img
            className={clsx("w-[70px] md:w-[170px] object-cover")}
            src="./assets/menu/letter.png"
          />
          <p className={clsx("text-[16px] text-center", "md: text-[23px]")}>
            {"MESSAGE"}
          </p>
        </button>
      </div>
    </div>
  );
}
