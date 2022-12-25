import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { logErrorMessages } from '@vue/apollo-util';
import { SERVER_URL } from './config'

// 与 API 的 HTTP 连接
const httpLink = createHttpLink({
  // 你需要在这里使用绝对路径
  uri: SERVER_URL
});

onError((error) => {
  logErrorMessages(error);
});

// 缓存实现
const cache = new InMemoryCache();

// 创建 apollo 客户端
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
