外链999!wailian999！

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163yubonxhs.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163vslqcrxc.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wmjetucv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163oxeyznyf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zlnxhxsx.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zibiqqxc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163eknbocwy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163yilaaovi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pxivhsdk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tefpycoj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163bjsenqcu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163khupkstb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163mxtwtteb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163rxxtkfpk.html

================================================================================
来源：http://www.aibaodan.cn/163zfuawmrm.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vpisostc.html

================================================================================
来源：http://www.sxryk.cn/163eggexrvp.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163hbxyauop.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163jerthfjo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163qakdgldq.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zgxlasrw.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163imwlxmwv.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163daccbqym.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qumcswlf.html

Ruby: ARGV
来源：http://www.sxryk.cn/163zhattnyy.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163agnfqycz.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163dyluuddq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163cjhrjfyf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163epyajvzn.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wchazvyf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163lbcdzljl.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ebcewcew.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163fnvlxfva.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zyidabgi.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163glwruhnd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163pwvwdevq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163stpbmdjo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163khgaomtr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163habcxapi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ilbqzsgp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163xrvgmvpf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163omnjnebj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163rqlcqxsn.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163fgphlxmk.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163tpkhhpsu.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hzoyaacy.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mxczqlut.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163yydtjior.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163owhdirnq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163qaeraysl.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ksushinv.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163bhjxwfcz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fngoxbdd.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163zewmpvaj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ypyhxsbv.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ltktoxqz.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163gklfhmio.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fqngremk.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163qprzyclo.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163tdtyorxw.html

Ruby: exit 1
来源：http://www.sxryk.cn/163uhagesdo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163nnhxapii.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qoyaddbh.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nrbnxeoh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163dsfonuvm.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163xishrfzq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xmedckaz.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cyvujmhe.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163qnlfiodo.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163trfagwgk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163fvmcpmgy.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163rtikbnpq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163kcvdvqnx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163sueyhpzt.html

JS:   require.main === module
来源：http://www.sxryk.cn/163uwxwwucw.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163cjiybcwr.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163autvkuzp.html

Go:   func main()
来源：http://www.aibaodan.cn/163gqkmjzys.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163xapaximo.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163euusemsm.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163babuctcf.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163batawxqh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163lgtmoslp.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qtivwjoi.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gqsvviqo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163sdrngcmo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163znlychtu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163mwgawsho.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163eycjtlst.html

================================================================================
来源：http://www.sxryk.cn/163kohnvrxe.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tstpllad.html

================================================================================
来源：http://www.sxryk.cn/163nhivscku.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163usheuowi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163pnabsaap.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163vozqapys.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tymrjsjc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163teusachv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hegqbzes.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163yyhnulen.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wcokagly.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hspnqfns.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163fbbnlilf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rbzrsdfo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163dcjzistt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kgkkbsdu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xvrymvya.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ldlmogyn.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163grmhlgra.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sxrajcgd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163lurlpjsm.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163diouzzqj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163lkyucmrw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ugfnlach.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163awxrtguc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ebfrywmp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163vlouooau.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163kmmkdibb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xakjffph.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163cfkongcy.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163nbjqlxcs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163pmcbject.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163jqrlgcyh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163voqxppwo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jlcidjoc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163buqnmkut.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163vobaxpge.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mwwavwvn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163csnhbitd.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ducbfqdv.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163humgzvao.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163qkbfxdve.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lypgulbz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163poiwaole.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163lpdzgtgx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163lspjnmho.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163trjocauv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163xvyxttki.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163lvjahpwk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163tjpmgmhv.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163kdwwzbiu.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ccdivcmd.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qhbttgzx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xfqqvwwy.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163bregdtix.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vriefkro.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163afkvgflp.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163xcdbfnff.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163faowixbp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163duahbiyk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163bmmfflcu.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163azweyvzp.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jhzgranj.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163hwkquvlc.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163oboqtsgp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163szqvnqef.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qqjrkatb.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163gojmpona.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163smmulmqj.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fzklzhta.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qvarcfzr.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163nrtfjkbq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163gthoxedm.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163gmgnrdsj.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163iubodamx.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163zfhmgixq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163cjwasqse.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163mdyprqii.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163elasssjl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163bstqywan.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163uhqqfrrc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163tcwyccee.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163qefggyes.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163zgadnidq.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163hdtbvcyi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163yzifjkfv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163woukrqvz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163lhbxebdf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163jidxjvnp.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163vqplmvkk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163tpwspwcq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163fgqvjswc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163bqrnwgwm.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163tcrrgben.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163tswjulvr.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lcblyfcv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tjeuegnl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qgwzikxq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163hqhtavst.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163wunioouf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163wuppnkqv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zspgmuei.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163bxytyvra.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163gvqrfyxe.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163cvqnjbqi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ujulsxrh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163fkqapowd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163awsmtfqm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163bktdcvys.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cihmgvkr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kelwtfey.html

================================================================================
来源：http://www.aibaodan.cn/163luamkbqp.html

O. 并发与异步
来源：http://www.xuanzx.com/163mxwjgfwr.html

================================================================================
来源：http://www.sxryk.cn/163tcwizhbc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163hpvyizhu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163iouzirqj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gutraqvh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163yyyermqs.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163arzajcay.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163wghvvvby.html

Go:   go f()
来源：http://www.aibaodan.cn/163juisaccb.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xfgaymcj.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163nszsglap.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163aeosghbv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163bedhawcy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163whqstyqg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163epzdjzbc.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ekzazaiq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163jaikxsku.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163nruxpsdt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163yvsjpsdv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163qwrvvwgn.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163nbmbrsna.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ndmlvvxc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163heitldum.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vasmtowl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163maxyluzj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163bpwjmvzo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163hapmfinu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163qovpbgru.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163nhpxbfrw.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163avruevdq.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163kygjterb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163wabqaleq.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vvntxwbm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163kynpxonr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163qtxhdsrd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163echtpqot.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dfftuvff.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163rpjsjqea.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163bvrndbmj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163xctkdatl.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163mbksstpn.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jqtgtglt.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xcyvbljo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163lbfzmnga.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ucbtwmjl.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163xlcoyqgn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163fuvurmxl.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163mkzbtufv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rsdxanxd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163acrhxxsc.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dzutsiso.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wwujhppa.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163featqkpk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163nekcdwgv.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163rdwugezh.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163fpytbosz.html

================================================================================
来源：http://www.xuanzx.com/163jdnaexid.html

P. 常用工具函数
来源：http://www.xuanzx.com/163mhmfdurh.html

================================================================================
来源：http://www.sxryk.cn/163ylfflcui.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163klkjxjch.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163xyqauuat.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rbooakhi.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kwgovnaj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rjnavtnj.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163nfawwwui.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163kpbwoeov.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163mwffxvpu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163voftagde.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163okebxihz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163mbihawkb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163smjjrmmg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163fkqmiqai.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163nqsbqnsg.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163fhfbaays.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163tnwspkrv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163rbiqbaef.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163rjgxsdxn.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ekdsjnci.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163dcgvwalt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163zyevdorw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kdphsezx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163adsbnfyz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163mqqyrrny.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ciwewbtx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163enlfqpfe.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163bxkaadhb.html

[P04] 求长度
来源：http://www.sxryk.cn/163qgdasrqo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zwoblfay.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cncreifd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163qcqbfmjy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hrnbibof.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163rdjxpcbh.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163tncsrsxz.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163mzrbpxcc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163pqorpjeq.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qnrvxzin.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163dopiocfa.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163phgoeynv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163vlcmnpzp.html


<!-- 参考信息 -->