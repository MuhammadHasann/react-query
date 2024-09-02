"use server";

import Link from "next/link";

import BadgeCoins from "../fragments/badge/BadgeCoins";

const NavbarLanding = () => {
  return (
    <div>
      <Link href="/">home</Link>
      <Link href="/testing">testing</Link>
      <BadgeCoins />
    </div>
  );
};

export default NavbarLanding;
