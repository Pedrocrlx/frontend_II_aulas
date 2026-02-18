import ComponentUseMemo from "@/components/ComponentUseMemo";
import MeuComponente from "../components/TestComponent";
import ComponentUseRef from "@/components/ComponentUseRef";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-black ">
      {/* <MeuComponente />
      <ComponentUseMemo/> */}
      <ComponentUseRef/>
    </div>
  );
}
