import NewsItem from './NewsItem';

function NewsGrid({ items }) {
  return (
    <div className="news-grid">
      {items && Array.isArray(items) && items.length > 0 && items.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </div>
  );
}

export default NewsGrid;
