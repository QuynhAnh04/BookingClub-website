import {
  FaHeadset,
  FaCreditCard,
  FaMapMarkedAlt,
} from "react-icons/fa";

import "./WhyChooseUsSection.css";

const features = [
  {
    icon: <FaHeadset />,
    title: "Hỗ trợ nhanh chóng",
    description:
      "Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ.",
  },

  {
    icon: <FaCreditCard />,
    title: "Thanh toán tiện lợi",
    description:
      "Hỗ trợ nhiều phương thức thanh toán.",
  },

  {
    icon: <FaMapMarkedAlt />,
    title: "Nhiều địa điểm",
    description:
      "Hệ thống sân thể thao đa dạng khu vực.",
  },
];

function WhyChooseUsSection() {
  return (
    <section className="why-section">
      <div className="section-header">
        <h2>Vì sao chọn BookingClub?</h2>

        <p>
          Trải nghiệm đặt sân hiện đại, nhanh chóng
          và tiện lợi.
        </p>
      </div>

      <div className="why-content">
        <div className="why-image">
          <img
            src="https://images.unsplash.com/photo-1737476997205-b3336182f215?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="why-features">
          {features.map((feature, index) => (
            <div
              className="why-feature-card"
              key={index}
            >
              <div className="why-feature-icon">
                {feature.icon}
              </div>

              <div>
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
