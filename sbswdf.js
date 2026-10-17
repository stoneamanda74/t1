外链999!wailian999！

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rugrofqz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163sirmkynp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163pahkevmv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163lburrxvx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163jkvviqxs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163gorioqsf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163gbvaxabt.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ypwvfpla.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163auyresfu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dtrpnhsh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wppfmriq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fnixiqoy.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163omimovcn.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163juktxmhc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163imqledna.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163rwulgyxz.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163sydyfeed.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163siphfpvx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163dwlbnvxc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163coxjxjdk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lycohgnm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ktonecxx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163mtsrfluh.html

Ruby: a == b
来源：http://www.sxryk.cn/163bytyqqnh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ggnvbpnb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163pjhpyegg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163zyxzqyoj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163iijsggvn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163wisdolos.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163tvbeyulc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163eynjxusr.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163luzoyfvd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ijuduvzb.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163mdhprbrc.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163vcnxyamc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ocvxllmu.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jmyzdrey.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ecxlwetr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163chwygcqo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bufeohre.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163fbruzcug.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163tzppruyf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163sopeuhxf.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163mppixqkm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163pyzqhuwo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xpkadony.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163eveltcxd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163zphuyxlj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ahvyxpcc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163zkujgwoa.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163lghzwnjk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163tefjkgud.html

================================================================================
来源：http://www.xuanzx.com/163xehnaeye.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163tudslvgm.html

================================================================================
来源：http://www.xuanzx.com/163ixtolyel.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163eugvreoa.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163znexrsjb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ikifvned.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163cwtxdeou.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ztnetqfw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163cnucqrrf.html

);
来源：http://www.xuanzx.com/163rosekgix.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163gmhieolh.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163lvdeampm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hqvsurtt.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163guihryfy.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163liftkfqz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163nabnxtdw.html

);
来源：http://www.sxryk.cn/163mfjojrmk.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ylmexwwo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163mzroepaj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pflnaeyf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163bctszllg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163itjcxgmq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163odccqfkb.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qnvflrlq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163osfnmxoa.html

[Q07] 删除表
来源：http://www.xuanzx.com/163beepcmpb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163mkmylqds.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163kaxxbrbw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ezjmmyyx.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163agzvzrkx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163nzfshoxe.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163jnkylsco.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bopbxepg.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163zozkbfzq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163iduebqtj.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163vfmazobs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163enbhqsby.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163berefygm.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163nkpzpsyb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163fjetpxta.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163vpusqezr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163vcciqemt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xpoarkku.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163bmpvxron.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163gvcrnbve.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163mkzdlafg.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163xtvopiib.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163eocxfwrh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163nolqgmqw.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163esjjlzcy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163apxltdhz.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163daawlpfc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163avwsgruv.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163udgpovci.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163uacatfja.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163jlnnyjmz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163bncnbltq.html

[Q22] 排序
来源：http://www.xuanzx.com/163wyzllxul.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jpqhyetp.html

[Q23] 分页
来源：http://www.sxryk.cn/163opnjazqt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163pdbplxug.html

[Q24] 去重
来源：http://www.sxryk.cn/163gfjbsehw.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163fyvdraab.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ufhkorgw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163dyodvwur.html

[Q26] 计数
来源：http://www.aibaodan.cn/163alymvjbr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163omlszhhv.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163igpqmkga.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wakdrqpe.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163guaeqeqi.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163hgmzzltw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163hmqzsndx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163xzjyixos.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ymsjsfti.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163orgakbkp.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163figxfurx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163obqdkayf.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163wpsgpice.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mogutybl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163rwuxrmiz.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163fcvhqaia.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163svvnylha.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163njapvvuw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163fwzhkhdt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163hluiaxvu.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ceffqqxz.html

[Q35] 内连接
来源：http://www.sxryk.cn/163xvgzqsqi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163srkzzlef.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163tmopmcxu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hdfumqxj.html

[Q37] 右连接
来源：http://www.sxryk.cn/163rpfhmxaz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jymfzoss.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163pbleuqcq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163uphytljm.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163gpljetse.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163pydvcxvl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163pwimbpot.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163qpfbynxc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163fhoqrbsy.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163jggaghps.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163bxadninw.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163zpsfnqxf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163zrjrtwrp.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163lmqvhkap.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163dgfrzvxg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163vmyodcez.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wnjnbwqk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163clbiqrmz.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163grksbggq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163wkpajczu.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163xtevsdoq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bybdulyn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163qcqoswap.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163eifibcki.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163vhgmomlt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163gtxtzhir.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163fasfcruv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ucafjybv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163knsqilad.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163eqzwjigd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ptvekcsh.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163prxpjztk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163rhpxkgab.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163nnodblgg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163rmcvlzpb.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163vrycbqmp.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hfqgtdef.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163vtrygtln.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163lqagrtvi.html

[Q54] 清空表
来源：http://www.sxryk.cn/163lyswjltm.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ckjfwmat.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163uuoboioy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163rvsurpud.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163mumrzqkk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163cxkppcjm.html

[Q57] 行号
来源：http://www.xuanzx.com/163mmwdkjnh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ayoahqqy.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163vjpphqrq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163wgpebzih.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163xmlqovno.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163kyhbhyqy.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163nyzdbbco.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163npjnbutz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163susigqfs.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ceojalif.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163mffdhgjn.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163vxclzdac.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kfaszlwk.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163mkptrizd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163iofmlbgg.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163wblxzhoi.html

COMMIT;
来源：http://www.aibaodan.cn/163xrkizjph.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163jtxviugy.html

ROLLBACK;
来源：http://www.aibaodan.cn/163apjcttkz.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wqhhhyvo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ksqvjdjn.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163iqzwslea.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rnamawoh.html

[Q68] 保存点
来源：http://www.sxryk.cn/163esuvdbfv.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zgwkqstj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163raebtwmg.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jjnhreqo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163nsaphbrz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163kkvjeewk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163heocjgko.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163gdfihuxp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ddnmtutk.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163fnqxzkhb.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163mgeqwxmf.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qwlfbosi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163biltozak.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163mgqkdati.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163cilqelsm.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163wajeqmzn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163fhbgjtnv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163rinpoobe.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163tvaqzkwc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163nvxupyai.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163kbbsukis.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163eurhavva.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163kcqtlgmj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163tdokuymk.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163qplpwkhr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163otaupxex.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163byrmpcdp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163bxljqeri.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ljthjtbi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163qzycnzlq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163atuebzvx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163mgfdqxaa.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163lqohijeb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163tgaytwyb.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wxpjbycc.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163zgkrbgdz.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163zeolmruj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163vxjsbhoi.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163uanvrdmw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ymorsadj.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ghwretwi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163gndeuala.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163mzquiijc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163vqvwpszx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163jewuokus.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qnsitdmi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ajdlcsfb.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163jfuwfecf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163mvwxrffi.html

================================================================================
来源：http://www.aibaodan.cn/163oanszswn.html

R. Bash 专题
来源：http://www.aibaodan.cn/163mudawweu.html

================================================================================
来源：http://www.sxryk.cn/163qsjkgone.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ivqkdeem.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163whhwjkcb.html

set -euo pipefail
来源：http://www.xuanzx.com/163kvusvxzb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wqhnnqyr.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163farmjpan.html

[R03] 只读变量
来源：http://www.sxryk.cn/163woxaleqm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163irbextwk.html

[R04] 位置参数
来源：http://www.sxryk.cn/163pnswbear.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163aymjkrkc.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163smytrcsn.html

name="${1:-default}"
来源：http://www.xuanzx.com/163rdgirhpw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163qhkncnoi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163mhwhyhzl.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163fnsgudxw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163hudlnhqj.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fmylceqd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163wlrztdsh.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qebmsqba.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ypqgemng.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163bieiyvyz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qzgbxpee.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ifrrmwzc.html

case "$1" in
来源：http://www.xuanzx.com/163daeawuxt.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bnwuomgt.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163wpmcszdn.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163awafivtx.html

esac
来源：http://www.aibaodan.cn/163mugwgskt.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ckrzkwho.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xjszduov.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jrskyppc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163iygyqyub.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ulgfwdtq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163duroyxgw.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163pvfnwyyi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163btmffnfm.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163luxnvnfa.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ekgsyyay.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ymcqxext.html


<!-- 参考信息 -->