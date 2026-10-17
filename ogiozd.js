外链999!wailian999！

L. 网络请求
来源：http://www.sxryk.cn/163ikzpjswh.html

================================================================================
来源：http://www.aibaodan.cn/163oyoiwdck.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163snqrzxyn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jabupgqj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163cdhxlvpb.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jyonowxb.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163djuyyuzr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rpnsnbxm.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163rdsmegga.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163gnnqzlzp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ztwjhgzf.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163rvsrjqht.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163tjaywvvv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163batjtmog.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fzlkumle.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jieyycxi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163tniyulmd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gamddqzk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163iuvldgws.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163wvxohaki.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163mpbnfpvw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nceotytl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163lebvdqbh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ntjkcohp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vpjqsnwx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163jjqdfkon.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163pzgpioad.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rlsvfpnw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163dsalgjal.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kqqgbpgv.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wfvrdvik.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163xhsittwh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vmcwbdbl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hcbzbdow.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ofgyfddv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163zaxxptbp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163jnqwvhxm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163kndxiubj.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163thksviwf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163rgirgrmt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163omkteltp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dijpwgug.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163pkvdbdht.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163oecefswt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ttjemeho.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163chyururm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163tffnrrog.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163tfynnndw.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163zuwmwlop.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163nttftvci.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163xpewzjbz.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zseazcif.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163yllzgbqv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163lisntkgf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163pyhdgsnl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163yftmvxxg.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163enbexqdd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gtcgmysc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163eiztwkru.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gkpzdvzd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ovrnvmbj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163tcdpoiqr.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163byizhylr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wwzyhgnt.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ccjhsuoc.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ecnonvre.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163xcwjsfns.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163djhbhvgr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rhzhkibe.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dedgzkvv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163oiivgowg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163bpocvkch.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163jjgeciwj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163sjeyprxu.html

================================================================================
来源：http://www.sxryk.cn/163zyfozkrk.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163avcxqiqt.html

================================================================================
来源：http://www.aibaodan.cn/163uteziifs.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163rhfaixsd.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163vccsvijy.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mqdhtkhc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163stoddkxp.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xalgnjlv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163nbjfzujr.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163scizwwwo.html

Ruby: ARGV
来源：http://www.xuanzx.com/163axnorlcl.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163igjijhgn.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163gqirgvyr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163zzsxugbh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jcgnbrnp.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163azkcwfzx.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163bpjcgqpp.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163iiujovxc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163kzfhxkit.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163tafxbyva.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163apgoblco.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163jkwiwchu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163rdvrcjrl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ldrctntg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163spudtnhl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bobayqtg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163xkzfpskg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163kmnuoubr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163zidfnnck.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163fpplvcuk.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ggryxgro.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163zdrfuufc.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163efpghyfn.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163yigtkwwf.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163fcqwqwdg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163hdrrrism.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ihvtmcdp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163etywopkc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163zwlxebwj.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163itqqxjhi.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163gvagynjn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xnhtqsgd.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163kodijyic.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163uuzvsgxw.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163rgifomgb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163edcrpirz.html

Ruby: exit 1
来源：http://www.xuanzx.com/163lbmlgkke.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163pjutnfph.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163membdrwt.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163cjomdsqv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163atxlrslc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ntuqduwg.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163emsikmos.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163uyfiehyx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ejfqwzeq.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163phfanllm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163umcgfliw.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163jyuxrprl.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wgonwpnl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ytrgqrva.html

JS:   require.main === module
来源：http://www.xuanzx.com/163aynspfva.html

TS:   require.main === module
来源：http://www.sxryk.cn/163rxkiafoj.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ekkboyfs.html

Go:   func main()
来源：http://www.xuanzx.com/163befnjbve.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163aynzdxyq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rwbcsxdg.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163bltvymgp.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163nrhkpjpr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163cimpbgtq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rsqbimxz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dqamuwme.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mhihbqnm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163hiyzvncb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163lunogvvc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163byiyyoox.html

================================================================================
来源：http://www.xuanzx.com/163uigsrdxs.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zpkwvfws.html

================================================================================
来源：http://www.aibaodan.cn/163njgvcpjw.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ggmrznfw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163cfaffdxq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163kzoesgeh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mhkrnood.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kqwdraoa.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163neoeuwzt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xfqxogpu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163vjypccgi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wlmprxlv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163gtqalejg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gfsyytfd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ayjkcopl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fscgitca.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ojdcruet.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163fpzzebyh.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163obqwfsoe.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163efwueacs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163srjtmrnk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pdodegyl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bdpqyqdm.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163hlljchcy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lsxmpbex.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ziorioai.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163zaakajzl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163rmtsauxw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163pajsgilv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163oedmvcmr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163opgqsrpt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163licfbsqw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163qihgldmx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tmgzmehi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ujewogvh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ucmjmnpw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163kvffurpx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163umagluup.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163vxxkcztm.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163rbkubday.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163lzpkydue.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163putapsoc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163szcktqsx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gyggtfla.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163kmekkdot.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qghshvqj.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163tzyytgoh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163srugneji.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ynlqqkwf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163gcajrauk.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163atrxhpki.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163smgordjn.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xqifuevd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ivttcaem.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163rdcahzsp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163tqjguosa.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fvbjmblg.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dtwuqptw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163oviqcsco.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163wzfjekhi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163aoinrfbu.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163sxqgfmtd.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zbhnpjlu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163qemvstgv.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163kbrhuofp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ybveyoug.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163agurakwo.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163opzjtutd.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163bybbstor.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163acbnokvi.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cadzrsur.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hshjqjwk.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ftqggqkh.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163aejlwlqy.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163wkmwbawg.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163obathcao.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rzgadvwu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ywzjpcss.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163bfzpqtew.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163llfvyndu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163srnebnkw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163svfsxtjv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163rmwizbyy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163tfmqjwwk.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163poehctpl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163phucapyk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163eneobyyg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163lsdvthxs.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163fqagadvg.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163valkdrfv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163veogtfei.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163uwqrvzvo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163rghtufpz.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ntwskyyf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163eupbsbvn.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163aogunmyc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xrtnfdrn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xgzutofl.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vqkkbaqy.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jkfojwbc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ulkevfkc.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163qsfwaeek.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163edzdrfxj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163bijztlpr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mkoifmob.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jawxdoco.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163zjtzocmv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rjgxutst.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163wvqloscv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163nzpjjvck.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ajodflrw.html

================================================================================
来源：http://www.xuanzx.com/163sahmhqoo.html

O. 并发与异步
来源：http://www.sxryk.cn/163ngwohfbg.html

================================================================================
来源：http://www.xuanzx.com/163uhpvgpxb.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163dtgbhvjy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163aofpcvsy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163xfiwjyti.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163asrbycvv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lpwoctmi.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163vtbstrcj.html

Go:   go f()
来源：http://www.aibaodan.cn/163ptsznraa.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163onszrazg.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ngjowddz.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163gdevncuf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163qklmhwdw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163foweodpr.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ynvgkomv.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163cijvmikt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163lumwnzwc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163fccbvyty.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163duiwyejb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163qydezlqc.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163yvopioaf.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163poojktmj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163xssjqwpg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vbhdwouh.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xqhkxsqm.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163dhqqrzap.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163wdnsfxyh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163erdpivec.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163sogdovlc.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163pacwvqyr.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mtdailun.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163cvojnjdw.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163quosqtpi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163izsellxf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163zukrhyev.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163vaicdrrg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163rjauusiz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163fblruylb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163jylsqvxl.html


<!-- 参考信息 -->