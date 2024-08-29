function StepList({ stepTitles }) {
  return (
    <section className=" flex-col w-48 gap-[38.5px] justify-between text-sm leading-tight tracking-tight text-gray-950 hidden md:flex">
      {stepTitles.map((title, index) => (
        <div key={index} className="">
          {title}
        </div>
      ))}
    </section>
  );
}

export default StepList;