import { logout } from '@/actions/auth';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = ({logout}) => {
    const navigate = useNavigate();
    useEffect(() => {
        logout();
        navigate('/auth/signin/individual');
    }, []);
  return (
    <div>Logout</div>
  )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
    user: state.auth.user,
  });
  
  export default connect(mapStateToProps, { logout })(Logout);