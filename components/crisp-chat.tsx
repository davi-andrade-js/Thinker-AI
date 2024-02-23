"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ba3202de-3c0f-4f1c-8274-448666732155");
  }, []);

  return null;
};
