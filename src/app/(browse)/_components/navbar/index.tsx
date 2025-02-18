import { Actions } from "./actions";
import { Logo } from "./logo";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full max-w-[1200px] mx-auto px-8 h-[100px]">
      <Logo />
      <Actions />
    </nav>
  );
};
