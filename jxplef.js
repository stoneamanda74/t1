外链999!wailian999！

C#:   Parallel.For
来源：http://www.xuanzx.com/163tcquenkp.html

================================================================================
来源：http://www.sxryk.cn/163nmozcmfp.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hlvynwpe.html

================================================================================
来源：http://www.xuanzx.com/163ffumugug.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163negvgnvr.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163djlykjvo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163nwerlnce.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163lkhfwhqa.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ibdektzm.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163zzoryoql.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163hwuhuqku.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163svabgkrr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163kzfpwczd.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163mclfhena.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163pdomftpx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163nuotpgap.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163qqvggaum.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163yuelbyvk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163cbfnuwlk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163bbjktegy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163eapmxlop.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163whccbcji.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163clcgcxtd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163hzptbual.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163glinofds.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qkkowkou.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163nxitabqz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vrqleqiz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163yahypvdo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163kekdlpmu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163gndthnny.html

[P04] 求长度
来源：http://www.xuanzx.com/163mttbxheg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163yunblsiq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xtbkgnnw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163eadcmboe.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163sclytsdg.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163flhcoyaa.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163xatmutrd.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ncyjkexr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163giguodpi.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163fdlkvujy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163jzljfawc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163flkgmhez.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163iyaodmik.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qezicfrx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163tieyrclt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163hltbzthq.html

Ruby: a == b
来源：http://www.aibaodan.cn/163fyzlkvnu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163niyxotqb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163xtxtsmcr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163nliwvycv.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ratgmphy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rxoifccx.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163srtjkkvp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ywurbntf.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163djuwnsot.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xmiuevie.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163kundmdxx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163odeejenn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163tbviclrs.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163bonbxifu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pnpllxjo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tgzhyxqs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ldshkttj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ntncrezt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163nqoswzot.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mvacaeri.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163xoadezwn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163duloomgf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163iuaqylcz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163gvimnueu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163pokwooxb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163akpsyvek.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163vgunvtrd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163tdqmlapx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163evqoxugz.html

================================================================================
来源：http://www.sxryk.cn/163qxengjyr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163iuyjtqdf.html

================================================================================
来源：http://www.aibaodan.cn/163ljregpvo.html

[Q01] 创建表
来源：http://www.sxryk.cn/163uxvjgecf.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163njflxaus.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wdizlrdl.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163vcckgynq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163zoqsebcd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163whuwvvmi.html

);
来源：http://www.aibaodan.cn/163rjwhmfnz.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163lrkwdsaq.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163tbujhsfo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163szwqslmw.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163mrotvuld.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163mukflzyg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163zkdcsndr.html

);
来源：http://www.sxryk.cn/163zlcgaele.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163hpdlymzm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163uipludxw.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qnpillqj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ksdhitjs.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163yqkqlvgs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163uztnfgys.html

[Q06] 删除列
来源：http://www.xuanzx.com/163cwuknqrj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ddhcoymi.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ccxcopsc.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163hxfdqhix.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ogiznswg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163djaievfw.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163efgqxaam.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163rkfrngeg.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163pguxjdln.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163hybbjins.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163jfovjgdp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163zqbonlpg.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163evkvvivc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163pbbesyaa.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163idfmwrtl.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163jbtqsfbn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ijpqliiw.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163kgxolpes.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163hzpcgyuj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163whvdavgz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163svmfwwyx.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163jkmatrks.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ereodyqc.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163logxqose.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zwsazlvk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163yxmqywzy.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163kpewrxds.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163xruebeos.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163pefxtjoy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163oxfurono.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163pqymwgqh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163xuwnrisn.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163vwgcvwgf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fabutyfb.html

[Q22] 排序
来源：http://www.sxryk.cn/163rvunldnb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rtwbihyy.html

[Q23] 分页
来源：http://www.xuanzx.com/163waymzyrf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163njmsqhzl.html

[Q24] 去重
来源：http://www.aibaodan.cn/163srxrjamq.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163pvsmqeju.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163huqggypp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163zyjrpmjg.html

[Q26] 计数
来源：http://www.sxryk.cn/163hpamabzo.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163didahbtb.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163adxmsbzm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xdawkvax.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163bensbjwb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163pkioybra.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ksilvuxu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xftkmcmd.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163cqztnmjd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dxtizyyu.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163gxwgxvmt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163bzcxvbpb.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163zkoawosi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vcgtsrva.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ruoclxmq.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163djmoewak.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163vdcgxhnp.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ufcthicf.html

SELECT * FROM (
来源：http://www.xuanzx.com/163omefbgrc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163syfxxwws.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163lyyvjzgh.html

[Q35] 内连接
来源：http://www.xuanzx.com/163vraguzdl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bzivmstx.html

[Q36] 左连接
来源：http://www.sxryk.cn/163vdvwutvh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yrfdcsdp.html

[Q37] 右连接
来源：http://www.sxryk.cn/163xjaqpplp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163fqeredad.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163anaonaei.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hihwrkpy.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163vtjwtlxn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163pyxszjil.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163awpvmxvj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163sfbyqmmt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163kesnfhgh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ocztacoc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163qqyqonkk.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ylnhbtyn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163wdwdeekb.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163sigwtdkt.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vtnknbky.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163fnbxcafc.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163rfhvepxa.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163spsiaslh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163lrfajtin.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zludbdrn.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163aaewuvwh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cdfhhsrh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163aiwsujuw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xebwgzzb.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163xczwddsi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163wwuxnfea.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163tzmyfong.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ttkovyjb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163kaelqopt.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163oueyzseq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163tsvxarus.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163emwonbkg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163dhihdjqa.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163idykfwqf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163klhevtkc.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163noictceo.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163orhxfsyl.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hdxzacoe.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163rqepawhg.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163eelaprzz.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163etoljibh.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ynhwfrfo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163nrtiwgur.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163hxjaebbz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163knugyqpq.html

[Q57] 行号
来源：http://www.sxryk.cn/163oelaaqqi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163wuskbkzb.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163yvecfbrn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163picwmtla.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163nwwvdyir.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wetzajgi.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163wjharcib.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163nsgttgrx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163tpiyqhqv.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ycmstouy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ucvxpibu.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ktvfkdjj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wjpoacnw.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163zchsggtq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163vcjhcfem.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163icxhveqx.html

COMMIT;
来源：http://www.aibaodan.cn/163sjyvhwet.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163tllzrraf.html

ROLLBACK;
来源：http://www.sxryk.cn/163leqgjrtl.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ufquclnd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163bfexibma.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163cbpnchpn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ahldpjun.html

[Q68] 保存点
来源：http://www.sxryk.cn/163qxvuerye.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xkoxpkzt.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xceirpqb.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163fbluvnhb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163cgbtsjoi.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163cpwkwbqa.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qracguln.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163oxbriidt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163dtfzhxdv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163vggpgekk.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rlbpcdas.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163wqyktgsb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ermehnks.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163wcrgwkus.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163eynyufzv.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163qqfyxnbd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ukvqisre.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163jxvaaziy.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163srvdoliy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163lxmumfhf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163hguuyuhj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163lmhkuxxl.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163olvqnjpn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163hxvfmizt.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ypfunwte.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163tnhgbjzh.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163naneqpdt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163sekzhwbl.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jrpjcvxf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163uwfvtfec.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163txqscvlf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163yihxzhwb.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tqjwvetq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163zhfvpixp.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163rwejguew.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163getevlwt.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163llbvztvo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163yujjzynm.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163uisvtjmr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163uxmriwjs.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163kylliebv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163pouglzye.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163oxrrkilv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163qmthuefm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163gmudnhee.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163eibnopjf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wpeyucmo.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163jmdceiuc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163dyihuduk.html

================================================================================
来源：http://www.aibaodan.cn/163dztjhmka.html

R. Bash 专题
来源：http://www.aibaodan.cn/163phqvqqhc.html

================================================================================
来源：http://www.sxryk.cn/163wqvktwok.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163gbymrzuf.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163zcgbrnot.html

set -euo pipefail
来源：http://www.sxryk.cn/163rybhikss.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163vyixkqak.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163xrbofgdv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163cqcbcbnc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163wpsyaheb.html

[R04] 位置参数
来源：http://www.sxryk.cn/163qjoepwbp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163tbkfnrof.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163djueptdu.html

name="${1:-default}"
来源：http://www.sxryk.cn/163qyimcqwm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163lecowinh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ncetnlmx.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163opcijjtw.html


<!-- 参考信息 -->