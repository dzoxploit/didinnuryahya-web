export type MediumPost = {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  content: string;
  pubDate: string;
};
export function parseMediumPosts(items: any[]): MediumPost[] {
  return items.slice(0, 10).map((item: any) => ({
    id: item.guid.replace("https://medium.com/p/", ""),
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    description: item.description,
    content: item["content:encoded"],
    thumbnail:
      item["media:thumbnail"]?.["@_url"] ||
      "https://cdn-icons-png.flaticon.com/512/5968/5968906.png",
  }));
}
