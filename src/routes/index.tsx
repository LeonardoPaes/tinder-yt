import {useAuth} from '../hooks/useAuth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const {user} = useAuth();
  return <>{user ? <AppRoutes /> : <AuthRoutes />}</>;
};

export default Routes;
