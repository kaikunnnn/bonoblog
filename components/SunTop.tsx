
import Image from "next/image";

function SunTop() {
  return( 
    <div className="z-0 fixed  -bottom-48 -right-16" >
      <Image  src="/sun.svg" alt="sun image" width={260} height={260} objectFit="contain" />
    </div>
    
  );
}

export default SunTop;
