import { useState } from 'react';
import { profileData } from '../../data/profileData';

const Profile = () => {
    // Profile data
    const [profile, setProfile] = useState(profileData.defaultProfile);

    // Edit mode state
    const [isEditing, setIsEditing] = useState(false);

    // Backup state for cancel action
    const [backupProfile, setBackupProfile] = useState(profile);

    // Handle form changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile((prevProfile:any) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    // Enable editing
    const enableEditing = () => {
        setBackupProfile(profile); // Backup current state
        setIsEditing(true);
    };

    // Handle save action
    const handleSave = () => {
        console.log("Updated Profile: ", profile);
        setIsEditing(false);
    };

    // Handle cancel action
    const handleCancel = () => {
        setProfile(backupProfile); // Revert to original state
        setIsEditing(false);
    };

    return (
        <div className='sm:w-1/2 w-full mx-2 sm:mx-16 my-4' data-aos='slide-up'>
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <div className="space-y-4">

                {/* Name Field */}
                <div>
                    <label className="block font-medium text-gray-700">{profileData.labels.name}</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        readOnly={!isEditing}
                        className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm ${isEditing ? 'bg-white' : 'bg-gray-100'
                            }`}
                    />
                </div>

                {/* Gender Field */}
                <div>
                    <label className="block font-medium text-gray-700">{profileData.labels.gender}</label>
                    <div className="mt-1 flex items-center space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={profile.gender === "male"}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mr-2"
                            />
                            {profileData.genders.male}
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={profile.gender === "female"}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mr-2"
                            />
                            {profileData.genders.female}
                        </label>
                    </div>
                </div>

                {/* Mobile Field */}
                <div>
                    <label className="block font-medium text-gray-700">{profileData.labels.mobile}</label>
                    <input
                        type="text"
                        name="mobile"
                        value={profile.mobile}
                        onChange={handleChange}
                        readOnly={!isEditing}
                        className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm ${isEditing ? 'bg-white' : 'bg-gray-100'
                            }`}
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label className="block font-medium text-gray-700">{profileData.labels.email}</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        readOnly={!isEditing}
                        className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm ${isEditing ? 'bg-white' : 'bg-gray-100'
                            }`}
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6">
                {!isEditing ? (
                    <button
                        onClick={enableEditing}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        {profileData.buttons.edit}
                    </button>
                ) : (
                    <div className="space-x-4">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                            {profileData.buttons.save}
                        </button>
                        <button
                            onClick={handleCancel}
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            {profileData.buttons.cancel}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
