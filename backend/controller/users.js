import User from "../model/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userToSend = await User.findAll({
      where: { username: req.params.username },
    });
    res.json(userToSend[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
 export const signup = async (req, res) => {
  try {
    await User.create(req.body);
    res.json({message: "User Created"});
} catch (error) {
    res.json({message: error.message});
}

 }

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // find the user in the database
    const user = await User.findOne({ where: { username } });
    if (!user) {
  
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // compare the password with the password in the database
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // password is correct, set session cookie
    req.session.user = user;
    res.json({ message: 'Logged in successfully' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  // destroy session cookie
  req.session.destroy();
  res.json({ message: 'Logged out successfully' });
};

export const getAuthenticatedUser = async (req, res) => {
  // get the user object from session cookie
  const user = req.session.user;
  if (!user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  res.json(user);
};

export const checkUsername = async (req, res) => {
  const { username } = req.body;
  const user = await User.findOne({ where: { username } }); // Use "where" object in findOne method

  if (user) {
    res.status(200).json({ exists: true });
  } else {
    res.status(200).json({ exists: false });
  }
};

export const deleteUser = async (req, res) => {
  try {
      await User.destroy({
              where: {username: req.params.username}
          });
      res.json({message: "user Destroyed"});
  } catch (error) {
      res.json({message: error.message});

  }
}

// Update account details
export const updateAccountDetails = async (req, res) => {
  const { username, firstName, lastName, password, birthDate, email, city, state, phoneNum, streetAddress } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await User.update({
      password,
      firstName,
      lastName,
      birthDate,
      email,
      city,
      state,
      phoneNum,
      streetAddress
    }, {
      where: { username }
    });

    res.json({ message: 'Account details updated successfully' });
  } catch (error) {
    res.json({ message: error.message });
  }
};