function clickBack(){
  window.history.back();
}
function clickNext(){
  window.history.next();
}



export default function Pager(){
  return <div className='pager'>
    <button className="btn text-white component"><i class="bi bi-arrow-left" onClick={clickBack}></i><span></span></button>
    <button className="btn text-white component"><i class="bi bi-arrow-right" onClick={clickNext}></i></button>
  </div>
}