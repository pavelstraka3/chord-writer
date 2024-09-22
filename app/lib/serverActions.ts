"use server";

export const updateSong = async (id: string, data: any) => {
  try {
    const response = await fetch(`http://localhost:3000/songs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (e) {
    return e;
  }
};

export const createSong = async (data: any) => {
  try {
    const response = await fetch(`http://localhost:3000/songs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (e) {
    return e;
  }
}
