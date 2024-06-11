import styled from "styled-components";

const Table = styled.table`
  width: -webkit-fill-available;
`

const Thead = styled.thead`
  display: block;
  position: sticky;
  top: 0;
  z-index: 10;

  tr {
    border-top: 1px solid #cee1ff;
    border-bottom: 1px solid #cee1ff;
    display: flex;
    justify-content: stretch;
    align-items: center;
  }
  th {
    color: #214a88;
    text-align: center;
    padding: .75em 0;
    width: -webkit-fill-available;

    &:first-child {
      text-align: left;
      width: 17.5%;
    }
  }
`

const Tbody = styled.tbody`
  display: block;

  tr {
    display: flex;
    border-bottom: 1px solid #cee1ff;
    justify-content: stretch;
    align-items: center;
  }

  td {
    color: #002358;
    text-align: center;
    padding: .875em 0;
    width: 100%;

    &:first-child {
      width: 17.5%;
      text-align: center;
    }
  }
`

const Symbol = styled.span`
  color: #214a88;
  opacity: .6;
  margin-left: .5em;
`

const TableControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.125em 0;
`

const Icon = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  margin-right: .5em;

  @media screen and (min-width: 1024px) {
    height: 38px;
    width: 38px;
  }
`

const CoinInfo = styled.div`
  display: flex;
  align-items: center;
`

const Search = styled.div`
  align-items: center;
  display: flex;
`

const Empty = styled.div`
  padding: 4em;
  text-align: center;
`
export default {
  Table,
  TableControls,
  Search,
  Thead,
  Tbody,
  Symbol,
  Icon,
  CoinInfo,
  Empty
}
