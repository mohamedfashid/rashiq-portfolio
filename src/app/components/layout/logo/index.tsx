import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
      <div className="logo-r">AR</div>
        {/* <Image
          src={getImgPath("/images/logo/logo.svg")}
          alt="logo"
          width={70}
          height={70}
        /> */}
        
      </Link>
    </>
  );
};

export default Logo;
