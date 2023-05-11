import './Profile.scss';

const Profile = () => {
    return (
        <section className="profile">
                <div className="image-box">
                    <img src="./images/write_my_life.png"
                        className="image" />
                </div>
                <div className="About">
                    <h1 className="A-title">About me</h1>
                    <p className="A-text">Hello, my name is Enzo and I enjoy creating things for web, I'm student of systems at university 
                        UNGS and I'm front end developer, but my main focus is continue learning more about front-end and 
                        later focus in back-end.</p>
                </div>
        </section>
    )
}

export default Profile;