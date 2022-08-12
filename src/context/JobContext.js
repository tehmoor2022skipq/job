import { createContext, useContext } from "react";

const JobContext = createContext();

export default JobContext;
export const useContextApi = () => useContext(JobContext);