import React from "react";

const About = () => {
  return (
    <div className="py-10">
      <div className="mx-auto">
        <h1 className="my-10 text-4xl font-medium text-center">About Us</h1>
      </div>
      <section className="grid grid-cols-2 gap-10 w-[80%] mx-auto py-10">
        <div className="flex flex-col">
          <img src="/images/meds.png" alt="" className="rounded-2xl w-96 "/>
          <img src="/images/eyediagnosis.png" alt="" className="rounded-2xl w-96 ml-auto mr-0 relative mt-[-100px]"/>
          <img src="/images/eyediagnosis1.png" alt="" className="rounded-2xl w-96 relative mt-[-100px]"/>
        </div>
        <div className="flex flex-col gap-5 text-xl rounded-xl bg-slate-200 px-12 font-medium pt-20">
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
