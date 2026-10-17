外链999!wailian999！

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163irmlifos.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163cthgogsh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pjplktob.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kmmjrher.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163gcjfqpqr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163asqbrjrs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163pjhbeoaa.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163osdnsmoo.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163aefuiyuy.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jdsfpsxd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163lzgvxsjc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gleouftw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163iowqlbyi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163qduezlqu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kadimimz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163hzywlpjp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163jsawhszm.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163oqvsgjrj.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163xejddfia.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163fqhesdlf.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cbelbsrr.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nqqnftxq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ridattqu.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ugymovmc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163xtdqojvx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kqanbdmi.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dlwjkwat.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163lszmeysu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163uvjhfbhc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bpsqmaqa.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163xqohwuwx.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zzkkicgu.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163txtejbdm.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163jawshzbo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wcxwrjiq.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163imopuzjd.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xjteglox.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163esevennd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163yplzdsmt.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tqeycbhy.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wedmrpli.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163bbxupozb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163yyvrvggk.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ewlsmbmp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163muppqxms.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wilydrfw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163kuspnfgt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163kcnrhtwa.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ubucpxkp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163cvxusxeh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163kplbakcz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ksnmpapc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163kjukzlus.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163gatusorg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163mdcgwmio.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163fsxboymn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163mthevxij.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163dqivsign.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163mvebokwr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qgiodpzg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163jnklaelu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hlgvfhon.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163cujxmfvr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163lelqlcgn.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ceywzkva.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xlpjflsf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163syoalvbi.html

Java: // 手写递归
来源：http://www.xuanzx.com/163gvvkmtps.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163wcukhvsk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163udkyvvsr.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ayfcdyun.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163oevqhuro.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163wogqyeoc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163bbyogkfs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163fcqurmky.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zxgfgwdb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163utiorlmk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163fdrbjcth.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163iwlyxgyp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hmrohxak.html

================================================================================
来源：http://www.aibaodan.cn/163fjjvgjix.html

O. 并发与异步
来源：http://www.xuanzx.com/163pspzxvri.html

================================================================================
来源：http://www.xuanzx.com/163jizielwe.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163nzpqcosu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163lvxiakwn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zvtfimxs.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163gzsxgvhc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163iczpyili.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163qyifglup.html

Go:   go f()
来源：http://www.aibaodan.cn/163hxerjetk.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163aayizxph.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163imgbxnbq.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163yscmtmeu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163wvsepvyn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163zcgfnirk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163oflvszpk.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hqtdoeez.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163nebrnmph.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163miihgqqy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163yofxywhf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163yqafsrgr.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163oeivrjlw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163mlhqrxcu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163oggznotv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163lqgohosk.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ifomfoav.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163epeajfop.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163pithafha.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ayvloryz.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163fpmqllru.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163hdkonqrl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163xdayrnyo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jmsgygrs.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ipkewhsi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163rdqbnfgf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ffmgnwij.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163zhepprwt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163hkouyfoz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ybaivhke.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163jgqmosos.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163uqandbix.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163wpytrcsi.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163nhsslcrr.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hqipqwkk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jyqxftut.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163abgluhco.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ymgcbytm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ulaaxvhi.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163knutprkl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163wnphwlzb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163jlilwwmc.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jpalidmu.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xqwrmrqt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163cvbscmpk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163upuxxldk.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163xdzxckta.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ymwypzaa.html

================================================================================
来源：http://www.aibaodan.cn/163uqzacirh.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163plbpreyo.html

================================================================================
来源：http://www.sxryk.cn/163jcgndsty.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163blrujnls.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163umyrzvzr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fxdgsliq.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bcqckcww.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zxbtwrmk.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163cejxyhrn.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163wpfattjx.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163rjffpysl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163oshmldok.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vdifgkzk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163chbcpiol.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163xadedmxe.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163gmwfginp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163goqxioqm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163grkqceec.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163masleakl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163gpnxaefp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163aucwhrnm.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163andmgdcy.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ibeoldfc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163nazcxwrn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163srgliovl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zmwkiprr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ncvsqlvg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163zwkvlnrk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163lisstyeh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163rfrdfzbs.html

[P04] 求长度
来源：http://www.xuanzx.com/163doyacjvy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163szdbrlsn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163idbglzcn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pntpftdt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cwhlfodb.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163zwkimqvj.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ydcznhcc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163fbnasoku.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163iqkgbesl.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ueztbsnn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qhqaekza.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163mvnzrmia.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163rixahqrd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zcrhkzhf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163hfhrmnph.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163cfiyxabk.html

Ruby: a == b
来源：http://www.aibaodan.cn/163lfcbnlyu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163zpqhmktn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163lxuqsvvr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163uqvlrajj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163dnqljxek.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rekjduzm.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163mhmkbcvn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163tdlhikrz.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163dgwwsuwx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163bsusirra.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163fevnoewf.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qsqkksbx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rqyxeovz.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163gvjpxstf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wwhlkwjo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qnkdltmp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163rifodtky.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163syjjudpw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163nglwwerv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163kalkhfsm.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lytkgnka.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163vaeglnlw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163gnstsbyt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163meisxtzn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163nwxsozak.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163egekeajb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163urepbhgj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163bujpdcss.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163rwlbjnsk.html

================================================================================
来源：http://www.sxryk.cn/163xlwgcioq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163nluquleg.html

================================================================================
来源：http://www.sxryk.cn/163ziesxkjg.html

[Q01] 创建表
来源：http://www.sxryk.cn/163fziezjze.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163zoeubqnz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lkedokoq.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163sxagxqri.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163onvnnpow.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163acqijuvc.html

);
来源：http://www.xuanzx.com/163ihhqixjg.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163hxhlcenh.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163kouaasuf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vjqgvdvz.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163hfgrjays.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163rsahnkae.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ouicoyyj.html

);
来源：http://www.sxryk.cn/163odfbjxww.html

[Q03] 增加列
来源：http://www.xuanzx.com/163yifymezs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ardqrahp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163pvutuxsd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163wadclsul.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163tzbvahbk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163qemxifyw.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163zmwwibvw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163pmfglhzw.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jfzsonxr.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ujmvwjrj.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163kfykxdas.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163liofvnyk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gmjechyv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163yochxmbq.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163yrdnzcgt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163krqvisik.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163lzrpldrc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163hsiexjdq.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163igukflxo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163frwzdkby.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163vfecbetu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163urerkiyu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gjtagvpm.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163isjnkkth.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163wouuvtip.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163jtsdkvnk.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163exmjphfz.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163qoervcpv.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163wxbdtnkz.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163sutiokdp.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163mivefspw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163lncektwx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163vjtfhkop.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163chxhbnxx.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163qfjxnmkb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163hsnbeuvi.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163lbrpqior.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yeayjtww.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ynursfir.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163qoxvjqhs.html

[Q22] 排序
来源：http://www.aibaodan.cn/163jbfgzgpr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163adtektss.html

[Q23] 分页
来源：http://www.sxryk.cn/163fwjpqxhu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ptsgdenq.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ecxuexha.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163wxvckhmk.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163fgfretsv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163uidcdpnr.html

[Q26] 计数
来源：http://www.aibaodan.cn/163utchovdy.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163hihmioth.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163euhrmdmb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163thyzegzk.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163mwxmcthx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163sppyezcg.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163btusangr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163sueaqeqy.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163djctludy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tswmviik.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163sqsvzbya.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wsqfzgyw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xhfhxecq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rngdvsyy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ffroumwd.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163lorygpcl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163nilirlxm.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163uedndlhf.html

SELECT * FROM (
来源：http://www.xuanzx.com/163rxsiklyt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163qxuvhlos.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163fpnfxlyk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163xmlfbdwq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163plagbtgv.html


<!-- 参考信息 -->