import React, { useState, useContext } from 'react';
import AppetizerCard from './AppetizerCard';
import { AccessContext } from '../helpers/StateProvider';
import MenuItem from './MenuItem';

type MenuSectionProps = {
  sectionIndex: number;
};

const MenuSection: React.FC<MenuSectionProps> = ({ sectionIndex }) => {
  const { restaurantState, setRestaurantState } = useContext(AccessContext);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantState((prevState) => {
      const updatedSections = [...prevState.menuSections];
      updatedSections[sectionIndex] = {
        ...updatedSections[sectionIndex],
        title: e.target.value,
      };
      return { ...prevState, menuSections: updatedSections };
    });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantState((prevState) => {
      const updatedSections = [...prevState.menuSections];
      updatedSections[sectionIndex] = {
        ...updatedSections[sectionIndex],
        description: e.target.value,
      };
      return { ...prevState, menuSections: updatedSections };
    });
  };

  const addItem = () => {
    setRestaurantState(prevState => {
      const newSections = [...prevState.menuSections];
      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        items: [
          ...newSections[sectionIndex].items,
          {
            title: "New Item",
            description: "Description for the new item",
            price: 0.00
          }
        ]
      };
      return { ...prevState, menuSections: newSections };
    });
  };

  return (
    <div className="space-y-2">
      <div className="flex items-start">
        {isEditing ? (
          <div className="space-y-2 flex-grow">
            <input
              type="text"
              value={restaurantState.menuSections[sectionIndex].title}
              onChange={handleTitleChange}
              className="input input-bordered w-full text-2xl font-bold"
            />
            <input
              type="text"
              value={restaurantState.menuSections[sectionIndex].description}
              onChange={handleDescriptionChange}
              className="input input-bordered w-full text-sm text-gray-500"
            />
            <button onClick={handleSave} className="btn btn-primary mt-2">Save</button>
          </div>
        ) : (
          <>
            <div className="flex-grow">
              <h1 className="text-2xl font-bold">{restaurantState.menuSections[sectionIndex].title}</h1>
              <p className="text-gray-500 text-sm mb-6">{restaurantState.menuSections[sectionIndex].description}</p>
            </div>
            <button onClick={handleEdit} className="btn btn-ghost btn-sm ml-2">Edit</button>
          </>
        )}
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {restaurantState.menuSections[sectionIndex].items.reduce((acc, item, index, array) => {
          if (index % 2 === 0) {
            acc.push(array.slice(index, index + 2));
          }
          return acc;
        }, []).map((pair, pairIndex) => (
          <div key={pairIndex} className="flex flex-col sm:flex-row gap-4">
            {pair.map((item, itemIndex) => (
              <AppetizerCard
                key={itemIndex}
                itemIndex={itemIndex}
                sectionIndex={sectionIndex}
                title={item.title}
                description={item.description}
                price={item.price}
                imageUrl={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}
              />
            ))}
          </div>
        ))}
        {/* Remove the hardcoded AppetizerCard components */}
      </div>
      <div className="flex justify-start mt-4">
        <button onClick={addItem} className="btn btn-secondary">Add item</button>
      </div>
    </div>
  );
};

export default MenuSection;