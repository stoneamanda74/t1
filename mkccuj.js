外链999!wailian999！

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163naytwzor.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163dvzgooqj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163jzmixhst.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hsbrrmlu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163gkxutamv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ghcrwakt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163zfftbzke.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163epnbgqww.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163yddntstu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163tsnazhbc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zwdntmjq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163jorsjhmr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wasxojrp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kqogrhoc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qzmpvnlh.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jdqoswev.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163cqtowpal.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163huegoepe.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163lhkzbqtj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163gbjxcqse.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163bxtvpkeb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ttoxhupn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163imjyrxth.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163bzgqktvt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ogozcepj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163dbupltxm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zcdxwihc.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nbtinqgf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163cnendjpm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163khqtykwc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qvrplxix.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hdntbycm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163cvlhmmhc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163dvcovyje.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163mhiqdhnb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ihahzjyb.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163enhebwhu.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dswcxazl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163hmkwvqxr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wueptysv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xrdpozeq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163uximdgos.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163rwfrsdby.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ilbjygff.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163djfhelde.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163wewmusbi.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163hdrraipg.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163vjsezcey.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mdywldbn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lxqyofbh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163mxbeeyiv.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163gcobskjv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163bhwkzzlh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xjyutacp.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163rqtxlrxp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163oennxfay.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zlkitulb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163yqqeqetc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ioczgfah.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163fwrtvlju.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163idijgnjp.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ugbrskhu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163xrynzvqc.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163exxjxpuy.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ntbkmlgw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163gysahnja.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yrfazttl.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163adonnrwg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163fxdnwktw.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qeazscdo.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163tomcyvxy.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163vfgsowkn.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163zlytqgpl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163barylyef.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hlwntkdw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jfebgwfz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ykncadsg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163kurwhwel.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ccqmweev.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163xbdagbow.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jbnovduk.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163rumpeyvu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163jbippihi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163zbbugorp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163lyeftdgp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163riuxepwb.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163llcfhkzw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163sytnzhak.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vxmontbx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163jfnpwsnd.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163nbfrzfip.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163jcoavwtw.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163vwsehdew.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lbffrpkc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dwtmzdkw.html

Java: // 手写递归
来源：http://www.sxryk.cn/163tpqehtls.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163npzwhzjy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163onsyceys.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163khuhhnch.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163muwnfpvk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ljnanqvk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163gbixersr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wnritztt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163isrlrrth.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dcelsuce.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163bnpnkrfa.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163desheewy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163oiulrbdt.html

================================================================================
来源：http://www.sxryk.cn/163whuglawg.html

O. 并发与异步
来源：http://www.xuanzx.com/163bqubqcqf.html

================================================================================
来源：http://www.aibaodan.cn/163xmrbdmdn.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163uyuspalb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163npnmvxdd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163aqkkhesf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163yyiksizs.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fmsgxnvd.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163qyeqerzf.html

Go:   go f()
来源：http://www.xuanzx.com/163nnbfnzyo.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163yfsogfra.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163gftneeun.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163rkxklebe.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163tynigrsx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163zbbregmr.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hzlbfrya.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163iathadeh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ixiwhgtf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mcmpbokx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163dobaxgrv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163eekceeyp.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163cmxufpwx.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163vqdrqfxf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163dklkvcpw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163jreozseo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ayrcldeb.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163cbmcqksr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163spwkbgwk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163llcwrkfj.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163zmbqzgvb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163unejqyly.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163lsvtjsox.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163cywezndd.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163fgvzznul.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ilmnruum.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163nhqtrezu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163htiayazz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163igkwgjqb.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163xqjdzczr.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163tilcjggm.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163cipiwlff.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163hnntytgz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kolkotaq.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xumqmjwf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163hivsqyhg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163lsygvzib.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163suywooda.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163fygoowwj.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163xpiqkqwv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163equnxhwz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163polwubwp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hxcczpez.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vijwdgij.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ausosodp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ejseeysr.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163pdnptnan.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163zfwnkpfn.html

================================================================================
来源：http://www.sxryk.cn/163mwdoipmv.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hgkhwuhg.html

================================================================================
来源：http://www.aibaodan.cn/163xdwnbjky.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163aiyitzyt.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163kevuccsn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163bhvnptjq.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rksgbmbf.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rmwjzyvn.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163vfdrwgwb.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fwhivtyk.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ljonoxzr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163yyfzmggk.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163tjrabaau.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163paqkyfhy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163qflpbozt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163laivxdwp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163llcnaziu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163pvinimjt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163rpbcjyze.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163pvjnnqbs.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163jlkcoqex.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163lvhwvxno.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qhpxspse.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163vblgyoir.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pjcjgall.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mehwuuja.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163faxchlkj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163irblhtay.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163cppyxqxp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163eftvnsza.html

[P04] 求长度
来源：http://www.xuanzx.com/163fbfhhebp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163astadhsi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bqwoywbj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dssccuei.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163crztbvie.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163gapeyobu.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163clyfaxeg.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163jgvpfair.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ivjcsfes.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163sujjkbkk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163lrsyiejj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163fidysisu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163iaemhvmt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163vlmohbcf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163jidneijn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163njmxlape.html

Ruby: a == b
来源：http://www.sxryk.cn/163uwsatgan.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163xmhahuba.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163hjnpxqrd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163uqbgrkls.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163qwkintao.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163kveuiwos.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163thgpcglf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163rwpcqnvr.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ljkufclm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wfoqnhge.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qqxylwxd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163nwpfofgp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163bmmtyhas.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163pztjypzw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vtwxldgj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163oxtmwilq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163pmjoqeef.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pyhxqccp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163gzymdvrj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163qhkldqqu.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163rtcmjtlw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163iklqdtcc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163mjngjhhk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163dqblokjs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163bsdzgggx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163byrxxaxx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ewtzqvnt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ljuynwyt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ieqwohrw.html

================================================================================
来源：http://www.sxryk.cn/163eqftntey.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163tutcstvt.html

================================================================================
来源：http://www.xuanzx.com/163zvxrodwg.html

[Q01] 创建表
来源：http://www.sxryk.cn/163apwfyprt.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163tzhrjhvi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tdniltoz.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163sfmodkuz.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163qeqizkxj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rbaksmpz.html

);
来源：http://www.sxryk.cn/163xhkvakek.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163piizuwjy.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163vbxpwcar.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fiqfmzej.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xupielhj.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ibhicfwl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163rhtrbwll.html

);
来源：http://www.sxryk.cn/163ycepelbq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163pbqdscqi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163bntwrpar.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163pluqgneu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163gvihlroe.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163uyifsgdp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163mvlsduwi.html

[Q06] 删除列
来源：http://www.sxryk.cn/163kwttmyea.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163sjvqfuyg.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vtzhkvjn.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163dnloikts.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163dxhehgov.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163leuljeeq.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ndsmfetk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163pjbtsvll.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163nrnywuvt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163qgtbicaw.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163nwyaqbtz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163tgcifair.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163kixyyozj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163afovgmoa.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163rnjmmjme.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163gihxnvff.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163idcrdhhr.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163jmbhetuk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163inpmkzgd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163kauuuebw.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163xnjpbgox.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163mbygxmtq.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163khfucyxw.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163vigknegs.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ghcfpppd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163mbibpymb.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163zzsfebbf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163dbskirdl.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163pneyvrzb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163yxxxcyxg.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163tmzmwluy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163qlcavusm.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163oqmbfvwp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163gxxpxuzs.html

[Q22] 排序
来源：http://www.xuanzx.com/163pzbwbdsp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163gqjaebkd.html

[Q23] 分页
来源：http://www.sxryk.cn/163gexbxhbg.html


<!-- 参考信息 -->