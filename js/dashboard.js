document.addEventListener("DOMContentLoaded", () => {
    // Sidebar toggle functionality
    const sidebarToggle = document.getElementById("sidebar-toggle")
    const sidebar = document.querySelector(".sidebar")
  
    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed")
  
        // On mobile, toggle open class instead
        if (window.innerWidth <= 768) {
          sidebar.classList.toggle("open")
        }
      })
    }
  
    // Theme toggle functionality
    const themeToggle = document.getElementById("theme-toggle")
    const toggleIcon = themeToggle?.querySelector(".toggle-icon")
  
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark")
      if (toggleIcon) toggleIcon.textContent = "☀️"
    } else {
      document.documentElement.classList.remove("dark")
      if (toggleIcon) toggleIcon.textContent = "🌙"
    }
  
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark")
  
        // Update toggle icon
        if (toggleIcon) {
          toggleIcon.textContent = isDark ? "☀️" : "🌙"
        }
  
        // Save preference
        localStorage.setItem("theme", isDark ? "dark" : "light")
      })
    }
  
    // Logout functionality
    const logoutBtn = document.getElementById("logout-btn")
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        // In a real app, this would call an API to invalidate the session
        console.log("Cerrando sesión...")
  
        // Redirect to login page
        setTimeout(() => {
          window.location.href = "../index.html"
        }, 500)
      })
    }
  
    // Set user name if available
    const userNameElement = document.getElementById("user-name")
    if (userNameElement) {
      // In a real app, this would come from the user's session
      const userName = localStorage.getItem("userName") || "Usuario"
      userNameElement.textContent = userName
    }
  })
  