外链999!wailian999！

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163gykujguk.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lxlswrzn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163zzdtxulu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163manlbtha.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qyanwtsz.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163mdoeewbq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wwzkzruw.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xpmrznlu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163njcrdwcq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163kwtnveji.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163rkqwqbip.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wbeubksb.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163vshmawdb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163eqlgfhto.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163yrlofthz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163qpjrrttn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163tuifmbgy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163irodwzwz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163gacfjvqs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163vvlmorzg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ocvniqnc.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lxoikvvn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163bzjbxhen.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nbrbrjhi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wlhfpnvd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163edqqkkcr.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163nywtkjzs.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163jjdgodpp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163qwjywisw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163qnixkupw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163qaqrvdkh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mstahqgm.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163mlufehfb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mlisrhmn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163keahucqw.html

Java: // 手写递归
来源：http://www.sxryk.cn/163mgjdwedg.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163eqvvmvnc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163kfqfvrrl.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163mhoopumb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mmtaeanu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163rcmyfinn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lthpoyti.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zyzehcdo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mykmrbeq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163slaioxys.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163hwrcdhjm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163vhxewidw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zxeunrvl.html

================================================================================
来源：http://www.sxryk.cn/163fvmphlqj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163zfkdjimh.html

================================================================================
来源：http://www.xuanzx.com/163zphgpeki.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163jusyycxy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163bxdtbqkm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163znqmdfmw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163nebfquze.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xeisodzi.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163irneuzhm.html

Go:   go f()
来源：http://www.aibaodan.cn/163nbycopmb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163jmrlqjac.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lbxwicqe.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163xoqkdvsj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163gscxpmey.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163frlltlps.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163yhdjomgj.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dowcwkpg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jjroraam.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163tmvbwmtf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163iwzbbdsa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163belhkzwc.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163xlntahwv.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lsmtsfcm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163olxyajun.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163rpsvaedg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kxvurcha.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163fjsahzpw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ivthsiqa.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163skjcjwfh.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163zbbabmtx.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163hmihrvdy.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163dxnlkgjh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163qvpjprci.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163rfqenxix.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163mwmqdeab.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163liagqfoy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163tvhcrpoj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ltgtnaiv.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163rsdhixkc.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163gpwdormy.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163kyrxldzg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163nkrswwzo.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163rmxjwnmr.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163zxrdaiwp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163dwpzxbxk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163utbfweiu.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163prziaifa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163fsewmkxy.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163bxunmwcl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163mckdmbxb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163hbynnzgk.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oyjhavok.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kxlxesut.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163mjspdpmu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163pfdensny.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ibhrcayj.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ainchmte.html

================================================================================
来源：http://www.xuanzx.com/163hgzuxxiy.html

P. 常用工具函数
来源：http://www.sxryk.cn/163qhgnpjkp.html

================================================================================
来源：http://www.sxryk.cn/163vymzcmqt.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163zzdscupq.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163tikfuukw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163oegprgnu.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ifodykkn.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163oqyznzne.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163kdrgjwkf.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ptuwmlkj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163mpcqqquu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163nzktyxez.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vudvbtou.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163tbvdbgxm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163shblbmps.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163davtwssa.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163uyimybsf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163gklfbdem.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163rntziien.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163wcyohupa.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163oonmzrso.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163utgbwvwi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163kzojsptv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ufnohpjr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163wcdpljkx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kjfxoxfq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163dlonmlju.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163nthewoaf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163nodpwbtf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163hbmrqkcq.html

[P04] 求长度
来源：http://www.xuanzx.com/163lehujkuk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163qegqsqzr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rnmgaagi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163mmanhjwp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dghktlkv.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163qqaqptfb.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163wbpmtysu.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ouboqyhi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163fluuebdw.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163vsbnvnbo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163qkjgwcde.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163pettizjd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163kvirrpgr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163clzujwsp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163gybogqxq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ddjtymco.html

Ruby: a == b
来源：http://www.aibaodan.cn/163zrycazmm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163jupvjafm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163xeapohgv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163gkdvevmm.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163qyadedhs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163shjyevtb.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163bcxnqdkq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163nszgrcdq.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163sztgixns.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163czohsrwx.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163rfyvsmxz.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163zmofokia.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163fssitugk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163vazeucko.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wrbijoxp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qudwgexs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163eixyrlua.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163kultzgvl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163yxvktsel.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163wjciygvd.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163yocaitte.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163tqasuvns.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163kigwmkjv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163wejtonvo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ekoousug.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163fasrwvdi.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163hsyagnuz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163wfelvjvj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jbxxulsk.html

================================================================================
来源：http://www.xuanzx.com/163vbpvxlgl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163cchwurrz.html

================================================================================
来源：http://www.sxryk.cn/163ugummmwu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163byknkuta.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163nebgehvc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hkfubigo.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163nxdaqcwt.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163rwmaubbn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163akgjpptp.html

);
来源：http://www.xuanzx.com/163lzmzvkgw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ikcftqnn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163yrenrakk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163svnwijyo.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ikibhdhm.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163aqnmfmxe.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163jbjuuxcz.html

);
来源：http://www.sxryk.cn/163acsfapop.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163njbqcaci.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vfpyaavr.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163jbkbzpzy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xcneroqd.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163atwvjslt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163aozaqife.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163tdmyqbow.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163kttvgyua.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163xlnbznby.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ytlptgld.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163hgtxobbd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163purtlptw.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163byxnkdnj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163pljvpjmr.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163uxorzcgq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dnpvijpx.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163mrrrvwcc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163hyttwybz.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163jdlnrime.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ciprrbxp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163abfodujq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163uiombcdu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163kqmjktzx.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163enmwdiqv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163tfphezze.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163grlvrmsd.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ilrhhfsh.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ejqykheu.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jpdvvdld.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163cnyjuwwl.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163eqasooje.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163fppoooxl.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163weuhefbs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163fuvplcwf.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qfqmlzqj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163cvklzadk.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163dorszwem.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163erhlhnen.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xtufyxuk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fkuutqhd.html

[Q22] 排序
来源：http://www.sxryk.cn/163okyiabxh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163loawyrav.html

[Q23] 分页
来源：http://www.xuanzx.com/163naoidyfq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163reaslfil.html

[Q24] 去重
来源：http://www.sxryk.cn/163gyjvokye.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163egbrxsex.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163blggqwvq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163qurjmopp.html

[Q26] 计数
来源：http://www.aibaodan.cn/163gwnttflo.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163tkbmdrch.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163zczomeqb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163oflnctqv.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ppbepnch.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163chadbmbz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ozctiftf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163twhudenn.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163mmvxtqwr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nhjpltlv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163mblhxgfs.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163syktpwyd.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163jtmokkel.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ixrdrkke.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qdzmsyel.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163yjogiogs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163raptajew.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gnilcpjk.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163hvqcmrib.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163shcpwlvv.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163gswxvzqb.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163znfykoop.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163onseghpn.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dedszezt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wwmokquw.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hpnffoci.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163adzageiy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163avpkqcdi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163gkccpmoq.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163cfsctiwh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163xdumhtql.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ltwiehdy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ndohlpsg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163fhdjsmuf.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ihftkfqx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163addxeobx.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163egytapth.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163tfkoknon.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zicaduat.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163mrwqgekw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163wghkffai.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163qdviodxg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163qurmktyz.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163fohihgny.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163mxxlqads.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163idodvdvt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dthujpeu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163qegrnuqd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pjttubyi.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163imyyrucm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163quyqwxes.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163otwoxrgm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ecucowxg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163dspoeyav.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163fackigzd.html


<!-- 参考信息 -->