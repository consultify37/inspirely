import { useEffect, useState } from 'react'
import AdminLayout from '../../../components/admin-nav/AdminLayout'
import Header from '../../../components/admin/blog/Header'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../../firebase'
import { Article } from '../../../types'
import ArticlesTable from '../../../components/admin/blog/ArticlesTable'
import { formatDate } from '../../../utils/formatDate'

const Blog = () => {
  const [articles, setArticles] = useState< Article[] >([])

  const fetchArticles = async () => {
    const collectionRef = query(collection(db, 'articles'), orderBy('lastUpdated', 'desc'))
    const collectionSnap = await getDocs(collectionRef)
    
    const articles: Article[] = collectionSnap.docs.map((doc) => (
      { id: doc.id, formattedCreatedAt: formatDate(new Date(doc.data().createdAt.seconds*1000)), ...doc.data() } as Article
    ))
    
    setArticles(articles)
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <AdminLayout>
      <Header />

      <ArticlesTable 
        articles={articles}
        setArticles={setArticles}
      />
    </AdminLayout>
  )
}

export default Blog