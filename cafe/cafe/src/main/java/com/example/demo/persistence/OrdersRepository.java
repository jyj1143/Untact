package com.example.demo.persistence;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.domain.Before_buy;
import com.example.demo.domain.Categories;
import com.example.demo.domain.Customer;
import com.example.demo.domain.Orders;
import com.example.demo.domain.Product;
import com.example.demo.domain.Product_option_info;



public interface OrdersRepository extends CrudRepository<Orders, Long>{

//	@Query("select o.product.pId, COUNT(o.product) from Orders o where o.customer=:customer group by o.product order by COUNT(o.product) DESC ")
//	@Query("select o.product.pId, COUNT(o.product) from Orders o where o.customer=:customer group by o.product order by COUNT(o.product) DESC")
//	public List<Integer[]> findbyBestMenu(Customer customer);

//	@Query("select o.product from Orders o where o.customer=:customer ")
//	public List<Product> findbyBestMenu(Customer customer);
//	
	@Query("select new com.example.demo.domain.Before_buy(o.product, COUNT(o.product)) from Orders o where o.customer=:customer group by o.product order by COUNT(o.product) DESC")
	public List<Before_buy> findbyBestMenu(Customer customer);
	
	@Query("select new com.example.demo.domain.Before_buy(o.product, COUNT(o.product)) from Orders o group by o.product order by COUNT(o.product) DESC ")
	public List<Before_buy> findbyBestseller();
}
