import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import LinkCategory from "@/scenes/navbar/LinkCategory.tsx";
import { SelectedPage } from "@/shared/types.ts";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8`}>
                <LinkCategory
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page={"Home"}
                />
                <LinkCategory
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page={"Benefits"}
                />
                <LinkCategory
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page={"Our Classes"}
                />
                <LinkCategory
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page={"Contact Us"}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sing In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
