import React, { useState } from "react";
import JobContext from "./jobContext";


const JobState = (props) => {
    const [job, setJob] = useState([])
    return (
        <JobContext.Provider value={{ job, setJob }}>
            {props.childern}
        </JobContext.Provider>
    )
}

export default JobState;