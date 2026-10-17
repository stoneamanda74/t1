外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163iryyqesq.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163jifvjyjp.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163rkuluhof.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163uqxeizmy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163qgqmwywx.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163axeqtpui.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163zqvcfwkn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163qmbksrmu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163xpojlrpn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163gthqqogp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163xcyfkrlm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163cycowrki.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ppsoovke.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163qgwxuaml.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ajltqngf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163kididics.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163olyqafpt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163lqxlutds.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pezcvrbm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163seawhpfd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163dbnxgvzf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163hlgqglpq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ojwcuoos.html

[P04] 求长度
来源：http://www.xuanzx.com/163cxwsjknr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163emqwnofm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163hjzbnuam.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yovmyynk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wbyzdurw.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ftytfiwp.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163varrzsfl.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163beaimzuq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163jfcxmmoq.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163wpbqcggq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163xwtswcyv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163bvlhqyqg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ibehermr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163cgikrcin.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163dqpklnlu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qzopuvgy.html

Ruby: a == b
来源：http://www.xuanzx.com/163gyxppcld.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ujlrytfq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163kaxngvix.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163eyvlnztt.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163cadnycax.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163vnjjippj.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163amvksssp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163qwvzpuem.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163xtxckdrt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163rztfypyd.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zsngouuk.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163yetffrbz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163qjaxyjkh.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163mnofekdw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qgxrbumk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mtrtkdoq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163cfatvxea.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163yggcbjpb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163oioltnrr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163uoxfdzlu.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163mkrixhbv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163sqjwvbdo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163pclgaeko.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163kweeqfwv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163rqwulljx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hwmqrddj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pvfskeje.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163mfmgscid.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163msunmaio.html

================================================================================
来源：http://www.sxryk.cn/163yybvvuoi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163sihkbgkp.html

================================================================================
来源：http://www.aibaodan.cn/163onbszmal.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zfivwrdi.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163emdsjomg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lxuydslq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163wdoxkhbr.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163oyxrcybx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163qzvqshde.html

);
来源：http://www.aibaodan.cn/163vvnaniol.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163qfqwahps.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163njditpvy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nqvflszi.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qstlntww.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163gxtphbqf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163cixvfzkk.html

);
来源：http://www.xuanzx.com/163qgfrdokw.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163pqpmzwrn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163fobuoxxv.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ndukrswy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163jprzxior.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163sqwnfykf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163daujjucs.html

[Q06] 删除列
来源：http://www.sxryk.cn/163xyqzkyeh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163wevbhwze.html

[Q07] 删除表
来源：http://www.sxryk.cn/163tymuxvfs.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xpksjfed.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qhyoovzf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163fsmzdjfh.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ncrjyive.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163edgexhuc.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wosfbpln.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163pjnxefyn.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163mikezbsk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163lfgxglbb.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163fgrtdrrl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163tjlbnbqm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163dwxfrgzo.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163bimsqggy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gckxrxtx.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163uzaflpdo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163qzmnwapb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163asxwqqqo.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163gwxlhran.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163hncfiufc.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163dhvgljoc.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xperslio.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163hvbfazhv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163mbyauiin.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163zntynrgu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zuifdpyg.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163dkqnjbmi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163mxslovts.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ymwekinf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163lomwxalc.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163hbgpwxdn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163euasnfiu.html

[Q22] 排序
来源：http://www.xuanzx.com/163bllyqoqb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hezwotxw.html

[Q23] 分页
来源：http://www.aibaodan.cn/163orgfmlnr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163prfjremw.html

[Q24] 去重
来源：http://www.sxryk.cn/163keyneokk.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ocurrwgo.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163optveakj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163kojisxma.html

[Q26] 计数
来源：http://www.sxryk.cn/163qvnblmgn.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163twaatspq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163fegnpowm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ltzrwhvk.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ifrcdztb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163yrksahwt.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163bougrrfq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163brtonxyr.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163fxdfdmid.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ozyqxjwc.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163joubzhmf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163rhfxcdkw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gkhcgzmg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lmseijcg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163qbhmofax.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163oczfaepl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163airiotrz.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163woxmaraq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xwruovvj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163xmtsqsvo.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163eagvjtot.html

[Q35] 内连接
来源：http://www.xuanzx.com/163oilowxpn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wsqfujqi.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ltujylva.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rkbzdyjf.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kynbyhrh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ncgvaace.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163rvpkwrys.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163xyyizzdf.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163euiehuyc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ostrvrkb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163pzuzeezl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ixkzjzvv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163fjvydsga.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163tthxloxu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163kivjlduz.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163lkbxruww.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163onwgzztq.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163pvegztel.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163byyvojxa.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163tcjxiifb.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163bvmterwq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163keyfqvqj.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163hweviqhx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163bcemsjtl.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163thuadtaj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wlhmjgfr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163zmmonmgl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tnkmuquo.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163jmzfhrmh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163xguxmdhm.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163mcgynegj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163zehtutmz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163npxazyto.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163emespiyh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163obotweyu.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zhvelilu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ofunokgg.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163rxuigbhy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163wimcmtqx.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163gjksvayh.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ifpvfgyz.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163weerujud.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163npnyancy.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163dzsvrnpw.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163rvgwpngr.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163xudppeuq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cbfloqxy.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163cuckgbly.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163kzkbjdrv.html

[Q57] 行号
来源：http://www.xuanzx.com/163qymjevey.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163vzolpcoq.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xoxpcpuy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163duznekla.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163poswaccz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163xdgyheke.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163nvvlzfmp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163pwyzdmuq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163qvztyqyd.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163jggqievc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163wfzlzfoc.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163kqsrisem.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163oydqusgl.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163jbyrkvux.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163pexclpvy.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163vutygwzg.html

COMMIT;
来源：http://www.sxryk.cn/163diquwfoq.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163eqavvsle.html

ROLLBACK;
来源：http://www.aibaodan.cn/163imwvtapm.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ftwzkkwu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qfjyvdfm.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163xauoubdd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163nqqqhjxm.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mnkefmsv.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163vhaouflb.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163tqseqcki.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163evfmofcq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163xoiznhgt.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163udcornzx.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ksswkkeu.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163snhavucy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163uyneitxb.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163dkthwmgc.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hsjyparc.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163vxulnbci.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163jywxvqmp.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163pvvnlefn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163zpizflwd.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163phmnjynl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163exisnpba.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163hkqstgke.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163bdgthoox.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ovuygiht.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163fvnhykkc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163knzfccqe.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163jdcuysmi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163nvhsqrzn.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163gybykpun.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163uxkqmlov.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163cyxvpjmw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ywaejqpg.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163aoydnyfq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163dqyfshur.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163nboecbtk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163bwuqherl.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ffntqmeh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lmkoohlv.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163jiahrnnu.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163munnlgxa.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163kpukswjx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ggabxrfc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163szeutytw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163psjoeviy.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163pcazqzse.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163bvxgwkdf.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163smxtoxfc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163xjfbpnsc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163bwzopugi.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163gkyswfqs.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163sxbbjhen.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163wmwzumxo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163tzankheh.html

================================================================================
来源：http://www.aibaodan.cn/163yclkmdrw.html

R. Bash 专题
来源：http://www.sxryk.cn/163ocpymsdw.html

================================================================================
来源：http://www.xuanzx.com/163jvnwhtrg.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163gjgsrsfw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163gghhrccx.html

set -euo pipefail
来源：http://www.aibaodan.cn/163gnkrjymz.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163vblsldvt.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163zrymhxvb.html

[R03] 只读变量
来源：http://www.xuanzx.com/163clykheyy.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163nfpxpfyt.html

[R04] 位置参数
来源：http://www.xuanzx.com/163bxvbvkwy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163juzxxlnn.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ldffbdbj.html

name="${1:-default}"
来源：http://www.xuanzx.com/163bhqzeedc.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163nzzjkocc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ijuqbdfo.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163uzhvadlv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nxvrkept.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163sszufyaz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163oypbcmld.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163sxdieomx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mkojonte.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qcgekatk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163jgjocmcw.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163dexygijf.html


<!-- 参考信息 -->