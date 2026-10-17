外链999!wailian999！

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sturhnvm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163gnlnvxzv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163liqmqzrt.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163sxccbinf.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163unpujwlv.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ddmkmitl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rjvnklpe.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vauvwpoy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163malukagu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163brsyerse.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163nuptzbub.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163gctxzuqv.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zbtmpiqw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xuyvkzrn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163klmlmucb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qsmyltyu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ocscvmum.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163flchosqw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163eoevwcfe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163yepqqlvb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163yjntadsr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jggrktxt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163rieggeba.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163puxlbifi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ekzkotsm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kpqqzwsr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jctrguqy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163otgtnrny.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163evpnmqcs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163howvjvxx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nycubzhp.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163wnxgqnnt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kggruhda.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rhodwnpu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bcpcmgaq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fgjrwyys.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163liaojxpd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ulnvrwlv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163hwdiljlk.html

================================================================================
来源：http://www.xuanzx.com/163osslgqyp.html

L. 网络请求
来源：http://www.aibaodan.cn/163vqftoyig.html

================================================================================
来源：http://www.sxryk.cn/163eoxaiwxm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163wfgsduiz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163lahdjzkx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163owwnqjoo.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163dclpcvnk.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zlvcjayw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163jfuczjic.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163fgapkjdy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163aonihgjm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163xfbnvcib.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163eyphmzsf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163iyjwnfxz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163clcwcshh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163yaqmckzl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163orleexlp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163tcwjouzm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ibufyuhz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163hbqchrhs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163yzkxivqe.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qwmtrxip.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163junpymyk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163hdstmhnu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163csqygqfl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163czkmivcz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163lymgkrzf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163eqkpgovk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163yrgextpi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163viykfonm.html

[L04] 设置超时
来源：http://www.sxryk.cn/163mlulhofc.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163cdfbpfsb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qdhrsnuq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xcefqxnu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vxxwodkg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ebjefzrh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163cszoifgn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163edkkckyh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ncvydvgp.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163makxjzmo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163boflnjnq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163hypaetex.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163fefvncgk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vzqlumnp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163owacnyzg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163kjadnzmb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163debiluej.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163bkqdwppp.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163abxqdfil.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163oxzfrdqb.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wjnnftlo.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163podqbrtg.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qzrqjdau.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ulvxcgqt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wvabmfso.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163sxdmomff.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163hxrwujlk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163pvwdfuxz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163yxdahilc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163zuyegguv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kzwlmajz.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163whdvzejl.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163dgdkxvbv.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163uopezswk.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163iswjdfqo.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163slcsgijl.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163lwqduviw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163guxtrnms.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163bxpiiahh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fzcuyqrv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zkuihhuf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ixxfogcx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163urqimhay.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163upkscqbm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163bkuxkvqf.html

================================================================================
来源：http://www.aibaodan.cn/163xkczzfpv.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163xydymjjr.html

================================================================================
来源：http://www.sxryk.cn/163sabptyqi.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163suaiwzbt.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163dhdlknkv.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163cvkptyde.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wlawelew.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ucbswwze.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163yrjrkqqp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zxrpksri.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bejcbuju.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163vmiwhnqc.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vgrghlrq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ozuvnemk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163mjhotrju.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163dgjfgmss.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163nloxawmz.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163gbjxikct.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163reqpbjvr.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163pcvmbkkb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ocjtqmps.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163usnbzuko.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163lhkxphtj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163qjtusnzm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163fyphvfkv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163cbxupeyo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xthiwjlw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wuccdblc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163kykrlent.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163mqgvqukj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163pkhzbvqh.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163usbdnutt.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163huqwulog.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gmpmuknt.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163bdjdggfp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163aqmipnbq.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163xvmhvunn.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163xmqyroek.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163onecooqk.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ceqxzawa.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163qxofpjqx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163fywosvzi.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163yhraxmsy.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qakrgtms.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163vmzauwnh.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163feewqsrn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163yvbclwis.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jnrddhrb.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163iwetszba.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163foybyquq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163yilazbcv.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163cidpuuyk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163umootpvi.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lvcrszip.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163xccdnntx.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163rnqoepoc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163kxygkdqc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ifbynimh.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163eiiorxym.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163stekjgdz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163mugkkrkp.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hehgojik.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ahpzpyri.html

Go:   func main()
来源：http://www.xuanzx.com/163oxtoupyv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163wxwhdscm.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163oyekrlci.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163tjnjszyo.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163whmryupt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ejzvtcia.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ftubeqob.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uzzvmxyg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163vhnmbira.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163pyyzfptz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163tbeqklff.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163wdjvhslk.html

================================================================================
来源：http://www.sxryk.cn/163wrnxmxym.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163amfjdcvp.html

================================================================================
来源：http://www.aibaodan.cn/163dthpewnj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163uqusapaj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ywognzdg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hxkbkhsc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rfjqisqm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jsfsuutz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163qvfpkgio.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163mnhaoeoe.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163jzchkbsg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ssqcnbpb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163cmtwumlx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ffzlviet.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163snodsnxz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163eqqjhabw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163soxkknla.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163irebuezb.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ugccqcty.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163pxjtmftn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ombfvedh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163uplxgrci.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163oqhyhhaq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163peyhswiz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163semsbitw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163siqktfue.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163dtnpuyms.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163jynkoebg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163witztans.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163holhubkt.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163pdbsrxzw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163einwliao.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mgsvndau.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zqqvfqce.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163edacoluf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jimvhfon.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vtggzkoo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rpqvjbvo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163awrctdkj.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163uwoqsqnr.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163cbczejnm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vbjheera.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kswrlkxc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163iefdwtsz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ptkbbahj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163yxrqvlau.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wjgrckxl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163mwvkxzfh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163suunnacf.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163mntsyclc.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163skytypwa.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fhbgzzsr.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163towhrknm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163lvwdrfct.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163lnowpbmi.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163yjtsahxa.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zbxssrvq.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163uhypsfsp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163uwtrzzsv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kafsnisd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rhirjvls.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163blwowrtd.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jxufffsg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163vpeimezj.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lfwmcbag.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163zsqlxkpu.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rjcllmcj.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163nlkrbhkm.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163shtvwnup.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163muwpoony.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163knsbaveq.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qrchkhke.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163bbznsfjj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ddrzlcpx.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jwtudgjd.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163eeehagmy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ukemgfvl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ukqnqhih.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163wnhlazkn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163szhrorfw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163hedcbhot.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163prauynlm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163didkmfad.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ntddokco.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ztxdvynn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163fcrtgdiq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163hbvxplus.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xzbaftla.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163cshbedbo.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163rnmmccjq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163bpyrolsw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163rlsgtrye.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163jwrijdza.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163krbhmovu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163efcesxaj.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163axwkhsuk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163msxjxgfr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163nfqazedi.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163qojyfvyx.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163asupwjjk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163zusulmdh.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ejdekhfv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163efedptgd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163pcawsjtz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mhbyehyx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163iwdxjycm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zepxunyd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wgycbalu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163omazwztc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163gloqtsox.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163uyjcjqem.html


<!-- 参考信息 -->