# React Button Customizable

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
#### dependencies
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
#### Change the component style easily with the parameters.
#### /!\ The component waits for an object containing the parameters to be modified.
```js
  // Example of object
  const buttonParams = {
    color: "#FF4554",
    hoverColor: "#000",
  }

  const component = () => {
    return(
      <Button text={"Click Here"} options={buttonsParams}/>
    )
  }
```
#### You can find all the modifiable parameters in the "Type of props" section below in the "IStyledProps" interface !

### Type of props
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
    options?: IStyledProps & {
      icon?: string,
      iconAltText?: string,
    }
  }
```

## License

Copyright (c) 2022 Lych Inc. and individual contributors. Licensed under ISC license, see [LICENSE](LICENSE) for the full license.