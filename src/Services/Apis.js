const ENVIRONMENT = "DEV";

const Apis = {
    BASE_LOCAL_URL : ENVIRONMENT === "DEV" ? "http://localhost:8080" : '',
    BASE : ENVIRONMENT === "DEV" ? "http://localhost:8080" : '',
    LOGIN : "http://localhost:8080/User/logging",
    PATIENT : "http://localhost:8080/Patient",
}

export default Apis;