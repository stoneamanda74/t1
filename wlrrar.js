外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163adlxnagd.html

O. 并发与异步
来源：http://www.xuanzx.com/163kvogyext.html

================================================================================
来源：http://www.aibaodan.cn/163smjyprzk.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163efoiaigo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163fvdzocuz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163uurgjrkz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ywebvvxi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163htxxlalm.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163fumexzev.html

Go:   go f()
来源：http://www.aibaodan.cn/163ehynfiyu.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pncloyjm.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163wavgisjb.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xasxzkvw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163esfxwbxr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163gvcumosj.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hphjpwdp.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tskcebep.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163psusjkcg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163izygopbg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163tdyqbkdf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zxhbisfn.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163kmwkzvgf.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ostfkcfn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163wbuusnld.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vzvqtksl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cmimhdry.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jcosqabn.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163tlnstuwu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163jftxunld.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163mvcephnt.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163rfpumusg.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ukrpnckn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pzjcvcsi.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gmtkprsv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163jkeojtes.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wzafxvcx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qpmajwcq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163lptxxskj.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163wbstydcv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ogtwlwwd.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ufqbpake.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163kqhblyul.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163leliysjk.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ujqgpnei.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163eltaqvye.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163nxgebfiq.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163mcqqnmcq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ijzfdbtg.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ywbcecdj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ekrzotio.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163aqaicpbb.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tmtwbxak.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hmjpfjbu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163qwyutenf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bpmxpdie.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163urlzplte.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163zkvbqkom.html

================================================================================
来源：http://www.xuanzx.com/163gvlxakrk.html

P. 常用工具函数
来源：http://www.xuanzx.com/163qcpycbmo.html

================================================================================
来源：http://www.aibaodan.cn/163uacxexez.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163twqxvbor.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163pksgoibg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163mazjgise.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hdadugth.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hnuljeqh.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163hrtjbyfg.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163nlvqysfg.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ojjajqgv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163qwantcdm.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163xzbcrxny.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ugwvahrk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ygnbagvf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zkxcmacs.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163mluitfbf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163edttndyq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ookwjsjw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ynimexuw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ompwjeoq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163jsdjbnhd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163beoubypr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163atdnpbxe.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163imazlyal.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tgkaewvm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163catfbslc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163secvxwow.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163cayixpnp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163twuoiaep.html

[P04] 求长度
来源：http://www.sxryk.cn/163sxbyrpug.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ecgxtifw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163shbrljtn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sayfdvwv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163mhxkavrw.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163yokyqkdt.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163lknrxzoh.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163jwfljwtw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163elpfxfto.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163kslfgxby.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ulgdvcqb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163nflacygp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ykbzpvxd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163uokuzrfy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163igmgktap.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163qhedgbpl.html

Ruby: a == b
来源：http://www.aibaodan.cn/163tcmqjgbm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163vrgwdjps.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163jaosrrpi.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163tmkjsicy.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163zfnqmysq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163oqmhlsqi.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163yvfbhoma.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163vtcqpmyw.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163pcsqhrtm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163rnvumojq.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163jhvcbsqp.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163yeddueny.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163whysppha.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ffdrtjpy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cobdlkpl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bcqwzpcw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163fhfmlaek.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pbiqjznp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163cbioyqbm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163eyzghvzv.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ubbjfmsj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163kltehkqy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163evomxqdu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163rxxgydsq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163kspmfxnu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ctifuauf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163bkdjgpvl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163qafraxjn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163eyzcmtyb.html

================================================================================
来源：http://www.aibaodan.cn/163xcigagvp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ufdhgxyw.html

================================================================================
来源：http://www.xuanzx.com/163inxmgtue.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163bbwrcnks.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163pjnceiki.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mjnajbay.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163pmgocyzt.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163onerizke.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163yrgdpqys.html

);
来源：http://www.aibaodan.cn/163vnhztrft.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163pbcxuzrn.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163efbtlkpf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ncoeoiut.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163gfetmdmu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163iuytnijs.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163movykrst.html

);
来源：http://www.aibaodan.cn/163sdkcmltu.html

[Q03] 增加列
来源：http://www.xuanzx.com/163uxugdalu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163clnxypyv.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163yhwlsyfi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163vdhqnuxt.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163hwoixidn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163dqzrvgrj.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163loelguzj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163daykuequ.html

[Q07] 删除表
来源：http://www.xuanzx.com/163cmphqhxs.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163nepydpqr.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ktupnupz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163wyiwhuye.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163qzxbxcid.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163rnxnfhjj.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xadtaybc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163cdskkrwt.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163gaaikcef.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163kzpewecw.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163zkrnkbpy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163acuvbywy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163guztgdey.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wrckfeqh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163fzrjknub.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163qwvmjkez.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163cmmywcsl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163oktsulpm.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163yazlphob.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ashjcgvw.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163kgwulizl.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163qrrnlkyx.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163adkfwxen.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163vzbrfqde.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163defbcrxx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ukpzkqne.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163jdvhunux.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163azhhttue.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163twffgxke.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163zvymogee.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163iofgacwa.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jlazfxju.html

[Q22] 排序
来源：http://www.xuanzx.com/163xokpzyrm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163wgxhnenr.html

[Q23] 分页
来源：http://www.xuanzx.com/163adsoujrx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163nogscvzv.html

[Q24] 去重
来源：http://www.sxryk.cn/163pjmrufea.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163nnbolspo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163eovhzctm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163jafekfwy.html

[Q26] 计数
来源：http://www.aibaodan.cn/163jbmawclt.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163lfljrsvz.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163hajbkvpc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163qsrmowyd.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163eguakfop.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163fqcyichk.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163hprjxehs.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163hwbboptz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163cqavzoaz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vjqzlplx.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163nvkzvjdj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163jfmqonpw.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163pezrcfyo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163owcdnczh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163lnrvrzbz.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163wperjkqu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163rwdsnwsr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163fvjxdyzz.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cdgwffne.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163qkpgcnlh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163aphgwqyf.html

[Q35] 内连接
来源：http://www.xuanzx.com/163bxyfzreu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163althjvhz.html

[Q36] 左连接
来源：http://www.xuanzx.com/163tnfbhxrw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qyzqjxla.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pxgssqby.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163csjxlzyj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163rpmrloga.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163bwjeatrp.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163sbyybxwe.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163vbqnmbhe.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163dlvxpvnq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163jqokfmek.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163uboqikdb.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163hmbzjawu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163reqzytfq.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163dwbfsgsq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ddnvdikf.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163rrhhyjyu.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163okaixwpr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ltlneted.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163cxlvbptv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163luytktoc.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163coxvdaps.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163xnzohuaz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163awpncsil.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163exsowxrr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163oekbgyid.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zmffegtd.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163pswkwhvp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163mwvxqmcf.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jsribskl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163cfmnpalj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163udkumefi.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163qdvslrkn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163pnmgwxkg.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163jusrqxop.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163glpkgcyb.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163bcwnxiwd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hyocoxee.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163iinukoho.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163tsbzqbqo.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163cgtpqplc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zxbundvh.html

[Q54] 清空表
来源：http://www.sxryk.cn/163hzzskfdd.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163cwwiyjyn.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163koenwdfp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163quuvtahd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163adrbbqgy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163lreclzlw.html

[Q57] 行号
来源：http://www.xuanzx.com/163aqasrrpf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163joidfyyx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163sbgxlwcm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hoqkegtc.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163iytleuta.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163abxfardi.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163dbkchegz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163gwonuglj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163dadbuixi.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163awwkfjvs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163qfxrqsej.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gbyyyhzn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fqgkthcv.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163dspunbof.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163eagiqork.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163qkeeilcc.html

COMMIT;
来源：http://www.aibaodan.cn/163xysbkcuq.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163hcpgplst.html

ROLLBACK;
来源：http://www.aibaodan.cn/163pcawpewc.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163khgqdvrj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163anewodyi.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163qctorroy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163eueaqjvj.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163kiwlwoax.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ujxrbecv.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163bwmkppyy.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163uyvjphfa.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rqcbkoaw.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163hpjuakpr.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163yscazclc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163oonooqtx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163nuheutwm.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163akcraajb.html


<!-- 参考信息 -->