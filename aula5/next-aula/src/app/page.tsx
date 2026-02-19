import ComponentUseMemo from "@/components/ComponentUseMemo";
import MeuComponente from "../components/TestComponent";
import ComponentUseRef from "@/components/ComponentUseRef";
import { ThemeContext, ThemeProvider } from "@/components/ContextApi";
import ThemeChanger from "@/components/ThemeChanger";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen items-center justify-center font-sans bg-black ">
        {/* <MeuComponente />
      <ComponentUseMemo/> */}
        <ComponentUseRef />
        <ThemeChanger />
      </div>
    </ThemeProvider>
  );
}
