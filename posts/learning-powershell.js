import { default as basePostStyles } from "../styles/posts/BlogPost.module.css"

import Layout from "../components/Layout";

import Image from 'next/image'

export const metadata = {
    date: "April 22, 2021",
    title: "What Does PowerShell Do and What Can It Be Used For?",
    author: "Benoit",
}

const LearningPowershell = () => {

    return (
        <Layout>
            <h1 className={basePostStyles.postTitle}>What Does PowerShell Do and What Can It Be Used For?</h1>
            <hr />
            <p>by {metadata.author} on {metadata.date}</p>
            <p className={basePostStyles.subTitle}>
                PowerShell is a really <strong>powerful</strong> tool, and it can help you
                accomplish a lot of task on Windows and Windows Server. It is{" "}
                <em>already installed</em> on your machine if you are running Windows 7 or
                later. If you are running macOS or Linux, you can also{" "}
                <a href="https://docs.microsoft.com/fr-fr/powershell/scripting/install/installing-powershell">
                    install it
                </a>
                . Let's explore why it is useful and why you should consider using it.
            </p>
            <Image
                src="/images/powershellHeader.jpg"
                alt="Computer Image"
                width={960}
                height={960 * 2 / 3}
            />
        </Layout>
    )
}

export default LearningPowershell;
