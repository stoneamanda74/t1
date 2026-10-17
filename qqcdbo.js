外链999!wailian999！

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163fnxxvaug.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qnuosdcp.html

[J09] 时区处理
来源：http://www.sxryk.cn/163dlvvxqcz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kwibprzg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163edwnamqr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163efoxxlgr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hatkolxu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163tahfniwd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163tknrxidw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163cjyhkbxv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163esapmbom.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163mibecafk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163booitqsq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163cbcljqny.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163rqusvszq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163gtqauwao.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163prmmffng.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163nvypwbxm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ntgvtowr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ktrwzzhh.html

================================================================================
来源：http://www.aibaodan.cn/163hcdazxwb.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163rqqjdgwj.html

================================================================================
来源：http://www.aibaodan.cn/163ybrozcnl.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163qcxrkkwd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163asztuocl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qulmpvoe.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163yfbvrwhz.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ewihkewd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163mldaqeel.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163faaxyuxt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163idbyxfrj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163etuvhhgg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163chwvxoxl.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bygqraon.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163piqkayrk.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163roqiastg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tkbxwrio.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163lglsnyic.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163skxtjuhs.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qrwjgefq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163grkcqjnt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163imvhvpka.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163emoequhd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mhhhkibr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tlysjxqe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ierunmes.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163dptivbbn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163yqkkcywl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hmkhhzuw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163dyfeufaw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163inevsrsk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rtrnuhij.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163itmqjfoj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163asuabjux.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kpdrpoaj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163eepbmwgx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163elmkvqru.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163tjatlbgl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qgitpgpt.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163spowotpx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163lbvlmjtq.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ngoknnhy.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163inebkqsz.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gkedtoyd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163amgbjnlf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163zmkedfgb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163zjhhdvco.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tbfhrtem.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163cgypibpy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163cydwyjkv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163prbmbrks.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163akjvqkdi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kazxiisb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163sfjbnfrm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ltlvkrha.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163tgwypvsd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163mqvmswrv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163zrtwwwin.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163fbcfcvpe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163myjfclby.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ifnasese.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163eahhjhgt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163yylpwgrt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wsbjfrqm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163dxhgkfwu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163lyousbxh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163xrqchijj.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dnruqucj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163hprtlphm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163yovqauzk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hqtfjmic.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163brbeermz.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gixfhdgd.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163tugfysds.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ubrotacl.html

================================================================================
来源：http://www.xuanzx.com/163vkxjjpnn.html

L. 网络请求
来源：http://www.xuanzx.com/163lwxsfxrs.html

================================================================================
来源：http://www.sxryk.cn/163ytkftcid.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vqtmkrmb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dcwtnomj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163nvjyavuq.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ckgeeuxu.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163hnkyvdje.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163udysglap.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wcfgpumy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163aduuqzfo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163rhojeczc.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ildxvxpm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163macmbseh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163xtnragvh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vififoyo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lsjaffzx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163jynvfazs.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rlauxisg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163vetenwur.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163odavgdcg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163drlcwzro.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163gijzwqqh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163cqqpddoi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nsfnffnq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163srienhsy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163oxwfdwku.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163pjnimbdt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163lutdeezq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163bvhobcfv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ajmrettr.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163adxmryxd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163agbagcsh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xhzalbqt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ymhzialg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163rdbpdxpe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163fztueehx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163sspztzdy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ojzsxjmb.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hghsflre.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bqsehkwr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163umqgagmv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163weifrhje.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ndksjzak.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163vncdfpmf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163eftnnhqg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gzooxllx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163yqvwicpv.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163bbejihvq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163dlozygtc.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163xjkmhmvq.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163knvikois.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163plbsadgj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gdxmrxxp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163yakhimnw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zoanawoo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163lsxndmys.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ignoycjm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nhauqsln.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dojsacgw.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qscbblgp.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ilumxsgg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163catsmvwa.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163urrqpotz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ldjniqhk.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163kqedhlxn.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jgjqjtul.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163bfeuydzm.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163yempizyr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hxtvotcv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wbwveyrn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163mjuxwjxw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ijtzvxjn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qreettmi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163bhbfwhmp.html

================================================================================
来源：http://www.xuanzx.com/163bqtzhzlp.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163smgzhmlu.html

================================================================================
来源：http://www.xuanzx.com/163iievzpes.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ccxaelvf.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163rleftreq.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ptuldqbm.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gsnclvnz.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ivozvrpu.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163feryuccq.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163wdgwxdnm.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qxuhffka.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163rbqwfgpj.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163dunlaxnu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163fzdbnntr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163dpamimsm.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163friwoqug.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ldintlhe.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163xqdutviz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163bcdllhps.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163tmfhbeth.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163guvtqzfp.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uvjxutla.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163xhbwqyva.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ezluxcnl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163elyckuvc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wsykzdjg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ahgdibpz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163htzlmkey.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163engbbbdc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ejzttiuo.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163uubxhfln.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ikprragu.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163yzakofqh.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163lqxhqons.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163sbgeymcx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163iocmevlp.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163mpzziskq.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wiyngqeb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163rsfwhoxr.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ibfuynhb.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163jzdiohov.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xcbsypox.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163mfeirxcs.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163tyrtluqk.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163wtjxsqhf.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163sfumapqw.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163lnxtcwmi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163uoxdavxh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163iahyvyfa.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qgvwongo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163mqyrtvwp.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dosiumbe.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163nuaplxfk.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163mfjdacxl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163bzxyupnw.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163bjtueluq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163axpeyvhb.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163vxanrfyb.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jmvntler.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ozgbkrbf.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ivdslawo.html

TS:   require.main === module
来源：http://www.xuanzx.com/163qlteldeb.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tbmngwjv.html

Go:   func main()
来源：http://www.sxryk.cn/163xenvwbzu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163rkdcsrit.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ymhraixn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163nxboodxb.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163mbbumecc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163papcxbur.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hklsevhc.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zgzvjmuk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163lrbtkyeh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163yzaekntk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163eemxzdrz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163lqtqwoep.html

================================================================================
来源：http://www.aibaodan.cn/163xhgklbzj.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163yhgfivsj.html

================================================================================
来源：http://www.aibaodan.cn/163ojpspebg.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163bqshnbgq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163kkpwuhxx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163gujyjmty.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ezgsljqg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xjaxgsoi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163yccytqcc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163dnsbtzyc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163tdaivqcy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jeumlgeh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163xqtpvyra.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mxyswagx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163cdnvzbot.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gimuioee.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bliealsg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163cmwjkzym.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163bpmkrvxh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fpmnluea.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163jklylces.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163gokrerog.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163lotsuakq.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163prhespee.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lkduugfr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qlitqiwx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163olloycdn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163xpzqcthf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mbeehzxh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163fwvfqdgs.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163cwpkghmb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rlltllsx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163quqfcggw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ntmynwlh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163nocerbnd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163fpwjrdeg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163isjczcoi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163msmgrjru.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ktrieavb.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163igvxlsrb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163kulqwdlm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163dibcnreh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ignzmpcb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yundmqnm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163xcbzgkzu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163lfimcpag.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163wllupssx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163agpmhzqi.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163wrccxtty.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163lbgaksgp.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163edtzwtjh.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bmqrbnjp.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iiqhblgf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163vwubaikv.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163fmtsjxhh.html


<!-- 参考信息 -->