import { Header } from '../../components';
import {links} from "../../contsts";
import { Container } from './All.styles';
import Content from "../../components/Content";

const All = () => {
  return (
    <Container>
      <Header
        links={links}
      />
      <Content/>
    </Container>
  )
};

export default All;
