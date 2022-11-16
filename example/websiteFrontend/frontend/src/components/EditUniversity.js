import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

const EditUniversity = () => {
    const [universityName, setUniversityName] = useState('');
    const [enrollmentCount, setEnrollmentCount] = useState('');
    const [universityCity, setCity] = useState('');
    const [universityState, setState] = useState('');
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});
    const {id} = useParams();

    const updateUniversity = async () => {
        await axios.patch(`http://localhost:5000/universities/${id}`, {
            name: universityName,
            enrollment_count: enrollmentCount,
            city: universityCity,
            state: universityState
        });
        navigate("/");
    }

    const getUniversityById = async () => {
        const response = await axios.get(`http://localhost:5000/universities/${id}`);
        console.log(JSON.stringify(response));
        setUniversityName(response.data.name);
        setEnrollmentCount(response.data.enrollment_count);
        setCity(response.data.city);
        setState(response.data.state);
    }
    useEffect(() => {
        getUniversityById().then(m => console.log("University successfully retrieved"));
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, []);
    return (
        <main>
            <form onSubmit={handleSubmit(updateUniversity)} className={"col-md-6 mx-auto"}>
                <h1 className={"text-center"}>Edit University</h1>
                <hr/>
                <label htmlFor={"universityName"}>University Name:</label>
                <input type={"text"} className={"form-control"} id={"universityName"} name={"universityName"}
                       {...register('universityName', {required: true})} placeholder={"Augustana University"}
                       value={universityName} onChange={(e) => setUniversityName(e.target.value)} autoFocus
                />
                {errors.universityName?.type === 'required' && <small>The university name is required</small>}
                <label htmlFor={"enrollmentCount"}>University Enrollment Count:</label>
                <input type={"text"} className={"form-control"} id={"enrollmentCount"} name={"enrollmentCount"}
                       {...register('enrollmentCount', {required: true})} placeholder={"1662"}
                       value={enrollmentCount} onChange={(e) => setEnrollmentCount(e.target.value)}
                />
                {errors.enrollmentCount?.type === 'required' && <small>The enrollment count is required</small>}
                <label htmlFor={"universityCity"}>City:</label>
                <input type={"text"} className={"form-control"} id={"universityCity"} name={"universityCity"}
                       {...register('universityCity', {required: true})} placeholder={"Sioux Falls"}
                       value={universityCity} onChange={(e) => setCity(e.target.value)}
                />
                {errors.universityCity?.type === 'required' && <small>The city is required</small>}
                <label htmlFor={"universityState"}>State:</label>
                <input type={"text"} className={"form-control"} id={"universityState"} name={"universityState"}
                       {...register('universityState', {required: true})} placeholder={"SD"}
                       value={universityState} onChange={(e) => setState(e.target.value)}
                />
                {errors.universityState?.type === 'required' && <small>The state is required</small>}
                <div className={"text-center"}>
                    <button className={"btn btn-secondary me-2"}>Update University</button>
                    <Link to={"/"} className={"btn btn-secondary"}>Cancel</Link>
                </div>
            </form>
        </main>
    )
}

export default EditUniversity;
