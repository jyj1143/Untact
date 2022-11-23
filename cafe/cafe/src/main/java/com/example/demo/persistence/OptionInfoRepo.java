
package com.example.demo.persistence;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.domain.Basket;
import com.example.demo.domain.Customer;
import com.example.demo.domain.Product;
import com.example.demo.domain.Product_option_info;


public interface OptionInfoRepo extends CrudRepository<Product_option_info, Integer> {
	public List<Product_option_info> findByProduct(Product searchword);
	
	@Modifying
	@Query("select b from Product_option_info b where b.product=:product and b.size=:size and b.temp=:temp")
	public List<Product_option_info> findOptionbyinfos(Product product, int size, int temp); 
}


