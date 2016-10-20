export type Config = {
    rows: number,
    columns: number,
    items: Array<Item>
    codes: Array<string>
}

export type Item = {
    name: string,
    imageUrl: string,
    price: number,
    stock: number,
    position: [number, number],
}

export function getConfig(): Config {
    return {
        rows: 4,
        columns: 3,
        items: [
            { name: 'Milk', price: 2, stock: 3, position: [1, 1], imageUrl: "images/can.png" },
            { name: 'Tea', price: 1, stock: 3, position: [2, 2], imageUrl: "images/can.png" }
        ],
        codes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    }
};