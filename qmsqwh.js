外链999!wailian999！

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163vwgttdlu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163cafzubhu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163irhbsqse.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ddtaavdi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yfpmhqjp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163sxehgkwn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ynndpdlb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163jjjqfidf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ytnoxwef.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163vnftttjr.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ysyztmuk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163tjpzlkek.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163lszdwksm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163owuncife.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zqnxehpy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163aplgpdug.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jqiqkuxe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163laqzksjw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yoykdbrd.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ollpsoss.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163gtmogclh.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wqcandyj.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pprporyf.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gbxqnzya.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163aoibaqtr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163fbukxgpw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163tutjrywy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ikvszboj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163awtopuir.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qfjujkol.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163hglhwwnx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163egghwfai.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qalvbbhu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163pjjqnvmw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163gseftccs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rszmdnbf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zxflfwio.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163hsytvwrq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163suljceyc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163xvfvvqdr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tmhjvkov.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qdlhyqqe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vhfxfibz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163fxexyuoe.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163sudptmmg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163uziddjzu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ymuuqqlz.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hhnwxdfj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163hcwxbdmd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nzwxzgyr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ftzzghmv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163aumxnwjf.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163akbscbcc.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163czgswgug.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163wnjlyqfg.html

================================================================================
来源：http://www.sxryk.cn/163aqlyarbr.html

L. 网络请求
来源：http://www.aibaodan.cn/163omsqkkpx.html

================================================================================
来源：http://www.xuanzx.com/163rziypdwq.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dbsbncfv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bxjxsqpy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163heaczhty.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xrldftyy.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163rdvovynm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ihplibhp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nnndgglx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163huvfbavx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163pzzvolgr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ahqcvvlr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163tlquicdj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163gajjpxbh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xxftmeok.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mebdsglh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163yvxkjyhp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163lcyvdfpq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163mdqkysrq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wvqzegly.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163nvmowchw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163fraohblw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163wjjbnois.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163cftotwzg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nslzflqw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163oeswsflz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jtvfxfms.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163mgbktoxw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163uwjrboxy.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163hlgzdhxr.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163hmboclhc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163nqohaqqm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163behwzlgw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gqnihzyd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163cwwhrvpx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163pxvstjse.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hkuottfd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163bawklxut.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163gavfjppr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ehnjkdsh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bjycqfld.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qwpmwbxk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wpkqomwt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ucpqngej.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qofilcnm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jimpjxxh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ndponeyq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163uyplximz.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vibnfgtn.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ccftusfb.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163grmmlyac.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163kunifvvu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163pylzzefy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163aegeoipq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ixbosmyb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163atbjlbgk.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163redueiqe.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163iposekbd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163bqppggfy.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vumdpxix.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lwbjifyf.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163huunlaxj.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163maowsqyw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ftjousqo.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rnhnpusy.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163gzrsamsj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fmozmzlu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163clkltfzc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vklsjhem.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lboswjhq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163wvffaxkn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163slgnkvtv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163kragbcyb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163glsgczbp.html

================================================================================
来源：http://www.aibaodan.cn/163bdhscaym.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ojvubpvy.html

================================================================================
来源：http://www.xuanzx.com/163xmzxzsfm.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vyytrinp.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163yrgbmqhl.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jffpiuln.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wlrjhcyo.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tknstbsh.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qnoswtcu.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163drzvehpc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163gbjqxufe.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163betpifov.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163thvhqmfh.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ahchomee.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163hfhhjbfr.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163sqpuzcgy.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163lqsfnwwr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hjovhbpw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163jvrfslnd.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163xlcwofat.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ccuejtwx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ukemcvnb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163lvtqfmkr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rzvmouvo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163awueeqyg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163eqhsmnmj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lwrkpitl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163djsqeaaf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zdiokjtf.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163bdesngrm.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163eqxlzdkz.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163fpgejesi.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163cyggkkpu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ziynkkpz.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ujqkbvfa.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163fydzfgff.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163genkdiah.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nepbjmjc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163arziakhe.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ypgymbee.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mgvwbash.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163iodiaymp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ujzbplzz.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fmpfgwni.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fhondgrv.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ybgyhjqh.html

Ruby: exit 1
来源：http://www.xuanzx.com/163lljbyiad.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163aiscwwoa.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163kumjruqx.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163elclsoiu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163whhtlcmj.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163werqsrxr.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163dchhacww.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hcdbtmcs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163tzahkztu.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163rftzxsxy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pvuadfbv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163szibyywy.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163qhacldtk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163asfyfzzj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ddmtrtds.html

TS:   require.main === module
来源：http://www.xuanzx.com/163nekopzpk.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mrushhsq.html

Go:   func main()
来源：http://www.xuanzx.com/163wptuszmb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163sliukbpx.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vayfavms.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163gdtjhzjl.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163cjkknbzv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163yfalxbfi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hraqlbfu.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163levfuxdw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jrqvelsb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163mljmqnqj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163fpoynzzs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163hyiitafh.html

================================================================================
来源：http://www.sxryk.cn/163kgtnmgus.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163jztvhykz.html

================================================================================
来源：http://www.aibaodan.cn/163nedhskrs.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163yohqudob.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163lnumqnnn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163tkzgndbp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ptlezgni.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163obkdtmob.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163uuwbhtnw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163icmntrwl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qkhhxwpw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163jtgqemyf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163pkqnzuap.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tvbmbqlp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163juexeaju.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163agoaawqr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163knfmorzk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163lpmswfuf.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163wgvpoquo.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163gpslqydk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163rldmjjuu.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163cldmawfc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163gncpkuci.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163hrbxstyp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lidntuga.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163aqtxnwhb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163czsyltae.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163yykythad.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163appaskea.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163grddrnzt.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163wmvfgmiy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ojvksceu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qzlpdjuq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163offazrrr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fghmaayz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163pxlgrzqz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163salxvgxu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qxhymstv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163akonrmdp.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163vmfqngny.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zvirwgbi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163fyxgslfv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ftxgohka.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xohcelzf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163pvwstvhy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163vobysufo.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163xrmegicb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163nmkwciji.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fxhdlamf.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163swnmwwnc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163yompjpeh.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jsgrldoi.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yyfirryb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163raihqmnq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ztthgakl.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163nimsuvjf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163osarssir.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163tmjrllfq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vpfoahvy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ctmvwyzh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163gfpnkogf.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163zlajzdbj.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hsglsecg.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163cbpklueo.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ogzwjreg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163yvrnahix.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qyjpssqg.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163jkxboacy.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163kbfftiln.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163iyoamica.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xylietjk.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163pbvjnrus.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vdjsipga.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163iaujniex.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163vdjfzonc.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163yhhbxofc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rtnufyrb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163utjjxgqv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163isharexw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163gezwvxzn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163mhfnobht.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163kpajicaj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163weebuhwo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163fhtpmfsr.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zyharffb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163nqjwwcco.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163cobrbect.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163jgommcox.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163eaaygfpm.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163yatxnppf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163kdagdibp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163qpnddtzn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163wnzjzlkf.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163zobjvilq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163hscoyzwl.html


<!-- 参考信息 -->