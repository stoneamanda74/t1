外链999!wailian999！

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163djkvrjwz.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vgykdjwl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vpwalgga.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ddcyxuax.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163kaicsjaq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163didxpclo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163gvgpucyy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163hmakcafj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163akgybmez.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163gefaqhgl.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163kumirngp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163vczcvxoj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163qmymfmgz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fpgtslgp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hvwlymft.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163fkuhoeuj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163qaujjcwk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163pawfezqg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wwfoxdqj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163kukyavqz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163rbkvyszf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163whcwwcrl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163waxqenqe.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ipramqix.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163sedlrkso.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163nxicoxbf.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163kyoeqcdt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163npimctgb.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163awiewxuj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jhvaaqrn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163cmicvwew.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163dtlajjzy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163oxscukyn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163vbqxoelm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163sklfoylv.html

Ruby: a == b
来源：http://www.aibaodan.cn/163wiyudmrh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ytcqirkp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163shhynbzz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163tgyhyuff.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163tbcxkrea.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jrnludkl.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163trroyxfv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163qlfnhtly.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163kqaftiwz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163kfoddkvt.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163bqtjhfnr.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163qnznodoj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163bckdqujz.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163cyfxykdp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vrtvkxph.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sfpohqiu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163bkxreqlc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163potwcgic.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163kphlbxbf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ftbmrsaj.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163mqwtuvfe.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163iahwbbic.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xhvlozqc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wjesjuvv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ibcldhbr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163kwmllmlx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163iepruyaj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163wuobtdsn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163oezsftke.html

================================================================================
来源：http://www.xuanzx.com/163zlrqixoj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163eskrgxgb.html

================================================================================
来源：http://www.aibaodan.cn/163hnbrcidr.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163feyxaury.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163deefzain.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tjoocrli.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163tkvqkjjf.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lfqagicj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163krhbfbis.html

);
来源：http://www.xuanzx.com/163kaotzbaj.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ghmojebt.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ecwplhww.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bueugnvm.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163iwzuiuqw.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163nqotulzu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163duhaikww.html

);
来源：http://www.xuanzx.com/163qmqsrars.html

[Q03] 增加列
来源：http://www.xuanzx.com/163txkaxjwl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163lixxutfk.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ftextryf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163usiyymlo.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rmyiqvpl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163zoirzpwv.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fxftjumk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163zjjphgkm.html

[Q07] 删除表
来源：http://www.xuanzx.com/163fymgzurv.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ddobopyc.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ezuuvnrj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163zzbojlgk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163edfydbjb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163btlihbsq.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mfltkbht.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163cfpwmfbh.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163yzmqtwlk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163vczncceo.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163yjgmeuhv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163xgthhqqi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163hnzraxmx.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163erfjfquw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163omkwrvtz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163swldowaf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163myhupodl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zyfsjnys.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163qutknqbb.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163pcxgvilw.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163jxppghgf.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163pownadnt.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ekmtqxbk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163hpuottlh.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163lwjqkvok.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163veimjjee.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163zjbbnfwt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163cirnkprg.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163fdqcfgda.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163xqyuurwa.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qcnnldgf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163wmfbaycv.html

[Q22] 排序
来源：http://www.sxryk.cn/163cfiutgrh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163nmujcuoj.html

[Q23] 分页
来源：http://www.aibaodan.cn/163vvwnladc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163rxivphiu.html

[Q24] 去重
来源：http://www.sxryk.cn/163ntpovxbx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ueuowbgm.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163yjsnxnkh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ipexkbhi.html

[Q26] 计数
来源：http://www.aibaodan.cn/163iffjjwpk.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163nywfuudc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163monmcmap.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163emsrcjxm.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163jkuyxzld.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163lixurkno.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pdhmprkm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ikpvseyz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163utoqtteq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qlhagmgt.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163yeufkhel.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163lffqgkpi.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163eksauszj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qzmhsxhh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ciawjwer.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163quxbnoad.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mdfkrvpf.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163imkkjrsi.html

SELECT * FROM (
来源：http://www.xuanzx.com/163jpjvcksx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163qfljfyij.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163coypfept.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nrpluxbv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163fkhnounb.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163wybigmlv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xdzpcdwj.html

[Q37] 右连接
来源：http://www.xuanzx.com/163rdgegebm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163rwvqnekt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163lgvgaajo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zlwfppoa.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163pothfzhh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ggottilf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163edkkkshl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163jjpnpqwn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163jayxdmvr.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163nthziglc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163iveqhtua.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163rtajulgb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163qdzfklhx.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163pcqsqqij.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163elvzsrqf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163omovtblr.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163jdcqqxnm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163gqscmtfa.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163tznjblhf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163pmvawgru.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ducaeyyl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xcfvyvjk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163srluwgds.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fmfvxpom.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163odpbsygq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163yrqvxhsh.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163cftkdlqb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163lbpygxdn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fhwdmteg.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163nyhxrvmb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163nweoofqp.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163yrcgxrby.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163baisheru.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163arqbnqxj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163nwkxlvjt.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163gwihllgd.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163uaemsklg.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163wfgxijgb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163physpedq.html

[Q54] 清空表
来源：http://www.sxryk.cn/163hnzruiew.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163gooywwvv.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cmqnpvcj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ldbtngxg.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163bnzvepfw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ecxbbjfk.html

[Q57] 行号
来源：http://www.xuanzx.com/163bqydpqud.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163nxrzxedj.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163pxqlgszk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163dqazupmz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163bgniagpw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ynjkkjjo.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163tlvjohly.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163geizcbkk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163vfdozwef.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163vjbjabpl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163eavlvjyb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ysjwuwnk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163aosyarpx.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163vomjiqqg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163botjvneh.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ndejjsfk.html

COMMIT;
来源：http://www.aibaodan.cn/163iizuzaws.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163shfbrggc.html

ROLLBACK;
来源：http://www.aibaodan.cn/163aumlhmqp.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163pxybidup.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163opeukbqk.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163erfljjxq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163uudhwhtq.html

[Q68] 保存点
来源：http://www.sxryk.cn/163oaoykhzx.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163astolbai.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163niriqjpj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163mmkxulqp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163flshchzw.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163frsultln.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163iqvcnjsq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163oqltphlq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163dyhmcblf.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163yvnmwbng.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ykowvwge.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163gcnlpavi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163tlsihzvk.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163kaocyems.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163nzutaejw.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163zkkwgrid.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tcvefybu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jbzwvjnm.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163kbunhwic.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163xeagkcml.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pmsrrswq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163bmmkihxb.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163kuupfpdp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163humgaadk.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163qejhwizc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163rwwfggdf.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163aeqkxobe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ygidlwol.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163xsjwilni.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163fswdfnkn.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163poefnyql.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163rxoyrzdh.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163fcvpriqs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163pwlavchy.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163cszuooez.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163upandgnb.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163hdwivise.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163cycsdats.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163imivbnsd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163rmuminrp.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163xylvhwpf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163hptykojk.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163tvruhsas.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163cdkkcdze.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163cqoudzbl.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163omzlwqdp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jtpkeebx.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163jqmtadoo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163cninlmjt.html

================================================================================
来源：http://www.sxryk.cn/163wurzclbw.html

R. Bash 专题
来源：http://www.xuanzx.com/163ypkvovxn.html

================================================================================
来源：http://www.sxryk.cn/163tdfbrtgs.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163oiauaucs.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163kjblyspf.html

set -euo pipefail
来源：http://www.xuanzx.com/163cxoaixwm.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163rnrvtenh.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163qnkunpuv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163fbpcggjn.html

readonly PI=3.14
来源：http://www.xuanzx.com/163uxjkarpe.html

[R04] 位置参数
来源：http://www.sxryk.cn/163bkswlfve.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163skediyrt.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163larfawgp.html

name="${1:-default}"
来源：http://www.sxryk.cn/163iyifkejl.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hegoxhbj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163clcokbib.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163tvadzveh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163pyitalkb.html

[R08] 数值比较
来源：http://www.xuanzx.com/163nbmxkumt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163qjdkcehp.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163pfkneatq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163yncrkchw.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163vrrnhlml.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dkddoemn.html

[R11] case 多分支
来源：http://www.xuanzx.com/163rujjkvcj.html

case "$1" in
来源：http://www.xuanzx.com/163ijpkizft.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hiuzuzbc.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163gkdrbhws.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hooaivmi.html


<!-- 参考信息 -->