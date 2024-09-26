"use client";
import { useEffect } from "react";
import WOW from "wowjs";

const useWow = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
      offset: 100,
      mobile: true,
    }).init();
  }, []);
};

export default useWow;
