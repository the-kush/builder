import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import styles  from "../styles/Home.module.css"
import Navbar from "@/components/Navbar"
import Disconnected from "@/components/Disconnected"
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "@/components/Connected"

const Home: NextPage = () => {
    const { connected } = useWallet()

    return (
        <div className={styles.container}>
            <Head>
                <title>Buildoor</title>
                <meta name="The NFT Collection for Buildoor" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box
                w="full"
                h="calc(100vh)"
                bgImage={"url(/home-background.svg)"}
                backgroundPosition="center"
            >
                <Stack w="full" h="calc(100vh)" justify="center">
                    <Spacer/>
                    <Center>

                        </Center>
                    <Spacer/>

                    <Center>
                        <Box marginBottom={4} color="white">
                            <a
                              href="https://twitter.com/_buildspace"
                              target="_blank"
                              rel="nooper noreferrer"
                              >
                                Built with @Kush
                              </a>
                        </Box>
                    </Center>
                </Stack>
                </Box>
        </div>
    )
}

export default Home