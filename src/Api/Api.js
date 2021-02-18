import { AllProducts } from "../Mock/MockApi";
import { Switches } from "../Util/Switches";

export async function getAllProducts() {

    if (Switches.mockApi) {
        return new Promise((resolve, reject) => {
            if (Switches.apiNoResponse) {
                setTimeout(() => resolve(null), 3000);
            }
            else {
                setTimeout(() => resolve(AllProducts), Switches.testSlowAPI ? 3000 : 200);
            }
        })
    }
    else {
        //Todo:Wait for backend to be set up.
    }

}