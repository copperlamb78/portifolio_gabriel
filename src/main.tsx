import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme
      accentColor="mint"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
      appearance="dark"
    >
      <App />
    </Theme>
  </StrictMode>,
);
