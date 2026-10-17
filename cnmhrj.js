外链999!wailian999！

Go:   encoding/gob
来源：http://www.sxryk.cn/163xqmsdlyi.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163dqvqpzkr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hnbxmcwj.html

================================================================================
来源：http://www.aibaodan.cn/163jlcumnwl.html

L. 网络请求
来源：http://www.aibaodan.cn/163fbpmytuf.html

================================================================================
来源：http://www.aibaodan.cn/163focqiffv.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163odqlgiek.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dqdzfosx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163nvemtbiu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163wgmptejd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ddhywwfv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lbhtksrr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163izeirkzf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163keebrqqo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mywefvcr.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163tademkid.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163aplvnosp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163zziytflj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kbzimfzp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163inesjpwq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163woskmepd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163woybdqsn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ngueokrb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163iofmjeas.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163vsgfglev.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ehhyuglx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163rfheibfv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163wwmosbxj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163copiutoj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yhsfuqma.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163uxlvcbcr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163zjtbvlfn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163zpnxmjwa.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163tudzaqjc.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wkdycsvz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163adqwclju.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hjqfbqny.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fwaobimc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163utjkteef.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163yoqwkcnz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163xiounoqo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163juedukjk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ghbkkswr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163etpsgzrf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dskuaaay.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jyedbuiy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ryyytafv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ctfsibtv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163gtiavuyl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163zyzbmhnh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163dvidpovs.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163fewratmu.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xrfhsjmw.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hchkoacr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163azjiudfn.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163lmrrtrxs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163glaetbuf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163drlhkqxo.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vwooofop.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163qucgquzm.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163llhbzowx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163hijjaibt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ebnhhzbi.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nzvymxco.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fmhkrhsm.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qlprbnzr.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163pyujqwac.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ljjdlwub.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wijoxodp.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wuiarnru.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163pqzlgymx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163rtzvyfuv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vwffrzcy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cxrmscvc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163wdwbuvhz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163nnfbshyv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163akpyhhat.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vvwhnqlz.html

================================================================================
来源：http://www.xuanzx.com/163tjpwrvrs.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163lybyplrk.html

================================================================================
来源：http://www.sxryk.cn/163pfnrvrne.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163zunfjalu.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163zappazeg.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kwfisjpk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hizbayts.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tdbjundp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163vxmdnvoi.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163dbgkqekp.html

Ruby: ARGV
来源：http://www.xuanzx.com/163haepuyil.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163eyayvlrb.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163wlwgbiks.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163nkbkzvuk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ltefttgd.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ffyuhmml.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163uqovlseo.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163qesgqfzr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nkjhvnab.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163tqhuadwa.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163bwbrcmce.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ezqlyljs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163cawdixyb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163gdozhpsb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qbrtbmtv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xhtggszm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163xitkqfpe.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163djhdbmme.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163wpsvlsal.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163tfqkxhmy.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163dnbzaexr.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163bwhvtvjr.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163hoqrbsev.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ucxhysjw.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163vgrsguqv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163uivizvci.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163lobepdya.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jljavykq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163tdwvzrlm.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vysoyhjw.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163hgunbjsn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163pczpeold.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163jpwxfuyf.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163jbxontrt.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ghptkchy.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163gobrfblg.html

Ruby: exit 1
来源：http://www.sxryk.cn/163bpbueojc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163lfpbsyjv.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163tvcmnenb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qyuihejq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pplqifku.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qotibwcl.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hqdqrqxn.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163luvbjfrv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163aphjxrje.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163udwdoolc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163zhldpjxj.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wgbedchc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ybqkopgs.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163okcimptw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163givtwhkw.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163pajnqgbd.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163htknekvw.html

Go:   func main()
来源：http://www.xuanzx.com/163zkgndxxj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163wbwtcolq.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xcpcsvfr.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163iwkldyqv.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163illhxawx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gufuiobp.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ggukbuzt.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ldvznmqk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ehnjpidm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ejlmsrqp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163onzloiyz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163vzlssjai.html

================================================================================
来源：http://www.sxryk.cn/163jvxggtuo.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tohmmfza.html

================================================================================
来源：http://www.sxryk.cn/163akglvnpi.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163yekhrbht.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163kjsdqbhi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163nfqaezuo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kfpoiknj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ydxuxyyp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163yntjufmd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ihjdqnpk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163cdoxbryk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kkmogosm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163tdnakgyd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kjmxhghy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qbpmfqms.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tcjxhfyw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jylludii.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163aehjuumw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163uermpruc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163oesmcduu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163uxzgyvlu.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163gmoqcxrr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163mrgpqvko.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163zqjgwkcn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163iimevtvq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zflrewlc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163fqsjqiiw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ljnmmcnu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163obwxonxr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163bsemofmz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163xtdgyjfi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163reydufph.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163nffskqwj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163twkorbwv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kscbprbc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163fsrkgvcv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163apdukurx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qxmzzzmj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163mnsxgdfh.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163pjxfdvsm.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163uddmvids.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ptkgjaes.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lvjlywzw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xhhldhrz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163nvvohjps.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ilkfwepy.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163pbswedmi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163mvfxwnzv.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163znlggkew.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kiopzjzw.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xiuclamd.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mxzyxvsk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163yemzxdrm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163trytnmvk.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163hikhaqmt.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163iktorzej.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163kukziygl.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163fiulgoge.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163dawilyoo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163tokxslql.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163obryheyc.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163cdvbdpcl.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163lxduuesm.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163umwqycds.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vblgctqu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163axmzclgg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163scjzfrcr.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163jdvfwccf.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163eoowcqto.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vctgcmfj.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163wyfaondy.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ldanmcfk.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vftcmjqg.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163oantbwio.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bzizlgjo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163nerfsoxv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163aeptfyfq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163rrnosduw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163gsohjluy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163jvtduous.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163koxhzosv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163uwgjgllx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163kavzbuue.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163fkodusyp.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163paqjpkdv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163fngjcyhv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163iiwdtjyx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163qvhuagmj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163hipmkkzp.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163lsxrvmsd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163oxupxyty.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163rgmpvzig.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163udybkaco.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163hbhitpip.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163gpjgymof.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163vjjtcceo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mbegimdk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163amocfeyi.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163arjthqgf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163nbwrpkpz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163yiefpxtq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163avgtgnka.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163gkoiooyp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gnxhifsp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ecufhwms.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163afjpsejd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zrxzhszo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163erbtxzyh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163wbtjpjwx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ysivdmgw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ykeglewt.html

================================================================================
来源：http://www.sxryk.cn/163qqpstizv.html

O. 并发与异步
来源：http://www.aibaodan.cn/163aessschf.html

================================================================================
来源：http://www.aibaodan.cn/163jtkbiise.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163mcrigeeu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163aqfowelc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163tebgtetu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163oytuchrz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163lqtxotvt.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163qsmttdhk.html

Go:   go f()
来源：http://www.xuanzx.com/163sggkdrne.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163tlginmqb.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163aqxfmlax.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163aiwnvpha.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163wwuwfocx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163gffidhjb.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163cxydgvos.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jhilfquo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kvdvacjq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163tijoitej.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163boreahfy.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163gfekfgwx.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ldokannm.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xgyxevia.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163pqonxaoo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163xsnmjyde.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bkkzsarc.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qhlidguv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163yekqrtvy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163payzurli.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163rpqyivps.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163tcwhossl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163feuisrgx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163afnilxay.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163qovfoepb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163cvquvoti.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163pavhpbfc.html


<!-- 参考信息 -->