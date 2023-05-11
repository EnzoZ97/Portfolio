import './Profile.scss';

const Profile = () => {
    return (
        <section className="profile">
                <div className="image-box">
                    <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/09/13082637/All-About-Remote-Jobs-for-Programmers-and-Developers-1024x512.jpg"
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