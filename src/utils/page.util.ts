export const getAllPages = () => {
  const allPageRecord = import.meta.glob('@/pages/**/*.md', { eager: true })

  return Object.values(allPageRecord)
    .map((page: any) => {
      return {
        ...page.frontmatter,
        url: page.url,
      }
    })
}
