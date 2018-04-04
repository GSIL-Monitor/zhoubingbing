package com.smart.mixdao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.stereotype.Service;
import org.apache.commons.dbcp.BasicDataSource;

/**
 * @author 陈雄华
 * @version 1.0
 */
@BaseService
@Service("scoreService")
public class ScoreService{

    private JdbcTemplate jdbcTemplate;
    
    
    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
       
    }

    public void addScore(String userName, int toAdd) {
        String sql = "UPDATE t_user u SET u.score = u.score + ? WHERE user_name =?";
        jdbcTemplate.update(sql, toAdd, userName);
        BasicDataSource basicDataSource = (BasicDataSource) jdbcTemplate.getDataSource();
        System.out.println("[scoreUserService.addScore]激活连接数量："+basicDataSource.getNumActive());
    }
}
