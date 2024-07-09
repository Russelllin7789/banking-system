import Link from "next/link";
import Image from "next/image";
import React from "react";

const AuthForm = ({ type }: AuthFormProps) => {
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          href="/"
          className="mb-12 cursor-pointer flex items-center gap-1 px-4"
        >
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon Logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
      </header>
    </section>
  );
};

export default AuthForm;
