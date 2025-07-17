import Header from "@/components/header/header";
import Information from "@/components/profile/information";

const ProfilePage = () => {
    return (
        <div>
            <Header />
            <div>
                <h1>Profile</h1>
                <Information />
            </div>
        </div>
    );
}

export default ProfilePage;