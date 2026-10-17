外链999!wailian999！

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163wdzcvroj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163wsvolheh.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bqcoolah.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163wxuughsv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163sjwyeulq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163guhpgohy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lvlcedpq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163smmvgeeq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163oqckjjpw.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163dztuuwnn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163cxwemnlo.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ispqgjan.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163isparwjn.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ftyrgkjy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xcooukww.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ibrzqitv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163wvpvrley.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163nxfqtvpt.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163utvokksk.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163yquxxbph.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jmnbupqj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cwpnioai.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163bjchqggw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163alurhpkb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163arobbgzr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163nqawtfpv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163rkmthltn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dbwsvouw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hdclhbyj.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163zieonyka.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163kwqraylw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163hiznnejn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163aezgmtkc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163imhkjxip.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ujwydcao.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163gqjdrrzf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163azwaawbl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163jumoxufq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163cdqjwvrc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163foiiocte.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163jpxhyhyu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qclcawhe.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rgqymfne.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163bejlaatj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163uingazpo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163xnrgcjfy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ncyqrhks.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pbutzhmv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163aizrnedb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ypnwgwaf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163dfkqvhiv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163egwfngqv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163aqrkdela.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163llrqqfcx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163alpoqvxw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163iaixwkmj.html

================================================================================
来源：http://www.sxryk.cn/163eqxakrzz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dhbkcusn.html

================================================================================
来源：http://www.aibaodan.cn/163mhhsvsgc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163bsvijsxx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163uhirdevf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bcsmpwyc.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ewcraydw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163uyiqtqxx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163chhxjlja.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ydvlnpns.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163lfuqbzzl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hyfgtsva.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163aqhbqffs.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163tpiyzjas.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163itzoscpb.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qomomdhl.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qxtvaqjc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163menleweh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cqhgfaeq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163brragcho.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163bcafbcaw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fpyzoxsl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163lkrrgjew.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gapcfjtr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rpwellub.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yovnefvs.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163meyewyen.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163pcfohmco.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163anqrmuek.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163rudqxjai.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163afxejzuf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163mmwnpafd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ggalazjx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tfpofzcc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163icmcakpg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ugqibyou.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163auinscow.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163zpvlfdvi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163dcbgqyhw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163zbwrioqq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163lhmnvldn.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163phgicuyb.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jmrbcpfd.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uixdnvcb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163qllmfdtd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163vchxjalq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wekcpejl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163xndhhjam.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163nhtgkupl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zuhedttb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163mvhjlsgm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163amtrykzz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mdkprfqd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163wkmfxntw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kqspocwa.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163pexwymtk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ynkuvxxn.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wxjsqfhe.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ojgqcdom.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163zpwgigdm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163excxvobq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fpwhuoqq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ooexgvsh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163nrsegcpv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xgflxnpp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163bycdjuiq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163rdashygv.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wzkyhqye.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lmhpwuxf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dnfxazts.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mifqtmxo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163czbqodry.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ewbjxodw.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ufrsnysm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163eephybdh.html

================================================================================
来源：http://www.xuanzx.com/163cmiaxrys.html

L. 网络请求
来源：http://www.sxryk.cn/163oxzdwmdu.html

================================================================================
来源：http://www.aibaodan.cn/163utptgjuz.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163foaspnvv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163gaymrmqd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163hcgpajsp.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163nkrwnkzw.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163sevrfjox.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163yahhenlq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163anizptns.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163qkkoqztq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163kwfzifub.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163zjcsftaz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163gdckkyyx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163vwahovab.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rbpohwrf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zrfqofqw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163yfhysaan.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163xrhgvsyo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163tenzvagl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163sjaxkfiz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163vbhkhlku.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163lfwcanjq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xqsdgtvj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rfequuny.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ejdybsvh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163omnaisiz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163fqausric.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163uvsadhdp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163yobcdcxh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qvvcvqdn.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163mfboorbl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163znavrpoh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163brgabqhr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eiqblgvs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hhdrkupw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163arejdrjk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zomkcaab.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hxxsbdxx.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163iootuuik.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163urttnkzc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gqzxeldh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vqchkbjm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163irkmtlkv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ilrmuefh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163mdxnmszx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163bmiqhcwx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163qtgdokgu.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163agjjkfsz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xdhhfheu.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jfaavwex.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163jczlhgpx.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163cforslcm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163bbigyuhm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163icxhnajf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vovspwva.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163esnpuxww.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wpwositn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163cbqgnqpo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163lqoohabl.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cxzvobdz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cdaolnso.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163svjpytyw.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163oxcklott.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wltzovhn.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xnelyjdo.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vnsgeeri.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163nroezfuo.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163trsxhjhl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163poxuondl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vrvndtgd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163qxgsnwwu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ableznuh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163btoqafzh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163nbhsjxlf.html

================================================================================
来源：http://www.xuanzx.com/163xuwdciwv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163uavytmdk.html

================================================================================
来源：http://www.aibaodan.cn/163oeukuebd.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163sszfvytu.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163cyccclwk.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163mqtwuwlx.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jwewngxb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hiwbhahl.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163aspzokqf.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bbagahgo.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163tsgjxygp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163thricqjk.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gjnbqfhq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ttyeabli.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jlbomjex.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163gafywkmz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163qmohaued.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163enwjbwzh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163omkltinj.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163qcfkaarg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163uffxeroh.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163mvtognmq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163nsuhehwx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jrjytkqb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wcggifgr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dlnxllnf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163pocizmma.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163pmalnmen.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jcpjzcds.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lsigxkhr.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dbunsiww.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163budmgaux.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xlsfgsbw.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163suonlkcy.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163axtshrhy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163dymryohc.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163rwpqtfpc.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163baexopvv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163giftcbut.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163bukkfuld.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163hucyrjvd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ruxltgcn.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163oilpadjr.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163joygtyzb.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163lgxqutuz.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ngaairme.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ckxpkzgf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163nfutxjeg.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163vomgrltu.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bcfkalad.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163xtnftmrt.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zkyxganw.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163cwcotxnw.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163zucltyns.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163srmqruzn.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163pjplmtne.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ckvqqoux.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163onpclyiq.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163kqwjievc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163aineoawr.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vuixflfi.html

TS:   require.main === module
来源：http://www.sxryk.cn/163napyerny.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163emikwimm.html

Go:   func main()
来源：http://www.xuanzx.com/163zvdfwpxo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163vqgwbzgx.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163jpbisipk.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163knovbnkp.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163petxxspl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163hqlqpwhx.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hzallxja.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ebsbcbhy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163gtkifrdz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163kmvbksho.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163kijofjtc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163bayypxvs.html

================================================================================
来源：http://www.xuanzx.com/163cagmvihb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163uezsrjed.html

================================================================================
来源：http://www.xuanzx.com/163vlqsvnud.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163jjtxdqzn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163iklewzjg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163orsfurrw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kqokibpw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163awncdcbg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163njpmtqfj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163cyruxqph.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163cepiupdu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163dnjkmmqk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163owjnwvvx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hlfjekbj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hvmiyvld.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163riucwmgo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tycnmlgo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163wnhkgvju.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163uodywfpj.html


<!-- 参考信息 -->