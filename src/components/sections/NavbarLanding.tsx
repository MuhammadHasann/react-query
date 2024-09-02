"use server";

import Link from "next/link";

import BadgeCoins from "../fragments/badge/BadgeCoins";

const NavbarLanding = () => {
  return (
    <div className="flex items-center gap-x-3">
      <Link href="/">home</Link>
      <Link href="/test">testing</Link>
      <BadgeCoins />
    </div>
  );
};

export default NavbarLanding;
