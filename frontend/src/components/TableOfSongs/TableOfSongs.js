import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const columns = [
    {
        field: "id",
        headerName: "ID",
        width: 170,
    },
    {
        field: "musician",
        headerName: "Исполнитель",
        width: 170,
    },
    {
        field: "song",
        headerName: "Песня",
        width: 200,
    },
    {
        field: "genre",
        headerName: "Жанр",
        width: 150,
    },
    {
        field: "year",
        headerName: "Год",
        width: 100,
    },
];

export default function TableOfSongs({ songs }) {
    const [rowSize, setRowSize] = useState(5);

    const rows = songs.map((song) => ({
        id: song.id,
        musician: song.musician.musician,
        song: song.song,
        genre: song.genre.genre,
        year: song.year,
    }));

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={rowSize}
                rowsPerPageOptions={[rowSize]}
            />
            <button onClick={() => setRowSize(5)}>5</button>
            <button onClick={() => setRowSize(10)}>10</button>
            <button onClick={() => setRowSize(25)}>25</button>
            <button onClick={() => setRowSize(50)}>50</button>
        </div>
    );
}