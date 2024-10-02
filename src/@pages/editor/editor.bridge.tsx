// export async function SlowComp() {
//   const { category } = editorContext.get();
//   const test = await new Promise<string>((resolve) =>
//     setTimeout(() => resolve("test"), 3000)
//   );

//   return `${test} ${category}`;
// }

// const selectAbout = () => select("about", `*, contact ( label )`);
// const selectContact = () => select("contact", `id, label`);
// const selectBlog = () => select("blog", `*, blog_tag ( title )`);
// const selectBlogTag = () => select("blog_tag", "id, title");

export async function EditorBridge() {
  return <div></div>;
}
