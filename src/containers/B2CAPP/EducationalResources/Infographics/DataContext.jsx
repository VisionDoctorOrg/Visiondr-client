import React, { useState, createContext } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const items = [
    {
      imageSrc: "/images/infographics_1.jpeg",
      imageAlt: "Tips On Caring For Your Eyes",
      title: "Tips On Caring For Your Eyes",
      discription:
        "Lorem ipsum dolor sit amet consectetur. Massa mauris tempor elit non dignissim leo purus. Tincidunt facilisis fermentum odio neque auctor consequat lectus hendrerit.",
    },
    {
      imageSrc: "/images/infographics_2.jpeg",
      imageAlt: "How to Improve Eyesight Naturally",
      title: "How to Improve Eyesight Naturally: 7 Eyes Exercises",
      discription:
        "Lorem ipsum dolor sit amet consectetur. Massa mauris tempor elit non dignissim leo purus. Tincidunt facilisis fermentum odio neque auctor consequat lectus hendrerit.",
    },
    {
      imageSrc: "/images/infographics_3.jpeg",
      imageAlt: "How to take care for your eye",
      title: "How to take care for your eye: A step-step guide",
      discription:
        "Lorem ipsum dolor sit amet consectetur. Massa mauris tempor elit non dignissim leo purus. Tincidunt facilisis fermentum odio neque auctor consequat lectus hendrerit.",
    },
    {
      imageSrc: "/images/infographics_1.jpeg",
      imageAlt: "Tips On Caring For Your Eyes",
      title: "Tips On Caring For Your Eyes",
      discription:
        "Lorem ipsum dolor sit amet consectetur. Massa mauris tempor elit non dignissim leo purus. Tincidunt facilisis fermentum odio neque auctor consequat lectus hendrerit.",
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
