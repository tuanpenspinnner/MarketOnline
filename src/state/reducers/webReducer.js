import * as types from "../actions";

const initState = {
  listProductPage: [],
  listProduct: [],
  detailProduct: [],
  listCategory: [],
  listBlog: [],
  detailBlog: [],
  listProductCart: [],
  listCommunity: [],
  detailCommunity: [],
  httpCodeSendComment: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, { type, payload }) {
  switch (type) {
    //Trang home
    case types.GET_PRODUCT_PAGE.REQUEST:
      return { ...state };
    case types.GET_PRODUCT_PAGE.SUCCESS:
      return { ...state, listProductPage: payload.data.responseData };
    case types.GET_PRODUCT.FAILURE:
      return { ...state };
    //Lấy danh sách category
    case types.GET_LIST_CATEGORY.REQUEST:
      return { ...state };
    case types.GET_LIST_CATEGORY.SUCCESS:
      return { ...state, listCategory: payload.data };
    case types.GET_LIST_CATEGORY.FAILURE:
      return { ...state };
    //Lấy danh sách sản phẩm
    case types.GET_LIST_PRODUCT.REQUEST:
      return { ...state };
    case types.GET_LIST_PRODUCT.SUCCESS:
      return { ...state, listProduct: payload.data };
    case types.GET_LIST_PRODUCT.FAILURE:
      return { ...state };
    //Chi tiết sản phẩm
    case types.GET_DETAIL_PRODUCT.REQUEST:
      return { ...state };
    case types.GET_DETAIL_PRODUCT.SUCCESS:
      return { ...state, detailProduct: payload.data };
    case types.GET_DETAIL_PRODUCT.FAILURE:
      return { ...state };
    //Send comment
    case types.SEND_PRODUCT_COMMENT.REQUEST:
      return { ...state };
    case types.SEND_PRODUCT_COMMENT.SUCCESS:
      return { ...state, httpCodeSendComment: payload.httpCode };
    case types.SEND_PRODUCT_COMMENT.FAILURE:
      return { ...state, httpCodeSendComment: payload.httpCode };
    //Danh sách blog
    case types.GET_LIST_BLOG.REQUEST:
      return { ...state };
    case types.GET_LIST_BLOG.SUCCESS:
      return { ...state, listBlog: payload.data };
    case types.GET_LIST_BLOG.FAILURE:
      return { ...state };
    //Chi tiết blog
    case types.GET_DETAIL_BLOG.REQUEST:
      return { ...state };
    case types.GET_DETAIL_BLOG.SUCCESS:
      return { ...state, detailBlog: payload.data };
    //Danh sách cộng đồng
    case types.GET_LIST_COMMUNITY.REQUEST:
      return { ...state };
    case types.GET_LIST_COMMUNITY.SUCCESS:
      return { ...state, listCommunity: payload.data };
    case types.GET_LIST_COMMUNITY.FAILURE:
      return { ...state };
    //Chi tiết cộng đồng
    case types.GET_DETAIL_COMMUNITY.REQUEST:
      return { ...state };
    case types.GET_DETAIL_COMMUNITY.SUCCESS:
      return { ...state, detailCommunity: payload.data };
    case types.GET_DETAIL_COMMUNITY.FAILURE:
      return { ...state };
    //Thêm giỏ hàng
    case types.SET_PRODUCT_CART.SUCCESS:
      return { ...state, listProductCart: payload.data };

    default:
      return state;
  }
}
