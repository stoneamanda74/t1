外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rfhbxmdb.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qftjpdpz.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163myangxiw.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163yieifrmd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163etkebxhw.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163dultxcib.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163uqnjwhaa.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163pkgchets.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163mgvqjhmf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163givwxdzh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163zbwsmjgt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163hidwfomy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163tbanknld.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ubollktp.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163draapmis.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163kxubhtwj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ekdsgfkh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163inwfflye.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163naubimgp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163sycjvgjg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163cianewxq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ghuslmrc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163lbemgycp.html

[P04] 求长度
来源：http://www.aibaodan.cn/163wrmdmjio.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163rtlosmza.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kxtrnbth.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cydohnim.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uxnzbemq.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163uakrmlts.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163pclrijws.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163btuzkisf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163thkuuekj.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163asoxbebe.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163jrhlgvbp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163phsnyyuo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163rpcgxzuj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ktbnjthy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163jrmpnzmr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163hsscmvwx.html

Ruby: a == b
来源：http://www.aibaodan.cn/163skokykfm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163xaeplvbt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163qabetofz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163yvjngkqt.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163hnfgckay.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163draufroa.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163vxgkxrmd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dwgmlnzk.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163zstjdgrs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163heuzsnkq.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163kixcqrih.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163bjkgfutq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163kwwfrbmm.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163mzokddku.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lsqavlrv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163siqhjyjf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163gcfuvyoy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163srhqpgpd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163wzgfemju.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163nruqvngd.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163alvtgflw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163fstmsykr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ocxgboxk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163akwvzrof.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163tlfdqfmd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ncwcwgrv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vtjbghwk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163mdfmjsac.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163vdnvytmj.html

================================================================================
来源：http://www.aibaodan.cn/163wihtsltm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163mrfvhkwo.html

================================================================================
来源：http://www.aibaodan.cn/163yfnxcrvj.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163csrzwqxr.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ooiblalm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dbkhilzq.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163tblxipmw.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163etrdahmf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163mfykuphc.html

);
来源：http://www.sxryk.cn/163coplantu.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163fudtsvlg.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163eokbliid.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163oaqurstf.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163tjrndtpj.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ljqqahad.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163urkcipin.html

);
来源：http://www.sxryk.cn/163oyenavup.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163qvdzpjen.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163nmjohkpd.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ovjpysiw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ohcsrtwg.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163hffbstji.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163vlbvvxlm.html

[Q06] 删除列
来源：http://www.xuanzx.com/163fcccooag.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ryeeyjys.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qbjrgeee.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ygehskrf.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163eedireas.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163okengnjk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163dhwvwlpr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163devriwge.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mfcjgpsc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163fleowlfv.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163amodaqaa.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163fslbbepu.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ckjiyxje.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163twsyaarz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qpguzuai.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xmjroigw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163kgzokrnn.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163bgpusvtq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163soybwdyy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163kbvklkgm.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163lmrywlhy.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163jqhngoek.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163npxifpke.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163hfqbmotu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163iygljprc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163fprfibxm.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163wrvkslpq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163hjmieztf.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163uvuzwlpn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163tsinovkw.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163gntrikcp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163kwyghern.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163mgmjosnf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163uesyuuqi.html

[Q22] 排序
来源：http://www.xuanzx.com/163vmhhlsnz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163miwcsvev.html

[Q23] 分页
来源：http://www.sxryk.cn/163injoilzs.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163oivlfere.html

[Q24] 去重
来源：http://www.sxryk.cn/163yfidqdch.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163fkcyiako.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163eyqnilpz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163xcjbutdv.html

[Q26] 计数
来源：http://www.xuanzx.com/163vnkvaiuj.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xrohcgtk.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163hgazblzc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163rffvwrzk.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163pmgduqcq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163tccorlvj.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163vuufopxw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163pnnxodau.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ciuczwdb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163woqcjijz.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ilrawkli.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163bipopood.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ldpjhqdf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zozmgaep.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xedccjaa.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163jqztbrif.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163nnhhgtmk.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163sgudyfzn.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163fzzzrchl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tfkgmsbb.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163swcteotp.html

[Q35] 内连接
来源：http://www.sxryk.cn/163epzozkef.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gmxzejbw.html

[Q36] 左连接
来源：http://www.sxryk.cn/163peskyksx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163efmvuvjg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163julsurne.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163wmmjianb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163gxpwudww.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163qghcglef.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163aujlxaaj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yykkjbgp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bshfdmha.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163asbjjfhp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163rgxdgfug.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ttbgcgug.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163uraxjzte.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163xcmdhhbg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163cbzoafoq.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163hrxrnjhj.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wtrusbpy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163fwrszzqb.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vbfuprsi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ipqdcxvm.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163deezrrqf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163idqqvzpt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ztonluan.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jyflpjoq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163jaclptyt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163czwqetld.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163zzllyoqj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163tfirjvha.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163niyeoija.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163emkmnoqq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163alawgtrx.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163njvynokw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163knoxzwnv.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qtkpxxzr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163pcmpepge.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163hypxhdff.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163glrzjszs.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163owtfwxee.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163tygjewfl.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163qbfyrpmf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ulnckhbk.html

[Q54] 清空表
来源：http://www.xuanzx.com/163kozrkmnj.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163xunjlufb.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163kgfaljds.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163wocmkpim.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163vlzyunve.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ndzwrvml.html

[Q57] 行号
来源：http://www.xuanzx.com/163kktptaaq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163cxljoltv.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163atdtjpth.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163dluroumm.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163szhpuslu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163wpacbwxn.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163snonhmon.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163xiqklpfo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163sjfajnbr.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163udsbnzav.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ftwjujyc.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163tlwblczi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xtkkfqxc.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163wptkqefa.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163yagkmgus.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163rcspiipi.html

COMMIT;
来源：http://www.aibaodan.cn/163noaxynme.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163iemjycqk.html

ROLLBACK;
来源：http://www.sxryk.cn/163gxzkplbe.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163annbpvtq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163coeewjfp.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ocjfgrpm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163nkjlaooi.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163azellxgg.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163jmffkoph.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163tuxlwppc.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163klarimyc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163xokndiso.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163jyfyidoq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ebpsmfst.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163yrwhinjf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163rkcnsesu.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163bbfwmczp.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163wouptqkn.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163uxpakafd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163tbcpectj.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163llsffeqz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ybjzikey.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163zqmnuync.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163nfpenaxn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163emhgpvxj.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ochdflrf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163seukfdof.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163nutarlxh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163yvznjcoj.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163dvqpytcr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163hcmjutro.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163udcnhyfx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ybwqpuxz.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163jsgpnawm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163aupkobwx.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163cmgjntcr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163fnrjyngn.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163xptyjidl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163twixmedj.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163skbxhcyn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163hbjudbtw.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163strgqlqp.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163jvgvayqy.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163vfxrrltq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163apgxuyyn.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163cjdhrixn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163gemaaiug.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163igzrfffb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163acuxtjnx.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163teyjcwys.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163owxesqxd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163beauwzbc.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163rtdozevf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163rkmqjkaq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163uyrbycza.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163drpgwbxo.html

================================================================================
来源：http://www.aibaodan.cn/163xpalxopv.html

R. Bash 专题
来源：http://www.sxryk.cn/163vvspgqiw.html

================================================================================
来源：http://www.sxryk.cn/163rffrhdoo.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163aaxkjysl.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163imentqyj.html

set -euo pipefail
来源：http://www.aibaodan.cn/163btmdzlyf.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163kzmsukmp.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163rbfjzxrc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jbhzxslr.html

readonly PI=3.14
来源：http://www.sxryk.cn/163fpbvcxvu.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jkqjvdvk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xxvvrjec.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163cpkbrocm.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fmfdqvku.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163pdqexjaq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ybujtkfa.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ddltvqch.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163iaqqpmqq.html

[R08] 数值比较
来源：http://www.sxryk.cn/163hfnitkym.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163kkribzyq.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163pcdzlpri.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163rwjneraw.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163pkvggwvo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163svrqvocp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163thndguao.html


<!-- 参考信息 -->