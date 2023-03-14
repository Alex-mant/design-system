# React Custom Modal

A simple and reusable Button component for REACT

![](https://raw.githubusercontent.com/Alex-mant/design-system/master/Button/src/assets/buttonModels.jpg?raw=true)

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install @alexandre_m/design-system_button --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add @alexandre_m/design-system_button
```
#### dependencies:
    styled-components: ^5.3.5
    
#### devDependencies
    @types/react: ^18.0.28,
    @types/styled-components: ^5.1.26,
    css-loader: 6.7.3,
    react-dom: ^18.2.0,
    style-loader: 3.3.2,
    typescript: ^4.9.5

## Configuration
### You can call the button as a usual component
in progress
### Here is the plugin code 
in progress

### Type of props: 
```ts
  interface IStyledProps {
    display?: string,
    background?: string,
    color?: string,
    hoverColor?: string,
    hoverBackground?: string, 
    disabled?: boolean,
    iconSide?: string,
    fontFamily?: string,
    fontSize?: string,
    fontStyle?: string,
    fontWeight?: number,
    lineHeight?: string,
    border?: string,
    padding?: string,
  }
  interface IProps {
    text: string,
    options?: {
      display?: string,
      background?: string,
      color?: string,
      hoverColor?: string,
      hoverBackground?: string, 
      disabled?: boolean,
      iconSide?: string,
      fontFamily?: string,
      fontSize?: string,
      fontStyle?: string,
      fontWeight?: number,
      lineHeight?: string,
      border?: string,
      padding?: string,
      //For the following parameters, don't put them in the tag
      icon?: string,
      iconAltText?: string,
    },
  }
```

### Style:
  in progress


## License

Copyright (c) 2022 Lych Inc. and individual contributors. Licensed under ISC license, see [LICENSE](LICENSE) for the full license.