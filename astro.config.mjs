import { defineConfig } from "astro/config";
import icon from "astro-icon";
import UnoCSS from "unocss/astro";

export default defineConfig({
    integrations: [
        UnoCSS({ injectReset: true }),
        icon({
            mdi: ["github"],
        }),
    ],
});
