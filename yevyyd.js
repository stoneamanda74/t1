外链999!wailian999！

Ruby: ARGV
来源：http://www.aibaodan.cn/163ssaktbuk.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163vdpdsnbx.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163zcquwqhy.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163glhdgrgt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163yvxaczws.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ugtkxdui.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163useqqduz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163uboneoio.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163tvbbpokf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163hpeulzsg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ahossnhc.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163fkoetuoe.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163cfhjwavg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ydtyzqgq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dnrwinal.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163apneahih.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vrdldyiw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163wmrirvcg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163zblbldhh.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qvaolyga.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163caozrdex.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163cgxluydn.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163yxwdfydh.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163eycpejyf.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163jzvdosgw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ofcpafvz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ldtgpbsv.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163pdncvmsx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163joyaphbq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163irjkvncy.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163unodoizk.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163eohnrhud.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163bkqjrdvx.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163taznyxvf.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163guzqpkbd.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163mifkyqlv.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163mpbkoxfo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163cwvcgumd.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163pobpdtrk.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163phgeuyyb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163mamfmghn.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163tqtfthwo.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163kljvvizi.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hsbcfpxc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163aiaewwfu.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ddtccdlz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163icmccqar.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163icigedfg.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163qezfptcg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163qnethyij.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163bnrqixdj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163bdpvpdwt.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qslogsnf.html

Go:   func main()
来源：http://www.xuanzx.com/163qqpqsskt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163vvkjfkut.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163bjqewnts.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xjrqvslc.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163pwptufer.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dqxcyexi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163akgtkyqy.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ubzgevhc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163sofmcijk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163jmmyyfdd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163szzmxawd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ypnoqlti.html

================================================================================
来源：http://www.sxryk.cn/163wnbicfro.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163tzdhqnsz.html

================================================================================
来源：http://www.sxryk.cn/163unvtkhes.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163gpufrudr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163jwfawgyx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163dpejdwie.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ixssbczt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nerwpxyl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163xvrnwpgq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163juxwliql.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163jsvzawho.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163sdtvpksj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zkhpkwkb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wloviiqf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163hblcpkdm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163codstsrn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hvzggxjr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163uvjrghkp.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163uddtjtva.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mbmrcjcq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163njppywhm.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163bsswfgik.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163xfuwngzm.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163sftzzaym.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vrgwehgc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uzfjxsew.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163mryhezaf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163mlqfkmll.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163foceguky.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hdeszwvj.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163axmvhfvr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163gluudffg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163imzcagse.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163awlbpbkl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163oixaakaj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ypcqamdy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163zgdrmiab.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lvljrpuw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wbeyapxg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163gaodrphq.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vudpcmdv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163rhofuopr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dbniajgc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xbsyndwu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mqluikhe.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163zbtpqhzt.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163acfwgrmc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163lzvkzzsj.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163pnlbudsz.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163bxsjcsqq.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163vthobtxn.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xjphnlmc.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163idkbbeqf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163abtsplwc.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163rrmiloal.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rotkejix.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mufrtexa.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163jbhdtwgt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163brbqaldi.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163bfbeknht.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ujdnadrs.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163sggzrgfw.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163rwmsvwxl.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163peqnbwan.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163vjgegyro.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kghyzsbf.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163pinqytmr.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163wanzuqoz.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163nvkmhkzg.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163hfuulrcd.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bfrcmqge.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ljwuypys.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163cybmojzp.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163lclqmyhv.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jkqsfpbx.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163mgioiubv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163igjhheqh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163zwleeuyw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xskxmdvm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163yeqztozx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163etgpsthh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zdwvscib.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163pvoppoyb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163uhfrimlc.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163fmsnutgn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163rjqlgzlt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163kyzrznbz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163gynohams.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163erbycchv.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163nnkcibol.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rgcuactu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163dvbvqkav.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163klbuiauk.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163urdcjznw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ounsugdj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163zlmkqhbl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dlrobedz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kgshkteu.html

Java: // 手写递归
来源：http://www.xuanzx.com/163amwmwgoe.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163eyzxysit.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163pffthdxh.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163palgwrqj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163mxlialky.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163jqkzeooi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163wpadqqxi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wjbxbcmu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bpsbbhjb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ovhbuzrm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163smkinhpm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163zcuuloeg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mmhblwns.html

================================================================================
来源：http://www.aibaodan.cn/163slidjrsy.html

O. 并发与异步
来源：http://www.sxryk.cn/163ipniabzl.html

================================================================================
来源：http://www.sxryk.cn/163oipwkmda.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163zaswqdri.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163lnomifnl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163rdpajmic.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163lpfrrehm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163nnhqnjxv.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163usksrlmi.html

Go:   go f()
来源：http://www.aibaodan.cn/163afdtcikl.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163qifrgrbl.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163inyksrfq.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163wdjtvvgb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163aqgtrjmm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163dvnyjmlq.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163upepltlp.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163uqpjijtv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ccpeztru.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163czyglgfr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163lbpqnbmb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vxcstujy.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hptupbwj.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163mybfkfel.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163xfrntzqi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163pucltenw.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163gwxheroh.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ixhxpifv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163erjtdmsg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163oqurruxs.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163icmtgrqd.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ecyaxcxt.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163npdtsdnb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163hspqpezv.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163eejeppaq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163lnksqulk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ecunrjfr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163gfmzafhc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163yjvqamnr.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163qqmltwxn.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163dvgnvhnr.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163yueaelul.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163avjtbemo.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163irmibvwe.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dvkjzfsy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163gpkanopa.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163gaacfmch.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163wvxmmyiu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163kscstkxj.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163elcoyewa.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163geowuygf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rnvdpvpj.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163hzpvcfvk.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jknzcdjy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163lmdxhzay.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163uajazhhk.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163dtpzlnfi.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jgymhusb.html

================================================================================
来源：http://www.xuanzx.com/163cflahmzv.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hymdoxho.html

================================================================================
来源：http://www.aibaodan.cn/163efzrcnkg.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163upyrkosn.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163klekrkgf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163gdnvoett.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xuutlkwl.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ddrlhxqt.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ynqpilhe.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hnrxtfbn.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163mwsoeqph.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163hwpqnqyz.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vhtduppi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163wjoejlfk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163cuuhqdwn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163umnuptui.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163zfixrbfp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163atkknslv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163eymemlzx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163hmpcrjup.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163wmpnzgfo.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163gsaltccd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163drgeszdk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163toympejf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mrntzjfi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yeavamwk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163mmwezooe.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163nrsegbhk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ndjderfk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163zfrxrpme.html

[P04] 求长度
来源：http://www.aibaodan.cn/163bsjbkgli.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163cvoxrmec.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ocswleth.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ojilqdlu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tyhtkcmf.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163uhdseclg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163grmpmqac.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163srqmkaxp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163bvbdotko.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163qpvspggw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163wavziknr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163jkswlfrf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163xifvzsxr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163owimbihi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zxjwdvcb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163qsokjaxp.html

Ruby: a == b
来源：http://www.sxryk.cn/163ynkojznq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163jehirzve.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163djouxgft.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163dnmtknfn.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163bjfnqynb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ylpadmnc.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163vitravxh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163rnkodsim.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ijzcttve.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163bgzksmpw.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163dlmrohqo.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163hpmrhkgk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163wcvuqobl.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163cwthxzex.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wqekvpof.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dxhqylfa.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163awqeelxc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163jqukxkkj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163oltekoou.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jwlukfkp.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163loeobpww.html


<!-- 参考信息 -->