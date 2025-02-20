// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Identity {
    struct User {
        string name;
        string email;
        uint256 createdAt;
        bool isVerified;
    }

    mapping(address => User) public users;
    address[] public userAddresses;

    event UserRegistered(address indexed userAddress, string name, string email);
    event UserVerified(address indexed userAddress);

    modifier onlyRegistered() {
        require(bytes(users[msg.sender].name).length > 0, "User not registered");
        _;
    }

    function register(string memory _name, string memory _email) public {
        require(bytes(users[msg.sender].name).length == 0, "User already registered");

        users[msg.sender] = User({
            name: _name,
            email: _email,
            createdAt: block.timestamp,
            isVerified: false
        });

        userAddresses.push(msg.sender);

        emit UserRegistered(msg.sender, _name, _email);
    }

    function verifyUser(address _userAddress) public onlyRegistered {
        require(bytes(users[_userAddress].name).length > 0, "User not registered");
        require(!users[_userAddress].isVerified, "User already verified");

        users[_userAddress].isVerified = true;

        emit UserVerified(_userAddress);
    }

    function getUser(address _userAddress) public view returns (User memory) {
        return users[_userAddress];
    }

    function getAllUsers() public view returns (address[] memory) {
        return userAddresses;
    }
}
