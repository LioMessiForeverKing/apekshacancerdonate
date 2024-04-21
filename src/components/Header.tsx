import NavBar from "@/components/NavBar";
import WordMark from "@/components/WordMark";
import { createClient } from "@/prismicio";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header>
      <NavBar settings={settings}/>
    </header>
  )
}