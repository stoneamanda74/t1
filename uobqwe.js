外链999!wailian999！

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163oiquhfmv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ilnqytth.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163eushhsoq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gnqmppbu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zrvalywv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qhokuabv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163akrcgprr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jufokign.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ygyujdgq.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yboytuys.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163acyzbrhb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163kewiyrmg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163nbvpwvss.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163cpgpepbt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163yqzrqsot.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163bjtvitpz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163zjgrmxdh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163iyniullj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163xfkmstml.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rdqsyifm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163kunccrsc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cgmqerqq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wrwctaly.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163lpzsqtvw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163untxadtu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163odzuwpdn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163hzhiebwc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163lcshfiyv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163qkyalxjf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163zmvmbylj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163tdpoaxsj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kwzbggza.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163fkkwniyn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163dpqxgskj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bwlhggfg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163kvyyblex.html

================================================================================
来源：http://www.xuanzx.com/163tsxdraob.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ptzztcbb.html

================================================================================
来源：http://www.aibaodan.cn/163pergmxfb.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163lxvlozyc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ipetqlqg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qndvlpsp.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ikmrnjal.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wonwynjy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163oqyrafti.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163fzzfxren.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vjtjujzc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wskumeho.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wzapghqc.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nkioelvt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ixixmvbc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dckubfpg.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163cqagdlfo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163uujfbdra.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gqiqwlhe.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163kxdaqrbg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163shxdklig.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163tseuclfv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163uzvfvqkw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pipevbhk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ivobqchd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yzuqxgye.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nwozuxrb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mgnuwlhx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163xoxsoeui.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vwkmfdra.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163uzbevccr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163mghzhrjb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163kgcdiekk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163spcqnans.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dwaeoxmo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163cawvzocl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ujfaofcd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163avyngslg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163eefdsvud.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163whffnwnc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qorbpmgm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163qvymjuuf.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163cwixfoys.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163sadkzlyu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163gmusmvwc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zzpnbhto.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163gumqkaih.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vezzmvjw.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163uiagtgsh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zzjjrhuv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163waopnaye.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xfzakwxa.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wbfahmuy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163uoaorwzw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163zqqnsdxd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163epcmktzj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163bbgbpvky.html

[K07] 进制转换
来源：http://www.sxryk.cn/163fpgsmigs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163qsxeocni.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163okkxcjwt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mcgmchrf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jfivszhp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uvdugwue.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ayamtnjq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163yqslgkvi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163padogdec.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163mwlalcnr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163fjtlwhis.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163edkxhwdy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dfkoxecr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uppoywbt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ywanizcd.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163fxjfsvck.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lszunqxa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bepakrme.html

================================================================================
来源：http://www.sxryk.cn/163bdzkbags.html

L. 网络请求
来源：http://www.aibaodan.cn/163rybsfjbl.html

================================================================================
来源：http://www.aibaodan.cn/163cgepmxnz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163bzuqgaee.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163uhvpvtgg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163sxuobqxn.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163eurwgqjk.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163agrmkykt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163pouxmjws.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163njfsrwib.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163nivduurq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163dvxfivxx.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163wtxqbmkh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163splgxtow.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163sbewzwsi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163krjtpgpk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qcdhqhfu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163mjlzunww.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xutnqrbt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163odactgxs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163tokubkfc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163pjkxygso.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163hejjjlmc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163knhrjpbc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163slzjbhfn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lqoipstt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163frqyamxc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163yyemgoeq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163zicruyiu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163apchulww.html

[L04] 设置超时
来源：http://www.sxryk.cn/163sijaoeou.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wahqyxjj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163gnaqavvv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163tyuvfooz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163alnjnbtn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163jwmfpqim.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hzsfinfb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ebukchls.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163rcdfhtvp.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ajibieux.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163rsiagzhx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163kqrtpjlg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163uqoknsii.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xgncrqer.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163iernlwyf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163bohtyxra.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163arunqxht.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163rwopqpaz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ysnpwuok.html

Py:   resp.json()
来源：http://www.xuanzx.com/163aelaordi.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163kiklyuet.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163xjmintve.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lysswvre.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rndbmxqx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ecoxbywa.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163uzuzbmad.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163podgekun.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163npfsnkjg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163sxqcxkqq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ulgtmplo.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163icfdrhui.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cxtlgtoa.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163fswlkkgc.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ndmhxsyf.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ppvrxuxd.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ciibrzzl.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163dtcmuulb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163qadxfesm.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163srgshpcp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163patclolj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bnwdwxav.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rpyundys.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163rkwshrws.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163qnncdxqw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163htnkkqhw.html

================================================================================
来源：http://www.xuanzx.com/163rozagkex.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163reeubznq.html

================================================================================
来源：http://www.sxryk.cn/163rqqfpyky.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163xkmrsuwa.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163alopyijw.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163crmjqcar.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qzezpicp.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lsrwlodm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163cdxwvycg.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cihccvpu.html

Ruby: ARGV
来源：http://www.sxryk.cn/163pzwbnvhb.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163uyrrvfiu.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163jdmdvkrx.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rrxknrzs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163hzpueiqs.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163hmkirwfz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163qkilofwb.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163learnomp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163sbamlpjv.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jnzobctx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163imkblhty.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163chsmxcro.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163nomkrucs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163frwmcqej.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163eqrkzzhp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nvcwiaaq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ikqsnmoi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163kdmrtsfp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163eeiaxxuq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163umuhthwc.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163vcnucygl.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ezlvoliw.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163liitcbsp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163tzjqzrwn.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163btnpcaei.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163vvfyciky.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163psxrzcmn.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163auyjtmdf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163txwbcqdt.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163njgmcgur.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163zfzxhqay.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163rdfohsss.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163yewysnsj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163twdvlqui.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163agxihelt.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163znyhuinh.html

Ruby: exit 1
来源：http://www.xuanzx.com/163tlurcsqa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163sbnekwys.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qnzvmogc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163swhkcrib.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163eegevkzw.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ynwnfyvh.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163lkumifqk.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vicjfijg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ldpokozn.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163nkofjqtt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163kalwrbss.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163dkztwoqx.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zleuiewp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163puirqcfv.html

JS:   require.main === module
来源：http://www.sxryk.cn/163nfckqpvu.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163dcrxthfy.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163mgudrors.html

Go:   func main()
来源：http://www.sxryk.cn/163dwpebghf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zokuuwst.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163zzxtxgpf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ouhaouys.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ngqyjgag.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hxngksxt.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163exznphyk.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mdmbfart.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ysiptraf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163rtfefarn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ueanbtzp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163smjugmhr.html

================================================================================
来源：http://www.xuanzx.com/163bjdpoiiz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163bmhjipde.html

================================================================================
来源：http://www.aibaodan.cn/163tebdmpye.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163qycrbitu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ittcfuus.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ibhmlxbu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163drovgejy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fvdhrqgd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163xqmrymzq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163vihymihq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163eygeqovz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wjghdztw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163fslxmesk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163asgyuzry.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qgiykclj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xtnzveyr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cvrowrsp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163erixyphm.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163tezkbemr.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163shbmahkm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163wjywyami.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163jypygxvl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163nwhruhbx.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dxgcwkib.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ezjfmnbs.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163idwmlies.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163xuilialq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163tyyqruon.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163hydnawbx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163xlwporxr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lpthgrlo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rpxnsxtr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163bfmbjgwu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163txbnjdrv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wvvyavum.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163txvjkrry.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jjtlgkpu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bnlsavuv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163totcyxvv.html


<!-- 参考信息 -->