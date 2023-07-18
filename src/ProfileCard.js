//this ({title, handle })is the equivalent of writing line 9 and 5,6 known as destructuring
function ProfileCard({ title, handle, image, description }) {
    // const title = props.title;
    // const handle = props.handle;

    //the above can be simplified to the below
    // const { title, handle } = props;

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="personal digital assistant logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>

                <div className="content">{description}</div>
            </div>
        </div>
    );
}

export default ProfileCard;
