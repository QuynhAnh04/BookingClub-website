import React, { useState } from 'react';
import './ProfileModals.css';

interface Props {
  onClose: () => void;
  onSave: (data: any) => Promise<void>;
}

const ChangePasswordModal: React.FC<Props> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      return alert("Mật khẩu xác nhận không khớp!");
    }
    if (formData.newPassword.length < 6) {
      return alert("Mật khẩu mới phải có ít nhất 6 ký tự!");
    }
    setLoading(true);
    await onSave(formData);
    setLoading(false);
  };

  return (
    <button 
      type="button"
      className="modal-overlay" 
      onClick={(e) => {
        // Chỉ đóng modal khi user click trực tiếp vào lớp nền overlay
        if (e.target === e.currentTarget) onClose();
      }}
      aria-label="Đóng màn hình đổi mật khẩu"
    >
      <div className="modal-card">
        <div className="modal-header">
          <h3>Đổi mật khẩu</h3>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="currentPassword">Mật khẩu hiện tại</label>
            <input 
              id="currentPassword"
              type="password" 
              className="modal-input" 
              value={formData.currentPassword}
              onChange={e => setFormData({...formData, currentPassword: e.target.value})}
              placeholder="Nhập mật khẩu cũ"
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Mật khẩu mới</label>
            <input 
              id="newPassword"
              type="password" 
              className="modal-input" 
              value={formData.newPassword}
              onChange={e => setFormData({...formData, newPassword: e.target.value})}
              placeholder="Ít nhất 6 ký tự"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Xác nhận mật khẩu mới</label>
            <input 
              id="confirmPassword"
              type="password" 
              className="modal-input" 
              value={formData.confirmPassword}
              onChange={e => setFormData({...formData, confirmPassword: e.target.value})}
              placeholder="Nhập lại mật khẩu mới"
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-modal btn-cancel" onClick={onClose}>Hủy</button>
          <button 
            className="btn-modal btn-save" 
            onClick={handleSubmit}
            disabled={loading || !formData.currentPassword || !formData.newPassword}
          >
            {loading ? "Đang lưu..." : "Cập nhật"}
          </button>
        </div>
      </div>
    </button>
  );
};

export default ChangePasswordModal;