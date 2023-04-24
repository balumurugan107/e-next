import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";

export interface ILogo {
    src: string | StaticImageData;
    className?: string;
  }

const LoginBanner: FunctionComponent<ILogo> = ({ src,className }) => {
  return (
          <Image
            src={src}
            alt="Logo"
            className={`object-cover cursor-pointer ${className}`}
            layout="intrinsic"
          />
  );
};

export default LoginBanner;