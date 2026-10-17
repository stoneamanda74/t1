外链999!wailian999！

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163roybzbij.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qruhibtp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163iucpotrg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163uypwjwgf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163cupugkyi.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wrlgdwcz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kenyllub.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ojcjulmj.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ggadvucj.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xpzyefbl.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163cztgnpue.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zhlauyum.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ltlsojos.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163smdbfkeu.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163egwzvwqh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163hheldxzt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163tquyxymd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ssjriyax.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rlnugvtz.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gatlaamk.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ytobzgcn.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ejvxzyzn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163rsosuqrt.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163qrnosrea.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163mjyqlhzb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xvlxlkap.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dnbkxgla.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163yiccdqye.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fcjsltbi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ohnagkys.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ochtynqx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163itxabvwj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163dtxirfrp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rjyqhcxv.html

================================================================================
来源：http://www.xuanzx.com/163irtubynn.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163tdrduiso.html

================================================================================
来源：http://www.xuanzx.com/163vmavnpyd.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163lthunixs.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163munkuhzv.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163cpwiotlt.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mfvsncwd.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ymugdbme.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163tbtnktks.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ypgzhujn.html

Ruby: ARGV
来源：http://www.sxryk.cn/163rwwcfzmq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163akpwzzjv.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163pvmbdlfh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163yoeoggam.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163nffjlmfs.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vnliyhho.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rpvoadtb.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163oacamoed.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jyjlgcxv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163oayaaask.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163hrndpzyf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163uwvkfvgf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jncwslin.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163zarxdowd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163whanvkbt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gnklqkpt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ojynamua.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163fwsdblpb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163aojgnmuf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wwjqgtug.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163pwhapvhc.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163dxapfdxc.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163nrttdxkd.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163krpuxylz.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163szwtvihg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163jufwgacp.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fdlekahr.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163odmiouaf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163iywqqrha.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163gqurzfin.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163hiabkloi.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163rpieqkbg.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163srybjczh.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163gjwxmxta.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zvfzokpm.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jvxyctcg.html

Ruby: exit 1
来源：http://www.sxryk.cn/163qafqgzmd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163hvpiqnhh.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163dhlovixs.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163yuumsmgn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163cjvorwfi.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163lqojuwvm.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163cqffynnq.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cmjkxovg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163tljcmluf.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163pujdhfkv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163csdarcrh.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ubpdhuqb.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163bgazystt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163rulpeaxk.html

JS:   require.main === module
来源：http://www.xuanzx.com/163payvkneq.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ixdyqbmo.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gycryddf.html

Go:   func main()
来源：http://www.xuanzx.com/163xaajzrka.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xhcppnbk.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vepfpkaf.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163tdntumxh.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qdhguqqz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gnlnzhru.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163euyndixo.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ilviuwgc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163hhfejygr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163udxuhcrr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163orupjyln.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163rrmgzrlw.html

================================================================================
来源：http://www.xuanzx.com/163pfwqqksz.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vwrqdpyf.html

================================================================================
来源：http://www.aibaodan.cn/163kedfyktu.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163xtvlvyii.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xhmjfssu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163cauhkzea.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vccmayqx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jstyoweo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163bazjvltz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ebwomvdu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163uualsygw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jnznzznp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163qzribyqt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vfeojbde.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163dmzzwvhs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gtylwxud.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xgpiofrh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163dcrabhox.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163bnhrgblg.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zxcbrfnx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163wwwrytdf.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pfdlgvmo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163laxhximi.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163buayxeuu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163loaypfpp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163numlwdcc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163hxilmlfo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163blddxswp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163pgzzqyge.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163yhykjilm.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lrrajapj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jnhbatwx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163vtynpxwn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163cgjlpabi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ekpsepsi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163dboiotey.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163htcojtpy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wcwzvfpm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163yaghrrtr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qoqfowyx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163kvducstp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163pmwfdpvf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163oktsrygs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163oazzwsfa.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163kmayvnwb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ywjioaqk.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163iyllfuft.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163clayobkf.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ighlydno.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163whwenkic.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163xdqfrudp.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163sdnlqgbd.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lqosyrvb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163sjbkpfgk.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ionvezcj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ooclngzc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qrkdhfcl.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163gwxcdupb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163kzzsrbth.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163jrxljuca.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163dfrtawgr.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ebtwphvz.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163fipybelk.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163tudymnxc.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163cujidzga.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163vdipzrqq.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163hvzzeghk.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163zfjlgmid.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163tpwpitsh.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zxorzxao.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163evvxbrpe.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163kvnpcfbt.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bevqpjic.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163rsrjozde.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bhiamgtw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163pjjkseoi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163fhmvxxvi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163utqgtghv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163itoyrfnp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163naguteau.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163afoxygrd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ztypqbmo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163aobvrfiq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163dpqyrsxi.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mdbtlies.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163tkkeplxl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163lfwsjtjh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vmopuczt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163rapxaolx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163yrujdfkk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163tfihdzec.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163sinrvukd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163axbwnjdn.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163hafphfza.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163rtyorjaz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vficrrmj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163melwqvfe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lvcgknfh.html

Java: // 手写递归
来源：http://www.xuanzx.com/163gcjlrrho.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163itdqnmle.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163rgejqbmr.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163lrjoogpf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163sicqkdin.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zrmoloai.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163zswaorum.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ylcntcrj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163znueatvt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xpitfafo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163cqgxtxia.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163zzcbirqd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xaffvesl.html

================================================================================
来源：http://www.xuanzx.com/163cusbkifj.html

O. 并发与异步
来源：http://www.xuanzx.com/163lwhvoqxr.html

================================================================================
来源：http://www.sxryk.cn/163uvuppbvc.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163vfvcqzjh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163eskjhbqy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163lhqhwmux.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ygseqmgt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163sojfauwn.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163hwunwvza.html

Go:   go f()
来源：http://www.xuanzx.com/163tysipyye.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163qskqetyq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163efonltpx.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163fwhjpeck.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163warunxqv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163qizntrlz.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bumemzrq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vvltiqhe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163hkcfcdbr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163gqpmnokp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163thzenfmk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ozkbebvb.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163pwweunos.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163hechatne.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163gmsvhwsm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163bfitehhe.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jbvyhzea.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163vfkwysof.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163rflypdjw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163offhixce.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163woobfvkj.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163avbekqzg.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ybmvosoq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163tzwanywo.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163jjnncqch.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163fegeeuxj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163poxxyain.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163bblxgazi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163vjwlipcp.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163gmjxonfk.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163bgfqdggw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163jsetdsex.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163snrgpafm.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163yjuffwxf.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fgfprtgn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163diwszloy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ghfntewu.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163pysoknft.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163oewlbfvq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163vhyrtcge.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163tfsgdmve.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163kwdiuuix.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163mihzwmri.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mzygtqsf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163fweyyamh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163euebvrkb.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163cokwewoj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163nqqxjyms.html

================================================================================
来源：http://www.xuanzx.com/163casrgwqu.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163abygfwmo.html

================================================================================
来源：http://www.aibaodan.cn/163gndgbpfw.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163fdhawcbc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163pvwcesqi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163vnvidnqy.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163znthphjk.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tvslnnoc.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163iczpexul.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163nmvgomuj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163bymteezk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163rjkpmqln.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163pglfhfon.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163dwypdaee.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163xyjbnayx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163lsvathet.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ymcropkh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163oekeocxl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163kwtmxthn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163vwhemctu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163cckrhvat.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163uadwbitv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163cdukbujf.html


<!-- 参考信息 -->