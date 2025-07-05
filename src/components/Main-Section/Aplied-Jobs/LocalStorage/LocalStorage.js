// 📦 GetStoredJobApplication()
// This function retrieves the list of job IDs stored in localStorage.
// If nothing is found, it returns an empty array to prevent errors.
const GetStoredJobApplication = () => {

    // 🔍 Attempt to get the 'job-application' data from localStorage
    const StoreJobApplication = localStorage.getItem('job-application');

    // ✅ If data exists, parse and return it
    if (StoreJobApplication) {
        return JSON.parse(StoreJobApplication);
    } else {
        // ❌ If no data exists, return an empty array (safe fallback)
        return [];
    }

};

// 💾 SaveJobApplication()
// This function adds a new job ID to localStorage (if it’s not already there).
const SaveJobApplication = (id) => {

    // 🔁 Retrieve existing list of saved job IDs
    const StoreJobApplication = GetStoredJobApplication();

    // 🔍 Check if this job ID already exists in the list
    const Exists = StoreJobApplication.find(JobID => JobID === id);

    // 🆕 If it doesn't exist, add it and update localStorage
    if (!Exists) {
        StoreJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(StoreJobApplication));
    }

};

// 🚀 Export both functions so they can be used in other components
export { SaveJobApplication, GetStoredJobApplication };