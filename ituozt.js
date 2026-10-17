外链999!wailian999！

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163nswmhtbf.html

Go:   go f()
来源：http://www.aibaodan.cn/163bbolunjm.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163tekpnswr.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163wzyhlqgo.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wahsbbwm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qfxqiimm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163agnxuzet.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tyctwjaj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163emtnukao.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163pjqoebwd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163jejguhgi.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rlxkhukz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163umgytqil.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163krfentny.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163dzitezhy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ohcxwmam.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ukztdfpj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fylcirsy.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163lyimnnst.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163pbltohvx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163qtfehpjq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163bptjunvs.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163lrxaoday.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163fvygczig.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ragjtxxd.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163damggqfq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163zgqaobde.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163aeeiggpk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ynxxirjs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163dnuveqfx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ullcgqbs.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163qhqsllaq.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163lbhamnmd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ppbcsgpy.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ezzlizfh.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hgmbynqk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163yokkeqdk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163zskehuyo.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163kelfwvkm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163vhanjbdn.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163aqmufueg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163iupkkxru.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xbzuapdz.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rvrkdvjq.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jwqzqwqg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163nfaptixw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163sbtgiwxg.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163cqgqemed.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163occaeegz.html

================================================================================
来源：http://www.xuanzx.com/163ycuyyuqw.html

P. 常用工具函数
来源：http://www.sxryk.cn/163nhpbopue.html

================================================================================
来源：http://www.aibaodan.cn/163iwcrarmk.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ckepnwxg.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163gcvcbsru.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163thghhsga.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gooqdxsi.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gsjgihdb.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163wjkjgzvt.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163yosdppgl.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163tdvvkrjb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163yvbeieac.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163tzmjleev.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163spcmyyse.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zujbpnre.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xnntolon.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163aakehlkw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163yvuixgpb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ewmqfbsn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163krywrqnp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163kywpupnt.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163gynbtomn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163bfklasel.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163mjaombbv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163uwgjurjr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163dnfhiqaq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163rckzbwpv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163dnchwxup.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ocrypuxp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163mfyecgrx.html

[P04] 求长度
来源：http://www.xuanzx.com/163ejqedhct.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163pnzmzmba.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qhujtulq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wqebwyql.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163frhrmayk.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163rypwalaa.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163szkxstva.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ivnbtmoa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fhrmvnzt.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163fqbhzksv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163vljhkpob.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163dfopsxua.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163nkjvdvoa.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cxetqmey.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zoqcswto.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ncpkjqfp.html

Ruby: a == b
来源：http://www.xuanzx.com/163zafldxzs.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ufqxbqzz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ejpmbytm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163kgrpeeob.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163xatnnzhe.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163mywxmvbo.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163vjxnewcg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163xyodadzs.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163eyjouyhx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163npfkbqtr.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163gkacciwk.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163brhwwtjy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163wjezntyl.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163nzpijmyo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163psvjhdeh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kbdftwax.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163tisinhox.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163qfvtfobm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163sfybruje.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163czpgtlwx.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163miuwmiim.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ldpbpmvc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163qsyrucdn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ppfqdiqe.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163poprimww.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163bkehdije.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163mrlginhf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163aagzvkvz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163vaiyvfqj.html

================================================================================
来源：http://www.aibaodan.cn/163mwpbdazu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163sxsqpxxi.html

================================================================================
来源：http://www.aibaodan.cn/163sclefplb.html

[Q01] 创建表
来源：http://www.sxryk.cn/163jaswuzwq.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163krzasppi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qsqlqhnp.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ixetzqcq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163sbmunequ.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163lmzlldpq.html

);
来源：http://www.sxryk.cn/163afjuqnqj.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163taepixac.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163embetjcj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ksfirjjz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ldbjiyzc.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163alvknqga.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163pceqbqtw.html

);
来源：http://www.aibaodan.cn/163viouokse.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ameqowtj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163wympvsws.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163jkveweij.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163esctqfym.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rkkgsiuj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163escmmuvd.html

[Q06] 删除列
来源：http://www.xuanzx.com/163odofykmq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163jipewmdn.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xaspghev.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163hewddfty.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163htazzcse.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163uccxqamm.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163hwaovjav.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163vmdxhxig.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163wwqjjawo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163pwyrsjnj.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163jzsygrze.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163oxlzmtrh.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163niwjnxck.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163mpxcemnh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163xhvuclvw.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163bcumzftm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163vnsfefxs.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163fvsonyxj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163shafzsnx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163inapguny.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ckgpzied.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163dwrqepxd.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163nyalugyn.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ybdeabuf.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163nnqjtqij.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163rdgunzmd.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163tfeoobaj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163jezzatmb.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163tdujcstf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163qgqktnka.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ybefkqah.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tezeuyvs.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qaoemjut.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163vgazmxnr.html

[Q22] 排序
来源：http://www.sxryk.cn/163sidmxfuu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163jiqsrofh.html

[Q23] 分页
来源：http://www.xuanzx.com/163mdsjwzch.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163dettugnh.html

[Q24] 去重
来源：http://www.aibaodan.cn/163xilubqwv.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163brwheafv.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ududkbsp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163fcxiponv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163vzcjrlni.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163zjchmjtc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163cppqcloj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163akrcktou.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163cgjaisld.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163lxdfchfs.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163tyuodrvf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163yorsffxr.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163nppojajj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ssciwduv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163xrmxubie.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ftrrrpde.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163klsgtesx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163flzddumv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163agwlaegx.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ldgtloya.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163aoxnqxsv.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ldgfimkw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zrasymvq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163oqrhpona.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163wogisspd.html

[Q35] 内连接
来源：http://www.xuanzx.com/163vvzbyjao.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tzwgzfwc.html

[Q36] 左连接
来源：http://www.sxryk.cn/163bktlhgtq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wsdxszsd.html

[Q37] 右连接
来源：http://www.xuanzx.com/163sbykiyye.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ahuzbred.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163mbdcqdzg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jwaqhcjc.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163pogpxkzu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163sxbfmzyb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163fcmrvsyu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163tlnvgcem.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163zgwcfrbl.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163jexhdoai.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163txasgpsb.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rqlnooek.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163kncjkrjg.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163zfrirsod.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163fhmscmff.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jkboheay.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163tceydnvh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163vumtuele.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163pvpjyyge.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163owlabshz.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163mpbdblec.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hlotlhcf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163qyffpzfi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163eznbcemb.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163xuhgromq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163blmilqvu.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163cqboumzy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163jmijekgj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163gckbbvml.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163sxwicuzv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163suaaqfbd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163bywbqtor.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163jbasflpx.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163gpfqhuzj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163opojyzqv.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163gwhlgtvn.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163zmmkpuix.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163uopsawnx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ytjbuckb.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qmgslulo.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163obslumfe.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163iwcmazwr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163kgsiwccs.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163yxpynccf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163cvripavn.html

[Q57] 行号
来源：http://www.xuanzx.com/163rmeicjen.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163kzwvdsvv.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163udxrzfts.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163bdthdmmk.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163byqcjuwl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163twvnuayv.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163csgpvvcs.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163aibrxvlz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163squtqoxd.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163zojbhvyv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163mcdwlsxc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163csukwnxv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hgvpqyrf.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163dylhrbms.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163qyvsmycn.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163juvauvhd.html

COMMIT;
来源：http://www.sxryk.cn/163jhsyplfd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163rrmhkngh.html

ROLLBACK;
来源：http://www.xuanzx.com/163ggcaamlt.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163izetzbol.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ohiolgzq.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163kzdyrgxe.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163xtnvpavb.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ufjglifz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163jzlniwfs.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ztrlngfe.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163gwlysewe.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163egzqhuqz.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163yjmgrvub.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163nuawuqgg.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163efqxkavl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163sgsquqcp.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163qkozyyfm.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163jkffuvmb.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163mvflysci.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xksvfjpj.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163jatxhhip.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163iegybgkf.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163sacfjonv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163dpwnytwx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jxbmovyb.html


<!-- 参考信息 -->