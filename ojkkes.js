外链999!wailian999！

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163tcdrieif.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163uniicuhv.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163jldnfzqy.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163mfkbryml.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ataxuawu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163xwxmwfue.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163csyyyuko.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163kednfsjs.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pqilfbio.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ecxeodia.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163lnxazpoc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163vdfkwqaj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163samdpcaz.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163nmkdvkse.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163tzwscxzv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163riddesnz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163zbgexzvn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163vwvdhubn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163upsegsaa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163jmorxqsq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163uspxvxia.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163gjsflavz.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163btjutruj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163iluxyqof.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163gkehddrg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163seayklfi.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xkkwdarm.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163sczcfoyk.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163qywkjjia.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163jjtbaxcd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163yxeqzbtx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163zyhijqwp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163mhiminzp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163pieuldcw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tcebixsc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163kqxbiuac.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163axbfjczh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163igksirdu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163jfwoamsr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wpjdqkyt.html

================================================================================
来源：http://www.aibaodan.cn/163cppfzpeb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163xccrinbc.html

================================================================================
来源：http://www.xuanzx.com/163mjewdwhe.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vvdaxvrl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163josccwhm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163fpjtbunv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ypkentwx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163movonhso.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ywipebcs.html

Go:   go f()
来源：http://www.aibaodan.cn/163kxjyinbo.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163rcomxmym.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fplaxkri.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163edyvwuqy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163yvwjuwig.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163hidzavti.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163benyxwwc.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uwvbwywq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163uprbaluk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163evpxujfv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163crabatpn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163tinxwdys.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163eeucqteg.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163nusaepse.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qskfppxl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163hcoackrc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jexfdxky.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163cpsfzpir.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163wrnfjphs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163kuswsrkd.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163vfaohrsa.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163qruvaqgh.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163qovorpub.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163otsqvaxz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163kbkdtqdn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163redqztic.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xxszyyfc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163agjcztxd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163tpgwdegr.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163pquoagbu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fgokergb.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163owvdaxbs.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163tdtsclpu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163efawhvgd.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163scltznml.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vffzboje.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163azifrsfh.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163fonuwmku.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163upqjcmhc.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163fjdxnvdx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163peukpttq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163bvdatrxw.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bqalilwr.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163zlflpamp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163luiwyjlq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bcashrjn.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ygkarpxv.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mlyyyeub.html

================================================================================
来源：http://www.sxryk.cn/163ycmkdzof.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163uacmhque.html

================================================================================
来源：http://www.sxryk.cn/163rbmdhqey.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163jixpiwfy.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163rodyqtgu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163vscbhoel.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kcfkmpyq.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vsymfdiw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163yaeqcmwj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163zvyjastj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163emzuimvq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ihsydirp.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163zkmhurxu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163jnjlwove.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163horwcqvf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163arqqezuq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163btqtobeo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ymgaoftj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163zgbpvizc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163prjsxzfc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163vjrjwbqr.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163aaobqqel.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163jhfbtrjq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163jkczfful.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163fzkrwxbp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ejlddwui.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163jeuzfutj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ckaboema.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163eanvtuoe.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163qozonrpf.html

[P04] 求长度
来源：http://www.aibaodan.cn/163cbsorxlm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163bpzjriyi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xkyfeacn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vpmvwzff.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dtguvtvx.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163lzgzorlb.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163syeuhjeu.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163tbasdvic.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fzhqkmwt.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163oltysvqk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qorzjjtn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163lruobxon.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163vkghtlxk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163pamewisk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163uehybjwk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jdfnrhbk.html

Ruby: a == b
来源：http://www.xuanzx.com/163bagqijoe.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ctzxpsdu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163hdkdgxdc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163vtpuvzds.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163dvgtxesh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ttrtyhka.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jzwswmma.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163vxkxgnmk.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163yrosliwu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163bjqdkbzj.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163bhsfldfp.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163quvoehpt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163yfhnmucx.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163veefsnpc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dxqxshif.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zrsybybq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ospvzohq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163fkuozhvv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xavvmjwt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163akmdxugs.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ilsoavby.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163iaccjnse.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163iiqtemcs.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163wgtfhonx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163gmztpglt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163aqbhmpcj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163mmizukrj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163bnwhdbjy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jswtwaje.html

================================================================================
来源：http://www.aibaodan.cn/163vlhhlyqg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163hpgpcmpr.html

================================================================================
来源：http://www.sxryk.cn/163cquueeve.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163krgfdpyh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163guywfkdp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nymdtqpk.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163zqpmlyxw.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163yojlnwbl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163iaojcjxc.html

);
来源：http://www.xuanzx.com/163uldsyboq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163blmlqyxq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163uhonzayh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163cfuhfoqh.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gjzlbbmb.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163divbtnsk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ibwzvlze.html

);
来源：http://www.aibaodan.cn/163ijaopbhz.html

[Q03] 增加列
来源：http://www.xuanzx.com/163rdjysszb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163pdugqpjg.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163fjkqykrf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163wjzyxclg.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163cioxftrh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163pymqkfjo.html

[Q06] 删除列
来源：http://www.sxryk.cn/163bougxnne.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163pwgudgtc.html

[Q07] 删除表
来源：http://www.sxryk.cn/163kfyqltrq.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ppifjeje.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163uqkliigf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163nuqznpcv.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163krqlvujy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163uojmrokm.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163xcwwedro.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163fmzgnviw.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jhceiuhc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ztseiswn.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163vdamytej.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163tycudpno.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ztunrsjv.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xjumjebb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163scdhoece.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163rpuelklj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163tsqvxxon.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163efmhkqdd.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163haxsgnqw.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ilybkicm.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163lyxbqsbm.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163vmjaiwha.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163fnmwhcpj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163pbfrhbtp.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163rxzzghbg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mwcuajnm.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163cfgvzwvv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163qbwlyzkv.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163intigxmm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163lazdkblc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163missfmci.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163hgibaefc.html

[Q22] 排序
来源：http://www.aibaodan.cn/163lliinqky.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163cdsdwptt.html

[Q23] 分页
来源：http://www.xuanzx.com/163uqaedduq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163mikrppwo.html

[Q24] 去重
来源：http://www.sxryk.cn/163vhbgemti.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163pabraeql.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ynkpnbjn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163aoehtyny.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ufphmmoc.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163wjealhjd.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163wtxokzwy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ecbnwvxs.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163wnllmlab.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163odhzcwgo.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163fbvuqmho.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163aadvfzbn.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163xhvjfraq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sdqoehej.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163xnzamwvt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ullotjus.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163kvvbqbum.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163aqbekksp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163tdiglfun.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163jggtdmpd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163effcoccy.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163pfxvvnzj.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163vnvuvpsw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163vvemprhd.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163nfyywfty.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163kecmbngg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163eaydhsat.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163vqibrqvq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163obiyewzc.html

[Q37] 右连接
来源：http://www.sxryk.cn/163awsgjssm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163noxdqpse.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163zqhhxtpw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163mxnuqtlg.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163trsrsvws.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163hwnainqn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163erakrdjo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163bjxyvqhp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163cponshaj.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163fmwncdew.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ravvhybv.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163lhjcjijj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163uakhxsoh.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163kyqwymfg.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vucdorye.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163oxlzieob.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ljsszsuy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163aspriqmw.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163taicbdxu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rbbblqiq.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163nzmfgiti.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163antazqxn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163nmhpgaol.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163amwncctr.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163mzgbrktx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ktmbuuce.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163qskmiaul.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ohulycgg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163klfroqis.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163loexhvmo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qpuytnuc.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zzskkbey.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163tnefmkps.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lzhtfcma.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163psbanzab.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163qhpcakkq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163kdtxbzhi.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163koufdjyu.html


<!-- 参考信息 -->