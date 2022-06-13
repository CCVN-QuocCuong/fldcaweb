import { Link } from "react-router-dom"

export default function Breadcrumb(props) {
    const { currentRoute } = props

    return (
        <h4 className="admin-breadcum">
            {currentRoute === "business-list" && (
                <div>
                    <Link to="/">Home</Link> / <Link to="/businesses">Business</Link> / <strong>Manage Business</strong>
                </div>
            )}
            {currentRoute === "business-edit" && (
                <div>
                    <Link to="/">Home</Link> / <Link to="/businesses">Business</Link> / <strong>Edit Business</strong>
                </div>
            )}
            {currentRoute === "business-add" && (
                <div>
                    <Link to="/">Home</Link> / <Link to="/businesses">Business</Link> / <strong>Add Business</strong>
                </div>
            )}
            {currentRoute === "business-reset-password" && (
                <div>
                    <Link to="/">Home</Link> / <Link to="/businesses">Business</Link> / <strong>Reset Password</strong>
                </div>
            )}
            {currentRoute === "business-users" && (
                <div>
                    <Link to="/">Home</Link> / <Link to="/businesses">Business</Link> / <strong>Users Management</strong>
                </div>
            )}
        </h4>
    );
}