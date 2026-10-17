外链999!wailian999！

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163nquidaph.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ejoynucx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163bkafyxyl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163dkmusvxp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163gbjjsbhz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163yyoshmip.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163fxrwitff.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163kdkucvod.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xdaaotsg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163amqepxwm.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163useuukmy.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163yttaktyq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163haqraixe.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ubxphdhb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zgtcrupg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163bismpiep.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163daghawic.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163sucobdnq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163bypwulae.html

[P04] 求长度
来源：http://www.sxryk.cn/163jxnrxajf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163udzqtegi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bdryuynp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qxsuomdj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163zagifysj.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163afglanwd.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163cfspamay.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ivixaunr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163tleyqjkl.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163uvszfzph.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163etmahxaf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163uyrepuqr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163bptlgvvc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kxvanysm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163adqwqqpm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nfirqnom.html

Ruby: a == b
来源：http://www.aibaodan.cn/163psdxbxad.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ezxxkztl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163inusxzxu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163lmtjmqlc.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163uixzyzdn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163buzdjeay.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163dgdlwolv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163hsneejgd.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163evraurxi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163zejpurir.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163vfhsfyql.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163jlwxuypb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163onpzpcnt.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bkczpiky.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163apbnpmwx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jcwragqn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163oxbdoeom.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ygbbuvpd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ftikrqsm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mgcvmceu.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163qkywytxk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163lgmnoapx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163qwnqpmzp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163pgjgfnxk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163uorovqjq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163kmvwlfvs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163knqqkwii.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ruqerckd.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163mkukqjjj.html

================================================================================
来源：http://www.xuanzx.com/163vcuigpxx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163imdghyfm.html

================================================================================
来源：http://www.sxryk.cn/163yiugzyvq.html

[Q01] 创建表
来源：http://www.sxryk.cn/163yntqppmv.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163llksbwsx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dnvyrvdf.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163exjhgcal.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163rygxqpeg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163szulujio.html

);
来源：http://www.xuanzx.com/163geyqzhpl.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ujhgvavy.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163xiclsnvh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zvtkklji.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163guvvnwmu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ohkkiimh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ojbiuycz.html

);
来源：http://www.aibaodan.cn/163dlpssvdf.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163tqimqsak.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qchdsgoi.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163zgyhlgth.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ulzmlznc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163vhnftwqq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ppoidwid.html

[Q06] 删除列
来源：http://www.sxryk.cn/163qwgsdirr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163mnrihgkk.html

[Q07] 删除表
来源：http://www.xuanzx.com/163zywecwwl.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163fpqbbfnh.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163vnkrcsyy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163sfaifcsy.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163cmifzjkg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163jjlsxqom.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163njcrodkh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163tpljprje.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163gsinbvcb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163mbilthrh.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163knkxvuua.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163kbckuwok.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163bspsdqos.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163bnbqwizv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163dcuxslkq.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163jfeuzjim.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163pnciqerc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163bmnczzbj.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163jgjrmtik.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hnqmftyf.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163hcpmkccg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163qxalggnt.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163xwqnzoqw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163usehafdc.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163hjolvgkm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163yfvtnqhw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163rsljgfaz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163raguiasm.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163itlwrykk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163wvokttke.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163onfjxnkk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163rlmrfknz.html

[Q22] 排序
来源：http://www.xuanzx.com/163wjdxmoqq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163onrplbfl.html

[Q23] 分页
来源：http://www.aibaodan.cn/163lgxfxdlv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163qelbbpvq.html

[Q24] 去重
来源：http://www.xuanzx.com/163ofelzych.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163gshqfaga.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163akribteu.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vhxtjjgy.html

[Q26] 计数
来源：http://www.sxryk.cn/163febemnrz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163lyqkhckf.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163bskznwwu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ciggqcxk.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mevdkbie.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163pagafxiu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163mgrkfrqj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163dqmulzec.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163kebsgoxe.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163udsspeth.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163inmktfwu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163lcflngzy.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163qlsrcdyd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dgfcuypa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163jolttjup.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163fcebpewu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163fjecyavv.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ehqjxihi.html

SELECT * FROM (
来源：http://www.xuanzx.com/163viamxgrz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163oxacqwxk.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ejdcbfef.html

[Q35] 内连接
来源：http://www.xuanzx.com/163xcwthmpo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wjvegaet.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163xnzgsego.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cuuaivaa.html

[Q37] 右连接
来源：http://www.sxryk.cn/163tddhhkmi.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163sbjryvqe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ztgsfybc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163saynpjrw.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ucuhqumj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163nvdgdljb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163lywqufbu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163nhyttbnm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163txegqdfw.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163atxkhlos.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163vigmwnml.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ucanrdqd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163gtjvdcsu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163cvyjwjol.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163pohnbqwv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163lldxpesl.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163abrpqyjl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163mjtkjbqx.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163mjlfidgq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163nmqekjbv.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163khzpefpl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163twhqzcdy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163smayhdik.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nduuodip.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163wauekntf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pbgijaxw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163tiyrmfhv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163thfdqbuy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163fvmtivfc.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163utfwhykr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163tjnbicqx.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163tdxgfubf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163mdsggfad.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163sxnlwigg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163apbbmaxf.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163eiwgrjiu.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163adiqdsbm.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163gnkrvcfn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ckwxctmi.html

[Q54] 清空表
来源：http://www.sxryk.cn/163vohsysjf.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163xcskzsac.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163vrkynisv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cwriauoe.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163wkmbqgjd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163etaxlrtc.html

[Q57] 行号
来源：http://www.xuanzx.com/163mgggshwj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163brbhzbep.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163lwvoagfp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163cjtdoeug.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163vshsnhle.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163gxnysyfw.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163qppklapr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ggeqnlxd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163xqopwype.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163lftkgubh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163oigueprx.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163wnlhzini.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qofwbdqa.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qtpnrxlq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ycwzwsmn.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163edjehgyj.html

COMMIT;
来源：http://www.xuanzx.com/163dsgbujnz.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163mfksdhcx.html

ROLLBACK;
来源：http://www.sxryk.cn/163teznidzo.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ailyfvut.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kmrsyskk.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163boyfdouo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xavxdsvq.html

[Q68] 保存点
来源：http://www.sxryk.cn/163hlmrcmlz.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163zakuqqhc.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163jlnelubj.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ktfumyvf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163npzfeimm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zbsgyoaq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163nodvzibi.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163kdohxfkl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163tymiegyq.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163lzizyede.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163aplgswsq.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163grujvixc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163bdmaxpuf.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163kmigwipz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163samyqkeg.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163cwmqgfjk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163wusvohzx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163maumqmdy.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163gkpavesn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163sqzsmbmt.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163mpdhttiv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163gusoxqig.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163syzztoth.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163hukohlro.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163rgucpfxe.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163hrhicdnu.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163wkeudhmu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163rkcvaguy.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163umqysgfh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jvejdwts.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163kyvndaem.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163uppcqlyy.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163fngsxtxa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163syvkdcxf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163tcfnaxpz.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163knovkwhx.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163rywkdsam.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163acpdmvqb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ltzxsjmi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ujudwnkw.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163hrxvdmjl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163dykormse.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163igumskkq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163igavejxd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vdkxrqoo.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163daebekhr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163vtxfvdwf.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ontlvgsw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rvdrgyju.html

================================================================================
来源：http://www.aibaodan.cn/163rhirhawj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163tnrzoipy.html

================================================================================
来源：http://www.sxryk.cn/163twvwahpr.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163yfwujqsg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gxzqedrn.html

set -euo pipefail
来源：http://www.sxryk.cn/163iiqnmnxf.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qzfrjtwn.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ntlfzyap.html

[R03] 只读变量
来源：http://www.sxryk.cn/163lybxgovu.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hevuaijy.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163anwpbanz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163sbmoxvuz.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163bpqlmamo.html

name="${1:-default}"
来源：http://www.xuanzx.com/163umbmfuro.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163skovgfjm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dmqxhuap.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163zwberjfv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163baxvurwh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163wzbiillw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163gyldagyi.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163nrlibwso.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163uqtwwzpi.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ysnyvtbg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wdmkbbhq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163hosgywji.html

case "$1" in
来源：http://www.xuanzx.com/163qxndxeyf.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mfcuvkuo.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163kyndkpru.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ipuffsxa.html


<!-- 参考信息 -->