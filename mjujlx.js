外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wqrkoizq.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163pznwsikl.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163xtokssvc.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163lxnudyrk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wprcyusy.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163olfvbtoc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163mlwrqvqy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ryksssuu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163lffdqwjt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163timtixih.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lusfksut.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163spltdrsy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163zegruhpm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ngaevuus.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163nwavsxzq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163dttbjcxt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163cgrbabgo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163anbmirfg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163nwciajex.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163zwfybksg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163khsycwzu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163yncmtpep.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163smvmvfci.html

[P04] 求长度
来源：http://www.aibaodan.cn/163fbihabis.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163yznrbgbi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tcoiwxor.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163osvuyguz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163txpkntvr.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ysshdnwk.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163gssikbli.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163tofclnlg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163vzdslqrv.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163pcnvilui.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163drtdhhaq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163frlqsuqg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163nycwyfem.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rcbbekyk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163qqzvswoj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163abfcknhu.html

Ruby: a == b
来源：http://www.aibaodan.cn/163zijtumof.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163qgujgxyl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163sbvroxam.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163mimastvj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163qcbluwmt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163wzbveqiu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163dwoylmnl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163yzgwcfle.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hcpbmthy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pppmcqxu.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163pewtbszu.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163exusgdjq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163zfaqkfte.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vjazaxjk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pmdnytgw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zlbidcsw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163yrvuwkjp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163fokihfmp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163kjqdkqtp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163axiuorsv.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163gvkgccad.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163avpujzil.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163zbdbhcto.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163czejplii.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163njadlusl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163akxybpkf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163gacpjtwa.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163berjfmrp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163adsielwj.html

================================================================================
来源：http://www.xuanzx.com/163kcrugxho.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163jdcnmlcx.html

================================================================================
来源：http://www.xuanzx.com/163usbjfktc.html

[Q01] 创建表
来源：http://www.xuanzx.com/163cjtbybyr.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163zcixqwnt.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ngslawyt.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163mzjkzncr.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163omkwwttk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163palilbzd.html

);
来源：http://www.xuanzx.com/163kylgvbft.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163hfrvutcy.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163rhtckhdj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163urhnfmwg.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163hxxqhloa.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qxqkmkfg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ffkkwhdk.html

);
来源：http://www.xuanzx.com/163jkybhbuy.html

[Q03] 增加列
来源：http://www.sxryk.cn/163tznptsot.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163hfmmawju.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163fwjidxdr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163qddyyidm.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163zjmaaieq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163nqhlsnnr.html

[Q06] 删除列
来源：http://www.xuanzx.com/163lrsduqvw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163lvpsmipi.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qxanleew.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163yyijnzjt.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qlkqbbab.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163shldyfve.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163kpeghkdf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163fuzrbuqu.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ygdujuxs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163gyauqnro.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163pynzmrrd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qnwelejg.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163lvtcbhla.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163sgifxnty.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163xqusofkz.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163uykdcfzy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163saivbcmc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163nslgletl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163utnwmaet.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163cjkoqlmi.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163vflmerel.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hnnudbyz.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jsmguacu.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163suanpgpn.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163dxuvcalp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163lcdanegd.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163pbwlosie.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163qgzzznuh.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ornhgnex.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163terqpkkq.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ulevfhtf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163hwssgzud.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163csusjluy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mvtbyzbz.html

[Q22] 排序
来源：http://www.aibaodan.cn/163bpvpialq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ncssuqtb.html

[Q23] 分页
来源：http://www.xuanzx.com/163oryiypdb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163eiyhdpvt.html

[Q24] 去重
来源：http://www.aibaodan.cn/163fyeixaan.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163osrpgebq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gytsyipq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163wbmbjrqy.html

[Q26] 计数
来源：http://www.aibaodan.cn/163egyaeufu.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163jlcibqiw.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163itbscois.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163obdtdctv.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163oupgdoqi.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163eatyjmor.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163nuvkiber.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163sedxltby.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163tunbpiqj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163avoaeoxt.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163uhojgxdw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rgvtnwof.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163bkfiocnb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kkxirlhr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163hkaeizza.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163purpvtnb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163zjodnzfu.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163azqshyrt.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cbrytgsx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163jvddmfiy.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163uxptqbjk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163syxgoaan.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fqhndgjs.html

[Q36] 左连接
来源：http://www.xuanzx.com/163eeucffod.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cwmdqqvo.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kgxqkjhk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163lvvomdyw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ryysdbbt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163fiqmeked.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qmeiezsj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163amwoengd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ogvnbawp.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163jjnvxobt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163joofxjid.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163uropcuyo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163etecpueu.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163vchdjlad.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xfyzlkuy.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163qlluhzne.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163kfkamzgl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163rxqufgfm.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163qdikwyvc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163gwuvnjva.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163webdjgcy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dykjqkfi.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163xejdwksp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ynjrrwlr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163sebpkhrn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163eqvjpmhx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163hidmmgtw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163usspjvnk.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163bvvuaiei.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163mteaukvt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pbhgwblb.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163anyvcfro.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vshvbcbe.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163vofrcywr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163olhzlrky.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163mvwogade.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163kqilhmrd.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hyjamonl.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163vlbuoyji.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163fibndjor.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163lqqdajxq.html

[Q54] 清空表
来源：http://www.xuanzx.com/163lnexbpgu.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163jkntkshj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163bbgxsrio.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163isdylirk.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163dcdiksek.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163jsmzzfro.html

[Q57] 行号
来源：http://www.xuanzx.com/163gpavrksy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163nqenqhmf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163yctlnlur.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163xzqwzeko.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163iyajtcvd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163qprcemgr.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163nfuqpgxf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163mqwpsfkj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163xaryypze.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163dfntvvig.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163qeqrrppj.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qbckyrub.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xbrkyrgz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163sepmtyco.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163lzkcyhef.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163krczocsh.html

COMMIT;
来源：http://www.aibaodan.cn/163uezhdvce.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163khujasoq.html

ROLLBACK;
来源：http://www.sxryk.cn/163jujyisku.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163jrxzeoib.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163mdylxjlu.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163msqfhtos.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zamdzmip.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ubwxbyds.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163aijwwake.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163fbezqmns.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163hmzkwyrp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163xdzdzmhv.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ztyrufbk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ixlgpqsy.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163iegdinfb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163rnmmwbnq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ptlzmuze.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xetpxjer.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163thmoscga.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163csbqnctf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163raovsydh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163srsxglrs.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163houswcjn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163qlfaheyv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ekmdotjx.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163pobpwdkv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pkkjpeiy.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163fhzttxbo.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163fdyuszqz.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163tbnxjwke.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163mkkdagyl.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163bakpivks.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163vohfjhvv.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163npwuypin.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163dpznvcvr.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ehgorora.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163vfzhoxtw.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163rfnblyzb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163zvrercmy.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163arptazcy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163kkvdenpc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163aahfpnhx.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163xmlloqzc.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163yylinfvz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163zbydfbsc.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163xxiwasbs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163hdgetqoh.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163zzyisxtc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163dcabddfq.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163euxaidaf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163amvaxxrf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ljngstnk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xgzksvgx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ztewvglw.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163rjlwomep.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163xnwhmbcg.html

================================================================================
来源：http://www.aibaodan.cn/163qvdclbje.html

R. Bash 专题
来源：http://www.sxryk.cn/163xnckptvr.html

================================================================================
来源：http://www.aibaodan.cn/163ojiiybua.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163staecmeu.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163xmvxpwch.html

set -euo pipefail
来源：http://www.sxryk.cn/163vkxlbguu.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163autcvrmj.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163hrgfhgem.html

[R03] 只读变量
来源：http://www.sxryk.cn/163bgexvcey.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vqzuosun.html

[R04] 位置参数
来源：http://www.xuanzx.com/163kqvfmumd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ujtmddyf.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163jjphreur.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lkwrarcl.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ldcmivqb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ywepdcli.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163edmqyzbc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163wwjnltgg.html

[R08] 数值比较
来源：http://www.xuanzx.com/163eegtibot.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ibohnfjr.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qqnfagsd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163lucpvlcw.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163dbrvzsvr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163umbkcpgg.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163kajvzdxf.html


<!-- 参考信息 -->