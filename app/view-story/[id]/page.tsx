"use client";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Bookcover from "../_components/Bookcover";
import StoryPages from "../_components/StoryPages";
import LastPage from "../_components/LastPage";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const ViewStory = ({ params }: any) => {
  const [story, setStory]: any = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    getStory();
  }, []);

  const bookRef = useRef(0);

  const getStory = async () => {
    // Fetch story from db based on params.storyId
    const result: any = await db
      .select()
      .from(StoryData)
      .where(eq(StoryData.storyId, params.id));

    setStory(result[0]);
  };
  return (
    <div className="p-10 md:px-20 lg:px-40">
      <h2 className="text-center font-bold text-4xl p-4 bg-primary text-white">
        {story?.output.story_title}
      </h2>
      <div className="relative -right-10">
        <HTMLFlipBook
          showCover={true}
          className="mt-10"
          useMouseEvents={false}
          width={500}
          height={500}
          ref={bookRef}
        >
          <div>
            <Bookcover imageUrl={story?.coverImage} />
          </div>

          {[...Array(story?.output?.chapters.length)].map((chapters, index) => (
            <div key={index} className="bg-white p-10 border">
              <StoryPages storyChapter={story?.output?.chapters[index]} />
            </div>
          ))}
          {/* <div>
          <LastPage />
        </div> */}
        </HTMLFlipBook>
        {count !== story?.output?.chapters.length - 2 && (
          <div
            className="absolute -right-10 bottom-[220px] hover:scale-80 transition-all"
            onClick={() => {
              bookRef?.current.pageFlip().flipNext();
              setCount(count + 1);
            }}
          >
            <FaCircleChevronRight className="text-[40px] text-primary cursor-pointer" />
          </div>
        )}

        {count != 0 && (
          <div
            className="absolute left-0 bottom-[220px] hover:scale-80 transition-all"
            onClick={() => {
              bookRef?.current.pageFlip().flipPrev();
              setCount(count - 1);
            }}
          >
            <FaCircleChevronLeft className="text-[40px] text-primary cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewStory;
