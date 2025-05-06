import Form from 'react-bootstrap/Form';

function FormProducto() {
  return (
    <Form  >
      <Form.Group className="mb-3">
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control type="email" placeholder="Nombre del prducto" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control type="number" placeholder="Cantidad" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" placeholder="Cantidad" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Subir imagen</Form.Label>
        <input type="file" />
      </Form.Group>

        <div className='d-flex justify-content-center'>
         <button className='btn btn-primary'>AGREGAR</button>
         </div>
    </Form>
  );
}

export default FormProducto;