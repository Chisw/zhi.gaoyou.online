/*

  志 Annal
  |-> 卷 Volume
      |-> 章 Article

*/

// 卷
export interface IVolume {
  key: string
  name: string
  icon: string
}

// 章 前置信息
export interface IFrontMatter {
  title: string
  vol: string
  date: string
  layout: string
}

// 章
export interface IArticle {
  frontmatter: IFrontMatter
  file: string
  url: string
  rawContent: string
  compiledContent: string
  getHeadings: string
  Content: string
  default: string
}
