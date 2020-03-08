import {connect} from 'react-redux';
import get from 'lodash/get';
import set from 'lodash/set';
import map from 'lodash/map';

import {
    fetchContactRequested,
    submitContactDataRequested,
    updateContactData,
    fetchContactsSucceeded
} from '@actions/contacts';

import Component from './Component';

const fields = [
    {
        control: 'firstName',
        label: 'Nombre',
        path: 'firstName',
        value: null,
        type: 'text'
    },
    {
        control: 'lastName',
        label: 'Apellido',
        path: 'lastName',
        value: null,
        type: 'text'
    },
    {
        control: 'email',
        label: 'Email',
        path: 'email',
        value: null,
        type: 'text'
    },
    {
        control: 'gender',
        label: 'Sexo',
        path: 'gender',
        value: null,
        type: 'text'
    },
    {
        control: 'birthDate',
        label: 'Fecha de nacimiento',
        path: 'birthDate',
        value: null,
        type: 'date'
    },
    {
        control: 'phoneNumber',
        label: 'Número de teléfono',
        path: 'phoneNumber',
        value: null,
        type: 'phone'
    },
    {
        control: 'address',
        label: 'Dirección',
        path: 'address',
        value: null,
        type: 'phone'
    },
    {
        control: 'role',
        label: 'Cargo',
        path: 'role',
        value: null,
        type: 'text'
    },
    {
        control: 'notes',
        label: 'Notas',
        path: 'notes',
        value: null,
        type: 'text'
    }
];

// Store Redux - StaticData
const mapStateToProps = state => {
    const contact = get(state, 'contacts.contact', {});
    const cFields = map(fields, field => ({
        ...field,
        value: get(contact, field.path, '')
    }));
    return {
        contact,
        fields: cFields
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchContact: id => dispatch(fetchContactRequested(id)),
    submitContactData: () => dispatch(submitContactDataRequested()),
    updateContact: contact => dispatch(updateContactData(contact))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {updateContact} = dispatchProps;
    const mergeFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => updateContact(set(stateProps.contact, field.path, value))
    }));
    console.log(mergeFields);
    return {
        ...dispatchProps,
        ...ownProps,
        fields: mergeFields
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Component);
