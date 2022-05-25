import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import HeaderDashboard from "../components/headerDashboard.comp"

const Dashboard = () => {
    return (
        <div className="d-flex flex-fill flex-column">
            <HeaderDashboard/>
            <div className="d-flex container mt-4 flex-column">
                <div className="d-flex justify-content-center">
                    <button className="text-white py-2 px-4 border-0 rounded" style={{background:"#0099ff"}} data-bs-toggle="modal" data-bs-target="#newLink">
                        <FontAwesomeIcon icon={faPlus}/>
                        &nbsp;
                        Buat Link Baru
                    </button>
                </div>
                <div className="d-flex justify-content-center flex-fill my-5">
                    <p>Data link belum tersedia, buat baru <span className='text-primary' style={{cursor:"pointer"}}>sini</span> atau tekan tombol <b>buat link baru</b> di atas.</p>
                </div>
            </div>

            {/* MODALS */}
            <div className="modal fade" id="newLink" tabIndex="-1" aria-labelledby="newLinkLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="newLinkLabel">Buat Link Baru</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column my-2">
                            <input type="text" placeholder='Masukan nama' className='px-3 py-2 border rounded'/>
                        </div>
                        <div className="d-flex flex-column my-2">
                            <textarea cols="30" rows="5" placeholder='Masukan url yang di inginkan' className='px-3 py-2 border rounded'></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                        <button type="button" className="btn text-white" style={{background:"#0099ff"}}>Simpan</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editLink" tabIndex="-1" aria-labelledby="editLinkLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editLinkLabel">Buat Link Baru</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column my-2">
                            <input type="text" placeholder='Masukan nama' className='px-3 py-2 border rounded'/>
                        </div>
                        <div className="d-flex flex-column my-2">
                            <textarea cols="30" rows="5" placeholder='Masukan url yang di inginkan' className='px-3 py-2 border rounded'></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                        <button type="button" className="btn text-white" style={{background:"#0099ff"}}>Simpan</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteConfirm" tabIndex="-1" aria-labelledby="deleteConfirmLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteConfirmLabel">Buat Link Baru</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column my-2">
                            <input type="text" placeholder='Masukan nama' className='px-3 py-2 border rounded'/>
                        </div>
                        <div className="d-flex flex-column my-2">
                            <textarea cols="30" rows="5" placeholder='Masukan url yang di inginkan' className='px-3 py-2 border rounded'></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                        <button type="button" className="btn text-white" style={{background:"#0099ff"}}>Simpan</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard