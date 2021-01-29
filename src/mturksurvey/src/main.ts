import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944",
  clientId: "1003719887944-rlc06cjecqrp9fgvmvo56vqop1otm9ht.apps.googleusercontent.com"
};

firebase.initializeApp(firebaseConfig);

const functions = firebase.functions();
const auth = firebase.auth();
const submitAssignment = functions.httpsCallable('submitAssignment');
const submitSurvey = functions.httpsCallable('submitSurvey');
const countriesList = [
  "Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla",
  "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba",
  "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas",
  "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
  "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi",
  "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic",
  "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands",
  "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the",
  "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czeck Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island",
  "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France",
  "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon",
  "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar",
  "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala",
  "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands",
  "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland",
  "India", "Indonesia", "Iran", "Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy",
  "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan",
  "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of",
  "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico",
  "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia",
  "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands",
  "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria",
  "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau",
  "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland",
  "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
  "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan",
  "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
  "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay",
  "USA", "Uzbekistan", "Vatican City", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales",
  "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
];

let mturkUserConfig: any = {};
mturkUserConfig.survey = {};
console.log('location:', window.location.search);
if (window.location.search) {
  try {
    let mturkCfgPairStr = window.location.search.split('?')[1].split('&');
    mturkCfgPairStr.forEach(str => {
      let pair = str.split('=');
      if (pair[0] == 'AID') { // AID: assignmentId
        mturkUserConfig.aid = pair[1];
      } else if (pair[0] == 'HID') { // HID: hitId
        mturkUserConfig.hid = pair[1];
      } else if (pair[0] == 'WID') { // WID: workerId
        mturkUserConfig.wid = pair[1];
      } else if (pair[0] == 'TASK') { // TASK: name of task in params_storage
        mturkUserConfig.task = pair[1];
      }
    });
  } catch (e) {
    console.error('Error Parsing User Config:', e);
  }
}
console.log(mturkUserConfig);

const surveyForm = document.querySelector('#survey-form') as HTMLFormElement;
surveyForm.addEventListener('submit', async (evt: Event) => {
  // prevent submit form on ENTER/RETURN
  evt.preventDefault();
  // 1. Check that all required elements are populated
  
  // console.log(document.querySelectorAll('input[name=difficulty]:checked')[0].value);
  let difficultyChecked = document.querySelectorAll('input[name=difficulty]:checked').length;
  let engagingChecked = document.querySelectorAll('input[name=engaging]:checked').length;
  const requiredElems = (
    document.querySelectorAll('.required') as NodeListOf<HTMLInputElement | HTMLSelectElement>
  );
  try {
    if (!difficultyChecked) {
      throw new TypeError(`DIFFICULTY level is not checked`);
    }

    if (!engagingChecked) {
      throw new TypeError(`ENGAGING level is not checked`);
    }
    requiredElems.forEach((requiredEl: HTMLInputElement | HTMLSelectElement) => {
      if (!requiredEl.value) {
        throw new TypeError(`value of ${requiredEl.id} is undefined`);
      } else {
        if (requiredEl.id == 'age') {
          mturkUserConfig.survey[requiredEl.id] = parseInt(requiredEl.value);
        } else {
          mturkUserConfig.survey[requiredEl.id] = requiredEl.value;
        }
      }
    });

    let engagingLevel = (
      document.querySelector('input[name=difficulty]:checked') as HTMLInputElement
    );
    let difficultyLevel = (
      document.querySelector('input[name=difficulty]:checked') as HTMLInputElement
    );

    mturkUserConfig.survey['engagingLevel'] = parseInt(engagingLevel.value);
    mturkUserConfig.survey['difficultyLevel'] = parseInt(difficultyLevel.value);
    console.log('all values look good:', mturkUserConfig);

    let response = await submitSurvey(mturkUserConfig);
    if (response.data.status === 200) {
      alert(`Your submit code is: ${response.data.message}`);
    } else {
      alert(`There was an error: ${response.data.message}`);
    }

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
  
});

const submitBtn = document.querySelector('#submit-btn') as HTMLInputElement;
submitBtn.addEventListener('pointerup', (evt: Event) => {
  surveyForm.dispatchEvent(new Event('submit'));
});

const countriesListEls = (
  document.querySelectorAll('.countries-list') as NodeListOf<HTMLSelectElement>
);

countriesList.forEach((country: string) => {
  let option = document.createElement('option');
  option.textContent = country;
  option.value = country.toLocaleLowerCase();

  countriesListEls.forEach((el: HTMLSelectElement) => {
    el.appendChild(option.cloneNode(true));
  });
});

const assignmentBtn = document.querySelector('#assignment-btn') as HTMLButtonElement;
assignmentBtn.addEventListener('pointerup', async (evt: Event) => {
  let response = await submitAssignment(mturkUserConfig);
  console.log(response);
});


