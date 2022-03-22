import React from 'react';
import "./Yearwise.css";
import Image from "../Image/Image";

function Yearwise(props) {
	return (
		<div>

			<div class="button_gallery">
				<div class='social-links'>
					<div class='year-btn flex-center' id="year">
						<div></div>
						<span>2018</span>
					</div>

					<div class='year-btn flex-center' id="year">
						<span>2019</span>
					</div>

					<div class='year-btn flex-center' id="year">
						<span>2020</span>
					</div>
				</div>
			</div>

			<div class="gallery">

				<div class="row">

					<div class="gallery__column">
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="Portrait by Oladimeji Odunsi" class="gallery__image" />	</figure>
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/VLPLo-GtrIE/300x300" alt="Portrait by Alex Perez" class="gallery__image" />
							</figure>
					</div>

					<div class="gallery__column">
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/AR7aumwKr2s/300x300" alt="Portrait by Noah Buscher" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/dnL6ZIpht2s/300x300" alt="Portrait by Ivana Cajina" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/tV_1sC603zA/300x500" alt="Portrait by Sam Burriss" class="gallery__image" />
							</figure>
					</div>

					<div class="gallery__column">
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/Xm9-vA_bhm0/300x500" alt="Portrait by Mari Lezhava" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/NTjSR3zYpsY/300x300" alt="Portrait by Ethan Haddox" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/2JH8d3ChNec/300x300" alt="Portrait by Amir Geshani" class="gallery__image" />
							</figure>
					</div>

					<div class="gallery__column">
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/FQhLLehm4dk/300x300" alt="Portrait by Guilian Fremaux" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/OQd9zONSx7s/300x300" alt="Portrait by Jasmin Chew" class="gallery__image" />
							</figure>
							<figure class="gallery__thumb">
								<img src="https://source.unsplash.com/XZkEhowjx8k/300x500" alt="Portrait by Dima DallAcqua" class="gallery__image" />
							</figure>

					</div>
				</div>
			</div >
		</div>
	);
}

export default Yearwise;