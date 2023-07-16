import { Metadata } from 'next'

import Invitation from './components/invitation'

export const metadata: Metadata = {
  title: 'Invitacion Aniversario | El Encuentro',
  description: 'Invitacion a nuestro aniversario',
  openGraph: {
    images: 'https://www.elencuentro.org/og-image.png',
  },
  twitter: {
    images: ['https://www.elencuentro.org/og-image.png'],
  },
}

export default function InvitationPage() {
  
  return (
    <main className="bg-black">
      <Invitation />
    </main>
  )
}