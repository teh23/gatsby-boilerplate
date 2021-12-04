export default function (plop) {
  plop.setGenerator('Component', {
    description: 'Add component (without redux)',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name:'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{pascalCase name}}/index.tsx',
      templateFile: 'generators/components/index.tsx.hbs'
    },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/__tests__/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/components/__tests__/test.tsx.hbs'
      }]
  });

  plop.setGenerator('Component with redux', {
    description: 'Add component with redux & export type',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name:'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{pascalCase name}}/index.tsx',
      templateFile: 'generators/componentsRedux/index.tsx.hbs'
    },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{camelCase name}}Reducer.tsx',
        templateFile: 'generators/componentsRedux/reducer.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/__tests__/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/componentsRedux/__tests__/test.tsx.hbs'
      },
      {
        path: 'src/helpers/types/index.ts',
        pattern: /(\/\/ APPEND TYPE)/g,
        templateFile: 'generators/componentsRedux/type.hbs',
        type: 'modify',
      },
      {
        path: 'src/store.ts',
        pattern: /(\/\/ APPEND IMPORT)/g,
        template:
          'import {{camelCase name}}Reducer from \'./components/{{pascalCase name}}/{{camelCase name}}Reducer\'\n$1',
        type: 'modify',
      },
      {
        path: 'src/store.ts',
        pattern: /(\/\/ APPEND REDUCER)/g,
        template:
          '\t\t{{camelCase name}}: {{camelCase name}}Reducer,\n$1',
        type: 'modify',
      },
    ]
  });


  plop.setGenerator('Feature', {
    description: 'Add feature (without redux)',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Feature name:'
    },
    ],
    actions: [{
      type: 'add',
      path: 'src/features/{{pascalCase name}}/index.tsx',
      templateFile: 'generators/components/index.tsx.hbs'
    },
      {
        type: 'add',
        path: 'src/features/{{pascalCase name}}/__tests__/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/components/__tests__/test.tsx.hbs'
      }]
  });
  plop.setGenerator('Feature with redux', {
    description: 'Add feature with redux & export type',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Feature name:'
    }],
    actions: [{
      type: 'add',
      path: 'src/features/{{pascalCase name}}/index.tsx',
      templateFile: 'generators/componentsRedux/index.tsx.hbs'
    },
      {
        type: 'add',
        path: 'src/features/{{pascalCase name}}/{{camelCase name}}Reducer.tsx',
        templateFile: 'generators/componentsRedux/reducer.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/features/{{pascalCase name}}/__tests__/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/componentsRedux/__tests__/test.tsx.hbs'
      },
      {
        path: 'src/helpers/types/index.ts',
        pattern: /(\/\/ APPEND TYPE)/g,
        templateFile: 'generators/componentsRedux/type.hbs',
        type: 'modify',
      },
      {
        path: 'src/store.ts',
        pattern: /(\/\/ APPEND IMPORT)/g,
        template:
          'import {{camelCase name}}Reducer from \'./features/{{pascalCase name}}/{{camelCase name}}Reducer\'\n$1',
        type: 'modify',
      },
      {
        path: 'src/store.ts',
        pattern: /(\/\/ APPEND REDUCER)/g,
        template:
          '\t\t{{camelCase name}}: {{camelCase name}}Reducer,\n$1',
        type: 'modify',
      },
    ]
  });

  plop.setGenerator('Page', {
    description: 'Add page',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name:'
    },
      {
        type: 'input',
        name: 'title',
        message: 'Title for page:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Meta description for page:'
      }
    ],
    actions: [{
      type: 'add',
      path: 'src/pages/{{lowerCase name}}.tsx',
      templateFile: 'generators/Page/index.tsx.hbs'
    }]
  });
};
