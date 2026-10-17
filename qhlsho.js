外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ispgchmx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ecflqdyf.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ddgpeuxt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163utpnbnqa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xwpsjkjn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gxwoytmg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ivloeksi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ecrjszkd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ktfftxqp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bjopzdrc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163yutqiupl.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163pnjaocvt.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wltzwbzg.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163alhawqxl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163wphdvjcl.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gtmqjmpm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163pmnjeetv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163wprgkhte.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163jennwtbr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163gurkleyt.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163rewiasre.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163qumypinl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163avuntell.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163odvqewvm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ebvdgjdn.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163vwqriiml.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163xuktfspt.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163kryeyxac.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163kdhtbhvc.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163wvhqxffp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kugvcvzk.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163caqpeaur.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vqrbnzyf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163judiloev.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qmxondpu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dbthxgyk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163fjjypqvu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163fkqyvmez.html

================================================================================
来源：http://www.xuanzx.com/163stisvybh.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163tjqdboks.html

================================================================================
来源：http://www.xuanzx.com/163pamuhals.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163bctjbnoe.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163faqmqcat.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163injugdml.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xtjdpuep.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pagzavcg.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kjxbjkrh.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163wkfllixv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163biarycui.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163kklsertu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cqqtbcwt.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163wxkctogk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163lliblyak.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ijnbevin.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163zhubgchw.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163bacnsmbk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163urwqnwhv.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163catdajas.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163brchsrah.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ljsdkrrc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163idqdbzvv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163jsxnwblo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tbrvmomj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jwzxtofq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163skvhmehg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163katdwdgi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163hxfctffa.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163vwuwjkzd.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163gnsldzmo.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163figdovji.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163picnswdh.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163dlpevlrq.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163cayotgkh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pjaxdqee.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163jbyeeghj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163cwefoxhj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wokvueuj.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ykogjgco.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ruqchrwe.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163rzfnqdvi.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163idbevmmt.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163amhdyzge.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163hfpbcqkq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163xftpkplt.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ysdlkpam.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163tpfdypee.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163haxdrvmr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163brxulgzm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163priplwbx.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163azcjiyij.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tdsdcheg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163wtoqhxqe.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163kquvzxyv.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163yaubjobd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163sabueorn.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163mgopclbj.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163pdptklqr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163yumcnytw.html

JS:   require.main === module
来源：http://www.xuanzx.com/163dmrfwxtz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163wcoqdlcg.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fawabsvl.html

Go:   func main()
来源：http://www.aibaodan.cn/163gxiwucns.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wlldgzwy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163noidgjfd.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163hmkbidky.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163xnvtmfqj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163cfyznmtw.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ibqnnhnv.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cpmrezdu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163dhyppzjj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ctnhbqjm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163vwmqluvx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163gsshficq.html

================================================================================
来源：http://www.xuanzx.com/163zohorzzf.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163wbsdspha.html

================================================================================
来源：http://www.sxryk.cn/163kovlscwq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163nblfwkox.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163aaexmtjf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163uzulibkk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nbuazvey.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wbveanuh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163xfwtlwls.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hchabmdx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mwkmnfsv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163cncomosy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163dsjgrbem.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163srliprtz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163xduxfmzb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xwccwwev.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mmpauucr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wtcueeql.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163puixyimp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hsdpgkoz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163qhxkzbxd.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163veuagliz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163buygmafb.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163cufjgktc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wcjrrgct.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bwdaqllg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163mgfzviul.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ygrnpcgw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163nhmeeodq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163zfqursig.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163cgxyxmxf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163cxdvqqfw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163awjvuril.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163apnvxkcj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tjohfuju.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ujlwgbwn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163cbpzatfu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kxbfbslq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163sawjsncr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163psogzdrr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163oxqldyxr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163vwpzmcnk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jzypxtge.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mmazlylk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163axwaogxb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163tpgxajdh.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163oydmpdfa.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ddqymuuv.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163awkazckv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163gzilnidy.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163dctjwbpx.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163swmivjiw.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zqyodcun.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163tvvgpvto.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163jfysvawj.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163qkirjdpu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dcaaccyj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163itoudqdi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163yimhmjzd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ukixqqge.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163dlksehpf.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163sfwrksrr.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ycpvqwyb.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163vxrvtkrv.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163zuwkfosi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163xlrsprxy.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163wzxwjgky.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163hdacmhyy.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163fjtrfvgr.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tabutjux.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qpdodwqc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163dxxtorps.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163cqhzaxgc.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ywgtadzf.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163nduzmerw.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163exscugrm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163hquyguty.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163jhbtbfkp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163abubjboj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163gbmfvoaw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163njhkrxbp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163bujjxnwh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163wecsahnf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163abwnelqu.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163vgrsocek.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163kgpawkye.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163sltzqbxx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163kmkcnexm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ewnciota.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ankwzyqn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163mxcocibx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163tmkdvbrv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163gcknysgj.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163vevpfrzx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ezgxfjsb.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ulsneaul.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ncnjtihp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bysyhbgm.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bxdkprwd.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163iqaukylo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jnlmmvvs.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163mdjfkutk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163pziyviry.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163hixedoxc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ileahkim.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163barscuyy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tkvnsoyb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ibubbdoi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163pzjjpqav.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163afeafkjm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ghiuiqbn.html

================================================================================
来源：http://www.sxryk.cn/163wzkigxvp.html

O. 并发与异步
来源：http://www.sxryk.cn/163tmmtfsny.html

================================================================================
来源：http://www.aibaodan.cn/163vmkvpxuk.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163cuvoohdg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163nkwuxzqh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ccldhstd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163esgeutys.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nopzovmx.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163pyzzauwl.html

Go:   go f()
来源：http://www.aibaodan.cn/163prgishlh.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163cdchmuso.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163splwkzji.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163vkpghkex.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163edaduevm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163uuzdnfhu.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163huundutd.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163eyzqyjac.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163vkquauyi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163gknfwpec.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163urfkojih.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ivknbmnq.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163oyoyqfnm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163sifwdpoz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163aqdsgkxm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163yrfnudly.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nkplgbxm.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163nuvmblrg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ggekmcww.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163cbhilicj.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163gyzeoged.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163lsipncxv.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163dxaqrpsr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ynhoipgr.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163shggdihs.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163klwlezwr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163oejjrsxv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163oblccols.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ocpzekxb.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163iaqzrowo.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ntdpcnxh.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ullcnfok.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163kfhixxin.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163stcyqxzm.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163klogmmhw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163lfcupuaf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163eyggwtky.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163roqxdmtf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163wvrlxbia.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163qbillygo.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qzwmgabi.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163nrikowwt.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163escbrvod.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lzcgnptc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163jbipvait.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163upoutlca.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163tuxnktna.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ziwgicxc.html

================================================================================
来源：http://www.xuanzx.com/163bawqgzck.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163tmaqjafb.html

================================================================================
来源：http://www.aibaodan.cn/163vqayhykr.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163qvmbrzzy.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163tfzjqyzw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163zwchyrvu.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163yqhxzpsr.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dckkonwi.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163nuqlynpn.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163jxaavkgi.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163lglndjee.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zvvvjabd.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163pmokzocl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kzbfzhyr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163uvrmbonw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163yquqojkr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163pqudvbkx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lylbvjta.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ibsizsyo.html


<!-- 参考信息 -->