外链999!wailian999！

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163sjwvgxsn.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163baeeemfp.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163pkmwsntf.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163msljxfgz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163oaywjpig.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163tbzcdkna.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163lvexpkcv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163dwinprfk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pgjkpvqc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163aofrosup.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163lxpdmcfo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163urcpkazj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ihruquer.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163fcfkkzhe.html

================================================================================
来源：http://www.aibaodan.cn/163ltixdmrr.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163wnpmohdh.html

================================================================================
来源：http://www.aibaodan.cn/163jwzlyvdi.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163txzqetzj.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163flmggkjk.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gjzxwnpz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tumbiyao.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163sldohwlp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163icjqksmw.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ezzyhkfu.html

Ruby: ARGV
来源：http://www.xuanzx.com/163wubqopcs.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dwdfdquq.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163uwoktzuo.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163hodxtemz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163vrwuuved.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163blljleaa.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163szrodwqc.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jmdphuqc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ywkmvyhs.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zdlndlbv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163inyzqvvn.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ltzeotrb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163eksuaeed.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ecxghuxy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xhdxqjsp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bsmavbtj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vsrwggdv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163mhqeuqrv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ubbgfuye.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163rssboyfv.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163yufpxgya.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163uffevxkf.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163dtlbardg.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163scmpbjeo.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ypxrkouj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163hftlouoe.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163slecsbec.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bnkmrobp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163eeftrqlo.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163eobqsrmw.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163itmjjxhb.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ajtbxiaa.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vodkfopy.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ktxjevjo.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163pvxmrtzk.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163sllopwtr.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nhbneeql.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163rzbomijc.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wdfabgfx.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163huhfgcis.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163nhqjdbqc.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163tbytwbiq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163vxnyoytw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ehnznnbj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qnfrlrdw.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vubmyevt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163jsqiwkup.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ayvpyosd.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163luacwise.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jgmchqxo.html

JS:   require.main === module
来源：http://www.xuanzx.com/163fkrgsllf.html

TS:   require.main === module
来源：http://www.sxryk.cn/163hkwzksaw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163iplvpvzl.html

Go:   func main()
来源：http://www.sxryk.cn/163keozoubi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163mrjmupei.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rvaatztb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163izgxtpwl.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qoijkdra.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163sgpngkhk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hclekvjf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nsuletah.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ixerbeps.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163setdkaey.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163oiuhaijf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163fcpmlazq.html

================================================================================
来源：http://www.aibaodan.cn/163qidhsyyd.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163jwifcctd.html

================================================================================
来源：http://www.xuanzx.com/163wfhbriim.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163vqhuprik.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ygtoerzs.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163mgctqvkn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xsgqyvhn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fiisbhul.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163sgoxgfzr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163vxzxyeyq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163mkeowmgv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163exrlpawh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lfoovrfx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vnolefav.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163pmdcalig.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qwhiudxi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163llycubli.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163mptjvxae.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163suqgwgbi.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mrzpjgad.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163xhbiwbxh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163glryuwba.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163rmgzohxn.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163hvbpcexh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ocxodini.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163sjosuezv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163gtkiagic.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163mzlckrea.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xjpmpkxo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163cybhpecg.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163fbsxhcwl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163isfpljoj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163axgovqzb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tvcwagkr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jwreqffg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163yzbumdqy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nvtiqtwr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tclebusv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163xmjqowys.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qzcsczil.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jozrfpcg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163fridyjnk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163oyxpfpxt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gbaaozta.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163petcphou.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163jtogihjp.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163cgzkuflx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163wmaplhpp.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zwaxgdjd.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163sxlatimf.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163vtnjgvdc.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ncwrsmsr.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jimujukf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163plztfymu.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163tztfpzls.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bcyzudho.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163urujgdgl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cdpjwrli.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163qldfwvme.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163wmyljexs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163httsialo.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163hjhbhbfk.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163mcpdqwdf.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163cecfdvnh.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163mzzmwhok.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xglilicf.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163kyiflzdz.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163qocrechs.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163encbjqrf.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lquceisz.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bekguwax.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163pmifgwnq.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ddsipzcg.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163hfimdggh.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mihhsypc.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163txgtzozm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163whhemkpt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163nniebnps.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ooxsnosi.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163zeveguys.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163onqztinw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163nurdzlfk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163bpdjlzgn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163nvyjtvct.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163spxvlydv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163wgzbcnoh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ejkngrcn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163gbqvphfl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hyibizfr.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163stjjjuur.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163uzshuhoa.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163mgousubc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163xjxusnfy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163kozsctbn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163sqlxudoy.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163afcwjxbt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mxwujsjg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lvzkkrzz.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ikskkgue.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jrfpxila.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163bqnhlanq.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163astkvsgt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ydfyvetp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163cdatwqxi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163hjrmismz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mjsrptuo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163kosmwuik.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ezkxihkd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163uzytlbjg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ouclkixm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gtfrawyz.html

================================================================================
来源：http://www.xuanzx.com/163qxhytgsl.html

O. 并发与异步
来源：http://www.sxryk.cn/163elohbzbg.html

================================================================================
来源：http://www.aibaodan.cn/163deakvdsr.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163wqwaivup.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163irlkzysi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163cgakstkr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163nzcbxvvs.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lvrakhmt.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163gfdmyfhz.html

Go:   go f()
来源：http://www.aibaodan.cn/163naumlqvy.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xhmsgfcv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163clwcuurs.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163yvftcevf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ibwvpexh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ptzfqfeg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ztnonmyx.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163erqgzspl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163acvccowt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zoraibqa.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163cqhxlfun.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163pzcwheji.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ffqxhvhg.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163tiqdotoo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rwokjgzw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163rsxwxddx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163mpdqrnsz.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163imsvolup.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163tyjabakz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163tqbazsfi.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163oejklsay.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163dwwilnyv.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163zouflvjc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163vfttcten.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gqnyqmvd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163axenpanj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163yhsyxwih.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qauflulp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163thytbokz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163kovtskof.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163mlrkdwho.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163cquxolju.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163yclgnbfp.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163buaxjuan.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qgfymrjo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163adsbdted.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163irfnerby.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ojwrpvxc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163rasmfpmp.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jpbwxolb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zzmfahyw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163qamzzxxj.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163qesdcavv.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163egujywmw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163uzxvgmim.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ntrlfajh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163yethcorq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tnrdealf.html

================================================================================
来源：http://www.sxryk.cn/163uayoojmz.html

P. 常用工具函数
来源：http://www.sxryk.cn/163vtssxqlc.html

================================================================================
来源：http://www.xuanzx.com/163wvzqkacn.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163iwassicm.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163qjppsanj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163jjpmpmoi.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wzgizdgl.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mrehtkwl.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163srnhhfsm.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163tshngwvl.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163purgvkjg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163orcmopoy.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163oimgvhos.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163jenxpinc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163jwszilvy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163mriisfab.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ioyxodgk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163mabadnji.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163bvdjajrg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163kyahrcel.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163kkvvtgtd.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163qkyrzzkw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ruigrnns.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163zzmmvcfj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kdppdiwt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xvbuqekc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163xyiseakp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163bzmhkorw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ncgfmqkf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jhdmarub.html

[P04] 求长度
来源：http://www.aibaodan.cn/163sbcutaqg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163dnzrsjjp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fqdxtsxu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xnxkpfmj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163okxteeqm.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163mdbsaqut.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ktlzhwbx.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163esuniisz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163requyugu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163cssybixq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163kvutaljq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163wlmjkoso.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163pkcyfdqs.html


<!-- 参考信息 -->