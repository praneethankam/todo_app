const BASE_URL = import.meta.env.VITE_API_URL;

export const additemsToServer = async (task, date) => {
    try {
        const response = await fetch(`${BASE_URL}/api/item`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task, date }),
        });

        if (!response.ok) {
            throw new Error('Failed to add item');
        }

        const item = await response.json();
        return mapitems(item);
    } catch (error) {
        console.error('Error adding item:', error);
        return null;
    }
};

export const getitemsfromserver = async () => {
    const response = await fetch(`${BASE_URL}/api/item`);
    const items = await response.json();
    return items.map(mapitems);
};

export const markitemcomplete = async (id) => {
    const response = await fetch(`${BASE_URL}/api/item/${id}/completed`, {
        method: 'PUT'
    });
    const item = await response.json();
    return mapitems(item);
};

export const deleteitemfromserver = async (id) => {
    await fetch(`${BASE_URL}/api/item/${id}`, {
        method: 'DELETE'
    });

    return id;
};

const mapitems = (serveritem) => {
    return {
        id: serveritem._id,
        itemName: serveritem.task,
        itemDueDate: new Date(serveritem.date).toISOString().split('T')[0],
        completed: serveritem.completed
    };
};
