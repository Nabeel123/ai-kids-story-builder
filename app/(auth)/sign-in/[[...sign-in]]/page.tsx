import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Image
          src={"/hero.jpg"}
          height={100}
          width={500}
          alt="Image"
          className="w-full "
        />
      </div>
      <div className="flex justify-center items-center h-screen my-5 order-first md:order-last">
        <SignIn />
      </div>
    </div>
  );
}
