import React, { useState } from 'react';
// import AppetizerModal from './AppetizerModal';
import { AccessContext, RestaurantState } from '../helpers/StateProvider';
import { useContext } from 'react';
import ReactDOM from 'react-dom';
interface AppetizerCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    itemIndex: number;
    sectionIndex: number;
  }
  
  interface AppetizerModalProps extends AppetizerCardProps {
    onClose: () => void;
    restaurantState: any; // Replace 'any' with the actual type of restaurantState
    setRestaurantState: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the actual type of restaurantState
  }

  const AppetizerModal: React.FC<AppetizerModalProps> = ({ onClose, itemIndex, sectionIndex, restaurantState, setRestaurantState }) => {
    // const [title, setTitle] = useState(title);

    // const [price, setPrice] = useState(price);
    // const [description, setDescription] = useState(description);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
      setIsEditing(!isEditing);
    };
  
    const saveChanges = () => {
        setIsEditing(false);
      // Here you would typically save the changes to a backend or parent component
    };
  
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRestaurantState((prevState: RestaurantState) => {
        const updatedSections = [...prevState.menuSections];
        updatedSections[sectionIndex].items[itemIndex] = {
          ...updatedSections[sectionIndex].items[itemIndex],
          title: e.target.value,
        };
        return { ...prevState, menuSections: updatedSections };
      });
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRestaurantState((prevState: RestaurantState) => {
        const updatedSections = [...prevState.menuSections];
        updatedSections[sectionIndex].items[itemIndex] = {
          ...updatedSections[sectionIndex].items[itemIndex],
          price: parseFloat(e.target.value),
        };
        return { ...prevState, menuSections: updatedSections };
      });
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setRestaurantState((prevState: RestaurantState) => {
        const updatedSections = [...prevState.menuSections];
        updatedSections[sectionIndex].items[itemIndex] = {
          ...updatedSections[sectionIndex].items[itemIndex],
          description: e.target.value,
        };
        return { ...prevState, menuSections: updatedSections };
      });
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
                value={restaurantState.menuSections[sectionIndex].items[itemIndex].title}
                onChange={handleTitleChange}
                className="font-bold text-lg w-full mb-2"
              />
              <input
                type="text"
                value={restaurantState.menuSections[sectionIndex].items[itemIndex].price}
                onChange={handlePriceChange}
                className="text-lg font-semibold w-full mb-2"
              />
              <textarea
                value={restaurantState.menuSections[sectionIndex].items[itemIndex].description}
                onChange={handleDescriptionChange}
                className="w-full py-4"
                rows={4}
              />
            </>
          ) : (
            <>
              <h3 className="font-bold text-lg">{restaurantState.menuSections[sectionIndex].items[itemIndex].title}</h3>
              <p className="text-lg font-semibold">${restaurantState.menuSections[sectionIndex].items[itemIndex].price}</p>
              <p className="py-4">{restaurantState.menuSections[sectionIndex].items[itemIndex].description}</p>
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

const AppetizerCard = ({ title, description, price, imageUrl, itemIndex, sectionIndex }: AppetizerCardProps) => {
  const { restaurantState, setRestaurantState } = useContext(AccessContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button className="flex w-full h-36 bg-base-100 border border-gray-300 border-opacity-75 rounded-lg overflow-hidden" onClick={showModal}>
        <div className="flex flex-col w-[65%] p-4 justify-between text-left h-full">
          <div>
            <h2 className="text-sm font-semibold">{title}</h2>
            <p className="text-sm font-light">{description}</p>
          </div>
          <div className="mt-auto">
            <p className="text-sm font-light">${price}</p>
          </div>
        </div>
        <div className="w-[35%] h-full">
          <img 
            src={imageUrl} 
            alt="Description"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </button>

      {isModalOpen && (
        <AppetizerModal
          onClose={closeModal}
          title={title}
          description={description}
          price={price}
          imageUrl={imageUrl}
          itemIndex={itemIndex}
          sectionIndex={sectionIndex}
          restaurantState={restaurantState}
          setRestaurantState={setRestaurantState}
        />
      )}
    </>
  );
};

export default AppetizerCard;