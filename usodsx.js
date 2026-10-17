外链999!wailian999！

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wefjvznj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ybbpulsa.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163pgyfwjfr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jzarfjeq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eynsuhtn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163clhtvfkz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163jhetzyid.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163aewkgfay.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163cmngmboz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ffinygte.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jwvplenq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vlzghrji.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163sumdramv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qfxcrkaz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zkjrytkk.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ekqrufyq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jtrdxeji.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163sfonizbw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ynmeoxqe.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zqhrmirf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163usavtkak.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163kvjoibac.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163oekijwuu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163palbdebf.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qielqfmv.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163qousnzal.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163sjogbeby.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zuoznuxp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163nidyljsf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163kbnkvawv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163vobyiztl.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nqitjvxt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163oyfvbpdl.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163jpagzvvu.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163hwpmsazj.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163hwqhnzov.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kiupgzdc.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163agjqrybv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163zoyfsbtn.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163fbonvhrx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163xthnjzrn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fidvabvr.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163pnagtzba.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163gochanyx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163oooovorz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163lyxfbjoy.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wndgsuzc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jcdrfdoc.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pfoaljub.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xliphtyk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163gmatdxqn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163qjiluswd.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163taxcjsiy.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163avziceiq.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163saxrrxvt.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tutuusqv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163sxvhkhco.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xflvcjjr.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163juxercdf.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qteiagre.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163uhlgwwba.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163pmzysooz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163rgxfspdu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163bddkwnwo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163noohkwrl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163tagkatth.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163azmokumr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163siskqehl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163jamjjpyd.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163pvfawrps.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ynnenqiw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163qzaptsbc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163crvqpgtl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163anvzruwq.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163furjijnb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163qjmvnfbq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ejlvhyyu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163imibmidl.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163xvpufgzh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vyrmxqre.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163jcdcthso.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nckupsem.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gyatpmbw.html

Java: // 手写递归
来源：http://www.sxryk.cn/163smddrsyb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jdfwnulx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mfcoazmc.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163loefqeaq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163betifurj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163maibhgts.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163tlktqtwf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mtherlrb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jztgaurz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163krzjtjff.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163jtlnpgby.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163zwonsaxd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jconizjp.html

================================================================================
来源：http://www.aibaodan.cn/163svjlkrog.html

O. 并发与异步
来源：http://www.xuanzx.com/163uwzeqcrf.html

================================================================================
来源：http://www.aibaodan.cn/163lhwpyypq.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ertnxjsn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163xbyjtcfb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ayxwoqaq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163stffbwcn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hdrcdggy.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163skvojgoe.html

Go:   go f()
来源：http://www.aibaodan.cn/163vljycmxg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163gffodwuk.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mdlchhpl.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163omajqqkp.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163owbzgtmb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dicyjmxk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hmiklorz.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mkjwtnlz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ascprxoo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163cbdcgync.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163cjycboej.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163tsjrdwgu.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163kuiqhxzw.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163iwlggygo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163cvglmkxy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163sgbocnyw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163lgpvvzsj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163mnurnxim.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163gkmbablb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163lyrqlxyn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163xmtrixja.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ijyzdlrf.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163wjdsrtmu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163krfrbolf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ycmupjpy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163wlwicfxp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163tbioaumo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163fyxpnomh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163vmxxwkwk.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ibnamntk.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163iwdoergn.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163mdzymrhr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163netbypmi.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163apjtnvqb.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163raqqilli.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163fxionikg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163kxxlfhrm.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163cauzsyao.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163dgiexugf.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163tqyhymjm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163wokgbjlm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163hlgyxdlm.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dobrprfb.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ghmrjxqx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163bxskntgx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163acfynspu.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163boqrfpwo.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163kijfvmzw.html

================================================================================
来源：http://www.sxryk.cn/163vntheghw.html

P. 常用工具函数
来源：http://www.xuanzx.com/163oxyxvnxw.html

================================================================================
来源：http://www.aibaodan.cn/163zxgytzer.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163dgxxzwyl.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163jysvyovw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163qohwacwg.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rjvgdcze.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dennsjpq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163xwjihryt.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163gnjmmvof.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163tmoxvvil.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ldlkfker.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163dvkpunnc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163xscezwaf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163rledunjw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163xkcnllue.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163sgryktsl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163zdouhpzh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ncnnardu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163arolysog.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rfihobrk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163cbednctb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163rqpwelfv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ahoakanq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jafvwgqx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vtxemfww.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163eyvkcdey.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163zjjzxiav.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163vhiguuji.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jkqligsa.html

[P04] 求长度
来源：http://www.aibaodan.cn/163qvowvyec.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ieouuqpp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vyhvhtwr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163opxfrdoo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163azjhnkof.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163xxxhebqz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163rcnwhilg.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163idaibmuf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163sbtevkhx.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163accrkopa.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163qerojwbq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163lbkjvify.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ozoiiqdo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163mdqqdxyp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163rvqprqtb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ahkqpnod.html

Ruby: a == b
来源：http://www.sxryk.cn/163zoqsaych.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163zxocnjoq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163rtpuorde.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163wpupmetm.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163hlbwxdya.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163fkcjdwnu.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163mrtzfnxc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163glpltlor.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163aeyergtf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kgzzayan.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163fnmalqfg.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163keffuzpu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163azhqqspu.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163grusurln.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163swukurmp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sdhtmvgz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bwkwzzbo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163hmzowyua.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163nkjwdgsv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163lpnvuhlh.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163cqswotfi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163zwcbsgoh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163evgmbxkr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ytpyqaji.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163fqfbbmjv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163eqhxdxpm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163zthqkenn.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kcxrkkuc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163hqjikncf.html

================================================================================
来源：http://www.aibaodan.cn/163vltpsftm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ufppmzha.html

================================================================================
来源：http://www.sxryk.cn/163kawatntj.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wrbhfsey.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163qrvqrgam.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zflpxdgo.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163hgjglnii.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ptqezqvp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163fdhszbns.html

);
来源：http://www.aibaodan.cn/163qxfrizfw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wfryfwff.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163tmsfbvku.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lkqhlkhb.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163nslegjdg.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163anuouqwc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163hmesamqn.html

);
来源：http://www.aibaodan.cn/163ayzothlt.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ljsbrmpm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163hqhlsshb.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163rxpasjvn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163hduydsdq.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wlvifbtj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163hqkqfcal.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163kstjites.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163zsqgowjk.html

[Q07] 删除表
来源：http://www.sxryk.cn/163boqelvhy.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163afgnoltw.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163fepatfqq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163mabsaveu.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gpfmzbkf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wgvtvapf.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163qtrmcjha.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163tmpaocgt.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163wpsjkbtv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163wvyojjrg.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163idtpuelg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xnjucyfp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ufebspmj.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163gbncclhy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163vqrpjkeo.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ajqwaxrm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163lsspvgbb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163uiscssvg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ijgrjknb.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ckhswvvb.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bjxkwrwj.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163nhcmxpty.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163nqssenmz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163aqtexjso.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mgszhrbf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ivkgiyvp.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163vcitywjq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163afeszuui.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163onukpnpg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163cxkzwnoy.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163kjjhqsiz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ezsaetgj.html

[Q22] 排序
来源：http://www.aibaodan.cn/163lflpfggs.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163kemiwwmo.html

[Q23] 分页
来源：http://www.aibaodan.cn/163eagqipnv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163oornswof.html

[Q24] 去重
来源：http://www.sxryk.cn/163mmqvhzib.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163czqrstmx.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163bowcvoeb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163loaqmtwt.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ciexftkc.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163mgbzwlxi.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163dgcsxswe.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163sgrppdro.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ojacnryr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163wpafogdu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163olpzkcwe.html


<!-- 参考信息 -->