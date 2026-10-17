外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rfvxycab.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ggfkmxst.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163gbiwxtem.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163mwrcbjcj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163yyrvvxqw.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163wjzxkdyz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ccidfmnn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bjjwjjyz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163doqfourg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163tlizzpxf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163tjffpvoz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163hzopelcj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163asrvhqci.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163uazwowav.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xdeirzvv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ghxqoqfo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163rnbntphi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163bbdeingf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wlbuxetj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163atqpjknf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163prqicyua.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ydyyymxt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ipxmeaqn.html

[P04] 求长度
来源：http://www.sxryk.cn/163sofyhnuc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163gyivsmwy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dcqsqarz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163oenrwpxi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163uhwetotq.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163khrpwhbr.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163nlyhrbpf.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163tnxnxvhg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163lwduotuw.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qukptyvi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163pkxosvjy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163moqnmdzu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163uikqjetw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163atcovrio.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163rjlzlqub.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163byjgfriv.html

Ruby: a == b
来源：http://www.aibaodan.cn/163wghbeent.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163dxioiqza.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163olqcuqcv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163uksqvxev.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163xjpvjnyg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163iinbctjf.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163hgmuaupj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163tblyifot.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163uyeuxuwi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163vzdijjqf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163pmodrukg.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ejwdiioy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163fymejdbo.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163axgficdl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163asvrxgby.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xlqoaugo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vngvfren.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163bznzridf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163tkxgfpmq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163nknjdhwn.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163huuhsztv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163aeghjifd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ashrclbf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163mxjpwocz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163pjvebaeb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ktsatnbl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163uewkiczb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163woxuasjw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jpvopjbl.html

================================================================================
来源：http://www.xuanzx.com/163vuylmzrz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163bfzsqgke.html

================================================================================
来源：http://www.xuanzx.com/163oeruopnf.html

[Q01] 创建表
来源：http://www.xuanzx.com/163heowyduv.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163dpoxxgil.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ztetfghj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163efrfwhnc.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wstguipm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ybradhrh.html

);
来源：http://www.aibaodan.cn/163dacvgrfb.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163bjtdokfh.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163quenkzhu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dlypnzow.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163rwuglatl.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163fpmoeyja.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163xekgarto.html

);
来源：http://www.aibaodan.cn/163suyfuzje.html

[Q03] 增加列
来源：http://www.sxryk.cn/163exfhljee.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163radtcoxq.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163aelwgtwx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163qkjbzshh.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163wcanqoby.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163rybfztlc.html

[Q06] 删除列
来源：http://www.xuanzx.com/163aejfvhyl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163yawfjkle.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vstchgrk.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jvjaswiw.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jjzdoxom.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163pcehbzmf.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163xcjhnyjd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163csebtqtf.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163srpegnrm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163lotvrkbg.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ypkmdgds.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163thmiiowt.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163wakqqadn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ndhueonq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163wcpmijkh.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163yikmawlt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163egbosmlg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xpxfilds.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163uamewyiz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163jajcptrj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163mbxhwtuw.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163bdxcnqio.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163cjdvbrss.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163rvhwitfw.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ogwbjdlg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163snisiyhn.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163iathqucz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163qbfhfckv.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163jhgllngf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163plshisxg.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163kdfgdeqc.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163hinyplkq.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163rtlnzary.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163nnpnvfwm.html

[Q22] 排序
来源：http://www.sxryk.cn/163dahzmodt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163bephkovy.html

[Q23] 分页
来源：http://www.xuanzx.com/163imkiilme.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ozstmlks.html

[Q24] 去重
来源：http://www.xuanzx.com/163fklcyhbw.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163nfkiepjh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163lovdagfh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163uddliwoj.html

[Q26] 计数
来源：http://www.aibaodan.cn/163xfvqbfcu.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163tyfekyrt.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163iauqdjyw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163gtfkwsxl.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ozxxyjmq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163hqbyicnq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163lpsjzlau.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163rktukzky.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ozorohsd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uqqwvjev.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163jovgenfy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163azjkbxiv.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qcqsxyld.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oisxugsa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163lznxefvi.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163kngfhsor.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163oxpkkpvl.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163pmaojpla.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163savfwqsq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tqblopgp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163mhvtojji.html

[Q35] 内连接
来源：http://www.xuanzx.com/163jnxqwtam.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163jixiqcen.html

[Q36] 左连接
来源：http://www.sxryk.cn/163vmsfmljb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gikhccna.html

[Q37] 右连接
来源：http://www.xuanzx.com/163acxjdlit.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163euanmonk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163mclqtfua.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163onzrkdbu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163lerlumrb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163asnbntkk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163anaikfgj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vszfsekd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163nqpkccjv.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163nefyokxn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163wdfvgrxf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163nsgejpvt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163uwnrfait.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163xrienffm.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163xrkmizya.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163dsotgwdc.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ptfltmtx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163psjuyvlo.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163qtsuoaff.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ieldxfdt.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163rmphmwzw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bwpxdrje.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163brbvbvdx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yivojqbp.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163tqbfucxz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163bvaxndow.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163pcoavtbb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163wjoheacn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wewwcroe.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163erjyohil.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163lfabunbd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163hmflntwe.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nxbwplnz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wrbupxak.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163olpycnhc.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163hldmyirx.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163fvzfgstl.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163tpmqwruw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163vamvkacl.html

[Q54] 清空表
来源：http://www.xuanzx.com/163vqfhtlfx.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163rhscyubb.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163fembyhot.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163skrjxkdm.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163gdfpqrrs.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163pigujldo.html

[Q57] 行号
来源：http://www.sxryk.cn/163zystzpdr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ogjvywyi.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163inaqggkq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163nghcbsrz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163hevbivdp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ydhwvmex.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163xbjamian.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ogccavpf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163drcomgkt.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163gxmmwjin.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yqwvurtn.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163eafzdbli.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xiffxghj.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163hkfxswwi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163svzekeod.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xxjkseum.html

COMMIT;
来源：http://www.sxryk.cn/163chuffgdt.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163zqxhggyo.html

ROLLBACK;
来源：http://www.xuanzx.com/163pwobqemb.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163bgchctgw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163innsdodd.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163sklmyfxo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163uuiqhxad.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zfqcsmqy.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163dwwbjzlp.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163bigitklo.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163tircwbgm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163zsnazhpo.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163zdrsnjnv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163gmlrzxhq.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ncmqiowp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163dnulpjqz.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xryxipja.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163crgsllel.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163fwwrplyf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163mjgpdfjb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163rpedegjw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163rwolytfw.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163msxabyyp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163zuigaqni.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163hyvlvzdz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163makgdlje.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163pwnwjfal.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163guajzkdm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163xyobftqo.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163oynxqsfj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163eoceowoi.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163lfvwtmkf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163tnnmcayh.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163czyaazde.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163lrdirhej.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163aeozwobh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163achwbidu.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163yqlgeopg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163inbhrczk.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ovwfxikj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163uxdfpfzt.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163gpnaafzq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vhscncup.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163fpfnfszb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163giyustaq.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163uvtifqch.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163eqhqbcks.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163agvfliaf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163yachgdpc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163aqzmnvmp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ifpyxbxf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ldiemvpj.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rnwstolw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163aiurphvo.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ynvfczke.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ruukrwro.html

================================================================================
来源：http://www.xuanzx.com/163chqobnwj.html

R. Bash 专题
来源：http://www.xuanzx.com/163xhkbgdjg.html

================================================================================
来源：http://www.xuanzx.com/163ogvhmhwr.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163csxmwtyj.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163phgtuhhb.html

set -euo pipefail
来源：http://www.xuanzx.com/163vanbiiio.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163urmrbueu.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163xzjbafvr.html

[R03] 只读变量
来源：http://www.sxryk.cn/163pnlgrpbe.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163idpigrco.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163rijzqhha.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163kkaietcg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163qhaiovvj.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163hncamlkc.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163jnfbbyjq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163gzsrunxv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163mqjbyvoz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163xudihhte.html

[R08] 数值比较
来源：http://www.xuanzx.com/163mndxbids.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163qhsumyzg.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163qmjmvyzm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163kvewinzt.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163jiagbklb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163kbsohmei.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vkennsnl.html


<!-- 参考信息 -->