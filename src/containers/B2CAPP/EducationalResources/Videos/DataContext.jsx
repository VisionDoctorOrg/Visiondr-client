import React, { useState, createContext } from "react";
export const DataContext = createContext();
//https://drive.google.com/file/d/1jihhrjEtxGz_cPKaCno8HivDHMKwwkil/view?usp=drive_link
const DataProvider = ({ children }) => {
  const items = [
    {
      imageSrc: "https://drive.google.com/thumbnail?id=1jihhrjEtxGz_cPKaCno8HivDHMKwwkil",
      videoSrc: "https://drive.google.com/file/d/1jihhrjEtxGz_cPKaCno8HivDHMKwwkil/preview",
      imageAlt: "Tips On Caring For Your Eyes",
      date: "Jul 2024",
      title: "Tips On Caring For Your Eyes",
      id: '1jihhrjEtxGz_cPKaCno8HivDHMKwwkil',

    },
    {
      imageSrc: "https://drive.google.com/thumbnail?id=1k1qCyn9jtwajrOSJ18_sTx0sKxn-G-kV",
      videoSrc: "https://drive.google.com/file/d/1k1qCyn9jtwajrOSJ18_sTx0sKxn-G-kV/preview",
      imageAlt: "Tips On Caring For Your Eyes",
      date: "Jul 2024",
      title: "Tips On Caring For Your Eyes",
      id: '1k1qCyn9jtwajrOSJ18_sTx0sKxn-G-kV',

    },
    {
      imageSrc: "https://drive.google.com/thumbnail?id=1jihhrjEtxGz_cPKaCno8HivDHMKwwkil",
      videoSrc: "https://drive.google.com/file/d/1jihhrjEtxGz_cPKaCno8HivDHMKwwkil/preview",
      imageAlt: "Tips On Caring For Your Eyes",
      date: "Jul 2024",
      title: "Tips On Caring For Your Eyes",
      id: '1jihhrjEtxGz_cPKaCno8HivDHMKwwkil',

    },
    {
      imageSrc: "https://drive.google.com/thumbnail?id=1k1qCyn9jtwajrOSJ18_sTx0sKxn-G-kV",
      videoSrc: "https://drive.google.com/file/d/1k1qCyn9jtwajrOSJ18_sTx0sKxn-G-kV/preview",
      imageAlt: "Tips On Caring For Your Eyes",
      date: "Jul 2024",
      title: "Tips On Caring For Your Eyes",
      id: '1k1qCyn9jtwajrOSJ18_sTx0sKxn-G-kV',

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
