import { useState, createContext, FC, ReactNode } from "react";

export type MenuItem = {
  title: string;
  description: string;
  price: number;
};

export type MenuSection = {
  title: string;
  description: string;
  items: MenuItem[];
};

export type RestaurantState = {
  restaurantName: string;
  menuSections: MenuSection[];
};

const defaultRestaurantState: RestaurantState = {
  restaurantName: "The Gourmet Galaxy",
  menuSections: [
    {
      title: "Appetizers",
      description: "Start your culinary journey with these delightful bites",
      items: [
        {
          title: "Cosmic Calamari",
          description: "Crispy calamari rings with a zesty alien dipping sauce",
          price: 12.99
        },
        {
          title: "Meteor Mozzarella Sticks",
          description: "Golden-brown mozzarella sticks with marinara sauce",
          price: 9.99
        },
        {
          title: "Cosmic Calamari",
          description: "Crispy calamari rings with a zesty alien dipping sauce",
          price: 12.99
        },
        {
          title: "Meteor Mozzarella Sticks",
          description: "Golden-brown mozzarella sticks with marinara sauce",
          price: 9.99 
        }, 
        {
          title: "Cosmic Calamari",
          description: "Crispy calamari rings with a zesty alien dipping sauce",
          price: 12.99
        },
      ]
    },
    {
      title: "Main Courses",
      description: "Embark on a flavor adventure with our stellar entrees",
      items: [
        {
          title: "Supernova Steak",
          description: "Perfectly grilled ribeye with garlic mashed potatoes",
          price: 29.99
        },
        {
          title: "Galactic Grilled Salmon",
          description: "Fresh salmon fillet with lemon butter sauce and asparagus",
          price: 24.99
        }
      ]
    },
    {
      title: "Desserts",
      description: "Sweet endings to your space-themed dining experience",
      items: [
        {
          title: "Black Hole Brownie Sundae",
          description: "Warm chocolate brownie with vanilla ice cream and hot fudge",
          price: 8.99
        },
        {
          title: "Milky Way Cheesecake",
          description: "Creamy cheesecake swirled with caramel and chocolate",
          price: 7.99
        }
      ]
    }
  ]
};

export const AccessContext = createContext<{
  restaurantState: RestaurantState;
  setRestaurantState: React.Dispatch<React.SetStateAction<RestaurantState>>;
}>({
  restaurantState: defaultRestaurantState,
  setRestaurantState: () => {},
});

type Props = {
  children: ReactNode;
};

export const StateProvider: FC<Props> = ({ children }) => {
  const [restaurantState, setRestaurantState] = useState<RestaurantState>(defaultRestaurantState);

  const addNewSection = () => {
    setRestaurantState(prevState => ({
      ...prevState,
      menuSections: [
        ...prevState.menuSections,
        {
          title: `New Section ${prevState.menuSections.length + 1}`,
          description: "New section description", // Add a description
          items: []
        }
      ]
    }));
  };

  return (
    <AccessContext.Provider
      value={{
        restaurantState,
        setRestaurantState,
        addNewSection
      }}
    >
      {children}
    </AccessContext.Provider>
  );
};
