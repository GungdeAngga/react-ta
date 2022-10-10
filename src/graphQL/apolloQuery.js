import { gql } from "@apollo/client";

export const GET_BALANCE = gql`
query MyQuery {
  table_account_balance_by_pk(id: 1) {
    id
    uang
  }
}
`;