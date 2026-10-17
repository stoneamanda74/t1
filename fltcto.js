外链999!wailian999！

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fcdjvqie.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vmdxbzsi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163xpqsbuny.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163emdwuulu.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163vtyictko.html

================================================================================
来源：http://www.xuanzx.com/163fnsngsdv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163qpinfyrh.html

================================================================================
来源：http://www.sxryk.cn/163srsqyzjs.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163gfqrvpgb.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163fdrbvkab.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rhiawnfm.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163apqyirnq.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jdzbajge.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163nfhvhjgv.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dmcclmca.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ptzijbpy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163dqnoxkyb.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163royuaxgd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163tlhknmuq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163rtnkmvqx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163wwovfdis.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163xowbdpkt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163byeywldi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163pztcapkl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ejpehzeq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163aejkbagm.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163pyysbzgc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ctxgbbno.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163kossmijv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163etwgafnf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gsvllfam.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163belrtvui.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163mirxxdob.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163egwbaooz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163snzbkrit.html

[P04] 求长度
来源：http://www.xuanzx.com/163jesexgry.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163xsnirsox.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mkynqagx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163byrrzxuh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mjehtvjg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163vwxasgxv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163hnfkejne.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ueppsbyz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163abrmqtzp.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ttijvfau.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163sqbzkfyk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163rzvnonms.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163vbwwbnmz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zecklkyw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163dkxbvfhs.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xieoyqxy.html

Ruby: a == b
来源：http://www.aibaodan.cn/163rmdsdsqa.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163arxzlfcw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163mbpbhtat.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163zryvaemi.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163pructomh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163uxrxlqfh.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rgnlcwui.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pbaoxxjm.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163aaezkbyw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163npzufxia.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163gyysemdm.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tfvbrnyi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163vpocvlvq.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163gzrzaywi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fgtmccus.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hdvvrpyn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163vgewyhgw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pyovqznt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163bqyarnel.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rcqlmcde.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163zonpdhpo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163zqnlmssn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163qbmoewkh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163wxcfoolo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ylazlcwn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163atmpkovk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163pycpjiew.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zjzqpzya.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163kojjnhft.html

================================================================================
来源：http://www.xuanzx.com/163unfzdmdr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163zylkhllf.html

================================================================================
来源：http://www.sxryk.cn/163mtrspmpu.html

[Q01] 创建表
来源：http://www.xuanzx.com/163jxagibkm.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163mzhkhgqv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163gpjxzclw.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ncqreayg.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163temfxqpi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vlxjavfu.html

);
来源：http://www.sxryk.cn/163izlphlix.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163jgmxfejb.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163dmidqgjd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xxjgblgf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163fbahvytu.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ohtqytgm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163tgwiepqq.html

);
来源：http://www.aibaodan.cn/163zffsaxcx.html

[Q03] 增加列
来源：http://www.xuanzx.com/163wibcprgc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163bsdotktc.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163hmhloqsx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163sdmxzuyx.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163uoeaozlp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163gixdjlzd.html

[Q06] 删除列
来源：http://www.xuanzx.com/163neyfkcgt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qarameiv.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xzbatbgq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163lzdntupw.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ahnxkxdv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163hdmhazuz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ijlsopfk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163sdcwmont.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163mewaxyzk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163owscbjkl.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163wigmealb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163obdqpuvh.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163qhhyynmy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163yjokqfll.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163lwskyxfz.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163kyfxrmdq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163kaiydkhf.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163iqeuvwlj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163flcbtqaf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ivzyuopg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163fugrrerp.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163xkwrleii.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ftqhpcrs.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163bobudyzs.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163nsujwvwd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163sdwywzgi.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163nldnvxbk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tacjhyvi.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163fixuhiyh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163cqahatvu.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163mesppxjx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163cxwjbkud.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ptxjcckz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163siqwimgy.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fzimcqjt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ifrlnssf.html

[Q23] 分页
来源：http://www.xuanzx.com/163lpggqubu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ckooxuep.html

[Q24] 去重
来源：http://www.xuanzx.com/163neixbvto.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163xquwiknx.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163tdhwtsda.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vrjitdec.html

[Q26] 计数
来源：http://www.xuanzx.com/163ukpwylmv.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ajrdagym.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ngraeupq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163cfewzmih.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163uixzhpfj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163bfewhhwo.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163zefwyzlg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163mqemnvqc.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163dfhvwcpe.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fmpyonvg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163qmmeywxy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163srersryp.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163fzgoqbsf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xltbbrwd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163isqcvcaq.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163tqomhdsd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bqkrepws.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163cuxoodsz.html

SELECT * FROM (
来源：http://www.sxryk.cn/163dmhmfvlg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163fkegummy.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163gabyeshj.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163geqyoohi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hmqjxzig.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163acbwxyjl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gplwanub.html

[Q37] 右连接
来源：http://www.sxryk.cn/163lgvxiehc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163hukzpqui.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ieoknotg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163lebglfld.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163nhhrpoge.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yexleheu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163sbzxrizv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163gvllgdqf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163wnaqlblv.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163aanuflzx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163eyuctmcn.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163tsrbpgws.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ldccyixg.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163wojetrzh.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163huafotmo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163zpsuvlxy.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163uhalhknf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163tgnfxuym.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163trywgsnl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163mzjirztb.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163jkvmdong.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pnkbacsl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163zodbbbuj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qktjejmj.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163hjvxmikd.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163khnblnjh.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163zlgzjsnu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mslimsyv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163wolauwgv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163hmeyovxg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163pzcayxjk.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qmoueiod.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163hswjvras.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ataepkro.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163trjioopv.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163lmfcgtqz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163oygggckm.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163tubrimer.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bocqnyuf.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ewgyzgxo.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ueatilnb.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163awlagucz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zbxrladd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163iybzkvsn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163nwppijxy.html

[Q57] 行号
来源：http://www.xuanzx.com/163sjvbwkks.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163cirgtozk.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163zlrlwbjp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163fzpsqfei.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163rpxpytnj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ziexkpyl.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163qaduirqu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163dzgerabo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163twfgldet.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nvulryqa.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163vodlzssm.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ojrifbpi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vonhvhnh.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163zsovsieq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163dbstscal.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163zowqjiic.html

COMMIT;
来源：http://www.sxryk.cn/163ayyppwjd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163zfvfwmdp.html

ROLLBACK;
来源：http://www.sxryk.cn/163dypdeppo.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163kvptnkhq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163fewpoglg.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163varccsce.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163xiuzzftk.html

[Q68] 保存点
来源：http://www.xuanzx.com/163obqzvqxs.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163cinbzkgl.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163gxnkiwru.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163lokbmxts.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163bmgatkaj.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163byttklud.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163nwkkgczg.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ybymbhmj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163pcwpjtoj.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163fppfqrgo.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163wotssaaz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163atrlrsnk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163dnleokgi.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ndcgqryq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163tsdssvqe.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163hkcmcozy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163tiqkpqnz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163yhqtgplh.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163nneotzhr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163hrahzdyf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163tctzegdc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163qsjhgsov.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163qeneqrsg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163wnsdbmdm.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163zzrtwtes.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163rxvddrvx.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ankroswt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163djjdmmqr.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163jbdezbuf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163xtlghmtw.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163hpnvjent.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163wlmposlx.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163tplqgcdx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163fvynnnfc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163acvupoaw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163szmwuvol.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163cmowqdrw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163mknruyww.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163gorkfwag.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zpuebanc.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163atuelvke.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163wvmmyftw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163xpginmnq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163bpuhbydc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163zmnkbyqj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163fqoezinh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jbcghmgq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163pyrximrr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163osomksug.html

================================================================================
来源：http://www.sxryk.cn/163liznjkch.html

R. Bash 专题
来源：http://www.sxryk.cn/163gwfjwsei.html

================================================================================
来源：http://www.xuanzx.com/163olbnbhtk.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163keddbvty.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163xiqnpltj.html

set -euo pipefail
来源：http://www.aibaodan.cn/163erjkkpam.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ehrdnkms.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163eiguscbs.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163oztlpnbh.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ablpzwps.html

[R04] 位置参数
来源：http://www.xuanzx.com/163nhehmzzg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163fiwztbjo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ivldkegz.html


<!-- 参考信息 -->