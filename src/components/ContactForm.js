const ContactForm = () => {
    return (
        <div className="contactBox">
            <div className="contactBox_upBox">
                <div className="contactBox_upBox__name">
                    <label className="upBox_label">
                        Wpisz swoje imię
                    </label>
                    <input
                        className="upBox_input"
                        placeholder="Imię"
                    />
                </div>
                <div className="contactBox_upBox__email">
                    <label className="upBox_label">
                        Wpisz swojego maila
                    </label>
                    <input
                        className="upBox_input"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div className="contactBox_downBox">
                <label className="downBox_label">
                    Wpisz swoją wiadomość
                </label>
                <textarea
                    className="downBox_textarea"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </div>
            <div className="contactBox_button">
                Wyślij
            </div>
        </div>
    );
};

export default ContactForm;