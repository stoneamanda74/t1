外链999!wailian999！

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163msloplxu.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163zarrqpre.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163atzowcbb.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163pbaqpuad.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hbaxhrgp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163vdepzmkc.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163tnqwnlhu.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vorhgdqx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163dohsmklr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163wwfxcovu.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163pibsdylb.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163pmpincfz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163fbxxgveh.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163viofxdbl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163zzjzomqy.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163askjyivz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163adbebggf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ttkykjej.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163jeazuzrd.html

TS:   require.main === module
来源：http://www.sxryk.cn/163afplndgv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ciinxicq.html

Go:   func main()
来源：http://www.sxryk.cn/163cooainav.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163mrrffpsy.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163tkwfaprw.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163aoolxhzp.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163zlnhuyew.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163bpxjgutj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ncmrcqap.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zeapqoat.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163beqzkcop.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zjatkdeg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mxcjcrqt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ogtinhav.html

================================================================================
来源：http://www.xuanzx.com/163gdawyofa.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ogqkhdno.html

================================================================================
来源：http://www.sxryk.cn/163qkrsasgu.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163wvugawwi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163lbxreqej.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qnkzkssn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rdvmwkoe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163yokxqbrq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163jchbonwl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163xbwsblsa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ohnxpojn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163cucqoibx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zfgrnydy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nmefhwjz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163tkozlohi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163byswdwka.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cuuxfuve.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vlhfjkrg.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163qwmvgsgs.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xmzpdaax.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163iuogjmia.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163pdphsgmc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163nondbysr.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163blscsfdg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jqhmbdnb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ydgmjnbx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163thizqzcm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163rjeahvmy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163xmkgwgln.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ssgcpsjy.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163cinuzdzo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zykbrcwa.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163nbopfwkm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163odrjstib.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163exduslbr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ycwaenzh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wjrbnwer.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163osseoynx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163btyzkbvj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163qqzevngz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163iowgxfto.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163mlvsdkep.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ixdqnxko.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163uruypzij.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163pgyaddqj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163xsxyqlto.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163abbgdjpc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163rptizupz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163dpffrzve.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hrznrdtt.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163jyayenba.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gbdvsunu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uwyzeytd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163mklnsiac.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163slsgjgyh.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163lrvwvdum.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163erthszuc.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163iwtbrpzh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163shbuivor.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163zmgqupig.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163fytvjpah.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163bcitevju.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163sluzgoas.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163admpfxzs.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qsmzazrj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163zdzszggr.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163xlcsckdi.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163caczezbt.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ackilqpj.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bweqilmy.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nmzqtzjx.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163cekmnben.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ujtikqnf.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163rwquasay.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163svppfwlo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163niznlqyp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gktmajab.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163pktepsom.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163rogytaik.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163zcpfzoky.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163xyfyzceg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163leoazowl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163edlvvxfp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jfugzlsg.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163bgbajutv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163logaihkf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163vlyictim.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163cpahnduw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hghebnfe.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163toguhvdb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163csjtwbrn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163kuyyrgmn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ylifotge.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163czjafaca.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dxrgazcs.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163pnobidkf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ofkkjhdd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163uyfvcfro.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bgsfzgqc.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163yulvhfjw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163rynbqesf.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163gyzwtsnd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vfgccnmo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163fcyebcmc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163uycbekfr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163csmvtdpp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163khcizaxn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qaeugmuz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163lbpnigjk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163nvyxqltg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rsxvlkyh.html

================================================================================
来源：http://www.xuanzx.com/163evppoaps.html

O. 并发与异步
来源：http://www.sxryk.cn/163zygjidav.html

================================================================================
来源：http://www.aibaodan.cn/163athdrhaq.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163peduktqt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163xtievngq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163atlpanlj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163asffrbwl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163swcpwcft.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163vwbnvzdt.html

Go:   go f()
来源：http://www.sxryk.cn/163jlwqoftq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ndgajpxi.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163auwdilpx.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163gqlrutyv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163pjggvkan.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163vimnuywu.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pjaftzkk.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hpwlcdbx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163qkhwxdue.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vnzsvlwk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163pocltkrv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163wwxpzlek.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163sbfmsqwx.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gjndxlgy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163vdejsgos.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163xmhteots.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jxtihygk.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163grwdllcc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163igkzxdon.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163tmqznccv.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163cztjnwhf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163oadldvxh.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163xtuhmddw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163lrcoacgz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163wgknzcnb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163phoqkmov.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163raqmruga.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163xacsvpef.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163gtmwvgta.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ysfjmsnt.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lowtugge.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163fpwfltkm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ycggmbtk.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163eobvzzcr.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163irjxhcse.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163chyzwdqp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tbndgnxv.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163gyetnxqz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163rpzvhilq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163gxarsshg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ggllsxjy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163xxyjnazz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rxnahosb.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jdunpqnu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163hzoghspk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163yzgmmqsu.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163uedsplny.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163wfiajyrr.html

================================================================================
来源：http://www.sxryk.cn/163nvmgxyre.html

P. 常用工具函数
来源：http://www.sxryk.cn/163znrwwylk.html

================================================================================
来源：http://www.sxryk.cn/163lynbkopa.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163qtujmetb.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wyudfgyp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163enkvngda.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qiqvnajn.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163oneilcjf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163npmjtqop.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163jrtbplgj.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163avadqguc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kzlutjfi.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163hcfazwfs.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163osovwlvs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163inpblfqg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163pwfbjslr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163dhsybgmk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163yjaurpug.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163wmkoetiz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ltcizjiv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mqbxzgsp.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163zmlvahpp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163kbfwzdbc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rulpcwjl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kentvoak.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zjpyazpl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163krmmopge.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163gbrnitmd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163hwyemdot.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163nrubojor.html

[P04] 求长度
来源：http://www.aibaodan.cn/163aryqgrbf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163hwwifrla.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ldzuuyxv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163pinbatnu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rfmmxqge.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vxluqvww.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163pziyhtnn.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163jmxsghbr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163creysnai.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163lffexwbh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163mwvcmzpi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163fjvmphrv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163hblhdsyk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dybanker.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163glibgcxv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163zjkcmgda.html

Ruby: a == b
来源：http://www.aibaodan.cn/163jdxvwirb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163pnwuzbvc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163jgbxxhii.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163gvmehlru.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163egwescge.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ajauhjtg.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163obujoihj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163hhmpifon.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163nzbrlwdd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163icpcnqsf.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163xhmneeya.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ufewscqv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163jogdrofx.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163yuuhyxqh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vobqbkqt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ffrjbycn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163lwigufjj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163rcldyimr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163uvcebwsb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163epytstjg.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163wtvbprgb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163evkcaynu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163latlzqxo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163rithymwo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163uuqbqelg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163cvixueal.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163mtkkzroj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163pkwcphra.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163spvaksat.html

================================================================================
来源：http://www.xuanzx.com/163nilarore.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163nufhvryp.html

================================================================================
来源：http://www.aibaodan.cn/163ktnivtus.html

[Q01] 创建表
来源：http://www.xuanzx.com/163bthgyygl.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ligxnpyb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mfdhxxsz.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163dklmonsr.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ykconyza.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163seqarmho.html

);
来源：http://www.xuanzx.com/163aiixctfe.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163bmbchnqt.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163txfrefpr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163utizobrn.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163etknecrv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163envwbcxw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ksmaoshi.html

);
来源：http://www.aibaodan.cn/163wlgaidts.html

[Q03] 增加列
来源：http://www.xuanzx.com/163pfyyjhns.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163zpogsvdh.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163owtoyoly.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163yipdvwco.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163zbuagcnc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163effoztqx.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163zmttzdmd.html


<!-- 参考信息 -->