// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightLinksValidator from "starlight-links-validator";

/** @param {string} label @param {Record<string, string>} translations @param {string} dir */
const section = (label, translations, dir) => ({ label, translations, items: [{ autogenerate: { directory: `panduan/${dir}` } }] });

export default defineConfig({
  site: "https://dickofn.github.io",
  base: "/gasdist-site",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: { id: "GasDist", en: "GasDist" },
      description: "Surat jalan dan stok LPG, rapi dan offline.",
      logo: { src: "./src/assets/logo.svg" },
      favicon: "/favicon.svg",
      defaultLocale: "root",
      locales: {
        root: { label: "Bahasa Indonesia", lang: "id" },
        en: { label: "English", lang: "en" },
      },
      social: [{ icon: "email", label: "dickofn@gmail.com", href: "mailto:dickofn@gmail.com" }],
      customCss: ["./src/styles/guide.css"],
      lastUpdated: false,
      // Steps pages are short; the space goes to the screenshots instead.
      tableOfContents: false,
      credits: false,
      plugins: [starlightLinksValidator()],
      sidebar: [
        section("Mulai", { en: "Getting started" }, "mulai"),
        section("Stok", { en: "Stock" }, "stok"),
        section("Surat jalan", { en: "Surat jalan" }, "surat-jalan"),
        section("Cetak", { en: "Printing" }, "cetak"),
        section("Pelanggan", { en: "Customers" }, "pelanggan"),
        section("Data master", { en: "Master data" }, "data-master"),
        section("Pengguna", { en: "Users" }, "pengguna"),
        section("Pengaturan", { en: "Settings" }, "pengaturan"),
        section("Backup", { en: "Backup" }, "backup"),
        section("Bantuan", { en: "Help" }, "bantuan"),
      ],
    }),
  ],
});
