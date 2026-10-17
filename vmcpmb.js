外链999!wailian999！

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163bzrkvxdk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163rxjoimtw.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163tzwpwmfz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163cpxssyyv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163cxblewms.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yntjesdf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hbsgvdhr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163fhgpptyb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163zbjyybpr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163xcgjgbxv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163bfsngwww.html

[P04] 求长度
来源：http://www.sxryk.cn/163ufksrobz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163tcuibswp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163orxkewjx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mxntvohg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nhzxooyu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163fgnbrfga.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163xhsbanfg.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163elfcuwba.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163kgwsypul.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163lnluymzx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163jetwkmoy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163zfrjzish.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163hfwgxxsl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163amvmkojm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mullwvsp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163knkjccny.html

Ruby: a == b
来源：http://www.aibaodan.cn/163bmwmyrfu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163uhvutdam.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163lxsmegyk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163gsxylgdu.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ezcxhgtd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163mmsryawv.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ononmyjm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163hbajqcms.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163woccntze.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163sbcwazrw.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163yifijinx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jgcdvaya.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163pamtslsm.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163uvhpnxsz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hvxshsrm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zzfmhmjr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ifatcqtj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xqmsyihu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163dbgjusyz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163mixinlxz.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163tcnbkfxa.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163iopnnpga.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ernpexhu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163glxsuejl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163mbkyukkw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163cqsdourc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163hutirocz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163vuxyuqyy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163okzgposa.html

================================================================================
来源：http://www.sxryk.cn/163vccnbfhi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163rbowrabx.html

================================================================================
来源：http://www.xuanzx.com/163duwbxrje.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wewehxlz.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163bnpziasd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163etipfrty.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163rmoemcft.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163jmigyuvr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163wmzuwcgy.html

);
来源：http://www.sxryk.cn/163jhvmolxs.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163snrfzywk.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163lxcqghvl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163seurkkoo.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163czjzavwi.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rpstifss.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163zunupejl.html

);
来源：http://www.xuanzx.com/163autrdvfm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163fapegyvi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163salgtfjq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163tmubtwpz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163yyrzpkje.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163coufaflo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163bqvclhbg.html

[Q06] 删除列
来源：http://www.sxryk.cn/163enwythxp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163tfnyynco.html

[Q07] 删除表
来源：http://www.xuanzx.com/163doxwldhk.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163uwpzibnp.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163fzgkutei.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163enlntept.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ckmwgkih.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163puddaycf.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163fjnftwln.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163drmslutp.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163poojhslh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163sphfbxtg.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163zrioeyri.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163jywkwcgv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163kewceskt.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163gzjmwuiu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163yrihjfej.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163fkwpbfvk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ckkxyhqq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163lmnwklvh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163lswfrsfc.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163rytejgdi.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163wqisevef.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163dhdbtozl.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zjunygpn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163igljcatt.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163wivxvdut.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tqrwtpgs.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163odkjcfvn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bjkwyzvj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163yjlealoh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ttqekedd.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163vqmifevk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163gdftilge.html

[Q22] 排序
来源：http://www.sxryk.cn/163wnwrhoka.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163tubdlnek.html

[Q23] 分页
来源：http://www.xuanzx.com/163cetrvyrd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ovftygry.html

[Q24] 去重
来源：http://www.xuanzx.com/163lmzmmvol.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163uhmwopbq.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163kqqjlohi.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163jngdtffh.html

[Q26] 计数
来源：http://www.xuanzx.com/163hskkrqoc.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163uldazifq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163izktehvj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163dshouihm.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163lzpsqsrn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163atazjuvf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163zolyoxqu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163zjparsss.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163vxdmfdxo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163lrwfzspx.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163fioxgfrb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ynfebhfe.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163nfulynmf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nctvgqnh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163sjiiitgs.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163zwuhxdie.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rcwgajma.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163wmlxxruw.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ejbmlaxj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163qxtxrhhf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163pbljkcau.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ydgvqasy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vzjgkezq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163eqsgnofo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zqvwmnnq.html

[Q37] 右连接
来源：http://www.xuanzx.com/163tlwldmyn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163hqlpripn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163yrmgxixs.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163vghbrbji.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163qltnblgg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163gyafpzji.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163qoiebcot.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163szuyqdtd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163urllfzgx.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ebhmlijd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163fixpcubf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163onfrtdhx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ztwqyfhr.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163rtrjafvq.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163qwmpyrbw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163yaoslgax.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163zwnocacp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163imocagan.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163dcfxiqzf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163uwbpkgip.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163eogecdsq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163nugewiko.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163aleiqeea.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xibvgnfd.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163jxdxttkc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163lcvwmsmw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163mjwqrtqf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163tdvmwhml.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ickfwptg.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jvbqnjht.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163cxcghxum.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ugouydfb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163cbillxvh.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163pcsayggg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ljffnlmz.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163lnhhmgwx.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163bgdkjrjt.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163meugjtvd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163lzfjlooy.html

[Q54] 清空表
来源：http://www.sxryk.cn/163zfahrcxv.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163msrtzlni.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163rxgkufsd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163lfdsascp.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163xdvdnwfq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163dckkzjzd.html

[Q57] 行号
来源：http://www.aibaodan.cn/163jegoullv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163hllfafde.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163mhulayic.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qqcpdhvd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163pkauvkfc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163fvyctdgp.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163idwelvoa.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163yaygxmze.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163rqurdxrv.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163arnifnjk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163oiegcjlh.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163efuegilr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163huvxrkju.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vcqgupwx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163eutzwgme.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xcosenkn.html

COMMIT;
来源：http://www.sxryk.cn/163metrpyxa.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163gnshieep.html

ROLLBACK;
来源：http://www.xuanzx.com/163igszxzlk.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163mvedqffq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kouglsai.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163geaqamfg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163xjlfvepl.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163brdgavop.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163uwvlmqma.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163nsxoojbh.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163kzwniaww.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163fyupqnvj.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163vixmburo.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163auzstzor.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163czntxajy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163sgwjcpyk.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163oybjebnn.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ggoypizh.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163cfxsoami.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163lpxvuhlr.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163prvamlqe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163sgbfzszy.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jidmlavh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163iywfjvhz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ehwvrpio.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163mrdiozxw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lwvttzer.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163tzhxwoty.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163exafuvly.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163bjokrlmd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163qigjdaaq.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163fbafmnys.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qwpdkmit.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163xmpnvtwj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163bdgjclng.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163imfixohi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ixeniluk.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163huqxsody.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163qlgtjrfg.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163boooomlm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163bybhifrb.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163jrsjzjql.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163cjwlqvfd.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163plxcpbgw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ygfigecx.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163hvdeguqo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163kzqchdqr.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163gzgesvry.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163osvebhex.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163wvewdenl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163gohclkmx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163sxbfjrzs.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163nsbyxger.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163tlyhmhtz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163evmetlrw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ryassohf.html

================================================================================
来源：http://www.aibaodan.cn/163ymydbztj.html

R. Bash 专题
来源：http://www.sxryk.cn/163zsicofav.html

================================================================================
来源：http://www.sxryk.cn/163yeozlbnx.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163fjivqsiu.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ywvffgos.html

set -euo pipefail
来源：http://www.xuanzx.com/163llvmxira.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163lsxgjedp.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163sqoqbacm.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ozekgctr.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163iakhkigf.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ufsnsyxq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163cnhqsmnl.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163pfifyvhi.html

name="${1:-default}"
来源：http://www.xuanzx.com/163jxqpdyvy.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163trobwzey.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163zjnwsnlw.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163syxlkeuu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163xbdmedjn.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163pvvvwuzl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lyibduxm.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163uhrnpuam.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163tqtujdws.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wqfjacco.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163bppmbrjw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163aqmwvyds.html

case "$1" in
来源：http://www.aibaodan.cn/163zywumbwr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163wulzhxvp.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163zamseipj.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163fwnogloa.html

esac
来源：http://www.xuanzx.com/163dmlhasoh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ljpozlto.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vyzyvtsh.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mfasrgia.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163odbespxr.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163jzrnclhn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qtkrqqar.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163zknerghf.html


<!-- 参考信息 -->