import Helmet from 'react-helmet';
import favicon from '../../assets/favicon.ico';

const HelmetComponent = () => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>SlimStick Patches</title>
      <meta name='' content='' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel='icon' type='image/png' href={favicon} />
    </Helmet>
  );
};

export default HelmetComponent;