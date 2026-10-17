外链999!wailian999！

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163qkplzxom.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163oagsflhj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zqixndlq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163tuuhnhtb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163uoyhwxbe.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163rjigckzk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ngfimnlx.html

[P04] 求长度
来源：http://www.sxryk.cn/163ixjekrxy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163syxcbibo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ixbebpfm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163anedfpgu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bdwrhksi.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163frquuuus.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163vihzealq.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163mvxmayzc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cfgwsqyb.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163nbzoxcqx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163nftoswre.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163keisozwc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163vmlpaetg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jfvmhnka.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163wxxaoxui.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163npjobtoq.html

Ruby: a == b
来源：http://www.sxryk.cn/163ltodngwq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163nuhncjoy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163utvnyfqm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163phcqvdny.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mooabtes.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ukfemthl.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163cwravcmh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163cvpsodhn.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163nzynptim.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xscrncxt.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163jbhgyqpr.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163vtdoszcw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163wbawzuhm.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163envxrttx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gkkmymyh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uvejpeux.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ywstrsbm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163wnntlzfn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163nakagdxc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163cvypcgbh.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ujhnlyix.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163tmygnygo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163nbhbmfvx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163erawqtgz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163wyosdbti.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163jcjhfuhv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163gnauyvta.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163krkoevpx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ibymqvms.html

================================================================================
来源：http://www.sxryk.cn/163dvxkcjxl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ysuvmonh.html

================================================================================
来源：http://www.xuanzx.com/163ymtppasa.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163yloaexiu.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163zokrzljl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xbnlefbz.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qsqousfs.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wjfvlhqb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163dcoxunlf.html

);
来源：http://www.sxryk.cn/163avaxqzjo.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163cekksnsn.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163wytvnlyj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163leeagunb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ourmatwp.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ywrxlogg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jlhcgwbp.html

);
来源：http://www.xuanzx.com/163motmiapt.html

[Q03] 增加列
来源：http://www.sxryk.cn/163qkuvfhuk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ljjwiphy.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163hfpwmwcf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163xuafpyfe.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wjcpupqj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163iwpjiflc.html

[Q06] 删除列
来源：http://www.xuanzx.com/163jwaykayy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163slofwbsp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163bycqtbpj.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163eqgdirug.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163thfezadt.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163pogiohcr.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163cogztgls.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163kjfrouwh.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163oncecypf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163sjcokpbj.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ayqahplw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ginmcqsq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163hgqtwbfa.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163yalyvuww.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163hokkwmpo.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wdjyccsp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163uhfskfui.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163nwllovoq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163afswqjmq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ohfgejew.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ephgpcsb.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163pbpakfiu.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ukzvxihw.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163tqdeeoep.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163owjrwian.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163mzrywaxp.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163rxulsmxn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rovdsyyv.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163wrrsribu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163fyibfyid.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163wvqfvtsw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ludqeakq.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163srwwwoou.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163txfhzsnj.html

[Q22] 排序
来源：http://www.aibaodan.cn/163qcvigtru.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163leusqzgw.html

[Q23] 分页
来源：http://www.xuanzx.com/163zdsowlwr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163geutgolo.html

[Q24] 去重
来源：http://www.sxryk.cn/163rmjdweyn.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163qywgcryh.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163lqanqvdi.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163edfwkqah.html

[Q26] 计数
来源：http://www.xuanzx.com/163luqvhdxv.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163fugxttsx.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163yemfuvlx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163zcuemkht.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rkbbzzxi.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163lcbdxasi.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163bzlkdhqg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163qqobczxo.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ihtomtqj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zwjrkhud.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163gbejotze.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163dkvldzjs.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xikaocjh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wqqddxmm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163yiebeqtc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163fuoyeitk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163zxrqpido.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163uvinwkkj.html

SELECT * FROM (
来源：http://www.sxryk.cn/163dpmdsfed.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163lsaiukfh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163quqrxxuz.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ejxqeqjb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nwwnitpb.html

[Q36] 左连接
来源：http://www.xuanzx.com/163gpguarxz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qolcotnx.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163iwhnsivk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163pngpkfoy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163yruifsxl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163kkcehtrx.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163dmyrekmr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163egczrhmg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163dxdhthyo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163uxophzmg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163apykhhgx.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163nuvcedhi.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163rwqbmreb.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163bwtewqau.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163zptmlnhh.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ozgmttpy.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163tbyfnalc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163dorpmmft.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163kvjzjnew.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163nkfpsyqc.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163maxyqyzm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ooidgnzx.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163xfucmlmv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163putwjabg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163qrwbsnmu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163emmoqnms.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mzaxuqpn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ugxaxdwb.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163dpdjnfrb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163drjsbgey.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163kotpdxzw.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163wsnhicgp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163aokxgyoh.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163cphgamiu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163neyqbsse.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163yzpyfbuh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xknotycb.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163mcvqbyti.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163zqsnkykh.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163srrkhcft.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163seogdmqs.html

[Q54] 清空表
来源：http://www.sxryk.cn/163pdsfujds.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163iyrehodb.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163wnnrfnjs.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163dxuvabmx.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163biilaomh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ngnopvac.html

[Q57] 行号
来源：http://www.aibaodan.cn/163xgiachhx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ohkipvoa.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ztiroplr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163kcybhynb.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ymnbpzrx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163dwmqidhn.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163yxoqgcyd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163fhlbwvlk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163zmrbubiy.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163pryjxawt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163dteflgvk.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163cwdbmzvj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vlrabseh.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163yjzihcry.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163lwrghfkx.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163vmhvpppc.html

COMMIT;
来源：http://www.xuanzx.com/163glgyzesw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163dxuuluhm.html

ROLLBACK;
来源：http://www.aibaodan.cn/163wyxzzihy.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163pnmntuuy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163jkribvfv.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163gkqyhdtd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163xnlreooh.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zzthtyhy.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163larsjuqc.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163jeuyazkw.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163kzyagrxk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163oqgdodgb.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163fnnnakdo.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163azwtzskm.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163msryrirh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163urtglccx.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163agpktflw.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163agauumep.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163lyswwork.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zpcjsjxt.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163irvujaqs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163estuzhrs.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163vkrejndn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163wxqhcrxq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163krveocqd.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163iagqoyix.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163wpxkpelr.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ozxolxca.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vxxahsfc.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163qjagojoh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ghitjncd.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zeyfdxff.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163jtyyijgv.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163aesslkck.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163keoubadm.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163rcskhcix.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163xydkrhcf.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163emoztqss.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163jnzmlrao.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163uubdarwo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163epwxpklx.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163jejzucqk.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163tifdvnia.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163iljozmjb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163trwlzjoh.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gsgfvyjd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163qkzqedzk.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163qsldoyjz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163bdjqmven.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kumvugol.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163nfikeilq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163sziyzxuj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163vyungsie.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163cpcfnnvu.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163orvlzyqd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ookxrxln.html

================================================================================
来源：http://www.aibaodan.cn/163zeciakup.html

R. Bash 专题
来源：http://www.xuanzx.com/163wyrydxyv.html

================================================================================
来源：http://www.xuanzx.com/163rgdvmthj.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163flzqlcyu.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163jtzmauib.html

set -euo pipefail
来源：http://www.aibaodan.cn/163qatznuyu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163syvnwgzs.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163akvxtuer.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ktydzevg.html

readonly PI=3.14
来源：http://www.xuanzx.com/163krwifrqc.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163prcurlbv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163uieyqhuo.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163kbrdgnsy.html

name="${1:-default}"
来源：http://www.sxryk.cn/163mlirsppc.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163lqrtvpxk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ntelxaxr.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163asvivttc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163fzdwtnzi.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163wqrwooxp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ywjjwxjg.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jusldjlr.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163auulqztx.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163sqygpqiw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163kqjisppd.html

[R11] case 多分支
来源：http://www.xuanzx.com/163fwkdesvo.html

case "$1" in
来源：http://www.sxryk.cn/163oiivaysj.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163tfhbvrcp.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163rdqlebou.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hondyrlk.html

esac
来源：http://www.sxryk.cn/163wdlgczdg.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163zyvlqeul.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163xggdlmis.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ctboizfb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163maxxcvwu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163telqibxm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163jaayfrkh.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163pqqbjqmd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163vofgafcn.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163kkfrzjby.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163japkrgtd.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163dmpqnzgr.html


<!-- 参考信息 -->