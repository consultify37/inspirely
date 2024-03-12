import { collection, doc, documentId, getDoc, getDocs, or, query, where } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../firebase'
import { Product } from '../../../../types'
import { formatDate } from '../../../../utils/formatDate'
import AccountLayout from '../../../../components/AccountLayout'
import Link from 'next/link'
import ProductCard from '../../../../components/cont/ProductCard'
import ProductRow from '../../../../components/cont/ProductRow'

type Props = {
  id: string
  products: { product: Product, quantity: number, amount: number }[]
  createdAt: string
  totalPrice: number
}

const Order = ({ products, id, createdAt, totalPrice }: Props) => {
  return (
    <AccountLayout pathName='comenzi'>
      <div className='lg:ml-12 w-full'>
        <div className='flex flex-row justify-between lg:items-end lg:h-fit mt-6 lg:mt-0 w-full'>
          <h1 className='text-base lg:text-[20px] font-bold text-secondary'>Istoric comenzi</h1>
          <Link
            href='/cont/comenzi'
            className='text-base font-semibold text-blue-600 underline underline-offset-1'
          >
            înapoi la comenzi
          </Link>
        </div>

        <div className='w-full mt-6 hidden lg:block'>
          <div className='bg-[#EDF0FF] rounded-t-lg border-2 border-[#EDF0FF]'>
            <div className='p-6 pb-4'>
              <p className='text-[20px] font-bold text-secondary'>Detalii comanda {id}</p>
              <div className='flex flex-row items-center mt-2'>
                <p className='font-semibold text-[#04D200]'>confirmată</p>
                <p className='text-[18px] font-semibold text-secondary mx-2'>·</p>
                <p className='font-semibold text-secondary'>{createdAt}</p>
                <p className='text-[18px] font-semibold text-secondary mx-2'>·</p>
                <p className='font-semibold text-secondary'>total: { totalPrice } lei</p>
              </div>
            </div>
            <div className='bg-white h-[2px] w-full'></div>
          </div>

          <table className='w-full'>
            <thead>
              <tr className='bg-[#EDF0FF] border-2 border-[#EDF0FF]'>
                <th className='text-secondary font-semibold text-start pl-4 py-2'>produs</th>
                <th className='text-secondary font-semibold text-start'>cantitate</th>
                <th className='text-secondary font-semibold text-start'>subtotal</th>
                <th className='text-secondary font-semibold text-start'></th>
              </tr>
            </thead>
            <tbody>
              { products.map((product) => (
                <ProductRow 
                  key={product.product.id}
                  product={product}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className='lg:hidden w-full'>
          <div className='flex flex-col bg-[#EDF0FF] rounded-[12px] p-6 mt-6'>
            <p className='font-bold text-secondary'>Comanda { id }</p>
            <div className='flex flex-row items-center justify-between mt-2 w-full'>   
              <p className='font-semibold text-[#04D200]'>confirmată</p>
              <p className='font-semibold text-secondary'>{ createdAt }</p>
            </div>
            <div className='flex flex-row items-center justify-between mt-2 w-full'>   
              <p className='font-semibold text-secondary'>total</p>
              <p className='font-semibold text-secondary'>{ totalPrice } lei</p>
            </div>
          </div>

          <div className='w-full flex flex-col'>
            { products.map((product) => (
              <ProductCard 
                key={product.product.id}
                product={product}
              />
            )) }
          </div>
        </div>
      </div>
    </AccountLayout>
  )
}

export default Order

export const getServerSideProps = async (context: any) => {
  const id = context.params.id 
  const orderRef = doc(db, 'orders', id)
  const orderSnap = await getDoc(orderRef)

  if ( !orderSnap.exists() ) {
    return {
      notFound: true
    }
  }

  const createdAt = formatDate(new Date(orderSnap.data().createdAt.seconds*1000))

  const total = orderSnap.data().line_items.data.reduce((prev: any, curr: any) => (prev + curr.amount_total/100), 0)

  const productsIds: any[] = orderSnap.data().line_items.data.map((line_item: any) => line_item.price.product).slice(0, 30)

  const q = query(collection(db, 'products'), where(documentId(), 'in', productsIds))
  const productsSnap = await getDocs(q)

  const products: { product: Product, quantity: number, amount: number }[] = productsSnap.docs.map((doc) => {
		const { lastUpdated, ...data } = doc.data()
    const { quantity, amount_total} = orderSnap.data().line_items.data.find((line_item: any) => line_item.price.product == doc.id)

		return ({ product: { id: doc.id, ...data }, quantity, amount: amount_total/100 } as { product: Product, quantity: number, amount: number })
	})

  return { props: { products, id, createdAt, totalPrice: Math.round(total*100)/100 }}
}