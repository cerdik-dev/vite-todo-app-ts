/// <reference types="vite/client" />
import { ComponentCustomProperties } from "vue";

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $isAuth: {
      login: boolean;
      role: "admin" | "user" | "visitor";
      username: string | null;
    } | null;
  }
}
