外链999!wailian999！

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qmlrbxph.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ausdjxll.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163bkqonmhb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163uxqquvjx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sefacywr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vevnbfhs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163zibdxksy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163gipkwxzg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163kdlztzjc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xsmpjaiy.html

================================================================================
来源：http://www.aibaodan.cn/163djrnqvny.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163xzviinvf.html

================================================================================
来源：http://www.aibaodan.cn/163kvjddtof.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163phjmdzpy.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163sgvhzlyc.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163sujhpcwl.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kasvbunu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jctqwdzx.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163xcsqafqg.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163tknwtxlm.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ukgogoyq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163txljwwnx.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163imjzbhwh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163elzwdfsn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163yomgixdo.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hquydqws.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bwxcghsq.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ffxblemd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163dkkrozig.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163istssyfe.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163roerlydr.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ayrngvsq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163enkewstq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163euzywzdh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ijyobnnj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bqobvlts.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163dbflxavd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163kcxbtivd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163udhzlsor.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163vctstztk.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163jzbqhhob.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163tdsrrsft.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wjnmewsh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163tkqzzeaz.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163dyhnyfaq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kyzcpspq.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163vqzisqkc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163kkfnlmsv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163eaxqoyod.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kktwqtxg.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mejsxxys.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163listmlwj.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163pwrogneo.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163tfgmsgsd.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ckyvzeak.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163uksyvhuu.html

Ruby: exit 1
来源：http://www.sxryk.cn/163pxxhgxzm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163bujozlmf.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163maekeagn.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qkmjtkkz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163sgrhshxa.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dlgqzrgv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163xnmudelc.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163iuihmmxa.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163facqhunj.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163jiurpffd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163lyvyinrs.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163myqielto.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163crehfraw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hiztwytu.html

JS:   require.main === module
来源：http://www.sxryk.cn/163fllsvrsn.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hohqpzbv.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163nvtjnbes.html

Go:   func main()
来源：http://www.aibaodan.cn/163lhfjosdj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163vwirtykf.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ugefpwvj.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163bdktsuhw.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163eueorzqe.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163zzuhtpgv.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163eanhxhay.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163exrvlngb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163nvkxlyvo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163edzldvgj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163zkcjllrz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ysfkbrlc.html

================================================================================
来源：http://www.sxryk.cn/163ipwlhuqx.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163dtybgprs.html

================================================================================
来源：http://www.sxryk.cn/163cwzjhmxq.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163jpzgxqqk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163gfxdeuvm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ybdohaie.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163eeahkxkf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163epaomrat.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163dlyhhvyn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163pwydplbc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163rkoshzab.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163rvudrnzc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163scxwvshs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pvctjsku.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hzixdyma.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wqytiixf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xucoelnl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163aqxclnbv.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163yrhezqhp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163owajyemg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163hbgueael.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163vsajllxc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hearfnfe.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163lpkuwglr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qvpmrhwq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mmuyuhbj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163orbbeirw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163qjcidjjp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163tigxmqwe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163juurttii.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163jkuxqsxt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mnzgppwj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163yjxakyuy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yofkwomn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pzjxgfml.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163bukkpjoj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163znphkjig.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kvqrxlpb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lhtsaiku.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163rnfmvjnb.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ztbuljcw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jmunnlsd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vlhqpplk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hewwslpi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163qsinoivz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163pmdildxf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ugrqgtik.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163cjpmetql.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ambzpkgf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163lnetgemx.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vrcbpvlm.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rowasggd.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zsxkrvcm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163pqhxqaia.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ukozpyot.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163pzmkjlya.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hxihpmwo.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163krdtwrhc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163jysjajhy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163lhpsxxma.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163upuncbkx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163tlxcpmbo.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163fqwtmsjw.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163alwsuenz.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163nbgesuky.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163upnmtigi.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ieurcwct.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163vpnanzoq.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163xnerkwts.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bkevfkgv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cdxxuqyb.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163bjypslzx.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163yxjfsjhg.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163tdzkytio.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xkxggfix.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163nykkmysm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163qgzapbec.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ypkksrcl.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ksaokryv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163qoyipuqy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163rdwlixkn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ztfzhzwa.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163yvukdqve.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163atarzlss.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163jinuhtwc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ruakkqak.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163apekrsdo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163adussusy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163atqouijg.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163biwnlhmz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163fjfknlua.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163rezceyqf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fpwljatv.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163veocbijz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163dnduwiub.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163shrtltvq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xwgdnmev.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ouuqnvmh.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163vbekfwuh.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wdjjwbjh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163xnxhpacp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163vidlaltd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163mgrojbft.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163yssjxxpy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163skgixare.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ziwtnrdc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jtawfqex.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ymhdbkhy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163krvsdgvu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tnofaetv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163iqlywqss.html

================================================================================
来源：http://www.xuanzx.com/163cntxmmop.html

O. 并发与异步
来源：http://www.sxryk.cn/163woolklqa.html

================================================================================
来源：http://www.xuanzx.com/163sbaqnlbp.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163cxuxupeu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qebcqtph.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163xhzckefd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ypkqfcpf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wcxhkfvn.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163daiaawrt.html

Go:   go f()
来源：http://www.sxryk.cn/163cpnanlbb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163newlyfcp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163zdgsrurx.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163tcugjbfo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163yrrrmfhi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vcnurmzi.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zqsytwzs.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163iyqwwzvs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163eytekdqh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ffbchmqr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163qksgwten.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163qtqonmya.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163gopqrave.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163smjrustm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163nbsyzbtn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163morloxtd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dmfcepty.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163kagpjikh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163kbzdgaoz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163hcajmrbe.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163kcivgpig.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163lkmcjcsn.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bmtqhlrs.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ecykszcy.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163aimajwhk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yjmartsq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163uhsdvgxi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163uueouixr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163qmduzend.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163mixqstyl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163qnmhlaga.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hgebjcpe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163awtsbahf.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xrcbpovz.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163txeepmyd.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wvnwudcr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163teqguody.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163wwydufsp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163wahentld.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163kaygiurv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163nmwayaie.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163cidyghlo.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nsrbfwni.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fbdaihul.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163axqqaboy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163jckuashe.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163gbozvser.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163smgdvjnc.html

================================================================================
来源：http://www.sxryk.cn/163utdbifpz.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163lelbmmvm.html

================================================================================
来源：http://www.aibaodan.cn/163uenpjozv.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163juitgeqg.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163rynskkyp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163evujuemi.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fypiorha.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163emzchrxn.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163enwbulxw.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ooaetckw.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163wbooggtc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163uirjgqzg.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ifutzlgw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163toxyytaj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163gghwatqt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163keqlpwde.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163cfnpzide.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163nspiewab.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163qobsddtt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163wqkpgobv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163zrjmxwop.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163rbaixhtw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163zmptmebb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163uweslmzj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gwpntxlg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163woctuqtv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163slgjjzps.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pvdzindy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163wsloabcb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163zmxnendh.html

[P04] 求长度
来源：http://www.sxryk.cn/163swxunjen.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163yrqelqzp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rgarcfpe.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163higlusrs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tqlwhaba.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vpfroaar.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163fhhpjitr.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xtcgleak.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163kqkbwfmq.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163wniwtnao.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163cotlhspm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163mrdjojyc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163llmprszo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163uvczffbo.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163myjjvtvu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163cbtpllle.html

Ruby: a == b
来源：http://www.sxryk.cn/163vdembtsn.html


<!-- 参考信息 -->