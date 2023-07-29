import { FC, useState, useEffect } from "react";
import { HeaderData } from "../../types";

const Footer: FC<HeaderData> = ({ width, sticky }) => {
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setIsScrolledUp(false);
      } else if (currentScrollY < prevScrollY) {
        setIsScrolledUp(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <footer
      className={`w-full h-[50px] ${
        isScrolledUp ? "sticky" : ""
      } bottom-0 z-10 border-t-[1px] bg-white flex items-center  transition duration-300`}
    >
      <div className={`w-${width} m-[auto] text-sm`}>
        <p>© {new Date().getFullYear()} MSMA</p>
      </div>
    </footer>
  );
};

export default Footer;
