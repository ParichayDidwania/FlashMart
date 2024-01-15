import "./Privacy.css";

function Privacy({ className }) {
    return(
        <main className={`privacy-main ${className}`} id="/privacy#main">
            <h2 className="privacy-main__heading">Privacy Policy</h2>
            <p className="privacy-main__paragraph">We realize the fact that you care about your personal information. This privacy policy describes how we will collect and make use of certain information and personal data related to you. If you do not agree to them, please do not use our platform.</p>
            <h3 className="privacy-main__subheading">Information Collection</h3>
            <p className="privacy-main__paragraph">We may track your behaviour of searching and buying products. This will help us to recommend more personalized products just for you so that you find products catering to your needs more quickly. This information will include the products that you boought and your IP address.</p>
        </main>
    );
}

export default Privacy;