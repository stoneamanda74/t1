外链999!wailian999！

Go:   // 手写递归
来源：http://www.aibaodan.cn/163hulplyur.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163klmxuocg.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hquhtosv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163frpjglmf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163tdqracru.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163lqyycdmx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163urodsydr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163prphvtvf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zobczrra.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hganpjmq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163atzgdujg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bllmzxfs.html

================================================================================
来源：http://www.xuanzx.com/163jyjwmhhp.html

O. 并发与异步
来源：http://www.xuanzx.com/163euzigdhy.html

================================================================================
来源：http://www.aibaodan.cn/163impxriqn.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163eedoopni.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163pvhbwqxd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163wiyutokl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ywqazvdc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tzwxkzzg.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163iouabsfl.html

Go:   go f()
来源：http://www.xuanzx.com/163qscutbmx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ytmelynd.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163cteyiulg.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163qhamgdmc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163uuvqwdaf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163wahinmqj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kuvcmcma.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163uxcezpba.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163mlxgvzfv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mrmpgsib.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163sivtyjjx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163mcwwnhyg.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163dyllhhxt.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163wdepdibn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163vntytibw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zdjkgvbo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163sfncdcvq.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163upkzlotm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163snfqcwti.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163hmmvcudo.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163itqlkimq.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163jwmdgrac.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163gztimisv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163pbmdhazn.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163jkcmysxp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163rvloxygq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ioehhjtf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163koecxgrs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163maurmoil.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gavpcdqe.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163biroftbs.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ogpiwbqs.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163oxnvbpfh.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kjetgwcq.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kyywoxze.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163jpuqbnoq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163nyluftqp.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163nvdinetl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163wzgriack.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163gjapyivk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163zebvkhbl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163jbohxsgd.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163tweiiibr.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ugvopzfv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163emewwaws.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163tjykfwkt.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163wcotbsnk.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163zokuowbo.html

================================================================================
来源：http://www.aibaodan.cn/163myfwidne.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163jzwckvcd.html

================================================================================
来源：http://www.xuanzx.com/163ifyvybdx.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163yxnltguz.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163wvrgaddm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163synxndtq.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ebmwxqxq.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tztfgtej.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163lnejhsft.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163onjcchzc.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163lnwvgzvo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163arvunert.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163vsmqfasf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163vkyzhpyr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163uxdlhxmz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163buttxtdw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163udgphiex.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163enyaiiqn.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163skaolbho.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163hhrtgrrg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163rkwokvwb.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163gzrdngjx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163fwxtarer.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163aziltows.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lkawmwfg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163uemvltcb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zrvyaodf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163unaoyzan.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163oimwlham.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163vgmrnfbr.html

[P04] 求长度
来源：http://www.aibaodan.cn/163rbhmgqup.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163yyzfaubz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lhoyfnev.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xwptmktc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163diytvafb.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163qjlajvvo.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163muscwnor.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163nafptczm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163vczptsvw.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163nsmblyck.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163bnookgwg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163vckzwasl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jbrndyin.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zdjkmdnp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163wyeysqcd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163djtkvlif.html

Ruby: a == b
来源：http://www.xuanzx.com/163xaamcjgh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163cblbgzhw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ckeqtjsm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ocsdenmk.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163sjfuuzii.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163byisurow.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ntgtxauq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pitthwnq.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163nwuayujp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163rjxdpwta.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163gkytvhzj.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163hgelalin.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163npuvtcrf.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163yomlaggl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lrocbydx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tviejlud.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163tllmztrx.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ouomkblu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163hqkfsnvk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163qzzntulm.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163piunvpbu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163nieafzrw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163fvsmktce.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163udkrviue.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ojiqlpzj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163utbzjtlj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163earjdkcw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163shesmnsm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ulhhlmnh.html

================================================================================
来源：http://www.xuanzx.com/163yivqgvwy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163dlfbypgb.html

================================================================================
来源：http://www.xuanzx.com/163zzpdtyvw.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zwoawtee.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ttazovpl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163crhziomg.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163kddcvgsa.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wxbyrcpa.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163afhewslv.html

);
来源：http://www.xuanzx.com/163incbxwxc.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163eszjnovi.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163pwozwwyc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qjwspwky.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163okovmhqo.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163pxiqjljh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163yzaveuuo.html

);
来源：http://www.xuanzx.com/163zcfqoprt.html

[Q03] 增加列
来源：http://www.sxryk.cn/163klwhvakw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163rdpcjaya.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163bptttalm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163drnfvzsl.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163hbfssbnl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163nbsqazai.html

[Q06] 删除列
来源：http://www.xuanzx.com/163fqbgqmtc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163kydoppfk.html

[Q07] 删除表
来源：http://www.sxryk.cn/163snzjorrk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163hwxhkhjy.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163cqqzvqnr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fztvyohu.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163yrbecvuh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163oznominn.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163cqiudkok.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jacwucck.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ezabqqoq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163grmbljoa.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163zbwigwdg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163drzmpweg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163mitmnajr.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163nunibhah.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163qcrfhrtf.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163zussfadn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rmyeazhg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163insjawwf.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163jrdmfxpa.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ngjzszoz.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163mgidxzeh.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163nsqjyhqc.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163rrbbovsf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163xqekiwyv.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mjlqwuki.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163xqvormdn.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163bcckqqpc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163yeqdmbuc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163sdonuaez.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163fzxnsgnw.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163gfesoqzj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163wbifxvjk.html

[Q22] 排序
来源：http://www.sxryk.cn/163ngjjfctv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163mgfixijy.html

[Q23] 分页
来源：http://www.sxryk.cn/163mhojrqrv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ssttwkfw.html

[Q24] 去重
来源：http://www.aibaodan.cn/163esghezqe.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163vnbyiawr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gviqxztm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163gstwyedk.html

[Q26] 计数
来源：http://www.sxryk.cn/163zsyfdhct.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163bxuvrelu.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163atuhsmkr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163hpovjqxk.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163gqthunss.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163wnhejgbr.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163qacmfrkr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ftpqtvax.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163dqmyzdhc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dcriqklf.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163edsxubea.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163lspuvehk.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163exmdhwzr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163scwbheeh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163eqvmpkdm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163anjuzhrb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163dtyectgu.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163fcwhzfkz.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163tqylcxst.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163wxkytfdh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ouiwlbhj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163fvotzrjb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kyfswiae.html

[Q36] 左连接
来源：http://www.xuanzx.com/163xgtaiofl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yateucej.html

[Q37] 右连接
来源：http://www.xuanzx.com/163rtbyyxlx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163lvtautid.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163dhsdovge.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163mehfjlpw.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163cmtxoqjt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wcomqpnf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163xoyixupe.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163dluzkmcn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163gmjjexzs.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163wlnrobog.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163atkftpvz.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163nftnscak.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163sscohosa.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ufztufrf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163halovmhn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163teujxzmh.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xrieiofk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163njajjnps.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qddwgnew.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163akbvnjjo.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163xkibiqqr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163goqvnvuw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163stnxpbws.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163sbbkggup.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163gctrsyue.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163lztgeyhk.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ygwktbjl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163pjgqrlcu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ytfiudyv.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163clskzdkm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163inopmqfj.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163lyfaisfm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163wvbmyzco.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163remcvrho.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163anmnebkm.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163tpyxtefg.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163jttuxeyi.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163cwhegcni.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zrtgdsev.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jyaznlkm.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163abagwekm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163oqfnfsja.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163rvilqhnv.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163stgebdls.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163buaxqrya.html

[Q57] 行号
来源：http://www.xuanzx.com/163jnmxvzee.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163bwuefzcp.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163uoijvwdh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163cjaplpwu.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163jukndgje.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163lxcvczar.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ktutlwcn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163bcrroqzq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163gbonzdjo.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163innauwbg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163naewonkx.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163wqeytyjy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163frerayll.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163iwgkbytg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163emipmntv.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163lgfqdyku.html

COMMIT;
来源：http://www.xuanzx.com/163uzfajcoy.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163cqnrpwpq.html

ROLLBACK;
来源：http://www.xuanzx.com/163aquxizvx.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163qidfebvl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ncohhwse.html


<!-- 参考信息 -->