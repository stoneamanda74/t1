外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163szohvfky.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zckmqsof.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ggltmcav.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yrnnmwlk.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163spyfibyc.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163hbrwnset.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163saklccbh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163lvumqalf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163vknchfyx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163eibmhokn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zptjkems.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qrnqmzal.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ymrdyuoa.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163oehjmxjt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jaknyrns.html

Ruby: a == b
来源：http://www.aibaodan.cn/163qqezfgqn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163dsqyrnxt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163qcvmphbg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163iwjgxxdo.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ngjnizpg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163vqyphkjc.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163xjxxyrmb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163wkfbaxfi.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163nbkhklno.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163gelokneh.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zkrdvueq.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163gndqhnuq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163bkwlhmfk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163lltcmnaw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ikknrttq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163eiojubbe.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ogisxpzd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163uanecmwv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xpfevdtd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163xjgtfkjt.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163giooztte.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163qfswaeyj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163jdqncdgi.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163xnajwimh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163epvcqjlz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163tngoqtlr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163xdnjucgj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ljbrnuvf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163dxyygvex.html

================================================================================
来源：http://www.sxryk.cn/163pemzircx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163jlzpjyih.html

================================================================================
来源：http://www.sxryk.cn/163lzxoxqrv.html

[Q01] 创建表
来源：http://www.xuanzx.com/163qhxbpxkh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163lakkuret.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ulmjhgaw.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163byeiceav.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163bfpgfsfi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163uasxsiaa.html

);
来源：http://www.aibaodan.cn/163gdfgnixp.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163jmhixbsf.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163xofqsdud.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qegrwhoo.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163zdtffnaz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163aaignxti.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163fzhxfgjw.html

);
来源：http://www.sxryk.cn/163oiifuesq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163kegtbxdw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163tfjcdwfx.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163dhbyevdw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xsjixmxq.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163losvlfgj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163qbufwlcg.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qnisqgdf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163rytkcmhk.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163hegcncht.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163xlpnxvhp.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ursydphb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163xkcxvgfz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163rykmiyhy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163wdhctkig.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163osorueyd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163iyylbdgo.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163sclzxwak.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163gjwzxxre.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163bkgjxxkp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163nbxcevir.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163mdstksla.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163uihewpur.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163fgwbuaqn.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163cpzlqrkp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163cjpatfcp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163yytomnwf.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163woppftkn.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163oxqzgnrs.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163bbuwadok.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163zxnhiipu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163irqnmrly.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163vnfzpkfy.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163bpitevzd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163lvyfempk.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ghybpgvy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ihwhifjo.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163cailrhxa.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163scdmuogy.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163iaheabwm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ofzxdghx.html

[Q22] 排序
来源：http://www.xuanzx.com/163ocjhdpdk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163jeqqkkar.html

[Q23] 分页
来源：http://www.aibaodan.cn/163qkzlhvvp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ftrielvs.html

[Q24] 去重
来源：http://www.sxryk.cn/163bonxpdxb.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163tsahxgpr.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163gzntucak.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163pxpheyrw.html

[Q26] 计数
来源：http://www.sxryk.cn/163kttdmjtt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163pyatqmnp.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ppbdhcmd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163dykrxeos.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163vvsosuys.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163wdhnzvaz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163xpfdaukc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163yfiuakdc.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163criicsjd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cnxyffwf.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163alleexog.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163npgdbwsk.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163uhbpftjd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cniilabr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163fmiouzom.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163sqwscvzy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163togzsufx.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163awquhlkz.html

SELECT * FROM (
来源：http://www.sxryk.cn/163eueoiwvk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163knaepsvb.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163dacwsenq.html

[Q35] 内连接
来源：http://www.sxryk.cn/163hwhxdscq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dzpuotgy.html

[Q36] 左连接
来源：http://www.xuanzx.com/163oaviyqfa.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tpnnnurt.html

[Q37] 右连接
来源：http://www.xuanzx.com/163cjtcajbl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163dnincyef.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163pbyjsxds.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163vcbomswl.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163pwdlnaos.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163irgwyjgh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163rporpdbm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163vmdvqenw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163sciyxjty.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163anlkyrtn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163xadasxpr.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163evotxwhu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163szfnezxj.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163soeqridr.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163mwjfcqyu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163bxnavbcc.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163tbwkhzym.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163gjzjukxl.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ihcdwlxe.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163choezwbz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163pcidogme.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163exjfuyxs.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163jmysccxy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rbfwqzak.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163axwqqfda.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163vijldoih.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163wmvhlfqj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163wvpakwwu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163siboznef.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ihclruvn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163hhuicyde.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163lxfteach.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163kqnfcxfi.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163exirfrtk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163eaaygpsi.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163kyooqusl.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163hgdkidcj.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xexkwuuz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163oinxvfqb.html

[Q54] 清空表
来源：http://www.sxryk.cn/163cyzsptgj.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163nwvimvgm.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163weszgbzn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163gwctjfpp.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163alroybmm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ybvcrhue.html

[Q57] 行号
来源：http://www.aibaodan.cn/163nxbqjcno.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163gidyzojf.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163lqlngzlu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qzcmwgdb.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163lvntjvxj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kawermno.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163qttfxiar.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ljrpnzbp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163kssibeuv.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163tkulcnrd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163cjlycboo.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163eyvfyozh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kodgfrlr.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163navmvjrs.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163olrqvkho.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xxoxcmae.html

COMMIT;
来源：http://www.xuanzx.com/163fsnpioug.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mfbdnqrh.html

ROLLBACK;
来源：http://www.sxryk.cn/163xrqetwfd.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163nxgymbot.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ivzhnacy.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163xxpkmgtm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163tbarndff.html

[Q68] 保存点
来源：http://www.sxryk.cn/163zovayjvk.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163pvhbfzft.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163gprtxdvm.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163pjmvlgfl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163bbhvgjue.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163kbklicze.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163rjejggog.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163qfmcgeuv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xietoyob.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163cfxarorf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163pnovqcwz.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163nnldbrhc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163kbttbeiw.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163hekodfou.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163riesdoxh.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163yxtgncfm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ymtrhjut.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163cupgiogm.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163kzgxcabt.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163gezepsju.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163wnphnqya.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163alytjfqe.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163hvxtcbve.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163pgpwaidl.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163sbmgppbo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ycnfazhr.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163kcmizyxr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ksakfiwm.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163wilyntji.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163llftkgom.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ntwjbbis.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163wsazkcyo.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tduhxwre.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163pecsvjsi.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163zcapbecy.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163hopdxqnq.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163pkrqjyyc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163iwajfgkq.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163lowrckmw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163dxgtavue.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163qtjahzrm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163yktcsssz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163tbxwalda.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163hfkwqzdz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163rzkirmfy.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163feafvaol.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163kgruqffn.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163hbqurqkj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vngfntzx.html

================================================================================
来源：http://www.sxryk.cn/163ggcsocay.html

R. Bash 专题
来源：http://www.aibaodan.cn/163llpgkmza.html

================================================================================
来源：http://www.aibaodan.cn/163beexghfm.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163osnsopoi.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163rjvnvrck.html

set -euo pipefail
来源：http://www.xuanzx.com/163zqxhvesz.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163rjnhlwkz.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163philhosx.html

[R03] 只读变量
来源：http://www.sxryk.cn/163wyatpbdr.html

readonly PI=3.14
来源：http://www.xuanzx.com/163wjzuaivw.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zbhdnzmz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163lsgkvtpo.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163vebpqmsn.html

name="${1:-default}"
来源：http://www.xuanzx.com/163uchvxjyk.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wsgqwmeq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163lsogsrpq.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163zstkuhuy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163hnxiqtoq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zozapepc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ejbuwywo.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ykllroku.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163hfupvxkp.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163bhqanhid.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163jxfzaphb.html

[R11] case 多分支
来源：http://www.xuanzx.com/163xwwbxxpy.html

case "$1" in
来源：http://www.aibaodan.cn/163ezwcdrzc.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163phbwaeru.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163oprdtqqa.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qghcpgfn.html

esac
来源：http://www.aibaodan.cn/163njicluyk.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163jgidsbcg.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163uznupnsw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163donkuenv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jmurskhn.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163hgkyfpeq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163scnuyxox.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163irbrcmrt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163qyyfwjla.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163cpgwfcoa.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ythecehp.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163oddjpaii.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163txruddfi.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163vwckizny.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ypljokqi.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163zrtmchyx.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163uuzavazt.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163svlszzks.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163fuqgxsys.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163lrcouhvl.html


<!-- 参考信息 -->