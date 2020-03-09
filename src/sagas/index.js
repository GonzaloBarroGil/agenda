import {
    all, takeEvery
} from 'redux-saga/effects';

import {FETCH_CONTACTS_REQUESTED, SUBMIT_CONTACT_DATA_REQUESTED, FETCH_CONTACT_REQUESTED} from '@actions/contacts';
import {FETCH_DEPARMENTS_REQUESTED, SUBMIT_DEPARMENT_DATA_REQUESTED, FETCH_DEPARMENT_REQUESTED} from '@actions/deparment';


import {fetchContacts, submitContactData, fetchContact} from './contacts';
import {fetchDeparments, submitDeparmentData, fetchDeparment} from './deparments';

export default function* root() {
    yield all([
        takeEvery(FETCH_CONTACTS_REQUESTED, fetchContacts),
        takeEvery(SUBMIT_CONTACT_DATA_REQUESTED, submitContactData),
        takeEvery(FETCH_CONTACT_REQUESTED, fetchContact)

        takeEvery(FETCH_DEPARMENTS_REQUESTED, fetchDeparments),
        takeEvery(SUBMIT_DEPARMENT_DATA_REQUESTED, submitDeparmentData),
        takeEvery(FETCH_DEPARMENT_REQUESTED, fetchDeparment)


    ]);
}
