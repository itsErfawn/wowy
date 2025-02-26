"use client"
import pushAlert from '@/libs/alert/Alert';
import React, { useState } from 'react';

function AdminCategoryForm({ setCategories, categories }) {
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        parent: '',
        description: '',
        image: null
    });
    const [isLoad, setIsLoad] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image" && files && files.length > 0) {
            setFormData(prevState => ({
                ...prevState,
                [name]: files[0]
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        for (var key in formData) {
            if (key !== 'parent' && !formData[key]) {
                pushAlert({ title: "خطا", text: "تمامی موارد الزامی است", icon: "error", confirmButtonText: "فهمیدم" });
                return;
            }
        }
        const formBody = new FormData();
        for (var key in formData) {
            formBody.append(key, formData[key]);
        }
        setIsLoad(true);
        const res = await fetch('/api/categories', {
            method: "POST",
            body: formBody
        });
        const data = await res.json();
        if (data.error) {
            pushAlert({ title: "خطا", text: data.error, icon: "error", confirmButtonText: "فهمیدم" });
            setIsLoad(false);
            return;
        }
        setFormData({
            name: '',
            slug: '',
            parent: '',
            description: '',
            image: null
        });
        pushAlert({ title: "موفق", text: data.success, icon: "success", confirmButtonText: "فهمیدم" });
        setIsLoad(false);
        const res2 = await fetch('/api/categories');
        const { categories: data2 } = await res2.json();
        setCategories(data2);
    };

    return (
        <div className="col-md-3">
            <form onSubmit={submitHandler}>
                <div className="mb-4">
                    <label htmlFor="product_name" className="form-label">نام</label>
                    <input type="text" name='name' value={formData.name || ''} onChange={handleChange} placeholder="اینجا تایپ کنید" className="form-control" id="product_name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="product_slug" className="form-label">نامک</label>
                    <input type="text" name='slug' value={formData.slug || ''} onChange={handleChange} placeholder="اینجا تایپ کنید" className="form-control" id="product_slug" />
                </div>
                <div className="mb-4">
                    <label className="form-label">والد</label>
                    <select className="form-select" name='parent' value={formData.parent || ''} onChange={handleChange}>
                        <option value={0}>بدون والد</option>
                        {categories.map(cat=>(
                            <option value={cat.id} key={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="form-label">توضیحات</label>
                    <textarea placeholder="اینجا تایپ کنید" name='description' value={formData.description || ''} onChange={handleChange} className="form-control"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="">تصویر</label>
                    <div className="input-upload">
                        <input className="form-control" onChange={handleChange} type="file" name='image' />
                    </div>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary">
                        {isLoad ? <span className="catLoaderBtn"></span> : "ایجاد دسته‌بندی"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminCategoryForm;
