import Form from 'react-bootstrap/Form';

function FormVenta() {
  return (
    <Form >
      <Form.Group className="mb-3">
        <Form.Label>Producto</Form.Label>
        <Form.Control type="text" placeholder="Nombre del prducto" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control type="number" placeholder="Cantidad" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>precio</Form.Label>
        <Form.Control type="number" placeholder="Cantidad" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Metodo de pago</Form.Label>
        <Form.Control type="text" placeholder="Nombre del prducto" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nombre cliente</Form.Label>
        <Form.Control type="text" placeholder="Cantidad" />
      </Form.Group>
   

        <div className='d-flex justify-content-center'>
         <button className='btn btn-primary'>AGREGAR</button>
         </div>
    </Form>
  );
}

export default FormVenta;