外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163vympnamt.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163csxlclgc.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163pkjlpicb.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wgolokzo.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163xudsyclv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163beuqjqsm.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163lfmyknuq.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163artqdsux.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163yvqllije.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163djaudear.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163xuesrubv.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163uefajqwx.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163mohcozrx.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163khymotgd.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163fmttzccw.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qzmyjmel.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163glenytar.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163lopxpseu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163lxpbtmwl.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tjjaoxxd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163eabiknhz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163epshfecu.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ncbaorhu.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163mpxpbrsd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ewuloqcs.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163urrtodwl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163wbdssbun.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163jcoqtyfr.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163xsxpwbpi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163bcsziuij.html

JS:   require.main === module
来源：http://www.sxryk.cn/163uthsxrzz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ierdqecq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163wgkgzede.html

Go:   func main()
来源：http://www.aibaodan.cn/163eokukqqo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cvribvpd.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dhzyzfbb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wymjzhgy.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163loajpfgd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163phxvczpc.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nrfdbshc.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fmxsjxtw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163vdcnqtcn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163kpatiyge.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hylkmdxa.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ovvqkvvr.html

================================================================================
来源：http://www.sxryk.cn/163dttsosfn.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163nwbjekjz.html

================================================================================
来源：http://www.xuanzx.com/163sjkjgysx.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163bqtbtagt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gnjlmswp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163vftrghij.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wstmghqq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163idprztvu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163btzxfsgy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163klyqnoro.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zusjbfvu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163winctckp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163mnvomhlt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163khjgsdje.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163cyqdzrvz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ezxnbarq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nhgwifyp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163gatzstyx.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163izavuuev.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eyjqgxkz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163sacaspvf.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163vlzbaclj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163eiiuycze.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ehpmbxud.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qqehdesd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fnxtzdqm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163chmznxyp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163fnxtljlt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163qhphnukd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163roflqhzz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ifrorhtj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rqskcrwp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163wpfxwpwc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gafnjcgm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pvgwslwi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163cmiyycxy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nkrememi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ieeurynv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163acwdyedp.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163elxlwrni.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hbcxnmlu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163uhflbynp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dvbkxkab.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ywemamqj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163hlsheaoq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163miomauxz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163uavwpmmx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163tlrjrham.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163nydjcpqh.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163pctlemav.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163vehzbdgn.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163eufsywjl.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bdjoasdm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163pkjachli.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163cqbqoasb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163qonknbus.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nazrwfjw.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163myxkslzd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ozgiqvfw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163yabshktz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rfnrgkow.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ncsaheey.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163anofnhwl.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163oqpgugkp.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163frtffocq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163zlugkach.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163uenrycde.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ueuusqxy.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163uepmmwtm.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gqnwnnyg.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tobgtbue.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xycvregr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163kovnzeuu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xnhcthjy.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163tlldlfcg.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wwnmcrju.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163xbwebuiq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163zwfdpakc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163rrfjpxqy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163dgqdlrpl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163khcomocg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163catesmpc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163zoabtgvv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ruhfnevd.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163voxyzddb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ezdnbdjl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163rmsohlbd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163htdokadq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163nzaogdwn.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163fsrrrkxz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163potobydt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163tfruautr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163zswtvifl.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163kmfbmwan.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163odoveguo.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163zjioftex.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163skmxjtql.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163iacxptkq.html

Java: // 手写递归
来源：http://www.sxryk.cn/163yxehypve.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163yorvpnvg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163gqpefzzw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163rcwctydt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163wwflhqza.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163aspflbke.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ymujrtbf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vooohkgp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kazrmxuw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163czchetma.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ybizebhz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163voqbmqza.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163abcnwuif.html

================================================================================
来源：http://www.aibaodan.cn/163tlvyekpd.html

O. 并发与异步
来源：http://www.sxryk.cn/163xefqmoge.html

================================================================================
来源：http://www.sxryk.cn/163xomwkboo.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163rmilbfsg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163sxhfyuxl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163fjbyytus.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ojypxneq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163skkjqmox.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163osieifkk.html

Go:   go f()
来源：http://www.sxryk.cn/163nijezhau.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163dvjyiuik.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ralqqtdh.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163xjudvscy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ddizbhfp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163onzctxmx.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xbpmviag.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hjeydnza.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163eapntike.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qipkrcjn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163styxnmfe.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163yimxavfi.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163rhdtezhe.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163emndqvcv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rhcqojce.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163jjtbnuic.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ymatarwm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163mzttbksj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ohzvyjbk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163hzyshsto.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163buosvgxx.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dyzdszac.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163xjykgluv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163pnzbfpvu.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163veehdngt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163okixxrqh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163awrvvykg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qbghhrqg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163tarcgqnh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163cxwccyto.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163pbpdpfgm.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163eufssrlm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163pvboozkw.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fmirhqdk.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163csvqipau.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163mjkgapfz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ktsmmtja.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163plgkoywt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163codppyfs.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163nqwfogih.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163jkzyyvao.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163tispxycm.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ndlksdeg.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163davturle.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163aobgspbe.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xiyipozg.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163eeldpkol.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tmwqkywa.html

================================================================================
来源：http://www.aibaodan.cn/163gypadalj.html

P. 常用工具函数
来源：http://www.sxryk.cn/163airvkivr.html

================================================================================
来源：http://www.aibaodan.cn/163atyjilao.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163mzncxifd.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163zkzwvmhm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163bdaitnxp.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xugcorgs.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163slxeiuqm.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163axjpqoki.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163atnmvyrt.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163jhjvbpbi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163fgdockvn.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ljamguem.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163tusabhwn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163svxxfycx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163azqpmnng.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163yaqatqiw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163bivqxupc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163bcxydcvp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163mfhkcxnv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163enauqzac.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163lcewwchu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163tzkmfwee.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163kitjmfjd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163odxdtnsg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163arxrljsu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ftxhpmlz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ehpwgktq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163qfunklpt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163pltiwuix.html

[P04] 求长度
来源：http://www.aibaodan.cn/163uingizto.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vlrlfdir.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jaonrwle.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cqcglhmu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kxzuvinf.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163welabliw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163fnfxoaxb.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163gjuxsxog.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163pftpzurj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163zjyyrkku.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163gjrjdlhd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163lqwyakyc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163sgieewma.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163swmgztua.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163lvnwkcrs.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163upfzevrh.html

Ruby: a == b
来源：http://www.xuanzx.com/163qloihogt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163utuqcpfw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ougbxako.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163lcfjulam.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163hgpyvxts.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163zrpjfrmd.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163qbezylcn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163zowbcapk.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hivtwaba.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163eoxlicew.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163pprvxxzi.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163nqwuhxiu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163mfwkjhzw.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bntzhiov.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vpmqgrun.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163clzjuthb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163hcqcdkwj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163mmgbgicx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163eyhckwog.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163vjwcgqiq.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163vqqmzpvo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jlqpbsck.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163znmyznht.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bfcclocf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163eabhrjju.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163adovwqni.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163pgrlnhrc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163awtephxw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ibgubrfa.html

================================================================================
来源：http://www.aibaodan.cn/163lovacmuc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163wdfzmrml.html

================================================================================
来源：http://www.xuanzx.com/163eqasftig.html

[Q01] 创建表
来源：http://www.xuanzx.com/163aeiwvuaa.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163xsofvawc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163uohvpapo.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ambyzqkh.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163hxaollkb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163skhhqrbs.html

);
来源：http://www.aibaodan.cn/163jcwgmdwn.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163avjfmuon.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163hwobxhpl.html


<!-- 参考信息 -->