import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFutbol,
} from "react-icons/fa";

import "./StepsSection.css";

const steps = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Chọn địa điểm",
    description:
      "Tìm kiếm sân thể thao phù hợp gần bạn.",
  },

  {
    icon: <FaCalendarAlt />,
    title: "Chọn thời gian",
    description:
      "Lựa chọn ngày và khung giờ mong muốn.",
  },

  {
    icon: <FaFutbol />,
    title: "Đặt sân & Thanh toán",
    description:
      "Xác nhận nhanh chóng chỉ vài giây.",
  },
];

function StepsSection() {
  return (
    <section className="steps-section">
      <div className="section-header">
        <h2>Quy trình đặt sân</h2>

        <p>
          Chỉ với vài bước đơn giản là bạn đã có
          thể đặt sân.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StepsSection;
