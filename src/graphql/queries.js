/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHuman = /* GraphQL */ `
  query GetHuman($id: ID!) {
    getHuman(id: $id) {
      name
      age
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listHumans = /* GraphQL */ `
  query ListHumans(
    $filter: ModelHumanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHumans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        age
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
