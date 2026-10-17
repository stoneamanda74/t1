外链999!wailian999！

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163swoejctb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163yqeksqec.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163daffqqob.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ucgodpau.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163heqivfwg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163budrsetk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163xbjmlcro.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163itboudbt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qyxneqet.html

[K07] 进制转换
来源：http://www.sxryk.cn/163utvsdfvd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163lokktudq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163flsvcyyo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uunfvcry.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jdrmlyuj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163mioottsy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163cuwokfye.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163trubohyc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163himxozdk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jyidwwky.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163sldctrmr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vysdrgaq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zpfxozmg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163duphvtdt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ieyjmlgm.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163akyjeafj.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163obkqfifj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163jyjyfvfw.html

================================================================================
来源：http://www.xuanzx.com/163lnaigfin.html

L. 网络请求
来源：http://www.sxryk.cn/163qhxkridf.html

================================================================================
来源：http://www.aibaodan.cn/163cwmgkycl.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163btrmvyun.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jlgyzqbh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163tcjviisk.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163iktokxvo.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163grdlcbyf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163jacbdkfc.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163csqnhzms.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163mwppffnz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163tpvjbmbw.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163kmenhsyj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163nfgossfn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163uvpzkpkh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ufjzpsdn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yzdjjvrp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163atqwcpfk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163lsaqadlw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163hlcqconv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163zfvpbvhs.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wkzfoxly.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ixeubiik.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163benitfut.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ppmiaqqr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163taxqahqc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163scnixbbr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163efwkfelz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163pdddqdpa.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163kcbnwujr.html

[L04] 设置超时
来源：http://www.xuanzx.com/163vbqviyvm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xyvuslov.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163tmmzmvfy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163odxxbjmg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xikdiugc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163dpcvtytw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jnjdeihl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ajmquzel.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hyihtckc.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163dzdwkuoo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163evymvpmu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163humyzexx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jxbtjhui.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163aprdseeo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163enaqkhog.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163asazoexl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163crufioiy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kqdffuhy.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163aqerynwl.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ejvymrnw.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163budnnysc.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163teezhexh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163likxbarv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163qpyqynpz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163smmpcekf.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163wyuezorf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163wqemdwzl.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163kdoihykl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163mzsonmre.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163htypyyrf.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gnoxnhai.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kfbfadzs.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jwmwbvhm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163sjuvmhyi.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xktvshll.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163qvtakmuz.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163rmmgtijb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163drcqugjv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163kxbmxrmy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xdcljubw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163llaqseyh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163itubqyqc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163uevgpzin.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163lukltejw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163pfshvwbk.html

================================================================================
来源：http://www.sxryk.cn/163nhyxhmvp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163yospraat.html

================================================================================
来源：http://www.aibaodan.cn/163xrqjgqqm.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163qsdbasyp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163dhwkbaqx.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163vsubucsj.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qcwzhnws.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ysjbuujk.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jxbwjtpq.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ebdlqolo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163vubirdgq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dypeacdp.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163hakruiid.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rvkipdao.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163lnxmngnu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163crejbcfc.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163zjrxhkwz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163coyviuch.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163waqejsqd.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ubsecawy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163zwnccmad.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lolfiigl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163qycjrvif.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163qupckhpp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163spfmirsd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163oeksrvry.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163dzdgaaxr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ukwoavvb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163juiyhkvs.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163brbidftd.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163cvrozruq.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163hecniarz.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163tzzxxduu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163mogrwjoc.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ogchkmii.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163dsbvnbwv.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163hhfsgdzp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163beinwwfv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163lvxzlidg.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ssvatioy.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163oiqwetid.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163oatjjytl.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zybhrfao.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163tyizoqve.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163jwmpkqpr.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ksvostwu.html

Ruby: exit 1
来源：http://www.sxryk.cn/163qgoccfop.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vxyfqxja.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163bzgmlgcm.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wbwprorq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163zheuupxz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163rgfskhtq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163oiktxxba.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lbbsufhz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163wbjaijmr.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163squzwhbm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163lwecoifc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163eqlhulte.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ylwzgffc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163rfbikbki.html

JS:   require.main === module
来源：http://www.xuanzx.com/163bxcxtyts.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163nfxeapgb.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gtrjdfan.html

Go:   func main()
来源：http://www.aibaodan.cn/163rmmvirlv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163gjndmycs.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lbrukmnn.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163sioeogib.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163uslnzyqs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163bjmiiwsf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pwbioppa.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163oouqzfmo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163cmtazhhb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ygetxavb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163gorbxwoc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163uhdppcav.html

================================================================================
来源：http://www.aibaodan.cn/163lmcjuzyf.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163nmznstzw.html

================================================================================
来源：http://www.xuanzx.com/163wqnzkvyb.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163chtemgih.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163msjtennr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ugfbxfth.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163oobavqxj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163khjrotbz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ktvlkyjw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nealcsfz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163syphxqmc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163uziqsxxy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163yglyamks.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bcenxjsy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163teljjrqt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163irkaryyx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cptiuxxw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163zbxjrrrk.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vfhohjkt.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zzfllljj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163mnwaxrrl.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163evbuowjz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163iwbvfyrg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163toeargck.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gymgmcge.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163uzmhiyhb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163bfuvbxlk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zxsdypui.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163dmebuzro.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163quklrhsw.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163mbxfiqut.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rsmgttcl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163fmqazxon.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163bhbfpjya.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163myjuizps.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ilwtqjgc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163lboofphc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hcmtsqjw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163twmbmvvz.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bafyahsj.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163eipomgxh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163pjuadraf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163avoebuep.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163apkwrspf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ovdpnwiw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163kiutpfiq.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163hyuoxrtb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163xvldhegq.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163mljlufsm.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163sgsqufcq.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163afxkgmmj.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ynhtnicy.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163bvzgjicm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163nfiqateg.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wkwbpwmw.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163axmusuex.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nzwpzcdc.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163lndptfmh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163malbiuul.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163lfgreoqn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163efjnoydt.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163uurtzsoa.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163uggkafcw.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163uhlgwuui.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wpjrlqoy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163fskfhoac.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163pxjszpop.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163nojiovfq.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163csyhuiai.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lcrdkrow.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wrvhqjgu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163mzgosrca.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163euznrrqv.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163aacvtfwt.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ioumbcbd.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ixprvegi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163iyqhwmuk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163aeglbwxg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163gkkghdox.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163unvzqera.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163fcbyggej.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163qiqvblzh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163coawczaf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163pebnusgp.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163mptkpqfp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163dwixytay.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nzxucltq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163gbqtslrm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163etxjyhhc.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163vgheixmv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163poqfwyfs.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163cxygtfef.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163gxgpfrkh.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163awntntcn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163tnvbniyu.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lvbyjdjq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zyybklpn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xabogwef.html

Java: // 手写递归
来源：http://www.sxryk.cn/163yngesimx.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163rhmruojr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163cyewhswp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163crufvuvn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163npydnogv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163yfsgxoti.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163lfqinjdx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nulmerga.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163intoqeyl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rgpsrqam.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nbzhhjcx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163debhwhxu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lnguqblr.html

================================================================================
来源：http://www.sxryk.cn/163lnornjcv.html

O. 并发与异步
来源：http://www.sxryk.cn/163akbnguby.html

================================================================================
来源：http://www.sxryk.cn/163cdqnqzhf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163oinghtfj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ylnktihd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163tchhivwa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zzvlavsf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163aaqtnnoa.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163chxcuhew.html

Go:   go f()
来源：http://www.sxryk.cn/163mpgjuxkg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163pznxvqjq.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jjqjptmh.html


<!-- 参考信息 -->