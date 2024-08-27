import React, { useEffect } from 'react';
import { fetchUserData } from '../features/application/applicationSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Card from './Card/Card';


const Home = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
 
    <div className='home'>
      <Card>
      <div>
  
  {data ? (
    <div>
      <h5>User Data:</h5>
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  ) : (
    <div>No user data found.</div>
  )}
</div>
      </Card>
    </div>
  );
};

export default Home;