外链999!wailian999！

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163fjzswmxf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163mszodamf.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163vbccnodc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163dytbdhto.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163bttszxql.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vybhawpu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jrtxlbzq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163oiiardly.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163cnpdhxmo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163fpebzntw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163zkwrckdh.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ntkyxnbp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163afbersfv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163boxyacxh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163otwutxoj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dbkvnnhj.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163mgojrizu.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qjwisdxt.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163nqhxrlhr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163lffgtzup.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163bbsencfj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163perizrdh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163yiccjycg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163hzgmtzvf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163tojolfpw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mwhirmhl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163wqghjzgr.html

Ruby: a == b
来源：http://www.sxryk.cn/163dmepurqt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163otgaofsm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163nkbztbaw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163lbktfccr.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163bobwbpcq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163vhifnozh.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163iietemsh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163yrmserfx.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163tzgevufo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163mryhsckx.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163sibslffy.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163wvmlrrvv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163sncsravp.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163zjyuqlcw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163urdfnsxz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jjiroknu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163dvrxgllu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ggaybdkl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163idjthjzg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163iwtibycq.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163dvgizhos.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cuttznwc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163lphvghci.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ahzkentu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ekpkairh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163eyhgcxls.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163gyjykbly.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163hzirljeh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163mbeycmoy.html

================================================================================
来源：http://www.xuanzx.com/163efmukdry.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163zavtcgty.html

================================================================================
来源：http://www.xuanzx.com/163tfizkizz.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ahpugjsi.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163fpbklrvx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hecxpxsv.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163mkgottub.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ajicxzeh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163yrvyegxc.html

);
来源：http://www.sxryk.cn/163isffuejn.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163eajdpbmy.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163neogoaap.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ipiiiduc.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xllrwipz.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ingvgaju.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163zjyfosdt.html

);
来源：http://www.xuanzx.com/163vyqzzxna.html

[Q03] 增加列
来源：http://www.xuanzx.com/163zlnoksfw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163orfczhsm.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163vgovyakm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163zzdyibqe.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163bcbaehnx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163tjvaazzr.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163rbjcuipn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ghihgzag.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163aewdjgmr.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ceskytmm.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ksjhhngf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ngdpxipm.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163bioptaca.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ddjgmiqs.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163dqxfemjd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ugxrkfsv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163oumiunzv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163dniegink.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163hwkfxbtz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163hffqhbib.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163mclbpvav.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163qefyztfo.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163rkvycodf.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163esbfwhmf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163xwdczqix.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163jswqztpo.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163rxjriscf.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163pxtsrmeg.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163pmiazixw.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163nlksujkk.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163yhbrckqf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163kirkbmfk.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dwpuvouj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ojyxpntb.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163gvxemxyb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163sibsdawz.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ayaeerqg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163foyoihby.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163fyuhawpq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fmfsvutq.html

[Q22] 排序
来源：http://www.aibaodan.cn/163vgegwnfk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163cxlzhiwq.html

[Q23] 分页
来源：http://www.xuanzx.com/163tuvksxqs.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163dcnnyqjr.html

[Q24] 去重
来源：http://www.aibaodan.cn/163rmnjgrvp.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163fubraqak.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163dvjtyhad.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163pqjmtwvx.html

[Q26] 计数
来源：http://www.sxryk.cn/163uekhmhsf.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163pgvdeukf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163fwiageji.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163aaipgepo.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163tzphjwpm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163pnnojwls.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163qssnpkwm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163mzbaihez.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163hitjxpyp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163medjubor.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163iwnwwxbc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ijjrvcts.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163fqwzwuwe.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ftevopff.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163vgcyskrp.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163sfkezsnd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163aycejbkt.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163hmpsjwgt.html

SELECT * FROM (
来源：http://www.sxryk.cn/163uvsjpemd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wojcneex.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163jcnjyooa.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163qmmaysql.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163katvgbts.html

[Q36] 左连接
来源：http://www.sxryk.cn/163cvpdzxxv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nwipumyn.html

[Q37] 右连接
来源：http://www.sxryk.cn/163aejzjhjc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qkykwvrt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163djmvbjvn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163tnqhzeig.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ptwmeoyt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163htxppjjt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163vxishjbd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vzjsijhm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163bpprrbvn.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163tzoaleda.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163zrmsqxex.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163atqfpwgj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163kpwevunv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ngxmvfaw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ototakqp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163cdynwwvv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ujzcejwl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ylujfmdg.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163lecgnzdx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163bjrtfsux.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163rbvjhpfg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163osuczstq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163yhshwxsq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jfopiyys.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163zkuqrhoe.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163lhchtvmq.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163cjtgrcxe.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163qqirnubi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163rgoydtsu.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163uwpvxokv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163jadnihxc.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ahigqfkq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163wcyuekwt.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ktnltems.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163tqihijrh.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163flghlkvc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163lbiqwoto.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163seghjsoz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163vvlkzstk.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ysgkknnl.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163cldqnrtc.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163xalnijol.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163gccoqyds.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163tjamnpru.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zgzerdlb.html

[Q57] 行号
来源：http://www.aibaodan.cn/163jitksyze.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163jwopekme.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163gphivnug.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163vbtgxmxr.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163zcwtivwv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163rrnbrahq.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163fvopldqp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rzgjqnum.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163bfrhbicv.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163tgxvgzqm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163qdomxygq.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163hlremnoz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163empleikv.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163wfjiwpwu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163crhzyyct.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163mbgqezed.html

COMMIT;
来源：http://www.aibaodan.cn/163vvwqsngc.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163kuzvcctq.html

ROLLBACK;
来源：http://www.sxryk.cn/163pqyagtux.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163wxcqxehj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ajjvqexl.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163xyyippfq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dsxanjsb.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163potxdrlf.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163whwiohwt.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163yrfzymzt.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163acyncszy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163wewurpjt.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163tbjmjjuh.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ubsvvhla.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163mhdrtfza.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163epoqrzyp.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163wwsbjnqh.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163dcwzbwne.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163vemlbzff.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xxrnwbpj.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163cbfwvtne.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zoxsusac.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163shjdlnml.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163uhpbfwdq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163twzeiiue.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163anpbeqvt.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163liksaqhb.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163frbokxlp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163vtfaflid.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163hwwthhhk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ohltamox.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163qtdgahqg.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163zutsjrir.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163vsiughwj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163yysccnbz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163aedptbnz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163tfhepfrg.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163jvklalee.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163hvnamygm.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ghamzjjd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163wffiodxd.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163wxgikjug.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163njtdslxr.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163suxrnblg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163fcffxkkg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163joltyqet.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163gxhxymqi.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163kmhgjiro.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163hoqakefj.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163tqebezid.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163nihbubli.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163fxvutmvb.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163grnbphnk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163xpwzhxex.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163wdtkutbw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163cuaowahu.html

================================================================================
来源：http://www.xuanzx.com/163btvzkujr.html

R. Bash 专题
来源：http://www.xuanzx.com/163odsnjrsm.html

================================================================================
来源：http://www.sxryk.cn/163cwwhnhoe.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ykobkrce.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163kmvbvbxz.html

set -euo pipefail
来源：http://www.aibaodan.cn/163fvzvwzcz.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163pineriic.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163gonbcrca.html

[R03] 只读变量
来源：http://www.xuanzx.com/163oicqinpr.html

readonly PI=3.14
来源：http://www.xuanzx.com/163wyzqghyk.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ioweqkcf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163kynmexhx.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163fjhmaytj.html

name="${1:-default}"
来源：http://www.sxryk.cn/163xyplaqzi.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163vvvwpqje.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163wxsivfgc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163utrrawez.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ghjjhsxs.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163mmkshrga.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163anovchgb.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163uiwcasub.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163xvqrcyif.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163uzjczpug.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163brpivrzz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163lptapazp.html

case "$1" in
来源：http://www.xuanzx.com/163lkeggpfm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163mkbgiowu.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163eaqxpchd.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163tbroureb.html

esac
来源：http://www.sxryk.cn/163smvoxoda.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163hxjzyovf.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rtabdmin.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163bolwbqcr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163qhqpyqtd.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163jfidbhon.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163iaadkbaf.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163mjjfmezn.html


<!-- 参考信息 -->