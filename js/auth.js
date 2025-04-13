document.addEventListener("DOMContentLoaded", () => {
    // Login form handling
    const loginForm = document.getElementById("login-form")
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
  
        // Simple validation
        if (!email || !password) {
          alert("Por favor, completa todos los campos")
          return
        }
  
        // Simulate login (in a real app, this would be an API call)
        console.log("Iniciando sesión con:", { email })
  
        // Redirect to dashboard after successful login
        setTimeout(() => {
          window.location.href = "dashboard.html"
        }, 1000)
      })
    }
  
    // Registration form handling
    const registerForm = document.getElementById("register-form")
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const confirmPassword = document.getElementById("confirm-password").value
  
        // Simple validation
        if (!name || !email || !password || !confirmPassword) {
          alert("Por favor, completa todos los campos")
          return
        }
  
        if (password !== confirmPassword) {
          alert("Las contraseñas no coinciden")
          return
        }
  
        // Simulate registration (in a real app, this would be an API call)
        console.log("Registrando usuario:", { name, email })
  
        // Redirect to dashboard after successful registration
        setTimeout(() => {
          window.location.href = "dashboard.html"
        }, 1000)
      })
    }
  })
  