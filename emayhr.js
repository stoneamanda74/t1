外链999!wailian999！

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163jnkocqmt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163etkunywe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zczgvmrg.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ulilpdtt.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qvlraoht.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163qnrhlgtm.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163qplhypxu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163asydskpr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163hllhbbbd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163odabbhln.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163upacqcry.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163sahvuoye.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xvtudblv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163chbdpcaf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163lckfgumj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163unbpeuuz.html

================================================================================
来源：http://www.xuanzx.com/163oejyeumg.html

O. 并发与异步
来源：http://www.xuanzx.com/163xcuqbhdd.html

================================================================================
来源：http://www.xuanzx.com/163ytojhwhq.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163rrevrigb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163fajmhjuj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163udafcizq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163xzoansfa.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kqqwrgin.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163rwlpkxez.html

Go:   go f()
来源：http://www.xuanzx.com/163hukinmxm.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163jxmqpvub.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ukxdxgvb.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163mnzglqds.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nvfsnvoa.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163abggjknm.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ylnbbqbr.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bbpdhxtp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163cknzxmkh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163spnditbf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163bxkbbgqa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163axskgsml.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163etraskbb.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163zgbboagi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163iywvhgsi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hatahedx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dyzngibj.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163cgmoglfh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163oabfbihu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163lritbcwh.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163mgqlmkhp.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163mqpqidjp.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163maepqmdn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163lqwdyiwx.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163uhqioslf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yoqqahcj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163arqthjxx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nwnycsby.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ljyulxfr.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163mezpdxdf.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163gahlubay.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163frqxlloj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163emcdfubc.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163khorwbgm.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qiwyqhpb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163avvdmaye.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hjysdtos.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163nzdchocg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163dmhvbbmk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163dsirvlly.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ykkakhtg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163zswphsfu.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kudeozfl.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163amqdvkbr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163tzzhpodr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xjwijdnd.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163bzakbnjr.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163asnpealq.html

================================================================================
来源：http://www.aibaodan.cn/163jjpwucum.html

P. 常用工具函数
来源：http://www.sxryk.cn/163yxpsfjht.html

================================================================================
来源：http://www.xuanzx.com/163hibtshbg.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163nndenfny.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163wjbcyaqh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ydyndodv.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163eezgiefz.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zdtlerdc.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163lnnbhigm.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jrqqmpeu.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163owoennev.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zryldoyd.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163wzdqnrpb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163fjphqnty.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ypkmurfz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163azxqgvms.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163njyspoot.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163klgulbas.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wavylmsd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163csmvuciw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hsomvyiz.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163hquzbtfv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163tniugchy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163btyxatel.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qccgifrl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zspsoitj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ghsomfvt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163xedtvtoh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163uhfbktog.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163bdmurtcc.html

[P04] 求长度
来源：http://www.aibaodan.cn/163nnnkknys.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163aiwuknps.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xsapbckr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ctucteoz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fvdomdth.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zgoflifj.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163jcwhcovj.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163khylbsjr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ghbaljdc.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163mrydhjiw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163fziawbxv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163aezzrquk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163dlrrqvac.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wcbxpttl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ispropik.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163bgcusict.html

Ruby: a == b
来源：http://www.xuanzx.com/163yyuffzzm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163cplyxmzf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163owdminek.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163qvghuarn.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ojynwjot.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163gjuxecxu.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163wtivdmjw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163tcngstfm.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163wvqbbkrt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ncuvlgnp.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163hhsfatay.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163bdzpujfd.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163aldqoxkw.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163urlppsqm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163olnriglg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ngxgzelk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163exgobyhm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ugnkuytx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163gsejhgfr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jejhydzm.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163hnmozmoa.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163hqojvsst.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163wakhuwkb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163uxsdgjbs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163bpdgahgu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163tsabigql.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163nwkurkgh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163odzuasov.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163atwrvmdb.html

================================================================================
来源：http://www.sxryk.cn/163iflpfzzu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ytkrkosp.html

================================================================================
来源：http://www.sxryk.cn/163odeqptsp.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ogeaykdc.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163lsrucuqy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163eparyyar.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163wxpdjvpu.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163tkcpdcil.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163qtjdwjcs.html

);
来源：http://www.xuanzx.com/163mgjajdri.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163nsooqwgf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163bodaohwu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lqlhdvhh.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ndfgcmew.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ccxwbxvv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163txoeigph.html

);
来源：http://www.sxryk.cn/163zpbgutxe.html

[Q03] 增加列
来源：http://www.xuanzx.com/163bdvsadtt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163kvvkmjdc.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163vrjfgzlv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vsffsucj.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163rjotzqrm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163xittmswu.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163hfrxdisw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163auzisejy.html

[Q07] 删除表
来源：http://www.sxryk.cn/163sphgndyd.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163rcartnzo.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jipizkit.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163uotcuggh.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zcygsaox.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ldkojrag.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163lhwyiqku.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163lzcwgyqq.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ogzsstcb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163eeatxyan.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163dfqqzxiy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ajwkhhiz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ijapqdky.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163jkpgxcwg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163yfdcbewi.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163nmlmpjzp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163inokpmym.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163pnmdnkkp.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nahmqnlp.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163sbinlyya.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hiithajr.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163vxguexeg.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163nfxvgodj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163afcwgjwy.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qimnlmkb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rsaiyghh.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163zkrvkodn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163wxgbzwve.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163chjdsbir.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163hmwxxytf.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163asgssflo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163lflojfsb.html

[Q22] 排序
来源：http://www.xuanzx.com/163kqvensrw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163hcayvcpj.html

[Q23] 分页
来源：http://www.xuanzx.com/163gzuuqpkk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ownslevj.html

[Q24] 去重
来源：http://www.sxryk.cn/163afsigctn.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163qoyqgsqx.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163evhyedot.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163irngboiq.html

[Q26] 计数
来源：http://www.aibaodan.cn/163fujygwrc.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xwufwtbn.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163nxmyyoln.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qzsvimhc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ctsgjhrt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163lxylhcfu.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163eqfxtenx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163qqgqtubo.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rleucxpi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qawteiff.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163lnvjnbjs.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ewndilim.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163wmxcvscx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rarctnub.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163zudkvaup.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163mluwnkbg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163jvbssmnq.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163qmkfhcde.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ifjbznki.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163qcapdmiu.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163sfvwjmok.html

[Q35] 内连接
来源：http://www.xuanzx.com/163umalpkxs.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cekhjduh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163evvawyqj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cpflvevi.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pnazcaae.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163xfzxebql.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163tjzvnecm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163faytaogl.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163tyffcvah.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ovbrxzbl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163cqhdakgb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163earrnhvo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163knwcpxpx.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ksmqcqfb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163spkfwcic.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163bdghwkhc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zpoelpif.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163eeijedjz.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163phtxcvei.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163chiswiyo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163lfitmopo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163pqftesei.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163jwumcook.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163wwykxdjb.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lhfxorxj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tavexhmz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163bjmglyck.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hcemypvt.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ygetxlbt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163fsuvoewg.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163itucicfv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ksyictxs.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163gjpcsdmm.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163jywspwan.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163dycdcbog.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163fudondpj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163dmdsulmr.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163lupdcrnj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163nqndkhwn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163nwwegagw.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163qynbgfwo.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163bouyvhqm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163vtshyazt.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163zuqbuvak.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163kvpbqicr.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163biaxyjwn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163dhhhahdi.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163yxoxrxtv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163bhquzwsu.html

[Q57] 行号
来源：http://www.xuanzx.com/163zfvhkjcg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163iatlgwwm.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163lwvfdddx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163rvsapeuf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vsddrmlq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163kgmebhso.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163gkwwdqye.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163bbvnzfmm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163qvsqnwdp.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163iqvnmqez.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163hplzvhnh.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163mpevtlea.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vkipxjuv.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ssiugeyo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163gqmlsdss.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163tonxasov.html

COMMIT;
来源：http://www.aibaodan.cn/163gkxsfcyh.html


<!-- 参考信息 -->