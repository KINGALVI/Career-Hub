import SocialMedia from "../../../public/assets/icons/social.png"

const Footer = () => {

    return (
        <>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <nav>
                    <h3 className="text-4xl">Career Hub</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Praesentium nemo distinctio accusantium eos inventore voluptatem mollitia <br /> soluta? Culpa eum praesentium repudiandae, exercitationem, esse <br />ipsum soluta non corrupti excepturi, quod magnam.
                    </p>
                    <img src={SocialMedia} alt="" />
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </>
    );

};

export default Footer;