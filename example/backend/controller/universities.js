import university from "../model/universitiesModel.js";

export const getAllUniversities = async (req, res) => {
    try {
        const universities = await university.findAll();
        res.json(universities);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getUniversityById = async (req, res) => {
    //An important note is that the naming universityToSend was chosen over
    //  university in this instance. This is because doing so would rewrite the imported
    //  module, and the message sent would not contain anything useful.
    try {
        const universityToSend = await university.findAll({
            where: {id: req.params.id}
        });
        res.json(universityToSend[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createUniversity = async (req, res) => {
    try {
        await university.create(req.body);
        res.json({message: "University Created"});
    } catch (error) {
        res.json({message: error.message});
    }
}

export const updateUniversity = async (req, res) => {
    try {
        await university.update(req.body, {
            where: {id: req.params.id}
        });
        res.json({message: "University Updated"});
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteUniversity = async (req, res) => {
    try {
        await university.destroy({
                where: {id: req.params.id}
            });
        res.json({message: "University Destroyed"});
    } catch (error) {
        res.json({message: error.message});

    }
}