外链999!wailian999！

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zmhefrwt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163iixpqqbq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163gypvdayb.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163pxdthrss.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tppaipak.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163mxvgazxw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pcixvojy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ieijokju.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163tzzusfrc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163lpghiwfl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xtaguefv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163evfrnxgl.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nmsurbsu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kxmvoiep.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163styigctg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pfnkvjab.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163hxbsqweq.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163wloghnab.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wlkvrjmb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163rcckszcx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163lwxrjwaz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163frsryznx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ktlshdki.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163baaydynd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163sscefmdx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163qtwbclsy.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163gtysrgxl.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uvlibrox.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ksbhwbts.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ghixfzon.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wrcjsswk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163bkqijigk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163dstbiuie.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wfgbuujl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163fugyfzzz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ppozfubh.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jpoyaede.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163nedqholl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163rkqjevdh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vdpbtxms.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xnypunrw.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hskdovwd.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163kvcexavw.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163bgdbabcx.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163djywyskk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jmplkqfb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163lmqiinbq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163daoxahxg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163katjfzum.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163dukjjdcf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163hwhtpxuu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yonssqch.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hssdptbe.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163eqcoqhkv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wokpjzom.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163dkefoboc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163yezkpdhj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ioatyzpr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ytxuceiq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163dirjqbhm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163fgozzkiy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163jxawuqho.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163homudtqv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163lnaidutf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163tmhlqwqk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zcoypyfd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fairaanf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ebtqzsgr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163shipkbbk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163pvmkccfb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163aynueela.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163yovajaga.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bxbsarag.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163sdepezga.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ksfwhufu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163pnrsbgsk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163wfddwiue.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163gqbfkfyi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163xkjipilx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163mekkmmlp.html

================================================================================
来源：http://www.aibaodan.cn/163ayqxasox.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163gxjncnyt.html

================================================================================
来源：http://www.aibaodan.cn/163anayvclc.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163btqrgrow.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vhsrfzoi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jedqljut.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pegwecpz.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dchpwqyx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mtfpohid.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163pkbifkwy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hqwnnxpe.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163kpvcrceo.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ijhboxpr.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vevxphcm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qbftzpwc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nkkwbioa.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mxvfzcjy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163emfvoxkc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ntlqrhye.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ergcyvhr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hxmxamqv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163quxepzmr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163xwdccali.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163esnavcmx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163oepmgudi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bkqgghlw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163gufrlonz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bipboemn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zobnqcep.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163gufkqydr.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163bxmtnbxj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163smzviriv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163lgiobwmw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bufdsgxx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wtxoqobk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163dvbbbtau.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wyvedrnj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nonnufcs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ovrdkxgp.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163bbhwdtiq.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163pdnqxhsr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163iaksypcm.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fbtdapaw.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lmubgltu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ibramkls.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163solacowa.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163tlruvjkt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vzlxqcll.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163skfkyhdh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163nrtebssy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163sdmaibpy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163utyadgjw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jrsuotud.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163xrjiaslp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163fimqxfvb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163jjsjoenv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163orxpssww.html

[K07] 进制转换
来源：http://www.sxryk.cn/163nppphtzh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163gqwaamox.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163gxlyhprr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vkrqiyus.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cwqbmbhe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163rtsxisbh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bkpvxyxp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163zxadypky.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163paynzufa.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ortbivai.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163rsrijdsp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163tzfoncqo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yhyrutgl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mzvjbsiz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xrrqtqoz.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163quyunhks.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163eusimcle.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hbqzgufh.html

================================================================================
来源：http://www.sxryk.cn/163tdlmodzn.html

L. 网络请求
来源：http://www.sxryk.cn/163facsznii.html

================================================================================
来源：http://www.aibaodan.cn/163knznwjzj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hsxsnkxc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vawhybyz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163xfoiyqtx.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ounmiwnf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zevqrcle.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kyrnydcg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ouiipwyz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jdfpdunt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163bwozftdv.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163kljvafqr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163crfenlnl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163jsjjznwg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hkrnqjsc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xdaabnwf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ltswambm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163bqsmslry.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163hvlqndqc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rctxifjk.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163mrmphjix.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ivqqolpp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163hjcffqrb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163knfwkoxv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wcaxpyez.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163lvojyouw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163kzrbaxgv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163hyjgevhi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163dwgoizhe.html

[L04] 设置超时
来源：http://www.sxryk.cn/163eitivhqy.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163oilgbgag.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ditgjyua.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hmhuxnkw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163astjwxpj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ayalgcua.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163tkkdphfz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163digchvxj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163wozkbqrj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163nogotqsi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163mblhtqth.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163xsibvrgz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yunmccsa.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lnslhyqs.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163uwkeomho.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qjbvqkuz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163uzwsbfdn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163qoipvucw.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163uspizhzg.html

Py:   resp.json()
来源：http://www.sxryk.cn/163eajdiyrw.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163cavubrds.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163rzodmoif.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ukpltuon.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163nqrmijgh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163mfvhgilh.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163sxggcdal.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163tfdnyjac.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163zvfjnvzb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163xjwlyogy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163snltwdtt.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ykmyqwak.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163vsozkxnn.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163hpynlwkh.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163xcnadnwd.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ydbtsjsh.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163bbrdtaul.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163tplzxpnb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163iizxzmff.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163knsbiwrn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xpwrjkoz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bxcgpvwu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163vtxlpvbo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163wbyhrfsh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nviqgbqe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163diwveasz.html

================================================================================
来源：http://www.sxryk.cn/163dkcqmkms.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163smlodayo.html

================================================================================
来源：http://www.sxryk.cn/163fdbqecbk.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163qufnzqqj.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163cybgfhmx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ibeqgyeq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wvvuuczx.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cmsrvoge.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163gfhkvlal.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163vnvjfwvl.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163kvfsxbdg.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163giulyfdw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163wsjniavh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163spubwove.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163cqusrcmi.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163zismmcib.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163qtwaozfb.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kowwqhgo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163cqvgrduy.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163cdvgxpam.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163yluwoizh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163yfomitdb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163agymikvh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qafadfdp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163urfpgwdc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ucxghpnm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163tdqwbaii.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163olkhpvex.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163rsgohhlk.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lgeuwjzo.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163gelzzhnm.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163pswvfnre.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163dmfkxfuc.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163vuebqbxb.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163umqvaxix.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kuwymies.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163jfbyysrz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163yltlqyrn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163qklnaaml.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163uigoxrfq.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ztnoaepp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ctzyyutk.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163idtggqun.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163bkqmtwwy.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163oycnaqpt.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163bxbmcnwh.html

Ruby: exit 1
来源：http://www.sxryk.cn/163zhxwunpu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163llxphgcy.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163kafcotal.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163chtobadh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163uackcvml.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163xcdlrjgt.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163zxwrxnql.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lfaklfsj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163qqgmojst.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xfbyuogr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163tnmbntgu.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163axrqvwld.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163lbnhzbbf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163mxaittqk.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hfeebajm.html

TS:   require.main === module
来源：http://www.sxryk.cn/163aohwrnty.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163jyjsnnkw.html

Go:   func main()
来源：http://www.xuanzx.com/163ecqlagzu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163yuqaofxm.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163uhzczvmj.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163hxafueqi.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vzwlnzyp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163kqatverq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wfltszwt.html


<!-- 参考信息 -->