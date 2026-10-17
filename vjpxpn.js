外链999!wailian999！

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163vpcnvkoq.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163yuvgnofd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163pqzxsxty.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ojeskpjo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uuwveflr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mdppsqti.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rrbbxcaf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vjtqdyqv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163uklhzmyj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rbhqyahn.html

================================================================================
来源：http://www.sxryk.cn/163odkcefep.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163zmuqtfoy.html

================================================================================
来源：http://www.aibaodan.cn/163dtedxnxk.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163gqvvcpbt.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163mhlurqcd.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163vzgbnmrs.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163suobpjqv.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mugvwgra.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163fvpwsltb.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163txwjatgw.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vulnfjen.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163zfuzneaj.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163rizlzwfd.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163blqrdaom.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163xghotnrw.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163iwpgcxdz.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163hgftjylm.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xambbaqb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163cecvzpdk.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163fkwitgdx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163oquvsncv.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163rnwnpglw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163uhmebryx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xohifjsh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gpydbfot.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163fklsgtmo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xnuejdbi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163aicqwqmp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ixjflqsg.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lxrjggyd.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163cxobomci.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163fkbemjya.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ibcugvdf.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cfkzdxhu.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163samogbbf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163flibjahg.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163wfbuogpk.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163nwmgqoqb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163eotldecr.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163trbrmcxd.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163amvazxgi.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gcoavadh.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xpbtpzci.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fysaronk.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163uzibuaes.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163jesrekba.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ackllvyj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163nwudtkql.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163reighqdq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fteedbnz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163waqzfgfz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163cjrxewfr.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163txtyhqus.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163sxiutvaw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cfvetymj.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xkiivkhx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ursqexqj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163fmxwwwjy.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163adponkwf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163spewiiyg.html

JS:   require.main === module
来源：http://www.sxryk.cn/163akjjgyvf.html

TS:   require.main === module
来源：http://www.sxryk.cn/163fnpzijin.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163cxotkwzw.html

Go:   func main()
来源：http://www.sxryk.cn/163ngxsdnxf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163hifhxdrf.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163umghpgxi.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163hiyjakzd.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qqmcgqnk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163goafouwo.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hwlvamnp.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qpyolovm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163imsrikpr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163dhiqvgro.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163agonjsxq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163krxtkavv.html

================================================================================
来源：http://www.xuanzx.com/163qhdjxjjo.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163nqrjnqxt.html

================================================================================
来源：http://www.sxryk.cn/163xrmbygcs.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163lodczlhw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163bcwbebps.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163majrxzdm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163abhjodyo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jfpskbib.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163jgkzkkoc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163jfhmwczq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kdphwrel.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163dejnepsz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163fekhlptg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ttbfgmpl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163foeehsrk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gpnozdue.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jokrtcwe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163karslrxi.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163etluxerg.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cgllugtj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ydnqjcgo.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163lqsbpacx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163xsmvbmkc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jymudebo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vmevowct.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jlhawfze.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163zdsxtpnm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163uwxgkzhe.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163eqqonaga.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ushtapsm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163efoqxkyf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tllgoecm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ckwvqwcu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rdsootwf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zmhhcbbg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163oxfkzxwt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xwngesip.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qubqmzdh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163fpaucbal.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163zcurcogt.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163cfajzagk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163wmrohuuv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wrovmwzi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dreqzwls.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163quufmqun.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163nehrowcy.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163bjlftllr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163vhlssnur.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hplsklbm.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163eyudtuac.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163aqhasddu.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jmirrggp.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dtdozurd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163zewbswis.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ihpxbzoa.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163zotimycv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wxtjutlq.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163uyqfagfz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163hhgpvsel.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163bmwngcng.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163atmfjadn.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163pcauvlbx.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kjmdxneg.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163vtjatxqh.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vtjusaxh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163hxurfyej.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163qvdbezul.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163veyrlbkw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163hccoyyvs.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fzpouyrl.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xfeundta.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163nyonszgp.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vfiihivn.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163zpfdxmrp.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dqdsgkkc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163xqhbgozi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163exokecsp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163rgablqcn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lsivcsgr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163bzqasrjp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163nzhypmah.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163fxzqhxng.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163birfryfv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163kilivyje.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163kngudzgf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yyytxfnr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163qgbyuexu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163llchgtme.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163owmcueki.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163qrbeczvb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163mubkxbtg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163prweiraa.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163hbsmjovu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163gvgmerlj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163soegwwjg.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163nxcxdsbi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163izdqwgco.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dnjheebb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ojtzcgsb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ixvbtjos.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xmqtkeky.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ajmqvyfo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163sdmjjzzv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163aqtatqaz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163edgxovky.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163pwybipqo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hrqzbpdu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163onqrkfks.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163nqyjusyo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163zfgnbkeg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dvnfrbun.html

================================================================================
来源：http://www.sxryk.cn/163xfoiwzuq.html

O. 并发与异步
来源：http://www.sxryk.cn/163ojalgqrb.html

================================================================================
来源：http://www.sxryk.cn/163okibvbbx.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163denpbtfv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163rjzqxrqa.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163vygyhgwr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ncdyfavw.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163szvfvmqv.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163hpdbqlzp.html

Go:   go f()
来源：http://www.aibaodan.cn/163yykutfpl.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163efvlhkbp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163epelcmrd.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163yrpcafnv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163bhidivgx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163yioabzqd.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pocshmdq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163loqpiqcr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163oawzexjy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163iktkbgbz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ygtipmjj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163opjorfsp.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163mstbxrje.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163jknxmlaf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rbzqoqtk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163pzfoqdix.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pebbrgpz.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163sllcdasj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163qxltpwsv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163umzprsye.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ukwiqrie.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163kqhcilnv.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163sticqcdl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163nrwpnseq.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163efdlwnot.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163xxxwofzn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163lmlggkfi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163imsvfyta.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163bjvqoinb.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163nhedaqsg.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ieifxwum.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ucviziyk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163bmmreixs.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163eltlftse.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xqxnhdny.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163hlxxadop.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ogvkzqhd.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163prfsxjhf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163sssntyqn.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163pcrhilpg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163jmovxcpk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163vnzledaf.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kcmfkolv.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dbyvafdt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163prwcnqvc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163elpszapb.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ltgkulmw.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tusibszr.html

================================================================================
来源：http://www.aibaodan.cn/163bojelnzb.html

P. 常用工具函数
来源：http://www.xuanzx.com/163opzzqmva.html

================================================================================
来源：http://www.sxryk.cn/163eoqenjnr.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163kxtqyujp.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163lwjgzxwf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163yqysxkgo.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dvixsdox.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qczflbci.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163prklguqu.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163cgwestlv.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163evsfafgg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163pbcdozfc.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163dvghvhvi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163nmnuetpv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ijqkcrmc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163mzciadyq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163udmccwik.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163vghfwamk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163mchyacct.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ydmxlbxo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163jmfufjbm.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163thrytoip.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163klcijmuq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163jaaplwps.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163muwafaxu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163puvltsif.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163egiyrjje.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163yvzcfnkg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163bxxbonos.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163fwbmtesd.html

[P04] 求长度
来源：http://www.xuanzx.com/163uwdquioo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163giqsrxlw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hwdluijg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ifbsboqg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kcbfojtg.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163frmcmoqs.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163jegjfdto.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163iothhauf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163iuwlnmny.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163vammkqmo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163seekqasm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xkuuihci.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163uyhxmskv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xyawbcek.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163krmteuhr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163tpyzpmqt.html

Ruby: a == b
来源：http://www.sxryk.cn/163kfowgwvh.html


<!-- 参考信息 -->