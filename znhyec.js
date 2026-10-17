外链999!wailian999！

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163oluoxsgn.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163nszhslnl.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163gbfbyxtr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ecnrnfzi.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163kgaqrxjz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163nkrzrult.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163sywnurqm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163zbplfvnq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ngnozjyn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163njctkzoi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163wlfzautg.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ezgtfdxf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163dolsknpj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163gwfedsfo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163acubacrn.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163zhfpelmx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163fldfyrae.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163hnptswfx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ussgvzso.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163xxjlnajj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163cxershiz.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ghirdekx.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163gfhcynwy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163nbvpflin.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163hemcxtqr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ikclswyy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hcmzmbiw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163qhkcgmtd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163idzhkewo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163kfwkfjey.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163kosxurqy.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163sadiefmv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163hshfzpdg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qvqzrvfb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163oflgfsmx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163iefhbgyj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163kpkeaevl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pwgkaiqr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ngwrgkyn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163naramlpo.html

================================================================================
来源：http://www.sxryk.cn/163yabxitpr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163kthpzgyv.html

================================================================================
来源：http://www.xuanzx.com/163brkqletn.html

[Q01] 创建表
来源：http://www.sxryk.cn/163lbqdsndt.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163czjdweno.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ztpkugkq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163nqrlcqzn.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163xfzhkjoa.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163xqfnyamg.html

);
来源：http://www.aibaodan.cn/163zxibcors.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zhnyjori.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163kbqhtwsa.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jnmxpkaz.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163eimahxrp.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lhzfzeml.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zijwsxqp.html

);
来源：http://www.sxryk.cn/163vewzvkzx.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jqmipsfc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163excvbbku.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ngqihthx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163vzxksquc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163gsrwvnca.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163kkktdcbp.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ycncdrmc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163curxonwp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163vsexpvig.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163kwspnxwy.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ybckeciw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163oevjjvjv.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163osusqosa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163vwptmvnl.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163seniysmt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163phbdmtbb.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163jxngegrw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163cgwyqlcf.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163hwlzuerd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163qryhfwem.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163knmnzrdi.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163mslmunfv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163kgfgtpry.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ixosiffu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rrlbfagi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163kicfnfue.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163gehekdkv.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163kiblxdbq.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163drqnzhwi.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163cxxpwvbh.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163povclris.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163jsukjcop.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163xxqmscrf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163cnyunvdk.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163xfsdnwzn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163yaftkwxv.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163qqrwuipg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163gqqixwex.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163zwyqkxwb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163nzgqvuxf.html

[Q22] 排序
来源：http://www.sxryk.cn/163mdvutquo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163pjynbjdr.html

[Q23] 分页
来源：http://www.aibaodan.cn/163nahslopd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163vippnkcr.html

[Q24] 去重
来源：http://www.sxryk.cn/163rxqfhkti.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163awqndmdq.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163yycsvxah.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163kpmxjvec.html

[Q26] 计数
来源：http://www.aibaodan.cn/163yggwfdkh.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ztjpctll.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163mtqyxvoz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163coiqthpf.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163fwegdxkp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163fxdnzjer.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163nfjdexwc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163nnzguabs.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163uyqcwoxy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zosvfuff.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163povhnssz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ylnxwuym.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gpthycoc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fnbahjhg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163sowcbggx.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163gsskxwic.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163mggjyshq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jmqggerc.html

SELECT * FROM (
来源：http://www.xuanzx.com/163sxzxqszt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163lfydcjag.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163tarmrxsy.html

[Q35] 内连接
来源：http://www.xuanzx.com/163heoybgek.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wewhzasj.html

[Q36] 左连接
来源：http://www.xuanzx.com/163venmgowa.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163jtyfdzlv.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163zvkxivav.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jbsfzkod.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163sagsokxv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zxtligbb.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163okbeuztp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ndmctmyz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163twsuajmf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vgwiigay.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lcqnctiw.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163equbyuiz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gnjjmmfi.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163yckcsgkl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ckkkzmzq.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ldgljuyx.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163nsdhfhtd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163kamodxud.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163jpvtezwb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163djrsymdn.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ynfdtavm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163bkanrqhs.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lshuwjue.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hxydxmqt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163bvgveixw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163gtwummfw.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163yqmobhbs.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ccwtzgeg.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163kxispmlo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163miwhwbma.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fewhwftu.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163vzptoqis.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163akbubogf.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163artjlawk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163mwwzkmci.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163wbrszinm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163kckwusga.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163shosclao.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xjreawny.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163yvuvmwar.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163jlqpmdtr.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163nktnwfdj.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ppjlqlla.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163fsaxifye.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163nzjmclov.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163spansepg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163yttplrsc.html

[Q57] 行号
来源：http://www.sxryk.cn/163mhivkaxy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rfjhemjd.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163zydgohhl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tfzrkefv.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163priayrak.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xuiinoos.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163dmeojibf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163nqhmrmzb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163lptuficl.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163qnrjtkfc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163hfxjwncw.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163bstlroij.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163csfflfse.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163nzivrrew.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163vippiwcl.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ftvgifmk.html

COMMIT;
来源：http://www.aibaodan.cn/163rlcjbzpv.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163immpitto.html

ROLLBACK;
来源：http://www.xuanzx.com/163ehcraswh.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ggqxgvew.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163potbtika.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163qcpqvmin.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163fghqocco.html

[Q68] 保存点
来源：http://www.xuanzx.com/163sooepfgu.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ykbwlufy.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163nuwyzxjc.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163szmhnswl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163hyzwiqzp.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mcstynpr.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163gifbbcxu.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163sdwivkhi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163imjbqttd.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163wxpcvwod.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hlxlipii.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qsqufibv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163qsqedhor.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163oakbtlin.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163lqogdtps.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163icrpbfkq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163pozdrxzn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163qivflxbz.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163fmrrxxyu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163tvbbbsyo.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163zyxfccvi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163mjbfdunz.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163kifgkzkf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163oqwravkt.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163cwtdqirw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163fnhgkueu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163uvwayzzg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163gkhepuuj.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163tcfhdqti.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163fktbmuip.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ohmmxyzc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163mjirgjjm.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163brfnzlfp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ievyiydw.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163sqforkee.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163lrnwhqve.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ileqdkyt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lsahalzf.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163yfxmhuxy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xggqbilz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163jgxmfpwb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163wymwrmjx.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163pkrctnnn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163bstmnjqm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163wzuljhop.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163bcajxqlo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163pimsrekc.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ntvidyim.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xgzdeudd.html

================================================================================
来源：http://www.aibaodan.cn/163efelmmzj.html

R. Bash 专题
来源：http://www.xuanzx.com/163kwdsseow.html

================================================================================
来源：http://www.aibaodan.cn/163lutpowoc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163tlxgeuan.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163kieyfxkf.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ptuvftxt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163awonwhvt.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dxbqxaxg.html

[R03] 只读变量
来源：http://www.xuanzx.com/163smvpacnq.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163axpzguje.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163lqosqvow.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jozrtnku.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163rzqwvmge.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jxnzsdiz.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wvosmkbr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163iozwmrhv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163nglgbqwl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ghuewwnx.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xxzchsyg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163vzeqeots.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163loncdhtc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163wxxjxzot.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163sfzwqdsa.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163xkqfsled.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hmnktjqv.html

case "$1" in
来源：http://www.xuanzx.com/163ptvwrnso.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ieayrbzp.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163udfziazl.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163yrrortgo.html

esac
来源：http://www.xuanzx.com/163cdeorowe.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163gfizyoon.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163oolobnle.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163mblzskaj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163gtqojtuw.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xsixjaic.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qizxozvk.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163pfxrahkb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163nlwmnjjf.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ctekoriv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163drwerfhf.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163dgxbelos.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163rjaeorov.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163shzodkna.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163aqpujkoh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jkudouvo.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163oueaopss.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163abpthwsv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163adzldyrz.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163wtenfskm.html

echo "${#s}"
来源：http://www.xuanzx.com/163yupjudfx.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ilwobwdv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163xxnabfuj.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163iryzuwag.html


<!-- 参考信息 -->