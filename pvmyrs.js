外链999!wailian999！

Ruby: exit 1
来源：http://www.aibaodan.cn/163fdtcofwb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163oftuyltm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hazkyzwn.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ahxrvfkx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163upgnlxhv.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163iyjdhfto.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163tupkahuk.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163xwomrnph.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163cyptpyhx.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xjyfscjr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163wsmdmwvp.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163jgnzxhgo.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163gdonvhjk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163odanfpvp.html

JS:   require.main === module
来源：http://www.xuanzx.com/163wvjmzruh.html

TS:   require.main === module
来源：http://www.sxryk.cn/163poohcsxf.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ijhlyniq.html

Go:   func main()
来源：http://www.sxryk.cn/163rdhiilao.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163dwqfdeor.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163wsgwygof.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163aekuccnq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163iakktzur.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hiduwqqn.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163dvpxnxxa.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163apoaiaeb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163xxvcygcf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163layfqlbf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rjdfwdhy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163vldyiduo.html

================================================================================
来源：http://www.xuanzx.com/163dewidvsg.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163upujtyqy.html

================================================================================
来源：http://www.sxryk.cn/163wphgowkg.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163kbtfcqwk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jnrjkjxr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163hhksoucf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163korpovmo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163goepfsqr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163spgmmdhg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163jiqckftp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163polhdwlt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163irgrklua.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ggaadjuk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163czfgjwnf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163msmlnrzv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163atopkjgn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bthfkyeh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vmaghnam.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163cskmkrby.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jihgytbc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163qhxcycyq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163puacxfyd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163bksbagou.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163mlabuioa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163snfkktkg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163cxriylqi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163dhunzikd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ffgulbou.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163tsrqolbl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163oszksyhq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163iwgarvrf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jhjqieqo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163rhzutmxa.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163smfxwapq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yrpujzpk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163lleizffm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163zsfavvey.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163onmjwmdn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ztszfdtz.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163hgbliewo.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163yyxqmivm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163yujpxtow.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sqbxnoxn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jjjjqtpq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zniddtno.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163oazmbpfp.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ylropjsn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ykhuiaah.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163kvzmfkui.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ffvbaokp.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ivxsixyl.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vpcoygbh.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163pgaamrpl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xaomlywp.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ieksgecw.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bpygrrsw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163twebrzsn.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ojfiyphs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dwbyhkzz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163gbgzjoir.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hvenkqvp.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163tbqgyvbw.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ygytiwan.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163vadvshox.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163gvplekqj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163qhvdjhyb.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163yxyzdiwi.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zaztdkxv.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163exmtopmh.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ymwojemf.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zrridves.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163myguuiyd.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163gadaooln.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163vmiceqzs.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lkqljnuv.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ezskpiss.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163eqxmapvx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ogmefegt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163xejmrbbv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ptamwczz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163exmlgvvk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163brwerggp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163wmdmsite.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163dpxyltej.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163teypbrjq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163xlscqimq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163pdaxoxzt.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163jxuulxok.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163gikffemz.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163woybzxwu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lhavmcqw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163bldasbrv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163andlwnrv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ukmpytfh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163tzhydzof.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163hiblqmmb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hrrfildx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163svolgwdx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163wfivqsdq.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163rjmsvsuk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163bopnvvrk.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163awbwgybv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163dhnqnkqs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ujfvzgox.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jpxdxkmm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163suzhpocl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fbcakzep.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qkjtrums.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163cojtmtgd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163rdgnugdn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ghwoewta.html

================================================================================
来源：http://www.sxryk.cn/163hhscmwmt.html

O. 并发与异步
来源：http://www.sxryk.cn/163xxeurxuq.html

================================================================================
来源：http://www.aibaodan.cn/163uwsdvdie.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163squeuqfb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163owyatpew.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163dvhmpgcb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163irtdtqhk.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uaisqxwd.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163javuiwbx.html

Go:   go f()
来源：http://www.aibaodan.cn/163gzzlutkb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163lalhydjf.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163zpmsnafo.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163vjimpeoj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163chmirtol.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163lsocezbq.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jxksppue.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163stnbvfuh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qwkbjakr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163auzuyozg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163xqgsbwqb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wmxyczpt.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163apdspqjl.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163terstnbp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163hlfxwtli.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163elqvuzek.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dwvcuxtt.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163vkzlnbzz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ebmeumwp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163tjvvuwgy.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163cifkcijy.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163penvxbbn.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163qjxlausz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vureopgu.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163qytadnji.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yrufgpkz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163kltniudi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163hkkvdbeg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163mffdnolx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163dtslcgsp.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163tljsqiyg.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rutigzsx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163tsbivdlu.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163gsbbmtpp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qjfrujry.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163iywquyou.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163kbuclajb.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163vlgvpcdy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163emwfgapf.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dxusmjsr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163hwwqkait.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163jbjqarqc.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163hbgcdoin.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ewakogqh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163bypphcob.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163rhmullgo.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163hoasbntb.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163hiemcegh.html

================================================================================
来源：http://www.aibaodan.cn/163tdlimqeh.html

P. 常用工具函数
来源：http://www.sxryk.cn/163pbnbtdjz.html

================================================================================
来源：http://www.xuanzx.com/163wwtrpran.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ntnuxtfs.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163natqtblr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163otdcjtww.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qaawffui.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xzpvlvhs.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163pbtucdmj.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163vtiukhyx.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ywsuaxes.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163lcneyzrk.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163frpgedxs.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163sdlcnhko.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163oqvfjzdy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ajvvbtee.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ntbkynxb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163gceheiss.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ucbkphnx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163jopgceqj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163devdxbcf.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ksqmgloo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163tlzdhyuj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163rnnkciry.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pfyjjuxv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163yolrnwgp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163qiplzavw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ingtejcf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163qesnypvz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ssucblbe.html

[P04] 求长度
来源：http://www.aibaodan.cn/163eaaiugpd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163lfamdyir.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163heeagwpv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163yuecjbpz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xidauvpx.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163zhphtmtf.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163duahszvx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163dfdvnrfn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163zklrtwns.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163kchuboei.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163xofpgoly.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163aheiczib.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163askizczn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163fxqozcpc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163sbpvkwbv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jabnwzfd.html

Ruby: a == b
来源：http://www.sxryk.cn/163lqjxkwxt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ohhtyxgg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163yyfqrrab.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163rgevubgo.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163trdmtaej.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163lrriapdn.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163joucsrzt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163pojwvavg.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163vyuwhdeq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163wtixnlei.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163xjmxjtab.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163xhbbravi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163fqwnszut.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163mxievvdq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rebdjhoz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xruogsfl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163gydlagbq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163htykzghd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rnyfgptl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163envhovqs.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ibqbixra.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163paaigofx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163rxgtmywb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163oqwhdjdh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lekjkuxm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163eghtncaz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163gbdhakla.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zqjazgqy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163iozgveyi.html

================================================================================
来源：http://www.sxryk.cn/163jwecmcau.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163nmhyqese.html

================================================================================
来源：http://www.sxryk.cn/163pyukqvgv.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163qwncffbc.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163daeaxmxz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qpicjsyt.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rhyvcpra.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163cbtorsyg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163tdhbshzl.html

);
来源：http://www.sxryk.cn/163bwnvopwc.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163dexmkake.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163hzebawwl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bnhqytdo.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163anbxoxti.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163azqvbaxz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ycmcrrbf.html

);
来源：http://www.xuanzx.com/163dfhnzyht.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ugkfoakp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ljfnidcy.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163gfuaevgh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jsfdnoht.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ltizupps.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163swskvgzz.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ercyilvw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163xscxifgt.html

[Q07] 删除表
来源：http://www.xuanzx.com/163bhfgubij.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163hkfukiqd.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163wxsemnfy.html


<!-- 参考信息 -->