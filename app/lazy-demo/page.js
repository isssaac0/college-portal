"use client";

import dynamic from "next/dynamic";

const HeavyComponent = dynamic(
  () => import("./HeavyComponent"),
  { loading: () => <p>Loading...</p> }
);

export default function Home() {
  return (
    <div>
      <h1>My Home Page</h1> 

      <HeavyComponent />
    </div>
  );
}