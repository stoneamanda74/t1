外链999!wailian999！

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wfgrtouu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163vtfibbei.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163nwhqdmtx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163fdylywqo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ludzabyf.html

================================================================================
来源：http://www.aibaodan.cn/163nicebqub.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163apcuniad.html

================================================================================
来源：http://www.aibaodan.cn/163xgvgipjz.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rzwzyyqp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163widvfstz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163impeemyl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kkqyygzv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163eiwefaxp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163gwgohjxi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163okifagod.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163hxxxqcaf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163wbjzyajb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163aajmwdbc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jusrgxal.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163jevhtyil.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ledpvyef.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tzzqkycf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163lswyocjt.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163yhvwlsij.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163oemjdkgz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ahwrxrxx.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163dzausbfn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163kdiajgxp.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ztvyjxtz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kdvickmy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qmhuoebf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163qssutcbk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163oeblozip.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ctjyxczh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163adnuuhch.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163jtvxffcw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wyctfwss.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163yxdfphag.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wmaletaq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163omfxtjty.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vhzjsgvl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163nvrdzdun.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ekcedvmx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163fowgpimo.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163zhxxlcyl.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163goemlzrq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163waffwcfv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bmztpurs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ovjianzc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163kzvsadhd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163vtzmcrnv.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163jsridtqg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tklxuoeq.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163fwwqqqpn.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163umhououx.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163reriwuie.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bvcmekui.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nszthqlw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163okqwatfn.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163vqjbidya.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163sstxfybq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163eusljuye.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163jdrugblu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163lgamhurl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ovqhfgqy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fwtdrqgi.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163regsbpwm.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wdiukizm.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163srkbnkvt.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tlyrazzw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163zhlhoins.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163obhqkgcb.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163yqbaeeau.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163kjivvvxg.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hefmwpmp.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ywtwkasd.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163efnvaecj.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zgbmaufh.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163cjmaahnq.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ptvfwmbz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163xvlmobqx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163lgnucssj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163yelbzdld.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163caeymkpt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163rssyloec.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zkagqeur.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163scnzkysb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163wdvmsybj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xqswcsiu.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163zllzihgk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163wrwheyib.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163dyrydsgf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163zlvqklul.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qmeeccco.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163umggdgep.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163txwwfrdy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163oddwfjam.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163kqzrydbf.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163oojpqwhd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163iutrqvvc.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lurgiffq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vvsfhseo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lraqfiah.html

Java: // 手写递归
来源：http://www.sxryk.cn/163odyfxskd.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163jevxbwno.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163wmtnqhyj.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163hyopcwcq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163qhuwuivl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gxpmvomb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163wwcebekv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ndllpxwd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ycqrbdtu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163foaryagm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163cxqpuchp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163owxonbbb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fiedewev.html

================================================================================
来源：http://www.aibaodan.cn/163uflgrauh.html

O. 并发与异步
来源：http://www.sxryk.cn/163bslzgvdb.html

================================================================================
来源：http://www.xuanzx.com/163sgwpdmce.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163xmtdgdel.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rybifavg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163hdglckbh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ozybazss.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bfiqybwn.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163heupvowe.html

Go:   go f()
来源：http://www.xuanzx.com/163wtzodzku.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163vwowetcd.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163hxjolnre.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163dlpbrnjd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163tzyykwll.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ycljfsnb.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rjvxdbos.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uzlkyryr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rbbscyiq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163joqqfbva.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163cyqtukgj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ulrvyuxc.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163xkqpumgt.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163vrrvvmxi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163woovirno.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163pmdlpqga.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163heqjicee.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163yoghnnut.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163expbjkbu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163jfompzse.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163sikgwxgv.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163uqmatipu.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ndtzcyle.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163haaqfscf.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163wkagrjjk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163cmxpjykl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163gjumbuvf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163yekmqoqw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163fwyzkcth.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163kgrddjif.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163cvplsryb.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163iagxujbd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vfsfybuw.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qmzcrmcy.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jjoztgbt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163evrupidm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ygptkers.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163oonnecnl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163hjusgtja.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163yfrkqgpq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163xakipbeh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ispwezah.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jfzdrxub.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dqknyliu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163bgerlvuz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ucekjhqw.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163qizihdwl.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163xfrgiokd.html

================================================================================
来源：http://www.xuanzx.com/163vuufpmmw.html

P. 常用工具函数
来源：http://www.sxryk.cn/163phtlnwib.html

================================================================================
来源：http://www.sxryk.cn/163fyzbubcs.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163fmyemmka.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ztbhhvdd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163nqmsfmbr.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pnubxptr.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rvymazuv.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163gzmicniu.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jcofrstp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163jjwskiqb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163fcfgxqsw.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163erkxqqss.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163jssqadoi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163zmxbugmc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163vaijkixd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163iwhzagpf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163sxopobzj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163bonfjnuc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163fykgsfsh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163xqpaarmo.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163qhmsyrco.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163cgvwohfr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163tvsukpns.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pjozgsyf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wzmpwwfe.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163riygrvww.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ktriqwok.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163czgbpcmu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163dfubgaob.html

[P04] 求长度
来源：http://www.sxryk.cn/163ylrhxfka.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zsywyuoo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ottpcyuv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cxvwdmcw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163uemqpdzi.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163vxiaslic.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163arhtdjkl.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163nbdtxaqc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hmimrogf.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163rfhhvkcj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163blltqmfe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163csunrjta.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163jwevwyfq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jxorggjf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163mcidqiue.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163fsyybngv.html

Ruby: a == b
来源：http://www.sxryk.cn/163bjevnkvy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163okphtpvp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163apvhuqtn.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163dsupeeoc.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163bxtjtqsy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163oziqssqt.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ttcehcuo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163igcbgzee.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163qrpbjsfi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ffdtvxpb.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163lficirua.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163rasicjbp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163qynmkunn.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163eldoafqq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gumttcfk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gdjyrrpt.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163cqsknnin.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163cgrtblqa.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ovxwzfhb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163xgwbierf.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163suutpamb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163xsuftgod.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163muhsphdn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ydpolien.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163fvskdfzq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163awyyaiit.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163azztfdxt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163jbffliwc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163vflakyqe.html

================================================================================
来源：http://www.xuanzx.com/163aqlhwqbx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163dgutiume.html

================================================================================
来源：http://www.sxryk.cn/163eigdxfxk.html

[Q01] 创建表
来源：http://www.xuanzx.com/163hpiaoysd.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wneaheqx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mhkvtkeh.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163zoyzjpcr.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163whjixngh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163idavhtky.html

);
来源：http://www.xuanzx.com/163elrgnkmv.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wwkmxasr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163elngaduq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hcfjplpx.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163dtcxrvjq.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163vuixzanb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wlmjpfmw.html

);
来源：http://www.xuanzx.com/163bebhplbo.html

[Q03] 增加列
来源：http://www.sxryk.cn/163fgeabpuk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163zploywjq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163zkqrchko.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163dbvbuqcw.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163pldogvdc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163mselzcvu.html

[Q06] 删除列
来源：http://www.sxryk.cn/163oybplney.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qppzjdzr.html

[Q07] 删除表
来源：http://www.sxryk.cn/163iagbrkee.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163isuuyfok.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wcolpndf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rwdmucsm.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163xaodozpp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163yakuwmrs.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163iaqdeacr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163xlirxryb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163prnhdtaq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163opbglmdg.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163svzjpgrl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163wurzarkv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163dobqwpfs.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163utlftlfi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ckboamgy.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163cxlgknxk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ubmbslue.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163rlgwtbli.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163oettxtmn.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163vdlzamsv.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163qlldrsah.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163psmfwyqv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163yzbkywpo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wzhzokkc.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163zwqiaasi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ygcnyase.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163qkibqkfo.html


<!-- 参考信息 -->