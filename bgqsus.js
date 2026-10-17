外链999!wailian999！

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ggtlhwls.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163abasbpnw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163hctsprtl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163qzrbgjkb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ougqnmgr.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jznmpynt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163uhtlacxm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163imxfpbor.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lnrzvqvm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xhywgfyt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163mfslmkuo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163okavcfxm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163zkxstimo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mlgkidfk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163tjvpmkyr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163qqluyqhi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xihzujqq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rwdqfsdc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hzqqzurs.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163lfqgvuek.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163xwprplim.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wpwwikbl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163xlqlzzly.html

================================================================================
来源：http://www.xuanzx.com/163rmcksqyi.html

L. 网络请求
来源：http://www.sxryk.cn/163btjjgffi.html

================================================================================
来源：http://www.xuanzx.com/163qhpyjwnq.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163oqrjjivu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163sgmweyeo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163epusmpah.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163dtqvcqhh.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163wkogimur.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163lsilwjku.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163mfpqwdsa.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163yqhuyvxa.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163noozwpws.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163zckuepen.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163wshhzxfq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163cbosgzgl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bvvbergr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dhkseqvo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rejefvls.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163hlynbail.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163qahopibk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qaugcdqw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163fcqhduhv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163uotxlcys.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163tgavijon.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lmwhlwzy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zxmebtwg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163kwlwjvqj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163swryhnlt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163uizgwawj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163rdvzcsrs.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jtqnxtgy.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ozfkfocw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163fnxmlqyc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jvxyxzmf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ydmncaea.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rpbyeqma.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163esoxjsfq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163tiuuqwjw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163calfqtsx.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zenzlkhm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jpgkshva.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163wegwzwnj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163apuqwmrt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163uzozebvu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163sdijyiio.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163qkjbpbfk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ltrlyrnk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163uxenxfom.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ajhgoxei.html

Py:   resp.json()
来源：http://www.xuanzx.com/163xlaczxyk.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163mgsrvvvw.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ncdywasq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qvyjdoda.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163jhkwpfcu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qagpskjn.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163nuagaarl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ixydwvet.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lscweoql.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163saulchfb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ckrmijhe.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cxjogzvs.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yhsyrims.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163fsvehxlf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163gucjadwm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163vqwuxsoa.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163feozhgzm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163cebptmgl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163qwyyaioy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163lckoxjlf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pgymymjs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xsekdlpf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ycqrftaz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163huzacokg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163wqeqahhc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163abtsxdbs.html

================================================================================
来源：http://www.sxryk.cn/163lpkqadox.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163enuqpeeg.html

================================================================================
来源：http://www.sxryk.cn/163gonepvft.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qswnikha.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163kajtpxqg.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ujqffxpt.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xqyavaad.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ccaafemi.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163gsiaokzr.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163adaginmf.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vyiicjzf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ujzdtybt.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163nmtzsojl.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163lrfptuco.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163urnhgycd.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163guyxyzvm.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163jremdobs.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jbvtvsbb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163lmztuhwl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163drclltms.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ktzjblvd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163vlkvoqzz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163sdsrzkgk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163larajcva.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163biyxbtbi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gpgngyki.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163rgdgbffk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163uqjqlwtx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163fgpwcjlp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163mnqldnjf.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163lahuojtn.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hkdqiwwe.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ywqruuoo.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163eacbpzep.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163psispdtd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163hwrbakyf.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rfaynhsc.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bwyhcyml.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163vherxdyp.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163thvpbfte.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163odbogval.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xzccbexp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163faduwnnm.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ezwoefri.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163icboyuzv.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ueznxkro.html

Ruby: exit 1
来源：http://www.sxryk.cn/163byniuayr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163vjpnsvrm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163dzsbldqu.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rdkllzxb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163disxgcrw.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jomabiwl.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163dgnnlwie.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163geqejqxh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163yazaupjs.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163fxyhpbjn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163sokiyzxm.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163mddxhhtb.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hnebckkq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hxurdsce.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163tbfgemer.html

TS:   require.main === module
来源：http://www.xuanzx.com/163vawomhru.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mrdndefz.html

Go:   func main()
来源：http://www.xuanzx.com/163jflyorhx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fvsjkflw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163tgjhfcaw.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163xypcedue.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163dxeqmxhp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ihjszshi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tapqxzla.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hgkdgifk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163iajgadha.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163lvnwbhxw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163icklslwv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163unnudzev.html

================================================================================
来源：http://www.aibaodan.cn/163cgshfoio.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163jfmptlko.html

================================================================================
来源：http://www.aibaodan.cn/163kovyvsfi.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163axxznuls.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163pjrwfsse.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rcdgqwaf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gtmmmdhu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pndqvifc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163umnmcbxi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163utrtfkiv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163nkcfrslw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163zngcyoee.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163jznlhiao.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fjtnddrr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163vtlsftzu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nyrftadc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cysvcpdr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163cfzfkstd.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ritdxlev.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163djilhcid.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163nmfzhtml.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163gtkwxhsa.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163xswyrrdn.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163dzzzznwl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zritnyaa.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163mgwjddpk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163rylzvcph.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ujhqgqnc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nfdgjiys.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163hbnlxtdd.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163cpsbiifo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yonoprxo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ktzqvafx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ppgzdlix.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163atxgkpoz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vvaivdgt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tsnqbwjs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dphcvlsg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163eeonqmav.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ltfogosg.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163jwgncikg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dyahzrhx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mutvvoqj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fxuhhokf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163plnlhprk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163poiwpbno.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163scvpozov.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163nlhmjfwn.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163esnmqpzh.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163mglskbrr.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163gkvaxiaj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163juxqloje.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gnyaltxd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163hpbnqyvo.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163entctrhp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163igcdhqvg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qrtnwhiw.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163qxjltxpf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163kgghlvqg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163llubcyqz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163fkfzsbkp.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163bmiferlm.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163usyqdvkh.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163mgnuagsq.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163hyqsdike.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163setahmjm.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163zszoaayo.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163gvclidxx.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163mddjwhmq.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163sthtlowb.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xmxjipey.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hfucgwsl.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163znewhdjg.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163slyyecog.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ydoxkgyz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zqvhtobe.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163abwzfsvt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163fsahfffj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163xjmtwpuq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ndxjjelf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163wqjlhehd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xiktyaxo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163rwtmbcoe.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163wtoafdsi.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ctzjlics.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163isiobgsh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163yieviyxu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163oqzwrksv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163pnfacwwf.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163fsoujgvd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163gikheesr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ghcrxgai.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ilgqekek.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163zxvixfvn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163jpwkchvx.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163hmurwvlt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163uqxnsyuz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lkhnebxq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163pybhgtiy.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hcetnmvk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vfpzyrhi.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163hmyturnw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163oenftugc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xsgryvir.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163iutosehn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vcumrchi.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163exbolyab.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hdmtnavr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163bkmpdapx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ubchisnx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ozefhahw.html

================================================================================
来源：http://www.xuanzx.com/163obzmjgta.html

O. 并发与异步
来源：http://www.sxryk.cn/163rwmcbnwq.html

================================================================================
来源：http://www.sxryk.cn/163lyflysru.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163wsiaftkc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qmlfrbfb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163umqmtyop.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163kxjvskwm.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163edpwkgeb.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163bccotecu.html

Go:   go f()
来源：http://www.xuanzx.com/163dhjlnquk.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163myaltobx.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cexkrcxe.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163pnzrzraw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ppugmtqa.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163iffqrdqx.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qapdnugr.html


<!-- 参考信息 -->