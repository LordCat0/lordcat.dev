import type { ComponentChildren, ComponentProps, CSSProperties } from 'preact';
import { Link, Folder } from 'lucide-preact';
import Box from '../box/box';
import ImageCard from '../image-card/image-card';
import styles from './projects.module.css';

interface ProjectImage {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  src: ComponentProps<'img'>['src'];
  tooltip?: string;
}

interface ProjectItemProps {
  icon?: string;
  name: string;
  accent?: string;
  href: string;
  status: string;
  github?: string;
  images?: ProjectImage[];
  description?: string;
  children?: ComponentChildren;
}

function ProjectItem(props: ProjectItemProps) {
  return (
    <Box className={styles.projectItem}>
      <div className={styles.title}>
        <a href={props.href} className={styles.projectLink}>
          {props.icon &&
            <img
              src={props.icon}
              width={35}
              height={35}
              draggable={false}
            />
          }
          <h2>{props.name}</h2>
        </a>
        <span>({props.status})</span>
      </div>
      {props.description &&
        <p>{props.description}</p>
      }
      <div className={styles.links}>
        <span>
          <Link size={18} />
          <a
            href={props.href}
            style={{
              color: props.accent || 'white'
            }}
          >
            {props.href}
          </a>
        </span>
        {props.github &&
          <span>
            {/* <img
              src='/assets/github.svg'
              width={18}
              height={18}
              draggable={false}
            /> */}
            <Folder size={18} />
            <a
              href={props.github}
              style={{
                color: props.accent || 'white'
              }}
            >
              {props.github}
            </a>
          </span>
        }
      </div>
      {props.images &&
        props.images.map(image => (
          <ImageCard
            imageSrc={image.src}
            containerWidth={image.width}
            imageWidth={image.width}
            imageHeight={image.height}
            captionText={image.tooltip}
            showTooltip={Boolean(image.tooltip)}
            scaleOnHover={1.03}
            rotateAmplitude={3}
          />
        ))
      }
    </Box>
  )
}

function Projects() {
  return (
    <main className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.list}>
        <ProjectItem
          name='NitroBolt'
          description='A mod of TurboWarp with tons of new features, and a haven for developers who dont want to be restricted by "compatibility".'
          href='https://nitrobolt.org/'
          status='Active Developer'
          icon='/assets/nitrobolt.svg'
          github='https://github.com/Nitro-Bolt'
          accent='#ff5726'
          images={[{
            src: '/assets/screenshots/nitrobolt-1.png',
            width: '25rem',
            height: '15rem',
            tooltip: 'Full Sphere Path Tracer by piano_miles'
          }]}
        />
      </div>
    </main>
  );
}

export default Projects;
