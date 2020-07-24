import React from 'react';
import ThemeContext from '../../context/ThemeContext';


const withTheme = WrappedComponent => {
    return function WithTheme(props) {
      return (
        <ThemeContext.Consumer>
          {ctx => {
              console.log(ctx)
              return (
                <WrappedComponent
                {...props}
                themeConfig={ctx.themeConfig}
                theme={ctx.theme}
                toggle={ctx.themeToggle}
              />
              )
          }
          
            
          }
        </ThemeContext.Consumer>
      );
    };
  };

export default withTheme;
