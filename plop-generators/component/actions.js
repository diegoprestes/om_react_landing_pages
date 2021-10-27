module.exports = [
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/index.jsx',
    templateFile: 'plop-templates/component/component.hbs'
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/stories.jsx',
    templateFile: 'plop-templates/component/stories.hbs'
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/styles.js',
    templateFile: 'plop-templates/component/styles.hbs'
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.jsx',
    templateFile: 'plop-templates/component/test.hbs'
  }
];
