import GridText from '../../components/GridText';
import gridMock from '../../components/GridText/mock';
import linksMock from '../../components/NavLinks/mock';

export const mock = {
  children: (
    <>
      <GridText {...gridMock} />
      <GridText {...gridMock} background={true} />
      <GridText {...gridMock} />
      <GridText {...gridMock} background={true} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#'
  },
  footerHtml: '<p>Teste de footer</p>'
};
