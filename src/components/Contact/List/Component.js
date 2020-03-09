import React, {PureComponent} from 'react';
import {
    Button,
    Col,
    Container,
    Row,
    Table
} from 'reactstrap';

import {Link} from 'react-router-dom';

class ContactTable extends PureComponent {
    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        const {contacts} = this.props;

        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        <Table bordered condensed hover stripped size="sm">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>Genero</th>
                                    <th>Fecha de nacimiento</th>
                                    <th>Numero de telefono</th>
                                    <th>Direccion</th>
                                    <th>Cargo</th>
                                    <th>Notas</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map(contact => (
                                    <tr>
                                        <td>{contact.firstName}</td>
                                        <td>{contact.lastName}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.gender}</td>
                                        <td>{contact.birthDate}</td>
                                        <td>{contact.phoneNumber}</td>
                                        <td>{contact.address}</td>
                                        <td>{contact.role}</td>
                                        <td>{contact.notes}</td>
                                        <td>
                                            <Link to={`/contacts/${contact.id}`}>Edit</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div style={{'text-align': 'right'}}>
                            <Button type="button" className="btn btn-outline-info" href="#contacts/new">Nuevo contacto</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactTable;
