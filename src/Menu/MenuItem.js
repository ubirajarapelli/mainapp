const MenuItem = ({link, children, pathname}) => {

    return (
        <div onClick={() => navigateTo(link)}>
            {children}
        </div>
    );
}