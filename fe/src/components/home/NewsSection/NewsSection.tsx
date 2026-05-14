import "./NewsSection.css";

const news = [
  {
    title: "5 mẹo chọn sân thể thao chất lượng",
    description:
      "Kinh nghiệm giúp bạn chọn sân phù hợp.",
  },

  {
    title: "Xu hướng Pickleball 2026",
    description:
      "Môn thể thao đang phát triển mạnh.",
  },

  {
    title: "Lợi ích của việc chơi thể thao",
    description:
      "Giúp cải thiện sức khỏe và tinh thần.",
  },
];

function NewsSection() {
  return (
    <section className="news-section">
      <div className="section-header">
        <h2>Tin tức</h2>

        <p>
          Cập nhật thông tin thể thao mới nhất.
        </p>
      </div>

      <div className="news-grid">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button>Đọc thêm</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
