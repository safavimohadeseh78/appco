const cssModules = import.meta.glob('@/rtl/assets/css/**/*.css', { as: 'raw' })

for (const path in cssModules) {
    // بارگذاری دینامیک هر فایل
    void cssModules[path]().then((content) => {
        const style = document.createElement('style')
        style.innerHTML = content
        document.head.appendChild(style)
    })
}
