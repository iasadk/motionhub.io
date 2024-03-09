export const converSlugToTitle = (slug: string) => {
  return slug.split("-").join(" ");
};
