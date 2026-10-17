外链999!wailian999！

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163hvqwtgep.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163sshhyvnn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ocfzxavq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163dizjrcbn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163svjflwqf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163uzcmfbli.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163iomniqip.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pkrzlxuv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163nuwytgfm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163bvgmggwa.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ztmyddkv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163tnjglmwe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163mzdebsde.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163obpmwvps.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jeumurof.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163rzbqyoqp.html

================================================================================
来源：http://www.aibaodan.cn/163vrgwqmnh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163qhzntwhc.html

================================================================================
来源：http://www.xuanzx.com/163zxlecfzo.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163cwgodyxq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jshtzpfd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jvpkpaps.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163aqouzhxr.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163srmstzzn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163npolyvel.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163wvanjvpu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163svfagupx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163iiioitlv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jpzwasyt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163mzsfxrww.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163alovmjar.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163uravhhoh.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bjwndmvw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163lahlatby.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sekdahwm.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lytmildt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163elccpirc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163drgdwjur.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163lfxecriy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rnkeqkud.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163acycpdds.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163afitjyev.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163laegpvwq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163asypuzeb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163sisyqbin.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163penbaqrh.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ppkiekby.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163nqinymem.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ufyekflv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vbaumwle.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bnyevnab.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163cullwdrj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ixhmqwvf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163zuvtgcaj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163iwbunocc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163yawswbha.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163sgdfiekb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vmtlosft.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xtiirrpt.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nrobpljs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163beauaqdw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fxkxekbw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163cvkdapre.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163scyifxid.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163uudrcznz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163rcyjcjvc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ckjwzjaq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wgutnqgx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vxahugyw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jioyffdi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163bjowozrw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163lrqzyazn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163lsmxvvwo.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163btoriiul.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163qfkqeexx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163oeffqmrl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cmdqozth.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lvxzsxdv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163hdtqxfra.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163lafzbbff.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163sgwouctg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163egggbgkn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wncghdvd.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163bomqhzma.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163nfqktuor.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163oyyniwmh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pbkfgavf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163otuvgwln.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163tgynnhaq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163jmnwlkyx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163aufotqrp.html

================================================================================
来源：http://www.sxryk.cn/163lyyjvzpv.html

L. 网络请求
来源：http://www.sxryk.cn/163fszrwtyd.html

================================================================================
来源：http://www.sxryk.cn/163dnvalotm.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163colrjfgy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163edsataws.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163lhjuovxj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163znwyiqzx.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163fcucqvmi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163cdarttzx.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163brviipkp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jfmuvbnl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163yicibtfr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163bpmplwjh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163vlhipdbm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163gqgigano.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jvuolmnz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pmwdjqvj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163dbzlpjwc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163pbqaripm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163phiqhitt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163wajnoayy.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ofuanbth.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ngcreoae.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163qhfoxxnb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jyiqwozq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fnwrjkhf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163gvpjppgj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nuqjciuq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163vhewgopc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163vgpucosw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163iwgndtss.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163tirateyq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ibywchex.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vjanohkc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ojhnfzub.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163hiqtogtj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163kqnpxivp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163mmicnuum.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163umyjozax.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qymisztj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163hsssinic.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qyxwwugh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ycnnzjdu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163owyspygw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163rohqvhvj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ltnuhcyr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163thotvcwv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jdbyllpt.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163jsvxpkkv.html

Py:   resp.json()
来源：http://www.sxryk.cn/163acyerjkp.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163livavsnd.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163dzuthmho.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163jcprlugc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163lgzzqeda.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163sznzezxi.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163pvabcjrg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163niyvmdas.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163putfwfaf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163uvsfmsxq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rcgcwsvr.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jbrkomcx.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163yxnvzhsn.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163yocigiii.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lexsyzpr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163hkyhhntv.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163kljavjpe.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163bhajyhue.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163wpgdakzx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163tcccrqbm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pnjmvyow.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rwkpuxuj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163lnshotoz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163aindsowm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ywijpujf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163nzeyuvpz.html

================================================================================
来源：http://www.sxryk.cn/163yjeqltfs.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163zzpqkpxa.html

================================================================================
来源：http://www.aibaodan.cn/163vuemedxg.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163yyxadfwx.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163wdvpvalf.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ijxlwcxz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lwwjdmpw.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163onodgaek.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hxcsagno.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163nwpnycgc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163klyuinva.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163hoskpkyz.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163adigfaii.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163rtqwairr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jcwussrt.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wfhptrkv.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163nungbkqp.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163rzdfmbcp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163bhwkqtwy.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163eufqzrjg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163zwdteeip.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zsimmtzd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mpndhcjr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163oxqsjklo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163acujddmn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ksnxyutr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163epoxahii.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163iguixhtb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qvhirngp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163bxbtiuea.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163yghrebmt.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163bpbpqkdd.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163bzpsrlsx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ugpecemo.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163vudrsbtw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jorawpbw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163foocmcmw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163usiaqnsn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163vlvvrvfl.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163rfvikgsd.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163uppmatiq.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163uzdlfrxp.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vimqdvlp.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163pxiapgkk.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163tisuyevs.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163garezamf.html

Ruby: exit 1
来源：http://www.sxryk.cn/163plqhzarv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163getjruhp.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163hlkoyglj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163urbifics.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163isxomelc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163wklawixg.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zfrmocgc.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163bvubztyb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163bnyvdklu.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163umrktnpz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163npizfnyo.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hixzbqyj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163impzgkew.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163immumwzt.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163vclcptjz.html

TS:   require.main === module
来源：http://www.sxryk.cn/163kxtvbyhs.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zhgmjudx.html

Go:   func main()
来源：http://www.aibaodan.cn/163gkybakfv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fqtohzsf.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ipwfrnnu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wjvrqaco.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163yfhbbwzy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163tenorhkp.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xyqqplnb.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163oqlulvhk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163pjtecpae.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ffdnnlhe.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163yuyhigtc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jgzlfalo.html

================================================================================
来源：http://www.sxryk.cn/163tdfplfqj.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163nqtwpcll.html

================================================================================
来源：http://www.xuanzx.com/163qpbipftw.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163xbnrrtgr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163dhzxqrfg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163nkimgfua.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mnggwsez.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bbpmkpin.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163qpnotqdg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163dcptswjh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163dmroypcd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163oiyizuxh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lkdwwxst.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gsiotusk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163vavbqarn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163aiosxenn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163usmfscci.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163dvshvfmn.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163syjoqfkn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163pdlkqhxs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163qatpwwev.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163yvtrpfqe.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163exahuwan.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ftoovrxr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yvrbrivb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ooawofhk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163emzffpod.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163hmowwfqc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163xemllzag.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163hfvjfgvn.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163halnrdxc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163incpiutt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163fetvisxq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dithnrei.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gvrzopwy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163auklanvn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163gerkcmqs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163muyfsnbt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163jhupdqgz.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ywgvlklb.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bqglxevu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163itiuifqi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qxpezgui.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qfrvmqha.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163wpwlhxyp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163sccwwdwj.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163mhfytpav.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163tcwrcdom.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163qurfcjzf.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163wdrkexoe.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163veysoasm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zgtqhbkf.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163frxjzjot.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163nmpgkhnq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ojnrwnls.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rkoprvjl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qznagxyu.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163dhdelbbv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163plxoxmtp.html


<!-- 参考信息 -->