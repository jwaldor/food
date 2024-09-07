import express from "express";
import { UserService } from "../../services/User/service";

const router = express.Router();

router.get('/users/all', async (req, res) => {
  try {
    const users = await UserService().getAllUsers();
    res.json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
})

router.get('/users/current', async (req, res) => {
  const user = req.user
  res.json(user)
})

router.get('/users/:userId', async (req, res) => {
  try {
    const user = await UserService().getUserById(req.params.userId);
    res.json(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



router.post('/users/new', async (req, res) => {
  try {
    const user = await UserService().createUser(req.body);
    res.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/users/:userId", async (req, res) => {
  const userId = req.params.userId;
  const updatedUser = req.body;
  try {
    const user = await UserService().updateUser(updatedUser);
    res.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/users/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await UserService().deleteUser(userId);
    res.json(user);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



export default router;
