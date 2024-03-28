const user = require('../models/userModel');
const mongoose = require('mongoose');


//create User
const createuser = (req, res) => {
  const userData = req.body;

  const newuser = new user(userData);

  newuser.save()
    .then(() => {
      res.json({ message: 'item saved successfully' });
    })
    .catch((err) => {
      console.error('Error saving data to the database:', err);
      res.status(500).json({ error: 'Error saving data to the database.' });
    });
};

//get User List
const getAllUsers = (req, res) => {
  
  user.find({})
    .then((users) => {
      // Send the data as a JSON response
      res.json(users);
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data from the database.' });
    });
};



//delete User by id
const deleteUserById = (req, res) => {
  const userId = req.params.id; 

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' }); 
  }

  user.findOneAndDelete({ _id: userId })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    })
    .catch((err) => {
      console.error('Error deleting User:', err);
      res.status(500).json({ error: 'Error deleting User' });
    });
};


//update user
const editUser = (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  user.findByIdAndUpdate(userId, updatedData, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'user not found' });
      }
      res.json(user);
    })
    .catch((err) => {
      console.error('Error updating user:', err);
      res.status(500).json({ error: 'Error updating user' });
    });
};


//get user by id

const getUserById = (req, res) => {
  const userId = req.params.id; 

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' }); 
  }

  user.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    })
    .catch((err) => {
      console.error('Error retrieving user:', err);
      res.status(500).json({ error: 'Error retrieving user' });
    });
};



module.exports = {
  createuser,
  getAllUsers,
  deleteUserById,
  editUser,
  getUserById
  
};



