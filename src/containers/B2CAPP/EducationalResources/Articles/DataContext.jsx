import React, { useState, createContext } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const items = [
    {
      imageSrc: "/images/heathy_living.jpeg",
      imageAlt: "Image of Healthy Eye, Healthy Living",
      timeSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a37334d2c4d670195a95301fc9ae379cc58534dda8efa19f8a84134904313fc6?placeholderIfAbsent=true&apiKey=06e54cbb0c8d4ebdbfa1852341f08638",
      timeAlt: "Time icon",
      timeText: "20mins",
      title: "Healthy Eye, Healthy Living",
      description:
        "Potter ipsum wand elf parchment wingard. Releases be alohamora umbridge bathroom you eye your vulture-hat. Cloak sopophorous twin winky fawkes trunks glasses lupin knickerbocker.",
    },
    {
      imageSrc: "/images/stories.jpeg",
      imageAlt: "Image of Our Outreach Success Stories",
      timeSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/395e3a93fa26310b6dc7dd5329c45945ab03bf8614e1428a35ce371eff41c449?placeholderIfAbsent=true&apiKey=06e54cbb0c8d4ebdbfa1852341f08638",
      timeAlt: "Time icon",
      timeText: "20mins",
      title: "Our Outreach Success Stories",
      description:
        "Potter ipsum wand elf parchment wingard. Releases be alohamora umbridge bathroom you eye your vulture-hat. Cloak sopophorous twin winky fawkes trunks glasses lupin knickerbocker.",
    },
    {
      imageSrc: "/images/healthy_eye_img.png",
      imageAlt: "Image of Healthy Eye, Healthy Living",
      timeSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5b41ac467020b070d27ca57daf1385ca5c40b5254cc8708125d8198979f693b4?placeholderIfAbsent=true&apiKey=06e54cbb0c8d4ebdbfa1852341f08638",
      timeAlt: "Time icon",
      timeText: "20mins",
      title: "Healthy Eye, Healthy Living",
      description:
        "Potter ipsum wand elf parchment wingard. Releases be alohamora umbridge bathroom you eye your vulture-hat. Cloak sopophorous twin winky fawkes trunks glasses lupin knickerbocker.",
    },
    {
      imageSrc: "/images/heathy_living.jpeg",
      imageAlt: "Image of Our Outreach Success Stories",
      timeSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/78b20b67a84bc989ffc490dc5ddbe3b2135bb06b0b642aba8fd7e86897bd4978?placeholderIfAbsent=true&apiKey=06e54cbb0c8d4ebdbfa1852341f08638",
      timeAlt: "Time icon",
      timeText: "20mins",
      title: "Our Outreach Success Stories",
      description:
        "Potter ipsum wand elf parchment wingard. Releases be alohamora umbridge bathroom you eye your vulture-hat. Cloak sopophorous twin winky fawkes trunks glasses lupin knickerbocker.",
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
