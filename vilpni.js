外链999!wailian999！

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xfsqmtfi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163muvyrotj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jbigidpp.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zhsamtzm.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xhiyosvj.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163rrxpxkaj.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vhwnbssv.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sucvrchq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163gkfytpbl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163twyatvow.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lviycfao.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nafwyvdu.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163iqjfuzin.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163anrvdhmo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xuybwtjv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163phhbnjyd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uwibsufb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163gleothyo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163sihdhabg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ipfegwcu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zsphsszl.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jwndgvtv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163rgpxmwoy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dilqyurj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rlpykbsq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uybyxemp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163swjmauzv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163tudrhopj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163fggtrloe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163hxsvqzma.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163faiwhydj.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163tkxyyinm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163emzfmemi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rhtamiwt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wweyfpjt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163zygfnpfd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163nnnjusay.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163gndovpdv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163rflazucw.html

================================================================================
来源：http://www.sxryk.cn/163eitkizrl.html

L. 网络请求
来源：http://www.sxryk.cn/163fjmvshzd.html

================================================================================
来源：http://www.xuanzx.com/163uafaehxo.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zwrddsaj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163xieelbeh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163rwqpwzac.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163czvzeesh.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163pbozyuse.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163wvttenbf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gswbltcb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jmtxpouj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xevphvev.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163bottgtrt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wwjfzaaz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163nwrxpaib.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qhhvxawt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163rkeyqhwo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zuzbtlev.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163guvatddp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163dtntsmbd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jtgsxdwt.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163srkhlrqb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163nyofwjbs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xysyxldw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163tgkvytlw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rdcbwrmv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ktwelrhv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bigeawhn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163cyhlmktb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ygphncdv.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ldfzayqq.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163akxkamcc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163mriojkak.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pbdhrbvn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hkgkmvpq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163mwprojht.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163yyofxzol.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163fvsxhcxk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163veitmelz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163monthuao.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163wkeuzfmr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dwvxatkb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wxqsynwe.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ahiajtlx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qvuarigx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kksbmxzj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xyspdhqw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163daatrocp.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163cqbddujd.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163mzpaagbh.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zbchjsif.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zboztuql.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163nmawxobl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163sctfcygl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163pslfsxgs.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163qwtfikhr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163kqbddxsr.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163rbmxzbgs.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dxfkjruk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163njfcnhvv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163otbsiztu.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fxqnkncx.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163lmimzxpw.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lahjnmxu.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163sdtglaha.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163czalwrzp.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163otnamzvb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ceyviein.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163oointefi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gjuxscpy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163monkjlmz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163fsmwfhvt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jabszgmb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163imxerqwr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ylgybmaw.html

================================================================================
来源：http://www.aibaodan.cn/163ftyaxlpt.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ecqzccbv.html

================================================================================
来源：http://www.xuanzx.com/163nmhypfxy.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163mfwrfphc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163iesvxqom.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163hdgwfvjl.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wihgpykg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cuofjxov.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163tfcocaft.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163dpvgrmqk.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vnlpscfl.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163xtnnlhyw.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cxcetrto.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163olxwqupp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163bdcspabg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xpmvfqyc.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bdbwwrjt.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163lnqyjtgt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163mkfrgmcs.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163nwotvtif.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ymtacaxb.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163fwzpjxhy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jrveihgj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fdzeiedw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tgirxvyy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163sksvkbbi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qawwjhux.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163xshauawr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163wdjwmfuu.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163iafasdiw.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163cwdwasbd.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163lkpbimfe.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163drybqcwg.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163omcenpgw.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163qicpftyx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ydonefyf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163nukahdhh.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hldxwjte.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163owdneslz.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vkrvkimg.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163nqhdgwdv.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xapdllup.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ydjjkusj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163dzguzfzr.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163pvgdrkzt.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163aojuyqwb.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jqrlwhjq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hymkndho.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wmsjupqa.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163vjxiofpx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163umvqfurq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163wvkfsetg.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163yphsuzlw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cuojnpga.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163pxihijcb.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163lqdxlxaf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163pqgwqaps.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163jblubawp.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163aziswdoc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163xzbnfnel.html

JS:   require.main === module
来源：http://www.sxryk.cn/163cobxrjay.html

TS:   require.main === module
来源：http://www.xuanzx.com/163igqcggrp.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ammuffpj.html

Go:   func main()
来源：http://www.aibaodan.cn/163aguyqwaf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163pkqabhce.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ewzbcaqp.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163notcpxfq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163htjhkpme.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163mhaqemsk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ytxrrukq.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jsbyirum.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163psnkduep.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163dkxyrsem.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qlmatlkj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ldsjugih.html

================================================================================
来源：http://www.xuanzx.com/163vuctnrez.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vccbrgvr.html

================================================================================
来源：http://www.sxryk.cn/163agcozqfk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163slglcmfo.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163wcjnbcmy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163cbnlngzy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dhckvptw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ymepviuu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vwcttxyy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163yxyllzjk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163mzfkjxdp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163lzdkiupx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163asrgibhu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zrnnlasn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163irhwowar.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kpeflwwr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rqgoocgl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163vsuezpew.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163mmogbpff.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mropziaw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zhjwizxf.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163wmgbdwtd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163wrjcmcpi.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kobiexbq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rnbxwxwl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bgzuemvu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163oejrdend.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163peiuyzmm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163vefpfpnu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163xjdfbtyh.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163qvmdcysj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163imoruvdd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ryjqgids.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ccxhorgv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163wiocfkam.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163haaawoqj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163mktrdhrz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nqhohkyh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163sluvokhl.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zpaarfra.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163raanhtyd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ioykelxr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qzaxzjcv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fncbtggw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163fktxxgeh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163jmxisukl.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163drdpvmfo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163llwitpdc.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163afhtqclx.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163gywshwld.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ijlruyjm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163iwceznoy.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lkiktwjo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ehzhspib.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163rwpldiip.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163eemyykvo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ezsxeqcm.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163pnjdnsjl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163kukfnirc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163nfghmibf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163jjglzjko.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xyfbuezg.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163onmkhxvc.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rbviwbjc.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qqgjkdds.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163podypzpg.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163pmkzggex.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163hgznszxo.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ywcygnwm.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kpbghozh.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qxjjaglp.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163blvmibxv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jnllcjcb.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163jjqakuoy.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ayycroja.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bizhvctk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163mwtjrthp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163mflwitfs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163phfgyqax.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163tvieiugz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163autbceyr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163yancbnsu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ozzbrojw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163lkbcyaoa.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mqfogdjr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163mahrhjhd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163unymeybe.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163zavzfrpi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ibkiaddk.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vafpyjnn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163xnanjaha.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163mtkgvbjn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163wjasvqxt.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163jpgazlwl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163sbopozol.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tgusdzsy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163negfyswr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mdfkeayw.html

Java: // 手写递归
来源：http://www.sxryk.cn/163avpwclda.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ohdhtaic.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163acfzkqsg.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163iwqssewy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163bwgwjrsl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ldtglpeh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163dmhfkjyr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163lxlerfuq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163lpdjemdr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bokhqfgv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163yhpxrcwj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163uaymidux.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vsaikzvc.html


<!-- 参考信息 -->