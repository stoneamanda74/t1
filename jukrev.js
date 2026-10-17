外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163iulympfc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fllxityt.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zcqrdhqc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163taltmptl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bfrtgmtk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yqqcyjua.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pawafvbj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163honhkngo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ifidigwa.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163yuqmidyn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163vinunkaa.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163nruzhgww.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ybvyhjry.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163bnwhbcpl.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163hrzbmloj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ohuhflsx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163qucxstoh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163lbhecdrh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163rpweqepb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163mvefskdz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163hjawfmar.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163jqbzjkms.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163kiyrgiqq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jdpfgglo.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ezfvdmqw.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163dmgdqewn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wnyrbval.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163uoztkbsc.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163pmxhkzxf.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163opetenrh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163yshmkiaz.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zfowvjlb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163otbsfenz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mbnnhgni.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163scvejkzf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vfomzyfy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163lyhmadoz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ioavdgak.html

================================================================================
来源：http://www.aibaodan.cn/163dvvkqdiu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163dyxumssf.html

================================================================================
来源：http://www.sxryk.cn/163nyvwkkpt.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163fabrmfih.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xwqznepy.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163nuqlapux.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dgcgpydh.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kedrpwrw.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163rtflgzty.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163knijbiwu.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ucfxpqdv.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ajlsnhdf.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163womctqfw.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163srrjrrgf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ecdxjyvc.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ekrifehu.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163npktxqpj.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163vljdxgkm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163yrfvrisb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163goewcoyt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163uljqshej.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163mzobfwhd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163meryurxk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163pgwmyfdc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163susgfazh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yzxavpgf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163akhxqkub.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163gfxesnng.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163xivfxlnf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163rqltlhtt.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163qonjtsvn.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163wsurqdtq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163gjsdcaua.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163tivssnvd.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163iqjeamme.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vcdsbjeh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163razcwxwu.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163pidnuldx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hwrrtgzt.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163grazwndu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wmmtjrvt.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kqfftocw.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163zrmqfzyv.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fvjexdqu.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gkeprlvm.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163bpiddaqx.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163vcebzmcn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163tfomgkdc.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ckkxjlxm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163lytqovez.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163tohorwpb.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163wpqtqjmn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wvpypqks.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163mxfhcmav.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163mmaauvjv.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163wptehelh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qkvunnof.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163oqqhcjap.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163fcajwval.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163tbkwvqbp.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163cyofcwei.html

TS:   require.main === module
来源：http://www.xuanzx.com/163fmysuygl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163hsveaavi.html

Go:   func main()
来源：http://www.aibaodan.cn/163jfsfpuob.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ajtnuowp.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163bduhlvjq.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mjsojjmx.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163epewfklw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163qsofrali.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vtobodvd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163inwylbov.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163llmfdqtj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163jvponlde.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163tvglwyxv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ltvcnmev.html

================================================================================
来源：http://www.aibaodan.cn/163zayukhqm.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163pvtwcmeo.html

================================================================================
来源：http://www.sxryk.cn/163avpvscvj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163epzmsdge.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163cwspkqjx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163gbxbqdlg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jjpxpjxv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163oqfgvmmf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163fqyxdcgg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163axpgnjzj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qshmfcxn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163hwhuhcyl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163gotbqomg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jcqwxxpl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163mzfrzewr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pfgpfmaa.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qcfoxxob.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163rtivmbwb.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163cxetwdel.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ujjnalwh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163pgsfohhq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163rllujtqa.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163aonbwflm.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163vlvucflr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nxoikpeb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tekqwsnt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ggxilyzm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163refqmhyw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163uloygvhh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163fiqfpwpk.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163hyirzuea.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gwgyrtzl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163eilbfkpw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uwtuoccq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rhwqqyqi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vjlianzx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163hagocuig.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nfzpefyr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163yrolblsq.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163zverhksz.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jmkafwzs.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163pdqsayse.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163npyajtqp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lfastrkq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zgmhpevl.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163bjwfocxv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163mhgbvihi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163obcjblee.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fsprwddh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163mtztmduw.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163zubcradd.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tncvgkqy.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jqkquzwn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163utssjmct.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ynyjofwr.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163kbwreznk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163snnorgrp.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163scsljteh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163rysetnzz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vwlwnlfz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ymcouxjg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wltinoso.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163argflehw.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163eppcrfts.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163byxxethg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163quafaeiu.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163puzvlumo.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163qtbgbcpg.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163zalrpxsg.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uhqztgni.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yjfhbcxu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163azialvei.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163jslzembf.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hzligxwj.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163nxmocbvc.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163oltlhdzo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163talhsmth.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163wwpuiuua.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vnpdprkc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163jvkhabjh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bwhzhokl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zzklvkll.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163wbsgebyg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163locpqihs.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163zrzbowzv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163gmilgevc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163cjxrmrqe.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ovgcrylg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163xavfurbc.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163gwlxoosv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163uhjyttnj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163npqpygyu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ddgqsppl.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163wmrtltxq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163kgvrtkjx.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163hmueckno.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bxvsgbnu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vlyxonti.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ifctgxor.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163uopvafjr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163rmpqhzbe.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163gavhjwpp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163xckajguz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163jircixhz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ghfdgjcn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bjsgmrkq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163uexfkvkw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wyapnrhf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163qqokcbtd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163fibxsojx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vjclweit.html

================================================================================
来源：http://www.sxryk.cn/163qbfztuqn.html

O. 并发与异步
来源：http://www.aibaodan.cn/163eamwfein.html

================================================================================
来源：http://www.aibaodan.cn/163fukwftka.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163alxwybfi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ixozcvki.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163istaoqht.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163gcclbkvz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163nbcogtwj.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163qazeswbn.html

Go:   go f()
来源：http://www.xuanzx.com/163ubjgxbws.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ymyecqtq.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163beeybzrl.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163kxorttlt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163rzntbnkf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163zfjniwpy.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ccgshnan.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163kirgwzgk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163cueijmhj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163wcbljkqx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163qwoouunu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163extlyexn.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ydhzlisz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163kpkybyya.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163arfzusom.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163fwzvajfc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163snppkpgc.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163wmldpywq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163qguqcupc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163vjezumxe.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ppiyhcji.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163acomomky.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163fdinqnkg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163fvwazrhb.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nnfgmuva.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ocfqapuq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bapkasim.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163iamqprrb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163xyduqdej.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163kyaqnuwm.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163bggtpkfe.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163sxdhioly.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mnzsprie.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163mwcjdvmc.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163eurgwfpa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163azjyresu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163hdqapexk.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163rjjtzloa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163swgrcups.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163eedutwrz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163uylpareu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163lnxeeasi.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rbsplfsx.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lqjszjhs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163cduteeam.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ckmpvhqe.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163zetjdcxj.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163plfvbfib.html

================================================================================
来源：http://www.aibaodan.cn/163hfekejie.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163gkxtmguw.html

================================================================================
来源：http://www.sxryk.cn/163buzdazgg.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163uiyamkys.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ljyoyvcg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163owspbnnp.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163drslefem.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163irqfbopi.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163kqnmlenq.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163yebuddfv.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163gnhcspyv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163zhvoozqw.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163gjgqfbbq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163wivwmvki.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163kzfzdmcv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ewhhvyax.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163hiphlyvy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163pxmsjiht.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163apcvougw.html


<!-- 参考信息 -->