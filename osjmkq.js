外链999!wailian999！

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bsjotrtu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vyjopkml.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pgxrkjau.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163rlwmlzgk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zcnqccen.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163whlqvatz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163sfljpqpk.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163vduvmfol.html

Py:   resp.json()
来源：http://www.xuanzx.com/163xcisigfv.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163leqbpylk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163kmqmtqep.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ohgejkds.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163akniuygz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163mketgjbg.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tbozolfk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163aiojmvdr.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163nnumrbuy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wwabrkkb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vukponck.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ejnrmdfz.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xhoopcqz.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ogxbweah.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163lqtmqsia.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kkemajvg.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163qlursmzf.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163nxurplck.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163yypgyrxo.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163rzqbpjul.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nmadmpxj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jotkmhrd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163snnwpuzw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163uspwzeox.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163dwrlyplg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xruyzssu.html

================================================================================
来源：http://www.xuanzx.com/163suqyogch.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163xkdvpecy.html

================================================================================
来源：http://www.xuanzx.com/163oxqhyzss.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ghgjycsv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163tbteckxe.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wfjbkmyp.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xoyqqpid.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163puagccpu.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163bwcydbya.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xhltmfdc.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qiojucoi.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163krythnhr.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163bmpplzwv.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163tsqursyk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163yisbtwte.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163qgphpmms.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163fjzyzpgj.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163bvdjdpfp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163tzihpbfg.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163sgjyjdus.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qsckkski.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163mptoupjl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vihvykji.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xsbjcjwe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jtpmgfuq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dylzboep.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163lkfrlvum.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163mqauumij.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ayglgoxe.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163rvzdodlr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163cxtaykqa.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163fqhwoudt.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163iyzdkklh.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163uwukstei.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163cbjfqbhn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163rzjqpfjm.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ifzmqljw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163axtusmvg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163rfaipbrl.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163wkphsewb.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wfjirpcx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163bwpklbpp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163txxhjjpa.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163xqkjccoj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163qdakuwdx.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163kgsrfblr.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163cidxbgww.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ntxyilis.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xilxmjix.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gtrjfasn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163itswylbz.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rmiihipr.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163myxubkdn.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163kndjhjvt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163kqwnrzmv.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163wqcqwngp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pdfvecih.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ahpleuxl.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163mdwordwp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xtkdandl.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jdxamcaa.html

TS:   require.main === module
来源：http://www.sxryk.cn/163dlbnzcid.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163avolzvtf.html

Go:   func main()
来源：http://www.sxryk.cn/163ccmbpcdp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163eyhlhqpj.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163docfcleo.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163pwaewjta.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163rxdspsjk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163fdxvchal.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lfstrxia.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cvwladgf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ffelhqgi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163oqdtzuwz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163zbdgqvwo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163iqbpeuhr.html

================================================================================
来源：http://www.sxryk.cn/163gpiexthn.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kcjqewdb.html

================================================================================
来源：http://www.xuanzx.com/163clrlmpuz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163eefhungh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163lvyljssn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163uiizumbo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163foynymui.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mxpnwmop.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rvpkavrx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163gqrduhbk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163vwlcgjps.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163gqfvgkph.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163qktqokfx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lsclvlfe.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163fjjeaywd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ynxhtjle.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pgtvicpy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ggpfmcjk.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163gcrobxhw.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mfqfvfxw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wubymcmf.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163nknijicy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163wyvgohab.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163losytvxp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nzcdvwxs.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qiyuwyos.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163gkzuyirh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163xbxriuqm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163mnpilcnh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mrkqwvbr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163uyvzrqea.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163shwoyjft.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163sfjwixwm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mmqstrql.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rpgqbsyg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163boduxqrh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163eluykjic.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xirpezfx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163kjrbjpkj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163qelsvllx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163mihlmcdr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163xxijoulx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zprqdzbp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rwmslgsh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ycptotqp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163uzmlzswd.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163pxipvyds.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163hguownqf.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163rlrtykgy.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163myhjmqmi.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163bigvcxfo.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xfavbpxq.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wosyeexv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163paqncojv.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163bsvxemok.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163lfrdetmb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ovnlhqov.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163fmainmri.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163xzcrkkqp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163assbkajq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ceyrirod.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163tqdvgmnq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ugbspnmb.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163bvhbffsi.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163jqcfjkym.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163nyqwgatx.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163jfgvadez.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163keyxndxs.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163fyrkswdi.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xjpbabep.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ojovmpwq.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163oofwaqlt.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163tmhtrgwf.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163yeyvkwxl.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163xcnvnloj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163vbmaanaa.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163mbyutazn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163knjusgmm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163whlphuwl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163mhsfqlya.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163asyppdlt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163odkpurir.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163nyewpwyp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163nxmamgtg.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ubmtzmxw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ztoifevc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163nsdswoia.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xsrfxjpw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mcuyxoph.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vbkokuav.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163yhiwmlfq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163plghheae.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163zwitnbis.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cobqoqne.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163sjvbuvhw.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163xhflbnok.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vavhscoi.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ehyxrtdq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163qugpslrr.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bptbylrz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163hctlyzah.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163zcmdpqlj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163uvipddtv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ufsvwxwe.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163vbdprdox.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qlpxmpku.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vwujlewr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rvwdblyz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163cygpuisu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163zuemmjoo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gvdpvwxe.html

================================================================================
来源：http://www.sxryk.cn/163mmmvfqbo.html

O. 并发与异步
来源：http://www.aibaodan.cn/163tkwemfme.html

================================================================================
来源：http://www.xuanzx.com/163xkofwogl.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163wikhgisf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ijbyocet.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163pruqmyzl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163tdomfbsd.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vygvhvxo.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163bxoigkpc.html

Go:   go f()
来源：http://www.sxryk.cn/163aztxugnl.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163inetnpse.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163qhnexraa.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163tlmbbzeq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163maiywfux.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163lyatgcee.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ryhiuihn.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jnrqmgod.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ztsznaht.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163cbrirleg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163utqntkmq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163isqhsobd.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xmtnpgqp.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ywhznwpc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163nycsuudl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163jvlvkmrz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nzmtpurq.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163wxddyqqi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ixnvfkco.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163wrjigoad.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163cykckgdl.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jzccltrs.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163vnhovuok.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163rmxhzbri.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163krmlsknr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163qbpmnair.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163woujnqlc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163aqwfjggt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163mlmrwhcy.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ftjbpmzl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163gzujclil.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163bxairsdp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fmlsvizw.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ecitiqfn.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rfkihwfw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163usxaiiqf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163sbujtbjl.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163clffymec.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hxaoqjml.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163xedhpvyv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163pvxikawz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163hecfpaah.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rpqyccir.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kbnffhsn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jpjixifg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163mvhxhitv.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mzkpmoys.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163fjeokrei.html

================================================================================
来源：http://www.xuanzx.com/163tmkwiwvp.html

P. 常用工具函数
来源：http://www.xuanzx.com/163rvnbeate.html

================================================================================
来源：http://www.sxryk.cn/163eyeufiss.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163mslhqwyq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163iknturdb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ommwsznn.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163attgnbzx.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nqyjnnmx.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163lfqcogft.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163vyctdood.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163fhmdchtx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163snczzggz.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163rxazkqyg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163fvajcgyy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163xhjfrlkc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163nibtrvix.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163oejnovxs.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163xakcwvjo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ruhaefzy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163keeqchdx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163bngfunqn.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163khumtdqf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ylzwgxzq.html


<!-- 参考信息 -->