外链999!wailian999！

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163csdaslud.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163icotjrwr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163icefahzn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163msakkqnu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xakernir.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163mwtqlvkq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163japjcvmn.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ntohwihb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163cdhfsiqv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163jztrvhmc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163phnrqiaz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163rkejxcpe.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163qywhxake.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163bfhpyndz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163cagstfwb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163kvhjaydd.html

================================================================================
来源：http://www.sxryk.cn/163jrvogsbb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163lxwdutcn.html

================================================================================
来源：http://www.xuanzx.com/163eoydjwqn.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ebtjgzgr.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163kccahxsi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ubltnncb.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163psldvvop.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163spdmhznb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163gyvlxhez.html

);
来源：http://www.sxryk.cn/163vtsxdght.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163pnbluamm.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163lwvdbmpw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gokhrjfb.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163hhzeqcrq.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163glpprgzy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163bjdwjsgk.html

);
来源：http://www.xuanzx.com/163pymmjpxv.html

[Q03] 增加列
来源：http://www.xuanzx.com/163tovuzann.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163fzmcbufb.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163aihqxuxl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163koviwyok.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rkywfrlo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163qjvyfpff.html

[Q06] 删除列
来源：http://www.sxryk.cn/163bdtesuje.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163apmiizjk.html

[Q07] 删除表
来源：http://www.sxryk.cn/163mmgpwuuc.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ecmmbhmz.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163cbupicnh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163yhobxppk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163qcfeuhmk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163aaetsrok.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163uijdpvrh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163snkimyxt.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163pxqgymyg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163lljekxmb.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163kkfonoxy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163mdymbril.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ydinmmsa.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163srjafytb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163nqubkdcw.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163zbbammvv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163yjajqpse.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163fnzamkdp.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163xucrrrsb.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163sfqlsilq.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163jdzgqidm.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163eulleesb.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163asybbdmu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ghbczrhz.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163eozvvicc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xawftkhv.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163clrpuhle.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ebqrkgde.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163exomhazi.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qkjlrqld.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163uljuvycb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163dfywjqdf.html

[Q22] 排序
来源：http://www.sxryk.cn/163ayeoykla.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163buhigamk.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ylpcmtgv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163krsluywu.html

[Q24] 去重
来源：http://www.aibaodan.cn/163mqavzbav.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163gaugaquh.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163bjtwsdlt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163usbrweoj.html

[Q26] 计数
来源：http://www.aibaodan.cn/163jflrrjdv.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163tihfnhmt.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163yvzbrqlx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163drwsdjgw.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163dscuvjnd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163qbpougfx.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163mnsyrfqk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163apyclnpw.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163aqusapdd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xztarzsf.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ssqzdugc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163puqzloum.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163cwxbmxsf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jgihzhhu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163masjnuli.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163hnhtpfvd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163khcvrtps.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163mnpuopxe.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163humripzh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163bnuoichm.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163sjujzhqu.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dqaioykh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163fmnbskdf.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163bqhgikgy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dcqumyzv.html

[Q37] 右连接
来源：http://www.sxryk.cn/163qlldiveg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163xkiavhne.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jvcchppu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163aupmvzyu.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163fiatymyj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ezskqcnh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163luxfgfai.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163fiviivvi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163bywpuwfn.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pyfjdcds.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ewsmkudf.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mnxqecep.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163dbaqaqdq.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163dbhjbulb.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163rcznsmzc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163pbdzhaxx.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163tkftfynq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ointgezn.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163vqtzcmiw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163pebklvzq.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163zylnywpt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ynxsiwaj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163lzejkkjw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ajwbvppn.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163srrcsjrj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jmrtugue.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163bipgslmj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ufhfpxof.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163xipaoxte.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163jwtyksuc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163lphivzao.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163dzapojfg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163afugvgix.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jbbldimv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163msgtycfm.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163lpthdxon.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163umdfeqpn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163fzadmoml.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163toqtbvye.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163kpbtbdaq.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xlzhdlia.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163artpmnup.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163fmckqzkf.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163khuweqaf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kfgxxfih.html

[Q57] 行号
来源：http://www.xuanzx.com/163pxzxuuiu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163dijbjeph.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ggiwgtik.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xjxdjlpi.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163tcbhzogc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163kgzlvpcj.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tufvtzhq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163nskggpas.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163jkxgzula.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163cwmmswhf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163fjiexqeq.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fypvzdsc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163suolsepj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ltszdqzd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163uuvoehfs.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163rlluktot.html

COMMIT;
来源：http://www.aibaodan.cn/163libbuvrr.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163jiiqvyxu.html

ROLLBACK;
来源：http://www.sxryk.cn/163wqjfwozr.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163usmlnims.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nikqiejp.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163izgyeyqe.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jiuvoowu.html

[Q68] 保存点
来源：http://www.xuanzx.com/163uidjndwa.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163dnotzugj.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163npswztpf.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163knfxjzhm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vworftss.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zcjugivp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163iqbmgcnx.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zckzsbbv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xzpdcvut.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163vumaykiq.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163lkqzllgj.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163jxvdpicp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163aqgntqyf.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163izgjribo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163zcsfwswk.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163nlyurrde.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163qtixdwjj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163topxzhpa.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163yzvtzopz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pnapthtc.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163scyjefcg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163jktkvqhs.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163auhacebr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qemcqypi.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163zejutxte.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163iydeonfb.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gfdnlbau.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163tztesbgh.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163hvoolqmo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ftmhqure.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ttbvrtqp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163pnrrsmiv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163webqfndq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163jfadxezn.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163pjslcjht.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163xpoiqlgw.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zsncimto.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ssdeuoga.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163nfwfshcc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163pdpxcnkx.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163mnxhnuwe.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163vtqkavkh.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163vsrtljei.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163juebywsl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163fgauovtp.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163tqokucat.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163dujydhaj.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163guwplpii.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163gpfroprd.html

================================================================================
来源：http://www.sxryk.cn/163adpnabwq.html

R. Bash 专题
来源：http://www.sxryk.cn/163yoknvkqf.html

================================================================================
来源：http://www.sxryk.cn/163ozpuwrbl.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163rmojsnpn.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163cacwmltb.html

set -euo pipefail
来源：http://www.sxryk.cn/163saeglwci.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163thgtlesz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163uzoqrpiv.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zdrhsgal.html

readonly PI=3.14
来源：http://www.xuanzx.com/163xpcoxiex.html

[R04] 位置参数
来源：http://www.sxryk.cn/163lultjbkz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163umwxhbru.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163atxqeehc.html

name="${1:-default}"
来源：http://www.sxryk.cn/163xfyqsyvb.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163zraeowah.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ntgkrcaw.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163mclmplhm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163iqawysjk.html

[R08] 数值比较
来源：http://www.xuanzx.com/163wprpdxxj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163bzshqguk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163rvrpxrtt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163fuogqzsn.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163tmunitbn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163onmsqtfj.html

[R11] case 多分支
来源：http://www.xuanzx.com/163hfgsvije.html

case "$1" in
来源：http://www.xuanzx.com/163udzhyabz.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163aiorkapy.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ylxwxaxm.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163nfdjzres.html

esac
来源：http://www.sxryk.cn/163leywpqzo.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163zdnucsxs.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163bhsurpim.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163lojxhrwe.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163kuveclzj.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163duxiomcp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163bsqareyo.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163uqwjhnvs.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163gzrvzazq.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163iosstymm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fttfpxlu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163wzbgsqex.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ijfjwcbt.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163pkftstce.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163rpuosvec.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163effjldcc.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163rgctknbz.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ynpgjlhm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163niwbewoz.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163tpqsflqi.html

echo "${#s}"
来源：http://www.sxryk.cn/163fxysxfya.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163djywzjaw.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qhkeaemq.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163hpakkyfp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163fvilgxdy.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163jffokmeg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qfpfdeaa.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163hqjraomt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163orwxxigg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ixcwkxde.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163unsmtiws.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gojviljz.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163tmpyfijn.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ebzkgdvi.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163euaynovp.html

[R29] 定义函数
来源：http://www.xuanzx.com/163hzbakmng.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dnkpbuld.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163qxqdbzrd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163hvswbsup.html

[R31] 局部变量
来源：http://www.xuanzx.com/163botuwowr.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xtufauqc.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163jakvhqzr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ziwvmmqj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lwkocnrl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163wqqcobxc.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163upljtndq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rkleqbwq.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163vwtbvlbn.html


<!-- 参考信息 -->