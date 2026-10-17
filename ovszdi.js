外链999!wailian999！

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163xzggzjkz.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163bonlhnpe.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163qowvsepr.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fhncyvpj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ksfbfbua.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ljwhwoto.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163rcbewqii.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163aajvvpnh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163drgpikhu.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163aedqpxyv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163fraqcxqw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163oujbrvwg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ialwsvow.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xfftjwzb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163nznhnpqs.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163xfgyetwe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163yykzgolz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163jgsqdrxl.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163drzvsvzx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163juuwhnqz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ewodnyhj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163icmbwguk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xawogbpc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163tzeqguvy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163hqopuubl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163akqxdlfa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zjbxlopz.html

[P04] 求长度
来源：http://www.sxryk.cn/163rxpbzyaf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zjwwlliv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wofhwbms.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163dcmabwrm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fvntxlsw.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163srouchsa.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163vjftcuwu.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ewhrhmfd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163wveavmxb.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163paznqcoq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163glyszfvq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ropnrdqa.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163tprwqfzw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163mkkzuprt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163biymaemt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nwrclolw.html

Ruby: a == b
来源：http://www.aibaodan.cn/163inqqhyth.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ltkcwfau.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163pdyiuwhz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163tswbkzkc.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163agfqvjvf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ffgxgqac.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163uyqfktep.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mybcynbj.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hiylmstd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163dlknquto.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163eclmelna.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163xgampzqt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163mmkjlgfi.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163cwsbrmkj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ilptzwjd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lajlrqky.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xsndhmyq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pqkbntcy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163gnrbqrfu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cbjwcwpo.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xxfyzeiw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163wuaqcsaz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pozhfmmp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163qnqeeljx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163zoictdtl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163hcyapomu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163vfhqslmw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163hbeojtnc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ucdrgtty.html

================================================================================
来源：http://www.sxryk.cn/163znljmtib.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163lwztwbvw.html

================================================================================
来源：http://www.sxryk.cn/163ovuqoaaw.html

[Q01] 创建表
来源：http://www.sxryk.cn/163hnkftonr.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163jrazjuxr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zahgizpt.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163thktrown.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163keaycptv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163untvoamc.html

);
来源：http://www.xuanzx.com/163djitkgao.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163joyhwnoj.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163iqhpayjn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ahtodjcw.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163nhbwmmhz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163clbxgqwd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163hbvhqmep.html

);
来源：http://www.sxryk.cn/163dnoamyzb.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163vieabtfl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vlzkxrvl.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dljkjndf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163kpwiidui.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163xatokafx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163qxwwzjfn.html

[Q06] 删除列
来源：http://www.sxryk.cn/163iangbhjk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163wusfdwmc.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ctdofkjf.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163vnbavylu.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qjnedluz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qsnyeahy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163zrivdgwp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163pmyqlzzs.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163jlysupmv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163azhsjvvw.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ngoeugmq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163wyphuhmg.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163bmojhhwb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163yrzgaqqs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163rdalcmqx.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163bvuwmxls.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163odlutehs.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163pajdevmm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163emhhagyn.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163wlqxqwcs.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163lqbnpnfx.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163dsfnfzje.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163rbipbhuk.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ngaiiqqr.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163naxuvlsp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ncvwtukx.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163chxonuaf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163gfhaqqgj.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163giblumyn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163gxrfpwmh.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163riuvsqrv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163bkfkbbnv.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163khjqbikb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mkmnxmld.html

[Q22] 排序
来源：http://www.aibaodan.cn/163jqmyvbry.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hrowenyq.html

[Q23] 分页
来源：http://www.aibaodan.cn/163izocljfd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163unlmpuqi.html

[Q24] 去重
来源：http://www.sxryk.cn/163tukbwpxk.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163yuzdfmie.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163hqryirwc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163gcxfwcdc.html

[Q26] 计数
来源：http://www.aibaodan.cn/163hmqksfzf.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ghludnyx.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ewftfflg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163miuylecm.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163wmrzmcwz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163wzvnbkke.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163icpmlsmr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163gashuhom.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163udfclder.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nezflatq.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163bbgzxgyt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163dfmogltj.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163mojfkhqq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lpttunca.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163fklufven.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ibrnhxjr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163lqsneids.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163nkbmgayd.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ahfqhwit.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163cbkxftbj.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163fmmgcgur.html

[Q35] 内连接
来源：http://www.xuanzx.com/163kejaeuuh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ydzaskgm.html

[Q36] 左连接
来源：http://www.xuanzx.com/163lncliqxl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163spstcley.html

[Q37] 右连接
来源：http://www.sxryk.cn/163jrzlsujv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163hcxccfwk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163rillkhfo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ubwnpapu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163hoznpnbj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163uxndtwyb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163zxooupht.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163xfssjrna.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163yfuxgikl.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163naixcvfj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163jnlbqgqe.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163zptdwabd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163htnrtwdt.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163edpfvawy.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vnchttqh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163kqbgosgr.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163gdfvobam.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163nrzvdqni.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163mknafyez.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163wqxdtszp.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163jabmomxx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163animkfmz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163mwjhmlyv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163eymaekfi.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163esibsgmq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163qivaoeus.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163dxvyhxdi.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163crrbdnha.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163tcdjmhec.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163elgfslcc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163xmglbeho.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163wpsvbxbx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163gexhciig.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163pwmgdwgb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163mujnbasp.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163oghvzzao.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163gacrierd.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163dxbwpczv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163eefjuvpu.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163cabcddmz.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ghvyqjkc.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163rzlcifjz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wntswcra.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163qczmxhds.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163qtajbypn.html

[Q57] 行号
来源：http://www.xuanzx.com/163dfkhcrcg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163rystwggf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163flgddfdg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163knjfhwcp.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163mqjcccgb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163emeomwrl.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163hfwjsoez.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ttflfpxs.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163hgjnykpj.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163cxwmcvnc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163fqauoout.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qtnpvcyq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iuhjluxf.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163hzbyrrbf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163dogxxwsl.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163bmkyllol.html

COMMIT;
来源：http://www.xuanzx.com/163jhwxasbn.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163grdudmkh.html

ROLLBACK;
来源：http://www.xuanzx.com/163hpfrmlhg.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163zgwydtaq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163mgvvcref.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163wwnpktkm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163wkgqarix.html

[Q68] 保存点
来源：http://www.sxryk.cn/163lbqmkfer.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zxrcxtjg.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163fystvtni.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163wbzbgkzw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vjxsjbrl.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163reyxodjp.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163qwqvkvke.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cixnktlm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163owtejrxs.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163tvrnpqem.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163pwkukdnt.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163diiqeayv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163mdpjirxg.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mbjwjtto.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163yuyalwgl.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163pnnmniff.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163vxxgpqzr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163vibtaitv.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163rlcgwimu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163svnzckug.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163rkbiihgh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rbwibqqr.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163pbgvxtsf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163gzribypf.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163wncvalbw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163uthpgxzc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163fpfgxmiu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ikfhnrtc.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jhsmnuqe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163urxuymmq.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163erwqicee.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163hpcnthla.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bqgcewvs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163dhsxnqfl.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163dbmdswbw.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163xdpcocvi.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163lygcqvdb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163dudmervl.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163cqrrsdcj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163wdaupmwo.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163kwujlesu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163wcsepwzm.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163rkjvskzb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ujvalkqp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163lanxeemb.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163lxhofkez.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163plaotheq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163gssbgpit.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163yvfhyxvn.html

================================================================================
来源：http://www.sxryk.cn/163aqzbmatj.html

R. Bash 专题
来源：http://www.xuanzx.com/163muoktxbr.html

================================================================================
来源：http://www.sxryk.cn/163sjtvtatu.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163kuffreop.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jxkkymlh.html

set -euo pipefail
来源：http://www.aibaodan.cn/163lrfcdngt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163bcajvyrp.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163foxddkoq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163iwgxdupf.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163xjxvlcar.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163qvhidwrp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163fgzhnvyo.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163pezqrgkk.html

name="${1:-default}"
来源：http://www.xuanzx.com/163plglhnjq.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163twikvlcf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163aepvsuqm.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163vqrimbqk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ptfsougm.html

[R08] 数值比较
来源：http://www.xuanzx.com/163fgrglgeh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163wkhzmdiz.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bncibmee.html


<!-- 参考信息 -->