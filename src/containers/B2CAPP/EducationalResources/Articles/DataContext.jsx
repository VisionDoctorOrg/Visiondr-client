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
      article: [
        "The Importance of Eye Health for Seniors",
        "As we grow older, our risk for eye diseases increases. Conditions such as cataracts, glaucoma, macular degeneration, and diabetic retinopathy become more common. These conditions can lead to vision impairment or blindness if not properly managed. Regular eye exams are crucial for early detection and treatment of these issues.",
        "Common Age-Related Eye Conditions",
        "1. Cataracts: Clouding of the eye's lens, leading to blurry vision. Surgery is often required to restore clear vision.",
        "2. Glaucoma: Increased pressure in the eye that can damage the optic nerve, potentially leading to blindness if untreated.",
        "3. Macular Degeneration: Deterioration of the central part of the retina, affecting sharp central vision needed for activities like reading and driving.",
        "4. Diabetic Retinopathy: Damage to the blood vessels in the retina due to diabetes, which can cause vision loss.",
        "Tips for Maintaining Healthy Vision",
        "1. Regular Eye Exams: Schedule comprehensive eye exams at least once a year to monitor eye health and catch any issues early.",
        "2. Protect Your Eyes from UV Rays: Wear sunglasses that block 100% of UVA and UVB rays to reduce the risk of cataracts and other eye conditions.",
        "3. Manage Chronic Conditions: Conditions like diabetes and hypertension can affect your vision. Keep these conditions under control to protect your eyes.",
        "4. Maintain a Healthy Diet: Foods rich in omega-3 fatty acids, lutein, zinc, and vitamins C and E can help keep your eyes healthy.",
        "5. Stay Active: Regular exercise improves blood circulation, which can help keep your eyes healthy.",
        "6. Avoid Smoking: Smoking increases the risk of developing age-related eye conditions.",
        "The Role of VisionDR in Promoting Eye Health",
        "At VisionDR, we are committed to helping seniors maintain their vision and overall eye health. Our services include comprehensive eye exams, access to the latest treatments, and educational resources to help you understand and manage your eye health. During Healthy Aging Month, we encourage everyone to prioritize their vision and take steps to protect their eyes.",
        "Conclusion",
        "Healthy Aging Month is a reminder that taking care of our eyes is essential for maintaining our quality of life as we age. By scheduling regular eye exams, protecting our eyes from UV rays, managing chronic conditions, eating a healthy diet, staying active, and avoiding smoking, we can keep our eyes healthy and our vision clear.",
        "Join VisionDR in celebrating Healthy Aging Month by making your eye health a priority. For more information on how to take care of your eyes and to schedule an eye exam, visit our website today.",
        "#HealthyAgingMonth #VisionDR #EyeHealth #SeniorHealth #EyeCare #AgingWell",
      ],

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
