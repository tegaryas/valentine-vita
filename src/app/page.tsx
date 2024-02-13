"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleClickStart = () => {
    let audio = document.getElementById("audio") as HTMLMediaElement;
    audio.play();
    router.push("/menu");
  };

  return (
    <div className={clsx("w-full h-full content-center")}>
      <img
        className={clsx("w-full h-[100vh] object-cover", "absolute")}
        src="./assets/background/background.jpg"
      />
      <div
        className={clsx("z-20 absolute bg-black opacity-20 w-full h-full")}
      />
      <div
        className={clsx(
          "z-50 absolute grid grid-flow-row w-full h-full items-center content-center justify-items-center",
          "gap-y-[0.5rem]"
        )}
      >
        <p className={clsx("text-[30px] text-center py-[1rem]")}>
          {"❤️ ❤️ ❤️ ❤️"}
        </p>
        <p className={clsx("text-[18px] text-center")}>{"DEAR MY VITA"}</p>
        <p className={clsx("text-[18px] text-center")}>
          {"HAPPY VALENTINE DAY"}
        </p>
        <button className="w-[150px] h-[85px]" onClick={handleClickStart}>
          <img
            className={clsx("w-[150px] h-[85px] object-cover py-[1rem]")}
            src="./assets/start.png"
          />
        </button>
      </div>
      <p
        className={clsx(
          "z-50 absolute text-[10px] text-center",
          "bottom-0 left-0 right-0",
          "pb-[3rem]"
        )}
        dangerouslySetInnerHTML={{ __html: "Made with ❤️ from Tegar Yas" }}
      />
    </div>
  );
}
