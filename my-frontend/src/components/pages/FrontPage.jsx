import {
    Container,
    Menu,
    Segment,
    Button,
    Icon,
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
                    paddingTop: "7em", // space for fixed menu
                }}
            >
                <Container text>
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
            <Segment inverted vertical style={{ padding: "5em 0em" }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as="h4">
                                    About
                                </Header>
                                <Menu inverted vertical>
                                    <Menu.Item as="a">Sitemap</Menu.Item>
                                    <Menu.Item as="a">Contact Us</Menu.Item>
                                    <Menu.Item as="a">Religious Ceremonies</Menu.Item>
                                    <Menu.Item as="a">Gazebo Plans</Menu.Item>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as="h4">
                                    Services
                                </Header>
                                <Menu inverted vertical>
                                    <Menu.Item as="a">Banana Pre-Order</Menu.Item>
                                    <Menu.Item as="a">DNA FAQ</Menu.Item>
                                    <Menu.Item as="a">How To Access</Menu.Item>
                                    <Menu.Item as="a">Favorite X-Men</Menu.Item>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as="h4" inverted>
                                    Footer Header
                                </Header>
                                <p>
                                    Extra space for a call to action inside the footer that could
                                    help re-engage users.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}

export default Homepage
