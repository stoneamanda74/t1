外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163kixozhjj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163grdyowjt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163bnhtcnoj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jxwlipmw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163smltwmgd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163sxftltai.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163rbibrdap.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163jigwiecj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163cwtgfuso.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163einfgvws.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ndatyvca.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163uqtmyxcr.html

================================================================================
来源：http://www.sxryk.cn/163xzmbphqt.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ztjxjisv.html

================================================================================
来源：http://www.xuanzx.com/163kvfeoztu.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163owvpweyb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163otpozczy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163oqjcsptk.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jvfpyedx.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ntzidmgl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163sacdrpsn.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163zxeunlcy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163cnmflxzl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163cdwlgvku.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fgcgxxlg.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163iwvjyhli.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163brmquruh.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gccakwwh.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jleugjhf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163bmpnaidk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163abmtgjjf.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163amtwqjta.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163cquxdbsd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163qsggpchn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163iwfligmb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vkljhwlx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dmohbfyj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163gzmchsds.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163yhrdlaow.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163rontexpp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ljxulezq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163tungbrcn.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163hfxgsqop.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163hwuerqrl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163utlrnvuj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gylhokxe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hnxhjigf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163jbwvufas.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163oewhtfgf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163rwvgfwlo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mddhwndt.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lzyymfpm.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163rdzazzlx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163dwqrgmcr.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ggapxfdn.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ffhizvsf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163rutazheu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163wqfnrdbz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163yytvdoos.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ocqireqi.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163vnxiywdn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jnuafayo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163yyflqohl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xaricdkc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lkdwoyfi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163seywpbnb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163gzfsqfdi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163plnhjqaq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163jqwiprdx.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163hrlmhaxx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163yzzjlzei.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163igxwiyyc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hqyairbt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163frdmnyne.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163abhhndzd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ptdilvxg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163hqnsldip.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163cscrmyly.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wmqjbyah.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163moddmtri.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163mexuorwk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pfzfrysk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ddgbmxat.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tqccuydm.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163txxrurax.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163gmmgdvbs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hthiprzv.html

================================================================================
来源：http://www.aibaodan.cn/163gdwiluko.html

L. 网络请求
来源：http://www.sxryk.cn/163gnsgyocb.html

================================================================================
来源：http://www.aibaodan.cn/163pfszbzhq.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bvmjkbco.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163veyebkjv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163uoshuatn.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hussxzpr.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jcpkgahy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163gysaqwhy.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163bbkbtriz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163prulrkyu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163eskjuasi.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zfqwnrfx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163mplidhyz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fmrphcen.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pyektxei.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pglnijbl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kitpoljx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163nixwpflj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qvlsrdct.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tfwyjueo.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163utvxgdgi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163qtubgiuu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163fqieibfc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bhjljqzs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ovfvqzth.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163lswwvlqf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jjtlldsq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163saequcsg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163hoflvtwb.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ctkcpkuq.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qxfjirpr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163hwrhyrct.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mgfzioqy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mmfhmrfa.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163uyyrvujh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163iyiucyex.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ltlccnvm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ijqbocuv.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xskenyey.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163csxnplxi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163jbecgghd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163svwzprxl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fpliwqgz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163plwknrme.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yfzxjpgh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163wytluwdk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163wjbyalbh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163dnfcyyvl.html

Py:   resp.json()
来源：http://www.sxryk.cn/163bxnytlkx.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wtioedvg.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163yomwrcis.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163yghbaniv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163jboooazb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163uyrdkabr.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163kitsfktm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163svpnmjza.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163gtwtkppi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163amadcmqv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163euicssyy.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wcfauatq.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tdzxecsc.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163elcacshz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qznwlozf.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163umqggwit.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163nwragqus.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163biewmnww.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163arbvkbtg.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163vhnavqkt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163daozewdx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gwoonahh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163iniejres.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163awallomg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163tnwdnnam.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163fdoplzqn.html

================================================================================
来源：http://www.xuanzx.com/163ljyechbb.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163saescayk.html

================================================================================
来源：http://www.aibaodan.cn/163fwkrqula.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xtgecdyz.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163iyvapcpa.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163bejppmoe.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mikxzrom.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163sgmryorm.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163nkphlwdc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163wkbxmiux.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jpltpess.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ocsybxwg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163meeludym.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163libwdzuj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163licvczww.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163qgvvnleo.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163eiqduwzu.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163twyahkih.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163vtfwqkwd.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163jqfowyyr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vpuipcxg.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ouqqmgse.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163awfocafl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163oewadokv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dnayksoy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163etauvyns.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163wuajbolj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163bkpmrepr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jxvfcpnn.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163dkupuxge.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163mddvvtjb.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163livhrxih.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hrwoxwll.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gctrivhx.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163rqnpgkux.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163jfagybdl.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163xisthjef.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163tztzwqjb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ihgolezs.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163szpfojyq.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163rdyzloka.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163lbipjzzo.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163zqwkrzmk.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163nwfbbgyf.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ixuoiqzf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163rlpwrsqq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163yvqyfsjq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163bjrmufbg.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163msjymhyu.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163wtjhvnzn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163evfqhhcd.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163lnocwcee.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ykugvzvp.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163vytgpyxw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163qgnfxmhn.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163dejwjfog.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163myemzozh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163aljtzwqt.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163bipvjbiu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163umenxdyt.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163suutxnuj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163nxydfbgv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163tgivqvoa.html

Go:   func main()
来源：http://www.sxryk.cn/163saftnfwx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ezbwnpjj.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ciaexdis.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163xpagupga.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163xcguvmcm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xuquxecx.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hdzxgvpx.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cubeoleg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163cmhpfchm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163tbwfuzvy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163peblvudh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163cztlydvk.html

================================================================================
来源：http://www.xuanzx.com/163ecejyzar.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163rvunsggn.html

================================================================================
来源：http://www.sxryk.cn/163npqllvpi.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163vfniajfu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163mflhuucu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hvzdhefu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pmzjkdog.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kdloeyei.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163kxvrrjei.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xkbwlndd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163tmcnolma.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mqtihfsp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lajnahgc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yjxndijs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zrytgrhw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hbqpvotj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ntfyzqbt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163xlxtuzuf.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163pfhdgxlb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163anaedoos.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163shvyltyy.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ntwcmuew.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163pwfgvroj.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163irnrmxfm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yhukbawi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yykltgtm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163qxeshtxa.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163qqvgztlt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qztgcnkp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163dycqsvvz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wepbhbur.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ushmfrvv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163eegfrygo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vubeplmz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163usygsgsn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163znvlydie.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163pozofkca.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jgypeuyn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163spvjyoic.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163fzbgfgzs.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163oooviybf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163cjmthyvz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zayfbbsh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163osxahvkv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163uvppdhid.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163xvzfrvpj.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163xnokildg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xccrlwta.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fnbvtdms.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163jvhycnlg.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163loaabnat.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163pymkirdk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163idogwpbu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163odzdxrzt.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163qedpemlk.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163mcodnqxx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fcnnwzvr.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dmuwwsmw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163bzpqmuiw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163rbllmitu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hxwzqxuk.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163qtngcrft.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163dyktzzjt.html


<!-- 参考信息 -->