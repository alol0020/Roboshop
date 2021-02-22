import { Button, Typography } from "@material-ui/core";
import react from "react";
import { Switches } from "../Util/Switches";


export default class CookiesAlert extends react.Component {
    constructor(props) {
        super(props);
        if (Switches.clearCookieConsent) {
            localStorage.removeItem("CookieConsent");
        }
        this.state = { consent: localStorage.getItem("CookieConsent") == "ok" }

    }

    consent() {
        localStorage.setItem("CookieConsent", "ok");
        this.setState({ consent: true });
    }

    render() {
        if (this.state.consent) {
            return null;
        }
        else {
            return (
                <div className="CookiesAlert">
                    <Typography variant="subtitle1">Går du med på att vi sparar en kaka? <br />Kakan inheåller din varukorg så du kan handla många robotar över lång tid.</Typography>
                    <Button variant="contained" color="primary" onClick={() => this.consent()}>Ok</Button>
                </div>
            )
        }
    }
}
