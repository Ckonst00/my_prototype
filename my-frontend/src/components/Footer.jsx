import {
    Container,
    Menu,
    Segment,
    Grid,
    Header,
} from "semantic-ui-react"


const Footer = () => {
    return (
            <Segment inverted vertical style={{ padding: "5em 0em", marginTop: "5em" }}>
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
                                    © 2025 Kurikan Yhteismetsä
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>

    )
}





export default Footer