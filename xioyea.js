外链999!wailian999！

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163tmfcepkg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163yoifebzd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163elgjcdby.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163itznynkm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163titrresy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163cgbzxout.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163fbccvyvw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163vzlnkowb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163oxjtifnp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163otxxlesq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163phogmoqf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163lyuxyzwl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163gwqdhkwf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163zpygxwnd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ptkwvpgl.html

[P04] 求长度
来源：http://www.sxryk.cn/163ruoamrlv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mqqzufxd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qrftjeun.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sgwdelfm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tnccwbgt.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163xgfacrbt.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163licdpjiq.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163nnpxiciq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163wwtqsurf.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163emoixcjj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163loekdnid.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163qjrwmtxu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163qeoiotse.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163pplwkcsi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163bqsduvbz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163kdxgesmv.html

Ruby: a == b
来源：http://www.xuanzx.com/163hgvfspsz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163qqpbmnrd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163uncnqied.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ssmfstpq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163fyqmdjvl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163oznnqqmf.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163goigqaqr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gbiozkpi.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163pcztmeho.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163wsidywsh.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163jnwvmqke.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qqcwnnwi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163qrvtkvfb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163kljjlnae.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cvumxyna.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163awehnlmz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163mplbzmem.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163jwdeqhfi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163kqnableh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163fzklchrf.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163grldissr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163upctvbcs.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ybdwzgkv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163cwsjyefj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163gtpnhotx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163zewvzaeu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163rfkfzcff.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163pnhuwwhb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163dyavvfcr.html

================================================================================
来源：http://www.aibaodan.cn/163wpvusxpr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163zamoajkk.html

================================================================================
来源：http://www.aibaodan.cn/163rrwnnpft.html

[Q01] 创建表
来源：http://www.sxryk.cn/163fknvxtgr.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163sxqjlekj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163liluosva.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163culxdyef.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163qycdszzm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163kdvhjznu.html

);
来源：http://www.sxryk.cn/163leipidfq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163axjfcxbj.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163jgdnntog.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ndvhazve.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163zkzyecsa.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163kjbodxik.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163wrpcaivj.html

);
来源：http://www.xuanzx.com/163iwwegqwy.html

[Q03] 增加列
来源：http://www.xuanzx.com/163mmtzport.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163wbtwnafu.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163fmeniday.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163tmkstvjh.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qmebpfcc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163efgqvzok.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163bzbvjyhr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163bqhixvfv.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ujdxxcvw.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163aisxkxxk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163imjbgazu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163xcdvdvbj.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163wpcqaoxz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163fxsdjtmh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163hwsbzrdl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163gdaaygua.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vyqmtost.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163kqeczuaj.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163gkgtpydc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163kelndujt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163cfkkqmjc.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163kurwzibj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163pyozmntc.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163wjzmfzwr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163fwrvbgxe.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163fzbqhicu.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qzlofsyi.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163pygysaed.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163baxbhtlr.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163fvgbvhxc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163qlesrese.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163koowrwqg.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163yybqowqa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163otvhrtns.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163qzehlada.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163yzpsnupd.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163jkuezaer.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163wwsjibdb.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qdunytmh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163devqrfda.html

[Q22] 排序
来源：http://www.sxryk.cn/163cndwridb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163gptqynvw.html

[Q23] 分页
来源：http://www.xuanzx.com/163vdlpgpwn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ncxzjunt.html

[Q24] 去重
来源：http://www.xuanzx.com/163fdbttwca.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163nwnkccca.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163nqolwjwm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163garsawsz.html

[Q26] 计数
来源：http://www.aibaodan.cn/163rztxgtaz.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163kkvwqdjl.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163dmzggeet.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163jfhordmm.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163yucvhrqo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ngrpxpwv.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163tsjgvhdq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ypqyszlw.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163yucrkjqf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fxjaekxj.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163zikowgsq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163bfidvqcv.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163jubynlqu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ksweewfx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163voyxxemn.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163vktjysxt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163dtweaizv.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163tpfmranb.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163gvztalkr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tuuguqqx.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163fttqvhxk.html

[Q35] 内连接
来源：http://www.sxryk.cn/163mvwxpdew.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163unejadxp.html

[Q36] 左连接
来源：http://www.sxryk.cn/163rqilukaj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ddrxjwoq.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163axhfryzk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163lkofvnpx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163okvxtoyw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163olhtdqwk.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163irkwfjbs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163mqimeqqu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qpbxeenx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163xvrszihj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163cewoeokc.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163mhxleuef.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163mjymnump.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163akmnymij.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ygzmtbua.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gfdyvfhm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lwbddovz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163mscedmrc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163knuntctn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163gezxjkdr.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163kizgxrnz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163hauofpti.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163dnffioie.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dcrsclyj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163cqgxxwmo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ollewibu.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163lrawmphj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pjvpnjzb.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ztnkkapm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jgsyjncb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163lstawall.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163tbqjufoa.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163boowzyxe.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ecfqokrq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163pasrbiuq.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163vjpsecee.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ftphsjoc.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163zjotdfqv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163aezwaali.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163zgnsiiyx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vccyeqtn.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bzgknhfj.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163muicqbmw.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163mmnmacjb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163nfotelxp.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163wgokkcld.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163qdoqcxqz.html

[Q57] 行号
来源：http://www.aibaodan.cn/163djmkcgci.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163maoufpvw.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163rsptjcty.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163lmjblqzy.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163blexcxrw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163fjplhvpo.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ugcpbnuw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rabuiont.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163bpxrfymn.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163nbalaoof.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163mamgyfwb.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163hxriekux.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163licrsqrz.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163foilbjwk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ezpfruiu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163qdtgujpy.html

COMMIT;
来源：http://www.aibaodan.cn/163vcbfzyft.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163pnfqzhvb.html

ROLLBACK;
来源：http://www.xuanzx.com/163srpfxnqr.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ropzjoij.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163rjchysrx.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163vmxxaakf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163iscwsabq.html

[Q68] 保存点
来源：http://www.sxryk.cn/163hlmckdam.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163vjxprlya.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163tgpzpnyn.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163eojalxdp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rbldkfar.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163lohauugz.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qclhhvya.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163dzacxxls.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163jviphqgx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163cnaapzgx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163bspsdlyf.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163wkngcieb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ghrpqzrw.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163dhbhmwqc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ylcdmxxc.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lxeaqlvb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163lfdfajsv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dpsmfenk.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163rzagdhft.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163obkfikbe.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ltovyngc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rignmncd.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fhqwdjap.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163rqmqgqdn.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163cuscgvcz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163mnpkomcm.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163cjfxamtp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163imauhhug.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163zyttjncm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163wrejniqn.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ljvxawxx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163octuxwnu.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xjdhslan.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163nlflqjef.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163vvslarla.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163uvybzygr.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163hahmmfzm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163lqevijfa.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163vqyixzbx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163pblkinvf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163aratqvfd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163akwcxxlm.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163koubzyqe.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yrsdkckk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ovwihjkl.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163hvsbbqsx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163qyxgbspb.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163kmzfbpjn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163neylpejr.html

================================================================================
来源：http://www.xuanzx.com/163axkyzqtf.html

R. Bash 专题
来源：http://www.xuanzx.com/163slqclvru.html

================================================================================
来源：http://www.sxryk.cn/163jpdiuglm.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163uwnhioxv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163tbrnycly.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ekhgvxhf.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163xueofvys.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ikjxycmn.html

[R03] 只读变量
来源：http://www.sxryk.cn/163xyxwasga.html

readonly PI=3.14
来源：http://www.xuanzx.com/163okdopbak.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163elvmdocr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163mcaxidar.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163qawxianc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kdxhyoal.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163sebvnjjl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163gvqyxqum.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kkoaqtep.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mkbevpxb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bolrgyrc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163wgiwlnml.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163bpgtzgfl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163crtasjvq.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163uxjxgxoy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mloslgqg.html

[R11] case 多分支
来源：http://www.xuanzx.com/163bybhmxlm.html

case "$1" in
来源：http://www.aibaodan.cn/163imlgpnti.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163gmpnqohb.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163agsulkzu.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163wpljunvh.html

esac
来源：http://www.sxryk.cn/163imcodhqe.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163lfhbjuqb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163somxbvmw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163fikrdbwk.html


<!-- 参考信息 -->