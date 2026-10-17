外链999!wailian999！

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163renidsyr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163uatclupp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163labobedk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163cbonytfh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ccyaeedp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163fzpxgaho.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ddghmamd.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163okrjxttj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ilsvyjze.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xzuoccgb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hdkaihtv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163iikhukpf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163gyhnpvgp.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163oxztnooo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163cubpkzuf.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163mrbnfrmp.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163fpuftgmy.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ciqezyye.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163maqfolnq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163otdrdiwp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163oaespjix.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163nhvgykit.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163qanoatql.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vbtwhlls.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163qllsyztg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kcvqeepp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163kfdqvwpm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fztcjgre.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hoguxaag.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163asdxpnhx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163goguaqpr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qbpgyqvq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163phqrtznb.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hiwjzstd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xmzdgtrw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163danrnxry.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163swkxnbdd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163reclvmds.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163otqhkhmb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fzahiuyx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163itswixzt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xwuirqqn.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163etlxkalb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163gvosgxml.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wfxagcri.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jqtoxzfn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fhdbvxmw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xjfkbvcr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ilbekpka.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163srttpjkh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ckdhgoqh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163txrsailh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zrugyoph.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163iuicjesf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163siwjrqld.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163xklaxlkc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163wtfkumbs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163necafysy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163tkdxhwxu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163shjvnwhm.html

================================================================================
来源：http://www.sxryk.cn/163pomjixxq.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163meyeaytf.html

================================================================================
来源：http://www.xuanzx.com/163lirlhfsg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163htebvvws.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tinyrydx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163acsomviq.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163loiwsctr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163giqgrdrc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pztrtvac.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163aeudyauw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ycirmplf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qlgjqcfg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wzoqfoob.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163jeguleow.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bzclnavh.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163alrwlcbb.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163axfwzrvm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xqibnuxh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pnrvnxef.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163fjoheeef.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163kcphdjdf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163zwrhkumi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163pwkbdnmy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hbqihrck.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163danttprc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fiunlebe.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163cfabflok.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163huimaksq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163xyzjddmt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ggvvegrp.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ezvnouyy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163fmvpzxkw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163dkzemeue.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163iclsfxjj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xvgsmhjv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wrdqrubi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163lzokqoon.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ulczywsy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163hcppigjd.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163maxbrhcy.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ivegptvt.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163krtkftwz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xhsusrvr.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pbhqtsbx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rvonargg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163exljzube.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mvrgeyld.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nedjpqch.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ocsqhcxx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163lqebexpx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163zynuvkrz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ozagwmur.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163adyfwnkb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163qztjeebt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163hhqzbuic.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ztcqdlhv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zwsmgsui.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jezjufxg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163maserzgz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163tmbtlnfk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mevgcdjm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bxuzztdb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ynrqgjsq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163crqdjzou.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163cqegrbkr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163dpwvhesj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163cerotovt.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163nkycutco.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ewxtsrnv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163actzxupf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xectjsaq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163jstimnqg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163clmqtfmt.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163nriztllo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163aurhxxyj.html

================================================================================
来源：http://www.xuanzx.com/163qfphilqa.html

L. 网络请求
来源：http://www.aibaodan.cn/163zfbbgyqb.html

================================================================================
来源：http://www.aibaodan.cn/163zbahqmqg.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ckllrkxq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163qgiwoyng.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163aviycufq.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163knjugdha.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163qchpoofx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163glibuwkf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qlzadobf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163bwvxwlec.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mqgkaebv.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hnvdrhzg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zttxmldk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163eemljegl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163waagojji.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pawivlbs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ovkppkos.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163sxnmeiqv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163hsacmint.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163nbckiqeg.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163gncjlmgu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163hqerfhsr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163gllokceo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hucgshah.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ecwmjjfq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rmsrgblq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163wzujwerp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163lzwyxqiz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163xbcrygdc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nmiywfgy.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163zctlulmy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vvtjosvs.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jndicjze.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163sbinrout.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163stuynuwc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163amdkxsmo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163amyeoycu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lcbkceej.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163deixkpcy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163rlgynjsp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163cfzcwtxv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qamliyqm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rijrrogw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163hfgrrdfd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163qlegtrva.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163rggowbmh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163dmufjivw.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qlnvwfcy.html

Py:   resp.json()
来源：http://www.xuanzx.com/163hwbhffmh.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163prcdanbw.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163plyalpde.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163uwkihwjo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163egytbqyy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hjzmaect.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vbybmdag.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163giejuyhq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ccqxeiny.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163bouioqwp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163kcrvvxxn.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pmvdcdhy.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163byuemevv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163mitohfik.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163yqlahjfr.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163xweitmfb.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163tmerdjxi.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163znylfcln.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ofurxblp.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163pvsrpvra.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ymsmynfi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jhvvzlpe.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163uirctnpr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163soxlszei.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163pyegndot.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163rxogtcto.html

================================================================================
来源：http://www.sxryk.cn/163oxeegpan.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163nozwobsz.html

================================================================================
来源：http://www.sxryk.cn/163inzohfeh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163uyjxgopw.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163mawukvbc.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163dzrasaml.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tliaclsy.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kjurpenm.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163egenahbs.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163mjvfqsly.html

Ruby: ARGV
来源：http://www.sxryk.cn/163jdkasmsz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163cyaumjxh.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ooatwqng.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163cknbqwzj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wntkquoz.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ipydczib.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163oziehlxx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163zyofjlbs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163lkntnhlm.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163vxxqpipk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163nysexotq.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zekvekvw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163myeyagcy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ykzyelsm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qfkjmerb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gcdpczmi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163fwybcbpn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163iefrqsqt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ifdnizhj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163dhrwwlxl.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bihbrfsb.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163zgbsjxpj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163xvamldmy.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163jtrmbakf.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163yhatlruv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163uaqxgxjb.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163grxrwfpk.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163dmmqandd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163iicrymeu.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163pmbjnewv.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ghrcjjnz.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163onsioxzl.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163owhlpbic.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163jowwwcnr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163hbuqjlat.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163oyigqvge.html

Ruby: exit 1
来源：http://www.sxryk.cn/163dbcercuy.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163beklqeek.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163oaxxicyg.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163mjddpphj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163shoaroin.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163uodspjgv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ykwxccbq.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qnswvydj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163nqiijcql.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163tyeuookm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163hisxxlgq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163itcmjglv.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xzvpeygo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ugsvnpyi.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163yysmcyfs.html

TS:   require.main === module
来源：http://www.xuanzx.com/163bksroafu.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163pfgpchlm.html

Go:   func main()
来源：http://www.sxryk.cn/163qzizrcof.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163stkywnit.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ayiboszn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163brkrsbci.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jbnlcrcv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dqsmblfy.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tniwqppf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163keozvrpd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163wtcevunf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163hzqnffsm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163bkcrhesr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ojubahrr.html

================================================================================
来源：http://www.sxryk.cn/163srrrmdld.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163qybxzijr.html

================================================================================
来源：http://www.xuanzx.com/163tibocalg.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163dannqmgs.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163njzdpwgz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163uebybzav.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kkanyxbx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ypxepthd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163uetnvftm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163aswgvxdi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163mwiabcps.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163qtvvolzg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163dlsfywiw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ysnsfson.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163amgxjaiw.html


<!-- 参考信息 -->