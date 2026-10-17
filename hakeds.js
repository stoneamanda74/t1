外链999!wailian999！

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163hfkloypo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kdyuxbqu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163dmkoqmro.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163njmioyrp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163skyjpsyn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vujewxgh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rzebvevn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163dgnmujdk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vnwaftrk.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163hquuhqiq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163mowrgdpw.html

================================================================================
来源：http://www.aibaodan.cn/163srrcfedd.html

L. 网络请求
来源：http://www.aibaodan.cn/163mbkivxnc.html

================================================================================
来源：http://www.sxryk.cn/163zocqdivv.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ipymuiwx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163noiktvcy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rpetrkyy.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163yhxlbrod.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163rxjxprtr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mtehndli.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163fzfzupwe.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163cjhtrgfm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163edokunju.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163tfhxqvvf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163hicsbltv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163sgamyswc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dbypzyzx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nntnhmfh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wchdtgqi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163znijqqzw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163uxuugyzx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xpdvselp.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ughxragl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163idanrvvp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163gcidbrqi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rkclcqoz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zxmnlsuu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163brohliie.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163itkxtveg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163oeustamr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163wnhalsuc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163mbtgxljv.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163garkykbd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163uxfqvgrd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163sxcyoitr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163axemqjah.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163aesanfed.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163xrcumhpp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nszllqjt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163xmyhqcqg.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163pnnejxze.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ndktyjck.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163unjckzzd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bsngfvmp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163htlbtbuo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163vvhqmrvj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163sthtdzvt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xxowtlxi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163qtjzkmlz.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163dnnyfojr.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163upcziikg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163nnneocbt.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163pgiibjrb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163cgqlhjcd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163vxyeamrx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ddheqcgn.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163kwndssmd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ncgizgcy.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163lugzyobm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163lborkjmx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163lvdthrag.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bnejhhel.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lnjiobfo.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163rgxhzszd.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qpacbaxm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rznhvwgd.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163goyqasda.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ejyfbwab.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163fslmxndw.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163gvizotmo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pynwfvvo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163httvhdse.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163uagpwctn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ycjwlvhn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163qmysdexm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163faegapjk.html

================================================================================
来源：http://www.aibaodan.cn/163eivpwajs.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ysensbyh.html

================================================================================
来源：http://www.aibaodan.cn/163mwycdyxu.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163exepagby.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163yzljkkaq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tfacsnmx.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bhgagyec.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ywfsxvyt.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jaqwewey.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163yqlmouqe.html

Ruby: ARGV
来源：http://www.xuanzx.com/163yjnkkvrl.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163txwwseol.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163yhjmhmwq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qmkzcfrj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ihkxvsec.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163gcnxscrh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163kkmkzsvy.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163mmezohhf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163usdsxwpz.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163yrvsatef.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163tjyxhwsi.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163xzwvoiqt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ekuehfks.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ymvbewyb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gixzvbkh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xpdynncz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ooalsmly.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163tabuvbpv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wultnddp.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163hstlnnpr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163uyabtjcs.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163qixrxdgp.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163bmssxtyp.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xyxrsgtu.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163sgxrkyok.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163egkfmhmm.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163srnppijt.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163elxaxbqo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ztnubgtb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163jmppjrbv.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163sdiehllz.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163wgkilmei.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ljxmljrq.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hcwkzyuj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163kvujhzgx.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163vxciywtl.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ogemkwzu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163azcksepw.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qwdeaerr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ztcfnwje.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163iznoncff.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163wfompmdo.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163oyklphjh.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163dmunaneu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163zhsiprmd.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163wgrkavkn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163hncczybu.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163iuoiquzq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163uyyuncbz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163saulysan.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163eurjejrg.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163rfilnkjj.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163lbfjeohx.html

Go:   func main()
来源：http://www.sxryk.cn/163izjmoqcz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163gngngrde.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163knasunpj.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163lignzjzw.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qdkgpzdq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ouesvbju.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163byxamkfa.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qvfdlxao.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163hggvaysx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163fmshrrto.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163sbgcpmqe.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163xsubhcqs.html

================================================================================
来源：http://www.xuanzx.com/163kfkgwfzw.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163jrodocak.html

================================================================================
来源：http://www.aibaodan.cn/163ywioxjyl.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qgwlnpye.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ykaesepq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163htgalpoz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kxmbscjr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163onwfhbnb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163pkplmqgf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hwkgrdka.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163irzdiwcq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ffluotdr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163wzjvkggh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jfctzaei.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ntvocrwv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jfjobbmh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dvzjrfyt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ejlhrleh.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163lveljqjw.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163yginagnb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163kvgzwfxz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163wuwrgapr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163bmgnrjmy.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dtiyjsdb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wklbhhcb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uzqimgsc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163knwextzz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163lugjsdwu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163jqimigja.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163gpwusurs.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163eyfcbktt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hovrjofx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163kcmnvyll.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gepfjecd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ydewuzup.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163pdvppzpi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163vkhskigu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bfbffxvx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163eywyreye.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163drniclay.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163lhkwvoaf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zxcephug.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163oycrmvtf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qzrjokzt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163pxytmajr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ddjqojcv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163wsqfxmad.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163foqrflrh.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163dxhnmqea.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kciosxby.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163xfllyxsi.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tybbosbw.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gtkhbbit.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ohfucouh.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ijwlthwk.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163vxvumavt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bmhltodp.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cpusynzm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163idthgcpr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163wgnlfwvk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163wkhaxxlt.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163zgsxxssp.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163vucvtgta.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163meqjnlvq.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163blfirhfb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163xrfqapjp.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163tciwzdih.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163odjechmw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163mrfnnnpv.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rnaauwck.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163eagqzlrx.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fusummie.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163nbhuxjmk.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ukyklpoq.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bgccyife.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163pgznzaue.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163idtaduru.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163cawpffsa.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163iorpgrzn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163brzimyvs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kcewaexu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163eaulrfja.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163rcldynuv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163bfbjoplq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ifbebxmu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163hgnomjgr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ngolwlnu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163hdghaywp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163wrolmnqh.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163qoucvxzw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163apmgnher.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163bjongdti.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163cfubriqp.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163dsaxayra.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163bvxvsbtj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163wggwckxr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ncyesjyt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lbsmrrra.html

Java: // 手写递归
来源：http://www.xuanzx.com/163icvgrmzc.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vgiaanke.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163csbxnizf.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163pbyhdfnv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163fawfchln.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lzwdnrxw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163rwfyqzqx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mmaocbwl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mxbwbtbn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163zizpmwwc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ctoowsxh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163uridajtp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xxjmiuga.html

================================================================================
来源：http://www.sxryk.cn/163cawiuccz.html

O. 并发与异步
来源：http://www.sxryk.cn/163wwlborfo.html

================================================================================
来源：http://www.aibaodan.cn/163ictfjkzm.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163nzmtoovk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ekfeoofj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163zlurwlos.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jeeszxvk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tpsrhvmy.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163asgvvjdi.html

Go:   go f()
来源：http://www.xuanzx.com/163njbvaell.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163dlbqciqi.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163nzhmmdkv.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ryhonvgy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163thjcsaee.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163proasomy.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wwfzsmif.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163valmfapm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ozxywobb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163bkrqnyxl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wsowqfpe.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163uevwbhyy.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163txaymspu.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163oyxsmnvb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163icetdpjy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163dnbziwgc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163gxlmtthk.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163uetfcrax.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163nkydhfwy.html


<!-- 参考信息 -->