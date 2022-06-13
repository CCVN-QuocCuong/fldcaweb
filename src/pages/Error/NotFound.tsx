import { useEffect } from 'react'
import AdminLayout from 'layouts/Admin'
import { useAppDispatch } from 'hooks'
import { clearErrorMessage } from 'store/actions/auth'

export default function NotFound(props) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearErrorMessage())
  }, [dispatch]);


  return (
    <AdminLayout>
      <h2 style={{ height: "400px", marginTop: "10px"}}>404...</h2>
    </AdminLayout >
  )
};

