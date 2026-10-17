外链999!wailian999！

[J07] 比较两个日期
来源：http://www.sxryk.cn/163vfkovqpd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ecdslfnf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ihzfusyp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ccscpdpw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ptcaixrf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163nlevffnj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163agsbohfz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jsvyrstq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ojtiskms.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ghefwhuj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163bkxhckfw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lgzqkbuv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dudvympm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163tychwyma.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yxkfmejc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163vosnvfge.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163veodkkdh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163arwchfyw.html

[J09] 时区处理
来源：http://www.xuanzx.com/163lfmvcpeo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ukbopkan.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ameqklsf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qjmcstoj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163awsrqjfm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163nkwqlpfd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pcgsnajd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163immigcow.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bfmhgpdm.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zsslhloh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163qffrrjrq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mfjorihi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163hbajxoyh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163hbozetcp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hijzsyhy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163mvpmkqnk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163keqkcmgl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ovdfekjx.html

================================================================================
来源：http://www.sxryk.cn/163ofxulqbv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163vcrrrswy.html

================================================================================
来源：http://www.aibaodan.cn/163usedfupd.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163oorhqvtd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163jprybnmv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kubpecks.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qcjipdmp.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wcsmndwf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mltgkrdy.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163syacxdha.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163xtmoycub.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163yauxjade.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163bpcxdxqt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163vjopseug.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163cbewruoh.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dkjmpshk.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pkxdtpjc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163snvuqetf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sucghwxv.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163vcxwwuxx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163eyekhcqm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ufsbsgez.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ldtytfkw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bjgffvel.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163evaxfkbe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zhknypcl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163iaecwddi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163oeoolrvj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163bxzzimkm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163qqzvghuh.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163qcnkclcs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zjhrmzmw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163vzbjaloz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ilukrwau.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163iohldhla.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163auzegwtp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pusdcdmh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163pqfjbcau.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qgguxilf.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163lmqbfoxf.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163vuiooang.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163custgyav.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yswrwkxv.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jyvicesy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163cbshuahz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163brnvxctd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163nmseryiv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163pohechya.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163wtmqgsrq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ttjfwfvc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vteldcjx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cjjetiqr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vbwwopoo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163hrwcxvap.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163utgfgjkd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163hhjvlegj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bylgoufq.html

[K07] 进制转换
来源：http://www.xuanzx.com/163dczekjsb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163hluxfuaa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ddhqndkb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qnzapzdc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tgmizltx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bdjhcbne.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163aaohlufz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163paquttin.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163unpzhqpb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163sdkrsqvx.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163nshrlhvb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163zhfaaltu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163amxdrzan.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zeibjzso.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163kyqhbnng.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ebceodec.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vsqnnwhg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163fdlxvbcx.html

================================================================================
来源：http://www.sxryk.cn/163rezaqvtz.html

L. 网络请求
来源：http://www.sxryk.cn/163cftcnltv.html

================================================================================
来源：http://www.xuanzx.com/163bsamzair.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ikppswjo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lcnvdrur.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163hdeatpwc.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163oootmjxm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ukiqgjqs.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lhusbswt.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wundwhyp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ibyrvebf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ngsdlnhv.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163azskaxsb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wkcwjxww.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ppbmjohe.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163chorophz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ubqdbpxg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163mhuxvetu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163jrjgbbke.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163tkaorkin.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163jksdsxdp.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163htjfidtl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163oimmkuns.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vkoeobdt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yixanfja.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163yjbxdtfh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163zinczecl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163kpqbybfd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163kgqlkscf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163hfvsuhig.html

[L04] 设置超时
来源：http://www.sxryk.cn/163dppaxkmp.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163nkutoafb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163mlvugyyl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163amnmaigd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163iwvfwgrv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163jrvdygdu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163asigiytt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163hiobkqxh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163bqsrdefz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163nkfrvozl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bvnbnxia.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ytvlpxth.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ojvkxhvr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rrppcdeg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163dntgvxdz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163nclezadg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163hgaxkgyr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163xdtiewwg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163pwkkqtwc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163nkevbezv.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jrnzchdo.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163bdmaihlf.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163pzrjllwd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yhfunrqf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163idbepjei.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163bnvofjpy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xvpwxxvs.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163negteput.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ujvbluwz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ubeodmii.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rqwvwgdn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163esmsqunq.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xcuygrnq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163khmagbzd.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163totsgzua.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163dccirldk.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163pybhccvz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163vrrzzsda.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163hagmrsmy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vkqiadfe.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ukmuxeoi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163wrdcwykc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163qjflxqvm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163anjveigw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163wfevhquw.html

================================================================================
来源：http://www.xuanzx.com/163wdeluwvy.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nzxslzar.html

================================================================================
来源：http://www.sxryk.cn/163gplobera.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zjzvfmbt.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163btnymqyj.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163asvktnmi.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qwbtvxhe.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qutemefd.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163lysprecc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qmeimgsq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163kxqdyalc.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ftifiigi.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163mpwbaukv.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ofukbhhm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ddswsoay.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163jyzfxzem.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163uiwvmbgg.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163kxclchiw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163uazuyqfq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ucdljafo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163hvznwoer.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163skqrbicg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163hdkpkcou.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163eqtqzzxr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163sxapudce.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163oxzcbkhb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ixzqzfrl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163autgdmhf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ssnlxoxn.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ooxfdxtc.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fyqitwhv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lmwefwvq.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163bpiswjus.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ccsgdddf.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163aefhsnux.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163bszhoupi.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163bczapsml.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163cuwxbale.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163sbojfqnf.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163upleocek.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163dkwjbccc.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163hiufpfdb.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163djifbkac.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163rdeuwvzn.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163sihvaped.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163txzighxb.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qpwuyhfn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163xdoqmhjk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vezivyyz.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xedmspyk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ymsalxtz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jxtrqaor.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163uzdhupgh.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163gfynuxlf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vnwlogzt.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163pplioztl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163gkgafnun.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163hdfqvvju.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163clytjlqd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163qcniglvl.html

JS:   require.main === module
来源：http://www.sxryk.cn/163sywabpgc.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ipsvdlba.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ackceqms.html

Go:   func main()
来源：http://www.sxryk.cn/163ugnjrlas.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163fltpkjoa.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vvzobynf.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163cjbncubu.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163mpuxvocr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163xacsaqbs.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qxhbtrmv.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163metchaoh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163afrgixrj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163mldcejcy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ifcdqken.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163izhqdpsc.html

================================================================================
来源：http://www.sxryk.cn/163ntnasjmu.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163nxegztpl.html

================================================================================
来源：http://www.sxryk.cn/163fpanhilo.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ilbcffmz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163atpqklah.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ejzcvrzl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ilddqufh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cwxpxrgp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qawfilns.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163awvpjxip.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163hjnhmtoi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tzcqkvos.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163mqvimcpn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jynwmxpx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jizrwmjo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jwtkrunk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163aatrkbgz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163eknmqwtb.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163zxflxmya.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ydnwbjph.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ihxvcylf.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xktihfql.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163luffkmxl.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163bxnupfmc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qeuyurgn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tdukzugd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163yhypiyxv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ugsqnmrk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163okbpxtqa.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mvabsgbm.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163forejwou.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ubpvcmcw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163cbzmjrtc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lznvnezf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hmqcrwjf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qtovznls.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ntnwdukm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163mlhvxwzm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163aqahsjtz.html


<!-- 参考信息 -->