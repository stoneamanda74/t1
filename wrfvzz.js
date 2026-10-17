外链999!wailian999！

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163giwoouqx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hxflnshh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163fephtfzf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hccmqgod.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ugnxcwhb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163tkflszcu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ijuocalo.html

[P04] 求长度
来源：http://www.sxryk.cn/163jhtxvfhq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163alxjtwjf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163masaafnv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zstcodhh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ohxwtlxk.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163qnzqkwkd.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163iwgcuwum.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163gkffbfbl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163cnobrjvn.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ajqyzzyi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163jnuooydo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163spuvtajx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163sdxawzzw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163aehhpfoc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163wbcffnrj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163sbljfdpl.html

Ruby: a == b
来源：http://www.aibaodan.cn/163lgikqera.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xbjfmyax.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ghqlvilj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163gsfzoyhf.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jpxtybpm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rytgqkzp.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ersychmw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163rhrrvzkh.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163flyppajw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163hjobqaie.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163kfkgvhku.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163yibxcpdn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vjlrvvzm.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163knlngxyy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qboufkqi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163waoiuntl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163sobcrvwg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vhoahmwa.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163jriicufi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ehnxnvnz.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163cwlhgjop.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163iyiylold.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163lbcajywx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163pbilnqew.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163jckdzpej.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163fpeuxlmu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163xjcozzrj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ipmokigw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163eeyxdgxa.html

================================================================================
来源：http://www.aibaodan.cn/163tykkjwds.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163mjpzkqlx.html

================================================================================
来源：http://www.sxryk.cn/163dsvdldpq.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jwzouchb.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hubtsuka.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hopibldk.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163cxbnodri.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wsacdwvq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163lwofdzct.html

);
来源：http://www.sxryk.cn/163edkzqwqi.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vjmlniih.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163wjbwefmv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wfzlpolo.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163jldcarba.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163dtvjlwaq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163amlwwjib.html

);
来源：http://www.sxryk.cn/163tsqvvcxb.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163bnhkdadf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163lbvyzstd.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ahcetncb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163omxasurz.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163mfloocqu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163tupbgtbx.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163bzckfgoq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163nbzjnnrl.html

[Q07] 删除表
来源：http://www.sxryk.cn/163mvztjejm.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163vszyejai.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ykynrmmv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163yxaukutn.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163eoyeqwuy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xqxqjazy.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163pnbgjkol.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163kyqrkfdc.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163lqgmpggp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163wchkrjht.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163rwlbtqck.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163sgoylvcb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163nbxzyvdu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163wixluxjb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163yrmpfune.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163dxlzvhcx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163najotjqe.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zjfexlfo.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ybcdcopw.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163wvuefzdl.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163gbzktbul.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163masnubzy.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163abfbtcvp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163uqobtzmg.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163lzweazyv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163wkvkaard.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163kmlgllzy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ortjqyeh.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163zqcqhsbs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163sthanezc.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163mvdwzejr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163uwwodaps.html

[Q22] 排序
来源：http://www.aibaodan.cn/163pbfvdddo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163pxpctkxe.html

[Q23] 分页
来源：http://www.aibaodan.cn/163mkcgijkf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163cqzaqdzo.html

[Q24] 去重
来源：http://www.sxryk.cn/163yczwpdoe.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163mfptquai.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163dbhakgae.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163rtgbnedn.html

[Q26] 计数
来源：http://www.xuanzx.com/163stoiekjl.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163bbsgtewu.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163nvdchgzl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163rdqpkbpu.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dusnydai.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163clztzdmy.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ovezifbd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163mtpbbedc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163sohtbfeq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mkntvmjm.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163bhboxnzp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jsmigqdq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163rgehtcak.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163atzfiqia.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163hpmqoplr.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ffovuspr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163kcakrhoc.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163xwgicnry.html

SELECT * FROM (
来源：http://www.xuanzx.com/163mqovynmc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163zzhjzzqb.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163wzggrxow.html

[Q35] 内连接
来源：http://www.xuanzx.com/163nqdncyaj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ngldintw.html

[Q36] 左连接
来源：http://www.xuanzx.com/163abstdmmy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163aanvofhx.html

[Q37] 右连接
来源：http://www.xuanzx.com/163otvuhthy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163binsiqht.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cdwsngfx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163exepxuib.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ceuxkxmf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163derlaomi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163fsyxmowj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163nhwecugl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163yrfaeezh.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163fzceurrv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163jafjxylu.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qqsjdsfu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163qrosicmk.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163wxmgxjri.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163rhkottbl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ycobjpsq.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ufghjaqm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163tzfgyzfj.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163dmricsok.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163bhcwprpn.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163gxctnwzr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rvanwxvo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163irrsvuhu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vdaqrjmz.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ztgoavfv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163tcrtmxxu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163mtnasypy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ymjggexh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163tamigomg.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163barjyvwu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163xzuwwvpe.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zoxpfjii.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163yeobteir.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163qoidtamo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hjcxptul.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163lezyiegi.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163afdktwwq.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ltshfhur.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163fkekciju.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163lkbqjwji.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163shvytnpx.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163qamfacuq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163lrfdtunc.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163geyfdmbc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163vzlhtwts.html

[Q57] 行号
来源：http://www.xuanzx.com/163odooebda.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163tplzrxxb.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163nokyjplr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163yufonvua.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163gxlpogfg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ejrkkobl.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163unbmefvi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163coixaxaw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163idxispns.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163eipksdae.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163wypobgqk.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163lsztntvy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163slbmnotb.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xkaewslz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163meqacafn.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163neaxjieq.html

COMMIT;
来源：http://www.aibaodan.cn/163lfocecre.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ifduwknd.html

ROLLBACK;
来源：http://www.sxryk.cn/163yjhachib.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163kpmvskly.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163gaarjlwb.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163brmucpqj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163dzgqjzli.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163lgygiyiz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163uakwybcd.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163xkmefwoc.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163icxgssah.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163pwufqqiv.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163votydsrz.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163pmzpjuyn.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mhjvhyhl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163zqoctcht.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163qafgjnme.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hdgxshmt.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163mtnouwdw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163hmvhljrf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163freatrri.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163dekyhatp.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ocslmjfr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163tcavfmod.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163vdawejfw.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163twseboat.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163zvignxby.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163axuuwxpc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163fdibjnfp.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163pisjeleg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qsdwzsln.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163mcbucqmw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163afnqxdoj.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163vufqmygh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163vmqhuitp.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163xrfatzva.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163spsbilsi.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163kmgkbize.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nnbjmylv.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163texfrrov.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163sqmictto.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163aqzcdxck.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163hteoiuwc.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163pbyuyahc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163mqtpaugy.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163xjfpvdlm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163gzmvgtmv.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163cpbynnga.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163awpadgxp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xlfuxfez.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163puwlojlf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163vxzeojth.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163imvfivht.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163rzgluxuj.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163nbjmxebp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rmldeyfq.html

================================================================================
来源：http://www.xuanzx.com/163lfphhsbg.html

R. Bash 专题
来源：http://www.xuanzx.com/163poxuurqh.html

================================================================================
来源：http://www.aibaodan.cn/163wcdhnely.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ipajezts.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163hcxxjidq.html

set -euo pipefail
来源：http://www.aibaodan.cn/163qbysdsas.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wcnknkrl.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163evupxycn.html

[R03] 只读变量
来源：http://www.sxryk.cn/163jrrqrwbi.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163fqcyuwls.html

[R04] 位置参数
来源：http://www.xuanzx.com/163cwzskouu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ecngjkka.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163wuxvbhyh.html

name="${1:-default}"
来源：http://www.xuanzx.com/163fkrtfidr.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163qnvtmagq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163etuthilx.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163jrwkcush.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163jzbohaqr.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163qtatopuo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163yfsykhyy.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163svnpmkzm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163hfctwozt.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163hrudvpli.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163fsknymts.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163eexkkfvq.html

case "$1" in
来源：http://www.aibaodan.cn/163qmdyabwi.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ncweqsfb.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163qlhxbwok.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163wyvzakww.html

esac
来源：http://www.aibaodan.cn/163zjqqcvci.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vrughyna.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163qdigkqfe.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163juprspqq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ufawtubl.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163mdlsdowi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163tuyijgye.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163eqzdrjih.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hviuxxez.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ffinvtgx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163hsocqkdy.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ssezbpaj.html


<!-- 参考信息 -->