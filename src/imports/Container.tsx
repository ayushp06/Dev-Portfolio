import clsx from "clsx";
type Background5HelperProps = {
  additionalClassNames?: string;
};

function Background5Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Background5HelperProps>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("css-grtgjx", additionalClassNames)}>
      {children}
    </div>
  );
}

function OverlayShadow() {
  return <div className="bg-[rgba(255,255,255,0)] css-emgsdr left-[7px] shadow-[-5px_0px_0px_2px_#1ca4f9] size-[25px] top-[2px]" data-name="Overlay+Shadow" />;
}

function Background() {
  return (
    <div className="bg-[#31b4ff] css-5aehki size-[30px]" data-name="Background">
      <OverlayShadow />
    </div>
  );
}

function OverlayShadow1() {
  return <div className="bg-[rgba(255,255,255,0)] css-91er4h left-[7px] shadow-[-5px_0px_0px_2px_#1ca4f9] size-[25px] top-[2px]" data-name="Overlay+Shadow" />;
}

function Background1() {
  return (
    <div className="bg-[#31b4ff] css-3bmyh0 size-[30px]" data-name="Background">
      <OverlayShadow1 />
    </div>
  );
}

function OverlayShadow2() {
  return <div className="bg-[rgba(255,255,255,0)] css-btfiux left-[7px] shadow-[-5px_0px_0px_2px_#1ca4f9] size-[25px] top-[2px]" data-name="Overlay+Shadow" />;
}

function Background2() {
  return (
    <div className="bg-[#31b4ff] css-4iidto size-[30px]" data-name="Background">
      <OverlayShadow2 />
    </div>
  );
}

function OverlayShadow3() {
  return <div className="bg-[rgba(255,255,255,0)] css-u42l67 left-[7px] shadow-[-5px_0px_0px_2px_#1ca4f9] size-[25px] top-[2px]" data-name="Overlay+Shadow" />;
}

function Background3() {
  return (
    <div className="bg-[#31b4ff] css-dzfofm size-[30px]" data-name="Background">
      <OverlayShadow3 />
    </div>
  );
}

function OverlayShadow4() {
  return <div className="bg-[rgba(255,255,255,0)] css-xeqx4p left-[7px] shadow-[-5px_0px_0px_2px_#1ca4f9] size-[25px] top-[2px]" data-name="Overlay+Shadow" />;
}

function Background4() {
  return (
    <div className="bg-[#31b4ff] css-gum8pa size-[30px]" data-name="Background">
      <OverlayShadow4 />
    </div>
  );
}

function OverlayShadow5() {
  return <div className="bg-[rgba(255,255,255,0)] css-p9qxs7 left-[-46px] shadow-[21px_0px_0px_5px_rgba(0,0,0,0.15)] size-[190px] top-[-7.5px]" data-name="Overlay+Shadow" />;
}

function Border() {
  return <div className="border-[#161616] css-gkvak6 h-[5px] left-[79px] top-[102px] w-[10px]" data-name="Border" />;
}

function Background5() {
  return (
    <div className="bg-[#39beff] css-lep7rq css-nyt1mh left-1/2 size-[170px] top-1/2" data-name="Background">
      <Background5Helper additionalClassNames="left-[91.5px] size-[27px] top-[28.5px]">
        <div className="css-ayg824 css-lwrx1w">
          <Background />
        </div>
      </Background5Helper>
      <Background5Helper additionalClassNames="left-[67px] size-[18px] top-[21px]">
        <div className="css-ayg824 css-haiotk">
          <Background1 />
        </div>
      </Background5Helper>
      <Background5Helper additionalClassNames="left-[18.75px] size-[22.5px] top-[63.75px]">
        <div className="css-ayg824 css-wbo1hy">
          <Background2 />
        </div>
      </Background5Helper>
      <Background5Helper additionalClassNames="left-[104.3px] size-[35.4px] top-[119.3px]">
        <div className="css-ayg824 css-w2z3mg">
          <Background3 />
        </div>
      </Background5Helper>
      <Background5Helper additionalClassNames="left-[38.25px] size-[19.5px] top-[121.25px]">
        <div className="css-7ja1lm css-ayg824">
          <Background4 />
        </div>
      </Background5Helper>
      <OverlayShadow5 />
      <div className="bg-[#161616] css-orrgmn left-[59px] size-[12px] top-[85px]" data-name="Background" />
      <div className="bg-[#161616] css-orrgmn left-[101px] size-[12px] top-[85px]" data-name="Background" />
      <Border />
      <div className="bg-[#1ca4f9] css-jl4fnd left-[50px] size-[7.5px] top-[96px]" data-name="Background" />
      <div className="bg-[#1ca4f9] css-jl4fnd left-[115px] size-[7.5px] top-[95.5px]" data-name="Background" />
    </div>
  );
}

function Background6() {
  return <div className="bg-[#39beff] bottom-0 css-w49tsa h-[20px] right-[-15px] w-[55px]" data-name="Background" />;
}

function Background7() {
  return <div className="bg-[#fafcf7] css-w49tsa inset-0" data-name="Background" />;
}

function Background8() {
  return <div className="bg-[#39beff] bottom-[-4px] css-9nkc2o h-[4px] left-[4.3px] w-[15px]" data-name="Background" />;
}

function Container() {
  return (
    <div className="css-jfofm css-paq0kv h-[50px] pb-[23px] pl-[5px] pr-[10px] pt-[17px] w-[25px]" data-name="Container">
      <Background6 />
      <div className="bottom-[-20px] css-q4i36z css-xh9m87 h-[30px] left-1/2 w-[12px]" data-name="Gradient" />
      <Background7 />
      <div className="bg-[#151845] css-uld6v0 size-[10px]" data-name="Background+Border">
        <div aria-hidden="true" className="border-[#b8d2ec] css-m23a2h css-s3s1qq inset-0" />
      </div>
      <div className="bg-[rgba(200,200,200,0.6)] bottom-[-35px] css-4f712n h-[10px] left-[20%] right-[40%]" data-name="Overlay" />
      <div className="bg-[rgba(200,200,200,0.6)] bottom-[-35px] css-4f712n h-[10px] left-[40%] right-[20%]" data-name="Overlay" />
      <div className="bg-[rgba(200,200,200,0.6)] bottom-[-35px] css-4f712n css-8hhw9a left-1/2 size-[10px]" data-name="Overlay" />
      <div className="bg-[rgba(200,200,200,0.6)] bottom-[-35px] css-4f712n css-8hhw9a left-1/2 size-[10px]" data-name="Overlay" />
      <div className="bg-[rgba(200,200,200,0.6)] bottom-[-35px] css-4f712n css-8hhw9a left-1/2 size-[10px]" data-name="Overlay" />
      <div className="bg-[rgba(200,200,200,0.6)] bottom-[-35px] css-4f712n css-8hhw9a left-1/2 size-[10px]" data-name="Overlay" />
      <div className="bg-[rgba(200,200,200,0.6)] bottom-[-35px] css-4f712n css-8hhw9a left-1/2 size-[10px]" data-name="Overlay" />
      <Background8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="css-3zs5uo css-vxfvp6 h-[280px] left-[calc(50%-5.5px)] pb-[118px] pt-[112px] px-0 top-1/2 w-[291px]" data-name="Container">
      <Container />
    </div>
  );
}

function Text() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-4r7yxk css-8hpx75 css-8zrmd9 h-[13.875px] left-0 top-[6.94px] w-[67.982px]">
        <p className="css-8zr56v css-x78r3n">...LOADING...</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[53.84px] top-[103.73px] w-[4.683px]">
        <p className="css-8zr56v css-x78r3n">.</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[65.97px] top-[88.52px] w-[4.683px]">
        <p className="css-8zr56v css-x78r3n">.</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[79.77px] top-[74.69px] w-[4.683px]">
        <p className="css-8zr56v css-x78r3n">.</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[94.89px] top-[62.3px] w-[9.565px]">
        <p className="css-8zr56v css-x78r3n">L</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[115.14px] top-[49.64px] w-[12.219px]">
        <p className="css-8zr56v css-x78r3n">O</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[140px] top-[39.34px] w-[11.586px]">
        <p className="css-8zr56v css-x78r3n">A</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[165.83px] top-[33.73px] w-[11.655px]">
        <p className="css-8zr56v css-x78r3n">D</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[192.43px] top-[33.02px] w-[4.83px]">
        <p className="css-8zr56v css-x78r3n">I</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[212.1px] top-[34.98px] w-[12.67px]">
        <p className="css-8zr56v css-x78r3n">N</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[238.57px] top-[42.5px] w-[12.097px]">
        <p className="css-8zr56v css-x78r3n">G</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[262.63px] top-[54.58px] w-[4.683px]">
        <p className="css-8zr56v css-x78r3n">.</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[278.78px] top-[65.59px] w-[4.683px]">
        <p className="css-8zr56v css-x78r3n">.</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <div className="css-8zrmd9 css-iy47pr css-knulpn h-[20.813px] left-[293.56px] top-[78.29px] w-[4.683px]">
        <p className="css-8zr56v css-x78r3n">.</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="css-roiesn left-0 size-[370px] top-0" data-name="Text">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Svg() {
  return (
    <div className="css-wc1msa size-[370px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="loading"></g>
      </svg>
      <Text14 />
    </div>
  );
}

function Container2() {
  return (
    <div className="css-paq0kv css-wfwx8q inset-0" data-name="Container">
      <Svg />
    </div>
  );
}

export default function Container3() {
  return (
    <div className="css-vf8mzy size-full" data-name="Container">
      <Background5 />
      <Container1 />
      <Container2 />
    </div>
  );
}