import { RichText } from "prismic-dom";

import Link from 'next/link'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Flex, Text, VStack } from '@chakra-ui/layout'

import type { GetStaticProps , NextPage } from 'next'
import Head from 'next/head'

import { getPrismicClient } from '../services/prismic'

interface LinksProps {
  content: {
    favicon: string;
    profileImage: string;
    footer: string;
    links: {
        text: string;
        href: string;
    }[];
    seo?: {
      title: string;
      description: string;
      keywords: string;
    }
  }
}

const Links: NextPage<LinksProps> = ({ content }) => {
  console.log(content)
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href={content.favicon} />
        <title>{content?.seo?.title || 'Marcon Willian'}</title>

        <meta name="description" content={content?.seo?.description} />
        <meta name="keywords" content={content?.seo?.keywords} />
      </Head>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'space-between'}
        flexDirection={'column'}
        padding="5"
        height="100vh"
      >
        <Image
            margin="10"
            borderRadius="full"
            boxSize="200"
            src={content.profileImage}
            alt="Marcon Willian"
        />
        <VStack
          gridGap="1"
        >
          {
            content.links.map(link => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  passHref
                >
                  <Button
                    as='a'
                    width={'270px'}
                    height={'60px'}
                    colorScheme="gray"
                    variant="outline"
                    borderRadius="0"
                    _hover={{ 
                      bg: "gray.200",
                      color: "gray.800"
                    }}
                  >
                    {link.text}
                  </Button>
                </Link>
              )
            })
          }
        </VStack>
        <Text 
          fontWeight="300"
          fontSize="1rem"
          align={'center'}
          maxW='250px'
          >
            <div 
              dangerouslySetInnerHTML={{
                __html: content.footer
              }}
            />
        </Text>
      </Flex>
    </>
  )
}

export default Links

export const getStaticProps : GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const { data } = await prismic.getByUID('bio_links', process.env.PRISMIC_UID || '', {});
  
  const content = {
    favicon: data.favicon.url,
    profileImage: data.profile_image.url,
    links: data.links.map((link: any) => {
      return {
        text: RichText.asText(link.link_text),
        href: link.href.url,
        notVisibleInRefer: RichText.asText(link.not_visible_in_refer)
      }
    }),
    footer: RichText.asHtml(data.footer),
    seo: {
      title: RichText.asText(data['seo-title']),
      description: RichText.asText(data['seo-description']),
      keywords: data['seo-keywords'].map((keyword: any) => {
        return keyword.text
      }).join(','),
    }
  }


  return {
    props: {
      content
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
