import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import runtime from "serviceworker-webpack-plugin/lib/runtime";
import App from "./routes/App";
import reducer from "./reducers";

if ("serviceWorker" in navigator) {
  runtime.register();
}

const initialState = {
  user: {},
  titles: [
    {
      name: "Panel del Administrador",
      titlePatient: "Panel del Paciente",
    },
    {
      name: "Panel del Administrador",
      titlePatient: "Panel del Paciente",
    },
  ],
  users: [
    {
      id: "97588236-ft73-1234-c4n5-ebdd2689h4j7",
      idNumber: 5252,
      firstName: "Fernando",
      lastName: "Torres",
      username: "fernando.torres.5252",
      email: "fertorresmx@gmail.com",
      contactNumber: "55 1234 5678",
      address: "Toledo 21, Juárez, CDMX",
      medicalRecord: "03254d70-723b-4bed-8adb-477dffe8f092",
      isDeleted: false,
      roleId: "d436e99b-afea-44cf-a31c-ff35b7740c67",
      createdAt: "2020-01-16 13:05:18",
      updatedAt: "2020-02-17 19:16:39",
    },
    {
      id: "832b0c00-7b1e-4a4d-8c0d-39bdfb40f05c",
      idNumber: 3469,
      firstName: "Hayden",
      lastName: "Haseman",
      username: "hayden.haseman.3469",
      email: "hhaseman1@apple.com",
      contactNumber: "552-913-5574",
      address: "5761 Melvin Drive",
      medicalRecord: "088b8665-d176-4021-9416-ac787339c568",
      isDeleted: false,
      createdAt: "2020-02-03 08:45:34",
      updatedAt: "2019-12-31 18:44:32",
    },
    {
      id: "795b5699-7ca9-4344-8fe5-4a4f501678a9",
      idNumber: 5582,
      firstName: "Basile",
      lastName: "Matteini",
      username: "basile.matteini.5582",
      email: "bmatteini2@squarespace.com",
      contactNumber: "978-756-5028",
      address: "939 7th Place",
      medicalRecord: "56021793-eed0-44c1-b2ab-72b245f1bb17",
      isDeleted: true,
      createdAt: "2019-10-10 02:05:12",
      updatedAt: "2020-02-03 00:16:37",
    },
    {
      id: "1cffa615-e1d8-4113-b585-60603f0854fb",
      idNumber: 3123,
      firstName: "Hersh",
      lastName: "Oloman",
      username: "hersh.oloman.3123",
      email: "holoman3@themeforest.net",
      contactNumber: "746-918-2444",
      address: "05898 Southridge Alley",
      medicalRecord: "5823cf51-b27c-4cec-a0ac-c42b249ddc7c",
      isDeleted: false,
      createdAt: "2019-10-18 22:22:15",
      updatedAt: "2019-10-27 06:28:39",
    },
    {
      id: "0a96b420-ba2b-4741-b290-c916d92abdc0",
      idNumber: 1011,
      firstName: "Ursula",
      lastName: "Cowen",
      username: "ursula.cowen.1011",
      email: "ucowen4@oakley.com",
      contactNumber: "376-721-4543",
      address: "1 Amoth Place",
      medicalRecord: "bb881424-e27e-4c27-be49-843b7febd7e7",
      isDeleted: true,
      createdAt: "2019-05-23 01:10:13",
      updatedAt: "2019-11-11 16:03:54",
    },
    {
      id: "b9df98a3-f23d-4711-b710-59efe5387921",
      idNumber: 7897,
      firstName: "Norry",
      lastName: "Vockins",
      username: "norry.vockins.7897",
      email: "nvockins5@github.io",
      contactNumber: "148-183-3666",
      address: "084 Hoard Terrace",
      medicalRecord: "635fb5b6-1eae-4c51-9b84-971b238d75fe",
      isDeleted: false,
      createdAt: "2020-02-02 06:11:16",
      updatedAt: "2019-08-20 00:41:38",
    },
    {
      id: "ec8b28a6-d23b-42c3-a7bd-c9921c55d6cc",
      idNumber: 5839,
      firstName: "Hort",
      lastName: "Mantram",
      username: "hort.mantram.5839",
      email: "hmantram6@state.gov",
      contactNumber: "273-256-7690",
      address: "8791 Twin Pines Avenue",
      medicalRecord: "a7dd94eb-f2e6-411f-baa7-60761c03ccb3",
      isDeleted: true,
      createdAt: "2019-10-12 12:44:17",
      updatedAt: "2020-04-14 12:24:05",
    },
    {
      id: "9d7f71ff-49fe-4819-859c-727ce7f44be3",
      idNumber: 6214,
      firstName: "Christie",
      lastName: "Baelde",
      username: "christie.baelde.6214",
      email: "cbaelde7@icio.us",
      contactNumber: "715-754-7698",
      address: "246 Delaware Avenue",
      medicalRecord: "672f2993-4366-4b16-9aec-f12830494d33",
      isDeleted: false,
      createdAt: "2019-12-08 08:22:59",
      updatedAt: "2020-05-12 06:13:23",
    },
    {
      id: "c0f557a2-da71-4974-930f-17e52935bc7a",
      idNumber: 1325,
      firstName: "Byram",
      lastName: "Doblin",
      username: "byram.doblin.1325",
      email: "bdoblin8@storify.com",
      contactNumber: "148-633-0195",
      address: "44 Kinsman Alley",
      medicalRecord: "527d5cc2-0eb0-484d-9756-90a99feb650d",
      isDeleted: true,
      createdAt: "2020-01-02 01:26:33",
      updatedAt: "2020-02-27 09:26:02",
    },
    {
      id: "5a12fd8d-24f5-4327-a40a-3b1ff02c8d55",
      idNumber: 1382,
      firstName: "Dniren",
      lastName: "Pidwell",
      username: "dniren.pidwell.1382",
      email: "dpidwell9@hexun.com",
      contactNumber: "311-548-0007",
      address: "39 Meadow Ridge Alley",
      medicalRecord: "da16d247-a252-4abc-9692-82167f84c9e2",
      isDeleted: false,
      createdAt: "2019-09-16 09:43:44",
      updatedAt: "2019-06-21 00:51:37",
    },
  ],
  users_auth: [
    {
      id: "018a5472-bf8e-4889-a3a2-ebdd4722d6b2",
      idNumber: 1767,
      username: "leodora.crouch.1767",
      password: "$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G",
      role_id: "rolesEnum.ADMINISTRATOR.id",
      isDeleted: false,
      createdAt: "2020-01-22 14:00:18",
      updatedAt: "2020-02-27 20:11:39",
    },
    {
      id: "832b0c00-7b1e-4a4d-8c0d-39bdfb40f05c",
      idNumber: 3469,
      username: "hayden.haseman.3469",
      password: "$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G",
      role_id: "rolesEnum.MEDIC.id",
      isDeleted: false,
      createdAt: "2020-02-03 08:45:34",
      updatedAt: "2019-12-31 18:44:32",
    },
    {
      id: "795b5699-7ca9-4344-8fe5-4a4f501678a9",
      idNumber: 5582,
      username: "basile.matteini.5582",
      password: "$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G",
      role_id: "rolesEnum.BACTERIOLOGIST.id",
      isDeleted: true,
      createdAt: "2019-10-10 02:05:12",
      updatedAt: "2020-02-03 00:16:37",
    },
    {
      id: "1cffa615-e1d8-4113-b585-60603f0854fb",
      idNumber: 3123,
      username: "hersh.oloman.3123",
      password: "$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G",
      role_id: "rolesEnum.PACIENT.id",
      isDeleted: false,
      createdAt: "2019-10-18 22:22:15",
      updatedAt: "2019-10-27 06:28:39",
    },
    {
      id: "0a96b420-ba2b-4741-b290-c916d92abdc0",
      idNumber: 1011,
      username: "ursula.cowen.1011",
      password: "$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G",
      role_id: "rolesEnum.ADMINISTRATOR.id",
      isDeleted: true,
      createdAt: "2019-05-23 01:10:13",
      updatedAt: "2019-11-11 16:03:54",
    },
    {
      id: "b9df98a3-f23d-4711-b710-59efe5387921",
      idNumber: 7897,
      username: "norry.vockins.7897",
      password: "$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G",
      role_id: "rolesEnum.MEDIC.id",
      isDeleted: false,
      createdAt: "2020-02-02 06:11:16",
      updatedAt: "2019-08-20 00:41:38",
    },
    {
      id: "ec8b28a6-d23b-42c3-a7bd-c9921c55d6cc",
      idNumber: 5839,
      username: "hort.mantram.5839",
      password: "$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G",
      role_id: "rolesEnum.BACTERIOLOGIST.id",
      isDeleted: true,
      createdAt: "2019-10-12 12:44:17",
      updatedAt: "2020-04-14 12:24:05",
    },
    {
      id: "9d7f71ff-49fe-4819-859c-727ce7f44be3",
      idNumber: 6214,
      username: "christie.baelde.6214",
      password: "$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G",
      role_id: "rolesEnum.PACIENT.id",
      isDeleted: false,
      createdAt: "2019-12-08 08:22:59",
      updatedAt: "2020-05-12 06:13:23",
    },
    {
      id: "c0f557a2-da71-4974-930f-17e52935bc7a",
      idNumber: 1325,
      username: "byram.doblin.1325",
      password: "$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G",
      role_id: "rolesEnum.PACIENT.id",
      isDeleted: true,
      createdAt: "2020-01-02 01:26:33",
      updatedAt: "2020-02-27 09:26:02",
    },
    {
      id: "5a12fd8d-24f5-4327-a40a-3b1ff02c8d55",
      idNumber: 1382,
      username: "dniren.pidwell.1382",
      password: "$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G",
      role_id: "rolesEnum.PACIENT.id",
      isDeleted: false,
      createdAt: "2019-09-16 09:43:44",
      updatedAt: "2019-06-21 00:51:37",
    },
  ],
  roles: [
    {
      ADMINISTRATOR: {
        id: "d436e99b-afea-44cf-a31c-ff35b7740c67",
        name: "administrator",
        description: "An administrator Role",
        isDeleted: false,
        createdAt: "2020-05-15 00:00:00",
        updatedAt: "2020-05-15 00:00:00",
      },
      MEDIC: {
        id: "a81bd60a-b09e-4936-b74a-22b823e39464",
        name: "medic",
        description: "A medic Role",
        isDeleted: false,
        createdAt: "2020-05-15 00:00:00",
        updatedAt: "2020-05-15 00:00:00",
      },
      BACTERIOLOGIST: {
        id: "bf90b55d-0e69-4f31-8211-514049a42625",
        name: "bacteriologist",
        description: "A bacteriologist Role",
        isDeleted: false,
        createdAt: "2020-05-15 00:00:00",
        updatedAt: "2020-05-15 00:00:00",
      },
      PACIENT: {
        id: "9511dfc8-e17e-4c8e-927e-cb933f9b77f6",
        name: "pacient",
        description: "A pacient Role",
        isDeleted: false,
        createdAt: "2020-05-15 00:00:00",
        updatedAt: "2020-05-15 00:00:00",
      },
    },
  ],
  exams: [
    {
      id: 1,
      userId: "018a5472-bf8e-4889-a3a2-ebdd4722d6b2",
      examDate: "2020-02-14",
      examName: "Exámen de Orina",
      examDescription: "Lorem Ipsum",
      examStatus: "Referenciado",
    },
    {
      id: 2,
      userId: "018a5472-bf8e-4889-a3a2-ebdd4722d6b2",
      examDate: "2020-02-14",
      examName: "Exámen de Sangre",
      examDescription: "Lorem Ipsum",
      examStatus: "Pendiente",
    },
    {
      id: 3,
      userId: "018a5472-bf8e-4889-a3a2-ebdd4722d6b2",
      examDate: "2020-02-10",
      examName: "Exámen de Glucosa",
      examDescription: "Lorem Ipsum",
      examStatus: "Con Resultados",
    },
    {
      id: 4,
      userId: "018a5472-bf8e-4889-a3a2-ebdd4722d6b2",
      examDate: "2020-01-01",
      examName: "Exámen de Colesterol",
      examDescription: "Lorem Ipsum",
      examStatus: "Referenciado",
    },
    {
      id: 5,
      userId: "018a5472-bf8e-4889-a3a2-ebdd4722d6b2",
      examDate: "2020-02-21",
      examName: "Exámen Glóbulos blancos",
      examDescription: "Lorem Ipsum",
      examStatus: "Pendiente",
    },
    {
      id: 6,
      userId: "018a5472-bf8e-4889-a3a2-ebdd4722d6b2",
      examDate: "2020-02-14",
      examName: "Exámen de Sangre",
      examDescription: "Lorem Ipsum",
      examStatus: "Referenciado",
    },
    {
      id: 7,
      userId: "018a5472-bf8e-4889-a3a2-ebdd4722d6b2",
      examDate: "2020-01-18",
      examName: "Exámen de Plaquetas",
      examDescription: "Lorem Ipsum",
      examStatus: "Con Resultados",
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

ReactDOM.render(<App />, container);
