外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rxfgmtkz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ndzgmknb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163jpjdeacu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163tjeiusxu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rszauqnd.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163aabdevqx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163cmjucfmc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163wivabeuj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163cxijoxbl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163fktciryx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163lizubikq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163socljbld.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163qdgvwhsp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hrrvvvkd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163xnvbthto.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163dvkxutog.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163cchnnlfk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ddweycxt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xckvrexa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qfchebfq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163rbfccbfi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163lzokrbjc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ycncuxvo.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163yvlbzhwp.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ynakekxe.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163skuqlopl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163lknqpsul.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163bnhvrlgh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163skhbteaf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163cmucgjqt.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163jdccmsjb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163nuvobjlo.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163iwbzztrk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kxrxmumt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163awhcgmkq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rmhnigfd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nbtzuhda.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ixbswqdx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163qjsrfrhc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dkjmquxl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pnxjzlra.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163wzadzutf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163vqutyshm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vmcasnsu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163eukexwil.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163jfebckoh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qqlibdwf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163atbesdkg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163aotpjjbz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163raxgjbti.html

[J09] 时区处理
来源：http://www.sxryk.cn/163aprmddbv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163dwdyzkkx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163updnvehl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lqqzthow.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ajkvrefl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163cycmevfe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pyirzgnk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163gbmqblmf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163zenmgssi.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163basmovzf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bethhidv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163jaltrvav.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uwwunmyn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ltuutycl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163bkqctfuo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xqydxqnv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ddvrpknt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163pqflkwfa.html

================================================================================
来源：http://www.sxryk.cn/163jpaiqlsh.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mccxtjib.html

================================================================================
来源：http://www.xuanzx.com/163vrdbghee.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163clilnjss.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163sdsgdoep.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163exfibuhe.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ljylpmqq.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163sfzxuala.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163mrdjqpxa.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163qguoimcd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vjhrzane.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163lwikaxuo.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163gzmhukpc.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ojnzagys.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163xdvtqamy.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ghxijzmz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vmctidem.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163tglrkukp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nqtnrxdc.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163mfkjpbse.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163nmspkldx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163xfdoxxup.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pkmittxc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163upnyaqbm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163obcxpuff.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163psrxyart.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163lmmjobhg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163dolnjhqr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163vaynyavc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163azkylsjx.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163qloebfbr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163tjncvpjz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163gpzcntkj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vmzzwoks.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mrxewmmc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163gmmjxyyg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xuckfqts.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163yngaaswq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163lqpsvydb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163xzukomar.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lbzklcxr.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wddtbomo.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nmrqnsjs.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lwoeacct.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xftzrwnp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163swkukbfo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mdoniwxz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163gxqdwgdr.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163tdghtobn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163toquvdto.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163swlekcar.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mtguxupb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163yrqnvlea.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163znrarebv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163gtxfyiov.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163vbkhxfqi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163mvkfhern.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163pgzdcsim.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163sscjuuze.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163bkwzvitb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163corytsjh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jlarmpma.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yoiefdwv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163oemrkcqy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163nwtborvr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163lvwdbfhs.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163oajekmkh.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hnbzqqvx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lzxtfvvo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163bhikrroo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163monmqbza.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163wnmfseeo.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vystbsxx.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163lldktpxu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163thucwpqt.html

================================================================================
来源：http://www.xuanzx.com/163lvzpvakz.html

L. 网络请求
来源：http://www.xuanzx.com/163ucgidowk.html

================================================================================
来源：http://www.xuanzx.com/163ruclntgu.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163rvpgmuar.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ddpoejyj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pjehnffy.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163mznhqnci.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163dekwmevu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163zzuviefm.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163tpfcttaz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163eejhjtjl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ymanqpcz.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163fwqeplsf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163bcluwgng.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163asltvrjh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mxoinhyg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mrcdnqsr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kxaxyjac.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163mndinnyd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163farsnxva.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163szjhonxg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163jkihrzmc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163xflvsqty.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163jsxsjpbg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jamotsbw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ruvvmkfj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163hpapxpky.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163qoafbweg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163brlikjjc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163revsrtoc.html

[L04] 设置超时
来源：http://www.sxryk.cn/163czvtgeue.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163jojjlcdx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163accyhthe.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ukolsmzm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163scccfbfr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163diryoifa.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jtielejh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hbbkruno.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ikltynux.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xmlskqcs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163mgonjdtv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163pffmpzvi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163frvlbykw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qciuasjt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163nrojmher.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163cfdrmyap.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163iuhpsecx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xpurkaql.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163sruojujv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163btqocidl.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163zapwragc.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ihnlrhyg.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163iujdfxhx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163eoxuunyv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163xapovlrp.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163whdaucdp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zgkowzfa.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163nksbmtfo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163jqmzvjwn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163olcnscwf.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zzfejisg.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rpzcmtli.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163jhrljyux.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163iytmyjxf.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163thjnkwts.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163lxfnpvaf.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163rwjlemsl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163sithjoxv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163okuwngqu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hezfapae.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ooscsfdb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bayblqeg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ivwgrwlg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ddjdfqgc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163atjfqfhj.html

================================================================================
来源：http://www.aibaodan.cn/163luqpbewc.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163gpqcxcqa.html

================================================================================
来源：http://www.aibaodan.cn/163fqrdpudn.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zjgayfrq.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163iemcdwrh.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163uamwpydz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163pyaecwyp.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vbglnphh.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163psbndtqf.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163vvslmqoe.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ueyblfuj.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hexengaw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qpnxsqpx.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163hmjzblkb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163nlonexiv.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163juxrplmj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ryhwajuy.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163udkksezt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163yjstzmup.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163dxiafzzg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163nhhgccee.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163yxfsacfn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ynuppumc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163tffniugz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gatcadbb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ypjpkjag.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163uyencapv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163hqmzixpu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163fvomealh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163luhafqfi.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163uyxcjqbg.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163kwprwyrb.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qcetpigd.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163bxqsihae.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163unrthnde.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163unwaajlm.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163yuxtjwdj.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163slwaukfl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ltgezsgu.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163vssaakvl.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ledhrveh.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163gtzkgejo.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163pqrwdtdl.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163pmbiufcy.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163atvcugsn.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163kepemtud.html

Ruby: exit 1
来源：http://www.xuanzx.com/163tfmqqoih.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163eiyqveeq.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163clprefhi.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bdmcefnx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163igkfqelh.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rkwafvww.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ezrbbmfo.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163fjxzoeou.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ukyyhiqo.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163uvrgdenv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163eptxxwll.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zrsajmam.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163sdshximy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163elejppos.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vbfkbtkv.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ihhavvlc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163itzcloeh.html

Go:   func main()
来源：http://www.xuanzx.com/163yafqisth.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163cteglbyl.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xryxgyyx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163yozjwpkg.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163kulwtrmy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163gzjxpwet.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ewdgvlir.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zquhvssq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163vlupooqw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ihblcfke.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jqoixjob.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163dbewjxvb.html

================================================================================
来源：http://www.xuanzx.com/163owjgqagq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163fdcqghkw.html

================================================================================
来源：http://www.sxryk.cn/163kezfivoc.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163wvofvcqx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163diawtqlz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163vkyzxgvp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vjizzril.html


<!-- 参考信息 -->