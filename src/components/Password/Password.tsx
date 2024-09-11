import { useState } from 'react';
import { passwordData } from '../../data/passwordData';

const Password = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({
            currentPassword,
            newPassword,
            confirmPassword
        });
    };

    const handleCancel = () => {
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="sm:w-1/2 w-full mx-2 sm:mx-16 my-4" data-aos='slide-up'>
            <h2 className="text-2xl font-semibold mb-6">{passwordData.title}</h2>

            <form onSubmit={handlePasswordChange}>
                {/* Current Password */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        {passwordData.currentPasswordLabel}
                    </label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
                        required
                    />
                </div>

                {/* New Password */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        {passwordData.newPasswordLabel}
                    </label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
                        required
                    />
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        {passwordData.confirmPasswordLabel}
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
                        required
                    />
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none"
                    >
                        {passwordData.changeButtonText}
                    </button>

                    <button
                        type="button"
                        className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                        onClick={handleCancel}
                    >
                        {passwordData.cancelButtonText}
                    </button>
                </div>
            </form>

            {/* Forgot Password */}
            <div className="mt-6 text-right">
                <a href={passwordData.forgotPasswordLink} className="text-sm text-indigo-600 hover:underline">
                    {passwordData.forgotPasswordText}
                </a>
            </div>
        </div>
    );
};

export default Password;
