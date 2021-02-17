
//Importamos lo necesario
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

//Creamos la constante para crear una nota
const NewNote = () => {
    const [form, setForm] = useState({ title: '', description: '' }); 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createNote();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const createNote = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/notes', {
                method: 'POST',
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

    //Realizamos unas pequeñas validaciones
    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'Introduzca un nombre para la nota/tarea';
        }
        if (!form.description) {
            err.description = 'Introduzca contenido en la tarea';
        }

        return err;
    }

    //Devolvemos un div que mostrara el cómo agregar una nueva nota
    return (
        <div className="form-container">
            <h1>Crear nota o tarea</h1>
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
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='Contenido'
                                placeholder='Introduzca el contenido...'
                                name='description'
                                error={errors.description ? { content: 'Introduzca contenido para esta nota', pointing: 'below' } : null}
                                onChange={handleChange}
                            />
                            <Button type='submit'>Crear nota</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

export default NewNote;