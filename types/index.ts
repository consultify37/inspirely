export type Condition = {
  condition: string
  description: string
}

export type Faq = {
  question: string
  answear: string
}

export type Slide = { 
  id?: string
  link: string 
  image: File | string 
  file: null | { fileName: string, fileId: string } 
}

export type Category = {
  category: string
  description: string
  image: { 
    file: { fileName: string, fileId: string } 
    image: string 
  } | null
  id?: string
}

export type ArticleCategory = {
  category: string
  id: string
}

export type Program = {
  id: string
  bulletPoints: string[]
  categorie: string
  title: string
  text1: string
  text2: string
  suma: string
  descriere: string
  title2: string
  title3: string
  suma2: string
  descriere3: string
  conditions: Condition[]
  faqs: Faq[]
  imaginePrincipala: { 
    file: { fileName: string, fileId: string } 
    image: string 
  }
  backgroundImage: { 
    file: { fileName: string, fileId: string } 
    image: string 
  }
}

export type Faq2 = {
  id: number,
  intrebari:string,
  raspuns: string,
}

export type User = {
  isCreating: string
  id: string
  name: string
  email: string
  role: string
  roles: string[]
  inactive: boolean
  profilePic?: { 
    file: { fileName: string, fileId: string } 
    image: string 
  }
}

export type Product = {
  active: boolean
  featured: boolean
  id?: string
  name: string
  price: number
  oldPrice: number | null
  description: string
  description2: string
  description3: string
  category: string
  image: { 
    file: { fileName: string, fileId: string } 
    image: string 
  }
  reasons: string[]
  faqs: Faq[]
  title3: string
  createdAt: Date
  onSale: boolean
  file: { 
    file: { fileName: string, fileId: string } 
    url: string 
  }
}

export type FileExtended = File | { file: { fileName: string, fileId: string }, image: string } | null

export type Article = {
  title: string
  id: string
  mainImage: any
  description: string
  featured: boolean
  active: boolean
  images: any[]
  content: string
  formattedContent: string
  duration: string
  author: string
  authorDescription: string
  category: string
  keywords: string[]
  createdAt: Date
  lastUpdated: Date
  formattedCreatedAt?: string
}