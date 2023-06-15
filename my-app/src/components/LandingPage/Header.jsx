import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex justify-between p-10 mx-10 items-center">
        <div>
          <Image src="/logo.png" width={200} height={200} />
        </div>
        <div className="">
          <ul className="flex gap-5">
            <Link href="/">
              <li>HOME</li>
            </Link>

            <Link href="/account">
              <li>ACCOUNT</li>
            </Link>

            <Link href="/packages">
              {" "}
              <li>MEBERSHIP</li>
            </Link>

            <li>SCHEDULE</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between p-10 mx-10 items-center">
        <div>
          <Image src="/logo.png" width={200} height={200} />
        </div>
        <div className="">
          <ul className="flex gap-5">
            <li>JOIN NOW</li>
            <Link href="/account">
              <li>LOGIN</li>
            </Link>
            <li>MEBERSHIP</li>
            <li>SCHEDULE</li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Header;
