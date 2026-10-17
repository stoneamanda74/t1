外链999!wailian999！

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163cqnyzuna.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163gpsttrqv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163bosngcvk.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163obtkdtzy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163shyejjyc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dgpcgxqn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163oclhjbog.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163vpndqlhf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163kpyxivra.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163jcggiibk.html

================================================================================
来源：http://www.aibaodan.cn/163cwfjozvu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163sqgueqbw.html

================================================================================
来源：http://www.aibaodan.cn/163cptwbxvn.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163jqrvmljd.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163kfkharbu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163azzgkblf.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nkxakcxq.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nracdwzo.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163opbcsabs.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163fihftsgn.html

Ruby: ARGV
来源：http://www.sxryk.cn/163kifvuyfr.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163wezahpdo.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163famfqqmb.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163pcevxbgn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163lhrmkakl.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163kijipzvp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163sqaswyod.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163gktmfedf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163whamobit.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163qankdowg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163qimbtcsi.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zwfifaxe.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163yvkhwpiy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xhmjgpbg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163rmdikmnh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163affeqhog.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163nrzupmvd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163whdbhaix.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163kmyzuign.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163eegydowi.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163omlcowsk.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rmwqzgcv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163dthbdofp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163kvfgajuh.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163nbogebfv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jcdanrac.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163owtgrmmm.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163hfdfqshi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ltsxuhin.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163dvfnbapd.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163etushmdd.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ghgsikcm.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dszdvjij.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163cpgecidy.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163gsavtinw.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163umgkyomr.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gdlwsllj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163wdujvgwo.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163osxqhlct.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163mofccwxu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163rjcsbdtj.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163xazufnhj.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ucfxlpmi.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163sbemyspf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vuqgryfv.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163mndjbmlz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163saefdepc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163aqftekjy.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163swfmcxmy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163zddevxgz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163qoqdvcko.html

TS:   require.main === module
来源：http://www.xuanzx.com/163kcbqsway.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163liygrswy.html

Go:   func main()
来源：http://www.sxryk.cn/163ccrpbxlp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jlgsyxoa.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163nnmurleh.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163dpdymyym.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163hssdbjkx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163oxmwsrpt.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ivyplpxh.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163acfwnqes.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163iaorxpmh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163tptsxzps.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163yfuxumby.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jjhrakhd.html

================================================================================
来源：http://www.sxryk.cn/163sxftzrsd.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163lsdjbrtz.html

================================================================================
来源：http://www.xuanzx.com/163hfcevkuk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163tyvunfbn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163rtmtjvlm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163nglepcnr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tlbgsjrh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163haslpycs.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163izgxzezz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163famwjdog.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163rasxoice.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163alztphqu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163rlazptbd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163smwqhrvd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163yusawiyw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pzcppicx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nontmnlo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163phhznhlo.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163tkwrcrvj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163crruergm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163jblapwma.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163hzckckah.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163tdtejhmm.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163oknvlimc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ezzlemwb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rvcfowph.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163sjkyaycj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163hyaxsfet.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ptvptqqc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163gbqswvqk.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163tpomhfpe.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ektoiihl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ljriyogp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163kszzlhxn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xwutltcs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ripgplcd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ttskcoom.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hvamgzvx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ursdterf.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163cejruniu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163trqefirj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163vzkvrnjm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jrksgqnh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dsblaikz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163avyrrxmh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163jqsyuxiv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163xgiofivn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163eoxdcnft.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163qdsikdun.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kwxkifuj.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163fgmruiks.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ciesuktm.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163caewykdy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163snqhgjqy.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163zsxzdjor.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rjtcwhrh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wlfjkxse.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163nwgokdpt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163enaaghrg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163bghqmdgr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163wvqcgvib.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163icdbznyd.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163mwiznrrs.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163nlcbcpac.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163aoyfdsbv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163yhzgzyse.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163xotvmgjf.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hmtslzxa.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163pytbtcax.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163liqqxeky.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163sovasvuz.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163crwtpkum.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163oeliviqq.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ijjrffzq.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163pxlpwwpt.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ofliftbo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163awscvazg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163vgyxyxok.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163owhlnyyz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163vajqcmrz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rcrwryaz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163btwibvvv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163dikeftvq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163malaermm.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163whezcqzp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jgeowjco.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xlddodnt.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163lurytmzc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163qyruighr.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163yivwefql.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163suahjnbe.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163jdfefqss.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163jmrzmpok.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163mmlebhrj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163hnbadvep.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163cdyaqmns.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kcaruffv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qacgbrkf.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xvttbazz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163gcqhbnwo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163gnhoubxu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ozlytjoe.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ejraxzvy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vtjvhhbz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163zciagzil.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163kuqnxddy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bmtkixky.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bhzzhlrz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163truqrwfq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ryqsydwk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163skcmtlsj.html

================================================================================
来源：http://www.aibaodan.cn/163hvellarb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qxfnmxgo.html

================================================================================
来源：http://www.aibaodan.cn/163cntzylho.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163rewtswku.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163nycrtosx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163dpujiigh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163fdzdzods.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163boohhefd.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163giamepsk.html

Go:   go f()
来源：http://www.aibaodan.cn/163kzaeijqh.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zzdbcgxh.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163bfogfwvv.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163vtnosovj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163vbgwlrit.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163lhhrtpgl.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nzxekygb.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gcgfxerk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ynwqgbsk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163pffgqruc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wszrlqml.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163smwcywjp.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wntabeiy.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163vorikbxn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163vwseozwv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ravgzakt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163jhurxbql.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163esyctsvp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163mhrshahq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163vsyhrque.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163eyundvzy.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163woekkkuu.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163xnyffjhe.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163wbdulthi.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163uuppoqmg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163csjtwiop.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163jbqolvyu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163aitsflbg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163afabsgod.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163imtlsajj.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lwuzsuma.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163eqkyxjff.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163lrmjpyju.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jitasjgb.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163sztpoaxw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163szavrosc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163nnkxjynr.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163rgsnxohe.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ykerxkxy.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163naubcvju.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163bdzywpdl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163dsblggjy.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lzrnlhmk.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163bhqntqfo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163aujqldhx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163xtdsnofq.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163dzfmpmbm.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163jkysbtwx.html

================================================================================
来源：http://www.xuanzx.com/163bdfdycdc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163apqaeygm.html

================================================================================
来源：http://www.sxryk.cn/163qzsxmksu.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163jnsqikmw.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163mnowpgwc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163wsuaqraz.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163yfdiywqm.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bnuzufco.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qroyipxm.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163jckvnnvk.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zszvrzzp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wrmjrvei.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163pqxcxbda.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163jzklinim.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163luzfhipd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163rbwlurjm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163mfaakkka.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163yscpumbm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163slbrueek.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163kfulqusd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ciulmxoo.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163tyiexjeh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ydkekkkk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zsrdsocd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kmevclss.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dclagsxc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163sycobgan.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163cujqzwki.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163hklqcess.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163bvrcnexa.html

[P04] 求长度
来源：http://www.xuanzx.com/163uskrucba.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163jqteptwb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hhscrmkq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163plghtvsv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163buakstgn.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163xulqfvhq.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163tlwfgpsr.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163hmrocwti.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163rfouhodt.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163khioegro.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163phxjdupr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163jlgcgult.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163vwnvdflp.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cquhycss.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163zyzwgttz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ozhhxxcg.html

Ruby: a == b
来源：http://www.aibaodan.cn/163kpducofb.html


<!-- 参考信息 -->