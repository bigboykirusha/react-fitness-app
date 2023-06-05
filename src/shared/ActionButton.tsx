import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { SelectedPage } from "@/shared/types.ts";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};
const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      href={`#${SelectedPage.ContactUs}`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      className="rounded-md bg-secondary-500 px-10 py-2 transition duration-300 hover:bg-primary-500 hover:text-white"
    >
      {children}
    </AnchorLink>
  );
};
export default ActionButton;