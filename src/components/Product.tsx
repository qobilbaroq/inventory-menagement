"use client"

import React, { useEffect, useState } from 'react'
import { getProduct, addProduct, deleteProduct, getCategory } from '@/lib/api'

export const Product = () => {
    const [ products, setProducts] = useState([])
    const [ categories, setCategories] = useState([])
    const [ form, setForm] = useState({
        name: '',
        category: "",
        stock: "",
        unit: "",
        price: "",
    })


    useEffect(() => {
        fetchProducts()
        fetchCategories()
    }, [])

    const fetchProducts = async () => {
        const data = await getProduct()
        setProducts(data)
    }

    const fetchCategories = async () => {
        const data = await getCategory()
        setCategories(data)
    }
    const handleDelete = async (id: number) => {
        await deleteProduct(id)
        fetchProducts()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await addProduct({
            ...form,
            stock: Number(form.stock),
            price: Number(form.price),
            createdAt: new Date().toISOString(),
        })
        setForm({ name: "", category: "", stock: "", unit: "", price: "",})
        fetchProducts()
    }

  return (
    <div className='flex flex-col gap-5 bg-white w-screen h-screen rounded-3xl p-6'>
        <div className='flex flex-col gap-10 '>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                    className='border p-3 rounded-xl outline-none'
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    placeholder="Name Product"/>
                <input
                    className='border p-3 rounded-xl outline-none'
                    name="category" 
                    value={form.category} 
                    onChange={handleChange} 
                    placeholder="category"/>
                <input
                    className='border p-3 rounded-xl outline-none'
                    name="stock" 
                    value={form.stock} 
                    onChange={handleChange} 
                    placeholder="stock"type="number"/>
                <input
                    className='border p-3 rounded-xl outline-none'
                    name="unit" 
                    value={form.unit} 
                    onChange={handleChange} 
                    placeholder="unit"/>
                <input
                    className='border p-3 rounded-xl outline-none'
                    name="price" 
                    value={form.price} 
                    onChange={handleChange} 
                    placeholder="price" 
                    type="number"/>
            <button 
                type='submit'
                className='border border-green-400 rounded-2xl p-2 hover:bg-green-500 hover:text-white text-lg font-semibold'>add</button>
            </form>
            <div className='flex justify-between'>
                {products.map((products: any) => (
                    <div 
                    className='flex flex-col justify-between py-5 px-4 w-64 h-52 border border-black/40 rounded-2xl'
                    key={products.id}>
                        <div className='flex justify-between'>
                            <div className='flex flex-col '>
                                <p className='text-xl font-semibold'>{products.name}</p>
                                <p className='text-md'>{products.price}</p>
                            </div>
                            <div className='flex gap-2'>
                                <p>{products.stock}</p>
                                <p>{products.unit}</p>
                            </div>
                        </div>
                        <p>{products.category}</p>
                        <button 
                            className='border border-red-400 rounded-2xl p-2 hover:bg-red-500 hover:text-white'
                            onClick={() => handleDelete(products.id)}
                            >hapus</button>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex justify-between'>
                {categories.map((category: any) => (
                    <div 
                    className='flex py-5 px-4 w-64 h-52 border border-black/40 rounded-2xl'
                    key={category.id}>
                        <p className='text-xl font-semibold'>{category.name}</p>
                        <button 
                            className='border border-red-400 rounded-2xl p-2 hover:bg-red-500 hover:text-white'
                            onClick={() => handleDelete(category.id)}
                            >hapus</button>
                    </div>
                ))}
            </div>
    </div>
  )
}
