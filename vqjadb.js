外链999!wailian999！

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163bzowthjh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163bmxcwrxb.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163hqinsdpm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163nztvphgh.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163yqcuuhae.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rqmjhdhi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ameieime.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163krwxghhc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hcuvtfmm.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ifhlkvam.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vtujsddy.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163hmwwruwa.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163nydwpcse.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163yopfspug.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163nmrnkfci.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rbppyqdg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dvfegjkw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gpoilpav.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163tvdvxgoo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163inqhwvzq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163fhwnyroy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163dwlggivk.html

================================================================================
来源：http://www.xuanzx.com/163bsqzhoot.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163svqxsfzq.html

================================================================================
来源：http://www.xuanzx.com/163ictzwzhh.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163viywanle.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163bjppldjx.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ditkwhjf.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kceappvu.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bhsykuzu.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163kyykeqxl.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163qvswolxr.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ejrvbymw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163skjtebiz.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163kabrknxo.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163zjkswofh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163eflbqrjg.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wtgfpmhj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163kptmhhkd.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163qovhcldj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163wqgesswf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ynqrizxc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qlvpmrcx.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jaiweqdx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163nvbpmlfn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163aoznnmtf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qwuxldhn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zftmslsr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vwvdcihq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163tytmjjll.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xxyxqdee.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163xjmpmhqn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bhwrlhdg.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vhzcscae.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163piefjwkh.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163mmjbspwv.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163glplfhms.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163rfdfjrhl.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163zibxwscp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qemhkdbe.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163jflwttbm.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163tjghcnao.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163cncciuye.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163wtzfadqo.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163leyuhgcq.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163dblvsyla.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jlnixkmf.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163cgiqkljk.html

Ruby: exit 1
来源：http://www.xuanzx.com/163xvrzwmnn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163mmmqwhkg.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wfmhdvnk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pqqxguzr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163useyseml.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ytkjgmzy.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163swimitqu.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163proexywf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163dnqjlnob.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ggztvdrj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163rtkuixuf.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163iymawbab.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163eyscvvgc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163mzgtgbsv.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ehhzmbmf.html

TS:   require.main === module
来源：http://www.sxryk.cn/163gsdxsqnu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hipobczd.html

Go:   func main()
来源：http://www.sxryk.cn/163gtwhdicx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bsljrscn.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xvkznfbk.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163mmpmqxqw.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163adgpmvpk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xaopxexc.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163eenihjgu.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wxkhjfxw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163irraxuan.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163utzibhdh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rqmosxjs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163incrylwm.html

================================================================================
来源：http://www.sxryk.cn/163kgaazxko.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163srmcbfwl.html

================================================================================
来源：http://www.aibaodan.cn/163avgwcklw.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zcwtsduj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163vjcpmmjp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pxqasxip.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163alfrqvlg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163eosnxzkn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163gaijsyfq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163bmtwqpgc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163lcgppvjk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163nkaruxpe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163uuhloyct.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ctznftup.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163aoupalht.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kgrctvvu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xtvgzqvz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163vdiwtoux.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ynpqubux.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163pfbzcjrm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163qxubjjjy.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163zhmwmiiq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163crxtuxks.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xcmkvhmc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fakkcemh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zaaxzhcr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mzkgdjyl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163yxbaomsh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ucoeexnh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163baqswxhg.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163gvdqgdhl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pbvclmgf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163jpkcstdg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kpvamhru.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163arnsjjsl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ozntszru.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163hjcpkclm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163plwzbgav.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163xiijlxmv.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163gnkulnhc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163mvxfnywx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163jliqninf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163tqeiygyv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qiwjebyq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163slqvvjex.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rdmnnzpy.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wxetjllw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zzjfxfvl.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163fddsajal.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163fomhuzke.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163drmcjcug.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163mlavxacn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hshabibl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163jplfgiyu.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163hcysonlb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163mwwwhgly.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ymrztrhq.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163yaodjbfo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ckfotyjq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163jzoelccv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163zrzptxdu.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ouxkrncy.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163rsytdkma.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163qxnfwnci.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163iaharqub.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ogaikecx.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163eezamuzr.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163trpxhdre.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163hpwftcsa.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163melmsaco.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oxmyakze.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ofnlwbsa.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163eaiwumtj.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163rlqtrims.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163nkhhpxqm.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163adontwhu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163nyfaddiq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163mntvopyo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163oezrsnul.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lldvrvbb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163qvrvdccu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163zjdtlnqo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xrgirord.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163wkrwsnwy.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163stjliqfn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163riskcuvf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163oyehkhyo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163pgqqtdfe.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163udjewhyo.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ejlbrvuz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163durvcvpe.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163jxhdsnxr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163loxnlvar.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163pfzbqigc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163uzytlaik.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163obvbwdnx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163awiljeco.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163siiasqbg.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163jltysnxt.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163lsujrqmb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ywkwymfi.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163yjxglfcc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163vdkfvzaq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qmnhwnlp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163oxwqkfro.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ewvgzkpe.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nhdizoac.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163btotkpxa.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163fumjekyq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163hwewzzwm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hrifdnwi.html

================================================================================
来源：http://www.xuanzx.com/163cvdltsae.html

O. 并发与异步
来源：http://www.aibaodan.cn/163hbnmprrg.html

================================================================================
来源：http://www.xuanzx.com/163asnlclue.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vyoakhug.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163bgnqemzf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qzidvxbs.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163sbyvpmme.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ngcsvceb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ucoazsdv.html

Go:   go f()
来源：http://www.aibaodan.cn/163eciirkid.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163mytryost.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163uirorhyx.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163kmkaxhgx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163tidakfgi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163xwugjpfv.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ltgwnnax.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163euscllzd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163phrrsalr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163mtclrglc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163bxmfjemw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163bvwxfjvx.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163hzgoqlwb.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xatpbaap.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rkwxkzpn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163cjzqpccm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wabpqbbl.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163uofbqbeb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ncbwtctv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163vuxvhahk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mgcwpnlz.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163cmdmdarl.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163mizpxtnz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vkltawxh.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qsyepjba.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163fwamzelx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163cgevxhob.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163mbhqvdpj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163tifrcsmu.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163bnmecttq.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163tzvzfzes.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163pethauwr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ooiaoazv.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ygweqflo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ljvzrazt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163rrpqvllz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163oimzsduw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163wlobzqgp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163nlxagibs.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163fzvzwvjt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163enqbnqox.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dczezkzs.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ghuwtrip.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hvofhzsd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163bvuxmere.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163aqspvyhx.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163sxblziam.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163texdlocu.html

================================================================================
来源：http://www.xuanzx.com/163vcaeiris.html

P. 常用工具函数
来源：http://www.sxryk.cn/163jkrjejvc.html

================================================================================
来源：http://www.aibaodan.cn/163bwdtdvsf.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163mhmdskxe.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163jclqoteu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163wpvgfyjx.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163himgibgl.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nvxcmmvo.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163xgqsypiu.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163bnuemfrc.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163gflamvkc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163jfnucfdt.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163dkkbjvrs.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163qaaizrfj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163usphojrl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163yzlvbhsb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163omdlvgbe.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wnftbgxb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163sybclvng.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163uceplskf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hkvhgqkm.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ttgmvzzo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163veugsqea.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163xhsjmszh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hjhqjtco.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qnnfimgm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163wtgwcvje.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163adyhgwfa.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163lqcebppn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163oxvbrupw.html

[P04] 求长度
来源：http://www.xuanzx.com/163qawjgodb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ybhtnfyd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163riwqrimo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163tknxhdlv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xjgdoglf.html


<!-- 参考信息 -->