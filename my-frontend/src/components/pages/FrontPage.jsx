import {
    Container,
    Segment,
    Button,
    Grid,
    Header,
    Image,
} from "semantic-ui-react"


const Homepage = () => {
    return (
        <>

            {/* Masthead Content */}
            <Segment
                inverted
                vertical
                textAlign="center"
                style={{
                    minHeight: 800,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingTop: "10em", // space for fixed menu
                    backgroundImage: "url(/pictures/cropped-tempforrest.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "300px",
                }}
            >
                <Container text>
                    <div>
                        
                    </div>
                    <Header as="h1" inverted>
                        Kurikan Yhteismetsä
                    </Header>
                    <Header as="h2" inverted>
                        Do whatever you want when you want to.
                    </Header>
                </Container>
            </Segment>

            {/* Vertical Stripe Segment */}
            <Segment vertical style={{ padding: "8em 0em" }}>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3">We Help Companies and Companions</Header>
                            <p>
                                We can give your company superpowers to do things that they
                                never thought possible.
                            </p>
                            <Header as="h3">We Make Bananas That Can Dance</Header>
                            <p>Even bananas can be bioengineered.</p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={6}>
                            <Image
                                bordered
                                rounded
                                size="large"
                                src="assets/images/wireframe/white-image.png"
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Button size="huge">Check Them Out</Button>
                    </Grid.Row>
                </Grid>
            </Segment>

            {/* Quote Segment */}
            <Segment vertical>
                <Grid celled="internally" columns="equal" stackable>
                    <Grid.Row textAlign="center">
                        <Grid.Column>
                            <Header as="h3">"What a Company"</Header>
                            <p>That is what they all say about us</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h3">
                                "I shouldn't have gone with their competitor."
                            </Header>
                            <p>
                                <Image avatar src="assets/images/avatar/nan.jpg" /> <b>Nan</b>{" "}
                                Chief Fun Officer Acme Toys
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            {/* Footer */}
        </>
    )
}

export default Homepage
