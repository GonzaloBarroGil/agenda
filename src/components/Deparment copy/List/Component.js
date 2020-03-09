// import React, {PureComponent} from 'react';
// import {
//     Table
// } from 'reactstrap';

// import {Link} from 'react-router-dom';

// class DeparmentTable extends PureComponent {
//     componentDidMount() {
//         this.props.fetchDeparments();
//     }

//     render() {
//         const {deparments} = this.props;

//         return (
//             <>
//                 <Button class="btn btn-outline-info" to="/contacts/new">Nuevo contacto</Button>
//                 <Table bordered condensed hover stripped size="sm">
//                     <thead>
//                         <tr>
//                             <th>Nombre</th>
//                             <th>Apellido</th>
//                             <th>Email</th>
//                             <th>Genero</th>
//                             <th>Fecha de nacimiento</th>
//                             <th>Numero de telefono</th>
//                             <th>Direccion</th>
//                             <th>Cargo</th>
//                             <th>Notas</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {contacts.map(contact => (
//                             <tr>
//                                 <td>{contact.firstName}</td>
//                                 <td>{contact.lastName}</td>
//                                 <td>{contact.email}</td>
//                                 <td>{contact.gender}</td>
//                                 <td>{contact.birthDate}</td>
//                                 <td>{contact.phoneNumber}</td>
//                                 <td>{contact.address}</td>
//                                 <td>{contact.role}</td>
//                                 <td>{contact.notes}</td>
//                                 <td>
//                                     <Link to={`/contacts/${contact.id}`}>Edit</Link>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </>
//         );
//     }
// }

// export default ContactTable;
