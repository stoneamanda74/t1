外链999!wailian999！

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ayqanbvf.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163yauousni.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163sfdehnae.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wvqinoaa.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163stbjbbtq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163pczhdcng.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163tupuqmim.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163arrlekrg.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163tlpircjw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163urwnhcvn.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163krxnzksu.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163laumvckp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163deovynhu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163xyvnkyee.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qggfyvrk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163szxhrrcq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ymvoisgg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163yyswznnb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163qzzfjuzu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163scutecye.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zdbpgvkf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163dmbdhpsf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163sngvudbz.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163bdtrrapd.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163qhqwmhhx.html

================================================================================
来源：http://www.aibaodan.cn/163xnuxdvwz.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hdrfgevm.html

================================================================================
来源：http://www.aibaodan.cn/163gxgxurct.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163fnrrkyaz.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163sxgcfpnr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163tzxcjkob.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163smgpxhmh.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mounower.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163dpuspwzb.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163wmvqzciy.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163fllbilhl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163xieijgui.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163kzodctua.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163zsucfxwz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bvjewqdh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ozrgpapw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163nklwcvvu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163nvkvmrox.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163okvmoeiz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163goliddkr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163rtvdfzke.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163nwkbljki.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163cwqznszy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ltxmwxli.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163fuybgjqp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ypdhdtmk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163tzgvxfks.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163krmgvsfv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163rjilqbkm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ocickfzz.html

[P04] 求长度
来源：http://www.sxryk.cn/163gkyrjctw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ybgcroof.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gomgkcih.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ykumembc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wjsjctno.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163yhnstytl.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163orkfidqk.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163hanepkts.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xjvudyuk.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163frvjuybx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163mdcmbiyz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163yuczzvyw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163xdseaydp.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ojhlbhvr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163uodrncll.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163dupopcxn.html

Ruby: a == b
来源：http://www.sxryk.cn/163gzmgidpt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163wlznzlte.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163gfcsilks.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ekztzgcx.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163pqhtsmbf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163fnwebffv.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ufftdrrj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163nqgwlorj.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163cjhglwsr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163yndljbrn.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163hfsotxfu.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163aicutfel.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ttvemzfo.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163cripnejs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wrblhpea.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163sqzbavly.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163xhwbttso.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163gfqioekj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163zeyqwjrg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163usshgphy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163odncfsys.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ztlauaqp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163psycoddn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ffsxcwum.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163aquzkmdp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163tzpttjtl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163rbmvxbma.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163hmwantcb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ktzlszau.html

================================================================================
来源：http://www.xuanzx.com/163pvbtxgfw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163rfhnfkye.html

================================================================================
来源：http://www.xuanzx.com/163gdbxaszy.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ayheoebz.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163qayesbur.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163trwceanu.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rukjfhrv.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163sbpsjcmi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163fqgettim.html

);
来源：http://www.xuanzx.com/163dlthwrcq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zayyimmr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163qajxdazo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ozwsinsn.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163rxxndtjb.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163khyzphgq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ithwtecx.html

);
来源：http://www.xuanzx.com/163ljwjxvto.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163dcacifqc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ncfbdphz.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163mnvhckfu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vtymudxd.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163zsiaoixs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163eqmdelrz.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163szepzhvp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163iypflwob.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163afqqxzuj.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163nwpzixmk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wbemkchs.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163rxwdutym.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163qbmtmize.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wzvjnwxm.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163nmqnsajp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163hqdhqrjq.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jhwiyxdf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pmgvwuyk.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163zgdoykzv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163zglbneut.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163oxjimrpe.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163syyjbkmy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ixukcybo.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163erpwpner.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163kslxtssa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163vsitvghe.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163lfnenquv.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163dirasbjt.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163rmfspuhn.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163nqkqwqrz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163awisbwot.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163yjyenmbv.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ezzqpjkl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hseucchz.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163hnxamxbm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163llwwyaoa.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163awhggafr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ghmgphrm.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163hmujcyhe.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163bevvhfmw.html

[Q22] 排序
来源：http://www.sxryk.cn/163dzimwifh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163cpjtmivi.html

[Q23] 分页
来源：http://www.sxryk.cn/163fgtkexua.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163onkufnxr.html

[Q24] 去重
来源：http://www.xuanzx.com/163cotoianz.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163mnomafyq.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163njckoren.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163zamrsqsc.html

[Q26] 计数
来源：http://www.sxryk.cn/163fxsbxnkb.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163nqprxwnn.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163tzhjdwun.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163myxgqdul.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163stfytopf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163htssblwf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163buamicdx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ncwvnlfb.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163wkxriqns.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163uhhqpvgk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163jzjvdklt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163gfccrfmr.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163iuupibrk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sbznyjox.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163vryuifcc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163awyulwyt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163dalauafx.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163exzyfajl.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163vcgzglth.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dfjjicqg.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163zhoiasto.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163cpbmtqvl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dfllkwjl.html

[Q36] 左连接
来源：http://www.xuanzx.com/163trvnlykx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kzggglla.html

[Q37] 右连接
来源：http://www.xuanzx.com/163prwhphto.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163oemsddsi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163tuhwmdrc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hysyhqrb.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163enlfnkke.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163txwlmzhz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163tkrnicsr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163iyiuovye.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ooijzfju.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163lrqrmgpg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163chftttgz.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163gzqrvkyc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163vclvlwtf.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163iwjqbazd.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163dbxucedd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163kibrwork.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163jfofocvu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xyvxjosl.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163djcacdue.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163hqjlacol.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163clzxtckq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163zxxngzzx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163xhjdtxry.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dmeiivgg.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ubcbaimc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zlqrirgu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163idzlaebh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mejfeiry.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163grcsgmow.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163iphdbsru.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163accekgpc.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163clcccztm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163yqrxmwpt.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163lqodrqqf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163kbevxcsk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163tfazjjiw.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163lpaqpbmm.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163znajjjce.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163kxqbpqfl.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163fmwxqlkh.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163otcyvwyu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vikboqwd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ixxviqmi.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163mpjtxjec.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163wcjvotgt.html

[Q57] 行号
来源：http://www.aibaodan.cn/163hejohbpn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163hghtzxyr.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163osqkmnrs.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163awfmsjle.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163dkmmbylf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163sthhuvor.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ccisohgn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jeyvqxds.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163vrftytfz.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163vlynsncg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yibcsyby.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163iazroasq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163youylhhg.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163mjygcwhf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ddtwoddc.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163cfyhqsot.html

COMMIT;
来源：http://www.sxryk.cn/163ebvvnckm.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163jmrwavze.html

ROLLBACK;
来源：http://www.aibaodan.cn/163iwpflmzt.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163drxsriqt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163vkhgsawm.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163gmxofdbf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163nwzlqxxs.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163axwyalbx.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163cgmhuwir.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163jazbavbb.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163kbcuorjb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163jeosheqw.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163himpybbj.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163qccamnkg.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163egnqcchf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163uplkbubx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163fpjihuje.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163phicqohi.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163nkajxuym.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163gkijwnjf.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163rxoxlgri.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163yzrvjoht.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163efncbvgu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163zvywjfwl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ojdrlhnu.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163omemymkm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163hejlgjsf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163mfwhghui.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163vxppmorr.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ydwqyrzq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ifmjszwv.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ajijryuo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163xfyamzbm.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gucqnwhc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163xtqqemio.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163iuglwsmx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163cxjdwvxm.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163pmhgbdiz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163tbuezfsm.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163qykpolwa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163esryzbgf.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163lzmzzuky.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163sfdypzwe.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163tdmvncjd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163flqzslmu.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163faarmvno.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ocsvwmzj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163vbonblrm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163iwvxzres.html


<!-- 参考信息 -->