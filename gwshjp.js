外链999!wailian999！

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kidlfzyi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163bjeakirq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ekpgyhux.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163xwtltsie.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xnijyymd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163fcslkqqp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pnnjduph.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163jprszyvt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qlkeypnl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lisbrdlc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vkmnkcvj.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163wxcjopuo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ctofyvmd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163dsamqbob.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163bnmhxnkz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163gkduqmey.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163fuzecbxn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mhdjwxhg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163tlkzwgwa.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163jxnhvzdf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163eahfafbq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163wrrnszzw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163swouuems.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163fiwmabke.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163sqxcodex.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163iuinzltm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qjpfhhdf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fnxazant.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vsegvfzz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jjflsyxz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qlawlvth.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163obfndssd.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163piksknyr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163zbcujwcg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163kwqhjeis.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gdqtexde.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qfunhtzr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163iqnppfle.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163skboefmu.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163cbkuxvyh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163peulbnxd.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163dlflinoe.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163lwwuqygb.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ctrobsof.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ypzxyvvl.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kamavxhe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163wpsfsfkd.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pgnvkwrk.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163dpuendqj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yjmeqrjy.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ckfbemjd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163dklnbdgj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ooljilvd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163vfvybpin.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163xvpqhurw.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163fshwdvmo.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163xdpxcbws.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163kugmauwg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163oeamysvq.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ltntsqde.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163yvcszjen.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163awbxyhgc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163axvureup.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ufqxjgcu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zaojdohn.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163unlmhrpf.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163olsezjer.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163hxlknwjr.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163sybpzwtw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163dayytvbe.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163lrtymnvj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163yivkigxv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163qhgahvpr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163adoogpmr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163jqavliju.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163wdmlzikl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163chfufbex.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gmgtshle.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163feoorzcf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163chtwxmdc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wblpfbkl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163itcuzxzv.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163uzavhdai.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hdefutvu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163csgjqljt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163azyqnvca.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ymlazcoz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wexzrgvj.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ogcjqnvf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163uljfbkjn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163eiwkochm.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ljbeafoo.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jvqfkgcd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163zeelfavx.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163kaxwdimo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ekvwiijc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163otblkpld.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163taeyoham.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ljpvioef.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wbpbkqlq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xdllfmob.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163pepnoxrh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163tyqeaeyi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163slnflttd.html

================================================================================
来源：http://www.sxryk.cn/163cbtwnumo.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ebrlabod.html

================================================================================
来源：http://www.sxryk.cn/163uegpgryy.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163tnnlejye.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163kdcgfabg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163qbuodsdi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163payrkztg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qlrwcczz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163lyqmqrro.html

Go:   go f()
来源：http://www.aibaodan.cn/163mrwfxnky.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163cybfpfre.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163vicofmnx.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163nizuqeag.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163zyattplg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163woevquqo.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xtdrqzcu.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jbsowfpy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163bnwdfxea.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gjkmyayk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163osxsqkxm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163lmiryqwh.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163hhxmfmfi.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163feijquve.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163dfkolknp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163vkkzkjum.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yrpwyebc.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ttekvfsj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163boraggin.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163plohwhtj.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163spiboaja.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163txhhhimk.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mujzapps.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163kekbclzm.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163fbmsxwfw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163tnotuzqg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163qyxrwwjl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nmwzyofv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jthxtdqj.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163dhxmgzfo.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163bwoqfzyi.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163tknmmcln.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163yalnjeti.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pzdcvxiz.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yxbuqokt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163fpzrvyfq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163bajnynfc.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163rajmfkck.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ohvlkady.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ykwrfjkk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163vsrdsdac.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163fnpfplla.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xdvumteu.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vaqxsszd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163pekvbprt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163fqafaloe.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163efjrtejb.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163trxdfgit.html

================================================================================
来源：http://www.aibaodan.cn/163aqipebuc.html

P. 常用工具函数
来源：http://www.xuanzx.com/163optxgfoj.html

================================================================================
来源：http://www.aibaodan.cn/163nfhbzujw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163wlusampi.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163fhpbakzl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163npuigyhk.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hjvdxyhd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kqnkpmkf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163oezaemdj.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ybyggvya.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163vhyzgnfx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xahbcbsw.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ahrxzrvu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163btzywtgl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163sukpukpn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163pzdysubb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163clvqktgt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163nteozcrp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163mqkwwzdq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ggluipkc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163zgslystu.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163berncaxw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163pupjmlqt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163odrzyezs.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tdygakaf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163roiczgzr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163oqdttayz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163zyzladfx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163nvnfybkx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163tnxiwobu.html

[P04] 求长度
来源：http://www.xuanzx.com/163lgyqozhl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163htitoqxc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wkezgtkd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163unywtrbw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163jjbkvyon.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163qzhvuapi.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163iaexiiii.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163dsqscsex.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163zjjwvyrz.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ujdyvqrz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163aeuxupss.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163znhgvqgo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163iavfzcoy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163polrawcs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163sccfundm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163fckkcrjt.html

Ruby: a == b
来源：http://www.xuanzx.com/163qmhkwgul.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163pvfcmzfx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163aouragbi.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163yekjuusf.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163dpjqkcvv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163feauddpp.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163nvdtnkob.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163kxbtmdue.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ombfspxm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163nrlqqjkn.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zbuyuten.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163buusawqn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ybjoukmr.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163perbrkcz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wufobzhq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lypwyjmi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163pgcdybgs.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163dnkmggml.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163pvbakfee.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163zmapolop.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163lshkwops.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ykmbqgeu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163esydqpol.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163bykmrzmn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163tyuioflc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163xislmrww.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163pjjujthb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zvvudftd.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163tzuwctst.html

================================================================================
来源：http://www.aibaodan.cn/163ejssvpyv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163wairfhfz.html

================================================================================
来源：http://www.xuanzx.com/163gchhtgld.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wrfhrmtm.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163talgtpih.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163lrdejrzh.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163kqoaatnt.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163eevaonlc.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163fshefzzh.html

);
来源：http://www.xuanzx.com/163vfzsjltx.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163awbnewpl.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ekykcteo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163renuqqgc.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163tcfrvxvg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163erzhyiyc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163buleijng.html

);
来源：http://www.xuanzx.com/163jptdugvc.html

[Q03] 增加列
来源：http://www.xuanzx.com/163nwddaslq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163wdtxinnq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163fbheykyo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163fxsudalp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163urjawxpw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163nejinpep.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ncalvhtt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163vhladnkq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ybrpdken.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163rascyupe.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ihahwjma.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163idfgrvug.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fpgqqjoc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xuahvvpw.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163mlmklcxr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163kiygzeuv.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163nmkfspny.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163idhzooox.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163kugyanhj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163favtcqwu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163zuwqukzr.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163aeclfarx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163fqifehpy.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163wvediqxa.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163mfohenoh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163zmfpicdv.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163xxesamht.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ytblaaju.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163tytfkixd.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163swqenzzx.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163cicjeovz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163bzxbizww.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mkszruhz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xgfdkjmr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hfpqbjks.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163gctglpkm.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163qzjlivgm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163exrsotdo.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163nytoaixu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163jnbcknlc.html

[Q22] 排序
来源：http://www.sxryk.cn/163zffchxld.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163udfutlbx.html

[Q23] 分页
来源：http://www.sxryk.cn/163tqvsmxxn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163jpgtimux.html

[Q24] 去重
来源：http://www.aibaodan.cn/163kbkrdhdc.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163bxqeoafs.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163esykfguq.html


<!-- 参考信息 -->