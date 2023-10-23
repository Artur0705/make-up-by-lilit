import React from "react";
import Intro from "../components/Intro";
import Welcome from "../components/Welcome";
import EventsIntro from "../components/EventsIntro";
import Fashion from "../components/Fashion";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Intro />
        <Welcome />
        <EventsIntro />
        <Fashion />
      </Layout>
    </>
  );
}
