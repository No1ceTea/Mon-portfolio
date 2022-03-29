import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="RCVB">
    <Container>
      <Title>
        RCVB <Badge>2022</Badge>
      </Title>
      <P>
        Site pour ma seconde année de stage, développer et mettre en place
        un site web pour une association de rugby. Elle met à jour
        l'ancien site et comporte plus de sécurité en vue des nouvelles 
        fonctionnalités integrés au site tel que l'inscription des nouveaux adhérants avec une base de données
        et la gestion de ses adhérants.
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://club.quomodo.com/rcvb">
            RCVB <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS, MySQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/Accueil_Réservation.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'