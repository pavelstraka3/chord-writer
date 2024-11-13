"use server";

export const updateSong = async (id: string, data: any) => {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/songs/${id}`, {
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
    const response = await fetch(`${process.env.SERVER_URL}/songs`, {
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
