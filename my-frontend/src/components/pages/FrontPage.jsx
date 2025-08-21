import {
    Container,
    Segment,
    Button,
    Grid,
    Header,
    Image,
    Statistic,
    Divider,
    List,
    Icon,
    Card
} from "semantic-ui-react"


const Homepage = () => {
    const contacts = [
    {
        name: "Jyrki Ilves",
        role: "Hoitokunnan puheenjohtaja",
        phone: "040 680 7149",
    },
    {
        name: "Seija Pitkänen",
        role: "Hoitokunnan sihteeri",
        phone: "044 034 0053",
    },
    ]


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
                    height: "1000px",
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
                            <Header as="h3">Mikä ihmeen yhteismetsä?</Header>
                            <p>
                                Yhteismetsä tarkoittaa sitä, että useampi metsänomistaja yhdistää palstansa ja hoitaa metsää yhdessä – ammattimaisesti ja pitkäjänteisesti. Jokainen osakas saa osuutensa tuotoista, mutta metsänhoidosta ei tarvitse itse huolehtia.</p>
                                Kun metsä on yhteismetsässä, se tuottaa tasaista, verovapaata tuloa, eikä metsänhoitotöistä tarvitse stressata. Lisäksi puukaupat ja hoitotyöt kilpailutetaan fiksusti, jolloin myös pienemmät palstat hyötyvät isomman kokonaisuuden eduista.
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
                <Divider style={{ padding: "10px 0" }}/>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3">Kurikan Yhteismetsä – yhdessä enemmän</Header>
                            <p>
                                Kurikan Yhteismetsä perustettiin vuonna 2019 tarjoamaan metsänomistajille helpon ja turvallisen tavan hoitaa metsäomaisuutta. Tavoitteena on kestävä metsätalous ja tasainen tuotto osakkaille.
                                </p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={6}>
                            <Segment textAlign="center">
                                <Statistic>
                                <Statistic.Value>965</Statistic.Value>
                                <Statistic.Label>Hehtaaria</Statistic.Label>
                                </Statistic>
                                <Divider />
                                <Statistic>
                                <Statistic.Value>49</Statistic.Value>
                                <Statistic.Label>Osakasta</Statistic.Label>
                                </Statistic>
                                <Divider />
                                <Statistic>
                                <Statistic.Value>2019</Statistic.Value>
                                <Statistic.Label>perustettu</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider style={{ padding: "20px 0" }}/>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3">Näin liityt mukaan</Header>
                            <p>Kurikan Yhteismetsään liittyminen onnistuu helposti – ja ilman suuria kustannuksia.</p>
                                
                            <List as="ol">
                                <List.Item as="li">Ota yhteyttä hoitokunnan puheenjohtajaan ja ilmoita kiinnostuksestasi.</List.Item>
                                <List.Item as="li">Tilaa metsäarvio yhteismetsän hyväksymältä arvioijalta. Arvio tehdään mieluiten kasvukauden jälkeen ja sen maksaa liittyjä.</List.Item>
                                <List.Item as="li">Metsäpalstan arvo määritellään arvion perusteella ja verrataan yhteismetsän nykyiseen arvoon, joka päivitetään vuosittain.</List.Item>
                                <List.Item as="li">Jos tilalla on useampi omistaja (esim. perikunta), kaikkien on suostuttava liittymiseen.</List.Item>
                                <List.Item as="li">Tilan liittäminen on vastikkeeton, eikä siitä synny luovutusvoittoveroa. Valtio maksaa liittymistoimituksen – sinulle jää vain arvioinnin kustannukset.</List.Item>
                            </List>
                            <Header as="h3">Erityishuomio tuulivoimasta</Header>
                            <p>Jos tilasi kuuluu jo jonkin tuulivoimayhtiön korvausalueelle tai saattaa tulevaisuudessa kuulua, korvauksista on tärkeää sopia ennen liittymistä. Näistä neuvotellaan aina erikseen hoitokunnan kanssa.</p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={6}>
                                <Segment padded="very" vertical>
                                <Header as="h2" icon textAlign="center">
                                    <Icon name="address book" circular />
                                    <Header.Content>Ota yhteyttä</Header.Content>
                                </Header>

                                <Card.Group itemsPerRow={1} stackable>
                                    {contacts.map((contact, index) => (
                                    <Card key={index} fluid>
                                        <Card.Content>
                                        <Card.Header>{contact.name}</Card.Header>
                                        <Card.Meta>{contact.role}</Card.Meta>
                                        <Card.Description>
                                            <p><Icon name="phone" /> {contact.phone}</p>
                                        </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    ))}
                                </Card.Group>
                                </Segment>
                        </Grid.Column>
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
