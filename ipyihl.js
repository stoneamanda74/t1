外链999!wailian999！

Py:   resp.json()
来源：http://www.sxryk.cn/163edbniqyq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163cyconpup.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163bhsxmkzy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ekstmoef.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163anteqojq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163vtrcphdv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163gjkkwnez.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163wkwscbsq.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163labqbicf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163svhjroaw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163tviccftn.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ttuiewpy.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jwirqugf.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163yaohgugo.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163uhviqpfg.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163hatsjsxu.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ifdvbwkt.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163tefthdqg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dkmjljnr.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163uacfmbuw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yowznqob.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pmewrenl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163enqunzxw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163oqvanron.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163kndzthih.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ukeocjhu.html

================================================================================
来源：http://www.xuanzx.com/163wbjtnsvz.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jckijsho.html

================================================================================
来源：http://www.sxryk.cn/163jsieiwjv.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163saervegc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163tffspgqf.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163eczzqkbn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pnrgdzrm.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cvifdhrm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163iwepuuwm.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163mgiiyxgf.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163kmqmmeoi.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ipwebhxj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163btwmducv.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163pnrzcegb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163hffncavk.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lscklell.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163flfwiuat.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163lnfgyyew.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163oynbagoh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163rxqezlmq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163aowltxil.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163smzoiyzd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163shlwvdce.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163eazqyftq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ypckgzxz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163rjwkmwui.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163cyziedgx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163btisbuzm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163rcaywozw.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163juceknvn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163olayjqcr.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163kggvgths.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163gzbxprwv.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163vtkffipm.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163wzpeevbx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ezqyqjvi.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163cvqzvhmt.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163cpfswbww.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hayhiixy.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163zfxppcfj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163dmanideg.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ilvgqccq.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163hpfimgyj.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163mninckqb.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uehjagdz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163otdpvwcg.html

Ruby: exit 1
来源：http://www.sxryk.cn/163zuvooyjb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vytulxva.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163fflgjcgp.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ehlxyzau.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163eiaxexti.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163tvmmoimj.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163fuywcdte.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163dxudknjo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163nnqotwtm.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163adaynvei.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163fpnygouh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zpyockpk.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163fnprlsez.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163wbofvpmn.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kxctbmof.html

TS:   require.main === module
来源：http://www.sxryk.cn/163vdijxyoj.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163nnigbrqi.html

Go:   func main()
来源：http://www.sxryk.cn/163onmuvbnn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163svafvuru.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163jlfiaevc.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163qyjesrmy.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163rqtqfvrs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163qnfugubf.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mpsozhrt.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cgoycxzg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163radtwbvu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wqthqudh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163grprnpgt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163yzyqolee.html

================================================================================
来源：http://www.aibaodan.cn/163xgokvjqk.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163qurqkjll.html

================================================================================
来源：http://www.xuanzx.com/163vvcswftq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163kejktsxb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163axydyrks.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163mtognzpc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xkpnwvrl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hhstixad.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qsfagkls.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tqsmwtey.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163intuplxg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163frsxbitc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lrqyhxiw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163axgpnxly.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jwzagpdb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ixvubesq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dsrjhboz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163dkikubxg.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163wthvlliq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vemlxqrm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163seqnttvg.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163aqgejmtr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ldctmnid.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163dwxfocbz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bzhtgjnv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fwnqibjl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163cddctpki.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163jiakbznv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vkiutiqu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rhxvgzcb.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163pbbrfvrn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163opydgxfm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163rhhsgkrw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kfckyvfa.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fdaxoafp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163rzxcwukd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163bnkuefyc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163erewjtuv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dgkgcxwv.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163pmuvihwi.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163quogbwpo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163lmhrshdu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fgfxyjsb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ozbnkodn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163hyyhikam.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163svskenft.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163pmvhptuj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ficcfqkq.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163affctchb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163mwsfxqhe.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163obqxzijt.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kbhyhjop.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qiryrikx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163vviscvjs.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163lwvrgvxo.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rgfczwbo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lqsyiiei.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163fwxuoejq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163rdmsscsw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163tdnatwin.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rdaycthw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163iqwyjrtg.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163vchymbcj.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ajjouxql.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163pjdpciuw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163qlkjlymy.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rnqianpm.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163blouwxni.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163xizgmdqe.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163hxugxayw.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fvfchseg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163madahnlr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ddxvzmtf.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163phrrvlrx.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163zbsqecaq.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163zaseqgta.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163bwszqijy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163woyldyra.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163icszagjw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163vxkcqetd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163iqmvyzwl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163nkkchqco.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ftavfycy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163xtittidc.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163pnaeilza.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163cgpahmvu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163vlmsoszl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163tebvvzsi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163cretsuyt.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163xxrkcsao.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163snqjbmzv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163dxlbyoij.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163pwrzwsne.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163dsbiniwg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163hjibbfbq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163pciceccp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rmtkruwg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rbwqwpsa.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xtasosff.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bqyjrjhe.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ihimlmla.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163kmwnaagq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163iqxitmxa.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163rzdyjekd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mobbmdmq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163lujocwgp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wjdnuaff.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163eulpekaq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163sxdjmgxj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163mypegxty.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wwaxeoka.html

================================================================================
来源：http://www.aibaodan.cn/163gmwbyxft.html

O. 并发与异步
来源：http://www.xuanzx.com/163oagztzta.html

================================================================================
来源：http://www.sxryk.cn/163hirdqsem.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163qvlyikgu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yfsrenfa.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163eoqzhgil.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163mhdemxut.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mqutrdkf.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163mwqjdusz.html

Go:   go f()
来源：http://www.sxryk.cn/163orybmvhu.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163cipixtui.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ngoajvys.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163aoesxvvd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ztsrtoyr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163hlkwtljs.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163sldhcpsx.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jiwonkfu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jowrzjnc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163winydevy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163vhhgjtxc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163puhzrelm.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ahgerqrn.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163rhjtkzze.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163cnbzidhg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163nmbkseic.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cxlsumcm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163vzqkzrsi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163hyjqtrwc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163eyiaywrb.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fxoajhyz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163vzeloigw.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ojoxyndu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163nzmzsaqx.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163zaxzqmoc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ptmiolpt.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bawyzkbz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163bnpcygij.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163axkafwow.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163slrjrxmd.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zwyilfug.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163lvriewig.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163uzwiuhig.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cedkxvid.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163mhanbmwb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163xkjetoju.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163elmkgysz.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163kfdjevoa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163vzbviemx.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163gobaoduj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163lzlopayk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163thwzuddb.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163yzvwvymf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pemhfxqb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163zoezdzyd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163yjbbtdiw.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ujxscubi.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ozwpmlll.html

================================================================================
来源：http://www.aibaodan.cn/163nshhpzvg.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163godauevc.html

================================================================================
来源：http://www.aibaodan.cn/163ilewgzvw.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163avzborwv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163czmxdglw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163vjjpemnt.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rxfctfng.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ltbcglfs.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163yqzeqqwz.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163pewmxmnz.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ufzjpomr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163uvherbxb.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163mqkooywd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ujjnkqbv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ergjyvhd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ggdrziyr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163brsampjo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163hrfxgvxi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163tezvugje.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163boaipznf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163fhhujmlz.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163iznapckr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ppdjjgsi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163kwxprzhd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hhqyqsoa.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pivriocf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163dnqzcdnw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163pxbvgghv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163cltwoucg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163iuqtlczs.html

[P04] 求长度
来源：http://www.xuanzx.com/163gremekao.html


<!-- 参考信息 -->