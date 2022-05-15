import React from "react";
import {Routes, Route} from 'react-router-dom';

import Cart from "./Cart";
import Gallery from "./Gallery";
import Home from "./Home";
import Petugas from "./Petugas";
import Kelas from "./Kelas";
import Siswa from "./Siswa";
import Spp from "./Spp";
import Transaksi from "./Transaksi";
import Cetak from "./Cetak";
import Logout from "./Logout";
import Pegawai from "./Pegawai";

const Main = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Petugas" element={<Petugas />} />
        <Route path="/Kelas" element={<Kelas />} />
        <Route path="/Siswa" element={<Siswa />} />
        <Route path="/Spp" element={<Spp />} />
        <Route path="/Transaksi" element={<Transaksi />} />
        <Route path="/Cetak" element={<Cetak />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Pegawai" element={<Pegawai />} />
        <Route path="/Logout" element={<Logout />} />
    </Routes>
    // <nav>
    //     <div class="logo">SPP </div>
    //     <ul>
    //         <li>
    //             <a class="active" href="/Home" element={<Home />}>Home</a>
    //         </li>
    //         <li>
    //             <a href="/Petugas" element={<Petugas />}>Petugas</a>
    //         </li>
    //         <li>
    //             <a href="/Kelas">Kelas</a>
    //         </li>
    //         <li>
    //             <a href="/Siswa">Siswa</a>
    //         </li>
    //         <li>
    //             <a href="/Spp">SPP</a>
    //         </li>
    //         <li>
    //             <a href="/Transaksi">Transaksi</a>
    //         </li>
    //         <li>
    //             <a href="/Cetak">Cetak</a>
    //         </li>
    //         <li>
    //             <a class="logout" href="/Logout">Logout</a>
    //         </li>
    //     </ul>
    // </nav>
)
export default Main;