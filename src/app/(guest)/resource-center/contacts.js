'use client';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton, Link } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
    fontSize: 'larger',
    fontWeight: '700',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const contacts = [
  {
    name: 'The Kenya High Commission',
    department: 'Foreign Affairs',
    address: '45 Portland Pl, Marylebone, London W1B 1AS London United Kingdom',
    phone: '020 7636 2371',
    email1: 'immigration@kenyahighcom.org.uk',
    email2: 'info@kenyahighcom.org.uk',
    website: '',
  },
  {
    name: 'The Kenya High Commission',
    department: 'Foreign Affairs',
    address: '45 Portland Pl, Marylebone, London W1B 1AS London United Kingdom',
    phone: '020 7636 2371',
    email1: 'immigration@kenyahighcom.org.uk',
    email2: 'info@kenyahighcom.org.uk',
    website: '',
  },
  {
    name: 'The Kenya High Commission',
    department: 'Foreign Affairs',
    address: '45 Portland Pl, Marylebone, London W1B 1AS London United Kingdom',
    phone: '020 7636 2371',
    email1: 'immigration@kenyahighcom.org.uk',
    email2: 'info@kenyahighcom.org.uk',
    website: '',
  },
];

function ContactRow({ contact }) {
  return (
    <StyledTableRow>
      <StyledTableCell>
        {contact.name}
        {contact.department}
      </StyledTableCell>
      <StyledTableCell>{contact.address}</StyledTableCell>
      <StyledTableCell>{contact.phone}</StyledTableCell>
      <StyledTableCell>
        {contact.email1}
        {contact.email2}
      </StyledTableCell>
      <StyledTableCell>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
        <Link href="#">
          <OpenInNewIcon />
        </Link>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default function Contacts() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Physical Address</StyledTableCell>
            <StyledTableCell>Phone No.</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((row, idx) => (
            <ContactRow key={idx} contact={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
