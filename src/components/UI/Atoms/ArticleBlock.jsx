function ArticleBlock({ blockData }) {
  const { title, content,heading } = blockData;
  return (
    <div>
      <h6 className="pb-2">{title||heading}</h6>
      <p className="font-medium text-black/90 leading-6">{content}</p>
    </div>
  );
}

export default ArticleBlock;
