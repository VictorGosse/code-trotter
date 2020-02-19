import React from 'react'
import { Container, Header2, Header3, Text } from 'atti-components'

import { Introduction, SEO } from '@components'
import { useLightMenu } from '@components/Layout/context/LightMenuContext'
import { useThemeApp } from '@components/Layout/context/ThemeAppContext'


const MentionsLegales = () =>  {
  useLightMenu().setLightMenu(false)
  useThemeApp().setThemeApp("")

  return (
    <>
      <SEO
        description="Mention légales"
        keywords={[]}
        title="Mentions légales du site"
      />
      <Container>
        <Introduction title="Mention Légales" />
        <Text mt="30px">
          Ce site (https://www.code-trotter.com) est la propriété de Victor Gosse<br /><br />

          RESPONSABLE DE LA PUBLICATION : V. Gosse (E-mail : thecodetrotter@gmail.com)<br />
          HÉBERGEMENT : Netlify : https://www.netlify.com<br />
          WEBMASTER : Victor Gosse<br />
        </Text>

        <Header2 mt="10px" mb="10px">DROIT D'AUTEUR - COPYRIGHT ©</Header2>
        <Header3 mb="15px">REPRODUCTION SUR SUPPORT PAPIER</Header3>
        <Text>
          A l’exception de l’iconographie, la reproduction des pages de ce site sur un support papier est autorisée, sous réserve des trois conditions suivantes :
          gratuité de la diffusion, respect de l’intégrité des documents reproduits (aucune modification, ni altération d’aucune sorte);
          citation explicite du site http://www.code-trotter.com comme source et mention que les droits de reproduction sont réservés et strictement limités.
        </Text>
        <Header3 mt="25px" mb="15px">REPRODUCTION SUR SUPPORT ÉLECTRONIQUE</Header3>
        <Text>
          La reproduction de tout ou d’une partie de ce site sur un support électronique est autorisée sous réserve de l’ajout de façon claire et lisible
          de la source (http://www.code-trotter.com) et de la mention “Droits réservés”. Les informations utilisées ne doivent l’être qu’à des fins
          personnelles, associatives ou professionnelles; toute utilisation à des fins commerciales ou publicitaires est exclue.
        </Text>

        <Header2 mt="25px" mb="15px">GESTION DES DONNÉES PERSONNELLES</Header2>
        <Text>Vous pouvez consulter ce site sans révéler votre identité ou donner la moindre information vous concernant.</Text>

        <Header2 mt="25px" mb="15px">COOKIES</Header2>
        <Text>Lors de votre visite sur notre site, nous sommes susceptibles d'implanter un cookie dans votre ordinateur. Un cookie est un petit bloc de données envoyé à votre navigateur par un serveur web et stocké sur le disque dur de votre ordinateur. Le cookie ne nous permet pas de vous identifier personnellement. De manière générale, il nous permet d'enregistrer des informations relatives à la navigation de votre ordinateur sur notre site (les pages que vous avez consultées, la date et l'heure de la consultation, etc.) que nous pourrons lire lors de vos visites ultérieures.</Text>
        <Text>Vous pouvez naturellement vous opposer à l'enregistrement de cookies en configurant votre navigateur.</Text>
        <Text>Vous pouvez également supprimer les cookies à tout moment et individuellement en vous rapportant au manuel d'utilisation de votre navigateur.</Text><br /><br />
        <Text>© Victor Gosse 2019</Text>
      </Container>
    </>
  )
}

export default MentionsLegales
