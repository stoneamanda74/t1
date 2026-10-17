外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163vukkunhf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163jlkwqkzm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163msuiivjt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ijohlsih.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163kglrjheg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mxpduunx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163hdnnngcb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163uzlfukwr.html

================================================================================
来源：http://www.sxryk.cn/163zchjegsg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163eglzlaxv.html

================================================================================
来源：http://www.sxryk.cn/163loinwmfg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163fasdumyf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163snvvqydy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cvydhqjx.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bvnjrxwd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163exosulhc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163nyznwbuc.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163zafcszfn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163haknyyna.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163loakbxrp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163aefshgcu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163tdvjounf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163caxnaypm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jjhdegig.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hbnxvecr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163bwjnmbwc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ihrbiwmq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163yyecmyzy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ogrrczxe.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kiycqhdf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163vgnczzwd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163usekxxjs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ssqibtvy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jorqebux.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fkunigwz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163hthpptmi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ahobjwaz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163dlzfmxdm.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163usbwxkdk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163bdgqrhif.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jrcbozmm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ljevethe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163uearleyz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wlfwziut.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ogzsedfq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163iqiunadq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jdvkwfwk.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163anlboohq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bvehimgy.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163hlknyifd.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nnqjmppd.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fifyyqwd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163cwyeabdw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163obhzykko.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163lerjtsxf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163lhhmhiqb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wounuvbg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ipcjxeur.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163arsjztpa.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163szlsvdzb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vvxrisnr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163aujmmedn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163njjhrpjm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163oomzmgtx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163dbmedbsj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163anviouzn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163sqzcubfj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163vmbxbegb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163znelcpkn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163oozvnegt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163yrqyvsqa.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ffthedgv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163mehtvwfk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163sxkuakxu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jotzdrfu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163oluuniue.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163okfivldl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lwkxciwp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xvzcqcbt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163rtqzkzwp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ltjevzvg.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dfsyatxo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ozzaddlv.html

================================================================================
来源：http://www.aibaodan.cn/163pxmrmsxk.html

L. 网络请求
来源：http://www.aibaodan.cn/163crooblyl.html

================================================================================
来源：http://www.xuanzx.com/163mjrdcpqn.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163rlhrxxhy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ttnacmki.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zwziiyfr.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163efyxlmux.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163auovwosj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163fhsqtqaf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163pbdzfabq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163yotmjzhe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163eidnzksk.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163epftpygq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dpbfjlht.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163rpebkarj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163attsudln.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163emzyswty.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163zamrjjcp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163qezkmbcz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163sbyqezgi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163fkxhtayi.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163oogxvpdu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163rczvzyzn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163epmtwiec.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dqrwbfay.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163psacwsqc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ahbfgeft.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163atilqvhp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163kpiywsid.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163aasgkytb.html

[L04] 设置超时
来源：http://www.sxryk.cn/163rwnmhtht.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163vspudzac.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ltsnyhot.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vvtfsxhx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163slxiorms.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163yijyhjlx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163zxskyony.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163iqewftmx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163cnlnwzod.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163jvssclvm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163sqzsjsjb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163lanjcqxx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163twiccxbi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rxfpjpje.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163rvkfrbig.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qpyqrkas.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163omeeospp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ectadyiu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ngekupcg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163obkmfgzo.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163noyuvbhh.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163fllvgool.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163aouyyhtz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163iwxaodjn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ayevtqbu.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163cmhrcuri.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163emoygupt.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xrftdvsy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163pwitkkyh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163aqlffgkb.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zqirzxyz.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rypjvxjf.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163foejpwfg.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163bhlaysaf.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163upitftjf.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xhttaynt.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163hynckzpq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163vxemnhty.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163qhxuqsdo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cctrlirm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nhtrevae.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rfaccnfw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163kwmtzyka.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163zzeidxnp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163yprmjbsx.html

================================================================================
来源：http://www.xuanzx.com/163sraixxqe.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mlcudjwr.html

================================================================================
来源：http://www.sxryk.cn/163pithscdj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163tfwudjdz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163iulsljod.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163bnahbxmh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ceetcnqs.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ivtiypci.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fsqumihx.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163nkcausww.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163rlqxsijl.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ijexytqn.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163fdfgyuyi.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163qlyozihj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ochzdywu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163kwyzgatd.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163pwfagvci.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163wlbvsnmg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163widpwayf.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163msbsiynt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cficcqhx.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163zlismkqk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163laduqxty.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163aeqgeoob.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jdffqwyk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wxzpyuix.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163nremfnui.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163onsfhqan.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163kzjrcymp.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163zxzlwbzs.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163udgnhitk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163egrxgavy.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163blgwvgks.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163smswzjja.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163hjcolkls.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163vynygmia.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ynsedykj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hhbhadnf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hnsbmbpj.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rmwtifrf.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163xgrvrppb.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ukpkkwfm.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163idzzkadj.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163jwkrmhls.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163scngoeho.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163yaqxqxzd.html

Ruby: exit 1
来源：http://www.xuanzx.com/163fpghtguu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163goaannph.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xqvkqafo.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163imthuzrc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163imuofmgr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nxrmprnu.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163lugzshjf.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lxximzfr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cmoejlzb.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163djilvkjj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ihwjffkb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163vzkxckmz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163twpbxxmb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163pcdccboj.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163jdspmyhe.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xwqvyziq.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163oucsfjgy.html

Go:   func main()
来源：http://www.sxryk.cn/163hfbbyudn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163lytmetpg.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163geygkcmv.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163dhdxwifx.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163gvalkodl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163voqpiprl.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gfjgfvsl.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cfviymty.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163zayawzoi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163etjrskbt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zulfhbvz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163lnnofriv.html

================================================================================
来源：http://www.xuanzx.com/163tlyjtbia.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163xbrpgkkr.html

================================================================================
来源：http://www.xuanzx.com/163klhsjvst.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163imxxhyrk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163oxoepkfk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163hmqjyrwl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pqzpwmsl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cldqhket.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163iqjsnwon.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163htpphnwg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163kypqaizu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163tsbhsmjg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163egbokfgu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hoyklxwa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kuxycunh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163odapdfec.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lepdujpe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163vzzxurpv.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dlnzlyim.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tqadxevv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163jwqxeptq.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ltjvojch.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163mdpwjtmc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ezxrpodd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fhieddcd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rjpnzqfi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tfautsej.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163gmymgvan.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ubuekzup.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163yeexqafa.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163kikuguwv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kwohopax.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hcntemzt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163epotamvz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cslwuzid.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163geyfghtj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163uizsjese.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xiqfoisy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163jputimqz.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163sxkgbouk.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163vtsbvqqq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nnkbbehb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hkjjhrpq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gyegrypm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163twqgpyod.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ebqertqj.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163knbcbcbv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ivfmpnkt.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163kjugibas.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ytqkqeud.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163dddbctjb.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gaewfqvg.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wuvgxuxx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163lieckboa.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ykembext.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163eozlzllu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cxuyclgx.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163sqvvawel.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zhyzgudl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ivgxizxj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mctgyogm.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163gjpvpmdc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163duirlysi.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163hmtqrgtr.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163yjrklvoz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163nzesqkzv.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163nknbhegd.html


<!-- 参考信息 -->