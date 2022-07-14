import React, { useContext } from "react"
import Head from "next/head"
import Link from "next/link"
import { Store } from "../utils/Store"

const Layout = ({ title, children }) => {
  const { state } = useContext(Store)
  const { cart } = state

  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Next-tailwind-webshop` : "Next-tailwind-webshop"}
        </title>
        <meta name="description" content="Ecommerce Website" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 px-4 items-center justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">Next-tailwind-webshop</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto px-4 mt-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright &copy; 2022 NTW Webshop</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
