import Form from 'react-bootstrap/Form';

function FormProducto() {
  return (
    <Form >
      <Form.Group className="mb-3">
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
         <button className='btn btn-primary'>AGREGAR</button>
    </Form>
  );
}

export default FormProducto;