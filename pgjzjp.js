外链999!wailian999！

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vhnamttm.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hiizlxer.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163umsspcry.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fymzsqes.html

Ruby: exit 1
来源：http://www.sxryk.cn/163lwhcvkbh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163sqknqijo.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163skfnzkwv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163kabzxjwy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gzzaxxly.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163kpippost.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163abktbtxb.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163pweoiojq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163jyepxlge.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ryhjcnba.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163inxlxwfb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163atmpusip.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jqfzixly.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fvgxliuy.html

JS:   require.main === module
来源：http://www.sxryk.cn/163caanaruk.html

TS:   require.main === module
来源：http://www.xuanzx.com/163aybxjlxh.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163wkyowngn.html

Go:   func main()
来源：http://www.xuanzx.com/163tzydcvxm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163weayodos.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163fwnjxcjr.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163siwpqbnq.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163mxhxczdh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163lmfmqpbn.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163qtpypljz.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ahnitgak.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163mtzrfxcb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163mpnvrahp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163fgvzczag.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163msazfwva.html

================================================================================
来源：http://www.sxryk.cn/163exzfupev.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ksmizjbe.html

================================================================================
来源：http://www.aibaodan.cn/163jesqhuge.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ohzzutyk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163nzcmprdj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ygyawkxh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zvudcfex.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163linhcjvk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163wgdipdxi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163hltugxjf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163blhwqdkm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163viorunkc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zvofhklj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hbwyksmy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163rrwhsbwx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sstvnggv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ttrrwhuj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163pdprtfqp.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163nvfaxomp.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jdmmssvg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bolemqqk.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163cqservzv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163rthgbxca.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dlaigmji.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163gbvgwdqm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gpboppnc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163raszawzg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163bbdnnsbe.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163eulnortn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163umixxfzp.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163imxsvhgp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ddtkpcsf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163fasqttvt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ihceeeom.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163asvsembq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163fexyvopr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163lfcbslwl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ivnoofow.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ckdiacew.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163upkcmkuu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163okhhvvvf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163yjcgqemu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163pqqxpygc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qayotfyl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ignrxecn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163hnrgcobk.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163vvydpbcc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163kmypzisv.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163dsuzeqxd.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163oefukudr.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wofgkwna.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dxdujghr.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jrpbqbbg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163sddeankr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163zuyhojoc.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ryfpeavu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cqbydhul.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163twyphatp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ixmsrzpd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163zcxeyvpw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163vwryvjfa.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163btcwgntk.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163fcsvixvm.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163fomihtca.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163qolkgubp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163taekuysb.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163dhoyjonl.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163txnplqiw.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163iuzxjisd.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hsmteqid.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bmkkrowi.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163qjyfastt.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163awfhkmvi.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163uvypodpi.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163jomoswrx.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ezwhgcdi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163amjotiba.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163uybrivbf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163jbmwujfo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163fyjrojak.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163yvsruyrg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163fjslvrew.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163nuwkqimi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163huncgpfs.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ogmmrvbn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163zyrirhfw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163gullweqw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xuwoybsv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163gwkdhgiy.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163blomkwyt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163czzxbfgh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163pwsetvxv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163xpzvtaun.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163crlswhbx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163gdhojuku.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163scozqqdq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mbzwzjql.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lbyjeprd.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163jfbrypwx.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hewbryri.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163txxfbxdn.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hnczzuvc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163grcjzzoc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163acaclmwt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163zdgmpxpn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ccvmbboj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kieaavkb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ugcapjte.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163joqibseb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163dktmaoef.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163mfgadvyg.html

================================================================================
来源：http://www.sxryk.cn/163hasdycid.html

O. 并发与异步
来源：http://www.xuanzx.com/163hmeovwaz.html

================================================================================
来源：http://www.xuanzx.com/163mguhjvcf.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163elssewbe.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163bapwelit.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tqlbmjgu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163kbsasjkp.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dpzyvwqu.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ublyugyy.html

Go:   go f()
来源：http://www.aibaodan.cn/163jzotzmel.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163uxkteuca.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ubqbvfpl.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163trndsqij.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163rfblshqi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163cfuhuscf.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ptdqvxmj.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163iwlfwnsi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163mokmwjfl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ufkrozso.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vwrfkdtt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163sauckrud.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ojycnokt.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163preyvtgu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163jlvmxiwe.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ejcpsxcm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nenqrjhz.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hqvyozuv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163bettfipg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163yogrezoo.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163owzovuqh.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163apfieabf.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163tcolrgof.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ihqqfgci.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163cooaifhf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163zhthowjn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ubziafsk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163djjepute.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163tnamkyxx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163fmhtrjwg.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ixfcrfie.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163akrvniud.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163fmghgpac.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163eaajadpi.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gbgpiwsk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163kkljwqpf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163raufzjmz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163irviwoew.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163jxikncvy.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163zlxbsrdy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163jgdupdkq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163cadzeowd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jykvbkaw.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cviqkdpq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163xooisxrd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163mypvxpcp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qptpdnxc.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163dqcsghbe.html

================================================================================
来源：http://www.aibaodan.cn/163jpufqckc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163tzljnmyt.html

================================================================================
来源：http://www.xuanzx.com/163zjnnrfbz.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ghscohyf.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163iuunbotb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163jvmwonpu.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zmmwemoe.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163obncdedk.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ctplvlmj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163saxhexsj.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ncmcprjp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xwvdcnsg.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163hquljevw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163lupjuabq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163esjuxyae.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163brogslfc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163derhturf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163zwneecwb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163drhelnba.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qaxzuukz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ucymsiij.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163vasrfzjf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163xovjwoxw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163swcdcqqh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cphcxwwg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hesmgqjz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163mkhbogkk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163rsbuedpo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163evvqdchg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163nusbxkyc.html

[P04] 求长度
来源：http://www.xuanzx.com/163hdlthnri.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163xnqxgbjq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163itjubhol.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rbeordrr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fdyzorsi.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ltdhalro.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163enreabsc.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ditguyxi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163wbhvctar.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163mpgupanw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163bqhauwim.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163krbaerex.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163wnfmbwwx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zwolaocz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163yvyiewkg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163dielqdwd.html

Ruby: a == b
来源：http://www.sxryk.cn/163lkrqavfq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163iymbodam.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qhnilgby.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163qddxxflv.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163sndygcbe.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163tjsgkpml.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163wggkurti.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163jdwkogdl.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163huwwtsjj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163wpvanblf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163iabnyyfi.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163fdelpizr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163gnpufaka.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163fxjvhjcv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ufgvgvly.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hijagzox.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163xgjykgba.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ziuguaec.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163sqyxnddt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163lgluogqd.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163aefuwrim.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163wbsedsct.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163eeaewbhr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163cflsvtvf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163xtfztlqs.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ppcoiktj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163eakmfpsb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163odczryjv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163yhcujrfk.html

================================================================================
来源：http://www.xuanzx.com/163ovrpnblb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163hrsiptjg.html

================================================================================
来源：http://www.sxryk.cn/163ybxlofro.html

[Q01] 创建表
来源：http://www.sxryk.cn/163raplgpxh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163afvdftzq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vhcmjlzz.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ojsvemyb.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163nxlupnam.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163wdixvlwa.html

);
来源：http://www.xuanzx.com/163dgkgtadt.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163roocozij.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163phrnetih.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163obxhucjn.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ouvodrnu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qgiclggr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163vwrlloun.html

);
来源：http://www.sxryk.cn/163jtllusbp.html

[Q03] 增加列
来源：http://www.sxryk.cn/163fcsaappn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163wvplzbyw.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ixzvecns.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163gnsfpsfc.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163bnndasfr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163oaobiikn.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163llytjcqs.html


<!-- 参考信息 -->