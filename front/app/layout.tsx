'use client';
import '../styles/globals.css';
import HeaderLayout from '../components/HeaderLayout';
import FooterLayout from '../components/FooterLayout';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <HeaderLayout />
          <div className="container">{children}</div>
          <FooterLayout />
        </body>
      </Provider>
    </html>
  );
}
