// const Chance = require('chance');
// const chance = new Chance();
// const randomString = chance.string({ length: 7, pool: 'abcdefghijklmnopqrstuvwsz' });
// const randomInt = chance.integer({ min: -1000, max: 1000 });
// const positiveRandomInt = chance.integer({ min: 0, max: 1000 });
// const specialCharacter = chance.character({ symbols: true });
// const dummyEmail = chance.email();
// const dummyFirstName = chance.first();
// const dummyFriendlyName = chance.name();
// const dummyLastName = chance.first();
// const dummyText = chance.sentence();
// const dummyPhone = chance.phone({ formatted: false });
// const dummyLocation = chance.address();

class Credentials {
  get username () { return ('aqa@payever.org'); }
  get password () { return ('Aqacool123!'); }
  // get wrongEmail () { return ('test@test.com'); }
  // get wrongPassword () { return ('1234'); }
  // get noEmail () { return (''); }
  // get noPassword () { return (''); }
  // get noCompanyName () { return (''); }
  // get noConfirmationPassword () { return (''); }
  // get companyName () { return ('ContactWise' + positiveRandomInt + '' + 'Test' + randomString); }
  // get companyEmail () { return ('test' + randomString + randomInt + '@test.com'); }
  // get companyPasswordIncorrect () { return (randomString + randomInt + specialCharacter); }
  // get companyPasswordCorrect () { return ('ABC' + randomString + randomInt + specialCharacter); }
  // get dummyEmail () { return (dummyEmail); }
  // get dummyName () { return (dummyFirstName); }
  // get dummyFriendlyName () { return (dummyFriendlyName); }
  // get dummyLastName () { return (dummyLastName); }
  // get dummyText () { return (dummyText); }
  // get dummyPhone () { return (dummyPhone); }
  // get dummyLocation () { return (dummyLocation); }
}

export default new Credentials();
