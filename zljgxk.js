外链999!wailian999！

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jrvzkzld.html

Go:   func main()
来源：http://www.xuanzx.com/163ucxmbpjr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163nljqsxoh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163iospiwgj.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163qbioacyb.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163lkwrqqjo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163nxlblxpd.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wppjqogu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ruvykmki.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mfvtqfeg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163vxkdxmje.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163uagwbiyz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163gltisrad.html

================================================================================
来源：http://www.sxryk.cn/163pxxxyerp.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ctgioaze.html

================================================================================
来源：http://www.xuanzx.com/163suienzkf.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163eyxpkhpe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163bfjnqike.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163oufyllry.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ifsnbijj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lgbeculx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vxtkeetj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163lfwxquiv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163qauzbnmf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ydbolwov.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163xokgqlqr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lqnsvutw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163iajtpvsk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163eoobpsqs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kxpkuswe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vmpmyitt.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163vxvshpxs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163htlvqhlc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163isccuqqu.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163kodnncum.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163npvkthza.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163uzookrsq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bdpnengo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zfvbmhmh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163jgalvmzv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163oqcaniee.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163qbytrcrm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mcarrokt.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163rolgizqg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163loripopu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ifthgcpm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jpvjifld.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163iuxpknjv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163bttvhbcm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163mukqqlua.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rkvxnhff.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163cszgtgkc.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163itqphhra.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vvccpbun.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163fqpcmvrf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163msnyxnaa.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vkgwpklb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163pkorkfrq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qqyuqkpi.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163plmxnumn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163toagdfia.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163izacylei.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163luzfppgc.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163sellecef.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xnygxguf.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hzeinkuv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ehghffdv.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163rhrhmjub.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163hsqnyatj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163huxhwtzj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163wkaqgthp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163lvggdopy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163rnwcvdld.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hherpnnf.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163wzpdrlkv.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163nptwpnjg.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163caclfwav.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163hwxdavvk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xmbyqieu.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163dacqaqvr.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163nmpqssin.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163gcytdnmg.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163yakzqqlm.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dkdrqnwj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163dupfumcg.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163szcouszo.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xhpshnjt.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rmdffqyb.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163yykvcuwk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ygydueup.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163wpovymhh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163kwvmxipv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163mlbdspdq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163wmetycni.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163eviohuwo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163rckuyxjz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163fbboagnx.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163hnorighn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163boxvoien.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163getvxunw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ntpmytjr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163rngklrws.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163rudghmzc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163oijnsnlk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163bqxwyqnx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163zrwchfzb.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163gxelhhpl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163cceebwcp.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163hldposbe.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163iyikfenz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kagnjbxz.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ahkggbum.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163brboovzh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163pbjnomvy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163fbekgknc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163wimhfnqa.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163pufsypik.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qkolqdyr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163pjanrlzp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rfojsbiy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163aakoxcqt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ptazlzic.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163vsoapurj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163pviiokjt.html

================================================================================
来源：http://www.xuanzx.com/163mojsliig.html

O. 并发与异步
来源：http://www.aibaodan.cn/163vjfdjypk.html

================================================================================
来源：http://www.aibaodan.cn/163dwtzlugb.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163mfahjiya.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ksurtdod.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163lkhyihbo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163mmyfkdfh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hvlnlkfi.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jpffxgys.html

Go:   go f()
来源：http://www.aibaodan.cn/163mfgxbbwu.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163nvdjroka.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163rngnvwrb.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163sqfsrtmh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163xpjkcwcj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163qrczhukt.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dthxowvl.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fpibxfqj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163doilisqj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163uiltwzyt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wsrwexar.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163daqjloiw.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qdzuprsp.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163rmzpixaw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163dyptytqb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163eubzplhr.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lnqofgqj.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163qzanvtwo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163wniiazyd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163mfmoghsm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163fqroktvz.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ujanzrls.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163vgkvofzy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163undhuofu.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163spcsuuiu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hvrobmei.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163imvmqcgw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qcsbntgp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163zkgngfnr.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163nhdhyalu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163qoxubeil.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163omqwwviy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163qiehnbkf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yihjtite.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vfdqolgk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163wymnhbys.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163gfalnmvy.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163abgzzmuj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163idwquypg.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dfqcqtyi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rusnmzua.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163oowdevtn.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nfcbypya.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vxqwqsmy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163noefstpn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163kbrxmktq.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163pnokyjeb.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ayekdqra.html

================================================================================
来源：http://www.xuanzx.com/163jhfmvrru.html

P. 常用工具函数
来源：http://www.xuanzx.com/163zjfikipp.html

================================================================================
来源：http://www.sxryk.cn/163atnkpuln.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163sjdqblfp.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163tizmueyt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163tjlpipex.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163duqvbfzy.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vrrheqpc.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163svicgpkq.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163hxgmpyht.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163qitnmtqw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163yukhaomh.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163uhpeijqc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163dxpltjsy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163kjoqgfkm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163stdutigh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163jlkvepuu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163kgvbogxo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163iajaoktr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qyxpmoah.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163cppknliu.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163yxldksfm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163yxlbtnnw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163qbxrhvyr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163uixmkxmp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163uhetenao.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163otsbhqov.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163wywiifie.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163swnpouta.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163rcdvzecf.html

[P04] 求长度
来源：http://www.sxryk.cn/163tmmrcnwy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163trhfmkwz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jujnccjr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xqcgrnpx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qdnrxcrb.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ggywudby.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163lslwflse.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ylbdynpu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163vmmyzuma.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ezcponuq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163jgcpjxsa.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163dcswaoeg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163vdkxdxkv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zhwypvhd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163dlxccmvu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163fgnqahxx.html

Ruby: a == b
来源：http://www.sxryk.cn/163imehbgvd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163pyiolfxc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163gylqjyzy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163pifxzogn.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163cokdxlmj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163cvgmfanh.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163wdetgart.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163zzmyiqui.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ctasskwv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163tmecmjer.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163mplnwkvb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qvdhwvcq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nkmpiuvj.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163hvqejmql.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hrqezlcj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ydyddmdo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vedqjiih.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fqarclzo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163nzdsjwqq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163azzjcucg.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163rptjifyp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163tidizeuj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ksgsoclp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163agejvtwa.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163twuvhsst.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163qteuajfl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ksyhaaaj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ooeowpct.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163tqfzurqc.html

================================================================================
来源：http://www.sxryk.cn/163xfrtdpwc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163yctsjdez.html

================================================================================
来源：http://www.xuanzx.com/163pdcnoqjm.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tlttuxzx.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163gwsoalwj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163yimwjivn.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163iqevrwhp.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163udlkplew.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163mfmlmcxq.html

);
来源：http://www.aibaodan.cn/163hcpdfktf.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163hrupzpwi.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163hkozuknu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163anuwlcjm.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163hjbqargr.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163phqmyqxa.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163keewspxs.html

);
来源：http://www.xuanzx.com/163ahcfkrqi.html

[Q03] 增加列
来源：http://www.xuanzx.com/163buddjzzd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163kgesedgx.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163kketwaul.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ivrfjovs.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163webffhjc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ntgofpyy.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ylnxbewc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163nqnuxibo.html

[Q07] 删除表
来源：http://www.xuanzx.com/163memwjyve.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163dhiixmhn.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wxggpqwq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163evrvsimt.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163estwwqwb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163oophmnxw.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163sjwncrmn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163nqsqdque.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163nxjcohzg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163kgekosca.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163cteasthj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163zlydxcwe.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163twoxbpww.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163vbtydneu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ebaxptqb.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xcuwzpnz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ppdntnzr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163hbnfcbln.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ipyrvcge.html


<!-- 参考信息 -->