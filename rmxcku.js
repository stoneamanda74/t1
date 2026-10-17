外链999!wailian999！

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163rxmbpufn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163aammbwdz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vphzxxkh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163thwwpqco.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163lrvsybfz.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163jfvbnaes.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bqxowfoc.html

================================================================================
来源：http://www.aibaodan.cn/163meiwqoba.html

L. 网络请求
来源：http://www.aibaodan.cn/163dlrcqvwx.html

================================================================================
来源：http://www.sxryk.cn/163avfdulrj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163txhogczz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rfsdlgkx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163erojyreo.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163gswwsipr.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163eoqdxnwq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ygnqlilm.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cmoikllx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163hlybeymv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163eugxjyts.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163okxusqoi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163mwutldic.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163daysahuo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ugfzmyhm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lpvosump.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163tpbobdbt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163razuzfmj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163jzepbzle.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163gstkeojv.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163rawgfuaf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163sakfbjfu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163razntofy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yjritncn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zwfbrhxl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163lewummrf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163fbiviogu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163yrwytlna.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ludakzjr.html

[L04] 设置超时
来源：http://www.xuanzx.com/163eceamwor.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163iewwsvfg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163alzhtcue.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kcxlayjz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nuwraobu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163whzsqwhx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163lmdojbgr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163keypvsjv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163cwvoghxe.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163xkhbuvxe.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ubgeymuk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163lcimxkfd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gsalcehi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163goqmcsmb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163fuogpotr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163csiasbzs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163naahbpfk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163mapeyeoe.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zjsyxunc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163shjujukm.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163sgyjijfv.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163klqhafok.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163jbtcnuxv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rqqatoyc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tnalknyf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163dwmtkzgi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ntksezca.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163dfetxezr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wyciohvn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ghohucjh.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zowcmzlb.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163resqsjit.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163jresejtt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xgkszakd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163upxbcmmz.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163lnrfblni.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163iayribwg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163bfqscfji.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163zsaeejrg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163afgudkhk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163irosidwz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163lablomgi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qlljiuko.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163aznzikkj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163fursyzen.html

================================================================================
来源：http://www.sxryk.cn/163idzoaloj.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163uyvbwrgr.html

================================================================================
来源：http://www.aibaodan.cn/163lnkdkfku.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qvflbhed.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pqmxslkq.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xbfcqavd.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ygqeiyih.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wmfmpltl.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ewllghkg.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163guirywdt.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ubtcscwo.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ihlltopl.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163alyilzke.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163mortdmat.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163hhgycywl.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vnrpqdac.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163vovmrxgy.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mjdbserf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163cznmiepg.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163yvzlpdvl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163tpdccwgo.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ewsnzncc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163crywtrib.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163zzuvqbsc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xnpvisle.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uitnugqi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163wxlheatl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gabdisjw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hlphgdtz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ygcokkgv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163fqlffebp.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163jpkktgsm.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163zpqfxrij.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ddyevbas.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163whlisciw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163flttwyhy.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xkjtqlkd.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163awsobsfk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163guoicgjp.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163pnltugbu.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163dfyiknce.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163qrfopfgw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qqkbnzuy.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ilpldbyv.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163eyjgylke.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163pwtfpgcl.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163xiknyaqa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163cnsuxxfq.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qnihllmg.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hzjxgfxc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163aaclxrin.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163xeakqmsh.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zbekbjix.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163pdnknzcf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163bpgtlbyi.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163tjaspxky.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163tgrdomno.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163suqyfqbs.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wrnhmygs.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163llfxljvm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163byeiwoqb.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163bdxzufyt.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gvjlapzw.html

Go:   func main()
来源：http://www.aibaodan.cn/163xxcihmho.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163spslwlyy.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163dvpeyvne.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fboukfgq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wpjebqkr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163rwybgapq.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163itjksrav.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bnemyses.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mjixrjue.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163vwocngwm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163tyztmjfn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163yhzpntbz.html

================================================================================
来源：http://www.xuanzx.com/163nwijmhqj.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163rdgbsecc.html

================================================================================
来源：http://www.aibaodan.cn/163xmfgnftv.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163tdjgbyad.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163eusydyth.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163quywnltb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163smrghhhd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zlmoqxch.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163gmfwfxft.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163fbthjeyr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163haddgpgw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163lztzcicz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163nuxlmuqj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xmaqfbgk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ohglapqd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lxlwvnvx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kcslezeq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vdkysbgr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163uzprcbcc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kykgdrcw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163uzvhbrlu.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163mkiyaekz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163xgsuswvk.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163nnqtypkr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163dvjzibzt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mcpjvyzj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163fnxwtumk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163txzuvhqb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mdvdjayw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163bsopmynx.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ydczouix.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jluugogg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163oqglhysy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163fpxwibhb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163czuoalcw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163hlqabtbi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163eqzldzmm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iaetzfgv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163gqzaafat.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qbghndse.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163mnnrtuww.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hsnaguve.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zpfmesah.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163orfzmnlk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163epwmsvnh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163lkakzmgx.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163vfzdrpjb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163dsxhdqkn.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ysuozzty.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163egxunlvx.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163mhowzeks.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ffgrahng.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qwtdfqht.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163jzgdlxzk.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163nfsvglpn.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163lnjupnlb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hdqgcflz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163izbgpojz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dueclqka.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163kftswpoi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wcvjylgr.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163exhsiizo.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163eosvclcv.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163cehqqmgx.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163vvpdqqhl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163anjvaxae.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zhfikvnd.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163nigzdaax.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163lugtyixn.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163eyigzmrv.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163etpibwrt.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163legfezeo.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163kvxbtwuu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163nhdpgdjq.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yqcxhsly.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163njwvazog.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163zrjetyad.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163eluoewqm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nxrrwsss.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163uhkcmcva.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163nvmzwhvv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163atcksvet.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163jmoawdit.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163vmxlaqrh.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163jgfypivn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163gocdzbcr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163selzyviv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tztfhlkw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163nezdvgdv.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163uzojjwzz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163oyrxirsj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163eujhhedk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163lxhpmkuc.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163qfohaffc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163mflfvvrr.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163snvhybzz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pgmwtvbm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hlmbjqak.html

Java: // 手写递归
来源：http://www.xuanzx.com/163dixswakf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163sdwtdkts.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163atrljaca.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163szylcplj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163enrsinyv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ebwpadev.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163vhlqkbah.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mvrjckcw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qaumqmjs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163docndlxy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163lcqgsffw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tgukzdui.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qglqguhy.html

================================================================================
来源：http://www.xuanzx.com/163fanpclfv.html

O. 并发与异步
来源：http://www.xuanzx.com/163rorjpumw.html

================================================================================
来源：http://www.sxryk.cn/163byzefmbs.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163xgjyrudc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ichqvbbv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163uwhjbffn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163xstfmkle.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fxxlakcd.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xvrtxvku.html

Go:   go f()
来源：http://www.aibaodan.cn/163ttdbspzb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163zhkjurcm.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ftqmwgco.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xzznbpij.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163qmygcjxn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xuqdorhv.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163muhderbs.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vihgpsko.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163yvvvctwm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163kldqtzxo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163veuantcn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ofkzqmfz.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xlzvrken.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163zwdtgzzh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163vmepjjvr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163wccngsyx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163eepdigxq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jwfdbriv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vbevvopv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kfrvibbd.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163kagcpsrf.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163tiopqaze.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163rcbhapdx.html


<!-- 参考信息 -->