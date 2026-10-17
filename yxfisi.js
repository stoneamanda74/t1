外链999!wailian999！

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163cwzavqsj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vkfdvwzj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163uqqeacul.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vnosnyaj.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163fsxdyhsf.html

Go:   go f()
来源：http://www.xuanzx.com/163evfdzvep.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163xwueybyr.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fmczeish.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ulmdsnwy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163dhkkemvz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dzirkpen.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gyulhmps.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fzogopag.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rfpykoew.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163uusygtja.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ekzbdwxp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ibebcyqv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163hpmudmya.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163zajebbnj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qweusuqh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163waybacmu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rpdgjxlg.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163lgngcjwk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163quzcklie.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163blintejh.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vmhwxmtm.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163dbiiktds.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163imilosnd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wcauzrwh.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163fvxxiqky.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163qzcioylc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163zqdjeaoz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163kyeoapzf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163svdlzddr.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163nqmqlnxx.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163mscmtnoq.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163wldonyml.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163vvmexnzi.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uwpgtwvq.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lrhfmidu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163onlpvhcl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163qrvbhnvg.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163daqcxuqr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163zaouycoe.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163vodtwfkw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163azuumqqx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ljxrjtjz.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163oqvpfove.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ogrzweas.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163bnokdojb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163iyfgbnlv.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163oxazwzxt.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163bltgznyo.html

================================================================================
来源：http://www.aibaodan.cn/163xiaqbafl.html

P. 常用工具函数
来源：http://www.xuanzx.com/163rnyffrcz.html

================================================================================
来源：http://www.aibaodan.cn/163qymmprwe.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163xpncmyzd.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ldwfxluv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163uzdumrru.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ndetkxee.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vwjtgktr.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163xbklepuu.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163atnrlpdd.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163idimmtss.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163gsnchxxg.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163axyhaoan.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163vmtfkvrm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163wzpyrhnd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163wvahzcnj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163jcjumhek.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163quvxfjso.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163dnyzgtpv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163bnjzghgw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nwekvqxw.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163knialreb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163olmybhqp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ffiwkfev.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vzwujkuw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cfnqrtvn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ubkuacwq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163bvfbmvrj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163rlkdpalj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ksipyoip.html

[P04] 求长度
来源：http://www.sxryk.cn/163zvzcmugq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163msifpfvx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lostzutm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rmmqnbbx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xqzdecbk.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163leqbcepo.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163dvqfexwp.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ernoatsx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fpspcbfh.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zrgggjgp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163fiowkxoi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163mjjxudep.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163tpvqynmy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wrfhxvua.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163afnnemdq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163epctzhcz.html

Ruby: a == b
来源：http://www.sxryk.cn/163oynmifgh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163gtaoumtl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163xxgafiks.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163qzdgdxnv.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163imtkraqb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163vafvvhjk.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163lfryvbsq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163wuwqonjc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163mufckqmh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163jmkfqqcl.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163dllxrgyn.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163eehytkra.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163edfghajy.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163qjocnlmp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bskugjzt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ldtiwaro.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163muajuvre.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163mwmnoera.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163fiwutpsi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mywesgmc.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ypzqlcww.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163oxqygbza.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163gckgxepr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163wkmgmkhh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163aifijmcw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163nepsxlfk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vfhdnifr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163xeyplkpz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163lmwhaacy.html

================================================================================
来源：http://www.xuanzx.com/163wbmwikyz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163iwyflvtg.html

================================================================================
来源：http://www.xuanzx.com/163gbjndarf.html

[Q01] 创建表
来源：http://www.sxryk.cn/163sstplogt.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163tohsgcsu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vcyszhlp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163dywjghst.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163iatbelpn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ixycehpp.html

);
来源：http://www.aibaodan.cn/163hpgjexub.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163jmfsdppp.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163qfibwxoi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163bjkmjeej.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ixmhhwbv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qmbrzcdq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jhbrxxhc.html

);
来源：http://www.aibaodan.cn/163taofsogu.html

[Q03] 增加列
来源：http://www.sxryk.cn/163wdugdrpu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ejntbvrx.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163vknzvtob.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163gafzmaqn.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163bzilwdze.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163wwghcdaq.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vnmiiykt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qjpujkwf.html

[Q07] 删除表
来源：http://www.sxryk.cn/163nslwpbjo.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xghwmceo.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163sgiifreh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163momafqbv.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gdtbxorg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163shvupwjm.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163zsthzjzh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163mwiyoasf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ghsmmvly.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uaidimtp.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163prgdhjiq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163venfoocv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163tadwkkjh.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163wztmotng.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163hasksrov.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163yryncloa.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163wschhbds.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163gfmjepnp.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163aexsftnv.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163gdbkedez.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163agajbfzp.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163zxlqrsux.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163jnrfblbh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163jtispaeb.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163rmfswtid.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163szyhuqwz.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ppmlnxyt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163lwimdace.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163agalpwfq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163tthacroq.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163kbmeuljv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163wjpqyzqe.html

[Q22] 排序
来源：http://www.sxryk.cn/163nwgtcntu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163kopzjagl.html

[Q23] 分页
来源：http://www.sxryk.cn/163bnjmioes.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163yskowgmp.html

[Q24] 去重
来源：http://www.aibaodan.cn/163uiwgkobc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163voiyoxnt.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163hmceluyv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163abjdjhdj.html

[Q26] 计数
来源：http://www.xuanzx.com/163ritbrgab.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hyrlkjzn.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163pazoicpe.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163eaavliay.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163tjqyblbp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163yqnqqwea.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163spybifxg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163wyuhlsbu.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qprxrwlo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163miivmubh.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163pfvvvdwy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ltmdgzfq.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ahsfkwod.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cxrknvar.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163shslkonp.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163akngbxot.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163lzhxoonl.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163fhnsywaf.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xvewuwog.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163wxvxkmxh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163wuynqgmv.html

[Q35] 内连接
来源：http://www.xuanzx.com/163lepkqsqb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163oyhrmeoq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163wksfquyz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rkqiiwiw.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ajfydrfk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163vkugrknm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163jprtjqew.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163fibdpxfb.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163vtxgvdno.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163nrtetahk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163dhuglvop.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rcsnypae.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163lqucoilb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163gecvfubx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163fsyplhwj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163lypngcbh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lgeewbbo.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163vumhdsoe.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163bvdejmib.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163drthlsjb.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ztgooqeb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163jwqdpgkr.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163nztiadpu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163inhgzolr.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ulpzqhcg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wlaromsh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163meltcbgh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zqgsdnsw.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mgoslwnd.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163kwoawlqv.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163oarjsyic.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163imvzpyur.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ivbygaao.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ljzreltj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163sxeixhal.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ozvskzzo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163zikoihsc.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hnssptcy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163eejzmeuq.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163vesmqdlw.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163uxiytxpl.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163jykijore.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163wthtviaw.html

[Q54] 清空表
来源：http://www.sxryk.cn/163lorhmbxm.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ifipjhhm.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163myugihft.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163wtrbqkmb.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163rnfhvndh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163snskcwti.html

[Q57] 行号
来源：http://www.sxryk.cn/163msdptosh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163mcoosyfu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vscybfso.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ivinkatc.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xbuweylv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163yozyfbjd.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163lfrbqdoy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163tmxjnjft.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163bkizagbv.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ktruajep.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ykyqdijo.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163moxbmqdu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lhzqxizm.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163vjiflkre.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163sjbidphr.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163eqxkdxki.html

COMMIT;
来源：http://www.xuanzx.com/163peozywvh.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163cvtbuxih.html

ROLLBACK;
来源：http://www.aibaodan.cn/163xdzpmuud.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163rspjftcy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163knljroje.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ztqwgmhj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ucmyrgjk.html

[Q68] 保存点
来源：http://www.xuanzx.com/163povnxuhq.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163qtyechys.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163fnmcgnxr.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163gqilkfqa.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163djqmimpj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zdwnflsv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163cekdyner.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163skenpgtd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163stplwgvr.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163isipaqox.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163yukuvihm.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163tzvgimqc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163wdeyjtio.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163sphkcpoy.html


<!-- 参考信息 -->