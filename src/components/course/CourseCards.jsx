import React, { useRef, useState } from "react";
import classNames from "classnames";
import { courses } from "../../assets";
import { Modal } from "../../components";

import css from "./Course.module.css";

const CourseCards = (props) => {
  const modalRootRef = useRef(null);
    const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleModalRoot = (course) => {
    setSelectedCourse(course);

    modalRootRef.current.toggle();
  };

  return (
    <article className="flex flex-wrap justify-center gap-6">
      {courses.map((course) => {
        return (
          <section
            onClick={()=>{toggleModalRoot(course)}}
            className={classNames(
              css.exactShadowLikeBlueFlame,
              "flex h-[130px] w-full cursor-pointer justify-between rounded border-r-4 border-[#1b202b] bg-[#1b202b] px-4 duration-100 hover:-translate-y-4 hover:border-secondary-light md:w-[350px] md:px-6",
            )}
          >
            <div className="flex w-full flex-col justify-center font-[Roboto] text-lg font-medium leading-6 text-white">
              <div className="">{course.name}</div>
            </div>
            <div className="flex w-full items-center justify-end">
              <img className="w-[3.2rem] sm:w-[3.8rem]" src={course.image} />
            </div>
          </section>
        );
      })}
      <Modal ref={modalRootRef}>
        <div className="italic">
          <ul className="list-disc pl-5">
              {selectedCourse?.modules.map((point, index) => (
                <li key={index} className="mb-1">
                  {point}
                </li>
              ))}
            </ul>
        </div>
      </Modal>
    </article>
  );
};

export default CourseCards;
