import "./list-item.scss";

const ListItem = ({ article}) => {
  if (!article) {
    return;
  }
    return (
      <li className="item">
        <a href={article.url} target="_blank" rel="noreferrer">
          {article.label}
        </a>
      </li>
    );
};

export default ListItem;
