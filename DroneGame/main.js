class Drone{
    constructor(inner,bomb){
        if (Drone.instance) {
            return Drone.instance;
        }
        
        this.x=0;
        this.y=0;
        this.facing="bottom"
        this.inner=document.querySelector(inner);
        this.bomb=document.querySelector(bomb);

        document.getElementById("left").addEventListener('click',()=>this.moveLeft());
        document.getElementById("right").addEventListener('click',()=>this.moveRight());
        document.getElementById("top").addEventListener('click',()=>this.moveTop());
        document.getElementById("bottom").addEventListener('click',()=>this.moveBottom());
        document.getElementById("fire").addEventListener('click',()=>this.fire());

        Drone.instance=this;
    }

    moveLeft(){
        if(this.x>0){
            this.x--;
            this.facing="left";
            this.inner.style.marginLeft=`${this.x*this.inner.clientWidth}px`;
        }
    }

    moveRight(){
        if(this.x<9){
            this.x++;
            this.facing="right";
            this.inner.style.marginLeft=`${this.x*this.inner.clientWidth}px`;
        }
    }

    moveBottom(){
        if(this.y<9){
            this.y++;
            this.facing="bottom";
            this.inner.style.marginTop=`${this.y*this.inner.clientHeight}px`;
        }
    }

    moveTop(){
        if(this.y>0){
            this.y--;
            this.facing="top";
            this.inner.style.marginTop=`${this.y*this.inner.clientHeight}px`;
        }
    }

    fire(){
        if((this.facing=='top' && this.y<2) || (this.facing=='bottom' && this.y>7) || (this.facing=='left' && this.x<2) || (this.facing=='right' && this.x>7))
            return;
        this.bomb.style.opacity=1;

        if(this.facing=='bottom'){
            this.bomb.style.marginTop=`${(this.y+2)*this.inner.clientHeight}px`
            this.bomb.style.marginLeft=`${(this.x)*this.inner.clientWidth}px`
        }else if(this.facing=='top'){
            this.bomb.style.marginTop=`${(this.y-2)*this.inner.clientHeight}px`
            this.bomb.style.marginLeft=`${(this.x)*this.inner.clientWidth}px`
        }else if(this.facing=='left'){
            this.bomb.style.marginLeft=`${(this.x-2)*this.inner.clientWidth}px`
            this.bomb.style.marginTop=`${(this.y)*this.inner.clientHeight}px`
        }else{
            this.bomb.style.marginLeft=`${(this.x+2)*this.inner.clientWidth}px`
            this.bomb.style.marginTop=`${(this.y)*this.inner.clientHeight}px`
        }
        setTimeout(()=>{
            this.bomb.style.opacity=0;
        },1000)
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    console.log("loaded");
    const drone=new Drone("#inner","#bomb");
})
