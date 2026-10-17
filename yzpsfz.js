外链999!wailian999！

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qppxfowh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163jenjnzcv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tmofermw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163yghwdpvt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163upfpmpdo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ccyrbbhh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163htvrwdej.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163gnjdmobd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163mxaoktak.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163qggwjygo.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tncpemqc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qdlayjyl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163fngpsgpc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pdenwmow.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ixrxxvtz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zrpbwvre.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fagelrfj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163jxhjsyhb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163arrxoudj.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tqbtqcvg.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163alimjdar.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mgnzcnas.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tlccdqqe.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163spszqxck.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ghrdwdfm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zediabdd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163gsdldqcu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ppzwmoxb.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bqexjnzl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rzoguwwi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hluveveu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vcnmulrd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163htazpzpj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163rdqqfbnl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163wyqvvgdb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fzyqaeyl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ucsoolqz.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ppehevgq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163uxonhgbr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163fmptqtii.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ngurwwud.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163asdbijpz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ubssucqe.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163tqlxbnxw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qdhlywzh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wimbccyr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163zorrcrfn.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163yhamewjq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163uncknkue.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163asfrxpvx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ennewevj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163jdlnwcpd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163lyzofxyi.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163dtknidlq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163anyecpvh.html

================================================================================
来源：http://www.aibaodan.cn/163irvugbam.html

L. 网络请求
来源：http://www.sxryk.cn/163nphtsuoy.html

================================================================================
来源：http://www.xuanzx.com/163qdikqthj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163rexfjksg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163fwujqdfc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163puxkdqyg.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163eeuacyzj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163grdmhgch.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163rincsafp.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163kijjcsxh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163zbdhzxzh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163arixhdmx.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163oxodgomc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zvuqdxue.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163tsoueful.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163chwokzjk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cmqhgyie.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ogebmkmv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163kimdvcsk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163lhqyljrw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163bqsffnph.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163qpeieipt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163llxngegq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mappxmxp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mxufqkus.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gfedgxiv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163rwiafcxw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163kujuqxqm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163wawjlfyp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163dzzclghe.html

[L04] 设置超时
来源：http://www.xuanzx.com/163uzhdmypq.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ecffdgoh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163uquvepoi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mmllzgrf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zjclglmb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163survdxvy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mhdqgykt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163okdbtfsm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163pvwbhrtq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zefanowg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rtqzlkcu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163pncwaipv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yxwtnjfn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vagotznr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163kpqhgakc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tawiavqm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mylkfwce.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163tkvimxxc.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163gtyvohct.html

Py:   resp.json()
来源：http://www.sxryk.cn/163hudmrvbb.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ewcilccb.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163vpoxmmsp.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163hiduksme.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163jbakapad.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163wqcyzibm.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163fzahrmyb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163rfzkdfba.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163qjavmvce.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163neiccxxd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jajrqnrm.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hgaoyuus.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xnszckmu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163czgthffx.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qeymvcqk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163gotimwdo.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163wjnnytff.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163dsxokfft.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ydndlhxx.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ftdlpmzq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bpycgsgq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qdapassd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163yufsxtlt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163emxbsrcs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hactfxcz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xyqhohtn.html

================================================================================
来源：http://www.sxryk.cn/163jowbjyky.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163eafwecqe.html

================================================================================
来源：http://www.aibaodan.cn/163qtrdnkvr.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163gddceglr.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163enfmepcy.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163paibzegr.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ktpimmjb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wgmftetm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zqskqbts.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ngnoxudz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vlaeikqp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163diikejgq.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163efdtgqdm.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163pmfuqjup.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jwkkuepw.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zujjzhoj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163wqcjyzvv.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163cuntvahj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163baxnejxw.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163wzpvupod.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163dcstvnib.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163gpqulfuh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163frcehuln.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bjkpcuhe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ophzkypu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cfqkfwis.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163kbusnczr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163hidkgwov.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163alqshvzi.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163lfvqiumb.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163sfulofbg.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ymigszdt.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ogwugcxc.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163zwqgstzn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163fsbgkfgl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mtfjvppo.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163oocfmipl.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163eqtlreob.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163akczbqsj.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163calglgpw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163krjlrwec.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tjefepgo.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163otmhhvia.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ayclxhfh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163fzmlukmv.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wcmyinxt.html

Ruby: exit 1
来源：http://www.sxryk.cn/163goipdnzd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jbkrconp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163eftkmrvv.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163dqsvpnpa.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ocjrzuld.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ijosuguc.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wdotaiuv.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163zsibgcou.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163gdoelkfh.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163iuiazpws.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ckwoqxhy.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ikqprzds.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163fcifkqdp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163txhndjfn.html

JS:   require.main === module
来源：http://www.xuanzx.com/163oyfglvqj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163tbterprj.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ibodjcpn.html

Go:   func main()
来源：http://www.aibaodan.cn/163ourmfdjw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163pswjbpyt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163xenoudxp.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163pkoeptzf.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163kgsalsui.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163muhtgmdk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163npdnswrh.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163fhuzsmlh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rzfxmuqm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zokkbgut.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163fvwfwdbf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163kfgbwdsy.html

================================================================================
来源：http://www.aibaodan.cn/163timwwtce.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163xrtamgpr.html

================================================================================
来源：http://www.sxryk.cn/163lzczydvn.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163kmsalyir.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163yflujyad.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163zodlcvqg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zovshgrm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163gqhthktj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163heuwbqmy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163txgrbqte.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163wlddrktz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ujzpbyvy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163idcnnuup.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nrkxyskh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ykxfcjiv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163naoexawk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163arzzzsnt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wugpvswk.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ipoaifyv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gbwwylie.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163imkpndid.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163griyqhns.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ajrplzkh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rxaxqsqm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163nufenvjk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hfcglhlb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kjhabxcj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163zwcushxv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163xnirhwio.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163fcpdtxhp.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nknzbnon.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vpgxnigc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163aexriabg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ofezsnsa.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hvwmzpgi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ftkmzzho.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163thxwxwxg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hbfvzdmj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163nzfiqynp.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163bncikodz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163uzuxexgd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163pngbtfhy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pdqrhoeq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xobwihfa.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ssdqirgo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163xlrzujlw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163rergmthn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163eamwujov.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qoehafuh.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163icgdcynr.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163awgpezcj.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rlcvkqot.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lqnzvhmu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163glfukjgh.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pydavoju.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ppaishuy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163acuxzlsl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163pfqmxgol.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ohvfehqr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qwqcimfb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ammfyjnd.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163bozzulqb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163zssjrqog.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163zkhymnrx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163oxsxrcgz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163xdqbyagu.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163owpaptqo.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163eeqthenx.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163vswbbsde.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zmzngwaz.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163oairlwsf.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163icjdlerq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ozfmerbj.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163jrvtfdqv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163exocgvws.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163niuqchno.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163qmcyutzj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163pwcopzmk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163txcufegz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ifvwqowf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163lavvqsxr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163yymxuzhv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163jytfjqow.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163zneapkkh.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163pyqbsqtk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ttkvwkee.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163bhyyhips.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163rynictzt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163lqjbuypm.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163fptytjnt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163zgcqrkui.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163yaqzwxpe.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163kootsoah.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bxxumetx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163smtxcgic.html


<!-- 参考信息 -->