require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { avatar: @user.avatar, email: @user.email, first_name: @user.first_name, gender: @user.gender, last_name: @user.last_name, login_name: @user.login_name, login_password: @user.login_password, phone_number: @user.phone_number, repo_id: @user.repo_id, user_id: @user.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { avatar: @user.avatar, email: @user.email, first_name: @user.first_name, gender: @user.gender, last_name: @user.last_name, login_name: @user.login_name, login_password: @user.login_password, phone_number: @user.phone_number, repo_id: @user.repo_id, user_id: @user.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete user_url(@user), as: :json
    end

    assert_response 204
  end
end
