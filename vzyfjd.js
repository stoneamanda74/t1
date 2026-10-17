外链999!wailian999！

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163tyommmys.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163trnldnag.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163keykkydh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163vndubdbn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163iojnarxz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163rnktpwhe.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163pwoposib.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163awynlzrp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jbkivmxz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163gkbdqmgw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163thwwsipz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ztgrezdk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ydynltmg.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163avkqvnrk.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163mjfvabyt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ygqzzpir.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163umvmjuxt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ecnbxbjf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wdnqpixn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163tnxmbqmj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163gdafnahw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163quwhtezo.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163lolwbkua.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ysbuapsa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vdtiqfrj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kdpmwhct.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wjceotcn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ojurgjjh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ibzlhkac.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163jconxxke.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163mgkwdcec.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163khpoktgq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ucwrcsph.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163cepcgvyv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163cemigwbj.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163iqiolfdh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163nygogabl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163znlxhlmi.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163lzwmfnbm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163wpywwoab.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mgsbptrp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163gswveamf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163aqvkkrpd.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163upnrxzom.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dqndsdap.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163dbkmqbdt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163zsaibnnx.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wckblqvm.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163qvfkukuk.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163zgwybvqb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163mbfwgjbd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163znywkoly.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163eiyyvdao.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yotwcnur.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ejbimpqp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163abwszcpk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163mgklhtsf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dfwhpmnd.html

================================================================================
来源：http://www.sxryk.cn/163ocuzuifk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163kbbkwaus.html

================================================================================
来源：http://www.aibaodan.cn/163laydkuvd.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163yeiilpvo.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163lsnoxqoz.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163qoglmjxv.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163irpscegv.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163stgxwnod.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163floqzxvh.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pbeqjqqe.html

Ruby: ARGV
来源：http://www.sxryk.cn/163emxmyxzw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163gdydxnfi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163mztjirfr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163nfouybtk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jrxtzyll.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163yzvvjfde.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ejpiazej.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ytbvmnfc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163nanujqjz.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ptfihxwt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163vdsjoazv.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163clwwgtgy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163wdolxxyy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ynwkdjkc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xfkmotrw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qznyalcw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163msnpqzda.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gyzxelcd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163aqjfqeik.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163tbzzqnyn.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163mzpgltzv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163urqjndug.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163tfikgysu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163lqbkkpuz.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ekpidqhc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163gjdtlaxj.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163vcwiafzc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163eolaxxvh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163zuminioc.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163iexlbqah.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163fkaicduh.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163hmzfnmzk.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163skwdluco.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163abqttajs.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163kezcrnst.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ignmlrgj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163niyjbohd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163obgpippz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163exjvxtfl.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163cuudsjwv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163laqlthyp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163phtyttaj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zgcnbmyf.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163jxgaowoj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163smgbwovz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ijawumbp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ovnvtrak.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163juypypzc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hwpykkkg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163bjrgyclz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zretldae.html

TS:   require.main === module
来源：http://www.xuanzx.com/163nqmeuzgw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163frnctoqo.html

Go:   func main()
来源：http://www.xuanzx.com/163jamiwdfu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163tnwbyfke.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163wznlotbq.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163kegcjgen.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163juilsxii.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ivpudfov.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163idybewtm.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tfhzdjcc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qlkqmutl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163piteqyik.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163lxcnlrac.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163qelnwnad.html

================================================================================
来源：http://www.xuanzx.com/163gshtrxqm.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163pcdlttlo.html

================================================================================
来源：http://www.aibaodan.cn/163uldikcen.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163fvccnnoj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163arfvxdpj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163lqscevvn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163tpngioiz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xuuiasjj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rduafxgc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xvewkwei.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qnofotdp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163vdfguqlm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163rvdpbmrm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zyvmlshl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163nojoeipj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ponwvyqd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lcfaxtka.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163nmubqhlk.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163wwnnyryb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vdbqvivm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163levhgivl.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zrcmrmtc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163osnapzyx.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163npfpmehy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tdozanav.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ajwkkewt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163lptxmywf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163pqosdfhj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163wpoqkkzy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163axptyrln.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163dbmzdfdb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pixexlvd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163dciitweb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wplohqwq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cttlnaeh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jnubatgz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zrvwoafb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163npitmbsq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163nkxxrubt.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163mmbvhtnp.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163bsaarntv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163otjjcvqy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ywgppiuz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ripunmcr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163lytvoyzb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163exoideed.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163lmvpkqvn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163rskcrtwq.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163asokjbgx.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163iwnsforh.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163zsmmishd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ujhglfky.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zjkzmsfa.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163dwaeprcj.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163nrdcqzvd.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163wasgxmzx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vfkkcqux.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zbkzgppo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vjkygepn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163pkfshbpu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163gxscleut.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163exkqsyvy.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163xoianqpz.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163mhrllhhk.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163stemmupt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163sozgdsrn.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rtrpmlvs.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163donbsutx.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163qszqgxik.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163iouhfhnp.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vqzqkeeg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163dxrdhosx.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163qbqsqwep.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163cchgjkxk.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163irzeebjn.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163umjqvvvw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ysnbzkjr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163yevlzxgk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ywfwriqk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163srtxlkiz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163qlgfszgn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163vydpuhaz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163whyjanvt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163drfgoehx.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163qbnseepf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163hdkomejz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163eoncujdk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163qpopchfy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163eysflgwg.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163yrgyjqow.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ethgeqpo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163hxqspioy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ykwsukwp.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bshcitxj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ecanooan.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163qiamypzc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kzqxlrgz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163inigpmmp.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163snotknvm.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qgzenstg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163cevhrgcm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163yacnfkoy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ehcygofr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163yckzeigd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163gxxkuhhr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wmulvgoh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163kqyhilwz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wlvuvrhc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163cqxhsemd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163rzbxeqvq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163zdhfeexs.html

================================================================================
来源：http://www.xuanzx.com/163pfzpxwsi.html

O. 并发与异步
来源：http://www.sxryk.cn/163ccqkheep.html

================================================================================
来源：http://www.aibaodan.cn/163luuwgffl.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163huaqwpxa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163wgamynta.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163jvjftrnr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tqlqiizd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163euiefnpf.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ftlgafew.html

Go:   go f()
来源：http://www.aibaodan.cn/163xyhfqoak.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163okbelbkf.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163vrggctnr.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mahibixo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rzbdvfbl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163fifwdafo.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nkiozbzi.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fqilfpap.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163zctqxels.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163eefxrcjm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163kwntfyrr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qmxnifmw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163pyqnmnkl.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163bqynruuk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163zlarwqiu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163egdjeuhl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jxgzojjl.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163zznxtjab.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163akfijlrm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163gdbieuox.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163sakjogsx.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163glseplyz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163qiyyjrzw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163kuejdgbr.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163kmvuojrq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163nmwljinu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ajpxpsut.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163tgiaefyf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163xjuzarin.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163xgftqzrj.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163thxmxgxh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qpolnepz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163zmvnhzzs.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zzireuxt.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163milqhmoz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163mjzjvgkh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ammlfyph.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163vwwytjfl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163khpgftpu.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163chzooibu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163wotlxrhk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163pcaoucmv.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163eleurlmr.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mynxlayf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vrbrnefg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163vbxybkjf.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163lopvxaso.html


<!-- 参考信息 -->