import React from "react";

import { default as basePostStyles } from "../styles/posts/BlogPost.module.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism } from "react-syntax-highlighter";
import { a11yDark } from "../node_modules/react-syntax-highlighter/dist/esm/styles/prism";

import Layout from "../components/Layout";

export const metadata = {
  date: "April 22, 2021",
  title: "What Does PowerShell Do and What Can It Be Used For?",
  author: "Benoit",
};

const LearningPowershell = () => {
  return (
    <Layout className={basePostStyles.layoutBasics}>
      <h1 className={basePostStyles.postTitle}>{metadata.title}</h1>
      <hr />
      <p className={basePostStyles.metadata}>
        by {metadata.author} on {metadata.date}
      </p>
      <p className={basePostStyles.subTitle}>
        PowerShell is a really <strong>powerful</strong> tool, and it can help
        you accomplish a lot of task on Windows and Windows Server. It is{" "}
        <em>already installed</em> on your machine if you are running Windows 7
        or later.
        <br />
        If you are running macOS or Linux, you can also{" "}
        <a href="https://docs.microsoft.com/fr-fr/powershell/scripting/install/installing-powershell">
          install it
        </a>
        . Let&apos;s explore why it is useful and why you should consider using
        it.
      </p>
      {/* <img
                className={basePostStyles.coverimage}
                alt="A computer"
                src="/images/powershellheader.jpg"
            /> */}

      <h2>What is PowerShell ?</h2>

      <span>PowerShell is :</span>
      <ul>
        <li>
          A <strong>shell</strong>, that runs commands and scripts, but unlike
          text based shell like <code>*sh</code>, it will accept and return
          objects.
        </li>
        <li>
          A <strong>task-based typed interpreted language</strong> built on{" "}
          <code>.NET</code>, used for managing systems.
        </li>
        <li>
          A <strong>configuration management framework</strong>.
        </li>
      </ul>

      <h2>Starting PowerShell</h2>
      <p>
        To start Powershell, launch it from the Windows menu or from the{" "}
        <code>Windows</code> + <code>X</code> menu.
        <br />A shell window will appear with the following text :
      </p>

      <SyntaxHighlighter language="plaintext" style={a11yDark}>
        {`PS C:\\Users\\your.username>`}
      </SyntaxHighlighter>

      <h2>Checking your installation</h2>

      <p>
        To check your PowerShell installation, run the{" "}
        <code>$PSVersionTable</code> command, as the following snippet :
      </p>
      <Prism language="powershell" style={a11yDark}>
        {`$PSVersionTable`}
      </Prism>
      <p>
        Running the <code>$PSVersionTable</code> command will output the content
        of the variable named <em>PSVersionTable</em>. If the output looks
        similar to the following, then PowerShell is installed and running
        properly.
      </p>
      <SyntaxHighlighter style={a11yDark}>
        {`Name                           Value
----                           -----
PSVersion                      5.1.19041.906
PSEdition                      Desktop
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
BuildVersion                   10.0.19041.906
CLRVersion                     4.0.30319.42000
WSManStackVersion              3.0
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1`}
      </SyntaxHighlighter>

      <p>
        The previous command output is indicating what Version of PowserShell
        you are running. In my case, I am running the{" "}
        <strong>5.1 version that comes with Windows 10</strong>.
      </p>
      <h2>PowerShell Syntax</h2>
      <p>
        If you are comming from an other programming language, you are more used
        to call functions like this :
      </p>
      <SyntaxHighlighter language="plaintext" style={a11yDark}>
        {"functionCall(param1, param2);"}
      </SyntaxHighlighter>

      <p>Powershell is different and command calls are written like this : </p>
      <SyntaxHighlighter language="plaintext" style={a11yDark}>
        {`Verb-Noun -Param1 'Value' -Param2 $CanBeAVariable`}
      </SyntaxHighlighter>

      <h2>Objects ?</h2>
      <p>
        The true power of PowerShell is its ability to manipulate{" "}
        <code>.NET</code> objects. For exemple, to get all the processes, run
        the following command :
      </p>
      <Prism language="powershell" style={a11yDark}>
        {"Get-Process"}
      </Prism>

      <p>
        The output will show you a list of object, each one corresponding to a
        process running on your computer.
      </p>

      <h3>Filtering the output</h3>

      <p>
        Let&apos;s say you only want the PowerShell process(es) running on your
        computer.
      </p>

      <p>
        You can run the command with the parameter <code>Name</code>, the
        command will only return the process with the name that you passed to
        the parameter.
      </p>

      <Prism language="powershell" style={a11yDark}>
        {`Get-Process -Name "powershell"`}
      </Prism>

      <p>
        Alternatively you can filter the output, manipulating directly the array
        of <code>.NET</code> objects, like so :
      </p>

      <Prism language="powershell" style={a11yDark}>
        {`Get-Process | Where-Object { $_.ProcessName -eq "powershell" }`}
      </Prism>

      <p>
        Both commands will return the same array of <code>.NET</code> objects,
        but the first one is considered best practice and also more readable.
      </p>

      <SyntaxHighlighter style={a11yDark}>
        {`Handles  NPM(K)    PM(K)      WS(K)     CPU(s)     Id  SI ProcessName
-------  ------    -----      -----     ------     --  -- -----------
    686      32    74240      87484       1,17   6856   1 powershell
    447      28    63160      13392       7,09  10092   1 powershell`}
      </SyntaxHighlighter>

      <p>
        Once you filtered your objects, you can pass them to another command,
        let&apos;s gracefully close all PowerShell instances running on your
        computer with one command :
      </p>

      <Prism language="powershell" style={a11yDark}>
        {`Get-Process -Name "powershell" | Stop-Process`}
      </Prism>

      <p>
        The above command will close all running shells and even the one you
        just entered the command in.
      </p>
    </Layout>
  );
};

export default LearningPowershell;
