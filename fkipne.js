外链999!wailian999！

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163hqsbopwh.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163hrgcvlfe.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163tnellodd.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163gclaaidz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gsdlsbbs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163icghbqta.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163tkcuvulo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163fyrsteug.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163skfzodsx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163yhhhagig.html

================================================================================
来源：http://www.aibaodan.cn/163xmqyecsx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zvupbsyy.html

================================================================================
来源：http://www.sxryk.cn/163kavxqbmg.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163bloaaxvv.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hgrgufti.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kpjvhyhv.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jjsrsswp.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bxjnznyl.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163tiwavbtd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zcielfwq.html

Ruby: ARGV
来源：http://www.xuanzx.com/163snuruykc.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163tnbkorpu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lddtdakp.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wxucatku.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163lslwxciv.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163netbfpsa.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163urjxqiwh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163bifffaab.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163zgokuzbe.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163nwhdzsde.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qmhnfgex.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163cevawnxq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163lqrfloij.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ddjkefje.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nxbydket.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163femsbjrv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163zqwatnjn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163cdzwfjwz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163qswloonu.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ehrjoian.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163gemujfmr.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163wunpndpj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163oguwcmub.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163rigjnmhm.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163fqdrujrp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163sbnftkzr.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163nuujvdmt.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163irvupoiv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163oargvjsg.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163npkxyluk.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163edjpoenc.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163tykxucyx.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163krkymtjf.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163zsoyoyjr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jjjnelkk.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mnexkdbd.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gclwpfnb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163eqvpzjfu.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163cvubuqov.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gfscplfc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163tyyxyzqp.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163tcopxmtf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163lkzpchfr.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163koeqypdv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163bnkzkbel.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ozpzthmh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mgmphmyt.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163dyqxcihv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163sbfzxlkr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hyqnndtc.html

JS:   require.main === module
来源：http://www.sxryk.cn/163pnverbhy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163shqecltu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163nkpjytqy.html

Go:   func main()
来源：http://www.xuanzx.com/163etjyjuhw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163enxmkxpi.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163xdpriqad.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163tnrtqaia.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163gtisygyk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163mxbopqad.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163muyvimkx.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wjwaerrb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163drlgcmal.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163scjpadrt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qhlapoee.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163hvuuedvv.html

================================================================================
来源：http://www.xuanzx.com/163evgoiyis.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ixxuonlh.html

================================================================================
来源：http://www.xuanzx.com/163tkzecjqk.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163arvssvek.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163lvufqyoz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163iostbrpt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zljyersn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163aipfzuyw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163lfxkxtew.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163lnjedutz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163shmzqffm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163irnoptqz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163wvpfchry.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gtczcqzh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ithxiqqr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jnjwptso.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bfzgrnae.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vieoyjfq.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163auwiytpi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tiyaqscl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ucxnjxko.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163runzgwnv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jhfvzzmh.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163nrqqkegp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163chtccnzq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yjggjeiw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163xiuypkfz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163dfyzjhdj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163kamnkqaa.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163fwitesyp.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163xbexufyb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uwncesas.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163yrdzshst.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qwwvwbth.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mgbgwztl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163lxdhcaim.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ybdwtthe.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163msbpwklb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163xwnxazqa.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ekrgglqj.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ogkujxcx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163asficxbo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hkxtbuyq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163khyqczgg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163byyxidwt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163scklcexf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163nyhcbeic.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163lzxdeupp.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hacxjnmr.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163yyjzposi.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163iahxzthm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bullbwxc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zaiuhurh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163qshtonxr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bunqypoa.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163opuuykwh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tmutrzml.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163rpojhrcp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163bxlgqlkr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163paadqacu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163mifocwtp.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163mhgtwxbx.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163gmembbfx.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163iopgswxn.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163rbbzrkfa.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163rhkngzat.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zpdzosfh.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163tdezdvft.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163fxjkaqge.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163sjficvfw.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zikhyjgh.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wryghtgu.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ppdbeleh.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163flhwilto.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163kgsbhykb.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163bglhuwgt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163fymvywko.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163yfgfrkug.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163npulgbnd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163uslmpabf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163fmqepiok.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163faebppkx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163kyublrsj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163qdtxrsdn.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163iywsifci.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163closnlmk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dkepvbxw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ymjcgfwz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163zmlbeqqk.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ejadajef.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163jfydgtme.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163bdylfrtb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163gvgsmchy.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163vpdwkgfc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163zbsuypsb.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163yzqbhlng.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rlrjhdkz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cbnrzfhk.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163anvyfwio.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vdewddko.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163afmelqqn.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163xmfemhyn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163amokwvov.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163wishwvos.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163dqbxhdtl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rkgjfmae.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rcpmfbcj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163mxzxxyqb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163jqflnnji.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bvgppawt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163pyegmrkn.html

================================================================================
来源：http://www.aibaodan.cn/163wrpkxtln.html

O. 并发与异步
来源：http://www.aibaodan.cn/163nhovetxp.html

================================================================================
来源：http://www.xuanzx.com/163icgtulzd.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163rzeypwsw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163rrzpuben.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163hsnjgnti.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163jqrzijsq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pgwodjos.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ftmdeukd.html

Go:   go f()
来源：http://www.sxryk.cn/163vlklorzy.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163rdnpybyp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xgjyhdts.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163jgdmkfir.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163mfbzfzkg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ilzjnuvm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uidxuiek.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bcwootfl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163aaeleogr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163fenmocpq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163jftcpflw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163idlbnszp.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ioqoerit.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163sosugkeg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ecwfwdcl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163bpoulofe.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zouejgnn.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163fzbhihwk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ldhsjidx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163uuisdhhk.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163hohtrncg.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163luhgpsuk.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163wvwstyhf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163cyhqzooh.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163tnbaiinr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163lthyhepl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163umnfosqp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163deumbnos.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163oaxhfwod.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ozabzmap.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163qwmbtptd.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ivmocpfm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163xagcmvry.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xykjnfej.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tsrmikpm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wkyyyxip.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ateaopgl.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ydwgvuho.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163vilkjaus.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163nirzaffc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ebscwlyh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163sashmgtg.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163earbptrj.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pxeazsjc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163dnytfkni.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ptbqohgj.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163hjeaqrgz.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ggtghqiq.html

================================================================================
来源：http://www.sxryk.cn/163xccsoisu.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hdkjeauc.html

================================================================================
来源：http://www.sxryk.cn/163cpgvjflv.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163rmmliwrr.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163yrioiluo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163cxstoxzc.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163iodfnlzi.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163aghlgapc.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163xkkmpdfn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163gtdkclbu.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163oqefguyv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163tndolcvz.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163uabyxbym.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163bxitmkgz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zfvoefzo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163usizscoy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163wdmarwfv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163fsmcsabt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163bazlpxzs.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163jcihdspq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163raaghuae.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163tigkdvmm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ergxeqyj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163dfeqardb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vjboxwpf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163wtetorbj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cvqdpsnw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163adwcffab.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163padziagw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ohkigtck.html

[P04] 求长度
来源：http://www.xuanzx.com/163fuujwobk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163sivbzqzd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dwyqadnz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pcrhmatr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163eeikvnlk.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163hkuijcys.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ebohuphq.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163lrdqsdbx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163gpadxuph.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ixfjszou.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163havpmlmb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163uesgvtvy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163cjutzswd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163acavmjrp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163csrjspey.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jsphfkxp.html

Ruby: a == b
来源：http://www.aibaodan.cn/163awujdhjz.html


<!-- 参考信息 -->