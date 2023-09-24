import { createContext, useContext, ReactNode, useState } from "react";

type Profile = {
  twitterProfile: string;
  instagramProfile: string;
  linkedinProfile: string;
  githubProfile: string;
  codeforcesProfile: string;
  coolMessage: string;
};

type ProfileContextType = {
  profiles: Profile | undefined;
  addProfile: (profile: Profile) => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profiles, setProfiles] = useState<Profile>();

  const addProfile = (profile: Profile) => {
    console.log(profile);
    setProfiles(profile);
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfileContext() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
}
