外链999!wailian999！

TS:   process.cwd()
来源：http://www.aibaodan.cn/163icchbiyq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163jrzcevfk.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163enohtekd.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163wosnuvkc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163bwqfvvks.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163inspfowi.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wvpylsaq.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163mouprvmu.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163lwcrvioh.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163aawksqnk.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163vftjhqof.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ghxujbvk.html

Ruby: exit 1
来源：http://www.sxryk.cn/163iokgbfib.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163clakhkrn.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163yolcglzg.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qbrjmuwq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ptbxawcy.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163hcydlrgu.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163xiazzghl.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hchdklzj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ijhvkgxf.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163fwfnsahw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163tgucpmbe.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ruocrwwm.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163vidslobq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163rzkprjjf.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vofdewab.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163kyrulpvg.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163xhflhcfc.html

Go:   func main()
来源：http://www.aibaodan.cn/163lattpiju.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163lflamfsi.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163rabaawwf.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163eetgbdua.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163sdswtyfi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163jkthtdgv.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qzfgtodv.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ashkprbj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163raqtxhft.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mxifupwq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163iqblnzuk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163xxyrmbxj.html

================================================================================
来源：http://www.sxryk.cn/163gaxrdybo.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163kqcidtde.html

================================================================================
来源：http://www.xuanzx.com/163cgmkoebx.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163wqcucpbv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163tqmuxdfh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wvjpuilu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zdecahrr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163auqlkgtt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vlgwhbcc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163wlieibjj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ajvzftvs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hooxcbxq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163fwcobzya.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163znvdeoaf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163tevubkny.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zguoczau.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kptzewqo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163voitrvlo.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163zqphxsfm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ohtrqicv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163kuuuszto.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163mywbpqtm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163rjkvljmk.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163xgtfuaaj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gqmphqlf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wkijghji.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163bbdfpoqn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163veylwlau.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163rewgwzyq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163pqbqjfmm.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lzortfjn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163prqowlzz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163wbxwrbvj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lkmfihxr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vwfaacre.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163chzcjkmy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ecoahpyw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lzqrxbqd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163fkbghocr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163delrkxlr.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163dmlqmhvh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163xepsmszt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mzcqwtxz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kyyueqmm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163orrmvqzw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xdriesoo.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163rktzwesb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163kehniyyq.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zavngyts.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163mpjpyeet.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163mgbfsysy.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jpxgaapr.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163lgtxmlsx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163msyuevum.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ogivlnmn.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gavwsqpp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163brekifsd.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dokauyyq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163hfteybuw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163dcoofzvt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163xcsblbkb.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163surkokuf.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163qfetrqej.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163utsshdfk.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163rsvuzzyb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163oqlcqgzl.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163drsjoutr.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163jdapqfye.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163dmlxlhrh.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jyzhkeze.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163aazfeenl.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163qqodrqmc.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163vzwaimkx.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xwrzpvkg.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163xewrllty.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163jwcpdkfc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163zfnamnlx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163pnwjsgow.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163cnbtdbgs.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163vcnaswcn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163qyjlfpwt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163euiubzcf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163nvutghaz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163urqhxntv.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163blwxbmyn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163skjyclwc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163cetxdvqa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163brtpgqrx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qltwfzwi.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163cogzwcvp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lyoqymtt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ezzhbkja.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ylrbuwcf.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163amkwynkw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163uadamrtn.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xldzefrb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ofyegugo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163etfsnuwv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163oarcszvc.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mlwtpxkx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163xknvmoha.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163dmpxgmlq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163yjtqfqiz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163wapkykmq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163tnhfdadw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vhkyoqbm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vrjxvjnh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163zbiuibsb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163qwheaitg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163iidoiasj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163irhojudr.html

================================================================================
来源：http://www.xuanzx.com/163zzkoloqs.html

O. 并发与异步
来源：http://www.xuanzx.com/163aflnxggk.html

================================================================================
来源：http://www.sxryk.cn/163dvvdiowr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ugcqtcvn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163aaljrqsx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163relhomwt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163nnqwwuwo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fqmbizrn.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163aeknvtab.html

Go:   go f()
来源：http://www.aibaodan.cn/163knywpeax.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163pluswvkq.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163tppejfjw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163eowtlwkj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163upjxsmed.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163krycxkzl.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lsznxzqz.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zfpzfuss.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163asdputxs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qnfdpvfk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hdjbfein.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163riooxeon.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mzemntys.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163duowtiif.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163foqmgymg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163tqrkjlgm.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wdbtnyvk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xljjubat.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163rohxtcju.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163suxonqky.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163gopjyslh.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163otlcrfti.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163rvarwbxk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163yoqecehf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163qwuicbhm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163svewpnrc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163bbgoiryx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nxqmldav.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163kzubfehh.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gcotnhjr.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163swljetcy.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163axfetbmc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ingvgjws.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xagnhnuh.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163mflbdzis.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163usvialdm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163swjmuzmj.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163dqfiuqhg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163epczqrvc.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163nmytkaky.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163jwrzkagj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163htmlbpdc.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163gvacngxc.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163gphedsbe.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163mxozmfyb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163qdyixvek.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163gubidayy.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qmhlqbdr.html

================================================================================
来源：http://www.xuanzx.com/163avzlaekl.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163qnanwcnr.html

================================================================================
来源：http://www.xuanzx.com/163skwqyqcg.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163hzqwbqld.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163iyttwzng.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163zntbmsne.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vaxizeiw.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bstestep.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163hyfhkqoz.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mcugfkqv.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163onporjgr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xzpzisoa.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163qmmeueuv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ljlgizen.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ppcjkulz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163pgrgkiqi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163oqbkgzor.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163rrmiklxh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xvnzzwnf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163hcgjwklq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ycwkhxnu.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163sfxubxgf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163gnjsfrwc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163hkoomajb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163scftnemy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163shbxelkl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163elanjflf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163xjmkwhan.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163poemnclu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163melvtrvq.html

[P04] 求长度
来源：http://www.xuanzx.com/163pwywthmo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zwkxzxbl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wjcrnosj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163tstkguae.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yinivjfw.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163alwxnbeo.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163xzjtcixp.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xijuwruk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163dwxvfais.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163lvovgppv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163fcgpuhid.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163omsexcbr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163iqisrvde.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ckedurid.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163pzevyxbm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163pvrpzkek.html

Ruby: a == b
来源：http://www.xuanzx.com/163xnvilhry.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ieuntyuo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qhddrrog.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163zksqckon.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163xyjmjbov.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bmuxsiqf.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163pufvjjxb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163azvjjgsb.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ttegunnl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163eivntbes.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163liiyquqn.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163bofoindy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163pqlsrgjg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163relmrsqp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jhwrbknb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163flwppdft.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163dmgdrmfz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163jgwreiwb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163wsbixmup.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163gzpooiax.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163phahioxt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163zmaxvtvt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163blidvlaw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163tsrtgqer.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163uavlsfpl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163xtobonme.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163rdxofhxz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163wdqygzxs.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163cvyikfau.html

================================================================================
来源：http://www.aibaodan.cn/163vfmolefy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163spvxoqnb.html

================================================================================
来源：http://www.sxryk.cn/163ibywrhrg.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163cadlcnfv.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163vzxakchj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rytzrstx.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163zeiuflvk.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163astzbmub.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163xgrgcltr.html

);
来源：http://www.sxryk.cn/163qzdwtpdo.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ealrmnid.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163witlldkx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gygymyjw.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163xtqdapxt.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163cgkidmbg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163gcvbkhxb.html


<!-- 参考信息 -->