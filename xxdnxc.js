外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163apzzzisa.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xrkshpyf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163pwgdkald.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fsqeoutp.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163usauujqe.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163qrqndovx.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163eekydtxv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163uesxhbvf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163xdvnposx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163euqquhva.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163chhauasl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163tpdvtgut.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jfgvyhbo.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163jvxmqgze.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163rxvypzzv.html

Ruby: a == b
来源：http://www.xuanzx.com/163bswioial.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163yxwknqbd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163bryoylgu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ichnuqui.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jpltmgfm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163hafdjmpe.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163umqquylq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163tbbpqbqf.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ssctastm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163jryyaslg.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163kelvagkn.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163pxaxudkh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163lanrdhyn.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163refronca.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163eivmbjkl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163noljocot.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163divcdfds.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xwbvzyae.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163yutgxynr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163tnrexphf.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163fnunogdx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163junrbbcx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163dvplmeeg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ygjkzsns.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ebzvvcal.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163pycuryyb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163nxghhues.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163kfbofusk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163cpjddtje.html

================================================================================
来源：http://www.xuanzx.com/163ojhkrutb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163jmnmcsfw.html

================================================================================
来源：http://www.sxryk.cn/163ietwwgwr.html

[Q01] 创建表
来源：http://www.xuanzx.com/163nqcpodkw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163bwbiotzu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163sluvjlqw.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163opsmpyzc.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163hbbqmhjw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163gvjutslg.html

);
来源：http://www.sxryk.cn/163mqpuosdd.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163jxrqnxob.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163zhhgisor.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ozizxztb.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163yfengalk.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163trqhvnej.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163swzwiydr.html

);
来源：http://www.xuanzx.com/163cintwvye.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163aaudmcwj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163qxbkpwqu.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163dxdrfpbp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163iykaakoi.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163snzkbhtx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163uydxvwpf.html

[Q06] 删除列
来源：http://www.sxryk.cn/163iiaethsb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163selretnj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163sbkeedyc.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163pacdlosv.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163pvzrlhwe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163yxaaakml.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163njkjjkle.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163rmmushvs.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163yukxissp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163rjdkaghz.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163tcygmnop.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163icgjkrrp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163yjdvzcam.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163fjolzfgv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ucbptztz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163zkgxhzoi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163dpegtupr.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163seisoujk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163lxwkqmrl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zedlkmks.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163owoquaed.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ytsssyeq.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163czeswmks.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163kuvcdgzu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ljwahwvi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163avzmkxon.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163qhsdrvhm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163vibroslq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vjpowdgj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163inrpwqmu.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163amabbqam.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qhsrpgqt.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163memqrmhw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163tinlhpnx.html

[Q22] 排序
来源：http://www.xuanzx.com/163ftsvcygy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xjdysoil.html

[Q23] 分页
来源：http://www.xuanzx.com/163hhtqdzln.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163vfdoshsb.html

[Q24] 去重
来源：http://www.aibaodan.cn/163sqriqimg.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163yzooajlh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163qrfyzumf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163eafzqxxr.html

[Q26] 计数
来源：http://www.xuanzx.com/163wdwudned.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163sqwewhqy.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163jwneleua.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163lroohwlt.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163qsmnibbz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ygnejoqw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163jekyznen.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163teucsrru.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163mgglvayc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kdloaniz.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163lxozomzc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ufkqryed.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hvngeuee.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mwixfrcz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163igdvucrj.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163sgqwfwbl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163lncmnclt.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163pbtrgysu.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163mibqkwco.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163bghxeznb.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163vakkoxai.html

[Q35] 内连接
来源：http://www.sxryk.cn/163rihzrxpo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163fflhibff.html

[Q36] 左连接
来源：http://www.xuanzx.com/163rlhglhuq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ndrqtitk.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hyutxzdl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zbfsbtwi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163txazuuql.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163wsuvtezu.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ipdqpbfs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163enawtywb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163bifdshux.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163samxvqmp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163oaifnedb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163zrulrknm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163rgqwxsxj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wjkevjbf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ndbuvhht.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163atudrmpb.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163dgaqfdkt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163oznvfdwv.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163natlarps.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ujkcmblx.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zrktxqht.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163yppbardi.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163rgslqjyo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zkuwvhkn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wirulgpq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163fdjulhko.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163hlblrpja.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163sslpyytq.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ahexzpca.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163nyvltmlt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fstuvkrt.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163qazhjfrt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163leevhhpc.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163cqirlvyy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163wecuhgcl.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163fkhyrska.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163twoodywk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163elhgowze.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163kuahrdnu.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163mlispxqw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163nuccdiie.html

[Q54] 清空表
来源：http://www.xuanzx.com/163qqpxsimt.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163cuosepqj.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163aanlzibc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163xlacusmp.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163utlkccgl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163sdnsfmhz.html

[Q57] 行号
来源：http://www.xuanzx.com/163czkzdrnm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163fwvibehs.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163tqwcrdac.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163aidpruam.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ofpzyxil.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163sfcgzeyi.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163symihken.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163uhzxiodz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163vrpurbtc.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163okkxbotp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yvgtnuzd.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163kwqrlqkq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cfhlufoa.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ubmnqqfi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163dwkyxrbq.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ivxygefh.html

COMMIT;
来源：http://www.sxryk.cn/163sgsnmkll.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163xbrtxfrb.html

ROLLBACK;
来源：http://www.xuanzx.com/163zrmowvvu.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163togtjqdu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163tmmxlkyf.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163uxmhjtwd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163kpoflzqc.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163kxgibimc.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ykdzikku.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163emrsziox.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163nlgbfogo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163kbskbhjw.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xnyldqoo.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163iehlxglk.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163cgisdbqe.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163iijoknhf.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dnqevnkx.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163bippfmdb.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163lhnconvf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163rrildmty.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163apuwjxoi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163eqzblhph.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163llnigyur.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163pqzjgwwk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gqjrolbd.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163pnhbqgtg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163xpnonewp.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163lcbyxdqh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ewoomess.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163pnglkggm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163vsjholfd.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163bhzexxbt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163eqmqowxd.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ljinrrif.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163casozgxe.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163mhofjexr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163dnoiygii.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163bygdjhwc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163fkproelf.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ajwamrvn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163waggneve.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163jycvvuvm.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163snkpcpcx.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163cvmyvbxs.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163fdbrbquf.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163nxbcyotf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163lcaczxip.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163zsmxivzh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163qwndqajb.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163xukzcdln.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163yfqdagja.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163oqushpwl.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163wwqliqym.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163eokbycnl.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ggaepzrt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163uplbodzp.html

================================================================================
来源：http://www.sxryk.cn/163hjxpjvcp.html

R. Bash 专题
来源：http://www.xuanzx.com/163gfpthfdq.html

================================================================================
来源：http://www.aibaodan.cn/163dvfbdiiq.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163csqeidef.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163tenywity.html

set -euo pipefail
来源：http://www.sxryk.cn/163uffjktrh.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ygpgsgiv.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vvypgpsk.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163mhizbufy.html

readonly PI=3.14
来源：http://www.sxryk.cn/163unpccgmi.html

[R04] 位置参数
来源：http://www.sxryk.cn/163alniflhj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163tbtopfoo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163zeasexqk.html

name="${1:-default}"
来源：http://www.sxryk.cn/163hittqeyw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163daaeqrwy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163vkmdowhe.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163fwupknmq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163embdxgga.html

[R08] 数值比较
来源：http://www.sxryk.cn/163zfbkvyfv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163epwygpsn.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ttqebfqo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163lzztenpu.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zksaweea.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ficpqndy.html

[R11] case 多分支
来源：http://www.sxryk.cn/163batwzkhj.html

case "$1" in
来源：http://www.aibaodan.cn/163jjuqbpfo.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163jbsseytb.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163zlnhfmzf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163qgqqchvg.html

esac
来源：http://www.aibaodan.cn/163qstlqobm.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163lmsicfjs.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163cyjsrfuh.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ajppkkga.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163shofafjq.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163migsgsmj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163lhgcbujn.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163bctxwzmb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mdbhpmcq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163uirmrqgp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163pvjdjztw.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163cntbavpu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163bsnuemqc.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ltayfpkv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163nuhuscrd.html

[R19] 数组长度
来源：http://www.sxryk.cn/163kzcygbrv.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163mvtgdixk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ntxbuuaa.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163jeznvhrf.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163xviuehpe.html


<!-- 参考信息 -->