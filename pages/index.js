//Importamos lo necesario
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';

//Constante que muestra la aplicacion principal
const Index = ({ notes }) => {
  return (
    <div className="notes-container">
      <h1>Notas/Tareas</h1>
      <div className="grid wrapper">
        {notes.map(note => {
          return (
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>
                      <a>{note.title}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${note._id}`}>
                    <Button primary>Ver nota</Button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <Button primary>Editar nota</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

//Esta funcion envia la pagina con los datos actualizados desde el servidor
Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return { notes: data }
}

export default Index;