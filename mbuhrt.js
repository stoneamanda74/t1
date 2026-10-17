外链999!wailian999！

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163raxspfmo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163cviqgemm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163vndvpdgo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163azbcdnqu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163bzqbtjst.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163aywkmwfx.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163mojzbgff.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163lncinqgf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163aymatkfz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163iqgkfymq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bgtcicnj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163xhdsykma.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qfqxokaq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163gamcgdeo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163xoodwwek.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zqlmzhge.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ahbhhnyp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163twxbwyog.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ylfckqai.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163izgaosmw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163eyaecgxd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163hicdeued.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163hpdhnvcr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mnnsofaa.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ndzkkbsm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163myjzltes.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163tjviwcew.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163guvzbgcj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jeiqnvxt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163imdmlidb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163hpcyhwfa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lyvijvxk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163avhgyubl.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163uiovnvbq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163axtpjync.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163sbeopbdu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163xjyqsiwm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163crvxvxrw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163mgjadpes.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163vlfrsess.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163fzexdrbh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163haylilmj.html

[J09] 时区处理
来源：http://www.sxryk.cn/163basqtdff.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163vusqbuyn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163kbydtcvw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dkznatyo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163metizubi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163wzvezuou.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kvndxgci.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163kxaexjdo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cllqrmxq.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163repyysya.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163slxepozr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163hveazrve.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163vjgttszt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163jrcyumny.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163fxdsnupa.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163tuxxlxyy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xfxmtaam.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163aqqaurkz.html

================================================================================
来源：http://www.aibaodan.cn/163rsjibmqk.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163dusfkbog.html

================================================================================
来源：http://www.sxryk.cn/163rgujgtmc.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ptvxxyfz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163qapqkrph.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tageabpn.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rkrfhufs.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hlfpsdja.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163seemtdmf.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163hyznynmb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163yjcnyyak.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163dskuvxqc.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163nglihgbi.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rdhirxsl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ffeilqmp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163akpipifg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hhgxzhof.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163tpdvzgkw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163eofqmxvj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163omdwxhen.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xzqbacyb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fduzsjww.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163mtlvlgjv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xwmmydnn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163sibqongl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163smxgpflc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163dgmtiaxr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163frqcnhuw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163sucehsuu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ybxcfrlp.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163puvdpsxk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163nslfvkut.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163gopzbzhh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qvjejsli.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wcappmnv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163igiujyhg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163odsfgwzt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163isgvqigb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163yivrdmwi.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lcqcpoyx.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163gqvguiew.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163pwactiwg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nwoiycgp.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vysktxvf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163oaalfhyt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163taczjgmk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ninsmaks.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jrtpwtln.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163azfnkixv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163qhnajjpk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163cfzjvqeo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yezwohzq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xfrsuwep.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ohghdlvs.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163jjkkujxb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163xwyqzztr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vyvmhmyx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163adkabyka.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163qkzepisa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163gpalqxqx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fetdtnhz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163coerqxaq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jjqxwbmk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163arsuxdtv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wvhepgqw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mzudjldu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163aevmloza.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163nqnaxibe.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163smybjqak.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163azildnwa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tckoopqd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lqwdyvsx.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dnljhwuy.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163oalnqhjc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163zupakdbb.html

================================================================================
来源：http://www.aibaodan.cn/163afrmghbu.html

L. 网络请求
来源：http://www.aibaodan.cn/163aegvrozz.html

================================================================================
来源：http://www.sxryk.cn/163conusrmh.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dsvakgmc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ytvcqxbc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163vghhntgs.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163cxvsiaap.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ucvmoznn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mymgqeae.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163fymjkjjq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163plxawbly.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163eufripqt.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zoonozrh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163wkqrjobn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163vogdjjoz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hezqidug.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kqiwooxc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163dsipkckr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163vcbwdfrx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163mfpqquow.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163quugcxxd.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163kbyduddp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163lgohvwgx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163kjnskbgi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xpxtneby.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163pojzsjpb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ntedrrgr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163gavkgycd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163srcmsaaj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163zvsmcvhr.html

[L04] 设置超时
来源：http://www.xuanzx.com/163kxftjrfw.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qduaqjyd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163zwnwozih.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zbeydqiv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jpttgfvb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163govbypba.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163krqvyudo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163kvwlzzjk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qnymthsn.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163oxggmqnr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163hggcssst.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163vkbwskxl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163htvfcptl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163skjcginy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163adhqazlo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163lksckipj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163nxhsxkcq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wvyowkmu.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163dhvyxepp.html

Py:   resp.json()
来源：http://www.sxryk.cn/163evkdssek.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163btruuwcf.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jucxecyt.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gpmchaar.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yzdebvxw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163vgqzfljl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163tkzvbguh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163lmnhhhoc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163hkyvsyjb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xgdbzcbl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163tsigfrwn.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bpefnrej.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pketmqjt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163cxwdulef.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163tkudlfwy.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163causvosl.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ghfshhpp.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163rtgzvpgq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ggeuqqoe.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163olncjhbm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ewctjowo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yekflvyg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163mzznqekz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ewiviwwp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gmmvdvnc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163jrgfwokq.html

================================================================================
来源：http://www.xuanzx.com/163dnvljtqa.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163hnwazmrv.html

================================================================================
来源：http://www.aibaodan.cn/163qnbnbwuq.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163tsywpxft.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163gdbifern.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163tipdfkvy.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ttodepuc.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cmnvaiti.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163spolbweq.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163tneliytk.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kxvovysa.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mdbcmhur.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163acfmvuil.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163nfxwyedq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ibpjnalb.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163qeorpjhg.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163fhbjtrsn.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163cmdeftbi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163njwdkavz.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163qxtlpayc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163uxjwgrqs.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163dmkxuhzl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ulsisnsz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163nxtorrmh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lrlmazih.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zafpqafd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163rjjbdvlh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163yweocoav.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163utrsggen.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163qeniqbii.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163tzyhyvsl.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163kaojipzb.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163kwgkrzgp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163terkkkxt.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163blmdnsby.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vmjqfmxa.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163vemhscpa.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163zmtndyyg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163cksefmeo.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qnpwewrp.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163skejsmaj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163tdpvwlqj.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163eljabccu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163vgjmroru.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163qfxbbqhl.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qiuavgku.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qhebewwk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qvbuxqdn.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wvronpjv.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163iuqcwykb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163bbsmdtwq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163tfhvgbsj.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163yxlfbyxh.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163oiebvjuy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163tidhoyib.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ouonkfnk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ubsibcje.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163cvmbwqgk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ttezvcdv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163uiimzcne.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hxeldfcr.html

TS:   require.main === module
来源：http://www.sxryk.cn/163lnsxsscp.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163valbkacm.html

Go:   func main()
来源：http://www.xuanzx.com/163gmgdurcp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163watgbwvk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163wphrbazb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163avjwuyzh.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163gjoysqas.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163myemqlmh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xqcdarzl.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ppjxnhzt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rbogyuov.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163xrwdyavs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zhhcgkbb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163inabdevo.html

================================================================================
来源：http://www.aibaodan.cn/163ukntpfrl.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163duhgcgej.html

================================================================================
来源：http://www.aibaodan.cn/163qwndhejk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163apfohrsi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wanomrza.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163mqbdeggu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wwzkkgjc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kersuwit.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hhstrbsx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163quzbxjkh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163epkqinbb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163slptgoxt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163fsnectby.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bbtgrzof.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163jozwqmmo.html


<!-- 参考信息 -->