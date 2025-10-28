'use client';
import { useEffect, useState, type ComponentType } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export function withAuth<P extends object>(Component: ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //   if (localStorage.getItem('logged') === 'true') {
    //     setIsLoggedIn(true);
    //   } else {
    //     Swal.fire('Atenção', 'Você precisa estar logado!', 'warning')
    //       .then(() => router.push('/'));
    //   }
    // }, [router]);

    if (!isLoggedIn) return null;

    return <Component {...props} />;
  };
}
