外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rsvfdmju.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ienxdvml.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163dnlpcscj.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163kkkwnlpb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163cbdcxfce.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163bjsxwjnx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163glnuxidf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163epirzuqc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163fomlldmy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xabxhrlp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163lnmovlzf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163qlyhpuxb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xcnelrfr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ldqoimsj.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dypgymmq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163uaignywg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163rauzrkvq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wbnxdwty.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ppxzscpt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163bxkubqpi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163yykdtsxk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163fdoorphc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163vhjfvcmt.html

[P04] 求长度
来源：http://www.sxryk.cn/163agnejayu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163xgpezasx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mqakruec.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rjdckaus.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lebtympa.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163zclsthgb.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163pwfcjnfx.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163tuuctkbj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163xgfvvdmf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163znfiwdxn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163xttsjpzu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163xaioqgba.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163advhisot.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jnjhnpwq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163dchvlhvd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163cmkccrwi.html

Ruby: a == b
来源：http://www.xuanzx.com/163zcybbiov.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kmumjcjq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163kqgybvbg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163fvfdhjcl.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jtnbeilx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163lejtelim.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163cggjngrt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163wdofswgg.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163nqjhzaqn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163bhevjdka.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163xswtlafq.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163lepcedji.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163rntpnrbb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163vzewcvjo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163katpyfmx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163aiibcnnt.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ipmfqher.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pjeirlcj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163wgruupqu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163cuxheale.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163iaxgsyap.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163timaapot.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163vvzpxqfh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163nhbcsxri.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163xweymyny.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163smzhvsfc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163smgsvfjr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zrqnfnwx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163nodeojer.html

================================================================================
来源：http://www.aibaodan.cn/163wdnkyhrc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163dbmgedre.html

================================================================================
来源：http://www.sxryk.cn/163fgzaeyup.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zcjfmksw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163qxtkfjtq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xtjsogrd.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163buofwdbf.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163pjljvucn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ssjhizcd.html

);
来源：http://www.sxryk.cn/163pivgvsbu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163bjhlfeyr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163bsumbcsm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ouxapfrz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kzqozzay.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163aqjaxzcn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163survxnch.html

);
来源：http://www.sxryk.cn/163nmjgzncu.html

[Q03] 增加列
来源：http://www.sxryk.cn/163uqtczhaj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163webkduor.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ztpwfshw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xrmhbrdx.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163rkpwvzyj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ypczneuz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163zmcjdwqb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163xlvjvzvo.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163gbcfoupq.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163bigqbtah.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163hptwihxb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ftwokzqm.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jzouvhxl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163slfcdhlv.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163evfuhzdf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163yvtxtlkv.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163zmivwotc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163vrbdfhpq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163pljiwxlj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163byiznyud.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163nnjjrzhy.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ovmjwimf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163fyrmmfzw.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163aqpbgkzb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163sxabyfum.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163kxivzpve.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163iicsdzce.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163eitmixwl.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163dwyvkcmr.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163dxzciaxx.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ipxisvct.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163rvqgnmbp.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163lpbargde.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163trozpnkr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cuacjmwp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163qpupxzns.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163thqoofcv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ohjfgspp.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qqxuafgr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jbzdrjmx.html

[Q22] 排序
来源：http://www.xuanzx.com/163uztzquif.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163hpgffpvw.html

[Q23] 分页
来源：http://www.aibaodan.cn/163iaorfekq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163bbubjuly.html

[Q24] 去重
来源：http://www.aibaodan.cn/163casceciv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zunmdegd.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qdwwdqya.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163fyacgukd.html

[Q26] 计数
来源：http://www.xuanzx.com/163fkmikblp.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163qupygzum.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163witijudd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163vqpwcynx.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163zsbjtvcn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163uoqdozki.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163mcqbqafz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ngjdolrb.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163umhdvakv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ylxkihzx.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163gfhhxghv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163puxsxnct.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163sdlrwfyv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163klvdngld.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163fiylfdip.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dxcaqwyp.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163mjwqytkl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ohxucskl.html

SELECT * FROM (
来源：http://www.xuanzx.com/163dpyatdsi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163rxkseagn.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163wfqshwns.html

[Q35] 内连接
来源：http://www.sxryk.cn/163togmftoa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163smxzsmys.html

[Q36] 左连接
来源：http://www.sxryk.cn/163gjmucrvo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jntsvkse.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163nwcfhdan.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163itpdxkds.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163zjvosgpw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163mxblnzlm.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163yagrrhnb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163eiddaart.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ihyeplkl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163xzudpxch.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163pmqsktba.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163fsmaetch.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163zdymhfcs.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163csrzvsgs.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163kqcvmsfe.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163hsqagqkl.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163lqrxnvcc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163quieabfs.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163dwrtbhgp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163pffjxnrg.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163qrjxgcfw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163upmyrzhk.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163joknzlnc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163zqrudjpv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163lcrzewyr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163obewiitg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163unmfdlmk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163xmajzdiw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163qkdyshss.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163uoqkcovk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ifakhjdd.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163gyfvlejk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163miejtpjb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163anqwgoja.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163exqesaol.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ihsabmjk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163eiesczpk.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163uygsvcgb.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163musswgzb.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163cidvliqb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163lyfiappw.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zpzkkdkw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163duuxjoup.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163jrxkqzqj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ppcyasgt.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163pojvonoy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163jhdupuyq.html

[Q57] 行号
来源：http://www.xuanzx.com/163rspsunst.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163jqgpydwz.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163tmuxavoa.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163bzabbsni.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xconjhhd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163nszrmlli.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163maqegchm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163uexplepi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163mkslmrue.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163vtmohxen.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163lhqxrkck.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163fawshvcq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oapysboa.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163wqwlkgnj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mwzcjkia.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163zivjyknr.html

COMMIT;
来源：http://www.sxryk.cn/163ypoeycvv.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163cedtndzj.html

ROLLBACK;
来源：http://www.xuanzx.com/163ngicjmos.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163xryjkzhl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163gmwnpwdq.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163oqzqwied.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gogqzneb.html

[Q68] 保存点
来源：http://www.xuanzx.com/163igurkwhq.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163dowokija.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163enjyuvjl.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163pkgusxti.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ojnqtadp.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163exwqzthh.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ybtmhdkr.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mydbminh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ssdkoskn.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163bgmtaggs.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163pwxqyzbi.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163gprrjyvq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163qiqjyyff.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163vlqrnned.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ueomocxm.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163awfffrmm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163qmsgaair.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163orccyhwq.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163mgtzywgj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lzetesqj.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jchyzdqq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163thomszgo.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163habxfbnm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163cpxkmaxv.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163rzadtfre.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163syidinho.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tkgruzdw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ufcabvqi.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jqneyaqx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163toyrmesq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163buzlxiby.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163sdanwvxg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163camvqeoy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163sjahtmxo.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163pzrobxhf.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163hemmasda.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163pnmsljwa.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163mippycem.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163alsnapfy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163tcfmxrua.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ndsmtrjv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vcodpxxf.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163pnkeotlr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163jrewizdf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163kqsofxzx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163imprmduq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163jxykbmly.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wydlcwws.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163uyufcqvi.html

================================================================================
来源：http://www.aibaodan.cn/163ievockcn.html

R. Bash 专题
来源：http://www.xuanzx.com/163pzmlwrhf.html

================================================================================
来源：http://www.xuanzx.com/163rnfcrilo.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163mxixtaee.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ocbopcoq.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ttyfpicj.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163sudtbxvn.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163tgozjibz.html

[R03] 只读变量
来源：http://www.xuanzx.com/163mduccrci.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163qwmjxord.html

[R04] 位置参数
来源：http://www.xuanzx.com/163bkxtfucl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ffkftglr.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163fbuponpz.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163yruabyhd.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163altatbzu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163hkbeggwd.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163lqwfjvxb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163diiztqiw.html

[R08] 数值比较
来源：http://www.sxryk.cn/163yczaqgsh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ndtbpwtw.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163szywlkrk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163smrgeyok.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163bzpctvme.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163nnuvgzxe.html

[R11] case 多分支
来源：http://www.xuanzx.com/163oqtjswqp.html


<!-- 参考信息 -->