import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Keep Simple",
  description: "静能生悟，即鸟鸣花落，都是化机",

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: false,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    })
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
