import { useState, useContext } from 'react';
import { AccessContext } from './helpers/StateProvider';
import MenuSection from './components/MenuSection';

function App() {
  const { restaurantState, setRestaurantState } = useContext(AccessContext);
  const [name, setName] = useState(restaurantState.restaurantName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const newSection = () => {
    setRestaurantState(prevState => ({
      ...prevState,
      menuSections: [
        ...prevState.menuSections,
        {
          title: `New Section ${prevState.menuSections.length + 1}`,
          description: "Description for the new section",
          items: [
            {
              title: "New Item",
              description: "Description for the new item",
              price: 0.00
            }
          ]
        }
      ]
    }));
  };

  return (
    <div className="flex flex-col p-4 space-y-4">
      <div className="flex items-center">
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-2xl font-bold bg-transparent border-none focus:outline-none mr-2"
            onBlur={() => setIsEditing(false)}
            autoFocus
          />
        ) : (
          <div className="text-2xl font-bold mr-2">{name}</div>
        )}
        <button onClick={handleEditClick} className="btn btn-sm btn-ghost">
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
      
      {/* Tabs */}
      <div className="tabs w-full overflow-x-auto flex">
        {restaurantState.menuSections.map((section, index) => (
          <a key={index} className="tab tab-bordered whitespace-nowrap">{section.title}</a>
        ))}
      </div>

      {/* Search Bar */}
      <input type="text" placeholder="Search..." className="input input-bordered w-full" />

      {/* Content Section */}
      {restaurantState.menuSections.map((_, index) => (
        <MenuSection key={index} sectionIndex={index} />
      ))}

      {/* New Section Button */}
      <div className="flex justify-center mt-4">
        <button className="btn btn-primary" onClick={newSection}>New section</button>
      </div>
    </div>
  );
}

export default App;
