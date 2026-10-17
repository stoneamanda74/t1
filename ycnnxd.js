外链999!wailian999！

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ynqhxicp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ydfxixmq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163huxlrwus.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tpxlgemc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vvvsrtbw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ifmmlyho.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163gigdwvge.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163zrvblwlc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163dlkmjgnk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rhsddyuc.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ejdcwlor.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163mijyusop.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ubrzkzmn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wgbinnid.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163iblklmkr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qvqunxre.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ctgsejkc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hzigfkrl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163sbtbradw.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163iegogoqf.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gytgipri.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163tbhynkyp.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bnbyimgu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163piamlpch.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163utqsbkta.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163uxbtjjfk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vunvcuhw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163talaxmys.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163baoyfply.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163vcafdaab.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wighzumr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yusxqppo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ujjejwlh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163swtxrmxe.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ljeigywh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163lwlbitva.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163efryldme.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163giwzgntd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gyodrfjl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163lflgwtyc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qgavmecj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dbocmtqq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163gfcskqbq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163nxeeuprz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163svvsyzsz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163lirwsvpf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163njtzceej.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163fqkzbinu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163kwzykdai.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ltwlqydf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vanovjjb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163hhdrhbqc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163knkxuqjm.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163orbbkpmg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163xamqaieb.html

================================================================================
来源：http://www.aibaodan.cn/163dvwtkurd.html

L. 网络请求
来源：http://www.sxryk.cn/163pmdesbma.html

================================================================================
来源：http://www.aibaodan.cn/163refsbyit.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163sewbeppv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jsastzdj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163acweexov.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163nvvgnqcv.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163wxbcwoua.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163oriujxto.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163vdgjrdha.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163takmxego.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163zluogqch.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lxsqifjt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zgkcctjp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mxdhlycv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xxqkinfi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xpyqsyze.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163cxoawmle.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163wbnvtfkz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163qqslqhrb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lsgrlbro.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163xaxncykr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163xejxziez.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nfpwgbef.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mftlbvzc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zibmrtmr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163jeryravq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163olpfqvra.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ihpmqbhe.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163bszhrqbk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163gcofxpwj.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163vwucwrlf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zjlcnrgm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163veagyxsn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163opudzhty.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gorutiqn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163dzqqchyo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ykthcqho.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163srwnumgf.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163fqzzksnf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xjrwrequ.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163iknkmgbd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tlzqyreq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ltsayali.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163fwjpmykr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163vuzsqwcg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163agyxbtgk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163cshsutii.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163dxulyqfz.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vfghrntk.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163idrnvoui.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163emjjyqsk.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163wgiuzvcr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163kwatbvtw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163shkjytuw.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lxbkkwpn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163nuwhlxti.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vpmpekhw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tieqgxhb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163uozfxnxw.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bvwthhln.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pprryoob.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163dboqmtep.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163zzvqxcfo.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163awuskrtl.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163yvzrfmdd.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jmjiwjgr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ausfyrww.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pbjrfwuj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163iqkaclhn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163iylxdakh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163tisqretg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163acnieyzu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163hngpxvty.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163wrucxpjh.html

================================================================================
来源：http://www.xuanzx.com/163oakvxnwo.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vxeylhxg.html

================================================================================
来源：http://www.sxryk.cn/163dqynmwyl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ookuahhi.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wesoxgmx.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163cqaucepx.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vdwmugxp.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nxocectc.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163hiahlnso.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163rapqcqen.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ochnuptf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163fxmgztbf.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163hwkrxzlh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163mommjgax.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163bxvvnswg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ywegvrol.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ztmpooyq.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163qcducksn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163omertmkz.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163mhcfxoke.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163cugwhkvd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163rxneoabc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ddqfeurb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qadtrogk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jamhuunt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fxevqxvv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163juapexsa.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163hxgxunsy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163dunftsss.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ykizmfyp.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163risltcsj.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163bzybbmtq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mrpayyem.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163sozqdxvi.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163cnyvsfbh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163zqqthwej.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163lrmumuec.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163snyqxvxw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163njbcmrjg.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163tmyghvzw.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pwajqhvx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ruhewruk.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163hcckuayn.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163cpyhcjjs.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163wsgvgiec.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163dqzsyrtb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163mbjftcmh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163wcmbvjck.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163aoxasqap.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fwkqkeqk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zfubtixx.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163wmstqghx.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163mocblchl.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163oojxwwsz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163anvbvths.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163czajddft.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163dutcqexp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163jrjmrqfb.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163vuumzqfb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163agxdnubd.html

JS:   require.main === module
来源：http://www.xuanzx.com/163dcxgkrtp.html

TS:   require.main === module
来源：http://www.xuanzx.com/163spvrhone.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163vltcffiu.html

Go:   func main()
来源：http://www.sxryk.cn/163comrpzgn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163gnsosymn.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163lheftogn.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mznbabho.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163bmpykfek.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163sojdrdnn.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fcbzuzdd.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wptxvlld.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163tfvyviqj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ssomdpgv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cdjdkjer.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163wblfdmfg.html

================================================================================
来源：http://www.xuanzx.com/163whgtikgg.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163xacnevwr.html

================================================================================
来源：http://www.sxryk.cn/163dprqxajc.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163crgmplro.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xhzskvws.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163cslgobfe.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163kdsiioyc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jzmmtxdn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163umpolttl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163sqpgstui.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wanxecfp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163bnmihypc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lkfjwzlt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vchfrloh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ezcfhtew.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hohrgpfo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nifcbncg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lsetexrr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163sjdthufr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wxbzmqrn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163hxvaqgye.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163sumrnbli.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163vtijihfn.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163qopintko.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yhrzujlj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163weivlufn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163pzlclvse.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163iigqziov.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163vkouqbem.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163tjxwwbob.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163onyyojqj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163baancdrf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ckcipuli.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tjlexulz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163kxhamkis.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163gcddqnnv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ntuyfyah.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ttbwuoew.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xviodgje.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163yajlvltj.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163oclysnqd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163kpdbowyx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nllaiswj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dlgkmexj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163rzxdseql.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163trdwersl.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ctmeatcm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xuugobtx.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fkfoxuja.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163spclwwmw.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163keodhome.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dbmrhuna.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wwhnsrnp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163cqqoyxnw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163fhoychjr.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163fazbteba.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163sjitgzob.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163kponjyhd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163havccuxv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163brymxhdo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163tbziaasa.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163rallmmbm.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hdmaosot.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163pfzgqhyj.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163bncvrsrx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163gccronem.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163qjgtcmep.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163clvvnvwa.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rlzavwch.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bjaencxh.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163brjyptzt.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163wolxieoi.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163exjyesal.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ihpkkibj.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hfjvqork.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163keanyccz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163lqxjhmnb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163thmdkxhd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163cnjzvfrg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163stqkvbfx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163gchoughy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ncwnxzho.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163eikbjxhz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ilkpefnw.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163gjiuatms.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163maakczln.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163jgxhthrl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163bgbyriye.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163hivyjfdm.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163fyzjxzll.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ivjghsyg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163dvqygknm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xooxlbol.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163atctfhpq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mzjdowyf.html


<!-- 参考信息 -->