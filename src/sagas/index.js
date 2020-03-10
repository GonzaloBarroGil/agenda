import {
    all, takeEvery
} from 'redux-saga/effects';

import {FETCH_CONTACTS_REQUESTED, SUBMIT_CONTACT_DATA_REQUESTED, FETCH_CONTACT_REQUESTED} from '@actions/contacts';
import {FETCH_DEPARTMENTS_REQUESTED, SUBMIT_DEPARTMENT_DATA_REQUESTED, FETCH_DEPARTMENT_REQUESTED} from '@actions/deparTment';


import {fetchContacts, submitContactData, fetchContact} from './contacts';
import {fetchDepartments, submitDepartmentData, fetchDepartment} from './departments';

export default function* root() {
    yield all([
        takeEvery(FETCH_CONTACTS_REQUESTED, fetchContacts),
        takeEvery(SUBMIT_CONTACT_DATA_REQUESTED, submitContactData),
        takeEvery(FETCH_CONTACT_REQUESTED, fetchContact)

        takeEvery(FETCH_DEPARTMENTS_REQUESTED, fetchDepartments),
        takeEvery(SUBMIT_DEPARTMENT_DATA_REQUESTED, submitDepartmentData),
        takeEvery(FETCH_DEPARTMENT_REQUESTED, fetchDepartment)


    ]);
}
