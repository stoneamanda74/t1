外链999!wailian999！

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163bbysvpul.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163jmwlyubf.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ftjdmhsq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xspjyuxh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ohdcpjfz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ghkhccqn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kctvhxee.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163pmeqjwcu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163kqgracdn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163orvdnywk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zblusikm.html

[P04] 求长度
来源：http://www.aibaodan.cn/163yosqvjql.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163jmcedssn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163kewapljv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163efhbqgjv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163crluqoek.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163fllgyjsl.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163aogpckle.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163gerkvymu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163wwxibhiv.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163bcxduwue.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163oinwsffv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163okcywqqw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163rbmsrjfw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163yisbzzuo.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ihbianem.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163rlsfekep.html

Ruby: a == b
来源：http://www.sxryk.cn/163vghdpytm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163saaiilmt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163mymgelwp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ovrbogdm.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163scgumcuv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163nmmydxai.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163cuzdyzll.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lrfhhskg.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163njztufxv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163owhtpeiw.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163yibubgmp.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163nerjxosg.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163zzclqbif.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163roethzvc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163byutlywh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qqqdbefk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163zvaydwpg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xabnxwrr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163sfylgwyk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ovemecoe.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163vomvgpcf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163navyapln.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163zttyzpnn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163rzsoztsa.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163amljuihk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163bbeswueu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163rmwmwkvt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ucdbetya.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ehqbmvia.html

================================================================================
来源：http://www.xuanzx.com/163mbxgqdrd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163lbnpqywx.html

================================================================================
来源：http://www.sxryk.cn/163ufffsrjb.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163tzhldxfd.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163yxaznhfc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ihrqltjz.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163wxxewnqf.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ezxqerzo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163jkolflqj.html

);
来源：http://www.sxryk.cn/163tyhyahsk.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163vwgipdjp.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163mmpflmqi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163cqcmovsj.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163kqkssfsw.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163mamgeqvj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ozkzqpyv.html

);
来源：http://www.xuanzx.com/163pcduvgqj.html

[Q03] 增加列
来源：http://www.xuanzx.com/163pwtuyvqt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163sdlrbyyj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ulwtvkoj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163pcmjlcke.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163agcwooic.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163nqsrqwpa.html

[Q06] 删除列
来源：http://www.xuanzx.com/163lzziftlg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163wgkyxuro.html

[Q07] 删除表
来源：http://www.sxryk.cn/163hypppysb.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ymmmvzcg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163eajalogm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163mejpikcp.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163jqcyulkr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163jrdowzcu.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163tsfrvcau.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ipautugt.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ckvaxdku.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uuipgibm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163jywvdcvs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163afrqoiqd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163uxvwnbwd.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163xsmrdxrg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wjuzsbjp.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163akeooyyb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163vhphxxug.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xucwvqng.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163slnwgicj.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ltwhrdmf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163rpwlimvb.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163qkzmcncx.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163wgpkrihs.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163dkdxrowx.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vxwglomk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163qflikzmt.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163euowgdli.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163wnvbcuds.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163srrqzmyk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163jqxrmejt.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163yahlfgyo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163twczodbj.html

[Q22] 排序
来源：http://www.xuanzx.com/163qwzmneqr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163djkcvlzq.html

[Q23] 分页
来源：http://www.xuanzx.com/163rlxaznus.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pqqeeucs.html

[Q24] 去重
来源：http://www.xuanzx.com/163iandcbxu.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163fwmqhqlv.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163slkalkwh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163hvviouvj.html

[Q26] 计数
来源：http://www.xuanzx.com/163cgcpecrt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163prwyokfa.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163mzgtxjyn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163bohxrgbd.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dtnwihtv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163jzyfrtsu.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163vxfnnvet.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163plyuhpli.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163qswfmkui.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ihyptfun.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163bficnkvv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163smpdkhpq.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hpescmbi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163okrqhwmr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rujkjvds.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163vosrzqob.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163aivxkiep.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163jbgtfsdd.html

SELECT * FROM (
来源：http://www.xuanzx.com/163tcspbdrj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163tkwjdsit.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163owlscash.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ykuspcqb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xrzexbhy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163pyojihzf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gozughdl.html

[Q37] 右连接
来源：http://www.sxryk.cn/163fxeosmpf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163xpvewqvw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163fvfzcvaq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gsdkcugj.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163edqynvct.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163rgjiztmf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163tuhgmqkt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163tpfonqwl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163yankzjln.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ywbinxno.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163hqvofuit.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163mlvslbsw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163asttoxgf.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163qaiehtjj.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163mbmwttry.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163nukpscek.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163szleajlm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163zcetetue.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163qnsyylwn.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163bmopseny.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163gfjajqbg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163euuohwai.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163alwapbem.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kjptbgcx.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ftewqafu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163rnlolokn.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163lwpmzrmb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163aqfntapz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163mzffagom.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163qtewehtb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163baebtugy.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163isghdwot.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163pojskjtc.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ddkwipfb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xvafbwbt.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hjafgfeu.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ialmlfff.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163dnoeduqo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163qmiofbnj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163nzdqfkod.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ntggzyuv.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163jrttsvcn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163bgpksbnm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163gmsrxfdo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163weedyffv.html

[Q57] 行号
来源：http://www.sxryk.cn/163gqzivwpc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163wxyjatmz.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163rkptsnre.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163snndvlal.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163wzxbpltf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163mjdkxazi.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163acexsmyy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163vcvhnqdp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163wkgedndt.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163hlyfktqm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163bgeuwsij.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163dvjhhwwc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163amelycyr.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163gstndlyt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vgprlypz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ptxszgxk.html

COMMIT;
来源：http://www.xuanzx.com/163mcrbgvlv.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163yabiuvkv.html

ROLLBACK;
来源：http://www.sxryk.cn/163bneokvuv.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163nmtyeggp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163inusdifa.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163fooibhxk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mubivsxp.html

[Q68] 保存点
来源：http://www.xuanzx.com/163cfsbzfwt.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163jpyemzsx.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163cmcsyjuj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ktzusmfh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ctubmfiz.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163kmracbkv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163kvdgnrdr.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163muveoodc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163hdlzlnxy.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163awvcfqzu.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163mxsvpgfg.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163pzpevvyh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163hqvoswqz.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163xwwlmmzp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163shqkamef.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163rljnfxrg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163yrdhnkcr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163yclkbxgp.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163knoumuxs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163znjwedmp.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163lnonsazw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163seyimyff.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163sbrogmnc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163urascwxd.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163esixleqf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163okquucbh.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163yedigwdh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163pcqvtppn.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ihpoatyw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163eejlcxwe.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163djovmamd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163wpepamck.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ryjhtynr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ezlwffwh.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xloxmdng.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163iojkkblv.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163bnpolabx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163rhwhdmvz.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163bbkhidal.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163bkwqgcuz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163servzmpo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163jfwtokdv.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163wfvjkxtl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fnanzclz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163jltyeyla.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xolyneyh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163yaxruxnt.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ovddfrie.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163wfbkvcdv.html

================================================================================
来源：http://www.sxryk.cn/163nqdkanct.html

R. Bash 专题
来源：http://www.sxryk.cn/163yqalnhda.html

================================================================================
来源：http://www.aibaodan.cn/163quqmcxns.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ogkugjqt.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163flberyvq.html

set -euo pipefail
来源：http://www.xuanzx.com/163raxghczb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163cpysjikp.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163nfrtqpug.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163anmristc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ukcajikp.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jwksoutf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163lnpxtjpc.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hdjcitzo.html

name="${1:-default}"
来源：http://www.sxryk.cn/163gsixewbx.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163srjknifh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163mxuffliz.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163banjwhfx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ukicsgws.html

[R08] 数值比较
来源：http://www.xuanzx.com/163jffvpytc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163bxwplwwr.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gkunznxl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163rhjmrpau.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ajgavwoy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163phqfhchg.html

[R11] case 多分支
来源：http://www.xuanzx.com/163cxxevhjs.html

case "$1" in
来源：http://www.xuanzx.com/163zfazjpqn.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163qbmwyziz.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163bsyjtxms.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163elloizan.html

esac
来源：http://www.xuanzx.com/163pqbxetmd.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163jbbnsvws.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vrbsajvr.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163wpvqdlup.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163iszmnflc.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163tmfmlwzn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163vizhdfjp.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163vuhmjgws.html


<!-- 参考信息 -->