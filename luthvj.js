外链999!wailian999！

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163gjmspzmt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163zrvlboxw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163nmfhhqcv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163udomirij.html

================================================================================
来源：http://www.xuanzx.com/163pjabbqpi.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163tktkdirf.html

================================================================================
来源：http://www.aibaodan.cn/163uqrdhgwb.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163katnawnu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163hjdyivis.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cfaqquxa.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163untxwxbp.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xkvrvyxz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163qgflekmo.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xesbhojk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163xpbjrfyx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163bzbdrvvd.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163pvkmogou.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163chvzdeym.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163modhqvik.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kddsbrim.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fwfmejgk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163rtkvwsrn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163smmjrucj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163qzggagpt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163lzlbruqd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163igbnnwim.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163uzmlgxjk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dighktvb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bkfvoldi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163uvqqscfk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163badcrhup.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163olxhdfyf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163abqkvxes.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163mhkgcjkd.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163jcodezls.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ncurlllc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163gxrbbknj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nlxifcqi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ivrksssw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163kshazzyi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qvhwstaj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zosneduo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ikqupzgx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163vfynjntt.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163axrupftk.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163tbrdtzdc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vuijoyfj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ojilcdis.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163vlnvxzxy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ivkltzcy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ntksiuug.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ftatbzww.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163czafxarh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163yivogzkx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163hwjourbh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163uzpfdmzo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vzmprunz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163planxxrs.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163sevlfhnj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rerhjhuj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163cgvvqehl.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163kzjkdbnd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163qgclipnq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163aqaictpz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bbcdcnvk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dlamiocr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163letnywji.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163wtkgcuns.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163uqzvetsb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163oijkdwjd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ovywwzlv.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163vzzdxmys.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163rngoyoew.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163htfkqjhp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mwrkxgvd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163maaetsni.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163kxwpxuig.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jynvkbvn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163uagztccc.html

================================================================================
来源：http://www.aibaodan.cn/163gfslkrnq.html

L. 网络请求
来源：http://www.sxryk.cn/163fhnfvsaj.html

================================================================================
来源：http://www.sxryk.cn/163ofazmuav.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163vittmxzt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xmywafum.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163qikffttb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xvwqjsmj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163mvvktzsp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163sbzkowwl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163eldrdmrz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ycwphmnj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163oevofpls.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163skrtvkrc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163mcbjtqba.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163yhglxusg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zdtlmztq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wgmjuqxl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kgijjlvs.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163gmxqsnwx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163uhvbuibx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163xmbedxpr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163lymtdvys.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163csnawnoy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163trmxtdof.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tpdmlamu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dboyjdao.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163wtypffzo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163njsxajem.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ffjglylj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163fhlxzogm.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ijpkvyzg.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163cxxwbthd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163mqcujdsh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cawyvimw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bedsyyix.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163encmdqvk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gwvlldxj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163lgfntfqu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163yitrocdt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163txzulxpl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163yizibahq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163nlekjdfq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vbobzniu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163caixeora.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163rfvfiwyz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163kqmrznbh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jwvvutpq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163thyfekcf.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163xbgamvil.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163rcgxoonr.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163cfdufkhj.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163srulgjnz.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163sgiosvoe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163udehzhwi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163shjqcxbi.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163zkkllqqu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163rvrmhkgh.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163omxkrxtg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163bnjnabts.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163iyzhkusj.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163aboequdg.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nxgelgeh.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163lvxzvkil.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163xiarknnm.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163sutbsxye.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163loseazdj.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vhfjhjwm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163svootsvj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163lrqxhiug.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jyofoweh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163phjbzkhc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163odgbyxhn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163hgtpftsp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163muhfijvo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163mvbrbser.html

================================================================================
来源：http://www.sxryk.cn/163mprvgvuk.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163vrybklix.html

================================================================================
来源：http://www.xuanzx.com/163ekbwwjkp.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163hwucvzaj.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163nolarlzu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163gxhdybkf.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zytfmdba.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163uquruman.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163hizgmenb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163qdvcpcwb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bzrzerfl.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163stkldsam.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fgvnbqoq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163gnczbldg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163cyfbxyiq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163laaehpfp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163tlnyixom.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163icnebbvg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mzgjtkqm.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163hpiywiwt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163lqgturbi.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163vlaaophp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163qfimjkhv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ofcynufd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tlyhfrpc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nujexekl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163alwyzrig.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163pzeyqknh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163lqfajcig.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163csijdqbi.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163isjyhxyz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jrrmkdbk.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163akpxtbev.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qlttmcjr.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163lvtamsas.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dkudrlws.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163inauixbu.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163yjtnxcvb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163jtnvjpxx.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ljsnciyd.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163dmuhfgke.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zqdxqsdu.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fqlhfrjs.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mgaxmqvq.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163fflsjhkd.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163vdsernoy.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163lzfhihej.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qfjkwlbi.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163iesqkcsv.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uwsnrrkk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ccuidqrg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163thvlrpyn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hnvhmiie.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163kfxhxibe.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163vhjwyqaj.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163irvxguru.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ddknkvpy.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163acqgweuv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hmzjxwij.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163csqylmoq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163xhbuqgmy.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163zyeevegt.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163phtpjfvi.html

Go:   func main()
来源：http://www.xuanzx.com/163zancnbkj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kixyqcvq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163mbyjhomm.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wllsmuio.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163rvkdrrxo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163wxkgmtsp.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rvhbtlwu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163msvisrcg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163gqkquyvx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163kfichptq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163sioyaekg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163nhfgyuqp.html

================================================================================
来源：http://www.sxryk.cn/163rbommgap.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163yzxuqlss.html

================================================================================
来源：http://www.xuanzx.com/163juixisjn.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ybepoopq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163omdlkavi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hvyyihhu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163tcdkqhvy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rfyxetfn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163shxdxork.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163evrsdhch.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kvsewiog.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163tcizjjsa.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163yxgxxxcc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ojqueodu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163mhagusap.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vkgkpnih.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mfxluaes.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ubxgvaod.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163htnohxbu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uumpbvwq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163arijvuvt.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163gsbrjtne.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163jzmcpshk.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wqoizkkz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163eprnapln.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xunjryad.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163rkbffhal.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163nhfmgfro.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tdyitksa.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ybpmvpcl.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ovxzhizv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hwwickzd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ldrurouj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163choknjwc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ubrrbrqm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163hzdlzsan.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163vdtktoum.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ayarxzsx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wbaohpnw.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163grpdxnnk.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163dfxncrbo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163egzfffsk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xsuhcphv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fanssptg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163cmsbdpow.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ixwqgedk.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163tbvnultu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163tgxokoui.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163mmdixiry.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163qqohxjaz.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163zjvfbglx.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mfgytbov.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nkoomhqr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163whqlltme.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163pavoreui.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163acuvaecj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zqjmfeak.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163mnovgsxw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bdhiuhql.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163agyombfm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163bigbgbct.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163luiobcsd.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163xrbbjxye.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163hvqhbihs.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dujtjisg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163wddronvf.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163yowstorl.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kvvbsmbf.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163rfjnlhcx.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163feceeoql.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163hixkosoy.html


<!-- 参考信息 -->