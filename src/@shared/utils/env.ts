const isProd = process.env.NODE_ENV === 'production';
const isLocal = process.env.NEXT_PUBLIC_ENV === 'local';
export const operationEnv = isProd ? 'production' : isLocal ? 'local' : 'dev';
