"use client";

import React from "react";
import { NextPage } from "next";
import HomePage from "./page";

const HomeContainer: NextPage<any> = async () => {
  return (
    <HomePage />
  );
};

export default HomeContainer;
