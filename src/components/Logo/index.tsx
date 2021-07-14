import Link from 'next/link'
import Image from 'next/image'

import { LogoProps } from '../../types/general'
import { getImageURL } from '../../utils/getImageURL'

const Logo = ({ image, url, width, height }: LogoProps) => {
  return (
    <Link href={`${url}`}>
      <a className='link'>
        <Image
          src={getImageURL(image.url)}
          alt={image.alternativeText}
          width={width}
          height={height}
          priority={true}
          className='logo'
        />
      </a>
    </Link>
  )
}

export default Logo
