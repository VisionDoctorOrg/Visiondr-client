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
      category: "Cornea",
    },
    {
      imageSrc: "/images/infographics_2.jpeg",
      imageAlt: "How to Improve Eyesight Naturally",
      title: "How to Improve Eyesight Naturally: 7 Eyes Exercises",
      discription:
        "Lorem ipsum dolor sit amet consectetur. Massa mauris tempor elit non dignissim leo purus. Tincidunt facilisis fermentum odio neque auctor consequat lectus hendrerit.",
      category: "Iris and Pupil",
    },
    {
      imageSrc: "/images/infographics_3.jpeg",
      imageAlt: "How to take care for your eye",
      title: "How to take care for your eye: A step-step guide",
      discription:
        "Lorem ipsum dolor sit amet consectetur. Massa mauris tempor elit non dignissim leo purus. Tincidunt facilisis fermentum odio neque auctor consequat lectus hendrerit.",
      category: "Lens",
    },
  ];

  const allCategories = [
    "Cornea",
    "Iris and Pupil",
    "Lens",
    "Retina",
    "Macula",
    "Optic Nerve",
    "Vitreos",
    "Sclera",
    "Conjunctiva",
    "Eyelids and Tearfilm",
  ];
  const [data, setData] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [currentCategory, setCurrentCategory] = useState(allCategories[0]);
  return (
    <DataContext.Provider
      value={{ data, setData, categories, currentCategory, setCurrentCategory }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
