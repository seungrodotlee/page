const isDev = process.env.NODE_ENV === 'development';
const isLocal = process.env.NEXT_PUBLIC_ENV === 'local';
export const operationEnv = isLocal ? 'local' : isDev ? 'dev' : 'production';
