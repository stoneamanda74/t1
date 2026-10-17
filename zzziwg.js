外链999!wailian999！

[O06] 使用进程池
来源：http://www.aibaodan.cn/163nyiuhgvd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qrhkqurp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163vxetwadn.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kbqcojse.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gvzmamtc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ldnihhmi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163fveuylpm.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163mfmlacmf.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163pshpaxpv.html

================================================================================
来源：http://www.xuanzx.com/163dtempbbj.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163xrdiengd.html

================================================================================
来源：http://www.xuanzx.com/163jroapnqz.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163xkvnnahv.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163vgdkscls.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163exenndet.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163iorgcdpd.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163kvgdhzfv.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163yfzyimzq.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163obgvslnd.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163wucgdkcr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163leencmeu.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163lpwroqcx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163jrbuysot.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163xecywwjd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163qhfrkyrp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163amjdlrjd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163jqzaypta.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163eeagmovg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163oxcbnklk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163zzymiwfg.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163xeigbvgh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163dizpocoh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163hkkcuzwm.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bwfdjfmn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hyduhnxb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163vgokypao.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163mfxxdyaf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163dtgwuptn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163oajjikur.html

[P04] 求长度
来源：http://www.sxryk.cn/163wehrsqnk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163lrplhysd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163czowhgcv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kbozkjcl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163thnsvurw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ilspwutq.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163fxyngboi.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qxisdvhj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163kverasbe.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ilcvknnp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163hcepxxjw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163sryadlfd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ymohfndn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dochvdkw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163eshsmhlz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163xdyigbjy.html

Ruby: a == b
来源：http://www.sxryk.cn/163zryxffjj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163qnjejmgr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163xvkjiyxu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163jukshnyb.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163adezsqhn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163bmcndkwa.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163mjgpwfev.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163skhkuhfr.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163vwijszaz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163adziekkl.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163mesnfhpd.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163xqwwxlja.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163habpctyu.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163lbnporml.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pjlbhxaj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hoiezulh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163lowgbpqm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ttxzbddo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163thwxybis.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cjrdnvbe.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163oxktlgtl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163egebikgd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xfsrmyac.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163gskdbfmt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163zhldfnqu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jxdezjqq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163avlutqyz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163qzdvmllx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163bqphhyam.html

================================================================================
来源：http://www.aibaodan.cn/163oslndvsm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163vrxxdkqs.html

================================================================================
来源：http://www.aibaodan.cn/163sqiikxie.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163kqgnwszx.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163iegtndnl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vjzdegtl.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163udfmwrtv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163xdswbyse.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163yyoqnokm.html

);
来源：http://www.xuanzx.com/163pspfyiin.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163crouxcqh.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zzlqsrjn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dmbrtdwz.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ltjafrhu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163tsbmpllr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163gjzpzfgx.html

);
来源：http://www.aibaodan.cn/163yhacygpc.html

[Q03] 增加列
来源：http://www.xuanzx.com/163svqhetja.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163fgsqbihi.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163siyeuiev.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ejgxcdkl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163hriefxpt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163dxqgqngj.html

[Q06] 删除列
来源：http://www.xuanzx.com/163leephdam.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163rkfhkwvd.html

[Q07] 删除表
来源：http://www.sxryk.cn/163rtteievj.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163upuulmzl.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163qvedmdgm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163rbfswrpo.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163auxmqtfy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163pszfrxlo.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163kdyafwcg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163dsvxttsv.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163jpjlsggy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163jdabqwof.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ukxwnuyg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163gwjbsnjv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163gjzullvz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163nmhjnjpe.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wifuqdvi.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163fzyclsmw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ppiehoqg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163uoabzqjh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163fhfgdkld.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163usuhduzt.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bjzwcvrz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163idudrhxv.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163akuupygq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163aocdtlyf.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163upyzkmbj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ltlnrens.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163mubuyxvb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163hxlmapsu.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163qudkshys.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163wowxsqki.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qeazskng.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163hfzozhfp.html

[Q22] 排序
来源：http://www.sxryk.cn/163lqkwiveo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163wehyqdbv.html

[Q23] 分页
来源：http://www.sxryk.cn/163xmohqaod.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163pignnnzu.html

[Q24] 去重
来源：http://www.xuanzx.com/163nzvqrbhk.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ignkcffz.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163jnqvplff.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163tsebexgx.html

[Q26] 计数
来源：http://www.sxryk.cn/163ejyfirgg.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hohmylhn.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163zqwltfxo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ttkbryqc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163yitgvleq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163lksumgin.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163cypgzpnd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163fphgbqzj.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163umnnvhre.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ldyikwgv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163shetafcd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163letrhrfa.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163xpgbeapl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163poaufkqa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163rmeoethp.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163eegcklqo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163tjaauglp.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163lfrfttoi.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ramxnhyd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163fbngochz.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163rbuefdvd.html

[Q35] 内连接
来源：http://www.xuanzx.com/163uieorivv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163obrnddlt.html

[Q36] 左连接
来源：http://www.xuanzx.com/163fcmhehty.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qhzakeoh.html

[Q37] 右连接
来源：http://www.sxryk.cn/163objgqsgf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163drdoxefw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163jbbujyxd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163bxslmawf.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163xdqqhwnj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163tpjucgks.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ildvqmfp.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163iqlctqfj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nnosaegq.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zsttqlsd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163vflpjbak.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mceyncey.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163naqnvooi.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163plnubfox.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163axosiqwl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ffjjanje.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163gnxslyhj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163oxguacsi.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ovgwoxut.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163avyvztkq.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163tmxhpcai.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nstizsxm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163aeddplsb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dwuiugxv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163biorawdt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163yruebtgt.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163xzarpnqu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163jgzfohst.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163umrrrtdk.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163nqdgmdex.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163zulibihu.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163nrbjjqml.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163upnjxprc.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163pouemnqe.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ozfglsdw.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163onhzrnrs.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163rhjfvwpk.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163obigfxfc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ofemiisw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qfhmllsd.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qcvhkict.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ryscawgj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163kiauhdcf.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zgowycik.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ezcevgsx.html

[Q57] 行号
来源：http://www.xuanzx.com/163bpgsufbe.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163wcwkpfpg.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163hjbtbdux.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163nkwkbbaf.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ffdnigjt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163hnwhkubh.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163clozdinn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ldaqpohx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163hyletbtr.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nttovntm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163qtyjhiae.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163bpezgkiq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163llxxuehz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qwmrtzel.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163nkpnlcwy.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163xqxnyawo.html

COMMIT;
来源：http://www.xuanzx.com/163zihvgttb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163skghnvri.html

ROLLBACK;
来源：http://www.xuanzx.com/163zihghlsa.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163tznzbmib.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163orsdbkdj.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163uslaepru.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163eokgpest.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mdufroec.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163pgodkzad.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163wntzxgin.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163acaxpadz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163fzzglsvq.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163vsitvggc.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163zobuqcve.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163uswsyilk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ketasfcb.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163veyavgvd.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163jidiwrqh.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163hmkhdbbz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163qhfmzwlf.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163tyqvllec.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163zksvmqps.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163bamoabkj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163xbvclvgy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gayhfbtq.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163imrvsrfa.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163lwstfsts.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163znfpbyyb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163zkadmpuj.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163tzrydwjf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163bhxcgkvg.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163erghsldy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163sdkdpfaa.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163nrymlqcx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163vpzkjnux.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163wnqkavth.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163yprftnnx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163mcrolzqc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163unylpgqk.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163swchdrzs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163omasfxkj.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163rkfgeums.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163gfgbcaot.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163itxmhcmr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163aouobiui.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163xzgqroht.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163lpghzoku.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163thmuxfew.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qmreifcn.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163sqqgmqlk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163uvgqevzb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163cmijkuqk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163inolndyi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163sacxqfsg.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163dsiewtkn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163iqpgrfoh.html

================================================================================
来源：http://www.xuanzx.com/163qsnfuwte.html

R. Bash 专题
来源：http://www.xuanzx.com/163ctlygjus.html

================================================================================
来源：http://www.xuanzx.com/163cwqmkrtt.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163brobjimx.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163pttpnoeu.html

set -euo pipefail
来源：http://www.sxryk.cn/163pujmxjso.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xhwmzhex.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163yrktpagw.html

[R03] 只读变量
来源：http://www.xuanzx.com/163akbmntnw.html


<!-- 参考信息 -->