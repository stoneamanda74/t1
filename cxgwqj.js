外链999!wailian999！

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163nbkobode.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163vebswbhx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163zsuwnxnf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163rgdmnwao.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163cfrplrxd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163dexkjyys.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163rflbwiaz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163jnajjlur.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163rlxgpqur.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ajmhhrtl.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163srujffbc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163gkfpccog.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163xakgilef.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163oqlbcczg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163nribrttt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163damldraa.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163lfzrhzvd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163hqtgbubc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ftgdsbik.html

[P04] 求长度
来源：http://www.aibaodan.cn/163jftwkxuh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163vgaptsqc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hrocnugh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nnxjebab.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hplydnto.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ovdnldbt.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163xxuppbsr.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qcwhvgmh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163hrcvstoz.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163khmaoqnw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ydtbsdfx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163gwdesdtk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163dmvzqrln.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dfabcnia.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ezuejixs.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ngzvevoc.html

Ruby: a == b
来源：http://www.aibaodan.cn/163wosxxfqs.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163dhgbpfyg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163jnjymehw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163tturmolo.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163zidvupfu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163irlxuxpt.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163krumktwq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gszfvnoz.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163cavaqnfb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163mttcaalz.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163jgjfjjfy.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163oxyobgtl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163haufpzzx.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163cxyewqut.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vmdayjpl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cvdbwhiv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ylqvwznf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xgrdsjqh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163qfufznpz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163zlpvsdxn.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163uxhwqrgu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163lqdirvrh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nevkcqcu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163gxrclvmx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163bglzjyvb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163edxcfngn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163rjltuosj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163fyxvuenp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163yaqoacnu.html

================================================================================
来源：http://www.aibaodan.cn/163enkqwdhf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163qtcsmbia.html

================================================================================
来源：http://www.sxryk.cn/163wxildzsj.html

[Q01] 创建表
来源：http://www.sxryk.cn/163oyokxlur.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163qvslkoah.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163cmuziguh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163uvvvlgkl.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163izkqiopv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163qoxazbrp.html

);
来源：http://www.xuanzx.com/163vyckywef.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163eyxikkvq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163sbwogoxq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163pzitxfuc.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ohzmtjoi.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163xkvnbupa.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163xaypnlqg.html

);
来源：http://www.aibaodan.cn/163gmzgikxi.html

[Q03] 增加列
来源：http://www.sxryk.cn/163zqzhfiug.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163xgxrzvxf.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163svgsyvmn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163eqfsecqo.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163mybwmlse.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163dkoqfyhc.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163oqjhuyjd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163mhwmohbp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163zngteasp.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163bbqbgkix.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163lgvethlv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ooupwakk.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163wlrjulig.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163bgzezumb.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163zedldgzh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163byjudsxp.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163mlnfgjqg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163xmtfxgyv.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163fymeshob.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163uvcvxojw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163udljdimi.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163etdfgzww.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163lnbmcytr.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163sgrmwsxn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163vapfijvg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ilgkkosd.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163mgfjawjs.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163lwobnvnd.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163wnqqhwxa.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163gnycootx.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163agufocqf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163rmlvpjrh.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163pyktfjyk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ldikndnl.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163pmpccjei.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163nxpxtmyx.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163jiwbbjpq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ecibidah.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163utnicmcu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fmplbriu.html

[Q22] 排序
来源：http://www.xuanzx.com/163bcjdljfr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ejmjlsyl.html

[Q23] 分页
来源：http://www.sxryk.cn/163kazbfkqj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163oofhdnef.html

[Q24] 去重
来源：http://www.sxryk.cn/163knxvhzau.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163vyhkwljw.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163mjvqvstu.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163yjbvdhkd.html

[Q26] 计数
来源：http://www.aibaodan.cn/163kesfiinz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fbdpvoig.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163pgfljsst.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163fhrjvavz.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163xdcsaoon.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ztojkove.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rmgenhka.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163scndelbv.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163lsdmugnz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wbrttsfe.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ypiikdpu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163viudpryr.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163pzyombrq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xktvlhlg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vjopmicw.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163vpfutxbm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163buugrptu.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jmxlpejy.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163qypddwqn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163qqffhfev.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163zrezchuy.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ggahkimi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163pqlzkzuk.html

[Q36] 左连接
来源：http://www.xuanzx.com/163vvhtmdtq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xfzumnyy.html

[Q37] 右连接
来源：http://www.sxryk.cn/163akwlosaw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ugklwkah.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163bekqvpnt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163tnobketv.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163gdjlgxmo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163bcscwkmj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163nulgjhlf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163bypyvmjj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163auvyaxij.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hhhzqgww.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163wuxzjvrj.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163xqthmqrd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163vaqufeci.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163smvxuwhf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163gllsfsbu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163vznrskat.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163vbtqqmuv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163vocpqmgd.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163wfrvwpei.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163mrisxtrh.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163pfbzajpk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163obcthigb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163tcyfvcmb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163igtbpbxr.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ejfxlpge.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163pjkktkct.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163frycedzv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163cavnszim.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163welyjnbn.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163rcitmuqn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163rahmzcda.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163pamuzexo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163sdilpcpm.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163relaqith.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163gvkwhpwt.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163aygzlmmi.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163poxgxsqi.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163aqcdnqlu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vmcydlbr.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163zamnpley.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ktbzqcei.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163liuedbqq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163wgidyhos.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163odxizxgy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163vlqbxzxw.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ghwmlwqu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163afbyxess.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163dsllzyeg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163pnmyzwzt.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163qvsjsqxu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163vruosnka.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163baqqfpxe.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ydhigcda.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163fmovqzjg.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163gobgukaz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163cccvzcjt.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163kqntcnbm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kagwxnio.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163eefvfgaj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163xgxiukap.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163mznvpoek.html

COMMIT;
来源：http://www.xuanzx.com/163pwxqzthn.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163mchgocwi.html

ROLLBACK;
来源：http://www.xuanzx.com/163ywgpjkci.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163luqzayng.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nmrdqzkt.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163nutpjgpu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163eobcjsvb.html

[Q68] 保存点
来源：http://www.xuanzx.com/163eiivpemf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163brbnolly.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163hnqgsguf.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163kvreczyt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163msoypcss.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163sgihhuqs.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163tlakjqoq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ciqrxshx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163bbmbighl.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163vnqjoftz.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ycvesobt.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ntsinqem.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163faxyedsy.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163iqopowah.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163xrdavnxx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163mjxylpbr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163jahqtqbt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163hyldmhsv.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ymdjwlue.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163nhxcgpap.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163uexxfxty.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163mpsjuvth.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163qubjyxtq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163bnrsciyp.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163wnppsuzk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163escxgaqa.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163igzhhcbn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163xteqodms.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163shcsmvfy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163uyhmqotf.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ctjagxiw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163uivjjone.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163bhsvqrti.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163sousoplo.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163vzzlwajc.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163tvcpojxw.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163cagajusl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163pdczcftq.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163dxghsmnj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163okforbrd.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163jdccrybs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163cgzckboz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zedtiobl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163lqopiukn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163xowmlxkj.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jaqiacde.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163tnbkydqi.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163yebexnjq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163nlpmhwyf.html

================================================================================
来源：http://www.sxryk.cn/163wqhpcxlq.html

R. Bash 专题
来源：http://www.xuanzx.com/163chatqeee.html

================================================================================
来源：http://www.sxryk.cn/163ldqtybnh.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vubwkfej.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163uvxbrueu.html

set -euo pipefail
来源：http://www.sxryk.cn/163ipswdpnf.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ugsljjjm.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163gbnonfwf.html

[R03] 只读变量
来源：http://www.xuanzx.com/163vfylwoow.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163rolrocsd.html

[R04] 位置参数
来源：http://www.xuanzx.com/163skcoifry.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163hrclyxmd.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163iugqszmr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163nowygonv.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163gpuwrwbm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163giaumkkp.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163bnwugfzf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163wppirbuk.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163jbecurgs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wgdsodhr.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163chzgxmxt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163byzxxizb.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163fezyzmzh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163vfetuufl.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163tntfjrzi.html

case "$1" in
来源：http://www.xuanzx.com/163hyhnlznz.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ayiqaonm.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163itrotkuh.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163cbxjyzqe.html


<!-- 参考信息 -->