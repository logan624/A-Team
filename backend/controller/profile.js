import Profile from "../model/profileModel.js";

export const getDescription = async (req, res) =>{
  try{
    const username = req.params.username;

    if (!username) {
      res.status(400).json({message: "Missing username parameter"});
      return;
    }

    const profile = await Profile.findOne({
      where: {
        username: username
      }
    });

    if (profile) {
        res.status(200).json(profile);
        return;
      } else {
        const newProfile = await Profile.create({
          description: '',
          username: username,
        });
        res.status(200).json(newProfile);
        return;
      }
  } catch (err) {
    console.error(err);
    res.status(500).json({message: "Internal server error"});
    return;
  }
};

export const updateProfileDescription = async (req, res) => {
    const { username } = req.params;
    const { description } = req.body;
  
    try {
      // Check if the profile exists
      let profile = await Profile.findOne({ where: { username } });
  
      // If the profile doesn't exist, create a new one
      if (!profile) {
        profile = await Profile.create({ username, description });
      } else {
        // If the profile already exists, update the description
        profile.description = description;
        await profile.save();
      }
  
      res.status(200).json({ message: "Profile description updated", profile });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };