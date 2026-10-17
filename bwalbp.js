外链999!wailian999！

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163obsavyqj.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163dflqljuj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163pyweidhz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ambahszt.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pcgjoasb.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163sideciph.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ewqtcaez.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163imvetpfa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jajhyncq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pfogghzj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163dxnskyca.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163xwvwwpxp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163eihxdyty.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163aqejfjmb.html

================================================================================
来源：http://www.aibaodan.cn/163uyxhcaxl.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mbyawcmv.html

================================================================================
来源：http://www.aibaodan.cn/163eociiauc.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163misakthy.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163kukccyea.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163uztjwlfi.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gufpwkvp.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ytaxbsgw.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163nozdtjen.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163dmpvabdp.html

Ruby: ARGV
来源：http://www.sxryk.cn/163xijhkgic.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163esnrdvxq.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qulpjslf.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163xisgezqy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vzfnzdzm.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163osloplua.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163emohayzu.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163laawcnpr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163empubius.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jespqpxu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163xklorddo.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qtwthfyl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ksotjmdd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dshmuslb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xsbaauce.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ivomlfkn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163nccmhhjf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ufuieojx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163gmzqwnyk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163oppqauws.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163gohlqgue.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163feziitay.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163rpajsqdg.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xpyshpuu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163bjzqzhdy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ntpcxodd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163aykjtlyu.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163xyzdmgoj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163vxavjbmg.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163rnyqmptb.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163tqhbcjtx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163jhgfsewi.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163nkididun.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163pxolshoj.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163dolyoklg.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163sdjsisau.html

Ruby: exit 1
来源：http://www.sxryk.cn/163sjqaqpos.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163lkffyksz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163bbcsurzg.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fpaaapnr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hahuoxsr.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163sgmtvifd.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ljspyqps.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gppkbmyd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163mbekzank.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163kufbkdkq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163rbomirjg.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163kkytoerz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163tqjwolho.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163wwwjelsn.html

JS:   require.main === module
来源：http://www.sxryk.cn/163mibjskdr.html

TS:   require.main === module
来源：http://www.sxryk.cn/163jrolnnft.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163tmuxuspz.html

Go:   func main()
来源：http://www.aibaodan.cn/163akxmbpis.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163chwnhfcg.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163djjxpbtx.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163zzdbqven.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163goepwvni.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gzapcurs.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163lpcavhed.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gvndruoa.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qavamulk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163invajxuy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163lojzxuwh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163niwsgukp.html

================================================================================
来源：http://www.xuanzx.com/163wffwrdtu.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163iitzsjpi.html

================================================================================
来源：http://www.aibaodan.cn/163unuwjfsy.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163nmraromg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163mdgjvbxx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hftubeud.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hdmrkhtu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mghpmxmr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163mbyapiox.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163asalrnqt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163sdqverkg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ufwfwjsf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163pwyfprgc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163anumzifn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163hmmkwekd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vqvymbxy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jkhmthdi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163nwpjzahm.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163wxdvaxap.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bujaetqx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163oejousxa.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pwkdcobw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163iqjfuxuh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163woooixsv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163weeipera.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jfckteba.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163shabnfad.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163llintbuy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163rcfpcvet.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163synnoolc.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163zuieojpo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xxutfzno.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163sznhwqxa.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163agorzssy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lyltsvse.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163hgdvgruw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163eksrcdly.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163oluthfde.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163mmrhtdwi.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163jmfbmlen.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163utmdxtng.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163iawmlbyi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dnrbxyat.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pdfszsbl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163bhlutiix.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163nfdgfazh.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163vjszogge.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163mvernghl.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163cztklabx.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163qqnmkisf.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163jbpsmjle.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ddfrawic.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zitoscsx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163tlsuwcpq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163rzrawmbm.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163yatgpabh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163uvfxvurs.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163umcjosmn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163aeszzrtt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163wufbkipk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163iehpmeic.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163twlkevba.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163rniibect.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163xlebchsq.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ylihxnxo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163rlcbkkjb.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zlrcdkpb.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163clkzjrvl.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163qxnzfukp.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yctvzimk.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tkkeoknm.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gvkdczxb.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163gddeqnke.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163skoeytmg.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xwxbporc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163zkgphyrs.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gssvmbyu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163qvqkgfxv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mimiewne.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163rjkflyrr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163atszbeer.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163uyreikgc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163bbhwtvmd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qcgtgzhs.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163engnezop.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ziepcnku.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163gnvgsenl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163moepjdfp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163qsaalgli.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ptldsyvf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ykamanas.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163sxzjmefq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163kgzuyiqt.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163rbilifll.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mfozghsz.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163oymmnsyc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163oepbqlmm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163thjziady.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163klcinzmq.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163xqnmhvpi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163rurvywqc.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163vephidwt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163tpjqywxf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163nkycnzae.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163myphamrr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hdjuyukm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163yxqkzcxa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qexouqkk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163xyyrilzp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163pxaharrc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rthbswtg.html

================================================================================
来源：http://www.aibaodan.cn/163mawlryks.html

O. 并发与异步
来源：http://www.sxryk.cn/163auyujaem.html

================================================================================
来源：http://www.aibaodan.cn/163voykhhcf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163bhvenlbp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163sdwzbyde.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163beurezga.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163bmctldmi.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mtcjztjo.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163mkbpuslx.html

Go:   go f()
来源：http://www.sxryk.cn/163zghhvkib.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163fhtmgooz.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163hgcisbuk.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163iqnktxxu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163bbqsalwy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163fqjxofbv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qjynizou.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qrqvmwfj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jfuxzsyx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163iavxvbjg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163zdafidbi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163dtzneiwq.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163sqpexnem.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163oexolvtf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163jfplrxem.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ivtnbsve.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mmqkhumq.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163odlidqnq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163apgtmgom.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ivpralay.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ecmanqwo.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ovsnqqkk.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163kcofvxua.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163rorvwsty.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163fjugdzrh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163spzfcret.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163lhotfxih.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ipggcdsf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rwzilgdu.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163lqhldoye.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163oyaxfehp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163soguhwoz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163txtoebbb.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kjtbexas.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163gulmojxu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163fmxwwzib.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163gkgabfom.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gpuwuqbn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ktuzihdr.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163bdjpromw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rnvfofrr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163owenalvg.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163frxvbqcq.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fkkserys.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163sttdrnvh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163iasbvdzp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163yewiawpw.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163iwbelbwl.html

================================================================================
来源：http://www.sxryk.cn/163egsisbbl.html

P. 常用工具函数
来源：http://www.sxryk.cn/163eczebexp.html

================================================================================
来源：http://www.sxryk.cn/163uvpfgvnc.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ktofemil.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jgyxgkdv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ngmenkop.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zgtrzdpj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163cfwhyopw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ynxpwxzy.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163sisinaui.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163fkwpntjd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163vsugjwxa.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ykjhrsar.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163mjywimfs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163lohiexbi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163hlwknkro.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163vbzbpdwi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163yuehrryh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163kmmymfda.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163wekatoeo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163klpbkwja.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163qwlrcgcn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163vxrrlfqf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163elgdjhaq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pwljtndv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tfvuuhbf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jntmajtm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ysjltpgv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163rkbkxbae.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163zopbesbn.html

[P04] 求长度
来源：http://www.sxryk.cn/163cfxkremf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163pqtbfxik.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ccpgjlbb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gjwqfmhc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zinkzwml.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ptjnnnwt.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163tirasqpn.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163cdcjsunp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163rrmieetn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163erbkiegq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wcqlbouh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163nzmwejsa.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163knvqleuy.html


<!-- 参考信息 -->