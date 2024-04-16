const ListItem = ({ article}) => {
  if (!article) {
    return;
  }
    return (
      <li>
        <a href={article.url} target="_blank" rel="noreferrer">
          {article.label}
        </a>
      </li>
    );
};

export default ListItem;
