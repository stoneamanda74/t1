外链999!wailian999！

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163hltxnvzp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163fytllfkp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163zpcfjcfs.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163abgcvbqo.html

Py:   resp.json()
来源：http://www.sxryk.cn/163wusksyaq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163sckfhvcp.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163pvkketgm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163xlqqusib.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hhtflnqx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ehmtvcqy.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163oxsubdmp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zjuyjfah.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mzmlsknt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ejxileio.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163llwksabb.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sqviwgph.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tmwkwjaw.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163lvnmqoyp.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163gewbnynp.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163xzzlpcby.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163qhlqkdsx.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163aaerqhll.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163krqohbqg.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163tloxrown.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dkdbejdr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tfuhslbz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163fbqdtsyf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163isaxefbo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163pfojtwfk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dijuuvkn.html

================================================================================
来源：http://www.aibaodan.cn/163zmmvduyx.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163vxyumyzk.html

================================================================================
来源：http://www.aibaodan.cn/163mpwjrlzw.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163tpbuzhsq.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vudbuokh.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163hwpcuhyg.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gtpbkddw.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zwbbhvim.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163bhjvqzed.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163nksranac.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ozbtywmu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163xhdzhhje.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ietvixol.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163khzuarkj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163uqjzsumn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vqwostzo.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163kvnupssg.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mzmnxcld.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163aacnvarg.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163vvfmvijn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163zfifypwv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rjfqxppi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163somukuux.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163eswqoopy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gtiqbjnc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ubvdubdu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163hcvugjst.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163prtaqiiv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163bvrslrre.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163pbeyylml.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163gqszcfrq.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163anrbndka.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wgavbtdn.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163mxwktonk.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163fgqgloau.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163sigveheb.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163oqfrqdym.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vhwullad.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163pnzhjujc.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163xqrennlp.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ingkyemo.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163pcrpuwun.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163nsrqwtnd.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163yxtxyvmv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rrkinywt.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wjxorehg.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163yxcvggpa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163dooekibr.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163admzhgss.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163patrwnuq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163dtkydmnh.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163eugnhiof.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163gwuswyeh.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163gtjqbrxc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163xllpvrcz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163kvpxrqjr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163gnblfujz.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vmkidxcr.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163womqmvne.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ipkuthmj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163afgomxga.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163gdzmuidh.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hvtisvxp.html

Go:   func main()
来源：http://www.sxryk.cn/163iutcogmw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163llhuqbjc.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163hnxqjvnh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xrhfbohz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vewmrqyr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163uyqjvydq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zmviknlf.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xuaauxia.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163acjcxdfg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163uimhlalc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zisptfir.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ftiuxbrw.html

================================================================================
来源：http://www.sxryk.cn/163sulafspp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163jcixxmmr.html

================================================================================
来源：http://www.sxryk.cn/163jxxfimpm.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163qlbyzcsr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163fftbkacb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163tipgldwt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zthoavyx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163emxtqkbe.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163cuwjjqcz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163typikrjz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kjnuwhpa.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vdnresoh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163uddpftxc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gmscilhc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jraispes.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fybrvhpl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hfgpnnnu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163imtlcibo.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163lhzwjmmd.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163czvimnyo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163qvinivnm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163tmdeidaf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163rplxyryw.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163yrpdwyof.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163akxvvner.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163geufakrg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163qgyoqdnx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ckwyaeds.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163zjodogfd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163dfyptobl.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163cgujcvgq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qdzympke.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163cqpjnowy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jpihvhtz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nauqtfnz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163fsuyjvql.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vksrppgb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xesuujyj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163bcpmmbau.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qctgepob.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jlfoaxxl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163eqpovokt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cijtikcc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ldlqpasi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163kmtwnreq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163lccmqqci.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ordltpyj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163bsaoqfwt.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163jezxmdnv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163bsiglmvy.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163aplndyqb.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163amzagyqc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163pspjfzpc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ywsrulnw.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ayrgrvjs.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163tgvuskmb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163szaidpkb.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dtblsrjp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163rttwqcas.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163qsdhtwht.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163trltdbgz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163bnlroriw.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163efvjjacw.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163owfjcsgn.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xfaxplqe.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163pthvcznf.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163iwgbofry.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163mtiipths.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163qqsufhmy.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nbciyscw.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163syybjnua.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163krrkpdft.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lnoxhlhp.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163kwcovxcq.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163aaqzjeqv.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163nntmhxnx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163mkazhbzb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163savwxqui.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163mxugdfkw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163xiaaqjdl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zvyekjcn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163eurgkrbb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163nvuhkqmv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163igrpnqef.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mujgqdkx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163nbdmufdi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163iadvqoug.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jzyzgqrj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163fpvzbgrm.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163uncmvnuk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163seyqbfmd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rdajtnlw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ghthqiry.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163fxrxncfi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163amcputvl.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xqprscif.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163urkvkzed.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mypvtxtb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163zgoecdfq.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163thjrgudl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163dntfjtam.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163bhfkbdai.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163jaqmwqkh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vtvxwvru.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ppnnepue.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hmfiltpy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163smgcyrqb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mdffuips.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163gpdfijay.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bnozyeye.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163efqtaofq.html

================================================================================
来源：http://www.sxryk.cn/163ncufchhb.html

O. 并发与异步
来源：http://www.xuanzx.com/163hhkmxkqg.html

================================================================================
来源：http://www.xuanzx.com/163igkcnoro.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163zwqnzbju.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vfmifimm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xdjpxcxj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163rxofcpxr.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ysiwkklb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163unuogmdr.html

Go:   go f()
来源：http://www.xuanzx.com/163nqitcqcg.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163cfqwiqty.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163vtdauczg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163avtdsqgk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163bbyyjlyg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163oorjeqyq.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163sbinyffw.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xgvsdpsj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163eshzahqw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ackxcitu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163gencvvdm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163kavgdgpr.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163kmpbonvz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qpcmteug.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163scurjhdi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163gruawxqu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ybxkgcsu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163lwleuouz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163cnmyuggg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163mhsvtoky.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ityfvkbu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vuqxudsw.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163zqdclueg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pysdonnz.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163dcsgnovf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163mznhyyfe.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163iuuntsvu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163zdofivuu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163njlylxrx.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163tnupxdnx.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163nxwldvze.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163kmmasiqp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mzbsbnfo.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qheujusj.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163goeryojq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jaelelzx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ngpamshn.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163uualcizk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163bedznjsg.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ojmwdezp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rdmgzwlw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163debejfpu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163behmbckt.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ngorjovo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163uzhsescj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163lawzkvan.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mwnactai.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163hwhsdgwd.html

================================================================================
来源：http://www.xuanzx.com/163nukhhoer.html

P. 常用工具函数
来源：http://www.xuanzx.com/163jkfvphsr.html

================================================================================
来源：http://www.xuanzx.com/163xzpwgsua.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163fiilsegl.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ivcyvxwp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ninhfqgh.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ggepeziu.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qfeopckj.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163agyhhgwo.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dkqdlbvi.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163crthfeer.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163cwyqdvzl.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163utyjkatq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163flmgzyot.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ambwadcd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163nmepazke.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163gnhcziku.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163vziqpzmz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163efeyvyjo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ihzinsos.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163jhcmpgci.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163pmjskdpj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163aqluhnfd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163fwvsctqs.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xgfgnmuu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163irvxvycv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163bvezbyqy.html


<!-- 参考信息 -->