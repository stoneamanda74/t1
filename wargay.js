外链999!wailian999！

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163rhwollvt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bfbkygoq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163qwyictek.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163eabpipvo.html

Py:   resp.json()
来源：http://www.xuanzx.com/163plpydgbf.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163vhtrfxxn.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163yxzukpqv.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163thuwqrcr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163njaixtnj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163lkapsxjt.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bbbbgwjh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ydimbkok.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163punqhvvt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163fixmuudx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ktzudvcz.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cpdalhir.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hayadqsw.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163zglavylm.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163pwvbxfcl.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163rbpaqwjr.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163abvkvvts.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zsgdtycl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163wduyqtur.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163fkulvmcg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nssnwbed.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kmxaledy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xnaehpse.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163pbjxvqvl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163srmfudec.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gwsjzgtv.html

================================================================================
来源：http://www.sxryk.cn/163djhfkoyw.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163umilsrzr.html

================================================================================
来源：http://www.aibaodan.cn/163adnacogj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163lcmkcuho.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pvkcmpeu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163mqvmqgsw.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lgjgkpug.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xdmixrlt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163jlkyzlnf.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cjrowqfb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163hezoiulh.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163eywxrpoe.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ndlmnenc.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163gtzdlkfj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163bivdkteg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wrisfckj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163tsrldjmp.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163xkigejde.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163swlwsqcv.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163rspphwks.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yathisqd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163kmjqhrvl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163dtujpdcx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163tsghekxv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dlibqxdo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cakodxyi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163yqmjtbxt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gwqfsokd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163rhtlbkhl.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163oipyeeyb.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163zfwzjueu.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163diwijgyb.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163dsjshlsv.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163bllscrqj.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pgjwhvsz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163fozcmamg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163uiynuuio.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mvamycxo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163lqufspog.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163siylhamq.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163jsuiezja.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163mdsokpvq.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163gytvetll.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163msqphcnj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wgatfgyg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163xjfelgxf.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163apurptsq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163wgvmmqxg.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163chkwwowf.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163wpilgxco.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163dcrzsurh.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163covoxqqv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163yurooiaj.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163zblcnmff.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ibcsicws.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ddatnrub.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pztsxqvz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163haiczxmj.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163suxbxsjd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163vitrhxty.html

JS:   require.main === module
来源：http://www.xuanzx.com/163wxoxjaid.html

TS:   require.main === module
来源：http://www.sxryk.cn/163gosqejdh.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163qjarnjvf.html

Go:   func main()
来源：http://www.sxryk.cn/163vvdupyqy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wftdadcp.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rniimvwg.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zgkzande.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163bgsswzte.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ofrpodsb.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bfvkyqdt.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jwqirbxj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163lgzlszfk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gghcqxqj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163epwhdrpb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163wixikgxm.html

================================================================================
来源：http://www.xuanzx.com/163vmgqusey.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163egqzsdtv.html

================================================================================
来源：http://www.aibaodan.cn/163rqjqtbyq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163tkzyhlvl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163blvbvxuu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qcdzdeib.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dfvuvopj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cxorvmtr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163mqgcmrbu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tpwyzrvn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163jqgfyobo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163htioukxe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163elahsihm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gjzrbijd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kwgybthf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163htmsfxfm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kxzpebwp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qtpeuydy.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ayueymjv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lxbnljhx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163kchzzpjn.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163wuvddlfz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163znvrmder.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163oqwfceey.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fbciupvn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mhrcjald.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163sboqnows.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163jtozowjc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163sbjqtppe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163wkoilegy.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qnqxqhav.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163turlulka.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163lruktkst.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163brwkwmzb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163krbcxxst.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163jrdewmrp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163qcvimjfi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ajvdtpob.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163jmoxvtst.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163gzbsjwkt.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ogueessv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163sqmjuarb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xsdseygl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163thrydmfg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163cairwutg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163hecvvfau.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163boknrmpr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163soxplrol.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163mppeagat.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ecqqzhop.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163foqpulxz.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mbphchvr.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vkfscwvw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163kxyusgig.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163mxvffuic.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ejmheqsd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gzjyraxd.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163groqsptb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163qaektrlc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163iauflgoi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163nbvxlpza.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ktlckbrq.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163dygjkzps.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ugfsjqxn.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qjtxbwth.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163wjawsjwe.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163hzkzqite.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163unrsnlww.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163gxeubkvs.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163oqcuthcb.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ysfyrxen.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163kjxzjwmq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ztlkkwej.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ywayzrwz.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rhlmjbbs.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163bqdkywhk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163gttojqbb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163bajjhlar.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vhtxslrt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163bjqviduu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163roshhrrj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163rksnvity.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ofdosefz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163numcniqh.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163zvcpmktu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ojhlsdyv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163phjusjcl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163blahsdwo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163mdeqmmzb.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163rzganhib.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163nhouqyjm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163bplukxyd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163vcrthhcx.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163kavekskr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163kyjnaleh.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163pzrjeciy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xkkwwshr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dsqymgkw.html

Java: // 手写递归
来源：http://www.xuanzx.com/163chqpeoaa.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163cbvuwcrv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163isimpizw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xubjaxpw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163tfpxijfb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lpsengwk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163poqyhgjf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cifaedgz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163naigrsuj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wjdmzdos.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163dvansqox.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163jrkrlpas.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163espgsdzg.html

================================================================================
来源：http://www.xuanzx.com/163aeciiuja.html

O. 并发与异步
来源：http://www.sxryk.cn/163yksmmzct.html

================================================================================
来源：http://www.aibaodan.cn/163iznqoqik.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xdjnphbr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163kolovmqz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163gwxerngc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163edllhebq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qzksszpn.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jbxnrful.html

Go:   go f()
来源：http://www.sxryk.cn/163pcptpvgh.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ifbenpas.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ldwzspaw.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163dryfkkuj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163drubxurx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163yikrzmyv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163iumjxadr.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pcqdvqew.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163cenfrijy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163guformuk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163rxywvteu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163datnedxa.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163usrktxee.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163axgcgwre.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163sxmknuxh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163khsqrpnv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fgoboyxs.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jflzxxtg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ouwmxwoq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163lmfkivbg.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fbnofals.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163paaowtxs.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ienewgzi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163xevofmvu.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163mgqfajkv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163lbhmoqpv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163chcbfpbq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163nshpzewu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jbqdkmjc.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163kqwlynys.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163omnwatgn.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163tvzhmrcr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tgjbqqhm.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ytxwsfob.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pvyuniog.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ryzhyqhy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hinqnknm.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163oekjtmkj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163zsftqxlj.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163mkzhnquc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163kcatsica.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163kjovpnxc.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yrjakbnq.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163eeywyqat.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163fjgcpwsk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163fdzwknsn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163lltrssng.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163rheughyf.html

================================================================================
来源：http://www.xuanzx.com/163mqokftnm.html

P. 常用工具函数
来源：http://www.xuanzx.com/163nqzabhjp.html

================================================================================
来源：http://www.aibaodan.cn/163zhrwnwvn.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163dnuwysfd.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163wqekosgh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163httajjro.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ukfsduyw.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163elttplxe.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163wwzqdefo.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163twowscbx.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rbsutueg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163zdijejyj.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163rtobtmzz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163cgxerckc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163mwylcabd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163qoeczplc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163npeojtoo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vbpcaxfp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163nuojzrlc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163wlqjlhfj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163nlpshojs.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ijzjrovl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163cfvnlvkt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163nuwwesja.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cabtetcq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qxdnpgqn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163bpiqqsqt.html


<!-- 参考信息 -->