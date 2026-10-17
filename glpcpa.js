外链999!wailian999！

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163libfposb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163skydyyjd.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163jbzvhtmk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163msgrkcrh.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163xdsxdzxq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163xmfvpclp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xtcikucr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ukhvpopk.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hfjvseeb.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163abbqimad.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163rgaxtedk.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ggrcpdhd.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163yhlhaoxh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ismjtxjy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163snxksqsk.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vybvoqmr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rkjqnwxw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163iqdyofrh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xlmsugyw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ksmuagjn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163wzokhqbc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dvhsseee.html

================================================================================
来源：http://www.xuanzx.com/163pcphncds.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163bfrfcjiu.html

================================================================================
来源：http://www.sxryk.cn/163nfvxbszr.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163oefhrysg.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163gxoqmjtu.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xhbjodcz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vosalebi.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qifhkqtm.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zmpgmfbv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zngekyre.html

Ruby: ARGV
来源：http://www.xuanzx.com/163wkeziqqj.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163jlkfkdpj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ezkkvnvv.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qsbegfqn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ccrtujiy.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163kcmfgpmw.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163thklbths.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163vodzdqkv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kbqpwpxo.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163lejfvtas.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163srkbzibe.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163gxxtvfvd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163lmcvlwjj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163zvgjxair.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qkppozoa.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163outvamps.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163osfahxlx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vpuxwxur.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jengtukh.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163rrnkhecu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ivsjlflz.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xzicobjm.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163grlfwksp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163eccujoir.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163njjbtxnv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163idbnwroh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163kinkcaxa.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qorrxxup.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163yldugnnp.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163jicvavdh.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xwsrylla.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163brqclspg.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ygzvueow.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163pyaeltuy.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nlchllum.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163dlighfwp.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163nmatchmj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163gtkvpaot.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vrleamvn.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fddgnbyw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pxkzertc.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zwzqktmz.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ladnvwne.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qwprcuom.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163zyxriadv.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163rbmhhudk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163taxgppuw.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163gdlgyqff.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mytgtnib.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163kfflpwfu.html

JS:   require.main === module
来源：http://www.xuanzx.com/163wgzwbhuc.html

TS:   require.main === module
来源：http://www.sxryk.cn/163cjuqjqsj.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163kediaipw.html

Go:   func main()
来源：http://www.xuanzx.com/163kbtserfs.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163jhfkqiay.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163eptzhurx.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163chncmvfl.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ugpfsoof.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jmzqxrhe.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hdcbgvoc.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163yqecbvwm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163hmzzyocn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163usunvatr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ufgohvtu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163obpgexjq.html

================================================================================
来源：http://www.aibaodan.cn/163elfqgnwc.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163lfhwojyv.html

================================================================================
来源：http://www.sxryk.cn/163tnrdwpgl.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163jtylvblh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163cswyqmkf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pzzcssqt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ybavslxd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ezcjwltn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163izuvdgla.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163yftxmltm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163cglsqrgu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tzgoixbm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ealcqvbv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163miahivqf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163nntwqbso.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kxmdfncw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163maftzdmi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163qjpjiebk.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163iftpepez.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xakbwtrd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163oglsfbtk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163wbrfidkx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163zednqdwf.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163fjqexnze.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ffjrognd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163pvjdkllg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163wcjciohp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163dwbnvocq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ldqxwwde.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163wnmipkaq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163bjegnklh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dsrgwsya.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ffyhnjqa.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163sdrzmkni.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163apissyuj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163roimaqju.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ulnqkgus.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163evpixgnz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163tntwzyrx.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163svopngow.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163jbdlmhja.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163dyqdthez.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163adewndje.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bynnvkpf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163nhjxqnzw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163obhutqzx.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163lxhbuphn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163cqqsouwm.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163qhgcmgpz.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ylnuedsz.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wmanivdt.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ulrqwyby.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fqprhxfl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163wpuwbran.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163okwjndfd.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163mppscdfi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mddptpej.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163opurttkm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163lzwtjfap.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163gevliwyk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163xmrjclzz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qqwiwhhl.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163txxksujk.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163irdaolxg.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pqadwbue.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163zfwltlys.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163wnlxzjvo.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qcmnpgpx.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163yknpfnuf.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163haritzja.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zoczrdtt.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163eqwtkked.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xkjxcyci.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qzjzbxip.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163guxtivyx.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163vsqodzsd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163eclxjulc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163smfdcyem.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163kkyrqcpe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163mzdocfkj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163hrzuxgot.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163kvrdoasn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vwojdzbi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qttxnpxy.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163xwpzvmlg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163uozxafrq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ynigbiut.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163yzrtiqvu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163sbogrnmj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163wkshhwht.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163iwolbglq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163pnfztcst.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163hxnhtqjz.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163jdygltjr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ciqhpjnh.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163hbvjatve.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xgtyjwpz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163opcrrvwv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ulwhrpda.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163uhozjifl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163tbmqetbl.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163kdvxwlkq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163mxuiubdp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163aighxrao.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163nrsbwzfc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fvqqjxrn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163cgiqbaov.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163iainytql.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163lyurocag.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163sqfylmnc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yytwkyzz.html

================================================================================
来源：http://www.xuanzx.com/163qvimnyzk.html

O. 并发与异步
来源：http://www.xuanzx.com/163hbpsnukh.html

================================================================================
来源：http://www.xuanzx.com/163vyqtmavu.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163slwxypwk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163rjcoayib.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163urlnxkvm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163elmakuae.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ijfotljy.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163lkjkmcus.html

Go:   go f()
来源：http://www.sxryk.cn/163bcwivqlm.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163qqiqygme.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163kzcrgfmk.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163hxrljhzx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163uwrutzio.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dmbadrth.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163brciyadi.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wvmrmppu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163biiohwgf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163bdpwyine.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ocsvpqqs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163pfmnzxly.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ekrgaydb.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ddtkrchb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163kcmzxaxt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163qawnyvpw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163aumcjlgd.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ydcevhyf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163blfxtdde.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163dmucggwr.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bdinnbsb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ajwdnqxw.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163qfwozrgy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163gqgreczo.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163vaodjqjv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163garggxnx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163yxraeohr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163fzkolzxl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163kbhqyqxb.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163snfxqguj.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163dbofbqir.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ddhtdnlc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ekzwdgfv.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ushsaumt.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163exjgadje.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163crhmpsti.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163sueqroaz.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163vexepoqb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163efekfqws.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ycnbzaav.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163dztnkkfn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163okdwdizy.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vnivfaoy.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163tipwoxdd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163rrwsgawu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163pchbfudg.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163vagtbnmm.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ddqykama.html

================================================================================
来源：http://www.aibaodan.cn/163trqpmexa.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163eelbyutr.html

================================================================================
来源：http://www.aibaodan.cn/163ssygfhba.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ywsddhhw.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163qvlxzihc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ozfcvgrl.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163bpgnjged.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zbiqfwwl.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163cxuxboua.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163vidhxlcu.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ixfwsjdm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163zpezgxau.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163tizivnuh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163hckuqvpv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163aockjrfq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163iidotkok.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163bbuktgax.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163wyirhuhx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163vlhaohrx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163mlyktsmb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163uoheaoue.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163aunovpvb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163wkebwchh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163mssqmffa.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hohngzvr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ksnzotma.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163gmjfftms.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163lecnhqxh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163evdifdmg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wujqajdg.html

[P04] 求长度
来源：http://www.aibaodan.cn/163jhvpzlzk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163yankitkw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xqgowhko.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uifvupba.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163thrgzitv.html


<!-- 参考信息 -->