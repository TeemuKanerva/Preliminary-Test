/**
 * Functionality for creating random participants and form validation 
 */
export const createRandomParticipant = () => { 
    const count = 20;
    const signUpContactTestList = [];
    for(let i = 0; i < count; i++) {

        let firstName = createRandomName();
        let lastName = createRandomName();

        signUpContactTestList.push({id: createRandomNumberSeries(10), name:  firstName + " " + lastName, email: firstName + "." + lastName + "@outlook.com", phonenumber: "+358" + createRandomNumberSeries(9)})
    }

    return signUpContactTestList;
}


const createRandomNumberSeries = (lengthOfSeries) => {
    const numbericals = "0123456789";

    let newId = "";
    for(let i = 0; i < lengthOfSeries; i++) {
        newId += numbericals.charAt(Math.floor(Math.random() * numbericals.length));;
    }
    return newId;
}

const createRandomName = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';

    const nameLength = 5;
    let newNameAttribute = "";
    for(let i = 0; i < nameLength; i++) {
        newNameAttribute += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    newNameAttribute =  newNameAttribute.charAt(0).toUpperCase() + newNameAttribute.slice(1);    
    return newNameAttribute;

}

export const validateNameField = (param) => {
    if(param.length < 1) {
        alert('Fullname cannot be empty.');
        return true;
    }
    return false;
}

export const validateEmailField = (param) => {
    if(param.length < 1) {
        alert('Email cannot be empty.');
        return true;
    }
    return false;
}

export const validatePhoneNumberField = (param) => {
    if(param.length < 1) {
        alert('Phonenumber cannot be empty.');
        return true;
    }
    return false;
}