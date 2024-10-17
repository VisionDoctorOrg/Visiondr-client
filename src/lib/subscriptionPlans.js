import axios from "axios";

export const getSubscriptionPlans = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access")}`,
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}subscription/plans/`,
      config
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
