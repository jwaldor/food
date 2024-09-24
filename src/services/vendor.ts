export const VendorService = {
  signUp: async (email: string, password: string) => {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();
    return data.token;
  },
  createMenu: async () => {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/create-menu",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};
