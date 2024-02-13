"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function MessagePage() {
  const router = useRouter();

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
          "z-50 absolute w-full h-full",
          "grid grid-flow-row gap-x-[1rem] gap-y-[2rem]",
          "items-center content-center justify-center",
          "px-[2rem]"
        )}
      >
        <p className={clsx("text-[30px] text-center py-[1rem]")}>
          {"❤️ ❤️ ❤️ ❤️"}
        </p>
        <img
          className={clsx("w-[400px] h-[400px]")}
          src="../assets/bubble-chat.png"
        />
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
