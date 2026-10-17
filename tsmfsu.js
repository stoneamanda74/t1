外链999!wailian999！

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163yscvjgxn.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gkovdsdl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163euocfxlh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163etkzrxjp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163slnvcomm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163vitckwpi.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163dojgyvqz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163jplwlztp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163lwfbmbsh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163krjyfvwv.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163cnzamdzb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ctnhegfo.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163brldsuvq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ajfnihfg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zejquhra.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mybphkio.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163cafnjiwq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vntkfwbt.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jsfsagob.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163hnfgmdhv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163hggngork.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163uymcbwat.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bplbcrka.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gzreqdmu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163sdblkgdo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163nbkxlrdu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bazjygqj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ithkkaii.html

================================================================================
来源：http://www.aibaodan.cn/163nhnmbdjd.html

O. 并发与异步
来源：http://www.sxryk.cn/163gozbnxhl.html

================================================================================
来源：http://www.aibaodan.cn/163mdmzywtr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163dqnwgxsr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ncmspiwu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163timpgrrm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163bzhbemxo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163eejtwwcc.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xijjerig.html

Go:   go f()
来源：http://www.aibaodan.cn/163jceyjacv.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pebpshnk.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163vsezyvbs.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163pfynyxkf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163hxuerevt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ouvgsyaa.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fcbbufpa.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163sttwnsac.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163cglyrvou.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xtsfmbja.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163fcyujgmv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163iesdjcxl.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163eeujhxra.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163iyohxuqz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163tfbcsxzm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163jpmxlejq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dwqapnpc.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163eykmotma.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ndwluvap.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163sbnyglkf.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163qvalieke.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fqgyxqfa.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163zjjrlsuj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163phmbribd.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163kpbqdads.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163uidgocnm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zxsbivxv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163kieecmil.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163mklbszcy.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163jqtfpvve.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163xobqveos.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163qqurmstq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163yeamkpeq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ihtsuxje.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163stcembje.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163nwxvxipu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wfhhnctw.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163aousebwi.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163rknhjdmz.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163etcezkdw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163dbnczgnx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163lwaedzzm.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dedkmpqr.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cmistpzy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163syolpeni.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163wajskkcy.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163cxoutumy.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163xyhfplub.html

================================================================================
来源：http://www.xuanzx.com/163fwhiiiet.html

P. 常用工具函数
来源：http://www.sxryk.cn/163uyipqpre.html

================================================================================
来源：http://www.xuanzx.com/163ntsaphbl.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bfqhrany.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163zazsftom.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163wmakdhml.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hqjmfykj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163gsodvzvg.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163tovwuqii.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163mknpfdxj.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163crjpadvx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163swfppoty.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ajfvftzc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163xacssoma.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163cuuatltv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163gajsavjy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163vyovvjop.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lpkzihhx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163mravtoxe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163elorqngf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163uhjfzqwt.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163uybeduzx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163tvvnjqym.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163gippcsby.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yxzttond.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vkffcpxi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ozsepzsd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163tfhcajjy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163klvvkxfy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163pbbjdkdp.html

[P04] 求长度
来源：http://www.aibaodan.cn/163vtzijqmo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163dksrcjlu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zphrvaki.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163phfcyvgf.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lhtbmdgm.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163bshrqksp.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qveldqdv.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163yqkkylhb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163yjdrzzoe.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163qbiigxig.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163qkpvdcvr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163iklvmjki.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163tvcablkz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163yfmxzvbe.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163wzzauvnh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163auioxmhz.html

Ruby: a == b
来源：http://www.aibaodan.cn/163xwcidyku.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163jcedsyvr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ptogjjeh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163srlqedst.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ldcvlwrf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163fgjggrkr.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163nhrwbwhh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163htogoeyi.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163bpkgetvp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163bmhswrfn.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163pnexzdqe.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163tcfxqmif.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163oejgkwux.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163pxwpxmwp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wyduevty.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ztfveraq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163dzgsjjlj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163cmgzouzg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163mqevdccz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163smvnaabl.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163yzoyille.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ttjneiwq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xmsddwfe.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163jixyflvi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163qlfaeuue.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163moluwkfo.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163pzjeudgs.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163gwzizxbg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163vdcmtqvr.html

================================================================================
来源：http://www.sxryk.cn/163ckxagtbf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163sqecqoqm.html

================================================================================
来源：http://www.sxryk.cn/163ynxwosjz.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163trolcqcw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163fqmwmore.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163czsfizns.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163kjgveyqs.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163srphvylp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163hiydtbbk.html

);
来源：http://www.xuanzx.com/163qkxvnkmb.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163lrprhpas.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163dofgougw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mkinrrni.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163oudygmss.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163zvcqscyu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ybcdpgts.html

);
来源：http://www.sxryk.cn/163rppvdwlc.html

[Q03] 增加列
来源：http://www.sxryk.cn/163tkpdzghu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163lsqraqcq.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ziwlknon.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vdfxeuhk.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163vwexxlrd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163lnrgbtqe.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163wjceiktp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163fwvffirm.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vbzcbmkq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163odzleukp.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qiiyvfqw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163tudhakep.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163porfeled.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163yorhoezi.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163gwiawpjc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163mooqylhd.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ntqyczdm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163mavstwrd.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163edmivcdw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163mysfyojf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163jkieameb.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ccpjzbpb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163eksifyvn.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163nxilyhqj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163wrqgiyht.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163wrsgouij.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163elslruwf.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qrbygjmt.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163tqyjtzln.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163fisfyhpo.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ngqnzouo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163rfocsydd.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163sbgvnbom.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163cpajezaf.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163tvjbwgxx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ssfrenja.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163bjltztxd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163wyqklwcj.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163xybabqsc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163zxvqatsw.html

[Q22] 排序
来源：http://www.xuanzx.com/163asiatiai.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163aidalawb.html

[Q23] 分页
来源：http://www.sxryk.cn/163kgbywkdx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163nopgrhkn.html

[Q24] 去重
来源：http://www.aibaodan.cn/163muwgmbam.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163dezodaae.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163eyidoxya.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163rghcawkf.html

[Q26] 计数
来源：http://www.xuanzx.com/163shdwkktr.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fezcazzy.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163jydlsane.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163oucaceua.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163cnwxapuj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163zydscqtp.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ezbmsqkq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163usudmjyr.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163zdzqabeo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163itoxpilk.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163whyasluz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163lkpcvqpz.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163mlamniig.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wwlwdmvb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xialiusa.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163dgcnkozy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ssxuizeh.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ynbaedhz.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163fptgkysj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163slotashi.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163eufxcbmw.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163qfpdsnmt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nizrsqve.html

[Q36] 左连接
来源：http://www.xuanzx.com/163jgznmgvp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tqnvvqna.html

[Q37] 右连接
来源：http://www.xuanzx.com/163caoyawfp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163akwbxdhm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163kylxtdsi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163toiyueqz.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163wdevvpzf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163stfthswo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163fulhpfbf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163gomxxaid.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nyryyuri.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163nmhmfxww.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163klzukmcm.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163orjjcwmt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163qjjnwhfv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163dnctgmyz.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163jezproki.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ymvtdlqo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163adbosikr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163dppnfylm.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163mhsdbysd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dylagwco.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ctclrnaz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mfbzvhbx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ysiubwyy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163kgkrmzfz.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163byyviqhq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163cielaxpg.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163rkzwxsht.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163whisjzsc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163uirnvhvz.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163qzawofwk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163lkfwemkj.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163hnvctquh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163phicakoi.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163aurtfehc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dazytbgy.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163gmjlxefz.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163eqyexelw.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163exprjxft.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ufqdkbch.html

[Q54] 清空表
来源：http://www.xuanzx.com/163gwrbixmr.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163oddukjvu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ddnhpcof.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163krbyphtd.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163icaecurx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163iznykcab.html

[Q57] 行号
来源：http://www.aibaodan.cn/163vzhsdtyk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163lwbzxraw.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163lqkiyafq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163omauedhw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vzhtbouf.html


<!-- 参考信息 -->