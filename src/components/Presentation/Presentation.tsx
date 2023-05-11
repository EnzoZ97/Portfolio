import './Presentation.scss';

const Enzo_Roberto_Zalazar_CV = 'https://portfolio-enzo-zalazar.netlify.app/Enzo_Roberto_Zalazar_CV.pdf';

const Presentation = () => {
    function downloadCV (url : string) : void {
        const fileName : any = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return (
        <section className="presentation">
            <div className="presentation-image">
                <img src="./images/image_presentation.jpeg"
                    className="image"
                />
            </div>
            <div className="presentation-info">
                <p className="greeting">Hi, my name is</p>
                <h1 className="title">Enzo Zalazar</h1>
                <p className="description">I'm a front-end developer</p>
                <button className="download" onClick={() => downloadCV(Enzo_Roberto_Zalazar_CV)}>Download CV</button>
            </div>
        </section>
    )
}

export default Presentation;