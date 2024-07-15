import React from "react";
import './About.css';
const About = () => {
  return (
    <div className="md:py-10 py-5" id="about">
      <div className="mx-auto">
        <h1 className="md:my-10 m-5 md:text-4xl text-2xl font-medium text-center">About Us</h1>
      </div>
      <section className="grid md:grid-cols-2 grid-cols-1 gap-10 md:w-[80%] w-[90%] mx-auto py-10">
        <div className="flex flex-col">
          <img src="/images/meds.png" alt="" className="hidden md:inline-block rounded-2xl w-96 hover:rotate-3 duration-300 custom-shadow transform origin-center transition-transform"/>
          <img src="/images/eyediagnosis.png" alt="" className="rounded-2xl w-96 ml-auto mr-0 relative md:mt-[-100px] hover:rotate-3 duration-300 custom-shadow transform origin-center transition-transform"/>
          <img src="/images/eyediagnosis1.png" alt="" className="hidden md:inline-block rounded-2xl w-96 relative mt-[-100px] hover:rotate-3 duration-300 custom-shadow transform origin-center transition-transform"/>
        </div>
        <div className="flex flex-col gap-5 text-xl rounded-xl bg-slate-200 md:px-12 px-6 font-medium md:pt-20 pt-10 pb-10 md:pb-0">
          <p>
            We are a forward thinking eye health startup committed to
            revolutionizing eye care in Nigeria and Africa.
          </p>
          <p>
            Our platform provides expert eye care advisory, extensive
            educational resources, and convenient online consultations.
          </p>
          <p>
            By leveraging technology, we aim to make eye care accessible,
            affordable, and personalized for everyone.
          </p>
          <p>
            Our mission is to empower individuals and organizations with the
            knowledge and tools needed to achieve and maintain optimal eye
            health, thereby enhancing productivity and fostering economic growth
            across the continent.
          </p>
          <p>
            Join us in our journey to a future where quality eye care is within
            everyone's reach. A world where we can See Clearly, Live Fully
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
