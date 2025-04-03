import { Fragment } from "react";
// import style from '../buttons/';

export default function HomePage() {
    let count = 4;
    return (
        <Fragment>
            <h1>Hello, Nishan Pradhan</h1>
            <p>WELCOME TO JUMANJI....... WE NEED YOU. WE WANT YOU!!!!!</p>

            <ChildComp count={count} greet={"Hello,"} name={"nishan"} />
            <div>
                <div class="grid-plane"></div>
                <div class="stars-container">
                    <div class="star-layer"></div>
                    <div class="star-layer"></div>
                    <div class="star-layer"></div>
                </div>
                <div class="checkbox-container">
                    <input class="holo-checkbox-input" id="holo-check" type="checkbox" />
                    <label class="holo-checkbox" for="holo-check">
                        <div class="holo-box">
                            <div class="holo-inner"></div>
                            <div class="scan-effect"></div>
                            <div class="holo-particles">
                                <div class="holo-particle"></div>
                                <div class="holo-particle"></div>
                                <div class="holo-particle"></div>
                                <div class="holo-particle"></div>
                                <div class="holo-particle"></div>
                                <div class="holo-particle"></div>
                            </div>

                            <div class="activation-rings">
                                <div class="activation-ring"></div>
                                <div class="activation-ring"></div>
                                <div class="activation-ring"></div>
                            </div>

                            <div class="cube-transform">
                                <div class="cube-face"></div>
                                <div class="cube-face"></div>
                                <div class="cube-face"></div>
                                <div class="cube-face"></div>
                                <div class="cube-face"></div>
                                <div class="cube-face"></div>
                            </div>
                        </div>

                        <div class="corner-accent"></div>
                        <div class="corner-accent"></div>
                        <div class="corner-accent"></div>
                        <div class="corner-accent"></div>

                        <div class="holo-glow"></div>
                    </label>

                    <div class="status-text"></div>

                    <div class="frequency-spectrum">
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                        <div class="frequency-bar"></div>
                    </div>

                    <div class="data-chips">
                        <div class="data-chip">STATUS: IDLE [0x4F]</div>
                        <div class="data-chip">QUANTUM VERIFY: 82.6%</div>
                        <div class="data-chip">SYNCH: PENDING</div>
                        <div class="data-chip">0x7A2C8B9F</div>
                    </div>
                </div>

            </div>
            <SecondChildComp />
            <SubChildComp count={count} />
        </Fragment>
    );
}

export const ChildComp = ({ count, greet, ...rest }) => {
    return (
        <>
            <div style={{ backgroundColor: "gray", border: "1px solid" }}>
                <p>Child Component</p>
                <div>{count}</div>
                <div>{greet}{rest.name}</div>
            </div>
        </>
    )
}

export const SecondChildComp = (props) => {
    return (
        <>
            <div style={{ backgroundColor: "InfoBackground" }}>
                <h1>Second Child Component</h1>

            </div>
        </>
    )
}


export const SubChildComp = ({ count }) => {
    return (
        <>
            <div>
                <h1>SubChild Comp</h1>
                {count}
            </div>
        </>
    )
}