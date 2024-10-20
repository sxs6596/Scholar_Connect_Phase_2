import React, { useState, useEffect } from 'react';

const UserProfiles = () => {
  const [isEditing, setIsEditing] = useState(false); // Toggle editing state
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    bio: '',
    profilePicture: '',
    researchInterests: [],
    projectContributions: [],
    connections: [],
    academicHistory: [],
  });

  useEffect(() => {
    // Simulating an API call to fetch user profile data
    const fetchUserProfile = () => {
      return {
        name: 'Dr. Jane Doe',
        email: 'janedoe@example.com',
        bio: 'An expert in AI and data-driven research, Dr. Doe has contributed to numerous projects in academia and industry.',
        profilePicture: '../images/user.png',
        researchInterests: ['Artificial Intelligence', 'Machine Learning', 'Data Analytics'],
        projectContributions: [
          { title: 'AI-Powered Research Collaboration Platform', link: '/projects/ai-collaboration-platform' },
          { title: 'Data-Driven Crop Yield Optimization', link: '/projects/crop-yield-optimization' }
        ],
        connections: [
          { name: 'Dr. John Smith', link: '/profile/john-smith' },
          { name: 'Prof. Emma Johnson', link: '/profile/emma-johnson' }
        ],
        academicHistory: [
          { institution: 'MIT', degree: 'PhD in Computer Science', year: 2018 },
          { institution: 'Harvard University', degree: 'MSc in Data Science', year: 2014 }
        ]
      };
    };

    const profileData = fetchUserProfile();
    setUserData(profileData);
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Toggle editing state
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-400">User Profile</h2>

      {/* Profile Information */}
      <div className="mt-10 flex items-center bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50 mb-10">
        {/* <img 
          src={userData.profilePicture} 
          alt={`${userData.name}'s profile`} 
          className="w-32 h-32 rounded-full object-cover mr-6"
        /> */}
        <div>
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="input input-bordered bg-neutral-focus text-neutral-content w-full mb-2"
              />
              <textarea
                name="bio"
                value={userData.bio}
                onChange={handleInputChange}
                className="textarea textarea-bordered bg-neutral-focus text-neutral-content w-full"
              />
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-200">{userData.name}</h2>
              <p className="text-gray-400">{userData.bio}</p>
            </>
          )}
          <p className="text-gray-500 mt-2">Email: {userData.email}</p>
        </div>
        <button
          onClick={toggleEdit}
          className="ml-auto btn btn-sm bg-cyan-400 hover:bg-cyan-500 text-white"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      {/* Grid layout for the rest of the profile sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Research Interests Card */}
        <div className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50">
          <h3 className="text-2xl font-bold text-gray-200 mb-4">Research Interests</h3>
          {isEditing ? (
            <textarea
              name="researchInterests"
              value={userData.researchInterests.join(', ')}
              onChange={(e) => setUserData({
                ...userData,
                researchInterests: e.target.value.split(',').map(item => item.trim()),
              })}
              className="textarea textarea-bordered bg-neutral-focus text-neutral-content w-full"
            />
          ) : (
            <ul className="list-disc list-inside text-gray-400">
              {userData.researchInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Project Contributions Card */}
        <div className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50">
          <h3 className="text-2xl font-bold text-gray-200 mb-4">Project Contributions</h3>
          <ul className="text-gray-400">
            {userData.projectContributions.map((project, index) => (
              <li key={index}>
                <a href={project.link} className="text-cyan-400 hover:underline">{project.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connections Card */}
        <div className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50">
          <h3 className="text-2xl font-bold text-gray-200 mb-4">Connections</h3>
          <ul className="text-gray-400">
            {userData.connections.map((connection, index) => (
              <li key={index}>
                <a href={connection.link} className="text-cyan-400 hover:underline">{connection.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Academic History Card */}
        <div className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50">
          <h3 className="text-2xl font-bold text-gray-200 mb-4">Academic History</h3>
          <ul className="text-gray-400">
            {userData.academicHistory.map((history, index) => (
              <li key={index}>
                {history.degree} from {history.institution} ({history.year})
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default UserProfiles;
