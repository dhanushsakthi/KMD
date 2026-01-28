import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const totalAmount = getCartTotal();

    const handlePayment = () => {
        const options = {
            key: "rzp_live_S3EmcTGtBdQizx",
            amount: totalAmount * 100, // Amount in paise
            currency: "INR",
            name: "KMD Food Products",
            description: "Cart Checkout",
            image: "https://placeholder.com/logo.png", // Replace with actual logo if available
            handler: function (response) {
                alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
                clearCart();
                navigate('/'); // Redirect to home or success page
            },
            prefill: {
                name: "Customer Name",
                email: "customer@example.com",
                contact: "9999999999"
            },
            theme: {
                color: "#2563EB"
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            alert("Payment Failed: " + response.error.description);
        });
        rzp1.open();
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <ShoppingBag className="mx-auto h-24 w-24 text-gray-300" />
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">Your cart is empty</h2>
                    <p className="mt-2 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
                    <Link
                        to="/products"
                        className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
                    {/* Cart Items */}
                    <div className="lg:col-span-8">
                        <div className="bg-white shadow sm:rounded-lg overflow-hidden">
                            <ul className="divide-y divide-gray-200">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="p-6 sm:flex sm:items-center">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            ) : (
                                                <div className="h-full w-full bg-gray-100 flex items-center justify-center text-2xl">
                                                    {item.icon}
                                                </div>
                                            )}
                                        </div>

                                        <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                                            <div className="flex justify-between">
                                                <h3 className="text-lg font-medium text-gray-900">
                                                    <Link to={`/product/${item.id}`} className="hover:text-blue-600">
                                                        {item.name}
                                                    </Link>
                                                </h3>
                                                <p className="ml-4 text-lg font-medium text-gray-900">
                                                    ₹{item.retailPrice || item.price || 0}
                                                </p>
                                            </div>

                                            <p className="mt-1 text-sm text-gray-500">{item.weight}</p>

                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="flex items-center border rounded-lg">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-lg"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </button>
                                                    <span className="mx-2 w-8 text-center text-gray-900">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-lg"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-sm font-medium text-red-600 hover:text-red-500 flex items-center"
                                                >
                                                    <Trash2 className="h-4 w-4 mr-1" />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-500 font-medium">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Continue Shopping
                            </Link>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-4 mt-8 lg:mt-0">
                        <div className="bg-white shadow sm:rounded-lg overflow-hidden p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

                            <div className="flow-root">
                                <dl className="-my-4 divide-y divide-gray-200">
                                    <div className="py-4 flex items-center justify-between">
                                        <dt className="text-gray-600">Subtotal</dt>
                                        <dd className="font-medium text-gray-900">₹{totalAmount}</dd>
                                    </div>
                                    <div className="py-4 flex items-center justify-between">
                                        <dt className="text-gray-600">Shipping</dt>
                                        <dd className="font-medium text-green-600">Free</dd>
                                    </div>
                                    <div className="py-4 flex items-center justify-between border-t border-gray-200">
                                        <dt className="text-base font-bold text-gray-900">Order Total</dt>
                                        <dd className="text-xl font-bold text-gray-900">₹{totalAmount}</dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="mt-6">
                                <button
                                    onClick={handlePayment}
                                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                >
                                    Checkout with Razorpay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
