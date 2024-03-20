import Head from "next/head"
import ShopHeader from "../../components/shop/ShopHeader"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import { Product, ProductCategory } from "../../types"
import ShopItems from "../../components/shop/ShopItems"

type Props = {
	products: Product[]
	categories: ProductCategory[]
}

const Shop = ({ categories, products }: Props) => {
	return(
		<>
			<Head>
				<title>{`${process.env.SITE} | Shop`}</title>
			</Head>
			<ShopHeader />
			<ShopItems 
				categories={categories}
				products={products}
			/>
		</>
	)
}

export default Shop

export const getServerSideProps = async () => {
	const collectionRef = query(collection(db, 'products'), where('active', '==', true), orderBy('lastUpdated', 'desc'))
	const collectionSnap = await getDocs(collectionRef)
	
	const products: Product[] = collectionSnap.docs.map((doc) => {
		const { lastUpdated, ...data } = doc.data()

		return ({ id: doc.id, ...data } as Product)
	})

  const docsRef = query(collection(db, 'product-categories'))
  const docsSnap = await getDocs(docsRef)

  const categories = docsSnap.docs.map(doc => ( { id: doc.id, ...doc.data() } ))

  return { props: { categories, products }}
}