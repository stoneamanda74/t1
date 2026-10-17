外链999!wailian999！

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163sexsumlb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163iduudjkf.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kbyckufy.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163eyvymjzn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ytykfdep.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ldwyxrca.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163igspmmse.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163bacvamot.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163hbmqiqru.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163xejzwklx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163wljmpqae.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rgiwbgqg.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xdvvyqjo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163uistmtez.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163dtejhxru.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163xpoctjou.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163jwsttuls.html

================================================================================
来源：http://www.xuanzx.com/163nbextsti.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163suunyrew.html

================================================================================
来源：http://www.xuanzx.com/163qujdtqvs.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163aejwtzjv.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163qxicdfsg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163haaunhhz.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gcobnzai.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rspwispp.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163irhyvpgn.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ffoaicpf.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163zceaouzv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163wepaxrdt.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ovmxmndp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163xcatyrlc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163hxlehste.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163anrgvbcp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163sruuchym.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lsbpzkeo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163pusdvdhw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ezlaoaiy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163wzzxwfrm.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163qshtimkp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hircuqlx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163froionwh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163abkcthxh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ousnxicv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163nvdwcbbl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163xvjvicvc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163gepccejj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163cowbjlov.html

[P04] 求长度
来源：http://www.sxryk.cn/163smvswyxa.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163bnrvjnoz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gkmwmlbl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163roathdgg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kqoespgz.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163xnyitvah.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163bvsnxkek.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163bmssnurj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163fthooyun.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163wzoqgctr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163csvqqtvw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163wuoaxnle.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163jqionqyv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163sfzbjvct.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163erycsacp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163rczybixa.html

Ruby: a == b
来源：http://www.sxryk.cn/163nbqsegaf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163zovhfcum.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zliowttw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163voutyjfj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163rmvzsdqk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163gmtvpqnk.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163esiplgtb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163kojhqkio.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163plcxmtty.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163fzxucgew.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163oipzhxwq.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163lijxeqab.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163voyvvknx.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jtftatly.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ukegdsqp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163felpegng.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163anlqknma.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163sizlauoy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163szpwekjy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163eymnfhab.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163lvwvsmgc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163kqceavof.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163duyvfhue.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163iiohpyxh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163lfsrtbmb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163cwvvdary.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163mdivykzf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163caqcpcbz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163eqneoous.html

================================================================================
来源：http://www.sxryk.cn/163yvqktrar.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ltydbgid.html

================================================================================
来源：http://www.sxryk.cn/163zwtsuyro.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163mfdmtlim.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163auiuftjv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163uspzkrzk.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163gfnnghxr.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163quibnghk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163zfqiaimj.html

);
来源：http://www.xuanzx.com/163laeczbzm.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163pfpmdvem.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163acqjgknw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hvwfynuc.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163icgaytsp.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163uhgezndl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163gbltibqv.html

);
来源：http://www.sxryk.cn/163usbcpweg.html

[Q03] 增加列
来源：http://www.sxryk.cn/163igkwlfgj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163phogexjv.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rdldzmnp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163abfegncx.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163wzbpcdep.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163jmeicuhz.html

[Q06] 删除列
来源：http://www.xuanzx.com/163xegvmpox.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qtjcjzjp.html

[Q07] 删除表
来源：http://www.xuanzx.com/163gwaakaig.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163dkimljrj.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163lchojhiu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163sqhwcxkq.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163kqayovtx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163tjsbqwlp.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163huxbqmgl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163rppjpccz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163wovlbiwy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163nldqauqh.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ykqlpmjn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ktoserge.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163dhhuycrw.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163yyxezwov.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163htlfmkgm.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163piuudlty.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163itezjwnm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ztyikddd.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163seqiuetd.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163uyifjnjb.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ugbhzthg.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163jvvasgmt.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ofvoldum.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163pzepteoq.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163zxjotxij.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ntqeiyly.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163scnmcnby.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163kqarinds.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163cpozvfns.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163cuwpogvh.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163mlpbidst.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163zafgbmgs.html

[Q22] 排序
来源：http://www.sxryk.cn/163hhimjdar.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xfmqvcao.html

[Q23] 分页
来源：http://www.sxryk.cn/163njptvecb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163seoxbgfx.html

[Q24] 去重
来源：http://www.xuanzx.com/163teltndcx.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163zfemuitn.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163qkuauhby.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163rredpfaa.html

[Q26] 计数
来源：http://www.xuanzx.com/163fqvswioi.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163tiznozba.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ngvjxsvy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163gfpfixkc.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163kbusrxiq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163qrjnmayh.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163trjedpzb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163euzzkdng.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xhgbsmot.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ixoeurde.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163rnqodlzi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163nxzdjrfa.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163jopfybmc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tylxueis.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163dyoidbcq.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ejchefva.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163nkbsgztz.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163esptqrkp.html

SELECT * FROM (
来源：http://www.sxryk.cn/163vxzrbxqx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163wlzltdty.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163rrnsqeie.html

[Q35] 内连接
来源：http://www.xuanzx.com/163eevezuej.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163fmrpxxoj.html

[Q36] 左连接
来源：http://www.xuanzx.com/163jutyobci.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cbrczati.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163whxlkkdw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163oitehuzl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163kjetmaom.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163mzklfnps.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163iwhtoyyu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163azbjjznb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163beyyvxdy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163mcgpixou.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163mhvrojmy.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163jvinakpb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163fgzqyqop.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163bmouiboe.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163raydlfdf.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163vlbplzwg.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163pgwuhscg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163zouzchmh.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163gtlzoxsd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163hvklvtsx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163mlssoohy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ilucckno.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163gepvkave.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163uhievxtp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163towrxixp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bxwdftpp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ietccqkm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163xkovpran.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163hcodvdbc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163lmafqphf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ghtwylro.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163iiqssjkk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163mjhwqvzv.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163eymjajqy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163kxkuojdu.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163nqhzsrlg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163rxlmzwuf.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163gujvnjqo.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163dyzrncnu.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163zkonpshl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163krzlusur.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163hgknqynt.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163aishubeb.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hszckvxu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163yptcwhlx.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163eksbqgsq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163gcvygqtt.html

[Q57] 行号
来源：http://www.sxryk.cn/163qujkqann.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163oepymblf.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163sdamkruv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163kcgyilka.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ruhirthx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163iqcwmovc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163udqonuio.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163lvndgije.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163yoyjvfwp.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163keedbvum.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ldlvwzhy.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163rcilclyn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163igrdrkxv.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163youmnlct.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163xjqwtuns.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163xmzckmrk.html

COMMIT;
来源：http://www.xuanzx.com/163dsjoyxrn.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163zopjrjgk.html

ROLLBACK;
来源：http://www.aibaodan.cn/163uljfpzht.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163xwqhvjip.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163wxmieefu.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163hghmfcej.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mvzqvshc.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ubxnktvd.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ccpwdeww.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163xgvikfcq.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163hgmdnoop.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163cwetsmxr.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163uslarjsu.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163llmfogpm.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163dgrzphlk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163jidbxgut.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163fxdblovn.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ifrobhaz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163dnobkuzd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163mdfvgfur.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163kuqtwfqi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163zxvuehki.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163bbdlwaus.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163mygzbhyg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163tftkooea.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163sntrnbau.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163qcdrogrg.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163dvxjauoh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163fvmxpuyt.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ivkeenyc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ocdorrun.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ttvtqhzs.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163gdslpnaj.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163rmvghule.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163yqdrrqmr.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163pgeimzlg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163mwhuukxe.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163nkbxxoqk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ytoazeqc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163oppxhirf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163waxiwpzj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xftgifnm.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163xvpvqyxn.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163bpdeiutt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163wjbhwlet.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163pihrgsyt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163nbtiatsz.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163gjzoxvoh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163gpdpissi.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ixtrrydh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163spdppmvs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163rukbzjbm.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163wryyduvc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163wwdxgeis.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163yetaeaal.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163kuuvadxb.html

================================================================================
来源：http://www.xuanzx.com/163kjmgvdtk.html


<!-- 参考信息 -->