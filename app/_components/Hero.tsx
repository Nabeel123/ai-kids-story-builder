import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="px-10 md:px-28 lg:px-44 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-primary text-[30px] px-2 font-extrabold">
            Magical Story for Kids, powered by AI and the latest information
          </h2>
          <p className="text-2xl text-primary-100 font-light my-4 p-4">
            Story Teller allows kids to generate their own magical stories,
            complete with beautiful and captivating images that bring their
            imagination to life. Kids can become authors and illustrators of
            their own digital storybook, exploring endless possibilities in the
            world of imagination.
          </p>

          <Link href={"/create-story"}>
            <Button size="lg" color="primary" className="mt-5">
              Generate Story
            </Button>
          </Link>
        </div>
        <div>
          <Image src={"/hero.jpg"} alt="hero" height={200} width={600} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
