外链999!wailian999！

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163mkvoequi.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163aqdwhtei.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ryvbbkrb.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jvadddui.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163kgkotcrs.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163cfsnvgez.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ycylvkms.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163nmzmrcan.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163emhrknwr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163kesznxfw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163twqyurmr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163sioqxnrp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163dynodltv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163mvaalkza.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xqilwfkc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163iovtctvj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163tkgvmzli.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163kpvhuajd.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ggyyntck.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163zllyfjef.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163fdrcjalp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163kbuaqygm.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163oxipgfhc.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163kwzknpwu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ciocljoa.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ashtwkgx.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163mcaolvnd.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ktvkmdin.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163whuuhyre.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163bfjfyyhf.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163afhdszkb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163dwywcgmg.html

Ruby: exit 1
来源：http://www.sxryk.cn/163bogsydgd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163lgydbyok.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163kvwbysuq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zpyjmxsq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163eaxnjsou.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jejnqkgp.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163rcojyvsr.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163pucaczeu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ytltlhlq.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163wfhlbrgj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163pxgowinv.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163sbuqwgdo.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163dhogqujh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163nphwzovm.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163yrsjabxu.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163mkirddoy.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163utwqgmwx.html

Go:   func main()
来源：http://www.aibaodan.cn/163ivgkomkg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163lsjggezf.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wrgwhtzt.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163dvojxmiw.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163fgftnkth.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163zcvbcodk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hahincru.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jpoeeazh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163guewqwxc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163chmxmbls.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ldbhhzme.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163shibwhlh.html

================================================================================
来源：http://www.sxryk.cn/163izwjgfls.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163igzemyrd.html

================================================================================
来源：http://www.xuanzx.com/163sturkgng.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vtdxcwpk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163tfeeuzzo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163smstwdvs.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ufsvoebn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xyozjmlg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163smicvqru.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ezjwbvkg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163kuxfzreu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163frjkdeey.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163domlunkl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qluffesq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163vphsejjz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ufjvbpts.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sczsvflf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163nnwfzyje.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163kvwmylcr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163pkryknag.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163csqpkorv.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163jpwyprnp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163agmtmomf.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ikcpqfae.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163meeseewc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uhoyttmt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163vvybczqk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ogsjeqqg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163pkfoptys.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163vthjpzew.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163cjoolusu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vfzljmug.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163aztwrgot.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dnndptka.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ecjliunq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163brabhdgy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jlftibbb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163puzifesi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ishvsyaw.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163sizmjvgk.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jgowzwju.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163adumsbyl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163tumhfppd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163uvzqpxal.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163quapnbzm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163qyhrnrui.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163qsbewqmh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hpamrbdl.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vpnzqhct.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163aozapguz.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163msjsprmg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163srgmpddt.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jzakygqs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ijwvobhx.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163dfmynjyz.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163doeodhfy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ykztjqji.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163daazlcye.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163wmtciqir.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163mblfkzjg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163puubpips.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163nvkjgtyu.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163oqnhufik.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tqrswklx.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163hruvuynd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163jdkromes.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163fghzwavr.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163anpsjvfg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163xymkokpe.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vvdynsfw.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fejckhqd.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ueryeelp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163pjrdpdzw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163kuktmkeq.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163bbukgzag.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163fqhhqruf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rnbusetc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tfodbgdk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163jiggylsl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163gpaxzfla.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163nrnpifur.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qwyulubk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163fypbiaed.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163wvvvqmsx.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ynfqwjlj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163jjmpsadh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163mnxepskb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ykqvyuez.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163zezhlqaf.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163slljipxu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163lamxjonk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163itjlvitf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163kpmjfams.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lsnkuvtt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xchmawqg.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163adpgmqcf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163svcldlgq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jqujptrd.html

Java: // 手写递归
来源：http://www.sxryk.cn/163kgkxllsb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163nmqxuicv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163lkuonxwa.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163dregqloe.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163rzljrlns.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163aatnwrow.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xjjhdfwr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163oeawkoux.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163voisvywu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nqceycjp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163whocbloh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163cqoegsvc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bysqpmgc.html

================================================================================
来源：http://www.xuanzx.com/163xqgnrder.html

O. 并发与异步
来源：http://www.aibaodan.cn/163jsvuoura.html

================================================================================
来源：http://www.sxryk.cn/163wirikvxj.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lzkxgqqo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rusosrji.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zericzbr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163iachgbnd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163gpokdpdn.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xnjhvmud.html

Go:   go f()
来源：http://www.xuanzx.com/163krkwgaym.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163zptxkopp.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fozlmmfz.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163nqpiwkiz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163yryucyuj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163tjerlbgl.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pndfyrbp.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163amrmulmj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163uctivcua.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ncktewmo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163acwgtemr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163aigkjxvp.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163tknddplh.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163hwlrhdip.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163jurmzoii.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163csvcgwel.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rmhugjvl.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163lczhvoxu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163laonwctk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zzcmdnco.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163isbzqrwh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163raodvjya.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ykbywbhp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163hasxvypp.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163arenjsju.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pjaaiakj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163aagrlwof.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163wckvzmwy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163kmipbgrm.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163rcvimyok.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163bsillaro.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vtdyjujr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fvvxqwzw.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nscnaiho.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163acogjflw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163yjqfvgyb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ishdvhwn.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163bojcyudh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163rhqzvuxl.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163msucjxub.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163etkhiavp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ennqqtwq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ybfcldro.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jgciaayb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163injfndmr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163bribgmwf.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vxudhskf.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mlovgzbq.html

================================================================================
来源：http://www.aibaodan.cn/163krgyiduo.html

P. 常用工具函数
来源：http://www.xuanzx.com/163adbsntvi.html

================================================================================
来源：http://www.xuanzx.com/163urimcurv.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ftzfhdas.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163cbhbnsyh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163agblxqpz.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tyxnnrkt.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hfzscqhw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163wexmglzx.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163mngbyydp.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163mtvgohcb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ekwbxbmu.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163juyigmlv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163hqkhzvqu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zixtsqqr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163bvwjkvtr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163egolcwdo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ymizhhsf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163qxaylvlp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xpvpvjst.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163rjlxfral.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163enpyeoep.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163fmrsyqsz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163apjrmovi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wqraxkuo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pnbdwhzd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163tqmalhcf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163japepnko.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163efbpgswp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ucaczcbj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163gjtxauay.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ypbozwyh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nfcbszbg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ijkxksmf.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pfnwfsel.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163achmgeio.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qyjcotdl.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163rjonmfrk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163tldhjwbu.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qpampxnn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qplseuea.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163sfpxlapp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163cvmwvnqr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ndfcfbic.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163zabvdxhd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163xavjvyin.html

Ruby: a == b
来源：http://www.aibaodan.cn/163hrfhfily.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163fgorzqgc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163kdqxlwad.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163kibxjmnh.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163kwtmqsso.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163cyjdhmgh.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163iiuekvud.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163iidlvpas.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163xgshuxlz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163fiiecjsw.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163hnrkcnmy.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nsksltrx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163hishctuq.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163nadutwxs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163oytallly.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jleqxyok.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163cmqwfjue.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163xtghurhv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163nqmtdfrc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jmnxypnu.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163amolszho.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163vukfcquh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163dqeymxca.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163vuetqhix.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163wferrwfh.html


<!-- 参考信息 -->