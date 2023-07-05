import ContactDeveloper from '../../images/contact-developer.svg'

const ContactImage = () => {
    return(
        <div className="w-full lg:w-1/2">
			<div className="leading-loose">
                <div className="text-left float-left mt-8 sm:mt-2">
                    <img width="380px" src={ContactDeveloper} alt="contact-programmer" />
                </div>
            </div>
        </div>
    );
};

export default ContactImage;