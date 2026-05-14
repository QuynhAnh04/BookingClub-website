import "./PromotionBannerSection.css";

function PromotionBannerSection() {
  return (
    <section className="promotion-section">
      <div className="promotion-grid">
        <div className="promotion-card">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200"
            alt=""
          />

          <div className="promotion-overlay">
            <h3>Giảm giá cuối tuần</h3>

            <p>
              Ưu đãi đến 30% cho booking cuối tuần.
            </p>
          </div>
        </div>

        <div className="promotion-card">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200"
            alt=""
          />

          <div className="promotion-overlay">
            <h3>Giải đấu mùa hè</h3>

            <p>
              Đăng ký tham gia giải đấu ngay hôm
              nay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionBannerSection;
