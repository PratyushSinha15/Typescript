
# What is typescript?

TypeScript is a programming language developed and maintained by Microsoft. 
It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

## Where/How does typescript code run?
    Typescript code never runs in your browser. Your browser can only understand javascript. 
    Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)
    Typescript is something that compiles down to javascript
    When typescript is compiled down to javascript, you get type checking (similar to C++). If there is an error, the conversion to Javascript fails. 

## Typescript compiler
    tsc is the official typescript compiler that you can use to convert Typescript code into Javascript
    There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are - 
    esbuild
    swc

## Install tsc/typescript globally
    npm install -g typescript

## Initialize an empty Node.js project with typescript

    mkdir node-app
    cd node-app
    npm init -y
    npx tsc --init

### Create a a.ts file
    const x: number = 1;
    console.log(x);

    Compile the ts file to js file
    tsc -b
