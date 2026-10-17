外链999!wailian999！

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163apivpjru.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163nlibxnjb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163fwjfpydi.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163bulslvjp.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163hsmbzxzy.html

================================================================================
来源：http://www.xuanzx.com/163viiyxeqf.html

P. 常用工具函数
来源：http://www.xuanzx.com/163uvdlwchk.html

================================================================================
来源：http://www.sxryk.cn/163okquzyhb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163gpbcenvt.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163vxefqjkz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163rcglxsez.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ovkbmkyn.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163szcpxpfx.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163hpvuoipm.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163jsmxmmxq.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rpjfqdrw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163bpyddabr.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163nxwnzdqc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163rrgvmaml.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163lhiuusvd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163nyxyodiy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163phhasunh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163roqoygdl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163mwpcrrad.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163devttrmn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163jwaqishm.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163haokhbxe.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163euzlxhul.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163bajntzhc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163dgfhlebz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163fhgosvxp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163udhmprwm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163iusawdwh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163yvbkbdvj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wugcwhjq.html

[P04] 求长度
来源：http://www.sxryk.cn/163bvlycclg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163aqfyyfvt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wkjbocju.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kpqmftdl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vemophhl.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ssgazekl.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163wdgxrwbw.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163jifgfwis.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163damxguhg.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hlvgqetp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163cxggvjgu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163qdxzyvha.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kzaptzir.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163anrorgqn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163fwsnqdsx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163aqbvypjm.html

Ruby: a == b
来源：http://www.xuanzx.com/163vemcntlw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163fvrwmvyr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163qepbrexs.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163pzkjkhze.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163yzlbudrz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163aqddcjor.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163okgcjsix.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163wdpbehxg.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163vzptumru.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163fdszisit.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163jeeasotb.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163afjsxhri.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163cmzyixbe.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163kwgjltdt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163oglvigla.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lcmbcgys.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xdeuxrrt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163eqbdwobk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163maennyfz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163fgkzehog.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163xrkjxlww.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163wnilhacg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ejqpwvfy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163hudfluml.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163jxjrrzbc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163svjqbvum.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163mwneslsp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163uqmcffqo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163kcwvghwt.html

================================================================================
来源：http://www.xuanzx.com/163glaprpzf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163dbtwcvep.html

================================================================================
来源：http://www.sxryk.cn/163zzuomefv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wylmssds.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163htkuxtug.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163aplkwfbc.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163oliegncb.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ansbrrpo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163fizenbxh.html

);
来源：http://www.xuanzx.com/163vejufwkr.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163mgmslkgd.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ydwmhmmz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jmjachub.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jwgbmbzx.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163szenjckf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163hvicscdd.html

);
来源：http://www.xuanzx.com/163gwtnqjxl.html

[Q03] 增加列
来源：http://www.xuanzx.com/163nptpiawu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163bnfnpauq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163yhxeucqh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163qnlioicx.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163vixxmyuh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163tuvnfojn.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ttdjmqkd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163bnvbnxaz.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163htylaxve.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163nroewklz.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163rtyzywvx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163plkxklam.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163vnijihkd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ggubusio.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163rpacjzin.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163pxrzxtix.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163sooptqia.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163rqraowpu.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163lmyctrnz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163brztnjvv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163pwyxsxbp.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163bsfalfab.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163hryexesu.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163jezuhnma.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163rixulxkr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163qylhjzqh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163tfxnstwf.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163kmhgpgwj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163giepuyzk.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163yobfzrul.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ubggqstm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ooxbcqkh.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163tkranjnd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163exufoovf.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163hmigvtbt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163pqtjured.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163szwisnti.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163xzlfaeyu.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qrwnbzfq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163yantdklx.html

[Q22] 排序
来源：http://www.sxryk.cn/163bixhiahw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163bjopevsq.html

[Q23] 分页
来源：http://www.aibaodan.cn/163rrmhnbch.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163wdfbegdg.html

[Q24] 去重
来源：http://www.xuanzx.com/163qyluymvy.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163nryvfxwv.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163fyhocaxn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163kalayykc.html

[Q26] 计数
来源：http://www.aibaodan.cn/163idsprmvf.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163cypsmjvs.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163aqbzjcon.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xlsafiiu.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163euezlsrd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163kqdtzrzf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163dyjmpmla.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163dvppwloa.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163loteqiwk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pkddfhfg.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ocqqmooh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163dbqacjgi.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163vuslhejp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wrsgdlbw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163olosrbes.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163pzwhozra.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163hdhlfqiv.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163uzeqmctu.html

SELECT * FROM (
来源：http://www.sxryk.cn/163xwqwwdjk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dyfyqoql.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163qzgmjdeo.html

[Q35] 内连接
来源：http://www.xuanzx.com/163cqnwogar.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163detufzoj.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163trumokan.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163evwhgwzn.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ankounyn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ualfyymq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qpsubjcg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163eflecigr.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163dzmsiqyz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163stjprqzk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zjpqgrrb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ydkcmyyp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163auojgutk.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163emlwbnoq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163qxywyitx.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163uilltekg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163kwqmnhvu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ojujgypa.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163wrrkarjn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163rlpzhpiq.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163eugjoctr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163kuofslkr.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163qcshfidb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163tyrmcldo.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163yaonewsm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tnzipxvm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163tymflptb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163asuvfren.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163kmxlzrhl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163deghafcc.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163bdzdgxmb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bltnqbns.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163wizdomjv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ddotycbf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163fipqmdab.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163hsoempms.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kjzzhvji.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163pubpnfxw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163eiaetcjy.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163zdfyvwpo.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163rkxiayfp.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ahczmzzh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ckrdpbdj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zznbyskn.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163esduernz.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163dnmidhpf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tzsxxpbd.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163iwjzkqgn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163mqsghwsl.html

[Q57] 行号
来源：http://www.aibaodan.cn/163gijmfsxd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163rweuzcmu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163bhuobyxp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163otqojaap.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163rdnqvaea.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163cvbuoino.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163acgbswfu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163kroectwc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163btabxkwo.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163pefyqwqo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163tzewgkjr.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163voddhsnv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fxpgcrzj.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163sokierte.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163dwspkzsx.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163abpixghj.html

COMMIT;
来源：http://www.xuanzx.com/163zsdrtzed.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163jqqnlqbb.html

ROLLBACK;
来源：http://www.xuanzx.com/163dmfhrqsx.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163yjkbcyha.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163konuxttd.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163funhjtak.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163fsoljeje.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ijiarigm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163bhqygrzh.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hcdjujnb.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163zxdrhkxz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cfjyugtg.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ynlfohjv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163beddrjte.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163jwkmpjxn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163hhevxhyx.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163hbugkswf.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163enmpigco.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163kcrwbdvm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163jnuwrfrm.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163txzwzepl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163umyvbzpb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163evfsbufd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163gjxlmziv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jonnslop.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163atzushuo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163giaadrky.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163hbcceqjn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163lvjpuixa.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163jhhqdois.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163hzwqzjqu.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ozagwmov.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163hvefrtdr.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163gieagknd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163fanhrkxl.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163shlyynme.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163qmoiflem.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163lwnfuazm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163aqreshzh.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ycciglyt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163faqynxlq.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163noczghdr.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163cgcumhjq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bjkzzluo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163esywpbsg.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163pcvkwgjb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163tfprotsa.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163whzdhvhe.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163efpfawvt.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163rfiltruc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163gpjjphoz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163qhjubiql.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163vderrfcv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163pfztgdcc.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163mqkxsbmp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163dmvnhxln.html

================================================================================
来源：http://www.xuanzx.com/163hsoebaho.html

R. Bash 专题
来源：http://www.sxryk.cn/163whauvvgl.html

================================================================================
来源：http://www.xuanzx.com/163gwqkexzo.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ophczpfq.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163pwgimypt.html

set -euo pipefail
来源：http://www.aibaodan.cn/163uwkdapiv.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163advtkxef.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163cbibcqkd.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ahzljneg.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163biygoseo.html

[R04] 位置参数
来源：http://www.sxryk.cn/163fhikubja.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163hmfnxqof.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163lkdekvds.html


<!-- 参考信息 -->