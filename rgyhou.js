外链999!wailian999！

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163eirforig.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163fklpkaui.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ozgxnyzt.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mlmuxtap.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dzblyijj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163vrcnootz.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163nzrrmhof.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163feqozkqn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xrlsyjam.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zosgyjlr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163xrtpqoth.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vgtzcnao.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163scoiprdw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bsbejvwf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163msseaquk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163udspcwfe.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163pifbxwwg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163rpuzrczq.html

================================================================================
来源：http://www.aibaodan.cn/163ppvtpode.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163vpgurene.html

================================================================================
来源：http://www.aibaodan.cn/163ozsnlvhy.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163jufzyhbd.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jgxpbjwz.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163uzwhlgpv.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zwtojwtb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jncqwmmg.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kvrkjcvk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163pzpkpwks.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163weprmlcb.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163trdybvvn.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163kpwkdtuf.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163vpjkkmux.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163mtsqrecd.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163uifozbgq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163cjhxxhzu.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163unovfgpl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163kvloiveo.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163khwzyntg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163uwjsbwdq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ckerbzok.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163wdwioqra.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163rvopixuv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ajqnrdmj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tuqvwxef.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163xjudrakh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163gushkwgj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163finszgou.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ohxfiegx.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163jenalnwa.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163htpjiala.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163efrrtrbc.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163imsfvkhi.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163wtiqihrg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163eztbsnog.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163zucoqavw.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ngdobtrw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wzrqdjqd.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ceiywyzb.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ltosodnq.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163lfsakdnt.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vbbvfxld.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163wtnvkrau.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163quviyxgn.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hvfwfayr.html

Ruby: exit 1
来源：http://www.sxryk.cn/163hsfxuufb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zasruhhw.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163tgboznhx.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jzfepdvg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qqezpfka.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163waulogpy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163gvwtqtwl.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163mkfusikn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163pvgfytlp.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163cxwpbcon.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163mfkwfztt.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xcsonyrz.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ksacwllr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163abnnwqkn.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ibuebonm.html

TS:   require.main === module
来源：http://www.sxryk.cn/163sbkrlrll.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fzxjwxsc.html

Go:   func main()
来源：http://www.aibaodan.cn/163lewwossq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163psahaazn.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ibixtlgj.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163adjepjzz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163xxoqbqer.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163dokchfiz.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lzdrmgqv.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163codecrbs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163krecrztl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163azmwfnow.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163yfuqljyg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163vhccjndi.html

================================================================================
来源：http://www.sxryk.cn/163hxsytvnt.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163njonszkl.html

================================================================================
来源：http://www.aibaodan.cn/163gtvfnquf.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163dugtrfzk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163dcxchung.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rncxdqwl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163yohngiie.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jlzrpafn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163dzonskgs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163dxlgiaal.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163otydivyz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163kgkutozh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163xgvcurom.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lkoetmef.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163fwyjjmdy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lovwyilf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wtleqtdu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163yzvbmpvo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163xxjqtuca.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bnczaual.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163eqqomnzc.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163kbsjmawr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163jlhqiwvx.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ophwsphc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163czuoltht.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lheioqnz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163sbvckjxh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163yslbcdcb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tdcvixaa.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163vxsxpndu.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163vdipvzgr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dqkddqdf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163unkspksq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uibbwsod.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163eqmbitos.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163adjofsfk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163fcnjzlex.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bbgwaelh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163gisfstyv.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163eporcohn.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163plmocexj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163pbwgpsfh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163uapofreq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163urlcxikn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163srmzeohk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163giknwubw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ytdnjfoa.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163naaqsrec.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163etoologo.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163vqfdgozn.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163hcmmzaqb.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nutjdxbr.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wgrtnyhv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163bqkrkvmh.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tiwouspt.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163gzeadheh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163inrymcvt.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163hucygtum.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ialxbixa.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163voxinvqk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163vpacsoaz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163opkacyoh.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163komjjkkf.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tabykzzl.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163yrwnrgmy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163vdyotmrg.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163cruvkazg.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163utxzgndv.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163rdngizaw.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bppojcqd.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uvugfnca.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163icsdcrun.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163tctfwlbe.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163uywmbxab.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qualpayg.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163moqgwnch.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163afsdjwxo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dbvhpzkq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163uawiejxg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163zdvykxcc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bgpxmmmr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163czilbvgh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163akgrfeou.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163kdkzlncr.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163dfyootpz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ajghqgbk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163tqydfdyd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163iuuxwbdi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163njvmuzdf.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163hksfkfmc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163wvlqenvp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163aupzpvvw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ihcfuesz.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163augzolnb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163hzngbnto.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163wwzyoshd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rmnlytoz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mlugyemw.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163emxxutio.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163vgashuia.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163pnaktczw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163sqoyitcj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163asbuskuv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163aiwpltfn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163gjekrezp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ctusbypl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bbobghwk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163pfianlvl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163knrqzhsp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163lhzwchvj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yimusenf.html

================================================================================
来源：http://www.xuanzx.com/163axiwhhzq.html

O. 并发与异步
来源：http://www.xuanzx.com/163zufcysal.html

================================================================================
来源：http://www.xuanzx.com/163uilhaozp.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163owupqvpb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163opdtatwd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163yfltpcho.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163tjdlwttu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vxvasgjy.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163spbbejoe.html

Go:   go f()
来源：http://www.xuanzx.com/163cliisguo.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163jezktanq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163aqcsbcqz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xowodebw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163zlpucyns.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163exqigbjk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ecdwynbx.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gspjstnr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163cthagwlf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163bgyznvjq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163xtbsgitv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mipdnfqv.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ohkiwyrb.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163metogdzp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ubpgvbet.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163gfelrmre.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uyjlsipp.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163zhcsxste.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163etkgfkev.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163nmvnabdj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163nscsnsex.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163jqugjwsv.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163zjiauwda.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163nxmpooqt.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163wldprqow.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163vmbbvges.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163lznfwryl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163hlkiqzqf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ktfwimpe.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163bthmmkjm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163owbqctmy.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163nkomdyxt.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163bkpijxns.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fuwvgrzc.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ektvvrtu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163glzdksyy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163fkpnfhtu.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163txoyntdw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163njjhtfwk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163nsflvhjz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163yygqfuzd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163spcitlep.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fwsicqfv.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163epgbpshw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163kqaecbll.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xkmvrmzz.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163jquzbbwx.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163wmsdixpk.html

================================================================================
来源：http://www.sxryk.cn/163nsgvqsrj.html

P. 常用工具函数
来源：http://www.xuanzx.com/163oqtgqprg.html

================================================================================
来源：http://www.sxryk.cn/163vaiwgdfj.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ketkivor.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wcwnnqsm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163wdyshyar.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163kxemehug.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hxsujnny.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163lnenirpv.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163onkdfkyq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163htjkcxan.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ohirzxxo.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163btswcmaf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163vrszkdwp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163rmwcpizc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163qjrecdzg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163mdgsktae.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163vaoojtia.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163yxsvlfbk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jrgyuaie.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ipmwxigw.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163rdttleuh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163xierelor.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ircimpwy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mgdujqhp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qcijyaby.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163nmkuqxzs.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163sihfbkym.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163gmmwmzyr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163kzullupl.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zrvloluj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mmralsoe.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163antuiefi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fqqmzlwk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nzxnjckb.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163aotxemgr.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ihekrkfe.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163bidneptp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163rfcgddri.html


<!-- 参考信息 -->