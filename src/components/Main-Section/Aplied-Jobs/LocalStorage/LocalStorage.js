const GetStoredJobApplication = () => {

    const StoreJobApplication = localStorage.getItem('job-application');

    if (StoreJobApplication) {
        return JSON.parse(StoreJobApplication);
    }
    else {
        return []
    }

}

const SaveJobApplication = (id) => {
    const StoreJobApplication = GetStoredJobApplication();
    const Exists = StoreJobApplication.find(JobID => JobID === id);
    if (!Exists) {
        StoreJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(StoreJobApplication))
    }
}

export { SaveJobApplication, GetStoredJobApplication }