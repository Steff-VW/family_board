import Header from "@/components/header/header";
import Information from "@/components/profile/information";
import styles from "@/styles/components/profile/profile.module.css";

const ProfilePage = () => {
    return (
        <div>
            <Header />
            <div className= {styles.profileContainer}>
                <h1 >Profile</h1>
                <Information />
            </div>
        </div>
    );
}

export default ProfilePage;