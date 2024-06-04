import React, { useState } from "react";
import "./Profile.scss";
import PageMenu from "../../components/pageMenu/PageMenu";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card"


const Profile = () => {
    const [profile, setProfile] = useState(initialState);
    const { isLoading, user } = useSelector(
        (state) => state.auth
    );

    const initialState = {
        name: user?.name || "",
        email: user?.name || "",
        phone: user?.name || "",
        role: user?.name || "",
        address: user?.name || {},
    }

    const saveProfile = async () => {};

    return (
        <>
        <section>
            <div className="container">
                <PageMenu/>
                <h2>Profile</h2>
                <div className="--flex-start profile">
                    <Card cardClass={"card"}>
                        {!isLoading && user && (
                            <>
                                <div className="profile-photo">
                                    <h2>Profile Image</h2>
                                </div>
                                <form onSubmit={saveProfile}></form>
                            </>
                        )}
                    </Card>
                </div>
            </div>
        </section>
        </>
    );
};

export default Profile;