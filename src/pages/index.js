import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { getFeaturedEvents } from "../../dummy-data";

export default function Home() {
  const events = getFeaturedEvents();
  return (
    <div>
      <h1>the home page</h1>
    </div>
  );
}
