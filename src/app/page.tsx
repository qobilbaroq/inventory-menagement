import { Dasboard } from "@/components/Dasboard";
import { Navbar } from "@/components/Navbar";
import { Product } from "@/components/Product";

export default function Home() {
  return (
    <div className="flex">
      <Navbar/>
      {/* <Dasboard/> */}
      <Product/>
    </div>
  );
}
