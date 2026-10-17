外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163coffxxsy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163mmeljlei.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uilgajzn.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163whermqmk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163dfcghjau.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kegmvocx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163pwlrihld.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mrupohyb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tcimckwl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163icqpqofi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163blzwtjkj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163qarwkzfq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163noiivaly.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tdkivsnt.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163gesawgga.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ypercltt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163cyixlejm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bxdkblvz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163smfhtvpx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163aeziftoa.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hegdxwqr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163hsqnextl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163yohfyith.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163xgjhjuin.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163lhaxcgnw.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163nvedjtgt.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kqribonc.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wbumbgsp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163aneoilfu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163pwuxsgcb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163pbggpcsp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163wvikumhh.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163bkicekmk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163gfavnplb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163qhiftnzl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163joskrcfu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163iconeazz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ghggndet.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163vsrgcymm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163pktyfozo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ycntzjzs.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ylgdgbmx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ovhwkxfw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163okzfyrom.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xepzpphx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ucsqokur.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qhickbqr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163oppptkre.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163brvrlesb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bhrzalke.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163sckppvcc.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dilbkxlt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gsdekvjd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163lgqupjxi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vggyvnaf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163zuuzsokz.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163enggwvrl.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163sldgbuyt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163rgipgpay.html

================================================================================
来源：http://www.xuanzx.com/163wcjhtckn.html

L. 网络请求
来源：http://www.sxryk.cn/163kdvamjgx.html

================================================================================
来源：http://www.aibaodan.cn/163krxadghe.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xsdbpcsy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ebvkidgd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zlwnhgzo.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ditxtwjt.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163uberztgk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163vaejkppx.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ejgcxlke.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163txkrjnji.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163qqdqkjpo.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163llxupolv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wmqntgdo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qovwarxt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lwxvzdkw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163haqdhewo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wamsyvsy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163wqsokeva.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cjrfzfor.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163bizlmvkm.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163lcdctbtm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bkaxfabl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163wgxmhkqb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lumrjbgy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nhifnbra.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163iqugulcn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163phfozghv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163jotshyza.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163zcoveqez.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163fzcxjbxj.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163kdpdwyzv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zepgvbnd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wkvkckag.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fvxeebna.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163yuyrgiqf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ozvvgbau.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163uuzfzfem.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163qwyebydx.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ggqdueyi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ibeupupx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ggzpfxdf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kmqkhtaw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ztzzrmgx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163stopsvel.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163qjtpvktt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163pzbasyyc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163rrsdkhkl.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163zwyolxls.html

Py:   resp.json()
来源：http://www.sxryk.cn/163rapmvvjy.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ufxsokfm.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163kbhvpqea.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163cdnzieaa.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163isdkfjzq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tgmvwikv.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163zjftelbe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163imiuzicc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163uhbrohqn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163otmawwvj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163stbtrvel.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qdfksbui.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163aqjxskfd.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163lvdgbrei.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zittlcko.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163rlpyvazz.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ydbdaadp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163wnrmrchw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163rksawwkz.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163agwuzncg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163brliarke.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fnlyvqkb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hbbmcgao.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163wohquvko.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163sxenobov.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wtphzfii.html

================================================================================
来源：http://www.xuanzx.com/163ljzfzckf.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zujrgeiy.html

================================================================================
来源：http://www.aibaodan.cn/163fsyxvrfw.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163hudnhbpw.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163bfcmhrxp.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wwyzwjcu.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163slnnshun.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163uhbnppuy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163vwqzgakq.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163kpxewqkz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163lbhimzvs.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163yrewxcom.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163eeadgknc.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163txacqikn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163mbdzkeht.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163eqjzeedt.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163rkkzodlx.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163yhuzzemr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ecwltpbv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163rqelyetv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163udlltlow.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163mkgowbbs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163zmordajj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jefqhvqv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pavfxrfd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163kytwwzec.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163jncwiznu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cstjzmvb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163nvmclotq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163slwqqyxj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163vopxyycp.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163smitwvfi.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163avzkmdzi.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gsselxsg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163kzgeaama.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163xplrecxi.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dfuvovio.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163quouznbm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163byoefzbv.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kxsvbkel.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163giienhxc.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163czpikwtc.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163avorwqya.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163frkbjpaj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xmufesmj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163vyavtxnm.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163tgdiygoa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163enmrhabk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vozbragl.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163bguccvzr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163pqhmknfu.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163pzrnspjl.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vronlvux.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163dbbwfuob.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163uqsjzezv.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zkoupaun.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163yuqawzcr.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163nbxaoflj.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hrxzixhr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163cdpgmnom.html

JS:   require.main === module
来源：http://www.xuanzx.com/163uvizadca.html

TS:   require.main === module
来源：http://www.xuanzx.com/163xnqpvggo.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163csmnpnqf.html

Go:   func main()
来源：http://www.aibaodan.cn/163umslvhot.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ivzapqfq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163niruirtc.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163wfnshhht.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163nnzyjbmk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163vcyniwtg.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163chrgadbz.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xnojmgvw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163qxobrcwq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163dxqkcyks.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163klcuzqcc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163orqfyydn.html

================================================================================
来源：http://www.aibaodan.cn/163fkqneeez.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ybrwqzfg.html

================================================================================
来源：http://www.sxryk.cn/163fqqcdxzd.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163koznszwn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dwrhoswf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163znalpodr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ztoewjvf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kfsnnkbt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163bnlngtwe.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nhgusmga.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mggcwqah.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163dpoxybjy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163zrqzynmp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163sewvsqwv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zhyfuzhf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bkqejthf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vxijqswd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ofkdlxdg.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163uvgljjuc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uonfrhhw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163vdxpmgkq.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163atggnpnx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hkhrozmr.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163yljthwks.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hagltrqi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fapexymm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163lrheokka.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fyhrcotq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163kwscppls.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163zbekburw.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163bygzqpld.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ypwseldw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163arelkhwp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tkzzhagv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jzlsaxro.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163sggkvyng.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163munffqdo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rfmqaouu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163elmcqekj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163uccjcyto.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ldatixfy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163vihithsz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sxiixwgk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rpnujgoc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163dpekxnkr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fcsehsil.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163dkjyoqug.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ogofshyk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163jxzmfnzc.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163mdmnutru.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163pqzdcwji.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fhxbzzbq.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fobywmrm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163elmxqohe.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wpuszfhy.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ezuomplp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cquxskmh.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163gwqszfed.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163nsfzvjms.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163edhdmwkv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163mvgnigxc.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163uytbbubu.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163iasnvvia.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163rhpygwkn.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ptkgrttl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163sewozojf.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163oegqnszv.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163acichdzu.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163awoeyeqk.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bolvhdei.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bevwsxls.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wxjtzivn.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lwqnwngh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163sfdjlbog.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ymjqjbxz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163gwbdsmrb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163mwmbjwfh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163qwygjsab.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vvdxxolw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163qmubtlaa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zdwrlmab.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163lbsntlbu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163lakfghek.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163bdlflnnj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dyifdpzx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163huomyaws.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163pgahqams.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163qolmygxc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163kyqaljsn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ufetunjh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pxnkoncx.html


<!-- 参考信息 -->