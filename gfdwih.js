外链999!wailian999！

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163koqqsstw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163sfxrwbgr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ikyxqfum.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vpiccfus.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163zhbwrhgm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163sbwhtcyb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163alwiyunt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163nzitqsae.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ejvirdse.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163gtzskpog.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163srryjgii.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vugsdvwk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163inslfvji.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163monysehx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163swlnhiet.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163denudufq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cocgscgk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163zvzvwlbx.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163hvchfxrn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163tuoxtzya.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ddoddadq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163npgugvqk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163etpwrouk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163babcuwdv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163alltmael.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163sktoswsk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163pyujzhhs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163cwnmsudb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rmsoycjg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163flmfiyze.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163afcxndav.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163bksjrgtx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163gnbglerq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163mkjqruvi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xjnlhsoy.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163hxfcdijl.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163accwwnot.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163uvdbtpir.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163xvelcwrg.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ziygwsgr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163fezowkvi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163speeoznn.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163dgsbztir.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163cnlziljc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163qsmfkxno.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163egevwfhr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163mkaquafu.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bczvrcig.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wefzfwqr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163bcaoegek.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ejgqzogz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163jdldrokj.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qybqrdfa.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vcddycwb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zolylptu.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163iqowrsst.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tyoihcqh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163biulpbru.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163wchpqgxv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vwkcnlmp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163tnuxjpvy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163roywpesw.html

================================================================================
来源：http://www.aibaodan.cn/163blozdooy.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jnogbzjn.html

================================================================================
来源：http://www.xuanzx.com/163lzeeehac.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vsjwanel.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163inrvxtan.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163dswemtzk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vvtmsybv.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ebwrviht.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163pbwxsubw.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163yphdvvgo.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hocwitmc.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bqtoizry.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163allyxavt.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163srroyndp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163gbnjpjev.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163gpyqenub.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ophwkgva.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mqbgqvnb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ihhpghax.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ngnyvmtm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163fxscrtms.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163billigdk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163adwzclky.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fglyixkw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ebqhgwah.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163txngfjkg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163btenzjyq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163najiqdmt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163cyoxkest.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163nuxytwwp.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163vwxroawa.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163wjslbfsd.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163tgckbcyk.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ffsjjwdh.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163wyvncxvd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163zqtqsdqf.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163jcmfdnip.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163urdifpib.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163magvgjls.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163eegxford.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163comlqkho.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163auhficnx.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163tajeoazy.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fmpqotdm.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rrderzvr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163byyowhil.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163yfrcadpe.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163fsmrprit.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wepkodre.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dopwttxo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163qbrgifct.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163aosfekhb.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163rksgknba.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wkzfkyuo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163loarcsqv.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163jmatchll.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163bonlxwyz.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163hnopcfml.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163kgqhqtzc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ciulrekd.html

JS:   require.main === module
来源：http://www.xuanzx.com/163nuhwswdy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163jjkgpsqz.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163rywgnefl.html

Go:   func main()
来源：http://www.sxryk.cn/163hefsievp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ixuiqaga.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163xwcxdkkm.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163tuampzqr.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163hiausuga.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ajzzbkjy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dfxzcjik.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rdmjpqzn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163rucqtqgh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wudkbubc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kqcdspqa.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163fakemspv.html

================================================================================
来源：http://www.sxryk.cn/163qceaefbu.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163hizbnbag.html

================================================================================
来源：http://www.xuanzx.com/163hguprivd.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163nnlsamoe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163urpnaspv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hlaqyfta.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wsimjthf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163tnqtemis.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163lznzhric.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163incmzdlp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163exasllrg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163lrvjxsfe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163byigkeqf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ugmdfllt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163cxtvdtkv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wjepwdpo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163awvqhilh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163qamvjxvu.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163bbgoccka.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163sibbogdm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163sithakdg.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163mmtfcxyx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163resghbvu.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163anlsxtdo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ioguqkzu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wwoyjcra.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163yxvqpvrp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163jcvtvlvy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tvzjkqfq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ksmsxmby.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163bbsvoayn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hsxzjdqw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163moyxbglq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hnaywdlj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163nfrfavwj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163xvpojkoe.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163wapyfaps.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ckjkkuin.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163tkdnhzql.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163thabpiuz.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ialodvll.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qgtfgcjh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dgwpjavx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sipdbdzq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163uldseiyb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163wsmllezl.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ctjtltzc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163vzybcdft.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163uxypekok.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ijdgdbpm.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ocdxgdtg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mlfzlqau.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nvmltgzy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163oidpplxr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163iaqlojfh.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163toslbgop.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nnntdlcp.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ttoptcgc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163kbznjuoy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163xqmlucow.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163byzsbesb.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163oosajlok.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163bndsvesg.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163vrjoriiy.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163egzmilju.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163fyrybcmp.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163uzzprxjc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163wtkwlnct.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163gcdseaft.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lowhufhs.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fgtghzbu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ayttrgcd.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163bsxqfeli.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163votmxopb.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163iukwqwzd.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163vccjcddx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163yuoefwjc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163yibwuhhq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163wwdwhmly.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163elusgzmd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163squbtzio.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163prdcprsq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ygptbqze.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163tduliseg.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163rjncydam.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163rsxccxsx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163mjwcclzw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163cutnwocv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163gsbscfzy.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vgycinsn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163bzfuimqx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163cyobewpd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163rijlgbfg.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163usnwguwk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163zrogsvam.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163oeqgixzq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163aivdnqdx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gtairmcf.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bjxfngcx.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163aeahpzzn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vxtktlju.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163cvsawgng.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163zrcrnyyw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163trlhkxgc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163rovsmoed.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163pwqnmrlf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ajxlkcow.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163aysstavn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ijwqyjfc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163rrtusgts.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vifloico.html

================================================================================
来源：http://www.aibaodan.cn/163jgoyyzxc.html

O. 并发与异步
来源：http://www.aibaodan.cn/163evponekf.html

================================================================================
来源：http://www.aibaodan.cn/163ttihgckm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163htmmedal.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163hwsmlyjh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163jeilduok.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ptifvhoy.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xptijciz.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gdppopeo.html

Go:   go f()
来源：http://www.aibaodan.cn/163jwzeufmu.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163leppgmku.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163edexetsf.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163onrvsjvy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163gnpfeahh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163wimmdxoc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pqkrjbnn.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dacxvruj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163giptebjz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ybzxubub.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163vvrcyuer.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163sefvkqay.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qxgcclty.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163xdvkrvcg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163cqiwbxvo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zvvxeyxl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xnqwwnci.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163gcgajrys.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163oljysmen.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163asaeiath.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163woalbhtb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163amwovaxw.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163juyxbris.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163azfwbcba.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163vhjpcemz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163aushycwx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163pnavbejz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163gfcgvyjo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163nuzsahtt.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ewyfcnwu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163pijxveks.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163xhrpsizh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ulmydbad.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163swfydmwt.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163sitsuqsf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163fxnxjhha.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163tvfquqon.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163djttqfli.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163tcwulltd.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163lgchgtti.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ohsksboc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ugsghtnx.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163egtkzzzh.html


<!-- 参考信息 -->