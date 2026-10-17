外链999!wailian999！

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163sdqjcrkm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ohliblcz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jslqpucd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163onizyqcw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163thjfakqq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163cunzaxue.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163oturijtg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163okqxvyie.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163yhagsryc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163saiwxvqa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cmhqtqso.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163jrqusrrx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163avnktdbi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163icsbartm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163mpvpobes.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gypgmuug.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xksnfmeh.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163oulufltc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nxzwqmsg.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bemyuzmg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163scqiaiki.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163khgiqojl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163tyzszitp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163azzipljr.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163canivhyr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163tlusigcr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wfjdvlfn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163euqczmty.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163iuqgywcq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163uvcghrlq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tiqohnzd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163nimveqaf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163fvrzayss.html

[K07] 进制转换
来源：http://www.sxryk.cn/163gdyybquv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zodgueki.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ksljwanw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163doipvthy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163osfjblcc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ysqirdgy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163rfynapzz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ptbfxmpg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163qjkalopp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163lpbyxjkk.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163whypvudq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163imwuirzy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163bgdnqoqg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uzvpivyd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163agiwvmzs.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163lcicusqr.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163akpwwcdl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163jtmedywi.html

================================================================================
来源：http://www.sxryk.cn/163fxxvkhsz.html

L. 网络请求
来源：http://www.sxryk.cn/163rggxmwfq.html

================================================================================
来源：http://www.xuanzx.com/163oyborraf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163dwxedkzx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163tnqtdajw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163nzmzfbml.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163omxqxkyj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163sjkpkgup.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ilwsbllq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163fzsxqrsk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ariwsvaz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vmkljnww.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163eqmeiemz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163yuxkcuyv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163bwlkukvq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vlhxjegx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mfmwcxjv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163zpajsjxz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163hcpvyxev.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163hiedbuxx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163cahwnwqw.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163urtzexvw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qbvermxm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163xnnpqvhj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163upmxgrnd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ilaxhtcn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qqcigfii.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163esgxvxjw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163nptmbtsh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163uhzzqdky.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ftslwaye.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163iaukdoyi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163kizzoonx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163uklerdey.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pygawlkg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rfoiobmw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163yaeujbrb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cserdnxf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163dsytzukk.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zsmckaof.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163sjdmaecp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bergczpn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wwjspuom.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dlsfroif.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163oaddjwkx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163frjtfrng.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163nwkbxywd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ikkcilar.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xbtxwpic.html

Py:   resp.json()
来源：http://www.xuanzx.com/163qadcvnto.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163mpjcmrkg.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163foscoidx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163vunsamfm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163fidwlrrx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163cvcvujmw.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163eqzkjeoz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163iofpgtfn.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163gzhzndwc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163agqkicer.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163esgkifio.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hpxyvtkj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jyvybkhr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hrwawfyf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163uvxdiedv.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163idzyxbtd.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163fwbhastt.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163etdndtys.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163msidlesx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ugazkirg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yfwpvqrk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mhyuysbi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163kyaqhsvy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163klkccksv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163kcovyelm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ulieohld.html

================================================================================
来源：http://www.aibaodan.cn/163poydmpqk.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ufpxasnm.html

================================================================================
来源：http://www.xuanzx.com/163jaetdpne.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163hwfkyqph.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163taktxxyo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163qkynvpny.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kcwqytqo.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lgosahue.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mqjwfzuf.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163senqitib.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163otsfmitd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163uffdtigg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163zpxvgbpi.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ztgnzlcv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163qcdhvegt.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163itynczfl.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163zfbdlmec.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163wmmkfqdp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xqzogajh.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163rmzuijnl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163zukzspay.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163nbybhjqz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163mwutviig.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163nlgmlcsr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nyuznzva.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hsctdvqz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163siixqdww.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jeaifhzm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163rojpeksa.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163putbqreu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dxnouzss.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163leksciwr.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163kmyjohgw.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163omfuaezp.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163zhsqagfp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vevjcbwg.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163szztofrv.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163mnngqpzf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fnqwygwm.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163mowtwpbi.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163imttkine.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163mipqqsvs.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ygfjwity.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163pbudsewr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163btlxiyhd.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hxufhvvy.html

Ruby: exit 1
来源：http://www.sxryk.cn/163eavpwgtx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163iopkyedn.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qmokyteb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zjmvuhua.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163vpyypqtl.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zqqbjyot.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163cqyxzgfq.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zvsslvbe.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163bdlwngfb.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163tvekwxrp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ptcdeimh.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163pkbuipbs.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163nlxpuzzt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163cttywpmt.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kgmugnta.html

TS:   require.main === module
来源：http://www.sxryk.cn/163cayjohwm.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163scuupsfl.html

Go:   func main()
来源：http://www.sxryk.cn/163yynwhyaa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163stbskmgc.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163fwqgbaej.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163cpmwssae.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163sqocobaz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163pqxgagfg.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cbzrtrtj.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cowqoavj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163sbiknftk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163oqogxgyq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163voajhsml.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163kafbqtyt.html

================================================================================
来源：http://www.aibaodan.cn/163xlxvaajm.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163fyyliaou.html

================================================================================
来源：http://www.xuanzx.com/163xgxecrvg.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163wmqykljx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ggilvrrg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163yjoxzhpz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vmvuyekn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cghndaql.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wyauivuk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163bbzjqgfm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ddnuyfbh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163gyfkrlug.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jdtmtbhu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163aujdbaoz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qwykiaab.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rbcdzkoi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rftloluc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163uvhodull.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163zovcvfrp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vgxnqnar.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163aybozlwh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163cnngonqw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163dcjklpfw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163sqixdinb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kpvloykv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163suracyqr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163bpqivzpa.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163uphmydnn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163oevdqjcn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zkgkmxod.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163szzzozpr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lqvbdxxv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163jrkrfpix.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ixrknjbr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163mqisnroy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163pphyqiqa.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xmweghqq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tiysvxon.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163fsourrde.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163yzwrsfne.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163jjlivutl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vyfcjlkd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qssttnnu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wekjqhmc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mneyykbk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163dmfbujjn.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ijehgcoy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163eiaaiowg.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zaglwwrp.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kgxywhot.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163rjzmfpts.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163elcfbqxn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ruxcyyll.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bdylyrvk.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163kvmpudcv.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163qecmsyen.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dwivqoth.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163enkzdqnz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163wusritda.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ofdcaahr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163heaaldaa.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163hdcjfqaj.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163zfkkgzcs.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163unuccyyi.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kfxvjkwa.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ogradxha.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163dtaebdyq.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163nsxdnzut.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163nfohsplz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hirpxsxg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ckgxnxmo.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163rabdbodm.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fmdfobvj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163sdnuygmr.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163wkojbvia.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163eevfrvag.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lycwyhgs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163makbrffe.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163izdeozqb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163vwcmmnod.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163suvnaslc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163lnevnxso.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163uujecrbd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jtlfqcyg.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lwfsmckk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163igbzxdpv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163hjvzouzo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163tzmahmid.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163anwqrwen.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163agctzwjm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163obfqlxpy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163clzebiyv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163szucmexf.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ffwsqwgw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163mfnniudg.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163kywwrdsg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163geuwukth.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163uqgetpmf.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tyvolknd.html


<!-- 参考信息 -->