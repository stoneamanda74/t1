外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163durlhoqi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163zbdeakgw.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163drkvwxtt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163sazaovcx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vkhkzpju.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163iudlfjkt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163abrqegcj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163onamuzrc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163jixsimhc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gqgilfro.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163urazpeye.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mtqymhgw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163etieofns.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163wjdhtizo.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rzrdcilw.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163tasxqdqg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jkngoupz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163wmzcpixp.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163dovewtyw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163agmqjlxy.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xtxkqrhe.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163jmarstss.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jmakybta.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ypsnhkad.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163shtisqls.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163nksfvegs.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163pbvgkiof.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163yufnwfzw.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163yhzzgwly.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163fmuzemsm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dprvfbhj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163cmrkmvfq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kanpyjpz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vplhyyko.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163stjjqcng.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pmpvflry.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bzcnynwd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ithclzxm.html

================================================================================
来源：http://www.xuanzx.com/163jbltdxgo.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163qqexcbpc.html

================================================================================
来源：http://www.sxryk.cn/163krgjkygh.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163julxjynd.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163qvrepfgs.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163dfxdzoix.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xrbdrxbw.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jleuyjgt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163utgzviaq.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163fakuyhdl.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163fvtrnitq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163avojemwh.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163mwrqwijo.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163fpnlwotm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163bncggnfe.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163soigwpgj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163oofxdech.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163qznvnzzf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163nbavuzhz.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163qfsdbcnv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163utqegxyn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163jwwblhjo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ynskdmug.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163nlxwbgil.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163yutaybab.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zbkyzpzy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163uascdfsu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163kwjkurpo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163noprxfna.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163eaeytmaq.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163jsiqhfkq.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163xgmclnnv.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163krwxlpki.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163zdvhclwv.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163wbkfbmnn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163wmwfuciq.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163mpmhgvap.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163cfzvvnax.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163fqycwfgk.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163fmxuqvdb.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163paafogcm.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163cjcwijxn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163sbsagiyi.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163umfifmhr.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uaxbbvuj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163meciloem.html

Ruby: exit 1
来源：http://www.sxryk.cn/163pdjjadya.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163kftsbvwp.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xmrafexc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mkdgxkpk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163zdhfhegq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zvrlcsgr.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163afvtqdzy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163izltegbz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163wcdyprlg.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163qipegute.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163hnleocys.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163nghiqdkc.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163hwxbjhnf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163snoypxjm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163maiaxuse.html

TS:   require.main === module
来源：http://www.sxryk.cn/163kbzykkdk.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163tsixcvph.html

Go:   func main()
来源：http://www.aibaodan.cn/163qgdpgblq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163inejuwgd.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xvrqiyxr.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163qpoqmakt.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163bpocptuj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163qhcduvxp.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163tfqgcbqr.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ggugclmq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163iyjrvsup.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163swgjgckm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163arbhvivc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163osylqjvl.html

================================================================================
来源：http://www.sxryk.cn/163bpehffcw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163etatwrrv.html

================================================================================
来源：http://www.xuanzx.com/163apcduarg.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163jcgtctka.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163stnmsxgn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163mkgipvwt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vpulrmkq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fptfwhlr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163pnlynehl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163wdaxwjox.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163lancctpz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qvblaaeh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163fuyjbxrf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wojqblax.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163fxblrdjj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163onugcujj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163aziwrflj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163nbjsvggs.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163qxwaqpxq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xfiaewly.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163urgiayjs.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zytrwhwo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hqhvjqsb.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xtdkmznp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jcgdwfos.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gbckbqer.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lzukrlwj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163mwvdrtjt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163thkkzerb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163wojmzrdr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163liepgqgl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ijijjgzi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163vyuevjea.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qfjcakby.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163donclqyn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mjdtcjmw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jcybafiu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wiekwmhn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163kcttojie.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ogbkmrbc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163otznkcdt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163kxsloniq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163isdqeodl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hezddtxo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163qqswajak.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ghjkluam.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163lehbvzot.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163brldoaok.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rnzrwcxn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ehvdlaiz.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163adzvasqm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163bgtcivxj.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fyfqagjy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163mbsuevfo.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163vaidlsin.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163keulwaiw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163orhzjqvd.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xsvsgiid.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163gprmkpac.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ihmwewzx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163pesdlimd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fnpfubzh.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163eimaayks.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ltadnprp.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163nouoqttv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fxbdodll.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163npmcbfdb.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qgpgfuoh.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163lrunjxva.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bwrpkxjb.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qwvfxixn.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163okggvnvx.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ohunbzfz.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163qaocwmnq.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163adbmnftw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ediuyrbc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163xmfrvvuf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163xzkudenu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163eubwjjln.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163zdeskwqw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163aqscyznn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163wsdttvcd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163adkukeku.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163onrzeznf.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163xqtockne.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163gtfsozep.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163zzptslls.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163yxczthjn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163eeuadxcg.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163izizxypi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163grmcdgsy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zpyixjsz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163speqjalu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163mzwxkqot.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163fojomiaq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163zwlxfoll.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jewexvgn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jyieaxid.html

Java: // 手写递归
来源：http://www.xuanzx.com/163abchjgli.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163kztjnnxr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ywtspseo.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163tdzjeiws.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qojqhxnw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163osuvggwo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ipwprlhi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qxbwgafp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gslzcobg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zjrvnbtu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163epqplvwl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tnlykmqe.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163svcowbaj.html

================================================================================
来源：http://www.xuanzx.com/163fiytmody.html

O. 并发与异步
来源：http://www.xuanzx.com/163pzhyzean.html

================================================================================
来源：http://www.xuanzx.com/163cgzzbhcc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vxjfadxb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163dlncmbjx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163noseccim.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163xqmsvaud.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kovvuvpq.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ljmctriw.html

Go:   go f()
来源：http://www.sxryk.cn/163lqafmxsa.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163gpyvudyl.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ojjnikfp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163iexzetml.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163dstzzwza.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163kaelbjzd.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163huwhnfeq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qesmwooe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163pulgxtri.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163nubbftgj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163whyyiryb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163rxekeout.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163koqniikh.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163thkicnlm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163gevcthmd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163nvmnfxgm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cbuvjjss.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hyigeowp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mhyflgpu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ebooyate.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163yrqwrjoh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163zyurzvno.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163qbcffbef.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163hxqvkyon.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ybelxzjm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163jcwofpnu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163cfyrtipo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163vxrtptqj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163dmeishhh.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ltjqvydq.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163tzdipgqv.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163qrqugmvz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163lkccmkla.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ucfgmiah.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163bkffxgcr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vuazlaaa.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163lpuoukex.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qsumhqyl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163yncfabsz.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163hloamguy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163jtkfdcff.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ssxjruej.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163khclsden.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lhkbbrdt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163plivwcgk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163zbpmtlse.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163hbpvjwjr.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163iqtusmtr.html

================================================================================
来源：http://www.xuanzx.com/163cojiwbnl.html

P. 常用工具函数
来源：http://www.xuanzx.com/163jurxnquv.html

================================================================================
来源：http://www.aibaodan.cn/163zmrazhxz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bjgdomgl.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163lpaknelh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163yuimfsnj.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ztiudpxg.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163iouvvaau.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163wcgirkhr.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ucpiocif.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ezaikqnw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ehdcwinf.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ucslsxvn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163jyqgnpui.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163adjojjbk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163tbfylrbl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163unuaidsl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ihlvhsdx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ujdaklvd.html


<!-- 参考信息 -->