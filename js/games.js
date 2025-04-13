document.addEventListener("DOMContentLoaded", () => {
    // Game attempts counter functionality
    const attemptsCount = document.getElementById("attempts-count")
    const nextAttemptTimer = document.getElementById("next-attempt-timer")
  
    // Get attempts from localStorage or set default
    let attempts = localStorage.getItem("gameAttempts")
    if (!attempts) {
      attempts = 5 // Default max attempts
      localStorage.setItem("gameAttempts", attempts)
    }
  
    // Update attempts display
    if (attemptsCount) {
      attemptsCount.textContent = attempts
    }
  
    // Timer functionality for attempt regeneration
    let nextAttemptTime = localStorage.getItem("nextAttemptTime")
    if (!nextAttemptTime) {
      // Set next attempt time to 30 minutes from now
      nextAttemptTime = Date.now() + 30 * 60 * 1000
      localStorage.setItem("nextAttemptTime", nextAttemptTime)
    }
  
    // Update timer display
    function updateTimer() {
      if (!nextAttemptTimer) return
  
      const now = Date.now()
      const timeLeft = Math.max(0, nextAttemptTime - now)
  
      if (timeLeft <= 0) {
        // Add one attempt when timer reaches zero
        attempts = Math.min(Number.parseInt(attempts) + 1, 5) // Max 5 attempts
        localStorage.setItem("gameAttempts", attempts)
  
        if (attemptsCount) {
          attemptsCount.textContent = attempts
        }
  
        // Reset timer for next attempt
        nextAttemptTime = Date.now() + 30 * 60 * 1000
        localStorage.setItem("nextAttemptTime", nextAttemptTime)
      }
  
      // Format time remaining
      const minutes = Math.floor(timeLeft / 60000)
      const seconds = Math.floor((timeLeft % 60000) / 1000)
      nextAttemptTimer.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`
    }
  
    // Update timer every second
    updateTimer()
    setInterval(updateTimer, 1000)
  
    // Add click event listeners to game buttons
    const gameButtons = document.querySelectorAll(".game-card .btn")
    gameButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Check if user has attempts left
        if (Number.parseInt(attempts) <= 0) {
          e.preventDefault()
          alert("No tienes intentos disponibles. Espera a que se regenere un intento.")
        } else {
          // Decrease attempts count when starting a game
          attempts = Number.parseInt(attempts) - 1
          localStorage.setItem("gameAttempts", attempts)
  
          if (attemptsCount) {
            attemptsCount.textContent = attempts
          }
        }
      })
    })
  })
  