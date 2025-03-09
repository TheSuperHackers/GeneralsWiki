import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GeneralsWiki",
  description: "Generals Community Wiki",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Compile", link: "/SourceCode/Builds/vs22_compile.md" },
    ],

    sidebar: [
      {
        text: "Assets",
        items: [
          {
            text: "Art",
            items: [
              { text: "Cameo Sizes", link: "/Asset/Art/cameo_sizes" },
              { text: "DDS Files and DXT Compression", link: "/Asset/Art/dds/dds-files-and-dxt-compression" },
              { text: "3DS Max Readme", link: "/Asset/Art/w3d/3dsmax/readme" },
            ],
          },
          {
            text: "Audio",
            items: [{ text: "Audio Documentation", link: "/Asset/Audio/audio" }],
          },
          {
            text: "Game Design",
            items: [
              { text: "INI Map Documentation", link: "/Asset/GameDesign/ini/map" },
              { text: "SCB Links", link: "/Asset/GameDesign/scb/links" },
            ],
          },
          {
            text: "GUI",
            items: [
              { text: "Texturing", link: "/Asset/GUI/texturing" },
              { text: "WND Reference", link: "/Asset/GUI/wnd_reference" },
              {
                text: "WND Controls",
                items: [
                  { text: "Checkbox", link: "/Asset/GUI/WND_Controls/checkbox" },
                  { text: "Combobox", link: "/Asset/GUI/WND_Controls/combobox" },
                  { text: "Entry Field", link: "/Asset/GUI/WND_Controls/entryfiled" },
                  { text: "Progress Bar", link: "/Asset/GUI/WND_Controls/progressbar" },
                  { text: "Push Button", link: "/Asset/GUI/WND_Controls/pushbutton" },
                  { text: "Radio Button", link: "/Asset/GUI/WND_Controls/radiobutton" },
                  { text: "Scroll List Box", link: "/Asset/GUI/WND_Controls/scrollistbox" },
                  { text: "Slider", link: "/Asset/GUI/WND_Controls/slider" },
                  { text: "Static Text", link: "/Asset/GUI/WND_Controls/statictext" },
                  { text: "User", link: "/Asset/GUI/WND_Controls/user" },
                ],
              },
            ],
          },
          {
            text: "Localization",
            items: [{ text: "CSF Format", link: "/Asset/Localization/csf/csf_format" }],
          },
          {
            text: "Maps",
            items: [{ text: "WorldBuilder Links", link: "/Asset/Maps/worldbuilder/links" }],
          },
          {
            text: "Tools",
            items: [
              { text: "Generals Mod Builder", link: "/Asset/Tools/generals_mod_builder" },
              { text: "BIG Format", link: "/Asset/Tools/big/big_format" },
            ],
          },
        ],
      },
      {
        text: "Source Code",
        items: [
          { text: "Builds", link: "/SourceCode/Builds/vs22_compile" },
          { text: "Tools", link: "/SourceCode/Tools/switchers_arguments" },
        ],
      },
    ],

    footer: {
      message:
        'Want to contribute to this Wiki? <a href="https://github.com/TheSuperHackers/GeneralsWiki.git">Fork it and send a pull request.</a>',
    },

    socialLinks: [{ icon: "github", link: "https://github.com/TheSuperHackers/GeneralsWiki" }],
  },
  head: [["link", { rel: "icon", href: "/assets/favicon.ico" }]],
});
