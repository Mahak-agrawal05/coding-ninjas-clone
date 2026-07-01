import CourseCard from "./CourseCard";
import CertificationCard from "./CertificationCard";

import {
  jobBootcampCourses,
  certificationCourses,
} from "./offeringsData";

function Offerings() {
  const graduateCourses = certificationCourses.filter(
    (course) => course.category === "For graduates"
  );

  const collegeCourses = certificationCourses.filter(
    (course) => course.category === "For college students"
  );

  return (
    <section className="bg-[#F9F7F2] py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Section Heading */}
        <h2 className="mb-16 text-center text-6xl lg:text-7xl font-bold text-[#E8E4DE]">
          OUR OFFERINGS
        </h2>

        {/* ================= Job Bootcamp ================= */}

        <div className="mb-10">
          <h3 className="text-[34px] font-bold text-gray-900">
            Job Bootcamp
          </h3>

          <p className="text-[#4F8EF7]">
            (For Graduates)
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {jobBootcampCourses.map((course) => (
            <CourseCard
              key={course.id}
              icon={course.icon}
              title={course.title}
              hours={course.hours}
              problems={course.problems}
              learners={course.learners}
            />
          ))}
        </div>

        {/* ================= IIT Certifications ================= */}

        <div className="mt-20">

          <div className="mb-10 flex items-center gap-4">
            <div className="rounded-xl border bg-white p-3 shadow-sm">
              🎓
            </div>

            <h2 className="text-[34px] font-bold">
              IIT Certifications
            </h2>
          </div>

          {/* For Graduates */}

          <span className="mt-12 inline-block rounded-full bg-[#7A5C2E] px-6 py-2.5 text-white">
  For college students
</span>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {graduateCourses.map((course) => (
              <CertificationCard
                key={course.id}
                {...course}
              />
            ))}
          </div>

          {/* For College Students */}

          <span className="mt-12 inline-block rounded-full bg-[#7A5C2E] px-5 py-2 text-white">
            For college students
          </span>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {collegeCourses.map((course) => (
              <CertificationCard
                key={course.id}
                {...course}
              />
            ))}
          </div>

        </div>

      </div>

<div className="mt-10"></div>

</section>
  );
}

export default Offerings;