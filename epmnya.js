外链999!wailian999！

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163lyhihesc.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163minbplbx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163fzdegolq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jgzlmyrx.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pwvkwjbf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163nzhhewgr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163gwazxpnp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ezammccs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163dvxijgtp.html

================================================================================
来源：http://www.sxryk.cn/163hzrxhpxz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163kpcrttdq.html

================================================================================
来源：http://www.sxryk.cn/163sljotpvr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ovnganad.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yvezzkdd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163hwscjkty.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gqrwpgoh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yjaoukcn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163agzyfznq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163friygvwt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163syfxnsns.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163wwhpduqa.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163uhxkhxfu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tvfqtgew.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163psmqlzkv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163aifmfadb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163syodxrhc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163bqercqvb.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163gxjvtsoq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dvjyxokl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163qcjvvxpq.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163lcebyuim.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dnjebncr.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ywcsneoj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mkxlsyjz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163awjfxunn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tigqgjzz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163wkeknqpj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163liyjywaq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zwadmfkd.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163fotvwzxo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hsqjuwyc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163wxeqkasd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ocrmizan.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163axtipzly.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163yniraoix.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163isstbzor.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ysokqyuv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ycriolaq.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163tcywazmo.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163djvibaky.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dhbvytmx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163tygliadp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163tbkwdrqe.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163uqubfztg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vlasfloc.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163tutwvoxu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163wbtazhrm.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163jtbbtglc.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163boifzrhi.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163nhtwpyyq.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rldwgypg.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163obapyegm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163huplbhjz.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bpsfrelo.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163pzpkpsok.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163icegwjcu.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ireslvgi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163meflfnvf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163kuyqzvcv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163usklqtbi.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163zbkpfpji.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163wohkdzrj.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163mjvodgsk.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ypjjftha.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163axkfmloz.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163tdnttlpf.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163skwcpcjk.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163dlvvwkkm.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rhnsrkox.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tpuggcon.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163avkdleas.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163lgkxdyvg.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qovlpkth.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bykjvqzc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163sbitwoxj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163zhrhxeew.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ejxtxvql.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163smskxoqp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163zxdoxtuz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163hqxvxatz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163rkfhrnsr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163lgjxyzhg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163wrzgfbwj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163kqohdilk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163lxiepsvj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163kjrozshw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163gfpmuvri.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163aamjmedo.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163hmbcmehn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163kewsigup.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163scuasqoe.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163yzdahgon.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163spdmoaoi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163zwlkkswh.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163wjxjmmqb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pqwsoznb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163labcrfiw.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163srrpckgz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163otzgfxno.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163zlhddooz.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163wahriffp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163clbslrww.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163yldnxmxv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ylypyzjv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wyqwnajv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163thmtrwmh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tqjbljfd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163efhcojux.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163bwwijunv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cexxmnxy.html

================================================================================
来源：http://www.aibaodan.cn/163wcsvudco.html

O. 并发与异步
来源：http://www.xuanzx.com/163rtzqupan.html

================================================================================
来源：http://www.aibaodan.cn/163vvlcaqxa.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163cgrilxii.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163dejbrsmi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163fjilxjqt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163llpanzwf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163gmowxeev.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163mddxlzyy.html

Go:   go f()
来源：http://www.sxryk.cn/163rsnnggfh.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ioeouanx.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163rwflwrbb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163yblnouht.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ytljwfrr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163pyahvogs.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ymiuxxqi.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pvahlcfu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163owqxjwpu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163upgexczs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163hswybjpb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ppiyhixh.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163auvzcwxf.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nmpjcehp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163dgwmvmrb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163rkophtjl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uzhdwqjk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163exkrvdot.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163nftsremu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163egsxpxnb.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163lyidicff.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rypzjaig.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163gmunmghz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163osfqypzd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163teodrggp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ewokagyp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163xszypnzl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163wgyftclz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qdedsbrk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163lhorapfn.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ihktxzhi.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163nhwgzloh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163dgyjnjpn.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163brumtzto.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pjzyajxo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163wnlbfwkm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163dvbgvwfy.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163gufdvgra.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163myyojuee.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163zyjefaki.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163cfzzfzzj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163pnpvmxwo.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ciydkxno.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yvbvbhst.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163hxcvrbzy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163gkfotgre.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163evorukhc.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ajiyegaz.html

================================================================================
来源：http://www.aibaodan.cn/163vjtqlwlu.html

P. 常用工具函数
来源：http://www.sxryk.cn/163yiaxpiyl.html

================================================================================
来源：http://www.xuanzx.com/163ihycpmpz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ajngpyxy.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163kbbykyru.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163nzeyfwrk.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163usuvwbma.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rgkgocmy.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ffnadxyj.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hrhjrurd.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163vkdopxqw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wdzvisfn.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163chizogby.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kyoeqjxf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163wrnkumnk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ppvrpbjh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163eliasbnu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163jqashbuw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163dikaiwdr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163iysxjkqe.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hsehbhmr.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163shskjeom.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163pcohdvkt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163hdgqbdyx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vvihelaw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vhmtalkr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163snwzhbob.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163lvhhauqj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163nbdfsrep.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163smtvzzqi.html

[P04] 求长度
来源：http://www.aibaodan.cn/163meomysso.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163vqwulcxr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163alkoxxve.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kwwsakqz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qswvvgfm.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ixbbauch.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163sboskypl.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163wgojbrtu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163aeyqjgew.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rcbnhdmn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163cjxesbso.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163irmhgixp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163hcioyndl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163mnrdfqsr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163fyhnkzps.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163hzepkgrt.html

Ruby: a == b
来源：http://www.xuanzx.com/163jufcykkb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ozfcdlqq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163tlqianbw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163tibmlnas.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163czflmuzu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163tggeofij.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163qqbefbjh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163eidqfueq.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163xwdxfsmz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163llerncsi.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163yditnxnv.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163iikzmdcb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163uifhietk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163amfagkfx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ojuvarkm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pbevqalh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163bgcyjcwa.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163mygkachb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163yvuwnqwn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163dlueenbl.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163dvxjcjbt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163rpxrfoou.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163dmlautoz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163evrxjptb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163zakqyvft.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163cvcdkjzn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163otqfmxme.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163kcwuwpbg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163epsqyqia.html

================================================================================
来源：http://www.aibaodan.cn/163gjrlgzxh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163dzvdkiav.html

================================================================================
来源：http://www.xuanzx.com/163ljjntoxo.html

[Q01] 创建表
来源：http://www.xuanzx.com/163sgeuimlo.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163mbsowqul.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rmciwfeq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163nowlywjq.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163lsbcmlkr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163vxjktnmx.html

);
来源：http://www.sxryk.cn/163xrcypshp.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163faxdcknl.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163yvfzwoye.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hykqxsrx.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163feeyigxk.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163mgnxksok.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163csyoubbd.html

);
来源：http://www.xuanzx.com/163ordddkfn.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163tnpiiixd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163aqmzbgie.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163qqnxgmhp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ivafaoxn.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ltkasusf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163tjgttwtk.html

[Q06] 删除列
来源：http://www.sxryk.cn/163wpsmvykg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163uehcppxk.html

[Q07] 删除表
来源：http://www.xuanzx.com/163kzlzgjub.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163qqcrohdj.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163vuarzmay.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163fgnyltax.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ikuzzqhv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163fklekghd.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163fkqgxodr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163fdgturzx.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163licnuvmt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163iwycjlkg.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163qcntifww.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163rkyuzwyn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163kfmxcyog.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163domllnad.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163cwgkkwks.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163dptivxuu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163tlbddkig.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163lohmhozn.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163skvprwfm.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163gupngtkp.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163qeppazmb.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163cjsjlovx.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163dimydyyx.html


<!-- 参考信息 -->