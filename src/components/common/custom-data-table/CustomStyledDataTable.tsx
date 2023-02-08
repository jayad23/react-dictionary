import DataTable from 'react-data-table-component';
import { styled } from '@mui/material/styles';

const Styled = styled(DataTable)`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .rdt_TableBody {
  }

  .rdt_TableHeadRow {
    background-color: #f3f2f7;
    color: #6e6b7b;
    border-color: currentcolor #ebe9f1 #ebe9f1;
    border-top: 1px solid #ebe9f1;
    font-weight: 600;
    .rdt_TableCol_Sortable {
      text-transform: uppercase;
    }
  }
  .rdt_TableRow {
    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }
    min-height: 32px;
  }
  .rdt_TableCol {
    justify-content: center;
  }

  .rdt_TableCell {
    padding: '0px';
  }
  .rdt_TableCell:last-child {
    border-right: none;
  }
`;

const DataTableStyled = (props: any) => <Styled {...props} />;
export default DataTableStyled;
