import React from "react";
import { Prism } from "react-syntax-highlighter";
import { a11yDark } from "../node_modules/react-syntax-highlighter/dist/esm/styles/prism";

import { default as basePostStyles } from "../styles/posts/BlogPost.module.css";

import Layout from "../components/Layout";

export const metadata = {
  date: "April 22, 2021",
  title: "Pointers in C Demystified",
  author: "Benoit",
};

const Pointers = () => {
  return (
    <Layout className={basePostStyles.layoutBasics}>
      <h1 className={basePostStyles.postTitle}>{metadata.title}</h1>
      <hr />
      <p className={basePostStyles.metadata}>
        by {metadata.author} on {metadata.date}
      </p>
      <p className={basePostStyles.subTitle}>
        Pointers in C can be challenging to fully understand because of their
        abstract nature. Pointers are just variables that store the address to
        another variables. What exactly are pointers ?
      </p>

      <h2>Memory in a computer</h2>

      <p>
        Random access memory or RAM, when simplified, is a serie of continuous
        blocs of a constant size, identified by an unique address. This is where
        your C program, after being compiled and wrote to the disk, is copied
        when it is run.
        <br />
        This is a very simplified way of thinking about memory :
      </p>

      <Prism style={a11yDark} language="text">
        {`+-------+----------+
| 0x000 |   7909   |
+-------+----------+
| 0x001 | "Albert" |
+-------+----------+
| 0x002 |   0x004  |
+-------+----------+
    ^         ^
    |         |
    |         |
 Address   Content`}
      </Prism>
      <p>
        Every bit of data, when stored in the RAM, is stored at en address, this
        address is allocated by the operating system and reserved to the
        program.
      </p>

      <h2>Memory in C</h2>

      <p>
        Allocating memory in C is very simple, let&apos;s allocate a{" "}
        <code>int</code> for a variable age, the give it a value and print it to
        the screen :
      </p>
      <Prism showLineNumbers language="c" style={a11yDark}>
        {`#include <stdio.h>

int main(int argc, char **argv) {
    int age = 21;

    printf("Age : %d\\n", age);
    return 0;
}`}
      </Prism>
      <p>
        Compiling and running this program should output : <code>Age : 21</code>
        .
      </p>
      <p>
        <code>age</code> was stored in RAM, then read, then erased when the
        program has ended. But how do we know at what address the value of age
        was stored ?
      </p>
      <Prism
        showLineNumbers
        language="c"
        style={a11yDark}
        wrapLines={true}
        lineProps={(lineNumber) => {
          let style = { display: "block" };
          if (lineNumber === 6) {
            style.backgroundColor = "#555";
          }
          return { style };
        }}
      >
        {`#include <stdio.h>

int main(int argc, char **argv) {
    int age = 21;

    printf("Age is %d and is stored at address %p\\n", age, &age);
    return 0;
}`}
      </Prism>
      <p>
        The ampersand <code>&amp;</code> unary operator is used to get the
        adress of the variable <code>age</code> here, and <code>%p</code> is
        used in <code>printf</code> to print pointers. The previous program
        should output something like this :
      </p>

      <Prism style={a11yDark} language="text">
        {`$ gcc pointers.c -Wall -o pointers && ./pointers
Age is 21 and is stored at address 0x7ffee6ef688c`}
      </Prism>
      <p>
        The memory address where the variable <code>age</code> was stored is
        given by the operating system. It can be different every time that
        the program is executed, because the operating system is not allocating
        the same memory space every time for the program to run.
      </p>
      <Prism style={a11yDark} language="text">
        {`+----------------+-----------+
|      ...       |    ...    |
+----------------+-----------+
| 0x7ffee6ef688b |     ?     |
+----------------+-----------+
| 0x7ffee6ef688c |    21     |<----- That's where age was stored
+----------------+-----------+
| 0x7ffee6ef688d |     ?     |
+----------------+-----------+
|      ...       |    ...    |
+----------------+-----------+`}
      </Prism>

      <h2>Declaring a pointer</h2>

      <p>
        You can also declare pointers in C to store an adress of another
        variable or another pointer. The syntax is different than how you
        declare a variable. We need to use <code>*</code>.
      </p>

      <Prism
        showLineNumbers
        language="c"
        style={a11yDark}
        wrapLines={true}
        lineProps={(lineNumber) => {
          let style = { display: "block" };
          if (lineNumber === 5) {
            style.backgroundColor = "#555";
          }
          return { style };
        }}
      >
        {`#include <stdio.h>

int main(int argc, char **argv) {
    int age = 21;
    int *age_pointer = &age;

    printf("Age is %d and is stored at address %p\\n", age, age_pointer);
    return 0;
}`}
      </Prism>

      <p>
        On the same line <code>int *age_pointer = &amp;age;</code> we declared a
        new pointer of type <code>int</code> named <code>age_pointer</code>, and
        assigned the address of the <code>age</code> variable whit the{" "}
        <code>&amp;</code> unary operator.
      </p>

      <h2>Common usecases</h2>

      <h3>As a function parameter</h3>

      <p>
        C does not have references, and functions return values can only be one
        typed value for each function call. Pointer can be used to{" "}
        <u>change a variable declared outside of the function</u>.
      </p>

      <Prism showLineNumbers language="c" style={a11yDark}>
        {`#include <stdio.h>

void incrementByOne(int *v) {
    *v += 1;
}

int main(int argc, char **argv) {
    int age = 21;

    incrementByOne(&age);

    printf("Age : %d\\n", age);

    return 0;
}`}
      </Prism>
      <Prism style={a11yDark} language="text">
        {`$ gcc pointers.c -Wall -o pointers && ./pointers
Age : 22`}
      </Prism>

      <p>How does this work ?</p>

      <ul>
        <li>
          At line 3, a function <code>incrementByOne</code> that returns{" "}
          <code>void</code> is declared, it takes one argument, a pointer to an{" "}
          <code>int</code>.
        </li>
        <li>
          In the function body, <code>v</code> is <u>dereferenced</u> by using
          the <code>*</code> operator, meaning that operations on{" "}
          <code>*v</code> actually operate on the value of where the pointer is
          pointing to. <code>+= 1</code> meaning that we add one to it. Nothing
          is returned by the function.
        </li>
        <li>
          At line 8, the variable age is declared and the value 21 is stored.
        </li>
        <li>
          At line 10, we call the function <code>incrementByOne</code> passing
          it the address of the variable age using <code>&amp;</code>
        </li>
        <li>
          At line 12, <code>printf</code> is used to read the variable. The
          value of <code>age</code> is 22.
        </li>
      </ul>
      <p>
        We can pass multiple pointers as function parameters and use them, we
        are not limited to one.
      </p>

      <h3>Arrays in C are pointers too</h3>

      <p>If we consider the following program :</p>

      <Prism showLineNumbers language="c" style={a11yDark}>
        {`#include <stdio.h>

int main(int argc, char** argv) {
    int ages[3] = {21, 53, 72};

    printf("ages is at adress %p\\n", ages);
    printf("ages[0] is %d\\n", *ages);
    return 0;
}`}
      </Prism>
      <Prism style={a11yDark} language="text">
        {`$ gcc arrays.c -Wall -o arrays && ./arrays
ages is at adress 0x7ffee45c887c
ages[0] is 21`}
      </Prism>

      <p>
        The variable <code>age</code> is an <code>int</code> pointer, pointing
        to the first element of the array. Let&apos;s see clearly how array work
        in C with the following exemple :
      </p>

      <Prism showLineNumbers language="c" style={a11yDark}>
        {`#include <stdio.h>

int main(int argc, char** argv) {
    int ages[3] = {21, 53, 72};

    printf("sizeof(int) : %ld\\n", sizeof(int));
    printf("ages[0] is at address %p\\n", ages);
    printf("ages[1] is at address %p\\n", ages + 1);
    printf("ages[1] is %d\\n", ages[1]);
    printf("ages[1] is %d\\n", *(ages + 1));
    printf("ages[1] is %d\\n", 1[ages]);

    return 0;
}`}
      </Prism>
      <Prism style={a11yDark} language="text">
        {`$ gcc arrays.c -Wall -o arrays && ./arrays
sizeof(int) : 4
ages[0] is at address 0x7ffee6acd87c
ages[1] is at address 0x7ffee6acd880
ages[1] is 53
ages[1] is 53
ages[1] is 53`}
      </Prism>

      <p>Line by line explanation :</p>

      <ul>
        <li>
          <code>sizeof(int) : 4</code> : the <code>sizeof</code> operator here
          returns the size, in bytes, of an <code>int</code> element in memory,
          in this case, 4 bytes.
        </li>
        <li>
          <code>ages[0] is at address 0x7ffee6acd87c</code> : <code>ages</code>{" "}
          is a pointer to the first element of the array.
        </li>
        <li>
          <code>ages[1] is at address 0x7ffee6acd880</code> :{" "}
          <code>ages[1]</code> is at address <code>ages + 1 * sizeof(int)</code>
        </li>
        <li>
          At line 9 and 10, both syntaxes return the same result. Writing{" "}
          <code>ages[1]</code> means in reality dereference the pointer at
          address <code>ages + 1</code>.
          <br />
          In arrays, <code>a[b]</code> is the same as <code>*(a + b)</code>,
          since <code>a</code> and <code>b</code> are added they can be swaped.
        </li>
        <li>
          Meaning that <code>index[array]</code> is correct C, as seen on line
          11.
        </li>
      </ul>

      <p>
        C arrays, when declared like this, are really simple, they are a place
        in the stack, and each element of the array follows each other.
        <br />A representation in memory would look like this :
      </p>

      <Prism language="text" style={a11yDark}>
        {`+--------------+-------------+
|0x7ffee6acd87c|             |    ^
+--------------+             |    |
|0x7ffee6acd87d|             |    |
+--------------+   (int)21   |    |  sizeof(int)
|0x7ffee6acd87e|             |    |
+--------------+             |    |
|0x7ffee6acd87f|             |    V
+--------------+-------------+
|0x7ffee6acd880|             |
+--------------+             |
|0x7ffee6acd881|             |
+--------------+   (int)53   |
|0x7ffee6acd882|             |
+--------------+             |
|0x7ffee6acd883|             |
+--------------+-------------+
|0x7ffee6acd884|             |
+--------------+             |
|0x7ffee6acd885|             |
+--------------+   (int)72   |
|0x7ffee6acd886|             |
+--------------+             |
|0x7ffee6acd887|             |
+--------------+-------------+`}
      </Prism>

      <p>
        In C , no matter the implementation, <code>sizeof(char)</code> is always
        1. If <code>ages</code> was declared using an array of <code>char</code>
        , like the following :
      </p>

      <Prism showLineNumbers language="c" style={a11yDark}>
        {`#include <stdio.h>

int main(int argc, char** argv) {
    char ages[3] = {21, 53, 72};

    printf("sizeof(char) : %ld\\n", sizeof(char));
    printf("ages[0] is at address %p\\n", ages);
    printf("ages[1] is at address %p\\n", ages + 1);
    printf("ages[1] is %d\\n", ages[1]);
    printf("ages[1] is %d\\n", *(ages + 1));
    printf("ages[1] is %d\\n", 1[ages]);

    return 0;
}`}
      </Prism>
      <Prism style={a11yDark} language="text">
        {`$ gcc arrays.c -Wall -o arrays && ./arrays
sizeof(char) : 1
ages[0] is at address 0x7ffee15e686d
ages[1] is at address 0x7ffee15e686e
ages[1] is 53
ages[1] is 53
ages[1] is 53`}
      </Prism>

      <p>
        The pointer here is incremented by 1, <code>char</code> being always of
        size 1.
      </p>

      <Prism style={a11yDark} language="text">
        {`+--------------+----------+ ^
|0x7ffee15e686d| (char)21 | | sizeof(char) is always 1
+--------------+----------+ v
|0x7ffee15e686e| (char)53 |
+--------------+----------+
|0x7ffee15e686f| (char)72 |
+--------------+----------+`}
      </Prism>

      <p>
        Strings does not exist in C, they are in fact <u>arrays of char</u>.
        When declared, the value returned is a pointer to the first element of
        the array. A null character <code>\0</code> is the last element of the
        array of the array :
      </p>

      <Prism
        showLineNumbers
        language="c"
        style={a11yDark}
        wrapLines={true}
        lineProps={(lineNumber) => {
          let style = { display: "block" };
          if (lineNumber === 5) {
            style.backgroundColor = "#555";
          }
          return { style };
        }}
      >
        {`#include <stdio.h>

int main(int argc, char** argv) {
    char *text = "This is a string";
    char *text2 = "This is \\0 a string";

    printf("%s\\n", text);
    printf("%s\\n", text2);

    return 0;
}`}
      </Prism>

      <p>🏗 WIP</p>
    </Layout>
  );
};

export default Pointers;
