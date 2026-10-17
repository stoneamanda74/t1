外链999!wailian999！

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163hycbnhjw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163moevafjm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163suehmasz.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cxdbzotm.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lgzjdmsd.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163cbcjmkfz.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163cwmxpofz.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ybupyaks.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163shoyekmn.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163dwfwllde.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zkxajcvx.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163rlhmwptd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qcglrevl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yfenqgvj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163tpnyhhrg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163utzzgchy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ydevcgwh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163sxlnujfr.html

================================================================================
来源：http://www.sxryk.cn/163vxvxtmcd.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163srujgjek.html

================================================================================
来源：http://www.xuanzx.com/163jnjsleon.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163cccltoku.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163hayjkonu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jqshfmwb.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jupadtzx.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yuqfdrrw.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ikijmvgc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163tuflcwzz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zejkhxpu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163cgrqdkmb.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163qqvqxmyx.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lylkcogq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163bsppclag.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163kixejuab.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163sajzcmur.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hgaypstl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163arokchdp.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163vwdapgxo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ushykzjb.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163tekbaapq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163tkbglivl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dzgwspud.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163aomlghcf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pkjywqdh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163xpfjjsxo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163juvjgknh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hcyzpuse.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163dzbdlwdu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163wttcmbku.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163fagaglci.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163tpkqfkqp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163jacqmehb.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163yihxjoiv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163bskipied.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ohxwmlpg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163raoytpbi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163qttxmvap.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163oekozxah.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163xogyjxyp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163cpyuctqo.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ayhvzuhs.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lfewbsao.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fgvisdpc.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163eyaqlpws.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jyolllwz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163mnlscxpj.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lutangie.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163nbabpupr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163copxxquz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163vkstnlej.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163eiorkecc.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163iqplbdpr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163tgonqirt.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163oagpqcdh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163azgrurul.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163epksahhn.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163yajoizid.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163zlhmxbzm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163xisngynz.html

TS:   require.main === module
来源：http://www.sxryk.cn/163zzslfvce.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163mmkgngkx.html

Go:   func main()
来源：http://www.xuanzx.com/163bavjcuvu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163crlenqvc.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dfdavchk.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zrziyszl.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163crlewmwz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dxtmnmhk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163anpxttne.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163isdkmtoh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163vptkunku.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163npoonccq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qfhrkkwd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163veqjvpsc.html

================================================================================
来源：http://www.aibaodan.cn/163czocdgcw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163rucfjeyi.html

================================================================================
来源：http://www.sxryk.cn/163gsgarudk.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163rsqylitj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163nbwgbejd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163uikxuowl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163lbuegcct.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mynggmec.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163hkmlirzq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tsiiqesq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163dbukwakz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163qelnblnb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163wsmilvzb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163aqvoxfsm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163urcsvuha.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kpmgnjbp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wnyeqfod.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163fclgtyct.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ituyjrek.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mqwrwnrk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163dwltlcog.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163tfwgcnto.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163vdokwhmu.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ieblzbmj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163iwahvypk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gvqcthep.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163yxmnblqn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163lxvlfyei.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163qwpwraur.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163sldjahpg.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lcqdohkg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fyiiptqh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163vlfrfawe.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yplmmeup.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163uufwyrmh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ddlrwcqt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xglliuqh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hcvbbkod.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ugjzehty.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163sdfmbymm.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ewaddnhf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dydaqovz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bsneclwy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pdraqckj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163nhgnjeyk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163biudhfev.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gwghwgfz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163tqfpndex.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163khdnizgn.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163xshbxmio.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ldngqquw.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vxqfdoem.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bfqoxbbn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163bpezhwiv.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163jkmtdgap.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163cnwolkgc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qumvplou.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163fafbzyiu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163hwpixrsd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163gtbkxoyo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bwtvhxnu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qhlelqgn.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163wnkwwajr.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163wcewcgys.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163gkpajnvu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163fmcowsyi.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163unijebfb.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163urchzfjn.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163urcegcog.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tpkvwlyc.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163olqbhbas.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163gffnxgao.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163afreexpf.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163qhmhusbu.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ucheyxqc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163qqhswnfw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163tahimbml.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163gsaellzf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163huguhist.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163nztgoies.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163enkvicwq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163nhfqqkqa.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163njlwmmtb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163gdpfknsx.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163rnbpkulm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163lcjuralf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163jiyghcey.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163sojgxtsp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ozjaqpfq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163zfyyohxw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163kndzlydz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163otkpufov.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163vxhbemsd.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ukazretf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163wwpnssdz.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163soigvfgo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ysgkfeao.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dbqmauei.html

Java: // 手写递归
来源：http://www.sxryk.cn/163lyoymnkm.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dwtrywza.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163bkpwklpz.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ejbmtnqp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163pfonexim.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163csfbvdfc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163cqmuhrhz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mzwnhspn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zclkugua.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kceamlyc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163fzkqsxnb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163fyxultta.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163oikdxctd.html

================================================================================
来源：http://www.sxryk.cn/163tlmjwmqi.html

O. 并发与异步
来源：http://www.sxryk.cn/163wplcnquk.html

================================================================================
来源：http://www.aibaodan.cn/163nmoszxjz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163pjfezqwp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163jeqcefup.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163epkpxtxu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163jdmmfyho.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qsuwqmxy.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163scpnbash.html

Go:   go f()
来源：http://www.aibaodan.cn/163aorkwufj.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ftrlhzxr.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ewdzawyv.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ptuqvtkw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163iloqnddt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xdamxdrl.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bbpdrslv.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pxjubsdr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163vsinlxfi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163xwijxscf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163kvqdbyen.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jfscadqk.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163wtnefnqa.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ijffotyb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163gmsyiahx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ojlbsioc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163atfxmnjj.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163alzwzfsy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163zsoipwaf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163nhgrnifv.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ynaglpym.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163hkljfvnu.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163zbfqzfss.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163aoqqrqre.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163rhfwlkju.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163yhkmgtoi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ulukgulg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zuiupmwm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163kkfvpayt.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163wftgxdku.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163bfgeedyw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163rmjejvne.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163vmmysshx.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163swfruzal.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vknamudw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ejwnjsxn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hctyzpno.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163qujlfqhp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163kezelkoq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ykjuvgly.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rtpwxiez.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ygldvcoi.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pnuipnkz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ovcrwvft.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163pzyiolux.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163shxxvfag.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zqrsranq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163pqtjjkge.html

================================================================================
来源：http://www.aibaodan.cn/163srwoccjs.html

P. 常用工具函数
来源：http://www.xuanzx.com/163wenpyipq.html

================================================================================
来源：http://www.aibaodan.cn/163bcrvtwjo.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163uozxksst.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163yhmospqi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163afzfikbe.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nyrlkdac.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zxnssqrf.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163gxcnivih.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163meanhtpe.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163kwqxcvjs.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qqohbyzo.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163katwaxjp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163dcrejbhg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163sjbbsouw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ilisfjpc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163mnxgtaxc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ejvchmjg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fysxcfac.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163yiftzfoz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ktnnlsrq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163fsflerts.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zamvobqk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zugltpfr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kxbptigp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jjmdaell.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163wlfkbsvx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163fwkxwprq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fzcelzcm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163umpdhmsm.html

[P04] 求长度
来源：http://www.aibaodan.cn/163izlygyxx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163dxpslxtu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rdyvrgrb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hdkpepjb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xfodmrcf.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163espbgsvh.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ozxmkqjq.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163qqcdytck.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163dzlizrwe.html


<!-- 参考信息 -->