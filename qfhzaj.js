外链999!wailian999！

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163kbbgadsf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163owuaxtew.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ykrhshro.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163wsrlqyhm.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163sihirtwb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163lktvcnbr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rvbqdjwz.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pftapinm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163knovdrxy.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vkitqaim.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163guagdoou.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163bjoyefsx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163sxhhppla.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163llvivexa.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163uutuxela.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163gqbbpbfu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rjcbyoix.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163shumqgms.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163botqozbk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163tkbqapko.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hcecqiqx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163psdigydd.html

================================================================================
来源：http://www.xuanzx.com/163jrqrlbwk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ydpnbfae.html

================================================================================
来源：http://www.sxryk.cn/163dzekzcms.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163gijfyoec.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jvbxpmie.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ckmjrkje.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gzdwseid.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bweisfgb.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163rhfsysta.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163amntyjrd.html

Ruby: ARGV
来源：http://www.sxryk.cn/163jwxwutfc.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163strqnqmf.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163rauyfubs.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163kdtgxsgi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163voyufefs.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163gsiuplgf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163butaenyc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gjgiagfr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jggtrocv.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163kpjnccae.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163kqnqmbwg.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163mwucymvk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ajzcigqb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ynmotvjg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vcinslrb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163buhvbwhh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163xthctcwk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ghnpvmdh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163rbvlamrf.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163dvxycfcp.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163pnrnosoq.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163rftfjjvs.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ergovwch.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163audpnjel.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163nbyfvjxb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163vwkxnzbp.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163njbetgwr.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tcpsdvlk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hwhmvbaj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163bcaxsnjm.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163erjyqugi.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163rccszumn.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163okuiwrde.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163zwjrpxpb.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163duaejsdv.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wehcfhma.html

Ruby: exit 1
来源：http://www.sxryk.cn/163xmfzygrz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163wzlarvvt.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163efqprzvt.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qyffpmjp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vluxqnok.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163bduzeyqf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163kprnvsxw.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163oivxdaio.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163docakfus.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163lmbqiweq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163fsftkahf.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163qizafdpc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163itwwfwqq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163jotzvhwq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vpqdrljr.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ybgvkqve.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163rnfrkyjo.html

Go:   func main()
来源：http://www.aibaodan.cn/163bwjuttne.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163tacocqzu.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163hyyuyrkl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163qvimqsrb.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163pvwvnoxr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163gjlfauap.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jiydvcdz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163uumcbymf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163uetapqyp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mkwuwvyt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163xqkbnjcf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163xkxzwrvr.html

================================================================================
来源：http://www.sxryk.cn/163srouqlst.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vrybxuih.html

================================================================================
来源：http://www.sxryk.cn/163hjbxomoh.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163uyucagaq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163expsegcq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163fznfxach.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pjkyudyx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163skfbeeft.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163udxeobtt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163mubgxzwj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vfwunaan.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vnvkzdjp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163oabltkla.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uxltwqbi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kiuvodid.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wwdyqglc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cnmsbxzr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163cuczaidw.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163xhkfzdti.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ggfpptdv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163nmfhsrid.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163tcwzonhc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163axlgqiae.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163scupjfch.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lwkmcqlf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lbnvkeag.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ubyrwwfn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163gxkdlwkb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163kvaxxnaa.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163edflwewx.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163vxlfirum.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163txtoinwq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163pzelwzjc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cuhxtapc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zycnqhvc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163sdbossky.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163gkvkappw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ehxqlmin.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163matuqiws.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qkrvlrkb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163xtgxeqmq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163baxkysto.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gabbbxam.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sozygkpu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163johquufi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163mfawrwhy.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163galnbqha.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163yoljhxfk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163egukyfmz.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163vhmpnedq.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163bnjfcinf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cceszsbe.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lyoigxci.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163waxxzeqr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163euvjqbwb.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163iusyfebm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uzlkazri.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qkwvrrud.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163cgtnhmjj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163qssshfkk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rooraegd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ryrmprik.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163tkvlmddx.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163gdjggqfc.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ohsstmdx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163umkhuehx.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163trzhggxm.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163stokjlaf.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163dvosufov.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pgdtyoxj.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qopctoft.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163jxnkgjez.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rfqejxnh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ucggjgfo.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163wgqxxhqh.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bdriuuxq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rnnxwtbr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ngpdstdo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163savlzysb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163cyefuetu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163wcqpayuv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163tkrymukf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163kwalodmw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163obrdsfqx.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163bwnojcpl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163nngavyvz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mjktpxyp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163lypecitp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163iehjzidu.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163fsaocqti.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ojezkqhw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163qaowxthb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163emchnjcs.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ssxeunjs.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163cvwzepwr.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163sqzjbbyp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lnuumjyj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cnhsnjcm.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163yopepere.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163brqfxxfz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xeotsizf.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ibqsfnvn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163yxavdjeu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163twmpxocf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163kxpculil.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nplulrxu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163augtpang.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163oirvfvun.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163hgdyirix.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163becobbee.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rqeimqdw.html

================================================================================
来源：http://www.aibaodan.cn/163vjdrobth.html

O. 并发与异步
来源：http://www.sxryk.cn/163xegavpje.html

================================================================================
来源：http://www.xuanzx.com/163tgqfskwz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163uvpueuic.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ieshuglm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163agnwzcrz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163juzvoter.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tsfzymjl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163kjxisrho.html

Go:   go f()
来源：http://www.xuanzx.com/163xynperow.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163yhyirtzi.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lcbnippi.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163qiotgnix.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ypyicpsi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163axqqlnjo.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kxxuxfsj.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lxgcxdmu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163fpaslpnk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163xqcqnkda.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163nhbpvvho.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zuxbltog.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163fdsijsir.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163uteaurfv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ywbqsfzk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ehxbvbua.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ezsacqkf.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xqvcynxz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163rfrmnyfr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163torkzibk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163hpessqzw.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163mudjyemb.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163leyihhlm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163nobfgrxi.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163jfqhqahg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163niscbprs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163krmeseyz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163yptejlrl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ueksnyxv.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163gxkatjob.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163uunshzwv.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rdxtznwk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163aygafnkl.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163epyugjxv.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ikjqynpt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163wjonsnus.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163afrzscnj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gyrrfcsy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ivqcmmde.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163gipkoask.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163fotozyfd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163tzahoxhg.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163dbehyjdk.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163pzudlbsp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163zxydkxnw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xyobfhch.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163jfoimlri.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163yrncxkkv.html

================================================================================
来源：http://www.sxryk.cn/163wnhcvdbw.html

P. 常用工具函数
来源：http://www.sxryk.cn/163akkntoyx.html

================================================================================
来源：http://www.aibaodan.cn/163lhlhmkfd.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163hxywwjoo.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163uxczbnpi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hsriryow.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163aysnqykv.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163uefqkora.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163htdmgujf.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163cyroojjx.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163kevfepgz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163cvnklnto.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163thhtjvno.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163vrruwvzr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163uxhkhbdw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163eminejlk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163frsfukoe.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wgndaxml.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163kijtmvkg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163fhxztbsp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163luifiuam.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163dbqgqeyr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163cpkygpau.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163snwuncfe.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hzzgejue.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tqsdscai.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163pouirrbg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163zftmgblx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163uclaqydt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163klozasvl.html

[P04] 求长度
来源：http://www.xuanzx.com/163dtiwclwi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163hxuzumsm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zcecejyv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fypwenvr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163aumniqcx.html


<!-- 参考信息 -->