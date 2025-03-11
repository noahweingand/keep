import { Icon } from "./icon";
import { KeepGuySvg } from "./svgs/KeepGuySVG";

export function Header() {
  return (
    <div className="flex justify-around items-center mb-20 sm:mb-0">
      <Icon
        file={"keepelf_white.svg" as unknown as undefined}
        color={"#ffffff"}
        lightColor={"#ffffff"}
        scale={10}
        style={{ height: "600px", width: "600px" }}
        spin={2}
        className="hidden xl:block"
      />
      <KeepGuySvg />
      <Icon
        file={"keepelf_white.svg" as unknown as undefined}
        color={"#ffffff"}
        lightColor={"#ffffff"}
        scale={10}
        style={{ height: "600px", width: "600px" }}
        spin={2}
        className="hidden xl:block"
      />
    </div>
  );
}
