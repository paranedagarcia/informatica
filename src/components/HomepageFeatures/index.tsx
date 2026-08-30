import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const SUPPORTED_IMAGE_EXTENSIONS = ['png', 'jpg', 'webp', 'svg','gif'];

function hasSupportedImageFormat(imagePath) {
  const extension = imagePath.split('.').pop()?.toLowerCase();
  return SUPPORTED_IMAGE_EXTENSIONS.includes(extension);
}


const FeatureList = [
  {
    title: 'Fundamentos',
    image: '/img/fundamentos.jpg',
    description: (
      <>
        Conozca los conceptos básicos de la Ingeniería de la Información y aplique para la resolución de problemas en cualquier àmbito.
      </>
    ),
  },
  {
    title: 'Programación',
    image: '/img/programacion.jpg',
    description: (
      <>
        Aprenda las bases de la programación, algoritmos y estructuras de datos, incluyendo la sintaxis, estructuras de control y conceptos fundamentales.
      </>
    ),
  },
  {
    title: 'Gobernanza',
    image: '/img/gobernanza.jpg',
    description: (
      <>
        Aprenda las mejores prácticas para la gobernanza de los datos e información en el ámbito organizacional (en construcción...).
      </>
    ),
  },
];

function Feature({image, title, description}) {
  if (!hasSupportedImageFormat(image)) {
    return null;
  }

  const imageUrl = useBaseUrl(image);

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imageUrl} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
