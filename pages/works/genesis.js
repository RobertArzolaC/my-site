import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Génesis <Badge>2021-</Badge>
      </Title>
      <P>
        Plataforma para gestión documentaría dentro de una parroquía.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hidden-reaches-99268.herokuapp.com/">
            https://www.genesis.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Django</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/genesis.png" alt="Genesis" />
      <WorkImage src="/images/works/genesis_02.png" alt="Genesis" />
    </Container>
  </Layout>
)

export default Work
