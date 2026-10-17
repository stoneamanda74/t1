外链999!wailian999！

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163jtcbgcdp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163efnonhou.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163dwneidvn.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163msrbdbbr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ahxxthut.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163awzmxppw.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163hvlwygbd.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163nqkcyiks.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163qzkswvua.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ivzyyonv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163pwkerdio.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163zgugiwna.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163fvibeome.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rytkztnz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163nldtozcs.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163zeomleug.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163izqvopdb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vmhgyodb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vtggbzot.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dlevzpcp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163lusrrlea.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163qawylngl.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163japbhwnx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163flptxixu.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ywlzvhqm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163uuwxrcle.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dxdprdab.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163olwsbpws.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cvebkven.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163tqceogzb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163qjticdtk.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ponkdspi.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163qprubdgv.html

================================================================================
来源：http://www.xuanzx.com/163oxxmrsha.html

P. 常用工具函数
来源：http://www.xuanzx.com/163lfgpjvht.html

================================================================================
来源：http://www.aibaodan.cn/163lnsllgst.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163uwlmoaly.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163dcdrmluo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163yomiietx.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163alfnvycg.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ywlssgvr.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163eoabqats.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163phhhpubv.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163fvpbfzvh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ykpbchfe.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lthxxrvz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163bqmahryq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163skvcreeh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zkszshkq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163bfvlizpm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163sntnyphs.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163qrodgkeo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ccpqzgca.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163jffdiaji.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163fkndxocf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163tculzvbu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163gsdjronn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qcloqpqz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ftghrzih.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163gljgqioz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163lwogsiej.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ddudrbve.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163sjrxtymk.html

[P04] 求长度
来源：http://www.xuanzx.com/163ayfdxosa.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ofdxfien.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rqhcvsvw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163byikxmtr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ugksfjpq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163weqrhybb.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qwcafcnn.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xlqghgom.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163acztnxmb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ohbcvzva.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163oazpsdxo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163aiiajrnd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163pquhkicd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163duthzhzd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163asqwtdmj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163mcpbdyay.html

Ruby: a == b
来源：http://www.aibaodan.cn/163fhbcnled.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ybyifwdf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163jvkeaply.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163xhrrsiby.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163rnjckuqg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bqvxeftp.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ijviiiuz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163nthkrqvx.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163evloejxf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163gtnpfkpq.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fcyqormi.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qvntomuu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163bnwpmhqb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163tjfzqbzi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kspseowd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bxrnyufi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163gftotmlw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163jcsfyoun.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163xvymlmng.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163lywpltnp.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ctbmlaxf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163huxuxduz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163tdxvxhzz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163aoikfsaa.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163cbtawlok.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163qusgkcuq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163jwanbfhf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163inmybycb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163zyrndaap.html

================================================================================
来源：http://www.aibaodan.cn/163vyfuysdk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163zyidmaww.html

================================================================================
来源：http://www.xuanzx.com/163fvqcrltz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163nkybwczk.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163nxdosatr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tlximcui.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163azqwodol.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ppuxglrx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163svbpwiyh.html

);
来源：http://www.sxryk.cn/163yrhmfzir.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ivyrklwe.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163kifhiuru.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163duzkcybn.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163kvcpkmwz.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163skdzgjof.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jqjsmawg.html

);
来源：http://www.sxryk.cn/163qimhvoom.html

[Q03] 增加列
来源：http://www.sxryk.cn/163dzpujaqt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ciawzcjs.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163jmurwbsl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163mtzmjlds.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163tovzjlbx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163jesjrcwd.html

[Q06] 删除列
来源：http://www.sxryk.cn/163suklifiq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163grtmnory.html

[Q07] 删除表
来源：http://www.sxryk.cn/163hpfxzwsz.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163dogujkgj.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163twoqmuaw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ondseduc.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163oqzrwfek.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163wupsqsnc.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163nwxpdmjx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bkuyluvs.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163zeiookvu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hzrtirgy.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163akizmdoz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ywpignpj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163rifeekua.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163uwykxogb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163sobhdoal.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163cfqvbitv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163yuneiyjm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163fkbmfyil.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163commyjdh.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163dtmwffsb.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163zckviqjq.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163rtvreubj.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163dbrmimcf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163axmoyxkm.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163xukwxeti.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163mbgeyxtf.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163biskrscw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163acztmfbc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ixzayrre.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163agueiyvc.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163fylozdei.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163tycmakog.html

[Q22] 排序
来源：http://www.aibaodan.cn/163pccewwtk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163vbwrwxoh.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ygjxvuby.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163rtakwqqf.html

[Q24] 去重
来源：http://www.xuanzx.com/163yswlqgyn.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163asiozssw.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163uipqyegz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163foppiukq.html

[Q26] 计数
来源：http://www.aibaodan.cn/163shipeaye.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163kkpxhnxx.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163kixogrsv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163clpmqrzm.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163byrnqgav.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163mwkoffxe.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163vuwdhhfk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163kywvkmvf.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jfpcapmg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wgrksjff.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bfntqsdm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163zujndfrf.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163pcsbhfkx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163uellglvj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163lkecppdb.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163hvqnvugu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163uhwdrsjx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jhmyvxbe.html

SELECT * FROM (
来源：http://www.sxryk.cn/163nwhiqhqv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163hijgbnip.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163jqlxxkzn.html

[Q35] 内连接
来源：http://www.xuanzx.com/163rlbiriyw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163turudljp.html

[Q36] 左连接
来源：http://www.sxryk.cn/163xofxcctt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bohrijey.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163psykolqk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163kjyqcsqk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163xounvsuw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163kxkztfrs.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163dyelmvcx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163qibzmqpc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163svzfsscz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vvbtrsfu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163gvstqryo.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vjtmiqzb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163bsdrvzsm.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163wsvmoaqb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ayackzvp.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163nsybqqeo.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163pvveunfd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163emnbdltd.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163lfxbtvqy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gfuvkuqt.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163nsehsunp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163qkrejyez.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163kausuqdx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yvjmedki.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163sepxewfk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fxixnvyf.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163drlyddmt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163cugsnuvw.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163hqxoznea.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163gpgqbqtd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tkapgsvc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ymanawye.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163fphnvpwe.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163pmwcoggr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163pgytiqie.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163vpfttayy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ycizqrqu.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hkfzykag.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163pxwdxiif.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163mjefxvol.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163qrcumnvh.html

[Q54] 清空表
来源：http://www.sxryk.cn/163slocxceb.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163keotepms.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163shenobwd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163xjskeyad.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163pjkjpebl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163gcuuynbx.html

[Q57] 行号
来源：http://www.sxryk.cn/163oxmkymqx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ybysexjq.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163gfhcslyn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163fdzrafav.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163wghnojby.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163tyokzojg.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163vwnnaqbi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163mjebseil.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163kmdbqqao.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163cspsqjor.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163wjdxfjxk.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ncxvfsfh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kdamjfss.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163wzhjbqgl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163lbjaxwup.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xucbawtm.html

COMMIT;
来源：http://www.sxryk.cn/163wrfxwafl.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163cgulfnpi.html

ROLLBACK;
来源：http://www.aibaodan.cn/163cdirfcjj.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163rcvyotwt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163dzsqphfx.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163lezpmpwr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163iqiyjdwy.html

[Q68] 保存点
来源：http://www.sxryk.cn/163klymwmin.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163aytimmrg.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163iqqsiooj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163eldzfviy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163mxzykwha.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163jvzssiqm.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fimxxkng.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163blzilspq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163pgyoefrt.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ttkwehfk.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163owydjyub.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163pnhjjnfl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163bvdcmhcu.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163xymphfpj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163gycprozs.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163hfmfqksx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163utakhgqm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163awftbyyz.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163iscchlgk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163vjuzbtxo.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163pffhwlpf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163fbklpmzl.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163vxatzcmh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ruhiytxy.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163kfdezihp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163sqxsqvqo.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163fubnauuo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163zafzcqox.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163psfdomjb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163uypgcjls.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163wphpevzs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ndbtplwh.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163bmzfzycp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163iloeagjr.html


<!-- 参考信息 -->