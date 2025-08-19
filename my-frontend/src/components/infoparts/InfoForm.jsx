import { 
    Container,
    Segment,
    Form,
    TextArea,
    Button
     } from 'semantic-ui-react'

const InfoForm = ({
    handleNewInfo, 
    setInfoTitle, 
    setInfoContent,
    infoTitle,
    infoContent
    }) => {
    return (
        <Container style={{ marginTop: "2rem" }}>
            <Segment>
                <Form onSubmit={handleNewInfo}>
                <Form.Field>
                    <label>Otsikko</label>
                    <input
                    value={infoTitle} onChange={({ target}) => setInfoTitle(target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Aihe</label>
                    <TextArea
                    placeholder="Enter content..."
                    value={infoContent} onChange={({ target}) => setInfoContent(target.value)}
                    />
                </Form.Field>

                <Button type="submit" primary>
                    Save
                </Button>
                </Form>
            </Segment>
        </Container>
    )
}

/**
 * <div>
            <form onSubmit={handleNewInfo}>
            <h2>Luo uusi info</h2>
            <div>
                Otsikko <input type="text" value={infoTitle} onChange={({ target}) => setInfoTitle(target.value)}/>
            </div>
            <div>
                Aihe <input type="text" value={infoContent} onChange={({ target}) => setInfoContent(target.value)}/>
            </div>
            <button type="submit">Luo</button>
            </form>
        </div>
 * 
 */

export default InfoForm