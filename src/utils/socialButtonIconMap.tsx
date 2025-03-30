import { GithubIcon, InstagramIcon, EmailIcon } from '@/assets/svg'

type SocialButtonIconMapProps = {
  theme: 'light' | 'dark'
  isHover: boolean | null
}

export default function socialButtonIconMap({ theme, isHover }: SocialButtonIconMapProps) {
  return {
    github: {
      component: (
        <GithubIcon
          width={32}
          height={32}
          fill={
            theme === 'dark'
              ? isHover
                ? '#1B1A19'
                : '#ffffff' // dark
              : isHover
              ? '#ffffff'
              : '#1B1A19' // light
          }
        />
      ),
      url: 'https://github.com/se-eun-park',
    },
    instagram: {
      component: (
        <InstagramIcon
          width={28}
          height={28}
          fill={
            theme === 'dark'
              ? isHover
                ? '#1B1A19'
                : '#ffffff' // dark
              : isHover
              ? '#ffffff'
              : '#1B1A19' // light
          }
        />
      ),
      url: 'https://www.instagram.com/seeunn2/',
    },
    email: {
      component: (
        <EmailIcon
          width={28}
          height={28}
          fill={
            theme === 'dark'
              ? isHover
                ? '#1B1A19'
                : '#ffffff' // dark
              : isHover
              ? '#ffffff'
              : '#1B1A19' // light
          }
        />
      ),
      url: 'mailto:seeunbag30@gmail.com',
    },
  }
}
