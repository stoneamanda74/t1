外链999!wailian999！

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163tajwkdtl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vscrcucl.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163avbyfxyz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ejftzzfn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163rjcwhlbo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163owlsvsvm.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cqihxtlf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163asybytix.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xuqwlquj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163agoxfcxw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ephmbtke.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vdephtna.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163higyfxpj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ztuswyyx.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163swwskbrm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163cxwlkdhx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163lwxojtfp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mevgnzwu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nofbpxrz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ujzilcfz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ufmuresh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ltelhvli.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163psryrond.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wnttfenk.html

================================================================================
来源：http://www.sxryk.cn/163sqxgcllr.html

O. 并发与异步
来源：http://www.xuanzx.com/163eozunwwm.html

================================================================================
来源：http://www.aibaodan.cn/163dsmcbisc.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163iaoqiltc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163akozrzpk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163cfxiqmpq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163bceyluwp.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bbatodlk.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163mcvgxlgy.html

Go:   go f()
来源：http://www.xuanzx.com/163johgoaxe.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ubtfqkru.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163stuvllrb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ccsmhzpv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163xzmeksfv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163kseaturk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ajpeljkf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jejdrokd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163hbrlzgwr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163lwtiicqz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163thyrnfqo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ojqiietp.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163snpdbgxd.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fpwfbctq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163nwskdkup.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163dpdujlbc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163lwqjcmdd.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163dglmnuem.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163yletisap.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163kvifsoxe.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ogplwaos.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fnfodunf.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163wihdsrvt.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163fupjlmpm.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163svfjwava.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163widjetml.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163knsqbbop.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163lsgfysov.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163rfxqckyu.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163fwycjxvb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163bktchhme.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163qmkjdwww.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163fqndyopj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lxpooofl.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cswnitot.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ofhqpssq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mhwqmrbc.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163dtnmutnk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163inqiemrz.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163rltaxnox.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163vgvvjnae.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163jvhpxzkk.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163zneqomaj.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163mplyiurh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163hnhyzvps.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163jddjybpw.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163haonlmnl.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ymjbagls.html

================================================================================
来源：http://www.aibaodan.cn/163dvqhaybd.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163okrnihog.html

================================================================================
来源：http://www.sxryk.cn/163jatiazty.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163cvblvgza.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jvzffwum.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163kzsatfqj.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jfzwfglp.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163lyrudost.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163kzvytgnm.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163yzvsltnj.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163asmavphl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163pfecopgv.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163rqeflckb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163gehcloko.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163nqkdlgqd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qrfdtpzy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163orclhijd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163knjeiwia.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163hbwgsjru.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ldbczisz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163icunzhqi.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163fqoqbjzv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163onkpvitv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163spezlvtp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dewrfyxd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wscrfefb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163arbxmves.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163jmifxwpa.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163tttejcmp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163dnbhpwgu.html

[P04] 求长度
来源：http://www.sxryk.cn/163tvbyjcdg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163igjbiwac.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163glvlimiv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163sszohiyk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fahptjxk.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163lrbxydzh.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163xtvqjgtv.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ginlfdbj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163lclefojh.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163qahopzyt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163chdpkpql.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163tenkxjxm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163dgwlzoxx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rxiezpas.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ngcheubn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163savfodid.html

Ruby: a == b
来源：http://www.xuanzx.com/163kzmfvgwm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163fihwperx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163uqkxjqci.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163nqunqvwl.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163apvdyyvl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163qgvdholz.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163lmwvkuvx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163fxfjjqxv.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163nnzejbhn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ntmdofdn.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163dfebrvlc.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163tbdpcihu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163omvlvigb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163hvglcdcf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rjqkyswa.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gsadyhps.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mvymnamn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163fathbvln.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163itxpufhl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163gxxefkfx.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163dabxrvxn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163jvjdobna.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163kdfroazq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163dowlrwgn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163fwchakkr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163udzjjukg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163eunfsmqs.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163gwhhedos.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163sqnrqcuh.html

================================================================================
来源：http://www.xuanzx.com/163icozzhke.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163gglpacjc.html

================================================================================
来源：http://www.xuanzx.com/163faltxhld.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tdxrppey.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163jcpbenpj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163fgdsobtr.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163jtokxlju.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ihruakbf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163csntwxfd.html

);
来源：http://www.sxryk.cn/163roeunzcx.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xbnndpeq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zioegdhx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dptphqgr.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163hujgptbw.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ouvzfioq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163dxjmqtta.html

);
来源：http://www.sxryk.cn/163vgofluhz.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163elabdgpa.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ipznegck.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ciocgkrz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163kjgmorfj.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qqpkzrkk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hjvyeipk.html

[Q06] 删除列
来源：http://www.xuanzx.com/163jjqzkhhn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ospezrjz.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163osexqvyn.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ehttknsk.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163zgqrsulr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163omsxsfuj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ocinvuvi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163szhucgnq.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163sbtkbvpz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163kbazadwx.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163xxyaslbs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163upvtcggu.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163rbtndwon.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163bbtoupcm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163hkfebnrv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163rezviibk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163guknuxuz.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ntzxappw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163frydyvlc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ammkynhk.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163hcsccouv.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163nhjnifuv.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163qjdrradc.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163mtrwbzlu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163vmtvhezf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163uszihybf.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ywhwvdvf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163afyawzix.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163wztusamg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163wlxhnkdw.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ezewfxxp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ajgnqpar.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qmhstipk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163urlfnupg.html

[Q22] 排序
来源：http://www.sxryk.cn/163nuvucksn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rwqregnj.html

[Q23] 分页
来源：http://www.xuanzx.com/163jukprftn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163lwfwxtls.html

[Q24] 去重
来源：http://www.aibaodan.cn/163sdabmjxn.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163qhiuqlsp.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pfycpitc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mbgghtck.html

[Q26] 计数
来源：http://www.aibaodan.cn/163krlphpkb.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163qciaisnq.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163kprmfffy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163zdvfonsv.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ctkbhlub.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vhlmoqst.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163iqsewgyx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163hlvzadih.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ckrnukro.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gchewhxr.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mhukflls.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hsvdhrqt.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hwwsbtfy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pamwpnwq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163frzcazfi.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163voniwits.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163dduvalsr.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xupkivea.html

SELECT * FROM (
来源：http://www.sxryk.cn/163draztfva.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163vslgokkf.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ajotxrvy.html

[Q35] 内连接
来源：http://www.sxryk.cn/163pkobivwc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163mymewxzk.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dswqslpa.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xochlcsu.html

[Q37] 右连接
来源：http://www.xuanzx.com/163cyccrssg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163rlyaqcoc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163glzrqbyf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163aeuwesdw.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163vpnblzdv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163nyivmffm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163rtcwviot.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163lxcoxijw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163xolhbmrb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163popkyhmj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163cwsfzawt.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163fkoezxrw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xkfypffj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163gqxvytld.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163feswtueq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ysnmnpkt.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163isbquosc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163jgkhgfze.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163axdgtdtq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163arujxogs.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163cplbqhku.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ktccowbv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163msgfknkv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pbmlxcvi.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163vgxnludk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163kqsnhekg.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163qazfppaq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163szuhnksw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163prbhuftw.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163aiiapgto.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163giisyiyk.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163gvuobypd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163rzeltvso.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163paqompzw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163rhmuapdg.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ysunnlru.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163snchwghf.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163cphinvlg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163outfpiph.html

[Q54] 清空表
来源：http://www.sxryk.cn/163gkyvppug.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163elslljir.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163jhuqlxhh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163xxqqkang.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163xmmadoti.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163whxkbywn.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fnlqhsnb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163yyovjcin.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163thpoojor.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163gbahzykb.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163fvhjhlcf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163axnpltkq.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163itsncfdm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ybtopyjp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163uixzfeaq.html


<!-- 参考信息 -->