import "../styles/globals.css";

import SushiLayout from "@/components/Sushi/SushiLayout";
import { Providers } from "./providers";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Providers>
      <Layout>
        <SushiLayout />
      </Layout>
    </Providers>
  );
}
