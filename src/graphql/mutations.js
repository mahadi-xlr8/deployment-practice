/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const triggerTest = /* GraphQL */ `
  mutation TriggerTest($input: testInput) {
    triggerTest(input: $input) {
      statusCode
      body
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHuman = /* GraphQL */ `
  mutation CreateHuman(
    $input: CreateHumanInput!
    $condition: ModelHumanConditionInput
  ) {
    createHuman(input: $input, condition: $condition) {
      name
      age
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHuman = /* GraphQL */ `
  mutation UpdateHuman(
    $input: UpdateHumanInput!
    $condition: ModelHumanConditionInput
  ) {
    updateHuman(input: $input, condition: $condition) {
      name
      age
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHuman = /* GraphQL */ `
  mutation DeleteHuman(
    $input: DeleteHumanInput!
    $condition: ModelHumanConditionInput
  ) {
    deleteHuman(input: $input, condition: $condition) {
      name
      age
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
