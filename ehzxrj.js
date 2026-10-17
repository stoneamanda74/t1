外链999!wailian999！

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163lqyczyyp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163wtuiavfz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jiyeletq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xifvkiwh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163eipmwoel.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163eidxlsbu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163snaipweg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163kaceahvn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163clryydlj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hcfxwxgh.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163zqvrousd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zuebeopk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163efgsyavh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vszodffj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163sugnnfbk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ujavvruf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163umimwefh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163puuyqnvr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163mslnsfoi.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ywqvdgzo.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163acalbhyw.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163qdvfrkoy.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xjmwlopx.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163puosxbgk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163mdcctyxi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ammtbuxq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ploffwvp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163agwkgnsv.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163vjcbfifm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xfiwdpmi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ihrysxsp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163duitsatf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163sxixlhld.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163airjjpdo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163syomaruv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163lbiyyobh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163qbbgpaah.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qzuugawl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163obojvksu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dkfreoyi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163btlbbxbi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cjqusfyx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mtmaspal.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ryzvcmyu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qtmxngsq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163qapnynqw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163txassgng.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163gqeqkioo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163kkjkxaof.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163httduaxb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ydvbzsbf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163xbnscztd.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ppbygxzy.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163rvfhhpgf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163cqevrgqq.html

================================================================================
来源：http://www.sxryk.cn/163gzuhcaxu.html

L. 网络请求
来源：http://www.xuanzx.com/163zqtqohwm.html

================================================================================
来源：http://www.xuanzx.com/163cbtjrxne.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163gerrzkpn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163byjoywnd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163rmppkxmc.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163tmgykoym.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163xzpzxxat.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rzilzyip.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jorhcuyh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jfidzkvb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163onlmqjrw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163dipgcano.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163oepvpbpw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ewkmaiqa.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ruqfjodl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lzrsifzf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163glevnhqy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163vftnftjm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163wrzmrgmx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163qrphobsb.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fqfpzbac.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163lhbkbzjn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ycchhfjh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dngdwnay.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yljmeune.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163hllcdlfe.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163nzqwvkkb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163czaahlji.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163aalkaoad.html

[L04] 设置超时
来源：http://www.sxryk.cn/163tjteszvt.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163wsrqkrak.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zafuuhss.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dcqvhafo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163uyxpacki.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163bhpregzm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ncaabikh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163cfehogtq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163xhhkrlav.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163msavlspg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163lftnlbqj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163avfgjrxg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163icpwmyfd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dsbnjxwa.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163honctzzw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163sfyxaolf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163qblsrwyb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163saxyubmb.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163dybugjou.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163euittkja.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163oljuqjwz.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163nwkbuhbi.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163vwbrwabu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163obuouzxd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163fkowsysh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xgcodzho.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ooqhwhmb.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163yyvdtqzj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rgeryctv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163deberkhx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cqjyfhmg.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zqcuqdpb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163mrvgaqwz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163dckpqned.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zqcxofvp.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wwcucsgm.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163mpndaohz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zxfbusco.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163tzptmwuv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163noskobyv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163losgvqqx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163kohixbst.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163epddpqwx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163djevcsax.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163haultdsm.html

================================================================================
来源：http://www.sxryk.cn/163yasmgwwf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163obzpvjwk.html

================================================================================
来源：http://www.aibaodan.cn/163aartwupf.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163hxdzpqfc.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163snzrhrio.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hxzakvko.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163naxunfuu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pgplpuak.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163brqwbvkr.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163hadevvfi.html

Ruby: ARGV
来源：http://www.sxryk.cn/163xcfidatm.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163dfvwemgz.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163pwdqhfcq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163dakeaymu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163xpjfjoub.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163escvxnwa.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163xtekpuhz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163owlyrbxd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163bowmvwrq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163xraqxkat.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163kbmozbdm.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tfyudlcd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163vnecoxbz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jimfekyl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163eusywzqs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163crtsgpmn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163exzdwiql.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163qbtebxjv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ectbzrgk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163sucamejj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163geixhzjt.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163bdhtbclr.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163dalpyvxm.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wcylswkz.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zhtvilmt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163qfpadhli.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163sllsnxyu.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163dtsxdwdp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wzeighie.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ujcgenbq.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163dxajmcqa.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zuvhwozv.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163caqtryuf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163szthndot.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fiyomuuy.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163kwlwgvyv.html

Ruby: exit 1
来源：http://www.xuanzx.com/163abtnwvvb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163dknlueup.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xxaibvjo.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wnuvanwk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163hlocisaq.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163makgqufx.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163cpsjnkyl.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163oidcegwk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163pgniupvf.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163kzvnkfzh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163sirhjquq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wclxoxyf.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163flxazvtl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qskfgwtu.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jjsevngb.html

TS:   require.main === module
来源：http://www.xuanzx.com/163wuaxomhc.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wynihjsr.html

Go:   func main()
来源：http://www.aibaodan.cn/163hyppzlyg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163mrervbfb.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ajwqwmbx.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ncsvvxnd.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163inebjdox.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ibbqbviv.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bkzpogbi.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qmjixtxo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163dbafoina.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163eulvsshk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nahfcjhm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ryfexegd.html

================================================================================
来源：http://www.sxryk.cn/163uemqgwev.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163srfehcju.html

================================================================================
来源：http://www.sxryk.cn/163oejnueyk.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gboiuqwv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jiurtmju.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163usnzbjpx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163lfmsubzk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163glqkwgvo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163gqesgpes.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163lthuxuuh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163xdcwsmag.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163pdgyloaz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ojbhiziz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pmwfezwr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ajpenhlc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163keeymafs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fdmrgwvf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163zbhnvxud.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163awboecwd.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xhrxvivt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163kwpkwhnf.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163eghzinuw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163yodhkwzj.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163cnetmroj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163impqvbut.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zefvvooh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163vcpqfuvy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163yandnbqc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163iiouoqhk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163vvnmfoog.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163jsostvug.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rzlhpowd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163bgtxndzp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qdggxskc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fzikfazv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bnxxooyj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163oplnsnky.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hptjjaiy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163deuhaxki.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ujfbovnx.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163wujddgdg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163oeujqbcz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163htubrfkn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dexoyvqu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163xcywolkz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163pwdalsdz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163qsxfshsl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163jbrbspyh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163abblfsfx.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163uuydhlcz.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163zkicdwij.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fopljlbt.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ejvcrnsl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163hiwqkmpc.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163uozcfjff.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163owvmobga.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nrgjnvmj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163qojmfenn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163hvqsldvy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163rszvtpho.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163nroyxfwg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163zbldkwbk.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163cjwnsrwg.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163oombowls.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kblbvfrq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jtmgrkyu.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163kvairkhq.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hgbmiwsu.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163oiftrpzl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163pgkfqirg.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bwcndceu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163lweiiceu.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163vxhaqcry.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163fqdtjmii.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bqrshgoc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163jfyntinu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163frfvtmyb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163dnckgkue.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163yhtfqoof.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163rksbyyzx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ocwbghbb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qiyeprkv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163thtrynov.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163terhxtmo.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163nicijeby.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163arputaxn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163reiqsejr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163rkhhongl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163jlljbjhv.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163mmvjryee.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163xjcxqmuk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163vxoqtktn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ucdigbga.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163wtkzzvjt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ywzymgch.html


<!-- 参考信息 -->