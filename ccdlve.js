外链999!wailian999！

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163cqvbduam.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163etawebwq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ejgokvbo.html

[P04] 求长度
来源：http://www.aibaodan.cn/163gdndahqq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163vzwltfwn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gowncbgt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pgiqcerx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163yozfodkh.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163mefknvck.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163cqnficaw.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ujdjivrx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163wtyvielq.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hayiipgs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163lxwctoxf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163pwzlmbti.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163niihvtmq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163nitbqasf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163keupptlx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163gmrriwgz.html

Ruby: a == b
来源：http://www.xuanzx.com/163xmoybhrr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163hnardqos.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163hxrxqdvq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163gotxsnvs.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ncufcibc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163xxeqxfzl.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163cobymjra.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ueagdwhj.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hjnuobpb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163udksqaek.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163tfjnjgem.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163uzldtpfu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163kvmkiili.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163yvslolun.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gtzfpwyg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rditelif.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163smyjufmd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163cwivdnvl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ncsubfke.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163urscngdw.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163rvbtgslv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163sudoctij.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163tgzkacoj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163harqcmzf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ovlnnvwk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pytwlppj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163vedyzhjm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163jmqomzhw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ftcxyouh.html

================================================================================
来源：http://www.xuanzx.com/163vwjnowgf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163souslmjl.html

================================================================================
来源：http://www.aibaodan.cn/163ibkqikxl.html

[Q01] 创建表
来源：http://www.xuanzx.com/163kgbvyafh.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163lfbjdzfn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163sfuewuzc.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163cpwyoqeq.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163xqosyggw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ktrkbyzi.html

);
来源：http://www.xuanzx.com/163ljtzbkew.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163hyhxdlqy.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163wsijyjhv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163iszndzhx.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163rwohnkck.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163fqxenxrt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jmgykjff.html

);
来源：http://www.aibaodan.cn/163srhcvhcv.html

[Q03] 增加列
来源：http://www.xuanzx.com/163agmfqozp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163potgltzd.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163stvxyiwv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163sutdtyki.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ijyfyxpt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163gzqrtebp.html

[Q06] 删除列
来源：http://www.xuanzx.com/163tcpzrwij.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ftotxjrl.html

[Q07] 删除表
来源：http://www.sxryk.cn/163yberxufa.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qfxwjrwd.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163zpwvwkez.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163kihcluys.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163njmshrlz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ubfovtmz.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163msaecswc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163mhfetjrm.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163eyucelhq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163dojdwmsa.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163hnimsdmf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dzfkgpfs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163pecabstq.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wftmiifb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163xohbkucb.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ozfiiood.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163msqqqvmh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163qpkjvwhd.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163wabkvgul.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163heekxnyb.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163zsdikupp.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163imiphadp.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163lqedscxs.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163gkrmbikh.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163wludrjcc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163gdcurbun.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163bumxjqjl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163eoqnmvws.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163rjdatoyg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163xxpnjoes.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163jotammjq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163vnwxnwpc.html

[Q22] 排序
来源：http://www.aibaodan.cn/163vtozfpof.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163mgdrcckf.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ihgsanjb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163kpzsofsv.html

[Q24] 去重
来源：http://www.xuanzx.com/163slqtqoey.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163vmqkuogp.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163wwislpzg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163gwyncujo.html

[Q26] 计数
来源：http://www.aibaodan.cn/163zosuqglg.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163yubtzaoj.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163czzewjra.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ibdyqcof.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ecfejjvu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vkqsqxjd.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163veixrfph.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163hghcxdba.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ypctoead.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hguizpwc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163lkulrbbw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163brjsrgik.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ldjvumcn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163owewonlg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163pwpdomvr.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163xogsiequ.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163camrbbnx.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163myofwmlu.html

SELECT * FROM (
来源：http://www.sxryk.cn/163bmrelypd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ailhfiig.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163xztbdttc.html

[Q35] 内连接
来源：http://www.xuanzx.com/163gtumxpfa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163miejaegt.html

[Q36] 左连接
来源：http://www.xuanzx.com/163bvatfjnm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zgywzvvb.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163fvbwgchh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163xajzsczr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163qkllaler.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163giogkzmk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kllvjion.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163cjzqaelj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163wcsqgumt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163plyzqftw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163rgoyixvz.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163rlijtwxs.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163kfsifpnc.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163xqjajwvg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163aumvrbuc.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163bgvbnbpc.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163neaxofbo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163osshdmqj.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wrntaujd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163yghrjjvi.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163cqvlryuf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163nhagqysh.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163aqqmspqw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163lzfpokpk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163bpdocoph.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qbuhlfah.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163uqukjwwk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163uqxehyrp.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ygdtqsum.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hqwsujlc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163syyftwad.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163uywkrkdu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163sxflpxhe.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163tnjhnrwg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163yeuadfng.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163bxbjhinx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ngquygnm.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ybnfohzu.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ddbmbjlm.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163dpfenmee.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163sfliomtx.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ebbnuivt.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163cxxeqctn.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163wprwihdj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163zovojbqh.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163hxlumgdq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xdbynqdc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163uffnxijg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163lvpckdgv.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163uvwoozxe.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163zzwcdnyn.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163gemxgryz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163eawgulvu.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163gnljzhis.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163yhpsmqba.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163lfsmbeel.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163rnoffekb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163srautiam.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163eocmkdve.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ddudhvnw.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163dawohvkh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163yaaykwfa.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jzfxatif.html

COMMIT;
来源：http://www.xuanzx.com/163boorhuqg.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163odblsddt.html

ROLLBACK;
来源：http://www.aibaodan.cn/163yvoaxkto.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163lxaosxna.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ghoyciie.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163aiisiihm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ukxeneie.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163hrkhxzvc.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163oznioovo.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163zquqsxht.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163iqqaeoiy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163gdggmhvd.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ypfrovlf.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163zsfehtae.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163tlivdvse.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163luqoebpk.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163uompwryp.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163kssolviv.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163blkwcgsr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163qxrxwzuz.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163izqwbqes.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ypwgnioi.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163dzsjcjwu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163egkltrfb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163uzmzrzeh.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163mbyotijd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wrhaqfrc.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163edqrioqa.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rwpzmddf.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163xdrzcghd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163lzuuifec.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163rckschvb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163sjtgdzpg.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163volhgfbk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163hwmhgouk.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163shiibmab.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163upzpzuxl.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hkrwhnxr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lbytgvjf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163bkvqzusg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163fcecoigl.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163fdybrgmr.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163pywabljd.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163luuuupwi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163uamhddxh.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163vltrnfli.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zmbckcba.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163rhxpidjw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163qgcrughl.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163uxjvdlhv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163qstrovsv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163yxolmwpw.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163sxhjiqdc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163pzfiynlc.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163pwqogmyz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ymkurjjy.html

================================================================================
来源：http://www.xuanzx.com/163ljyrpbcr.html

R. Bash 专题
来源：http://www.xuanzx.com/163qpkklzef.html

================================================================================
来源：http://www.aibaodan.cn/163alkajkrm.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163imxtxukm.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ispambmj.html

set -euo pipefail
来源：http://www.sxryk.cn/163bvtxqkxl.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ecotczzu.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163jmjstnuu.html

[R03] 只读变量
来源：http://www.xuanzx.com/163riekrhns.html

readonly PI=3.14
来源：http://www.xuanzx.com/163lwifsedh.html

[R04] 位置参数
来源：http://www.xuanzx.com/163oknoaswl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163qkserxiw.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163fersuvhg.html

name="${1:-default}"
来源：http://www.sxryk.cn/163znegykdw.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163mucthtcq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163hspfgosz.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163yghzjgaz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163mqlzivqr.html

[R08] 数值比较
来源：http://www.xuanzx.com/163gupfzenp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163qzcqpyum.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163acftefba.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163rhntwetl.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163hhifhhxk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163zwkqprte.html

[R11] case 多分支
来源：http://www.xuanzx.com/163avninolp.html

case "$1" in
来源：http://www.aibaodan.cn/163yciutoil.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163pxrgepuf.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163esgvuwpr.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163dafjspis.html

esac
来源：http://www.xuanzx.com/163twddetmq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163uxwnublh.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xyyizkls.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163qgtcqgtz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163bshwcnfa.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163gzmjuveb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163thxxqkyg.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163zxltwwcr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ycbyhghi.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163toqghwyx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ysubbjtx.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163dfeewdnl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163zodrxdss.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163slosnahl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hmdvxexu.html

[R19] 数组长度
来源：http://www.xuanzx.com/163yhwprizm.html


<!-- 参考信息 -->