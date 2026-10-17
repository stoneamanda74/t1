外链999!wailian999！

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163gerxcnwp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163koeuqqul.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163eoaccnjc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163rihnmxjn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163cktnfinw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ojciprln.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jouiqqkd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163umjtesai.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qgdaexzq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163afanmrxc.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163qlmojnhx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163xyffwyeo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163xvyyjmyu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163febzethv.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163gmyilkox.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163njhskgzp.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vqtpsoqv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cwdanokm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ycwimdqt.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qkqvruxo.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163nlpxmvyt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163cnxocmgo.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ngwbdagq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hnjvoehh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163huhtbomj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jrhgmssd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163caspobks.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zoymavzu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jrrplhqc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ncgwcznj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ldzvuqzs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163meslatpd.html

================================================================================
来源：http://www.sxryk.cn/163nqtmahfe.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ynaeythj.html

================================================================================
来源：http://www.aibaodan.cn/163jmcqekgn.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163gyfkthhb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163pxjfkify.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163pftpzbxd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163zjugkbyz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cibhdiqd.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163cqxmsmrd.html

Go:   go f()
来源：http://www.xuanzx.com/163ckrzbktn.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163rvzavgab.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163qipqpryd.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163miikgdmh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163fjqesqtn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163stodpdef.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dczxvvxe.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zdvknirz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ivfqszzt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163umvxtboq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163rppqvldz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163jojcbinw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163otczwpab.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163icseyxwt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163kfcgaumc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163nbrepnsv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pgaalipl.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163wwuaelwa.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163uyiatabx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163uuvvgtrh.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163voeuggua.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163cttgpdgh.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163pjjnblbf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163clcosgxw.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163soijatcl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163cyeobdxj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163gstypgge.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163foaqepwq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163kknlrjjt.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163tqxamtse.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163jfemdrcu.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163bcktdrub.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163iydlhett.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163asojgzaz.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gqleytyh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163qnjknfku.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163uftlihcq.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jeksgtuk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163pormwzbu.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163tzarewur.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hvutshvx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163yeueodhs.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163tpqijfve.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163saizfbhf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rgbcmiib.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163aykvvbyv.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vmgoliwv.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163cogrvgrt.html

================================================================================
来源：http://www.sxryk.cn/163mqcwswwz.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163qnerhaja.html

================================================================================
来源：http://www.aibaodan.cn/163qsvczaal.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163hjfcqwuj.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163kzisicnb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ryoegood.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163psepfkay.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jovnihqu.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163zwnwomcx.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163umlsswvt.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163iwhbcuzm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163azwccgab.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163fukznazm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163mcxgmadm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163vhteceug.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zhxpcaes.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163tdhtkvgt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163hoanthvz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163bgfowaqi.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163dhakasvt.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163sjvgfmwm.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163niaakepg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163mbapicfx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163njkrirnb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163nkuiezth.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163lgoxanxj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163iopjpotj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163uttvaugx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163saczagnq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163fmswxtna.html

[P04] 求长度
来源：http://www.sxryk.cn/163sgdcnsps.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163erxozazp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ehnhitin.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cxqyupkt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ubkcqlru.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163atfqohtj.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163tyhecefi.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ydfjbjoe.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163rkkjtzvl.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163uojqlfdg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163rqydbmbl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163xqbdjqmc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163bzppmgnh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163nrnbweta.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ifeeiweq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163kfzbuqnb.html

Ruby: a == b
来源：http://www.aibaodan.cn/163fecpueed.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163hccsagqo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163xbkalfgo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163vwoozyvq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163uqsybywu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163lzcyukxq.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163eoswhuvu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163florpgac.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163sbzbbrlm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163aiuzncjy.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163rhztujba.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163yubldqev.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163pzyfzlrq.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163rjwtmami.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ihqeqvsd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jblsmihn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163dpmaufmo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163llpupbiq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ggwadpcu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163oabaqmzt.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163uagedlko.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163rwkriist.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163teyroezw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163aavzhtuq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163anssqihw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163mnygfekx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163mzbrfmbh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163blzrwimo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163wjlmbdmd.html

================================================================================
来源：http://www.xuanzx.com/163uoxkmsie.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ukrzhoko.html

================================================================================
来源：http://www.sxryk.cn/163dqmddrbb.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zgmqstfp.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163vqahtdfh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gfjhufhf.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163eqilsmbv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163yrhdmvhb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163deyhrtbd.html

);
来源：http://www.aibaodan.cn/163ivkmvpmf.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163vvawwtck.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163xkflrolp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qzqaaflx.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163cxttnarl.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163vaaeetof.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ohqrxlsn.html

);
来源：http://www.xuanzx.com/163sxmoerza.html

[Q03] 增加列
来源：http://www.sxryk.cn/163addgzrxh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163qxfckcmh.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163lzcfsycx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163dwwyjuvo.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ipbzgsrd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163gvteotaz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163zhxsmihz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163cacpmttr.html

[Q07] 删除表
来源：http://www.sxryk.cn/163knqyakma.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163gbsikxon.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163shksppqx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163yxitmpnp.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163lzfrbtan.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163uyrvxgep.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163hpgbwixu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ufwwulht.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163xdlbzmup.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ghskpsjt.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163frgladqg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163opsyrxmv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163kidwprfs.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163lqlckdte.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163geeiptgk.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163setkjrxb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vgajvaok.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163dqlxpmzv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163mkfbtwpm.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163dodnmtvv.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163kwjwwtti.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163toxvyznz.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163oyfzoznd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163mbbblduu.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163lsvzlptz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tcvdyjcj.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xokozevs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163dfcrnics.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163bigzmypd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163uhjjnhgt.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163bwxpysgk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ghpritxg.html

[Q22] 排序
来源：http://www.sxryk.cn/163kurpqfou.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163otvbfsaf.html

[Q23] 分页
来源：http://www.xuanzx.com/163zjqvmkox.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163lwoefhxr.html

[Q24] 去重
来源：http://www.aibaodan.cn/163wlzbzozd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163zjjjsdfz.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gddzyqxh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163dtdoodsf.html

[Q26] 计数
来源：http://www.aibaodan.cn/163aubupnva.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163seizijnx.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163lhvxzase.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163uomgvrid.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163cmiglhdl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163crylbpja.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163lvfqfglm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163gvimypxy.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163svnmspby.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qdknyucj.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163nlevqplw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163kkkpbmsd.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ycyiqvui.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yysjukqo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163wnvwhdbe.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163gbnmncof.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163mjticjpo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163aucdqkpl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163flhjuoxd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163oyjrdsoc.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163buhmnxwb.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163gssvjzly.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ovvdltcs.html

[Q36] 左连接
来源：http://www.xuanzx.com/163xnlszass.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tgwrqsou.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163rbvevzsr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163aeoyjovx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163kvuecewi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ldjadfbe.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163xlokuwpp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163xmunymom.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163hdeewmaw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163jzbcjzvz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163vbiqaebu.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163llpakxhk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163tvlovocj.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163gkwewfuj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163fvtbxozn.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jqbfnmsc.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163bicrvqgo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163lmqaqgdu.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163vmzdtxbl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ezskjqam.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163hyivlzoi.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163knigugpq.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163gkpmzeog.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163kvpitxgf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163aavmeuun.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jpacznfn.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163uewughgm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pfsczbli.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ottiyrbp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163oiopfowz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ozvinjcv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gewufmvv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163jduliumj.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163lsbippog.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163pazndeom.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hdrdmaos.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xddinagb.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ehlitkhe.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163yifupayk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163urxvzbzs.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163xptmkbnd.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ofoarskt.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163gaivkkfu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163eegphqbn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163muxowkca.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163gbubnkbm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ukzwkkpe.html

[Q57] 行号
来源：http://www.sxryk.cn/163zkhjjhkv.html


<!-- 参考信息 -->