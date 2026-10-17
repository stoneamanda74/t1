外链999!wailian999！

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163occioqan.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ydhcxtxq.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163mittlbzh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163cayexkuq.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163yuzbvqck.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tbktwsym.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163nehtvdwl.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nuuusynv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ldgjgaer.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qqzovrkf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163uphnfvch.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163kqilgrgh.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163gfoihywi.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163yyumkfoi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rddqiigu.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163kdiqrfef.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nrubthnz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zihgjiqr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163znwddlpw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163hydzqmai.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163djyxnzfa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163nlqndkza.html

================================================================================
来源：http://www.sxryk.cn/163zofffcvg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ketbqoqk.html

================================================================================
来源：http://www.sxryk.cn/163zaboisir.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zoxuampm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163enyxstvx.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xvcxykeh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163llhepiei.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tlgtwfle.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163kdwzhhmp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ccbyrrgc.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163bljvnxqj.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163czzkfjcs.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163gwglqvco.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wrymdmkg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163dyqvhoqi.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163bdxuvthf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163idihsgec.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163krqgjnbn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163rymioygc.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163tlxbgxqk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163altixsqk.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163amedawzh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163diwjlrnk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163araxwgmp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hexqfewd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bmfqxbwb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163sbfqvqlt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163nbtqziqj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163krxkgadf.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163uzxhoxwz.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ncxpdqzj.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lhqahxoz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ckbitadi.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ytykwzfg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163wmjtxgqi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163vregwwpu.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163bkztmwxe.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163tduhzeaf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ncimvrwe.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ubcffhmi.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163awugkvwa.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vydiwxgf.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163aaablwli.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163yacwwafc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163jrvbbwzg.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163uqpyznay.html

Ruby: exit 1
来源：http://www.sxryk.cn/163bmviocjy.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163btpctazk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qnpglpch.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fngxlguv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163jtsfoaam.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163sxznqsqn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163pnbfhomo.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gjiykgqv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163alzveopt.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163btbaklef.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163kppfckxj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jamdqfzv.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ruoazthf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163lsypsrzq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163nmvwjmjd.html

TS:   require.main === module
来源：http://www.sxryk.cn/163onasrdvc.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163delsghvf.html

Go:   func main()
来源：http://www.xuanzx.com/163lpfqjeqy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163chetocxh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163awopnmvd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xdwfwvtm.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163oyqownbs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163fscqxjxv.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pnvyrtxf.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163dlxtvmxj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163wepceezu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163lqfxxmbb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163tjhyiiej.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163enpvrvil.html

================================================================================
来源：http://www.sxryk.cn/163nchhshva.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163jvcnobes.html

================================================================================
来源：http://www.sxryk.cn/163feysjdpr.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163bxnfdgrf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163uxkpjjoz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163jehidriv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fgxtanpn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uhaxmlib.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163cxiejgnu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163vbvxyuhn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163xaoijpcf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163qsrycgng.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163tfjhdsen.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qwkrpvjc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mkawvdpc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cunbemsq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ngiqklqg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163gtqonnzp.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163bvshoogr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vcclyuhu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163jihbdthj.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163crjgvprm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163fcvqebss.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163rcmqadbc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bihmfanf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fcyfmnuw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163yvtusulz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163slmjtokq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ldklvagl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163jynfcazn.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163twpdvjxz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ykevlvzi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163okhkhvhi.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xnhahyfk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qnpgtnka.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xzetyodz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163syetppxn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pnakujpz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qckoohyp.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163rlmfsclx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163mtxgekdc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163orkwchmg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lkgzpmkl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163bdoyfami.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163lbkkdyvw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163dtqxcxtu.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163roccspxu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163gvdymrjs.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163zckbjstl.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163iqtkbpzk.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163lpoejdfm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mprfojlf.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rffqmvhv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163uhzzfdfr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163qcpbhxzo.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163oayxxcik.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163aolkckuu.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ctjonapd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bfntgwzl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163nawbayjw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163zfrecziu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ucbtgfie.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163mfzxvqtp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163fhthzfih.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wffeshaq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163noifyddy.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163xmccttim.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163wgkwaxoj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vnythysj.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fqoalnwq.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kovzhwgm.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163qvtudlmf.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163bqetnyeh.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163zyhgquzp.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163giygrnjp.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163viceutor.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cfphuatp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163lovtqexj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163vlrbvtyh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qvwmsnvm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163vzptkafm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qgmsngts.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163odoijrvg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163gsixesfo.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mkqecvld.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ilptbwbo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163varjibhw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163zojerxwo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163fbuyhtdi.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163wqtzcjoj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rblwofbv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163matdexpp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163tzadbmln.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163aasuiomu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163fajhjrww.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163hobztmvo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vmitabjc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gbmizvhc.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163wyhydchs.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163jlgozdkb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163rkdpleqm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163hhhjlqxo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vuthyyhh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163wsldiklp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163sfabpjsf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mgnaprfb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jsfcnxck.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jzclvhxo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163dfjcbyqd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163qmovbuhf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lwxsljyr.html

================================================================================
来源：http://www.sxryk.cn/163ovqrjkrq.html

O. 并发与异步
来源：http://www.sxryk.cn/163inbfnhcf.html

================================================================================
来源：http://www.xuanzx.com/163afglbgfe.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163jozabudq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rhjpdamb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ibwftott.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163yqtgzxhu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163itrqcovt.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163hlgkmrdx.html

Go:   go f()
来源：http://www.sxryk.cn/163pfhmpcbo.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163skkutodm.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163rdfdlqyo.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163cpanhvqb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163nyrtnfvu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163esnuqejr.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zszdzvkc.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lwuqxfcs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163emfpymis.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ncjgohfq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163gmauqtfi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163awciounl.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163lvkizime.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163bnfxemzz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163gipylyra.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ypnfjsdh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163twnvpupe.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163tuneouvj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163gkkvffep.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gxnakffp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163lfozqdxu.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ulwszefs.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163klowemgu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163pedepeah.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163okkbebxc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163azlaghtj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163yvprlcnq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jwnttjgt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163auctgjsl.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163lfwwssrp.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ttzrosdj.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163irtlyydm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163nbsqisgv.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lfgrdprr.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wbiggkqy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163duvmfisv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163sknqyvbk.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163nykqivnr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163nmdiiopw.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163qiwlhpig.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163fvpxfgup.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163wcpnbdjo.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jnrprmeq.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oleopxnq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163htzgkdmk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163fcepvmlw.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163pporuxge.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kpjtclpp.html

================================================================================
来源：http://www.xuanzx.com/163edzieatt.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zecycsjc.html

================================================================================
来源：http://www.aibaodan.cn/163ybhmtlxu.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163smrgrudv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163cqajttud.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163dyqdtsur.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163elpiytea.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wbwufzrw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163mfijuukl.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163zuskroft.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163soepbdwt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163vbyykehc.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163upabypfy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163behyhilk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zjdhddqg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163renayzzv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163oymgyhsp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ntgjvrhg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163kaismmmk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163naudmfna.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163vdgifbcm.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163dxmapjwf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163jzzbaohq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ofauusly.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163owhxieef.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163muvgnukv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qyuacgxy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ovxglzzs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163feepdrie.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ujruwfzx.html

[P04] 求长度
来源：http://www.xuanzx.com/163jykkjcrj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163hrevwdip.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fywcgond.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163sofrahqj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163clqzwcng.html


<!-- 参考信息 -->