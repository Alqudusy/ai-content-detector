import { Card, Container } from "react-bootstrap";

const Results = ({ data }: any) => {
    const {
        aiWords,
        fakePercentage,
        isHuman,
        otherFeedback,
        sentences,
        textWords,
    } = data;

    return (
        <Container className="mt-4">
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title>Analysis Results</Card.Title>
                    <Card.Text>
                        <strong>AI Words Detected:</strong> {aiWords}<br />
                        <strong>Fake Content Percentage:</strong> {fakePercentage}%<br />
                        <strong>Human Content Score:</strong> {isHuman}%<br />
                        <strong>Total Words:</strong> {textWords}<br />
                        <strong>Additional Feedback:</strong> {otherFeedback || "N/A"}<br />
                    </Card.Text>
                    {sentences.length > 0 && (
                        <>
                            <Card.Title>Sentence Analysis</Card.Title>
                            <ul>
                                {sentences.map((sentence: any, index: any) => (
                                    <li key={index}>{sentence}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Results;
