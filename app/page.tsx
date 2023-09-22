"use client";
import "../styles/globals.css";

import SushiLayout from "@/components/Sushi/SushiLayout";
import { Providers } from "./providers";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import SushiFormLayout from "@/components/Sushi/SushiFormLayout";
import { ProfileProvider } from "@/context/ProfileContext";

export default function Home() {
  const [profileSet, setProfileSet] = useState(false);

  // useEffect(() => {}, []);

  return (
    <Providers>
      <ProfileProvider>
        <Layout>
          {profileSet && <SushiLayout />}
          {!profileSet && <SushiFormLayout setProfileSet={setProfileSet} />}
          {/* {profileSet ? <SushiLayout /> : <SushiFormLayout />} */}
        </Layout>
      </ProfileProvider>
    </Providers>
  );
}
