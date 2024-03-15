export async function loginUser(username, password) {
  try {
    //Mengirim request untuk login ke server
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token); //Simpan token ke dalam localStorage
      return { success: true };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.message || "Login failed" };
    }
  } catch (error) {
    console.error("Error:", error); //Tampilkan pesan kesalahan jika terjadi error
    return { success: false, error: "An error occurred while logging in" };
  }
}

export async function checkToken(token) {
  try {
    //Lakukan pengecekan token di API menggunakan fetch
    const response = await fetch("https://dummyjson.com/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.ok;
  } catch (error) {
    console.error("Error checking token:", error);
    return false;
  }
}
