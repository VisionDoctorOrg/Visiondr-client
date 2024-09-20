import React, { useState, createContext } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const items = [
    {
      imageSrc: "/images/protecting_your_vision_as_you_age.jpg",
      imageAlt:
        "Image of Celebrating Healthy Aging Month: Protecting Your Vision as You Age",
      timeText: "20mins",
      title:
        "Celebrating Healthy Aging Month: Protecting Your Vision as You Age",
      article:
        "The Importance of Eye Health for Seniors\n\n" +
        " As we grow older, our risk for eye diseases increases. Conditions such as cataracts, glaucoma, macular degeneration, and diabetic retinopathy become more common. These conditions can lead to vision impairment or blindness if not properly managed. Regular eye exams are crucial for early detection and treatment of these issues.",

      description:
        "As we age, maintaining our health becomes increasingly important, and this includes taking care of our eyes. September is Healthy Aging Month, a time dedicated to raising awareness about the importance of eye health for seniors. ",
    },
  ];
  const [data, setData] = useState(items);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
