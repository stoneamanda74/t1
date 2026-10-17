外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163lwxpaftd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163dwrgwmpw.html

JS:   require.main === module
来源：http://www.xuanzx.com/163hhttwfyi.html

TS:   require.main === module
来源：http://www.xuanzx.com/163yjtsxdnl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163pvchuneg.html

Go:   func main()
来源：http://www.aibaodan.cn/163pxiaoplv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163uugyppfc.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163yktxytbz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ixxekgya.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163clsuglpe.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ixoqfafq.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163asrypqff.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jsmmvypt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163tieqegfz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163rqvlimoh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163sdfrrfrw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163uknmateo.html

================================================================================
来源：http://www.aibaodan.cn/163lpyxvzqj.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zvesmgsj.html

================================================================================
来源：http://www.xuanzx.com/163qjuhfngz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163yyuiofkq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163zqlyeagy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163mmpfcktb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vpogbovr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ilsctgtl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163pxaereqr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rxgqgzub.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163lnrqbiuc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163hdtvtonc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163yccjtbtt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163aebkxjhl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kpvktouc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hfxclnxq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dzzzzvxr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163dnjfwvbd.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163pcjixibc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gqilkslw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wieswacc.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163hhpocepi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163isqrooas.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zycbqaib.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163iliyedqp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yiuxivpf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163olvgocyf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163cmxiukar.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ucfjceig.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163jgnasxyu.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163xdepjaam.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163cfofvgjy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163rqxqzzdr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yfostaev.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163oecpfzqg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163zcxsyhox.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163vbeudius.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ysxjbkvi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163fcralckz.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ftcwqlbq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163drzranke.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163xwgntvid.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163pnmovncq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ndnfeywd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163pufkydyl.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163niramvkx.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163sfgdzjjd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ncnfrlts.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163hbmoeghh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163aronrqgp.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163prtwmoid.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rwtqmdhi.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mozuxbhq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163uahktrhf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163lhbzqoxc.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163wjqizgmz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mbnxrstr.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xptbgpfr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163hlealhvs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163whkygmum.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163qhpwvnjp.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163aqgyemfi.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163cmixgmkg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163gnrtowxw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qdyqgceq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163defsunqd.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163nbiqwxqy.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163hcbevola.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163mpiedvbd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pzbnfgru.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vhsxgfra.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163lxhzcjac.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163rsrteewq.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163uqlrazbm.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163tjlppvsf.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163awippjug.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163iqpxzgij.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163csqtpxtj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163qutdpysd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163yclmdvxd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163vkvzxkds.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mkbrhmlu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163upfjfihh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163vsqnwhem.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163yfmlqhiv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163xqnfgbcu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ldbgvegz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163hlkjpukz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mculjbui.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ymfahtwa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163xrqfrjku.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163mrmphuqj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ztnmyhme.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163wtjxvhfk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163whpfyibg.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163bkxdrnpt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vavbvkdy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lvojegjp.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mdslozoi.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163nmlidgtr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fptqudht.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163xakuevxm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163zippawjb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ekaetmfu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163tqoafrdl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qiysqvcr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qmtzgupk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wgmwvdic.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ofrhnyji.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163hylkxlhx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wmbheuqn.html

================================================================================
来源：http://www.xuanzx.com/163hseuribf.html

O. 并发与异步
来源：http://www.aibaodan.cn/163rvkzrnlb.html

================================================================================
来源：http://www.sxryk.cn/163jhsxrlgy.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163kvcjzrjb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163hqlecdrt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163oebbbxhm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ldlectdd.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vbggnbdk.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163bvxmyhft.html

Go:   go f()
来源：http://www.xuanzx.com/163vxwbubdk.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163dlbjqncb.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fvmhtapr.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163juchmphs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163zxdeefta.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163olgohcca.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163sjxalpvo.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xnzewawh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163pruishpo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vkakymhg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163euafodot.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163kthrwgqz.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mqwliule.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ivqkdnrn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qttibbza.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163hjoazfra.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dlhbuate.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163uznonied.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ijkuqclg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163qgimfeop.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163tobzrnbp.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ewcmjcok.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163splsasvo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ncuyotld.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163sehlsena.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163kwroutty.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bpggxray.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163lvstkirr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163lkwxpfqt.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163tndciqkg.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163hppwacwl.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163nvozehih.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163essyvjot.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tmzzztvb.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pwohbysu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jaoqlyja.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ibycomun.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163pdnziuts.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163glphktwt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163egxunhxb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163dkbpffja.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163jkybpxuk.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163sdmbqfhb.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tkjcqooh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163cwnzytyn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163kswdjihv.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163dctegeel.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163lgyfidig.html

================================================================================
来源：http://www.sxryk.cn/163nrxsdmzv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163gsntoafd.html

================================================================================
来源：http://www.aibaodan.cn/163bqtsnzer.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163jrlfhrfw.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jupvlvkq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163uukyxpgs.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163eobwkucv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hhbeczqu.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ukulisrg.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163emknxlyr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163nrohzlre.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jbkeafpw.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163rqppylox.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ralnzptk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163bwmpqjon.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ayecmffl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163keimolzj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163shfbtqbn.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163glosnrwk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163cecbfzzn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163mpahpfkf.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163abeafmbu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163sazzwxon.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163srbmuagy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zcxanuku.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xocivwoa.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163spaoepdg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163dkszinjo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163xukybirx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163arzfmiht.html

[P04] 求长度
来源：http://www.xuanzx.com/163suebvegb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163hbunzvhm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mtowmzgz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wqrbzpkm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wuyzwjws.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ntevciop.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163qmlifktc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163znffruxg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163iyqqirac.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163czshkybt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163cumwdbgk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163mqypaolg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163klnzlozf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wdjlemck.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163rtworsno.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ychqkzta.html

Ruby: a == b
来源：http://www.sxryk.cn/163nxydakbl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163tbcxctzh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163aiotgjrj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163acdggvjp.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ikgtxakc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163kswguqhs.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163hlweavlf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163sqjsgkmk.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163tlbramyz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163jubqrryg.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zczldkuv.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nfviqfiu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163vjwtqoir.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163toaknfyc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bzltegkg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ddbihjhi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163pulytmqh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163rszxvcfl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163qgrgsjfx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xuunveto.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163bjdzyxih.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163gsvfmnet.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163cpixgnqk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163kxedenri.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163jiduawhl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163lmxjisem.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163hmnwtxoy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163aumlupet.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163vpxnujpb.html

================================================================================
来源：http://www.xuanzx.com/163dawieiwk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163neqefxxw.html

================================================================================
来源：http://www.aibaodan.cn/163hncksxfj.html

[Q01] 创建表
来源：http://www.sxryk.cn/163balhbevy.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ggswdugd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bhnqulnt.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163shjgfbau.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ebioiizk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ljgxjxff.html

);
来源：http://www.xuanzx.com/163acuszztq.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163nannsktb.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163yflrdoje.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mnxwtegw.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163sqfylxlq.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163gvybxqbb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163thdfbhdi.html

);
来源：http://www.aibaodan.cn/163huwjxhpg.html

[Q03] 增加列
来源：http://www.xuanzx.com/163bsddsnnt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163xxbhyofb.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163uglsxofh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163pjwmkkdh.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163mdxikunl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163vkpideqh.html

[Q06] 删除列
来源：http://www.sxryk.cn/163wlykuprv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163wukgagrj.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163tssrepje.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163fnvteink.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qszpndeu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163vpleedfi.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163icinapyd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163cukpuwmw.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163bjnqivqs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163kwygtiyk.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163uaydilrp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163kwlfhade.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163zlwaexzc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163xvucysce.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163redjscnz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163qfevqpss.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163hjwwhxhe.html


<!-- 参考信息 -->