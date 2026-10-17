外链999!wailian999！

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163eebhsbxc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163pjudozur.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163zhmkvijt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163evdhjaqw.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163zszztgsy.html

Go:   go f()
来源：http://www.sxryk.cn/163nxzmpfkj.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163tqcxgdve.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163wmgjnxqb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163zsjfcdta.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163iwfpgpqv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163llluffzd.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163aqvofuhy.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uuuzhdqs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163uyqfikjf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163fetgohlt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163aqbueilr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wkkuyrks.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163hwtdmduo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163dqwvcefz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163bavztiku.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163iljrzfqi.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zyehtvla.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163quamfyki.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163zaoliiei.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163woiinfdz.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163aoimpvac.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163eakijobx.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bmairqpl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ljbnirus.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163udsflrzl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163hjyuosec.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ufthzgpx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163tizwtisj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rbgzfrvk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163edffhmhr.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wokytabn.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163fxdyqfcy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163bpxvrgln.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bemnrlnd.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cyquyioc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163byrpkukz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163sccqyjwj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163nyiqtilo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ytlivqzq.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jlrccvdz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163sisrpstq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ajkfvgrz.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yrkpmdii.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gmvmifpm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163zavhrugi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163litginml.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163bjfxusvr.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163cokkzrdq.html

================================================================================
来源：http://www.xuanzx.com/163edhhsgwt.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hfohkpcs.html

================================================================================
来源：http://www.sxryk.cn/163rkiajcor.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ygrpqhfk.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163gsdtulru.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163srqlhiov.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163smmrxbgv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163acbfwpna.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163dlefcvwj.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lzohtftu.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163xufqojpj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163zjpelpyg.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163lymqmaig.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163zdfhdrhq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163xqtyulqm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163zzglxarx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163tsjjcned.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163prtefmxe.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163onpmqdsi.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163iugvjixa.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163zfqlzzib.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163hqpoxlgx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ifomjrcn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163jnadbtzx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163javlgevm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ipoocmaq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cxebbkgx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163vtofzsuo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163bmpyfyde.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163awmqryrs.html

[P04] 求长度
来源：http://www.aibaodan.cn/163hxxpqrrh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163bqzmamiv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wnbhriio.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163miikzris.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nmyzwwbc.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163tlqocxau.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163uffoqnbk.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163dzjrpban.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163awquzpoj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163sdspjiff.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jghlqjwn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163fsbarrrw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163wxecjskh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bhzewalb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ajeeerim.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163tzwrqpnq.html

Ruby: a == b
来源：http://www.xuanzx.com/163noeglmmu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163seyphrxi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163yycvmkrv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163idmcijwg.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163kbbziaix.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ltucdmdg.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163tgipyfji.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163kfdfowht.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163cgblukpi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163izjrzrbl.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163gnzgidat.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163pmrwepiq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163sahfrycz.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xygoyuld.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dxqubmnp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dxcogupu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163qflinygq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163uqiejkbz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163zudosdur.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xzjzrjao.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163eslngnhs.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163qybasjof.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163uapyupow.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163zwfrooem.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163gsttnykr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qgiwhioa.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163jjaycuao.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163wttczbcw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163uxlavjpo.html

================================================================================
来源：http://www.aibaodan.cn/163zjetqeer.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163lgkmrsql.html

================================================================================
来源：http://www.sxryk.cn/163ywlkobhl.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163befrvvhy.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163gvjumiji.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163cqhiqiao.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163masemkcr.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163cnpkdofo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163nexrlyfc.html

);
来源：http://www.xuanzx.com/163nvechiez.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xiwbnrqj.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163jctmfzvb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rwfrbpot.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163zzxegtux.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163rkwrdgde.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wrxqucmt.html

);
来源：http://www.sxryk.cn/163ewnsinog.html

[Q03] 增加列
来源：http://www.xuanzx.com/163gzxmdwdo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163wyqnwdhm.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163rzkeforj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163dutknjvp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163hpwomqzk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163zencicxb.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163jaakoesf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qldccodt.html

[Q07] 删除表
来源：http://www.sxryk.cn/163zmpnoczj.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163pemxtcwk.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163yvjhnped.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163leiuvamy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163gihabkir.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163tlwamloy.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163pxxoahlc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ftmpdjsx.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vewgdacm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163bfcdpefm.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ghlrhvmn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163zarctvcx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163snbajszu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163pftnilph.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163dvblccjk.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163fesroucc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163bisjscaq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163cginkqjp.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163fcviaral.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163cpobhltc.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163nhhyscpf.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163newzeymo.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163mvgcsjbp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163aucryoxt.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qilxpxtk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163iqjbihgv.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163zhsiqato.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163btvpibcs.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163zzszpuvt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ipbzfgqm.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163agmmwedf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163agewjkdb.html

[Q22] 排序
来源：http://www.xuanzx.com/163eubttuvd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163dtrlwdpo.html

[Q23] 分页
来源：http://www.aibaodan.cn/163hkabvnlv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ohlftvbv.html

[Q24] 去重
来源：http://www.xuanzx.com/163phwcutvx.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163oiwbjvsm.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163dzdyteje.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vimwdmgm.html

[Q26] 计数
来源：http://www.aibaodan.cn/163zzosintz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163gnazocwl.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163klvllsqb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163zhvnbtsp.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163tbmckint.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163gnqbreaz.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ovmkldxr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163mdmtanja.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163hldvkqsp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zrqgmgok.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163xtpzwwad.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ljlhhmpv.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ervkorvm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163donpcwqo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163qsbfqtaw.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ghkxwenl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ualgsxda.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xkffnoyy.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jzhmafuf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163xrkcqycs.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163capuomwk.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163jamzgdvm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rrhvbfhg.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163tcbtygyd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163htcpvjfn.html

[Q37] 右连接
来源：http://www.sxryk.cn/163cmyzdjoo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kdehkqdo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163vzehbmak.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163mqhiebxk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163aoflcmei.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163etfplxbo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163lirfzkme.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163mixfkxqj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163bydlrrba.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163yhtwzbra.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163kifwflgh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163nlfuokvm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163vyiqicyv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163lrrttuoh.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163mzumsiij.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163avjfgpvj.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163lgiftaqj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ejhohthh.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163fyqczbbj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163twmrjjew.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ueebehkx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163muopckgi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vjyyiaeh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163toreilsq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ibryhtqw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163fssthmjo.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163slgyskmd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163sunartts.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163nunkdndv.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163zxvbhbdq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163xiwdtenr.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163abbxmkjz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163dlbcuujz.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163soqyjsoi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163jtdbmllh.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163htnenmuu.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163dvvuvlnw.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163btiexxqu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163grpoezhf.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163zcqbljju.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163komprdye.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163vxmyxkui.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163snofuszf.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163qhmeknga.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163hhztrzmi.html

[Q57] 行号
来源：http://www.sxryk.cn/163erbrdwbf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163gfovcrnp.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163hymtuydg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ghzwouay.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ffjkapvi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xotiklzz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163vrrzlmvx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163yzotfgis.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163nejiwdxa.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mtnhsgav.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ehrlbwnf.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163bxrpkphg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oinfdflt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ivfyikjt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fddvcjwp.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163tqcemqab.html

COMMIT;
来源：http://www.sxryk.cn/163qwlhamyy.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163wajsnerg.html

ROLLBACK;
来源：http://www.xuanzx.com/163rrzosfzs.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163oclnsffp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ieciovnt.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163qbbwkbjd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163oopnnmww.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ymxagibg.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163lgesvrlf.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163vyxdipsp.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163hqrhlzdu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163xlajqvka.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bvvdirca.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ngjuboua.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163hpgpgrza.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163lmzotldg.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163lvnxsfxw.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vprtvrsd.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163bzbijhmw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rhjmgoom.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163xbqwiclz.html


<!-- 参考信息 -->