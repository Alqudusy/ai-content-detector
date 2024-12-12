import { ChangeEvent, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const InputField = ({ analyzeText }: any) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        analyzeText(text);
        setText('');
    };

    return (
        <Container className="mt-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="textInput">
                    <Form.Label>Enter Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Paste your content here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" className="mt-3" type="submit">
                    Analyze
                </Button>
            </Form>
        </Container>
    );
};

export default InputField;
