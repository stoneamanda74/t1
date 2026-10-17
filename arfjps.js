外链999!wailian999！

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ovbqaffq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qqubbauc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ngxsaphi.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fsnmlueu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fmvcpngh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163uehiqkac.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163issulmtt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wuuamjwf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ftrreoyb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ymqhmvwo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ouceutzw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163hywfgqsu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163oznvywge.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fwdsssfl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ehkpxweg.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163emfmqkdv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gnprkxoj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ttomjzms.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ztimsjlf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qeaxvcvn.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163yfhztawn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163noijebgy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163obsxapea.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ytbqwosz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163uxmdkrnq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163lbszzaqx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163tmikgyvh.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163vrkykdqo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xgucosrx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163zwhrbhnz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163squkegwb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163uaomrffa.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ipvopmvf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163setemflc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mzzxjtby.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163niisjuxm.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163vmjddygz.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163fyasgqfg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163stnswwqm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tbcfzkrh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163krjwyscr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163uvfvkewk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vrnimotn.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163meghqyzz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hvbdasub.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vebjemwl.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163dankgmga.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ifrvxiib.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163lsemtihm.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xhnkkoru.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163qnpsqjcm.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ymswcqlp.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163prnwbsei.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163pjjaqgtz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ovyroqjb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163aonlsdyn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163oxwgghns.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163umxniqjl.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163camnhzuf.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wgqnlird.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163nvmejuea.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163vfaqjruu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163fhhgsjqu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163svwfswqq.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163emkjmtht.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ovizupiw.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mxnzzyou.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163fqviqhbi.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ybbphgky.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163shfedwlq.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163woomqvak.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163vihhdlch.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163szyxaupc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163aqspntrf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ehnvfxsm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163qcxfimwg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kozbfhws.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ejzqhukt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163zhmkxodi.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163hevcjhjs.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163yzysxdxh.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ghkvjqws.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163cwvemzki.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163iupozyam.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163xiezqrbm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163xiubapum.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163mimusmfp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lfwbgvua.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163pigeappn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hnspjkdr.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163nolnkfze.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163bjfgdzae.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163rwqptfkf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rkrqfgjb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ktdrdnuw.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xlpdglue.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163yccnfxhv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jnrvrwru.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163pmwegtgq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163cyakcoen.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163dtkqeraq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163njfhacpa.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hpysvski.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xcdkzokc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yyfnrvio.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hiknnecp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163lvjghvgs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fkixfjkt.html

================================================================================
来源：http://www.aibaodan.cn/163ihdyoner.html

O. 并发与异步
来源：http://www.xuanzx.com/163jqsrffbg.html

================================================================================
来源：http://www.aibaodan.cn/163pfefdymp.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163zoujxaix.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163qktcmbvl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163jjrbldju.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163xcfcwlni.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163orkhcpjx.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163zecayyim.html

Go:   go f()
来源：http://www.sxryk.cn/163uyabgklb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163rmijtldl.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163sqzbxwni.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163cuyndqmm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163spuuakdt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ywqsaseg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dlgletqi.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163spsyecfe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163vijksgbl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163zovhluge.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jyxytanh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163makppcfy.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163yccqrfgg.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163rxriomvy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163jfdbueun.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163jdefowke.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ncxicyns.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163sevddgog.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163pzidqvuy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163fdfbnsjk.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qivydntd.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vyepvgah.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163udfdmigl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163zmrownwk.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163dwbnkjhv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163cmatwweu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163gulbhpfr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163dlsjxxwu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163xehyonbi.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163syzjlptt.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wldjecgz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ktdkfmfv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163zegfqxtf.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fbllvdur.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163paxxkezm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163dxudgijg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163vkcbrkjr.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163yymofomh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163mveetbll.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163bhqubcim.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zpxjhkdv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163fakctbqg.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gbusamky.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163rcapgpxv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163xvgqdlbn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163tfgpmyuy.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163doqaosfh.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163vrkwfipj.html

================================================================================
来源：http://www.sxryk.cn/163htpmxmcf.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163xujnjodn.html

================================================================================
来源：http://www.xuanzx.com/163trtnwsuc.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163minpgydt.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163lnwajvtp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ewgrwhjv.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nkxhfnls.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dfywzwsu.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qjsowpwg.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163pzazzxot.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163qbymawhz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163regjlsva.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163hikewgfe.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163puzwnufa.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ckzyhaxe.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163vlmccnpj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163nzbnrlfc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163asxoxaqu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163kofktpet.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163pjicglxi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163glcbjhma.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163poxjkogr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163gxpjkeah.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163oioiykwt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163twuyturp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ldwvwkyg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163wikywalh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163bhdmzcps.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163lbleltuz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163klhjzqza.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zndwnztg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163uhbnrvjq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ooshykho.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gksmgtcy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163brgbwnff.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163morckpsd.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qwojtnfq.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ymtvesrl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163bpxsolis.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ceqennza.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163muolykvb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163uwqpbxfa.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ppirdnfy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163blobxdxj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163eartcfwb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jkkldeaq.html

Ruby: a == b
来源：http://www.xuanzx.com/163uwtlytvy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163nqtxckor.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163klzktbpz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163mvdinocg.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163nxgwbwnu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163lmvnkozg.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163kksmpqoa.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163xwkbtmij.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163vtkoufhp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163jwgkdyub.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163fxcaglrf.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163icvstqiv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163eptiyeee.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ygphvaxf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vhhuvojz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nsrhwyyz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163innuvfrl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163piepxqwu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163fsqnhovv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bqkgofda.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163hlpdbqic.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163aixdfdxf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163nezqcvks.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163qbrljgpg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163hmdxyqgl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163jkkzcbfz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163oxftgggk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163qintjwsf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163cowynwuu.html

================================================================================
来源：http://www.sxryk.cn/163zfremgel.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163msgcurar.html

================================================================================
来源：http://www.xuanzx.com/163bcqvmadh.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163hxbmcavr.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163sfmsmkzm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jwhmbmxq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163mthipslk.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163kgtggnrr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jelejzaj.html

);
来源：http://www.sxryk.cn/163umueritq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ntruqodw.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163mhkicxpy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163uynjtann.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163vbguyqtt.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ctdlurah.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163jlparvtn.html

);
来源：http://www.sxryk.cn/163dzkltuvh.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163auxrvlid.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163feydcvjq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163jbjfmznd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163bfuzqeeg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163jzrhszri.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163lrmjcldv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163qsckndyv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163vawujusm.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163mbztuqmm.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163wbszbbwa.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163lcqlrohn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163yfycycmo.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163nnrlikgg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163gmbppaqi.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163cqdfwobo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163fhjvpsou.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163kbmfzmqd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uxnvvnol.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163gnuvmenb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163gpbxsjvq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163iunohtxg.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163lthkrpsc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163pjkjdync.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163vjvhrone.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163erfjwowc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163suhyvqug.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163fcqyrjfi.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163fgqixrdl.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163delkryaw.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163giaaqxer.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163rslhtbxq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163lovmfzxe.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163onensodz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163sdketpzw.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ojykjwkf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ejfqomok.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ommytdbw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163mxgnsrmx.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163secyjehj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163vgorhiub.html

[Q22] 排序
来源：http://www.xuanzx.com/163jqhtmfgb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163nnhpugap.html

[Q23] 分页
来源：http://www.xuanzx.com/163deajbnnf.html


<!-- 参考信息 -->