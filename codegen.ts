import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://rickandmortyapi.com/graphql',
  documents: 'src/**',
  generates: {
    'src/common/graphql/types/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;