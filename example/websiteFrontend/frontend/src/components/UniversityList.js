import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const UniversityList = () => {
    const [universities, setUniversities] = useState([]);
    const getUniversities = async () => {
        const response = await axios.get(`http://localhost:5000/universities`);
        setUniversities(response.data);
    }
    const deleteUniversity = async (id) => {
        await axios.delete(`http://localhost:5000/universities/${id}`);
        await getUniversities();
    }
    useEffect(() => {
        getUniversities().then(m => console.log("Successfully retrieved the universities!"));
    }, []);
    return (
        <main>
            <table className={"table table-hover table-striped"} aria-label={"Universities table"}>
                <caption><h1>University List</h1></caption>
                <thead>
                <tr>
                    <th scope={"col"}>Name</th>
                    <th scope={"col"}>Enrollment Count</th>
                    <th scope={"col"}>City</th>
                    <th scope={"col"}>State</th>
                    <th scope={"col"}>Update</th>
                    <th scope={"col"}>Delete</th>
                </tr>
                </thead>
                <tbody>
                {universities.map((university) => (
                    <tr key={university.id}>
                        <td>{university.name}</td>
                        <td>{university.enrollment_count}</td>
                        <td>{university.state}</td>
                        <td>{university.city}</td>
                        <td>
                            <Link to={`/edit/${university.id}`} className={"btn btn-secondary"}
                                aria-label={`Edit ${university.name}`}>Edit</Link>
                        </td>
                        <td>
                            <button onClick={() => deleteUniversity(university.id)} className={"btn btn-secondary"}
                                    aria-label={`Delete ${university.name}`}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={"text-center"}>
                <Link to={'/add'} className={"btn btn-secondary"}>Add University</Link>
            </div>
        </main>
    )
}

export default UniversityList;
