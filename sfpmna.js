外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nsnlchjr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gehoeywv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163qvczrixu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163sjlbdnnc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hvkxjpvt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wikkixwu.html

================================================================================
来源：http://www.xuanzx.com/163mmnveirq.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163vwwyxlug.html

================================================================================
来源：http://www.aibaodan.cn/163komhusht.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163dbpubhnl.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hesuxrvb.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163owwdcsmq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qfovzvar.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iopkgghx.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ntancaif.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gxrsinrv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163awuzkrgm.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vdoiufxr.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qxcfgkww.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163nyajinzn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163foigehto.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163rutbgfba.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163sstjhfzr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163pulasnem.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163uextkcpk.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163oqxrrdec.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163djftgtai.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ijyytdro.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163cyblgazz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163mqtbyghy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vnqskgmk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qchjryoi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163pvgdmsax.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163nsbefeas.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163dgnmpevh.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163vgyknnvs.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zzfkgvkz.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163yvwfavdm.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163skrhhmsy.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wpctuipp.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ubetjgxq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163gyyodnsj.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163bpfosgmh.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163rbtrhjtt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163rqxxdjxc.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jtcmsvmj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163kxfifdwu.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163lwsajblb.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163llgagdij.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163efwvhjje.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xikbhqnz.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163xczijkfn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163bnbwuddu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163uqpegupi.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163wnibpqlb.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hnjyybmc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163vpppmveq.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163zvyqopgb.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163xljpmjbc.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ednrewbe.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163izivyjmg.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163tnuaqhic.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ffullepy.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ufisotfo.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vlkzlonb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163pftvenpm.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163lddxcipq.html

TS:   require.main === module
来源：http://www.sxryk.cn/163jpnvspdc.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163vnzrbnnt.html

Go:   func main()
来源：http://www.aibaodan.cn/163vvecudeo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163lchcyiwl.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163nyktwghg.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163vqlusblu.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163dngnkpen.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hpekjejy.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jenjiqyf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zvlwnydr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163sssfvalc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mwbpbrto.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163yrcsdwnn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163mehcbcof.html

================================================================================
来源：http://www.sxryk.cn/163jwvcwrcw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163vdavvrax.html

================================================================================
来源：http://www.xuanzx.com/163svuorutq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163hrxbdkua.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163dvnqlyly.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163saxgjvim.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gfjpyear.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wjgpwefl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163nevbyhwf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163cqzqidpc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163sakuurjq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163kcxctfmc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jcltzybo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163txzryrnw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163vhjdhgbp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ruakxylo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kzewmnxt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163oicwwazl.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163fbicaxqk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163khwblqxc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163xidciugt.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163upfkwzfb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163lwmytlln.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jfqiukod.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jjbxwwzb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wzeefuvd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163basrtizh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163auodnyir.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qkanesnq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163yqcijqrl.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163geaccjcz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163boyckixp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163anppspvb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xkprcvcr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pglquobk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163dkfggwqb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163tsursnis.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jpkdlgga.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163zftdushp.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163cdbzmtoq.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zpfvvcpn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zrudugci.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zljpptmc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163atautojb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163vbafyhrh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163eubqzhoj.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ijfdryvn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hjihapou.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163yawbsdvl.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163stojtcgr.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163laceqfjf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163askravoi.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hvifffwj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qxwgiwgx.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163syeubibr.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163limnepnt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tmzzcjbj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163mqpjyyor.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163knzgbstf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ttnpiauw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163yupdonut.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163dzqiohrz.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163xipylxmm.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ejsnjcyj.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dxbjzudr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163znvlmufr.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163qnnvtudo.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ubcbxkud.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ojqzvrql.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bwgvrrui.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bkpbbubd.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163kfuvykeq.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nfnkzhas.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163hhaujrag.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vmyvkvdb.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163pbfbjmxg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163lofctkjl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tgodtueb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163oflwzabo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163eljfwhgu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163nejmgjuk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163mtksbhgn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163xbkajpdt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163enhbklmd.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163jjeljeah.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163yahfmeof.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163pawswcvb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163idxiblhz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163wnwwndpg.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163tzbnswfe.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ldzjacaw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163iykhfygb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fsfxmvvv.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163wgqgqrbg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jelpcvul.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163fkwjzesp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163iqtqiedf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xwuelris.html

Java: // 手写递归
来源：http://www.xuanzx.com/163dcvjannj.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163pvqvbryh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jbnfaxre.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163cixasarf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ycoxttcp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163canqjufh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ymcigpzx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mgugrvhv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ipvalxdq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tkagepup.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ykibdtuv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163xsaezenq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kdvfzxfp.html

================================================================================
来源：http://www.sxryk.cn/163hcnbdzuk.html

O. 并发与异步
来源：http://www.aibaodan.cn/163cdgxbjnv.html

================================================================================
来源：http://www.xuanzx.com/163xytvxskp.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163garlvisp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163lkfycwmo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163mgzzzusc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ksbjxdbe.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kfstissz.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163piybfpga.html

Go:   go f()
来源：http://www.xuanzx.com/163iwsxyycm.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163amqwszrl.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163csguytfb.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163rmovnjcs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163cojysjou.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163frmjkajw.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vpmdjknp.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hxnuxmwj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163yrfbxdty.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hurswchj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163zfgruscp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163pbatnukj.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ymqfuauc.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163abcpuvyj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163lmvtxfyj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hrdsxjej.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163leahticm.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163vfphnnlm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163dlhvanxs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163nmuvbksj.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163nrkyoilg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163hzkautwe.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mhcuugal.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163pmwpaxpc.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xdkaqgfs.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163bzupjeqe.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163clicwfxb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163jntigckn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hbxgivun.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mmsmcfzm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163mwomdkvu.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163msnzimok.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163yxgiscpd.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rqmzglkr.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163srxmondq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ewcghufz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163czlowigm.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163gevjtaxx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163jshpjdao.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163uvzwpxci.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163wjogivho.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163yfldbwlf.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hellwrkv.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163navurjsm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163hxfzkqew.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163zwtuozxm.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163chmobgvi.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bwsjzjqt.html

================================================================================
来源：http://www.aibaodan.cn/163wdqpvrmn.html

P. 常用工具函数
来源：http://www.sxryk.cn/163plqpkbur.html

================================================================================
来源：http://www.xuanzx.com/163cuotyngt.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163mpfiqzpu.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163uzzajykx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163opekpkgc.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163widjwqhj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rgzfagtl.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163jzvryjuc.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163qlpieiem.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ugaglojw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163tfvogvht.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163kdrsoowl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163wujvcrjf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163snlwujad.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163opwvzlhw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163eyarjwat.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163tlxjrios.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163gdyuqeve.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163quhgstus.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163cnskulua.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163mghsbqon.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163grwwrxjw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163wwdxswoj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mhvdpeas.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vrraoreo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163yqheplwd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163nmymnbhx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163zemvffok.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163cdwkhfxc.html

[P04] 求长度
来源：http://www.xuanzx.com/163ogjrdzoo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163loyblwmj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163okyhegjq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kbbszsth.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fwnatugd.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163neizbncu.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163hvketwab.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163raouzvrr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163lpqcvwxj.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163fwdpdobm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163snimvsrg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163dgaauzqv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qqfaogxi.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mkyrnypk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163nxeoclnn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163vzlxhvpp.html

Ruby: a == b
来源：http://www.xuanzx.com/163rwcvdbct.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163tqwthrrd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163yhxkyhzr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163vxgcldqn.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163gikmfohj.html


<!-- 参考信息 -->