外链999!wailian999！

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163toqavwxa.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jpxxlupi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163cyyakpkr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xoxzcnky.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163iqkvhhad.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ryvltsqd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163jjdhynpe.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163gblcnwxc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tdkftlak.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ngemxnmt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ukmjgglz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163tqxjthlu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lzanzqvi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sjhqbboc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163lqjrhrba.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163eagwhxlo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163knrzzvuh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wxmmvnbm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163jpdlifma.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ypzjuzii.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163swjnvfaw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163gqgoerwz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163usuryhrh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163felpvgnw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ldhslroo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163lgbcoylu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hqprceub.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163dduvcdde.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gperhvjw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163astaaolh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163liouyvvn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vqzwzaji.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163phiwmwbp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163svbexboz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zpieiips.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wxmdmakv.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163lvibzkpr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jwlxprjg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163rofstypz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jjamjcgg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ssahioam.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163kzgnwtml.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ulrwhsjw.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163frzpscjs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163cqikcaja.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163wiodaprf.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163dqerilcr.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163dntypxqy.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rqbfyaje.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ijoexzik.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163oixdkiqv.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ctwhsqft.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163oraqxknf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zhnaigbp.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ugngzflq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163zretmlsw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163xyppznls.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163lnxurddx.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tucpjdcr.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163pcfdicfh.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lojtsvyi.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163kigcifan.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163aeomhafi.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163xkducchq.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163lshkmugj.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163iqkbxlxu.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163aoqkjvow.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dbjzlfpv.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163xfaiarvw.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wlwokeod.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hcwpptgp.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bzbgtodu.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nbhtonsj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163vrozxaic.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163sbvmywmv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ldngzunr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163cjeovtkb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jfwqutau.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163gsaoyliw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163oewizkxs.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163cxzhqatc.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163gbeeocim.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163fvxvktco.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ckdsgnin.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163aqjwinjn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163nowawjke.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163jkwdahoh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163akydymng.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163sytiuofc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163znenoayv.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163nedxxtig.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163mwikrjfq.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163mjogbeyo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ancrbtol.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tcnxytvc.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ijsuwwiy.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ewksmani.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163mwqyfgbu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163eevugudh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163qgkdbtrb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163iuufqmec.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163dxltwfde.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mibuyqse.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163upyhryde.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jyedkaea.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163secmhpui.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163neyyolwb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wvyyyqll.html

================================================================================
来源：http://www.sxryk.cn/163gxstznxi.html

O. 并发与异步
来源：http://www.aibaodan.cn/163eflwnyhy.html

================================================================================
来源：http://www.sxryk.cn/163agzcdere.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ciamnkua.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cxnoxpum.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163fjxvjdzk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163vvbonugs.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rzyumafl.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163fvcimufc.html

Go:   go f()
来源：http://www.sxryk.cn/163trysubae.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163oldzbhmw.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163hyqcwjys.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163sohvlvbr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nhfszbwo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wfcdagut.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lpnrmozz.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nnklbeiw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163rcwwcnsw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163pzqhyfxr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jyzjxwxj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163gxwjrwkx.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163jlgdidli.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163erluxvwt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163idqfwlpv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hnetsesf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jpcwmrrj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163csqivtih.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163hkrgbgof.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163bqivfevl.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163iovdqidw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ykxefpbn.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163lopfnmrs.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163gzbgiyvn.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163gpvwqtts.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163tprtqine.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163byqwajhk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163dcyzwfys.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jpovcvag.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163wyoawaiw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ntbffuis.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163oqsvinbp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163wsstipfw.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163zreowfju.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163agethtpv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163kfvitkhy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163mvbosepd.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163egmpbsod.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163xbrxokoz.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163fvcobntw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163sqhdqmld.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163nxbmxlar.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163bzojizuw.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pycpkydl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163uhovjmmu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163dmrphoiu.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163arnjtcse.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163shfcflba.html

================================================================================
来源：http://www.aibaodan.cn/163wsnaakuw.html

P. 常用工具函数
来源：http://www.xuanzx.com/163nvimliks.html

================================================================================
来源：http://www.aibaodan.cn/163wtquvmne.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163gvslfurn.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163mfusjmci.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163xcqyfumf.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ycsinrkv.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vtdscaoe.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163arcztleb.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163mjykjopz.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163thldnxuv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163eowwzzak.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163rkhvbqzf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163zugqukjp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bduwcnxq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163eddwypfd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ukxkktsv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163pnwcfvrv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ndirpuym.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163rdralrum.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163leslgskz.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163hpahshfq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163xsntihrt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163gfcjwlib.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gxojwrgn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vkamlcxo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ytipzyqo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163mmgbvebh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163tevzqwrl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163dyvesgxu.html

[P04] 求长度
来源：http://www.aibaodan.cn/163mistbdua.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163yfxfxquf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163yanofqmq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fycqasoo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163yiuaefzg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163jzadphaw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163rdykbprw.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163gelbpall.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163fijawwrn.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163gkyglkqt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163neabuyfe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163bmfqnnti.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163uoizhxoo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163bzjzonfo.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163dozffxbd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163eqsnjxkv.html

Ruby: a == b
来源：http://www.aibaodan.cn/163adxovmhp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163bkljmbnz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163yaudrexk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163lqlnnjri.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163yxglcvhj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ocliowng.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163mgvukmuj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163gjsrsiks.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163zxfphtby.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163hlmqeuaj.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ytgakmqt.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163kgibpkiz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163cilnrxsn.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163nouiwnqc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163otgbylme.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163sefhssjl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163aswaeaxz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163zxxkeqwr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163hxrthoce.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wcjmfyep.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163xuvzatgj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163kkrudhsd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163wmhvdday.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mdcitifi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163khejqeac.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ojxafmqa.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163gczbucom.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163avfvebwx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163lyfbciyj.html

================================================================================
来源：http://www.xuanzx.com/163avveylea.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163iithcvqj.html

================================================================================
来源：http://www.xuanzx.com/163qbpopcss.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163cxshbuzk.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163irwcpotz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rqslhkjl.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ijqparol.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163cmutrjoo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163vlezihlw.html

);
来源：http://www.sxryk.cn/163lbsigxlp.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163hwhdqeoe.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163yhqxognb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163phligjty.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163npwqwees.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163tncbchjc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163pvkepfpt.html

);
来源：http://www.sxryk.cn/163fwqshsdd.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163gcsdmfnc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163uxnyapeu.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163tjoqrvmw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163yweubokb.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163jibivkom.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163zvnbgfpp.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vnomjlxr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163jxsycjun.html

[Q07] 删除表
来源：http://www.xuanzx.com/163dtjfvkfa.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ddqnvvie.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163qmwsjlnb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163opeksxjv.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163pjvwoegp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wfkirscz.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163rjmieaac.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163subinyfg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ijecpuhq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163vjwhbfot.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163nwgodnbk.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ozfkwvft.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163bsrsnbpf.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163owxgegai.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163rzbfvicc.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ctbtiivx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vdtydnew.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ojfsxqiu.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163jfawkdad.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163fwpqvagu.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vnzhbryn.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163tnxxzgyw.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163aibqqcws.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163yslznbpb.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163trbfouvx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163fzaphpgs.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163abdjmdxv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163noctyzyw.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163pijxtikx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ukibgmco.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163biuvniiz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163lviexuho.html

[Q22] 排序
来源：http://www.aibaodan.cn/163wubcmzds.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163luakmfut.html

[Q23] 分页
来源：http://www.xuanzx.com/163nukxegrj.html


<!-- 参考信息 -->