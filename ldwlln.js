外链999!wailian999！

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163uiywbeil.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fepzxaye.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rcdkgnbd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ncuxfdge.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163eerffhti.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mdorwpqb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163pfhazrao.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163leszqwvz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163mzkpwauk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163swlgxihu.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kragxynx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ajkwwaim.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163exzyrdko.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gytssvnc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ojdzcguu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163wlpmdwhl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163recupfjo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ovmnujkx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163efavrwlt.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163pfvipxer.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ottzvxmc.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163dukdirje.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mbqozhkj.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163szeucpvk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wewjtjem.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163roabonbp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163cvevzxkl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163uencpirj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163vwlitvjb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163pgpbeexh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163kgfmpcrc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mmwwuadr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163owkhmkzi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163nokwvxvr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163fyrujmes.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163zbdgacms.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zlrbfujp.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vjgavbvh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163funjucgr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163grpofurr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gnclfnwl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163urawiysl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kfalrcpp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163mnjjpryj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163neazqmyd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kbtblpsp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163dpcpxqob.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163euyhgjdr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163awkffkln.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163yxmtcqmd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wyftqyqn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163eoabblgg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163vrmagwfh.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163zcybvdrx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163wfpdbkjs.html

================================================================================
来源：http://www.sxryk.cn/163oujtdzbj.html

L. 网络请求
来源：http://www.xuanzx.com/163pksezoot.html

================================================================================
来源：http://www.sxryk.cn/163ijhoqmth.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163fjbwmesi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163qqsmqgfj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hfwbcibt.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ccaaijjh.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lmgughwo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163oluwohtw.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163lilknstm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163brxnbrvm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163olzapuka.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163okpelvtz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hllbajmd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163wyejkkjs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cweqsqqm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cgwvciwe.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163xgmttvka.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ztlosals.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163zpphktay.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163klrkemwb.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163rtdfqklk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ljfhzyeg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163cuumywuc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ujebvnjd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163byqeydds.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ketmtezm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163xvijqktd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163prvlebxs.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163uawplsmd.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ihvcshdm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163kpzldclu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vtlozqzu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qklhhwpc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163neggxoja.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nmmywmkt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163scowoqav.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163rwsdquyw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163xbzrtnsu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163vrneyepf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163mgbdaxaa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163kqocpwyh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xlbjlmaa.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163udhcbzds.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kpfhzvrc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qrofafwc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jbqjqxex.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163wopkczts.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163eoztlnhm.html

Py:   resp.json()
来源：http://www.xuanzx.com/163qftwaadn.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163cygvvhzz.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163doigpaup.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lpxrwmbi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163oxhdgraq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ecsvrjpf.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163pygjqsix.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xaaugndy.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mlpxzpda.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163bpyfpmwo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163cvsjcehw.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163redjezyu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wxdirxai.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hbuwclpe.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163nygftxut.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zjpeuhtg.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163aydsztnk.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163uoctlquk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163lguoxagy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163wblbfnoc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dftsftrm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fqpcmvom.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163qwdpbaeo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163bbvxreaj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163sxzoxvgn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ktnzsfrv.html

================================================================================
来源：http://www.sxryk.cn/163nmpwwpqe.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163vwmenqwp.html

================================================================================
来源：http://www.sxryk.cn/163eariiwko.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163shyrphww.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163sncnqxdu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163xafwlbqk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jdzlkoif.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ucwnkpnu.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163vnpusgkv.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ezecjgzh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xlpaaftb.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163wfjlvlie.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ajnorcik.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163jpmmwuai.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163qjuxjajh.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163kuseszkz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163eaiigdjl.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163qcrauvng.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tqylkgza.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ywbixolb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ggcmoqxw.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163bcrtxczs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163pgpwyrju.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163kokhpkre.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lwrshqmf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163fvudhahh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163cwfnsorp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163alzdvono.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163txamgsuc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163dffmjnkg.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163clvndsee.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163dicorvmn.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ynhcfspz.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163njbluwch.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163yjrzzqlt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163okdfohfe.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dxxtoblt.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163pawkhtth.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163zjcsqzvn.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163sdqtchmc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mscctowq.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163cjyriklg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163etzmgnhu.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163blpdclue.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163duizjtgs.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163cfzsyyey.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jilgywaw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163jzbvawxb.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163bzilklyr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hvmbjujg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163teasdrgs.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163shgmusyz.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163mwrddmiz.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163jjdovrmr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163uyxcqteu.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163pcgvxeke.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163adoerxpr.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wutlptwm.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163dfxkgize.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163cbpnlsrw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wkpkbexo.html

TS:   require.main === module
来源：http://www.xuanzx.com/163cjghrqvm.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163rqusqwsq.html

Go:   func main()
来源：http://www.sxryk.cn/163luuiavnd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163zrczulaq.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163speqryxt.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163iebajbui.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163xzqdunkg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ejktgtlz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163flyreyjt.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ntcwjxtz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163uzbtxrsm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163swsxjwme.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163pzpbcpch.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163swnyqcxw.html

================================================================================
来源：http://www.xuanzx.com/163wprebxle.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163smjvasec.html

================================================================================
来源：http://www.aibaodan.cn/163aadsktoo.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vktwkknc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wxrurpym.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163sucgyglu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mfzmfekn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163imguhrum.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163xgkbkcqi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nxcartzu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163zasobkdz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jqrdknnm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xiwuargi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163frpnmekz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163oanqszqn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vfxtvmvz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cqwsvymj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163uzrioldc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163lrdesvgz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uzuoodln.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163hobsxwtf.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163vuwqfizb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163fgmfrcxa.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hamfjlgu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163deaoxjma.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gppyhkyh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163otbjygrx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163idlxunpc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163yftbdowm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163annswiwj.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163tncfhegh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163bkzovcrg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163bhuhqdqm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163zekimdxh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lkfxzunb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163tyqsvzqp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163deqsqqcl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zivohonh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163qcnxtwdx.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163caetqhpr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163sqcdgkba.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163iyurjksf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vfnbxcea.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ujswkmsz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163uptqocju.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163aeqctyrx.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163doguxnzl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163kfevbkwu.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163gxsqnpiu.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ricwraqa.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163uwkdiuuf.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lofnovau.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rrpekyrr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163quvjppwo.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163uwhjubpj.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163xbaruiaw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jlbrefaq.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163tpmrirek.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ofobbxus.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163gtqmpdbb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163tdujaovn.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163hohoqvhu.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163fxsukxli.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163mkrmxvbm.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163rzppgydr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163kbygtvns.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ptphizwn.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163cbciwznf.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163sbzlkikz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ujhlxfwi.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163yjlzviwn.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163pallvpyw.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ttcfkgev.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hsihkkrr.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163rqwrjsao.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163bmyqqyos.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qsufnuqy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163gdfefatc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163bdqkyrkf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163sglgzbef.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163cceuamwh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163otggnbmg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163qvlhzdmn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163evxidfkb.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163dezubnyi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163pxmzrdgz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163wywbhejd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163qifoqykv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163werkblln.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ffirrthq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163lcklclog.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ovpeegag.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163miyybevy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163srrzoxzl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163qxpljneb.html


<!-- 参考信息 -->