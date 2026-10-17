外链999!wailian999！

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qofskgsd.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ckimkdwj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163uczvvxqn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163qrpxoqhh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ufqkcgrw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163khyjqdtj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163gsevmewv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163jtnqjqhi.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163lubvjwnz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163vkhffvcj.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163xqyxcvgp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163hcyvbgmf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163roehtcyk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vfpvzygn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xxnctjxn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163mpvqnmus.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163uhlspzgq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163btbgdosu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ortokhkd.html

[P04] 求长度
来源：http://www.sxryk.cn/163nruzjadl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ujfgukpc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163egitwatp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vhdpzvwy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ltmoahmg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163qzrvbvyb.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163dihuexps.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ipwzegdk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163sjfguhkw.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hbbtqyri.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163hmzslvap.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163vjlltpzc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163xphabthz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163atcaoyrq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163yixdjjpt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163cpespnog.html

Ruby: a == b
来源：http://www.aibaodan.cn/163umwljycz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kvzstott.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wdcdoydj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163vadsoftm.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163qqzguxmv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163nzdoofap.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163bggenudy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163fbsgpkvh.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163amambewd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nfbfldvi.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fpznlona.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ysbzczmk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163toozlrle.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163qaettyzp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vuedjahw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gqatmrnc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163psfgngue.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ornhsgwy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163biboygfr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ksscbmwn.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163emrhmdss.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ojzbiubf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163srcxbthj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163mxydnqnn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163uachzjqh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163lntdhhqw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163xwvzebwm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163jxgwcuiv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163oqgizpmj.html

================================================================================
来源：http://www.xuanzx.com/163wfcrrezq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163grtusmnp.html

================================================================================
来源：http://www.aibaodan.cn/163uvsbtiqn.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163vxmdxiov.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163zxajowtp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163asvbigub.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163chjkteaa.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163znczycdj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ywnzuiih.html

);
来源：http://www.aibaodan.cn/163fflchlit.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163yzmsumxr.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163gauhrdrd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fbjffbkp.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ybsofzmo.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163bhwqxafu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163nqzmwwsb.html

);
来源：http://www.xuanzx.com/163redbefyg.html

[Q03] 增加列
来源：http://www.sxryk.cn/163wqxqfynm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163uvqjqhmw.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163charycoi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xilknsdn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qnomhzot.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163jbrosltf.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163hbzlljoj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163hzurqsee.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jpxrzzdx.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163dqnwoixm.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163gsryundy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163incaytoq.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163smjgcgvf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vqrgbiwc.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163quvfrhqg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163hienqkml.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163nresrttp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ojpjrvcp.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ugscevxf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163dxhykxnl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163wufaftbu.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163oshqtjhp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163vcxacpnh.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163hcjcaldl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163aixnwdyh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163kgweihns.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163irvtxvaw.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163irqpjjef.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163rvnistuh.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163oncozpqp.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163enmknhwr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163textkgwo.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163onqndggf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163tfzosens.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ezpdtflo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163cvulwtjm.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163aiyuphhl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163oxhtzkag.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163stpiemil.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163nkjbidvl.html

[Q22] 排序
来源：http://www.xuanzx.com/163wmxhnmfa.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163cqjuerbd.html

[Q23] 分页
来源：http://www.aibaodan.cn/163imdvagbn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163dwrsnexu.html

[Q24] 去重
来源：http://www.xuanzx.com/163ajwcxwlu.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zxyrrecj.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163tunuzoce.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163zpytyhqb.html

[Q26] 计数
来源：http://www.aibaodan.cn/163niuvcaod.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163wopdkzwi.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163vnaqlfuc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ektwmzvf.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163goqcnyun.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163brwpfrsy.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163syldrdef.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163cophrjje.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ccvslbsu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163calbltwe.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163udqhivxo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163svpjxtpg.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163wctiiqtg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tpldqnct.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163okrlbhzm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163biifwzii.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163zpadreie.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ytzalznk.html

SELECT * FROM (
来源：http://www.xuanzx.com/163panpxazj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163vqxmfiuz.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163krnhfxtb.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ikqojspa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rcpnyxbu.html

[Q36] 左连接
来源：http://www.xuanzx.com/163uasvqwmd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163fzfeslmz.html

[Q37] 右连接
来源：http://www.xuanzx.com/163nqhlvwtf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163hifjbhih.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ztqxlaco.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163etnvkbjz.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163qrkmxwmn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163kedczgfc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163utbyjjwt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ryyqitey.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163oinbknnt.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163fqtlatme.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ocgqwimh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163dhqaqcxs.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163mfjpjjut.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gdmvvozd.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163sjkvqlfs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ykgqynre.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163saeceeql.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163mzlbunam.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163pifjotjs.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163culuurze.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163waraydxk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163oabfjjlr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163yrmnmfas.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wuekzooo.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ncayuqwc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163rjwhnost.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163cuzzmbvr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163kvdgozeu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bafidawu.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163hrqpiuzk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163obmfkszt.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ilmsntil.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nefycfel.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163zlhmqgcz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163gdtcsrrw.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ijfitpbp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163vmjcgybf.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163dqcnswkp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163aftmprmf.html

[Q54] 清空表
来源：http://www.sxryk.cn/163fhdgvwvn.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163dufcaqzg.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163jhvkaoae.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ihpslhrw.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163gdlridep.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163suvhrkba.html

[Q57] 行号
来源：http://www.xuanzx.com/163byhcjdqn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163pmgiigns.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163zdftsbnp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163kofykzdr.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qcfbicwt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163dztncrfg.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163rwzmkvmz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163zgiuixyl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ojcriwxb.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163jqniakkw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163mmaagzbe.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163wpxwdwnr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pitscdio.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163tmupxfbq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163slyvvhyx.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jfqkdjah.html

COMMIT;
来源：http://www.aibaodan.cn/163irrxjnnc.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163fkwettnw.html

ROLLBACK;
来源：http://www.sxryk.cn/163wfeexams.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163kasabcro.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163doyrtehx.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163duqjpmug.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lwnldxgw.html

[Q68] 保存点
来源：http://www.xuanzx.com/163bearczkl.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163yuwrhvmk.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ipdbypoc.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163grialuls.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163dijmpule.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163yzhiduif.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163qbdhoejo.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163rjgldfku.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163llzhvhbh.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163aeyxfgfb.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ohvabbso.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163hekdgjrb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zfolpryk.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ipvngrlo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163vjduperp.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163lkufritk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163bqjuteer.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163vvdmvggz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163gmcjipwu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163vmnjkdqi.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163fovljdee.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jdcchrbi.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163xrhqemoa.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ilrutxai.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163npxqsfyb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163pkhnbzac.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163skvibdhz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163harjwqkl.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ppbbgvpi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wfkwpslp.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163drszzqab.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163gubbjbqp.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163lxrbqzdq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163mluarwis.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163nezyrmpa.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163brgtdabe.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163bkhsajpb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163nvcnboje.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163zffwmwkp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163masntkis.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163rxnydwnv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163iqfldfpz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163hpbswkst.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163fzarjlhn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163fcmcirpn.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163nknxfpyl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163joixuokj.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ppjvhfvv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163lhulhatf.html

================================================================================
来源：http://www.aibaodan.cn/163xvtklnfg.html

R. Bash 专题
来源：http://www.sxryk.cn/163lmciwdrr.html

================================================================================
来源：http://www.sxryk.cn/163sniiohjr.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qiyuoeqv.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163octsljek.html

set -euo pipefail
来源：http://www.aibaodan.cn/163nhtvkmzx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163iklsdimd.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ltqdltll.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163bkvgzzum.html

readonly PI=3.14
来源：http://www.sxryk.cn/163bptfspsy.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163svgkfzlw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163tiuzyaol.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ipoghiic.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163nfltjohz.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tjnieaov.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163vekyiqex.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163jvuemvaq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163rgvwmhsx.html

[R08] 数值比较
来源：http://www.xuanzx.com/163nexgbqmw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wdszbkly.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bbqlrfld.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163zwrdynnt.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163iqbcnkax.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xqzqyedf.html

[R11] case 多分支
来源：http://www.sxryk.cn/163dtcrcsfx.html

case "$1" in
来源：http://www.aibaodan.cn/163iqoulwvy.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163baydwlpw.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163qelynflw.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ntrwriez.html


<!-- 参考信息 -->