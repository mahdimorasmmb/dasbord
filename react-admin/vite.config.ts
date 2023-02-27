import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode, }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(),tsconfigPaths()],
    // server:{
    //   proxy:{
    //     [`${env.VITE_REACT_APP_BASE_URL}/general/user`] :env.VITE_REACT_APP_BASE_URL
    //   }
    // }
  }
})

