import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface AppetizerModalProps {
  onClose: () => void;
  title: string;
  price: string;
  description: string;
  onUpdate: (title: string, price: string, description: string) => void;
}

const AppetizerModal: React.FC<AppetizerModalProps> = ({ onClose, title: initialTitle, price: initialPrice, description: initialDescription, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    setIsEditing(false);
    onUpdate(title, price, description);
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-6 z-10 max-w-2xl w-full">
        <button className="absolute top-2 right-2" onClick={onClose}>
          ✕
        </button>
        {isEditing ? (
          <>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="font-bold text-lg w-full mb-2"
            />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="text-lg font-semibold w-full mb-2"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full py-4"
              rows={4}
            />
          </>
        ) : (
          <>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-lg font-semibold">{price}</p>
            <p className="py-4">{description}</p>
          </>
        )}
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <h4 className="font-bold">Dressing:</h4>
          <p className="text-sm">Required - Choose a minimum of 1.</p>
          <div className="flex flex-col space-y-2 mt-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span>French Dressing 法式</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span>Italian Dressing 意式</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span>extra dressing + $0.50</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span>No dressing</span>
            </label>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          {isEditing ? (
            <button className="btn btn-primary" onClick={saveChanges}>
              Save Changes
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={toggleEdit}>
              Edit
            </button>
          )}
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AppetizerModal;