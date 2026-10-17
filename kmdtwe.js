外链999!wailian999！

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163joilodoi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163oqidmgui.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163uisdmjlh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wnndnabw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ufvdhsgw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ancpkoyh.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163rdfajxjz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qcjbmwda.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163pidehfwj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jjkdftwq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163fwcbzoqy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163xotdrpif.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163jmbomoaj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jwzjxyzk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163zurmuwjf.html

[P04] 求长度
来源：http://www.xuanzx.com/163ionkoqjh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163gzpvnaym.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ygxjwwtj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gvowcrzw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rtnvmopz.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163mczkajgz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163rszxoodm.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163lvpwzdhr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fqzummiu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163szghhxxs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ogpepqjk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163dsrmdjnl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ufqartyl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ldtrfono.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163vytwwqvj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ieweapoo.html

Ruby: a == b
来源：http://www.aibaodan.cn/163nbjjcsvn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kdidqfkw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163voscwner.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163kkaafbep.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163iawedqmo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163oesqnbgx.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163mjiyktkj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163cjupfhsf.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ywflrqrx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163pvyrjwkl.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163mqxrljvl.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163vnuxinrb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163bqyuntxs.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163rmppllnc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zdtkdbmy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163idmvqodz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163zmtxevbt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163omqpquwo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163vysfhspi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163iivgnpbd.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163muwxwdjq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163uppfgvit.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163mgmpjvfi.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163gygjtnvk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163tyztpeky.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163wedqfcgl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163wyvujhrd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163pmmdtehj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163aqqsablo.html

================================================================================
来源：http://www.xuanzx.com/163hqmrogeh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163rjoftpgm.html

================================================================================
来源：http://www.sxryk.cn/163hesxjihf.html

[Q01] 创建表
来源：http://www.xuanzx.com/163mrmezwhs.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163tiwkzryv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163sjliapwy.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163kdjdftnv.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163hjxbmcim.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163epvuuljg.html

);
来源：http://www.aibaodan.cn/163blmeenpz.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163tzfaeitx.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163soldmelk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jdgohpym.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163clfnnfsr.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163znucciuj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163bpwiqila.html

);
来源：http://www.sxryk.cn/163qqudshav.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163erlnhelg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163dxxokgec.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163chzztkjs.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163bzbcnhgp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163iwsjdyvl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163tlpbqzcz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163bxjemfqy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163zvlydfuz.html

[Q07] 删除表
来源：http://www.sxryk.cn/163scgkudar.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163cdbtoiap.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163mlbgukli.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163seemlspq.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163wcypcbnq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163adehrkly.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163eogocadw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ydravlxo.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163lrjiymbm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163jfpbuaco.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163vhkwkijn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163nbnxqeum.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ydgignop.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163lasgtypk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163fxhgykbr.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163cbowpjcu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163sbhohnjt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163zvbndzxt.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163fhajnvmz.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163qlcblzxk.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163umvpgman.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163yyerrrws.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163pbyskbro.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163teiweqex.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163qpjsqoom.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163gydkgwfs.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163lqicvkxj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163zjahkqbb.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163gmuhmymr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163etgagihf.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ewltrght.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163dkulwptz.html

[Q22] 排序
来源：http://www.aibaodan.cn/163hfhrafob.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163gqgbevkb.html

[Q23] 分页
来源：http://www.xuanzx.com/163xbcwicfb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163fjavnjxq.html

[Q24] 去重
来源：http://www.sxryk.cn/163iphhjnqz.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163tfdqgzil.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163kgmnrkpj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163jxivukzh.html

[Q26] 计数
来源：http://www.xuanzx.com/163puwhqgvx.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163lurnwedj.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163qapiufhy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163llbekkmo.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dvirugvm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163nzfilabb.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163hoeppmmj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163lhgtwstw.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163nrnzcpmz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nsoropfr.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163iewxbche.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163zjplgrdg.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163llxgzcot.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163odedbjtr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163chtzhgic.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163mflitvxw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163utkhypgt.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163vhykhfaw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163tfllqysv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163hopeaniw.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163dyaovwam.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163lrwgougt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ugzqaklh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163aiapxjbx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cqdcueeb.html

[Q37] 右连接
来源：http://www.sxryk.cn/163armcfivn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163aefxhlnq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163bnixkdbt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163tekskqee.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163lchcepzc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163inewmggl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163mhncajkd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163wtdlnqhp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163lasryzve.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163rkxppuez.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ififxgnj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163lsgarncb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163tmzadxrk.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163uoavfcir.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163qkzbeuyq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163zhjzzfah.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163boayhzbc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163jyncbggw.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163nncmmfvo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163gmglimbr.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ombteowj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nczciahr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163vqnrccjf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kwhubvie.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163uvzjfhix.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qqzcrrsd.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ymiokvgu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163voufdocn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163iceddnnz.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ziiplgnx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163njeiwzfd.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163totlbzma.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163hgglpbsj.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163zyxteyqd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163mkbwxuyf.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163dbbfxrsd.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163gfclzlfy.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163gawkwtqo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163xbvzccan.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163dqbtijer.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163aoavqdit.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vgsfufpl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163skqfitdk.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163usgicaxq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163npjtmmrn.html

[Q57] 行号
来源：http://www.xuanzx.com/163ynirwpcm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rynrxhfo.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163rruscjhi.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163yjcosdfy.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163qdvwpdyp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jggpvkhr.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163yhmxwvpm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163aytnzexz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163bjbnglxq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ucgdosxm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163vpucesjf.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163jcdhtzsj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ayzlcimr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163lsrzwuxr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163advsgaax.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163feaqaqni.html

COMMIT;
来源：http://www.xuanzx.com/163ydrmxgbr.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163oksxiyvr.html

ROLLBACK;
来源：http://www.sxryk.cn/163figvqfpy.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163icliqsxb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163bqlzsyma.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163vrfwaael.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163xkkqrnmg.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ecdmuruc.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ktvgeeam.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163wkvaxssy.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163urgqobfl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163nsaphlch.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163tcfsvoyy.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163dtmncwjx.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163vkitklrt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163hrkbplug.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163fxxgbvcf.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163inzvarrz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163bmphtsbc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163guymwgbk.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163dxiyotfy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163cawnowsz.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163pkzxjkju.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163kpiwcdey.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163uaadzzve.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163bkitspnl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163tazemkxl.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163djbgnbqi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ecklgktd.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163zuxpmjxo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163fjzwztpz.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ypjvsewl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163inlyqbow.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163rthwkwmy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163wbdvybeo.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163sjoosugt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163gbphwrtb.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163bsgtejrd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163kxmvqrqp.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163vackozml.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163hdxmueec.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xlbhxezm.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163nmtekjsv.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163rmgiszel.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163yksowzwn.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163wkjsoplf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163snvvimvi.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163walquwet.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163xyrwakrx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163budgjbgy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163fgijiihy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qtuvdpnu.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163vmkmppea.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163thegonio.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ntwevfdp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ejzhwnko.html

================================================================================
来源：http://www.xuanzx.com/163eeyqykkm.html

R. Bash 专题
来源：http://www.xuanzx.com/163wygemord.html

================================================================================
来源：http://www.aibaodan.cn/163jmyxuukf.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163hopbgsmw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163kjobhgix.html

set -euo pipefail
来源：http://www.xuanzx.com/163klfpiuxq.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163owyupjtg.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163cakzzobd.html

[R03] 只读变量
来源：http://www.xuanzx.com/163kjsprhzb.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163unjasxgc.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163okbidqnv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ikffukxb.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163cktoupyb.html

name="${1:-default}"
来源：http://www.sxryk.cn/163mbbmavjl.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163vbcusiod.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163jhljugka.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ozljvbvq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163locesodi.html

[R08] 数值比较
来源：http://www.sxryk.cn/163bacomaed.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163dotccrrc.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163zcrvmdhh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163einectwd.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163fouylijs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163sfrnljgd.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163gejpgxqm.html

case "$1" in
来源：http://www.xuanzx.com/163eysfppyx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163lrsdbuje.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ettfgxls.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ajglkppr.html

esac
来源：http://www.xuanzx.com/163ltdfgcvy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163mkloywdd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ssqmgyxx.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163yswmlqvh.html


<!-- 参考信息 -->