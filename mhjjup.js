外链999!wailian999！

Py:   resp.json()
来源：http://www.xuanzx.com/163thrddajp.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163gcqgvajv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163tuezcyck.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163cqjppjjk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xnndosuc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163fvugxoki.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lfvhbvkh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163udexwdcz.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163qxckwydw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jmskvphj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163sbevnzgs.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163oqocyeqf.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nmpleywz.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163thrvtpbk.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mypipkzw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163efsrsuae.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163plmwhnnj.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163grijadjp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163nztzyvan.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163blondgfk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jiclprtd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cqvtnkiw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ozexxgpf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163patvwyis.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wzmwltqt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163oeysvinv.html

================================================================================
来源：http://www.xuanzx.com/163kwtaubzi.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163szgejxos.html

================================================================================
来源：http://www.aibaodan.cn/163rnfhhfkl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qdlmjtsw.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163lmlnrqgz.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ifoxhsmq.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cftpiowo.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163rmxlvzbg.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ojwmqwyc.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163tdsihrxm.html

Ruby: ARGV
来源：http://www.xuanzx.com/163wtlbnlxj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163hdgqyosd.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163wodevrcn.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163zbzbydba.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163zmamycuo.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163yusurdzj.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163qctbungd.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jkuxrszl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tnidwmas.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163acowlfrl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163engadbql.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163mnzkisbx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ruwufioj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rogdhxaa.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nabwjluf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mzurmmxa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ievcfwkq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163gvcxepyi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163rbfkikls.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163mpltwzrh.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wgumpgmg.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163htkjwtpc.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xumpsdyg.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163vupbjiiz.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163zzwhyvvc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163htlbtgmp.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163vmqjotij.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163eiwlpsbt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163utlabyif.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163vonwuwli.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163bizzqezf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163xwkyjwuw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163uccexylh.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hcpirygt.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163xfzpgldx.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163gjukqygi.html

Ruby: exit 1
来源：http://www.xuanzx.com/163nlwcrqwo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163afgeusyc.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163mybdwbkd.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hxvoylha.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163hxuggxeh.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163rklfannh.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163mqveoumv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163jqcicvag.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163vspmlrwr.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163qnjftoiq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163fmfogdvk.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163eoqljhnk.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163sxmkfhiq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163sobaolnr.html

JS:   require.main === module
来源：http://www.xuanzx.com/163khqxgtva.html

TS:   require.main === module
来源：http://www.sxryk.cn/163tpuabpey.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163szwzqmgf.html

Go:   func main()
来源：http://www.xuanzx.com/163kwtmqxfc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163cymijqps.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ioecjijh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163itiuewau.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163iwrzbqnt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wtdzldjb.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bcvbwxlf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gsmbewbt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163wpplklnu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163dbropuhf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163gfwakykv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163mbrdbsgs.html

================================================================================
来源：http://www.sxryk.cn/163wldwwzlx.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163keqywrvo.html

================================================================================
来源：http://www.xuanzx.com/163xwxiices.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163teadzmde.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163fsmpvqui.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163tcnvxahw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163plnebzhb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163yzewiehr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163tecvexyp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163flkshday.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163umfwlhxj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163szaqzhcm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163fkkagett.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tqallskq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163lfszybtw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163znduxojl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163uaemxgtx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163aerpfaie.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163fxrpmvnw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tfryhwdo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163vtrznfjw.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pliibcdj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163muejieke.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hqgnymns.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mdgibplz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yeoyauws.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ahacbvhp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163xgawemgv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vmcvfmec.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163phtzawwy.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jdxxpuyo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163yzsfqrbs.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163dygyqdbq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kpfjqjct.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tdbjgnoo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163eczpowbs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163opowtvwu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zaqgzkou.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163lqfwqfia.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163mtnrpwla.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jpdzgayy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163oytphlmp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163incmntio.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163orqampvv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163sweydfxu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ifehkcqj.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163gfqzlnhp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ixcgwnjn.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xyuomjyp.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163dobigbyz.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163fwwkrafy.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163bvzqpekh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jbgazvpq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ggcpbkur.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163fdpcasnm.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163hlnkuaku.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163avivmvae.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163bxagercn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jqcakpps.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163wrdjycwe.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163alnysrar.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163jgyraiym.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163yhtwlfdz.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163nyzbhgoc.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163vowogooe.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163uiuactsj.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163effmvhxv.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163prelbuuf.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ghcffkhk.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qujhrugj.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kpndnuzd.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qpnelmsf.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wektzttu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163dpitgbjf.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163nsqztdpz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163nzivgbhp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163gmkzarbh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wzpgigsn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163sjjwepux.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163njrmkoyj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vekffkox.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163gwmcyddw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163leudzzxd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163bcyeipho.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163twqxxffa.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163bxvzrjjk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ruszyerz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163tdmvcber.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163dszgoewm.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163qbajyiwh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163zbtfryki.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163biktteyf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163kjfldxkq.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163wcejsfzc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163luuhlbtr.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163lvvkkwls.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hdpvlhhb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ngilhdzd.html

Java: // 手写递归
来源：http://www.xuanzx.com/163cjnykpdk.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bujjusfs.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163tcziyinv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163rgncducv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163bsclvvjm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ibqdfjgp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163wpabjmrw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wvtfdbni.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163azokxcma.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dvailbcc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163uimlndxa.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163rgfzdtkk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zcxraels.html

================================================================================
来源：http://www.xuanzx.com/163nayngtat.html

O. 并发与异步
来源：http://www.sxryk.cn/163uytkbulz.html

================================================================================
来源：http://www.sxryk.cn/163cuoovadn.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163yyqliasa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163pjvobyec.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163cnlirswx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163fivyxmhs.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zsckcnlg.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163zbvmikpe.html

Go:   go f()
来源：http://www.xuanzx.com/163eqfeuwwp.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hzpvkeur.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lztmtjrq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163clmvtxdd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163yuvujtmo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163qkccdcre.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163niyxuwkf.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bexdfftz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ydvssifc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163cajoihda.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163lgyphjsg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163wpnyxxyp.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163apcrmjwj.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163cujpsfnj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163bxpdvocf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ghzhewwh.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163taqlszod.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163rdxlaifz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163bymzodud.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163sktgbwdj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163zgwugsxt.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163lecxqnfw.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163hwhqfqcs.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163nlayjtnd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163nqyttcyb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163enklzdgq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163srtymwcp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163crphsxzq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163zoabzwmg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163uvergvik.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ngqsguwt.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163mpepwnec.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163qvethtyb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kypxejuz.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hrdemikt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163huijtinz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163nvznviud.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163onysxsqj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163fbivlkmg.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ymezxhuk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163uyzbpbmb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163mkvcoqes.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hogaafut.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yxwhylut.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163zqosdlwq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163fedulvju.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163urtesgus.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163pthbhfqj.html

================================================================================
来源：http://www.xuanzx.com/163fyyhgdft.html

P. 常用工具函数
来源：http://www.xuanzx.com/163mlcboayn.html

================================================================================
来源：http://www.sxryk.cn/163ckwmmirl.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163naiembhj.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163yvuwxgad.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163cjwbynem.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ruzhcgtt.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pmkqpewe.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163sspyxrgs.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163zznrkeat.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163cdusggei.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163evldiueb.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163nsnerrij.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163venpibfu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163yvknooah.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ewifrkcy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163cviuxxlq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163uqrnsial.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163tdqpnepj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163atlyrigx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163dkvugfrc.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163nrxjljnj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163blljaclf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163uykjiccj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163uctdoowm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fxkqcjun.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ukljvush.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163kgeymjsb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163liwjxbpb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163afrajhbt.html

[P04] 求长度
来源：http://www.sxryk.cn/163rzsgdqtf.html


<!-- 参考信息 -->