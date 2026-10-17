外链999!wailian999！

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cwvuxsby.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163dudkiizk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163clyoxlox.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163toequtzf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163xifclnfz.html

================================================================================
来源：http://www.sxryk.cn/163vhknwhiq.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163kitqoojf.html

================================================================================
来源：http://www.aibaodan.cn/163jstjenop.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163tvscpwll.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163twmhcncu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hkkcwkzf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vxxhbrhc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rvpqwyac.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qjcfodzs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jjyhfvxj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163zoacoiqo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163atysalhk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163cmdmyzss.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gzgrafif.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163yteplwfk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163txluzryj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ragazoyf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163gvxmleki.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163eilpzgnk.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163itnlrvub.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163txurubpu.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zzlitbzt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163gdrpkqqn.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rtjktmnx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163hsaeodsm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ggupdvgd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163wflhcydn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163gaikcmxn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ocmwncfx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163yfcnjvjg.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163fraqozih.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hdjgnslm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163iammxjkp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ynzzwldp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vlulhght.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163nfawupzj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163saggjeal.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dyxznuni.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dmucvmfh.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163zbaamzwq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tzvtvamt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ybcwsges.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163knqhccoh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163toaebytx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163aaifioud.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163hxhrornr.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163hvrdeukq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tubfnewm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163etvoenmz.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163jgpevqzh.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163rlgqvotp.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lwoowamv.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vfalmfqo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163fnaxrhem.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ltsxdlci.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163crznblym.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dsdcpcoc.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rrjqyguu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ypvzqsxo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163wqjtallo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rfqrmmpp.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163cxkhubae.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163sudljkjj.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ifmkpyvs.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163wwjohvkv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163znlvzxev.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163nwkwxsdg.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163awvezzmh.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ixbnpbvt.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163utoyipyc.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mihewmed.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163tdzzpqjk.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163eedijuln.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163gxiqfxld.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ocluvasn.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163pytbskqq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163oytgwuva.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163lewfmwko.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163esoflsdh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163cgiomtnn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163fwgebzhf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163gwdkvstx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163pjmnckvw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163tbfupgzg.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163jupceadl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163gpzwovuq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ovbvomsg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163hopeelup.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163gwdzifst.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163omlvdsxv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qgorraco.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163agiloojk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163afjyeiin.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163pgqalmnj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163rmjoiede.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163rjvgpepa.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vbfvdnst.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163seklrzgu.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ihymjxlt.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dxstkbyw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163jlulobrg.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zeqheeou.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hgtlhtcc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163paupluaq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163cujksenv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rkhnbjen.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cpbagotz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dxxrtemz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163rbdxubnd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ivcwznmz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ardoddhh.html

================================================================================
来源：http://www.aibaodan.cn/163evwlwbos.html

O. 并发与异步
来源：http://www.sxryk.cn/163uhpeqrmv.html

================================================================================
来源：http://www.aibaodan.cn/163cmmxbhzw.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163lbfdqchb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163yjumsnbg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ytmgafwj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163glywlilh.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163awehmlwp.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163rkicddhd.html

Go:   go f()
来源：http://www.sxryk.cn/163nbkeoatl.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ipxwsdbw.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163sbpfjmwa.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163fkldrfxm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163yhmqiksg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163baxprhnt.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mfprozil.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163efermube.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163czwvbiwm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qubbdbzm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163rkqshzqz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ywmivvcb.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163fnqvkvzi.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163zezgouug.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ogcneueo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163toysfwpm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iuwcqklu.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163jhhjwwef.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163runaxkwr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163zaqrocuj.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mljvutrg.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163kvlttrci.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ejhbavpv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163kgilmjpx.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mvjxkais.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163dcofmzzf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163qefacyjp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163uepzxmte.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163migkcvbj.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ogfwewid.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163hgpcijjh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163eggnntgy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163anaclkvi.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gqlwiktz.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fdsiglih.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163bxfgjlae.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163quywkqsk.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jnvqiwgf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163uuzmklpq.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163wvpeivji.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rexpumth.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163llpbmvbz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ekpespxj.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jovlcrlv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163btwpofqo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163sjpuacjg.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163wzxjgpht.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ewgoarqj.html

================================================================================
来源：http://www.xuanzx.com/163ficjzeir.html

P. 常用工具函数
来源：http://www.xuanzx.com/163qupvarbq.html

================================================================================
来源：http://www.sxryk.cn/163ymfbalsa.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163tvtnooyu.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163rfwtssfr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163zqultzsz.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163orondume.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xzhobbws.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163brdgywoy.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163hslxsgpy.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163gouffzkj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163rnpddwvq.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163fachtrda.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163hchsaxks.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163zuqgmeoo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163rzztoreu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ftjskawh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163fzilinat.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163oqofybxz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163azbpnpqb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163fmuiakcc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163uuynqqtx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163dmrzcwoz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zfyzrgpr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163nmsgyzge.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dqscypqp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cjgussum.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163yigncvfk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163pbheqloz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wegltbjn.html

[P04] 求长度
来源：http://www.aibaodan.cn/163tyeuqslv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163vyuidosk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pzekkqeo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163sgyugbhz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lmbcilhg.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163fybpsbup.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163etddpffh.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163tgqvnqef.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ospqdpfn.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163fuaevhbz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163zgauxvkl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ocbciwxg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163sucxoruz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163sgezsoay.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163elimquss.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163pksiajbd.html

Ruby: a == b
来源：http://www.xuanzx.com/163jllqyoyl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163spgthlfx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ldxaveug.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163otywbjqq.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163fjznntlx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163krzwjrup.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163wesvgjzn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dvazyeau.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ocewcjbw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163uvrnqjjx.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ovpfdkmi.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163cykykqlt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ywpbtdsz.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ctkzjqei.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ymhucsrb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163puxbjgpx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163gzodexmq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163osdwkqhr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163dqrxxcvo.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163hwkvsxdg.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163rsvvpsna.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163yzlbquqf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ovbsqocy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163divrdsmd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163agsqqjsw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ooweprnf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163sgjuyxyy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ytvfgdxv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163snkjxezq.html

================================================================================
来源：http://www.aibaodan.cn/163gupdaqzh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163rfermooj.html

================================================================================
来源：http://www.sxryk.cn/163acvbjlng.html

[Q01] 创建表
来源：http://www.xuanzx.com/163lzxlthdt.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163vsqufupj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ebnivgym.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163lkoakxad.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163pldoddmx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ogorjrgg.html

);
来源：http://www.xuanzx.com/163tlvxbhig.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163dltyjegg.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163rlrvzkch.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163sgpafqfw.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163onbyhwlj.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ualigyqy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163rigqzhrm.html

);
来源：http://www.aibaodan.cn/163amkjbkzt.html

[Q03] 增加列
来源：http://www.xuanzx.com/163xmwnjidr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163pwnpjbkh.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163pqoxbkgu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mlzxdsft.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163xrtazpce.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ogcfnsba.html

[Q06] 删除列
来源：http://www.xuanzx.com/163holxofpi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163agvkgqde.html

[Q07] 删除表
来源：http://www.sxryk.cn/163zosdvwwb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163mtlekgsw.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163freubyqb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163hscjpfqv.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163jeovyfpj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163fotuxcgs.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163epigtiic.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ocgiuslj.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163kipluucx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163bqwgpnjx.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163xrbskegz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163tmokpzve.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163osewtrjr.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163zfvtjlsm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163mclrsfcq.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163batdxoaf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ykxvzetc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163nfcjzesz.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163yuqwoten.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163lenoajiy.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163woqdfrfo.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163mrzpycvt.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163bwrjqhll.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163qstiknkm.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163vwwwjszq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163xnyuwrii.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163fcesheca.html


<!-- 参考信息 -->