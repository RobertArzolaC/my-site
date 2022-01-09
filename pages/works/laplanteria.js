import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        La Plantería <Badge>2021-</Badge>
      </Title>
      <P>
        Plataforma enfocada en la venta de plantas, con el fin de ayudar a los 
        a generar espacios de vida más productivos.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://lit-retreat-61668.herokuapp.com/">
            https://www.laplanteria.app/ <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/laplanteria.png" alt="LaPlanteria" />
      <WorkImage src="/images/works/laplanteria_02.png" alt="LaPlanteria" />
    </Container>
  </Layout>
)

export default Work
