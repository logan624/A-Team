import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const AddUniversity = () => {
    const [universityName, setUniversityName] = useState('');
    const [enrollmentCount, setEnrollmentCount] = useState('');
    const [universityCity, setCity] = useState('');
    const [universityState, setState] = useState('');
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});

    const saveUniversity = async () => {
        await axios.post('http://localhost:5000/universities', {
            name: universityName,
            enrollment_count: enrollmentCount,
            state: universityState,
            city: universityCity
        });
        navigate('/');
    }
    return (
        <main>
            <form onSubmit={handleSubmit(saveUniversity)} className={"col-md-6 mx-auto"}>
                <h1 className={"text-center"}>Add University</h1>
                <hr/>
                <label htmlFor={"universityName"}>University Name:</label>
                <input type={"text"} className={"form-control"} id={"universityName"} name={"universityName"}
                       {...register('universityName', {required: true})} placeholder={"Augustana University"}
                       value={universityName}
                       onChange={(e) => setUniversityName(e.target.value)} autoFocus
                />
                {errors.universityName?.type === 'required' && <small>The university name is required</small>}
                <label htmlFor={"enrollmentCount"}>University Enrollment Count:</label>
                <input type={"text"} className={"form-control"} id={"enrollmentCount"} name={"enrollmentCount"}
                       {...register('enrollmentCount', {required: true})} placeholder={"Ex: 1662"}
                       value={enrollmentCount} onChange={(e) => setEnrollmentCount(e.target.value)}
                />
                {errors.enrollmentCount?.type === 'required' && <small>The enrollment count is required</small>}
                <label htmlFor={"universityCity"}>City:</label>
                <input type={"text"} className={"form-control"} id={"universityCity"} name={"universityCity"}
                       {...register('universityCity', {required: true})} placeholder={"Ex: Sioux Falls"}
                       value={universityCity} onChange={(e) => setCity(e.target.value)}
                />
                {errors.universityCity?.type === 'required' && <small>The city is required</small>}
                <label htmlFor={"universityState"}>State:</label>
                <input type={"text"} className={"form-control"} id={"universityState"} name={"universityState"}
                       {...register('universityState', {required: true})} placeholder={"Ex: SD"}
                       value={universityState} onChange={(e) => setState(e.target.value)}
                />
                {errors.universityState?.type === 'required' && <small>The state is required</small>}
                <div className={"text-center"}>
                    <button className={"btn btn-secondary me-2"}>Add University</button>
                    <Link to={"/"} className={"btn btn-secondary"}>Cancel</Link>
                </div>
            </form>
        </main>
    )
}

export default AddUniversity;
