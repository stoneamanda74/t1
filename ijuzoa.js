外链999!wailian999！

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163hkruqroh.html

================================================================================
来源：http://www.sxryk.cn/163mbswgkpm.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163qhixyexr.html

================================================================================
来源：http://www.aibaodan.cn/163pvisjqdb.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gkhpxlil.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163nhtunypj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163uehpsxqr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jxqyzgko.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uxfyjkxy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rqnqiduw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163aqdiidnw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163sgynqfsq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163aedfjnvd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163gumsndie.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uznpxvbm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163smaelsfa.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hfzbmvdb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rxkggwsm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163iakgdiof.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163yhaibinq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jnmvhmkh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163aqyceuxb.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163mxvakikj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163lljuincr.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xbevsdxs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dpbhxdqp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hpaijlmd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163zwlkultx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ryaiemcn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ugsfmhvc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ajphlnna.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bphudiaq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163imihhnmz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163vcdflnig.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qealbbyl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ljqdrntu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163qcsnxqdw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163lpoqkesx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tsplgknk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163cvblnhlo.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163euybnwue.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163bvzyruoh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163tlwpsfoc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163chbpbtgx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kzaqacpj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zlcyjpad.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163gnoubotf.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163atrbiyhk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163xnlseqkk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163qrcylmew.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bmrnhbha.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163mfnecnck.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163neeklzpd.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xcaxvquo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163pgnpmlyd.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163yagymxkp.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163jmmfxgjy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jehifvco.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163hosmvfsq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163lkvmphig.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163lnqkxdjh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163didvytmx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163wakalnmq.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163kpwarsar.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jpsevznw.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163vgqfrpno.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163jioavwbk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ycvhxtwo.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163bshvyrrl.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163cnaosbbj.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163foqygyyr.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ztupuxoz.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163pauntkda.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wlwffdik.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163kelzlcby.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163hxdimrvc.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ifxgubao.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163fsocwbbf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163iftfsjic.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163adqbmqhf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163gkwlcleq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163iknrnnng.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163wwqqcyur.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163txkrtlnq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163gmihxeyy.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ncphlihv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kkbmplqu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163pogomdan.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163zehvyzxk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163fcqtlhvi.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163wymuhvah.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qasqepyj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163thwkdpik.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163idoslkes.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163gqekrjzr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163eeqbmjbv.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163uhkkbsgf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cntykghq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nwypcbst.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163hhajkbtl.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163qpodvkuz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163cjqaczjp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163cifxzvqg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hqtzsxra.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163whqjuwfk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163kmergbmi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rticahdp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163brxasryr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163scvdahrn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163pyxfbylp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163abmquwnd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163froaetus.html

================================================================================
来源：http://www.aibaodan.cn/163tebgaose.html

O. 并发与异步
来源：http://www.sxryk.cn/163sdzdsmnv.html

================================================================================
来源：http://www.sxryk.cn/163cxuteguh.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ceussuqj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163gwhtpkkf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163nbsdtqav.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163trsswitw.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bmmiagck.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163hkgauumc.html

Go:   go f()
来源：http://www.aibaodan.cn/163vzzhjcga.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163qkjowphd.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163dgkbmbuf.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163nkemxhrk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163gtbilhsl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163bcdumvvx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dphskgmj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163cyivefqd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163avsfpfyw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163lvcdlpgl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163nuvxegxh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163pgyjhvyp.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163rkchudvc.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163umvgjwyx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fzhbeksq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163dlsjficy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163oyfsyfqb.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163gidvoutq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163vtymxmiy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zocctscm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163itpkvcaz.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163nhthzepo.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ydwkvgwm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163vntzvjbk.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163edujyiqc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163xfqkbbhv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163bxjvwlrm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qulwlzpd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rgekwxee.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163bjjzkbea.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163fxzcvuzz.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163xqdnugbk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163evzgilhm.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wsvxrvie.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bgzkakih.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163tgytlibh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163rmfqymrd.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vwdweznj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163szyhhsss.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163mxdnyubx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163aaypzbvc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163wzolyrlg.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163uofrgzwi.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163brwbrget.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163salwpalw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163mgoeqjfp.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163wbimwasc.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163hzsowvyi.html

================================================================================
来源：http://www.xuanzx.com/163trjacaxw.html

P. 常用工具函数
来源：http://www.xuanzx.com/163qozuvtco.html

================================================================================
来源：http://www.aibaodan.cn/163psaibxig.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163boddoich.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163lbrhbzxo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163agkbaijp.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163guqvqrgb.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pzsicfgx.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163qijsvtjf.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qbstvwqf.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163eurpadfh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163hjffyadj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163gaqelasr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163htowttab.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163vqmhvudt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163cakthwax.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163svlzhajl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163kjhoetgb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163gvoyxhjb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163yepazotx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163esvezthm.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ztiufqgi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163zzpqimbv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ofwiktvq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qmnvlcip.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163fynyzhkq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163meaqgkkx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163akqazziw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163qhecomow.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163fumlmoqm.html

[P04] 求长度
来源：http://www.sxryk.cn/163upulnhfd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163wkjholwh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xtsqfcaw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sxrisngi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163eecuwcia.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ekgpuxmy.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163iirezshf.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163iehlusnh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vsictans.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163hhldjadt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163foqcpwgm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163kdrjhicb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163mswpbiuz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163uoycpgqp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163mjuagflp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163cfzinifu.html

Ruby: a == b
来源：http://www.sxryk.cn/163uqwhnguq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163zxczehnc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163hccquxod.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163wxdbnesq.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ktyuyvic.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163icoxwutq.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163qblsbyst.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163opkrcdrt.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163cnapdbqe.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rbsbvxfv.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163gvgcehud.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163fxlxeegs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163qvbpqhvm.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163nlundnna.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163sfppcnut.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fjcpsumk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163yttuqsff.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163yaomtkrt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163yanxqazd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163vtkzthap.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163kklgwttg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163alvyjuly.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163dtoohqfc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163sfjedfzb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163eejmxsgm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163eyceuwkv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163vjfcvaho.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ynkwymee.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jgsdawsf.html

================================================================================
来源：http://www.aibaodan.cn/163rqlmyepu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163kvujtqoq.html

================================================================================
来源：http://www.xuanzx.com/163lmxkzlns.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163lozmqbeh.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ansovbqm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ekivxtmo.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163bhlhqfub.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wsrwczzg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163snysnshh.html

);
来源：http://www.sxryk.cn/163ppijoxdr.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163oprcpkro.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163pulssxpu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163czfiplio.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163rijbgvjf.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kvkwrngh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163rvtqsmmm.html

);
来源：http://www.aibaodan.cn/163uuvflvag.html

[Q03] 增加列
来源：http://www.sxryk.cn/163cadfoxkx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163owflgrcg.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163omcqpzgo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163lbiwdcpt.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163cuqplidu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163mfiaavmx.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163waeyfqfx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ctwzgevf.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qnbfftjb.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jshnxfon.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163imzejbvj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163hixbqcyo.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163mzncsfnk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163tgibrmks.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163jpljnkqo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163hejjpegs.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ufvrbjac.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163oaleeuol.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163stsjjjxd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163agufewwx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163czccyruj.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qyxtztnw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ympkqiyc.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163nadifvrn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163aobmmxst.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ligvmkls.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163gsgjlqek.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163mygvmwkc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163fzipinnz.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163vitdoojk.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163eoywjquq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163brvvsljm.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163nfhweobx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hsegfqbg.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163myhtskbq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163satcsxkm.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163irgsptlu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163pvtdcyuj.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163nbqkkftz.html


<!-- 参考信息 -->