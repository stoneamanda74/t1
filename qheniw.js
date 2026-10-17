外链999!wailian999！

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163iwwfpomk.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163kngqrilb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163xfqhiquf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163tbxvclst.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163fcrrcbyu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163xjgvghfh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wxmvksvg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163otqjdadz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ebesfxti.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ocfwmcgr.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163juvvpqbl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163nmhnoukv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163phulvbwt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163dazkbrau.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rempfpvy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163fkhqzjhg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163yzksrvtd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163vxnllpgu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163cphpxhcj.html

[P04] 求长度
来源：http://www.xuanzx.com/163chspbgip.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163adxujnao.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ynpyspxw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163motokyax.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fyzoapjo.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163emhjaliy.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163cttppuek.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163okrkpsfl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163vetfgwda.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163pzgtbujr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bgebjebd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ylszpaei.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163nedyqbqn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163sawlkhfb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mnlojlkg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163koijyjwj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163jnznmnfn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163evjgjvgl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163octoqaxp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163jurmabfh.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163zwchgwid.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163rnqbjwmk.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163bbnfhage.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163kyhpagte.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ibtlphkb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163izuiismu.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163xdmiuwiw.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ufveezzf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163gcnuykdq.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163dzhnhncv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163iwsbcozv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fcjnfoaz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163kwrncwpw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163qcnqdcfc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163opeywqut.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163sfwgjhjk.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163qrauunul.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jomynikz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ycjgvkbs.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ifhcrhxu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163yenqapec.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163owsrzfda.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163xvcbbuso.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163aynbavct.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163rqdxocrs.html

================================================================================
来源：http://www.xuanzx.com/163anbriyqj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163lkjkwkve.html

================================================================================
来源：http://www.xuanzx.com/163fclcdqne.html

[Q01] 创建表
来源：http://www.sxryk.cn/163fqgwqpps.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163pgclwydc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kdebfrjd.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163cmmzxvsn.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163cyouiyto.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vanlfoxd.html

);
来源：http://www.xuanzx.com/163tgazxlpi.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163apujchws.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vlyppshj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ewimhxff.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163djklwudg.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163jqoxanim.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jvbxqhwj.html

);
来源：http://www.aibaodan.cn/163jiloqnkz.html

[Q03] 增加列
来源：http://www.xuanzx.com/163keklijrs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163selyuabq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ikcamtyb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ixmozetw.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163aqhtmoxj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163nnxddwja.html

[Q06] 删除列
来源：http://www.sxryk.cn/163liboaghg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ixxbfaca.html

[Q07] 删除表
来源：http://www.xuanzx.com/163yilisfse.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ipoofktd.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163xmgkghmv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163lzadmdns.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163uwyhjrub.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ymmesuvc.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163iuantfbt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163orbetjix.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163iicbjfzn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163chmgbftq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163hvmccbyp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163iwzwarxq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163dsciwkct.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163fthryauu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163rnbsbcge.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ygglfbxc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163rylenhdc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ejurqevw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163zfivtqym.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163swqfcpsz.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163xiiedjvo.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163mbkavqpt.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163kuzkgkmg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163aytpzvba.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163gvynekdc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163kaocolcy.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163invmgbxq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163hninwlhy.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163cmfxoaxs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163sugzexbp.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fzwnrceu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163zfhrnwpx.html

[Q22] 排序
来源：http://www.sxryk.cn/163pdnsqrcl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163tcgfkvda.html

[Q23] 分页
来源：http://www.sxryk.cn/163esnigvzb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pjvbybvi.html

[Q24] 去重
来源：http://www.sxryk.cn/163tccijtaw.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163vmcobagj.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163njrcvaae.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163nnuwgdhd.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ekkwowrz.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163vpfexrtb.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163btlrriqo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163htjvlggm.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qbexaxhm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163pkawxafa.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163nxiohgmw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163nkfyxoef.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ewnonndv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163lkxkpjqc.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163mwryauvd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163mkxeldsc.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ulaczpqu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163frwgycll.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rvelzemm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163tbggmxiv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mwhklhec.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163vhkvkxmr.html

SELECT * FROM (
来源：http://www.xuanzx.com/163grzbcumd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ppacneas.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163gaathfuw.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163kpcihtrd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163hyryzuhy.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ylfqgsny.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163esjoyjch.html

[Q37] 右连接
来源：http://www.sxryk.cn/163eyjlgerq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ubxnnfdd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163xjeqtwav.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gxsrvpru.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ztezytvu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163nxrlikbd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zttksoei.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163uxcjzvgg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ssgldrpo.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163pjttmlnd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163lcyzjekn.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163yhyaedyl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163lbgfgsei.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163iseorvtp.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163meqjhcrm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ybnywfvx.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163neahvpbf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ycuwvkaq.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ulvbrbvm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163clqilxcx.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163hhiwxcco.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ogmftfgn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fkerphaf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ezssrxbx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ftflueuf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ahnwikas.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ytcuvdae.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163gpxwaefn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163agzdkamg.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tlfdwmip.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163thkjnorp.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163izylsdkq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163tubidpom.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163yzvqyxxg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163enmdroxk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163rxfcwdbk.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mlsrxebl.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163rlcyekjd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163afmlonzi.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163kebymkzi.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163vcrgbtga.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163xxnxpfjy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cplxhtfr.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163aazucoqi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163uvkevooo.html

[Q57] 行号
来源：http://www.sxryk.cn/163wpnjlhbn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163yyarwlqu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163almahaqb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tkmhnxbu.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163kpuokiht.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163pppxqvoc.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163mdkhambe.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163hpjsmpqx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163zalmnylj.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163nsgkysjd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jyvayaur.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163wvihlyti.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xjpnlmia.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qonyimof.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163edusosxw.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163txtqykmi.html

COMMIT;
来源：http://www.sxryk.cn/163uiphfkhw.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163fuaxjsls.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ntbjkkap.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163suznqfjx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163frkalzxv.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163rvykejme.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ncxakzuk.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163aazbabkc.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163vempisfv.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163yhfxwjww.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163nbhxbubx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163dglnrvxd.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163yxhwbhal.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163lmaewmvc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mvymfsqj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ttaworie.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163kerulrif.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163nweaybdj.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163anocuhqy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163hjvmbnwf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163bkcggqfg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163jmzqycjx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163jslwsokx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163qnriiwnz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xnrhzhbv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163xysvvwmy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163xixyopjs.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163uruxktkv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163pxpjdvvt.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163diueqdhh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163xlspnatf.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163irnixuom.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ziwdunsi.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163vqggitzf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163qsalrpwy.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163pcwupixh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163bfnvbsnq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163osjtzjbl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163bzzkskfh.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163xkckubrr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163pxzmjhza.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163fuslpugv.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163cncbvvgr.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vnalouto.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163mzbcdkxd.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163erjuglvg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163gvsypizt.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163tcvzynco.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163sbqclogy.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163uiirkdei.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163sabvdjyd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163lyhyfwyh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163gwbnnufv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163izwqpupz.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163sbnixbde.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163gayukuvv.html

================================================================================
来源：http://www.xuanzx.com/163evwnvrox.html

R. Bash 专题
来源：http://www.aibaodan.cn/163csbyzawm.html

================================================================================
来源：http://www.aibaodan.cn/163wttsctmv.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163cbnyoanm.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163omsxknbg.html

set -euo pipefail
来源：http://www.sxryk.cn/163kfkjesfw.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cvwfjljk.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163hiihklds.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163buanqivs.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ggvzgofo.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ruutosef.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gdpsklur.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163efvgtryi.html

name="${1:-default}"
来源：http://www.sxryk.cn/163vmhikikg.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163qnyyfzih.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163byldtdob.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163hrpblwdw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163iutlohds.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163iotunyur.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163iwqynfju.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163popygiib.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163lqglwbba.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ixjysvqn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163blhpxmpq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163sabhjdzz.html

case "$1" in
来源：http://www.sxryk.cn/163psywukfm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163uilphemf.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163pmwtvoiy.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ckjklqan.html


<!-- 参考信息 -->