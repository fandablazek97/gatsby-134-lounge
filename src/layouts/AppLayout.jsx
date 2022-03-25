// Aplication main CSS
import "../styles/App.css";

// Font imports
import "@fontsource/oswald/";
import "@fontsource/roboto/";

// Layout components
import { Head } from "components/layout/Head";

export default function AppLayout({ children }) {
  return (
    <>
      <Head />
      {children}
    </>
  );
}
