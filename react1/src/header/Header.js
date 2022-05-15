import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import Main from '../pages/Main';
import './headerStyle.css';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className='logo'>SPP</div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Petugas">Petugas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Siswa">Siswa</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Kelas">Kelas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Spp">Spp</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Transaksi">Transaksi</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Cetak">Cetak</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Gallery">Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Cart">Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Pegawai">Pegawai</NavLink>
                    </li>
                    <li>
                        <NavLink className="logout" to="/Logout">Logout</NavLink>
                    </li>
                </ul>
            </nav>
            // <div>
            //     <NavLink to="/">Home</NavLink>
            //     <NavLink to="/Petugas">Petugas</NavLink>
            //     <NavLink to="/Siswa">Siswa</NavLink>
            //     <NavLink to="/Kelas">Kelas</NavLink>
            //     <NavLink to="/Spp">Spp</NavLink>
            //     <NavLink to="/Transaksi">Transaksi</NavLink>
            //     <NavLink to="/Cetak">Cetak</NavLink>
            //     <NavLink to="/Logout">Logout</NavLink>
            //     <Main />
            // </div>
        );
    }   
}

export default Header;