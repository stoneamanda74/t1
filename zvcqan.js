外链999!wailian999！

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163bgpdkcvh.html

Go:   func main()
来源：http://www.sxryk.cn/163vcaxefgy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ipkisxgy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163taufskdc.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163pwucfynj.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jwqpwxwu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163frgsmbxa.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vxthmbpe.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sjznbvhy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rxjdzojc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zncdnpvg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ugikklds.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163chtteohf.html

================================================================================
来源：http://www.aibaodan.cn/163cmuacqqk.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163akxatehv.html

================================================================================
来源：http://www.xuanzx.com/163twevxheh.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163qvtmpgwo.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163axuwiuhl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ldzfgvcm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ytxmmrpk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uxmxrwim.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163oauwzofo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163qyfgtnhv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163pmdroycn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163bupxbdkh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163mcxetkkx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163okjtzqav.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163vkhnyvgg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mvviznes.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163scrwkccr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163cyhhgbyx.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163lfvizkgv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163aasemkns.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163dkebczve.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163fehyilgo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qjqinvpk.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163kfpilaih.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163walikhmy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vbzvobge.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163mapzpnlz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fqzaoinp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163zkapsldp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163rafjuzqn.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163dowoymsd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ubuitpec.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163doeedams.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cyvwvzil.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lkhivquz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163uwpjxwzx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163dyoxvlwu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163esyzquai.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163mefmibcw.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kahanzqh.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163tyohwrjp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ktyumnqp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163roafmlsm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ovmscufr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163hisjoztm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163monetwph.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ufvbtygh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163gxvxlneo.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zloxxztk.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163nfkhwbfx.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163mgxfjcun.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lvrzzeiw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163srtybnet.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163zxbvtztv.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163iuulnybr.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163lgvriqxq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163guuewiko.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163eocxmbiq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ilveqmee.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163tumaigep.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163skwxymno.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163rgkmwxwn.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163rmdmxemw.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163cjxdgmjj.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163mepyhcjd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163dpsrpihu.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163toriqtbe.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163imicgjnd.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rfmheuvk.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fihqvvay.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qinwwgpl.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163vwhttike.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vaiyqdkl.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163amsedpea.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163gbaimsrp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163lojwfurz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163wdogrsee.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163vqtlvpnp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163erectbwo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kwwdgdrh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bthjuucq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163jstjeygh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xmkjbslz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163cdzatpxz.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163wqrgcbos.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163gyycgmml.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163znanyaqw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ifijohnh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163uhmnrpmv.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163qlydcttn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pvaepkse.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gstetibs.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163lqfocxzm.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163fcrjznkd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163kykbulfy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163zxhuwnsv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nfjlwarg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cvjjmpzp.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ifpmywjz.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163gpdjoybu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163xsnfqrey.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ierpkkfq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ejbnugrs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163mqjhzwjf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163whalsrqn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gmyvclus.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ahymntzh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163oanusghu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163vfbiiymo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cxexrska.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bqtapbqj.html

================================================================================
来源：http://www.sxryk.cn/163sqinabqv.html

O. 并发与异步
来源：http://www.aibaodan.cn/163nwreyskp.html

================================================================================
来源：http://www.xuanzx.com/163yuhmbamq.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163nggnmkfm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163kyykflxa.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163evcrgsep.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163wedqltcc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uuviwjiz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163canvgirn.html

Go:   go f()
来源：http://www.sxryk.cn/163uzqkzsic.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163vdevtwpf.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163zwyeusrk.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xpnnbinm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163wnofebmn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163kikfpzhd.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ckgzfrdu.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lyropzwh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ztctybmc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ohtfbfxc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163lsdocdfp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163edcqtyrn.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wumkzmen.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163laydlbhj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163hwzjuvsg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163wdnpiooz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qzqrfnnp.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163pwgktuba.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ibgjryit.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163cowbidtv.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qvkrkmqq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fvhtrmdq.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163wksdrlwg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163jdgelzmf.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163rccpmuml.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163lkufxqzw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xeduqeku.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163trbnrimi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163bfwqlbfg.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163gtdmleap.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163hgtqdwut.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163uurvgton.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163daomdhuo.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ppgapfuy.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vkofegzh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163yuvyjdzt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163tvfbhchb.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163eogfkeqp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163zhpkxeid.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163yezejyej.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163amnkjcwz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163mxyjexho.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vogvbogf.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163japguvrm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ofnqisrz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163rtrqukbp.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163znjqthfh.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mwwufkua.html

================================================================================
来源：http://www.sxryk.cn/163cycnjwxp.html

P. 常用工具函数
来源：http://www.sxryk.cn/163dyimptrz.html

================================================================================
来源：http://www.xuanzx.com/163iyzlajgg.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163hqbhqeqo.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163nbzigaim.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163jrworonk.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163eesiavzr.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163egwqsbsx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163dbzjaahh.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163srwzrmpz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163lmdnmnke.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163vghojsgf.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163qcmtcmwm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163pktxpfmv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163omeirlwy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163lijvkgoc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163pdevhwcv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163gvcofymc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163vfxpvykq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163lccqsnzb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163jxcsaftx.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ldtenpfj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hsdgeafm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163tbwuwxrh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163utunkgvl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163iicgrdgv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163gvrpufmk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163mraidnyd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163oldrnmnz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163pppthnte.html

[P04] 求长度
来源：http://www.aibaodan.cn/163pijfhbht.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163xiqkxhbo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ijtdgikv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163udpdwavz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163espqjzdi.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163mlhfbdyr.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qedcuypx.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163bxixuscr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163eyjzsjml.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163qfsmlfqj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163btotogmn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163dgpbuywg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163pnhzkniq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163sfjnkpvb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qzudekfi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163mbstmdsg.html

Ruby: a == b
来源：http://www.sxryk.cn/163iaidozqv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ttclnexo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163jyicvczv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163undukwut.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163eczljsbv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bttndqju.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163xmnckcxn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163korgziaz.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hjwlclhq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xnildnel.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163dsssbdxl.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163nphobdkl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163gtquvtfj.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163rpwdbhbu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163masyvsfl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dclkdpuj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163asnfgjfv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ssroysed.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163vatlnnhh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163juxualqu.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xrtmrryn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163nbqrsxsd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163vthqjgil.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163qwojmamc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163fkwemiuz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mdwzjgpe.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163hpfmajrn.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163tbjtsxvw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ywnavxvh.html

================================================================================
来源：http://www.sxryk.cn/163hwzkljca.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163gcceflyq.html

================================================================================
来源：http://www.sxryk.cn/163ymemfxih.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163dzsgcluu.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163tjanxbfd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163tsbsbkpm.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qjhikyjs.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ouxbaikz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163dwoxlvnh.html

);
来源：http://www.aibaodan.cn/163pdvwjqir.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vdunqsfw.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163yfultrsk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jlpqvrlt.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163knldgjml.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163rdosgwur.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163pqfrexwu.html

);
来源：http://www.xuanzx.com/163jisqelfy.html

[Q03] 增加列
来源：http://www.sxryk.cn/163nwrhhqgi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ohzdvmtv.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ndhyyguh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163advjyxwg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163sfyvohgy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163yoptzhra.html

[Q06] 删除列
来源：http://www.sxryk.cn/163nacyztxv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ihdspoyq.html

[Q07] 删除表
来源：http://www.xuanzx.com/163hoomlhtt.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163zwuyutnc.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jllgumws.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163gadjhbka.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ghbxdzfx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163gzncjsth.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163uoikbxwq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163kdlxkyys.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163epoqoptk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163clcbytpu.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163xslwfohr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163hakgmhff.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163sdejyrtl.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163msalogpj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163jhgyjlgc.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xfbdzimv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163dmcucjzw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163itbyetoa.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163vctbljvo.html


<!-- 参考信息 -->