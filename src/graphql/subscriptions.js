/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateHuman = /* GraphQL */ `
  subscription OnCreateHuman($filter: ModelSubscriptionHumanFilterInput) {
    onCreateHuman(filter: $filter) {
      name
      age
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateHuman = /* GraphQL */ `
  subscription OnUpdateHuman($filter: ModelSubscriptionHumanFilterInput) {
    onUpdateHuman(filter: $filter) {
      name
      age
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteHuman = /* GraphQL */ `
  subscription OnDeleteHuman($filter: ModelSubscriptionHumanFilterInput) {
    onDeleteHuman(filter: $filter) {
      name
      age
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
