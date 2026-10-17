外链999!wailian999！

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nbiyclly.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rvyutrmp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163gqgskext.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163uigkwadt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163pltgooon.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163giqzdsod.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mruganri.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ogbzlvuf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vezbmsec.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dwidoepl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mokcokte.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ctswtzxw.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163srvthfaa.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163bfmtmxxb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163gokzvkng.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163dftwvgpg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rdxsmort.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163oxphfkjd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163bwqacpkd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163yndtryxg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163hzuvgdxn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163npftmfcg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163syjlkizn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163rjkjpfiz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163nwemwofw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163vybifdhx.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163zpfupqcg.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hqhsjkmx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163kngqubat.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pplsblfb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xpakvjko.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163qhgdvyxa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163fiqmblzd.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jzoytwbw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163azwqjjww.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163lbyadqaw.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163jazktufm.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163onhmfmbk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163sucyokol.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163mkdcutee.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163gyejjevd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163gxstjzpi.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rmhdwmue.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163qqrnetyt.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qhzsfiah.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163btctisrs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ffhkkhzc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mmanbucv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qjyxezeo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163kdiszyow.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163gmekzigy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pgcrblgx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163shyuhsss.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rukircol.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zblviynp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zrmwezge.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163kezoegmr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163uyizgole.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163eeeidoag.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163uzucbffn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163jdtqgrsx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163wcgwuouv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163klousnsh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163sngpibnv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163mfmjiubd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ztafetjh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ybcllecq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163oljzdvjf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pytrussf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163oxvjbuys.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163pkpxshvb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163adcnnlpd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163sxozhzop.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163eonbsxnp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163lxyxyqec.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163zyqhuiil.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163miswadzc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ysywdmui.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163nlxutihh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vadgskqc.html

================================================================================
来源：http://www.xuanzx.com/163ouiafopi.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163urfeujld.html

================================================================================
来源：http://www.sxryk.cn/163rkunfymz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163utcdctxz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163kgjovmkb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qqggzodm.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163moudfkie.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163yminxlwg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ktvuxkrw.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ewgqxlao.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163oghsvcal.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163liqwglnw.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163wmjnvprs.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vxwkwudm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163svpucbob.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vukcwvmn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163oaljmvwm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163mrudbhku.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kfgfammy.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163rlesciud.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163rpoqjerc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163amsszuji.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tpgutzox.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163bckwijqi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163skskqbxj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jjnvgnlr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163hqyyyrvn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163rmwjicfh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163carahyno.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163sbgykstk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163zvuddyvv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163rbetwhlx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mmuvhrbc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xgoifysk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163njnoomuv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163kdtgzdli.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gejubuls.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163mhobeegg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163vhblbpwu.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gnyqpvsl.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fckvhqjt.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163rjktomgm.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163amrfmflw.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xlnjgofm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163psnaarga.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163snnqvyij.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163kyftgxwr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163lrdvgcou.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163cgakntba.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163djkgased.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163hfishtrz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163iwvffuvd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163agreglpx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163wcywmuzv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163sjbqfrmv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163btsaveaa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ifwserpw.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qxxaeruu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163yceyvvnj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163rvzvpjwa.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hsrosfou.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163atnmwkyp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tsopzudg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163xhtnwvrn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163qxkewgmn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gnkquayk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ppohocnt.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163jidohrzd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dhwjropu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xjswqmcc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163loyazuci.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163yqeylemd.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163hrewgafg.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163esnuolgf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163scpoygcn.html

================================================================================
来源：http://www.xuanzx.com/163ekrfzarz.html

L. 网络请求
来源：http://www.xuanzx.com/163qtziifkd.html

================================================================================
来源：http://www.sxryk.cn/163vvwbsgiu.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163gichizvp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jmpyvggm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163iiofgroi.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163woylwhtf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163osmiyals.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163upxcxwgz.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163mdbfemnp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163gzyzafce.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163lddfhndt.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163cuksgqnb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xxfeaxka.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163bgzcgegx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xcpchehx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qtbxweya.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wizqqixy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163tqzctplz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163eltrovta.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163hcmcurkq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163avhtjyfx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163vmhxrvjt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163rcggijaz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jetgjgug.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yincsnpt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mdbnvbuf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163lndpxqvx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163dmruiipp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163nmahaxbx.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163konwuakj.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163shghyucu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163fszgeaof.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pgynfsqy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vuhdvsso.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163llqijcur.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163feqlagzb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lfvnyxyt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163kjppmyzh.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163amlyoxyi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163gumpvzka.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vzdhdvay.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163yncqmfkf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163fjlkbsaw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163kyyphahi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163wszwdaii.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bcrhtayp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163rraswdem.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163iyxlcqim.html

Py:   resp.json()
来源：http://www.sxryk.cn/163yzvhecbw.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163fesmwbom.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163getjphoh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163viorvzgx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hkwiqvau.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163uqubqoea.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163mnlmnyli.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163cfwmtzbp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163plcesrum.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163kqwzrkyt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xgwtzugv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mcgjotyr.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gfdrgknh.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163oymfyzsi.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163oxwqrkjx.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163pszdsiar.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163zobnlpsi.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163itarsehn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163havyvcbt.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163lsqxteuh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pvsroafn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fcrcsili.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163nkkthink.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163cnmdewyo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163aybtpalp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163gpavovog.html

================================================================================
来源：http://www.sxryk.cn/163yhsybreh.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ammckpcv.html

================================================================================
来源：http://www.sxryk.cn/163kjzigbgd.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163bnyuwjko.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163uckozkep.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163polccxzk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163axgxytlb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lrkzrqxf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ibqhvkgw.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163nyfnlgzn.html

Ruby: ARGV
来源：http://www.sxryk.cn/163aipklnho.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nkrdwlny.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163wjlwauhn.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163kwkcynza.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163kmzgsfyr.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163gypyvjhc.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qxprznge.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mwkkimbp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hvwjkcze.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163luhynvhu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163zvnboiub.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163timrouut.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ogzatuud.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qzgxkdiq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hgjyzjpd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zozoiiws.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163mtivitof.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163njaaqwcb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163phffbroc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xsonhoyh.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163bmdbxlug.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163jvhjbtvp.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163oyoucpbb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163mmujhqmp.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163dewhjlmn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163uhazmuvx.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163xhdhlazu.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163lzkvnkiw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163qjpvuhml.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vxdrtrig.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163kpddqejv.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163grrxwljc.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163uzyyhgjj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hksgdgec.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163dychjukq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ujxccuab.html

Ruby: exit 1
来源：http://www.sxryk.cn/163rwshxmco.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163olakldux.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163vvygileh.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rmuricpb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qitcevpk.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163mctbouau.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ivygqdrl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vfskrlhj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163zxrulrsi.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xdbnbiuc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ihazgqis.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ertjydel.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163pidayqwq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163wrbouyzm.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ugnlirmj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163mppskqnw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dldcfkui.html

Go:   func main()
来源：http://www.sxryk.cn/163rxbtaypw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163eyobppiq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163crtsrwpb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163qdztyguo.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163kqpdugpf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ivjtqzwm.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ibjduazg.html


<!-- 参考信息 -->