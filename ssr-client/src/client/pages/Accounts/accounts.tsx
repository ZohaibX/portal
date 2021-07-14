import * as React from 'react';
import Helmet from 'react-helmet';
import navbar from '../Portal/navbar';
import Form from 'react-bootstrap/Form'
const Navbar = navbar.component ;
import '../../css/main.css'
import _ from 'lodash';
import {fetchAllAccountRequests} from '../../Store/actions/index'
import Pagination from './pagination';
import { connect } from 'react-redux';
import useRequest from '../../hooks/use-request';

// font-awesome 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import up from '@fortawesome/fontawesome-free-solid/faCaretDown'
import down from '@fortawesome/fontawesome-free-solid/faCaretUp'

// css
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchField from './searchField';
import { FetchAllAccounts } from '../../Store/reducers/fetch-all-accounts';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    borderRadius: "20px"
  },
  tableHeading: {
    // width: 650,
    fontWeight: "bold",
    fontSize: "20px" ,
    fontFamily: "Sans-Serif" ,
    paddingLeft: "23px" ,
  },
  tableHeading2: {
    fontWeight: "bold",
    fontSize: "20px" ,
    fontFamily: "Sans-Serif" ,
    paddingLeft: "23px" ,
    paddingTop: "25px"
  },
  pagination: {
    backgroundColor: "white",
    paddingLeft: "25%"
  } ,
  tableCell: {
    paddingRight: "90px"
  }
});




const head = () => (
  <Helmet>
    <title>{`Approve Your Account`}</title>
    <link rel="shortcut icon" href="https://project-1-bucket.s3.amazonaws.com/logo-1.png" />
    {/* // this is how we will make our title dynamic */}
    <meta property='og:title' content='Approve Your Account'></meta>
    <meta property="og:image" content="https://project-1-bucket.s3.amazonaws.com/logo-1.png" />
    {/* // this title is for SEO -- to identify this page title  */}
    {/* // we normally have to add 4 required meta tags and we can add more optional meta tags for SEO */}
    {/* //? https://ogp.me/ */}
  </Helmet>
);

const Profile = (props: any) => {
  const classes = useStyles();

  React.useEffect(() => {
    // props.fetchAllAccountRequests() calling it in loadData 
  }, [])

  const { doRequest, error } = useRequest(
    '/api/accounts/create-account',
    { },
    'post')


  // searching 
  const [searchField , changeSearchField] = React.useState("")

  const rows = props.fetchAllAccounts.fetchAllAccounts.map((item: any) => item.email);
  

  // filtering starts
  const searchedEmails = searchField ? 
                        rows.filter((row: any) => row.toLowerCase().startsWith(searchField.toLowerCase())):
                        rows ;
  // filtering ends

  // Sorting  Starts
  const [sort , changeSort] = React.useState(false);
  const sortRows = () => {
    return sort ? searchedEmails.sort((a: any,b: any) => a.localeCompare(b)): searchedEmails // will even compare letters with different styles
  }
  const sortedRows = sortRows()
  
  // for sorting array of objects -- we use lodash
  // Sorting Ends 
  
  // pagination STARTS
  const [rowsInSinglePage, setRowsInSinglePage] = React.useState(3);
  const [currentPage , updateCurrentPage] = React.useState(1)

  const paginationProps = { singlePageRows: rowsInSinglePage , rowsLength: sortedRows.length ,
    updateCurrentPage, currentPage , rows: sortedRows} // pagination-props

  // paginating actual rows -- start
  const paginate = (emails: string[]) => {
    const index = (currentPage - 1) * rowsInSinglePage;
    return _(emails).slice(index).take(rowsInSinglePage).value();
  }
  
  const paginatedEmails = paginate(sortedRows) ;
  // paginating actual rows -- end
  // now some work of pagination is in pagination component

  const searchFieldProps = {rows , searchField , changeSearchField , updateCurrentPage} ;
  const handleSortIcon = () => {
    updateCurrentPage(1)
    changeSort(sort? false: true)
  }


  
  const approve = (email: string) => {
    
    

    if(error) alert(error)
    else {
      doRequest({ redirectPath: '' , email }) // piece of body sending from here
    };
  }  

  return (
    <div>
      {head() }

      <Navbar />

      <div className=" profile-page-background accounts">
          <h3 className="text-center py-5 font-weight-bold">
            Approve Your Account Yourself - Sign In
          </h3>

          <div className="accounts-table">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell  className={classes.tableHeading2}>
                    Emails &nbsp; &nbsp; &nbsp;<span className='sort-btn' onClick={handleSortIcon}> <FontAwesomeIcon className="sort-btn-icon" icon={sort? up:down}/> </span>
                    </TableCell>
                  <TableCell  className={classes.tableHeading} ><SearchField.component {...searchFieldProps} /></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedEmails.map((email: any) => (
                  <TableRow key={email}>
                    <TableCell component="th" scope="row">
                      {email}
                    </TableCell>
                    <TableCell align="right" className={classes.tableCell} >
                    <div className="form__group">
                      <button className="btn btn-green  form-btn" onClick={() => approve(email)}>
                        Approve <span className="accounts-table__btn-decoration"> &rarr; </span>
                      </button>
                    </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
          </div>
          <Pagination.component {...paginationProps}  />

          <div className="alert alert-primary alert-manual" role="alert">
              
              After Approving Your Account - You may Go and Sign In by &nbsp;
              <Link to="/portal" className="alert-manual-link" >
                 clicking here
            </Link>
          </div>
      </div>
    </div>
  )
}

const mapStateToProps: any = ( fetchAllAccounts: any) => {
  
  return { fetchAllAccounts };
}

export default {
  component: connect(mapStateToProps)(Profile) ,
  loadData: ({ dispatch }: any) => dispatch(fetchAllAccountRequests()),
}