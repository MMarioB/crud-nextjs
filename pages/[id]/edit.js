//import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

//Creamos la constante para editar una nota
const EditNote = ({ note }) => {
    const [form, setForm] = useState({ title: note.title, description: note.description });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                updateNote();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    //Este metodo actualizaria el contenido de la nota que vayamos a editar
    const updateNote = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/notes/${router.query.id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //Validacion para que la nota no este vacia
    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'El nombre de la tarea no puede estar vacio';
        }
        if (!form.description) {
            err.description = 'El contenido de la tarea no puede estar vacio';
        }

        return err;
    }

    //Interfaz al hacer el update a una nota
    return (
        <div className="form-container">
            <h1>Editar nota</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.title ? { content: 'Por favor introduzca un nombre para esta tarea', pointing: 'below' } : null}
                                label='Tarea'
                                placeholder='Introduzca un nombre para la tarea...'
                                name='title'
                                value={form.title}
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='Contenido'
                                placeholder='Introduzca el contenido...'
                                name='description'
                                error={errors.description ? { content: 'Introduzca contenido para esta nota', pointing: 'below' } : null}
                                value={form.description}
                                onChange={handleChange}
                            />
                            <Button type='submit'>Actualizar nota</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

EditNote.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }
}

export default EditNote;