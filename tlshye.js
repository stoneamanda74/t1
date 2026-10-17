外链999!wailian999！

Go:   time.Now()
来源：http://www.aibaodan.cn/163pafdkdyf.html

Ruby: Time.now
来源：http://www.xuanzx.com/163olftlfes.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xjucviko.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wbgmgqys.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163imakhuqr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ngirmchz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163vgdkkdnx.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163prnmstqa.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163huayidwz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163xqwdybwb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cxhxjbhm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163kyisvarn.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163pvswbwpz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163epyyswjb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163phjhisry.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wmfuwuuc.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qoykpcor.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163avrhbdox.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163sichcyyv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xfanbhug.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163jytxfruc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163tddzhitd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163fuqnqeoi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ojizyuhk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163llveexsp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qitplgru.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163reycuwys.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163kafzcdsc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xiigxjdr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ceibgdaa.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163gvwqgwrg.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163eczdurfq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qrztopcx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dvcrueea.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lwvxdzuc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gxmxuujt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ekskcvdk.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163egpbaoeb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163thylghbl.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ysnayfwa.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163xefkivou.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163cxvrrcko.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gfixbidu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163yuamxygd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163iprjxnnj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163dgkgiwra.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163yhgsykyt.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pcdvefuz.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wuhspatb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mlbjndac.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vfzvewcq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qncgwbrl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rjybwbuf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163uyshcxhh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ikxficdg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jdrmpkem.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163brmqbswb.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gengpdyk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hsxfwdmp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163bntygcay.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ctwsbxdg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163brrawnxg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163rkevbtbz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163accdxjsl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163assrcjwz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ianafxwe.html

[J09] 时区处理
来源：http://www.xuanzx.com/163laiemhgz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163dcrbaubj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vjykgyqq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163trnsymgq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ziekusvv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163szwtjouz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zqfpphda.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vwnqmyjr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163bedcjsgl.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163qdymyxaz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hkdwvvds.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163xmhblkrz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163sjkavwji.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163iwsgyvwi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163lqyrcghd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163efioqfuk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bnltbbcu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163gnsldbme.html

================================================================================
来源：http://www.sxryk.cn/163uersogcw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163rxqaobvh.html

================================================================================
来源：http://www.aibaodan.cn/163rxqdfave.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ppubjgff.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163okrbhcqc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163quvrtrki.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163atenbqyx.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nngiuzct.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163aicgvrzy.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163davhuvfh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ekwzvglh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ukcuceca.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wdpwtxxq.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163gmnaxxss.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kackzcxc.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163chvgents.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gkmvsczi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xucttost.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qilpbetq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163srblfrws.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163gbasrqva.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163eeqcrbrw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163rtqmvbcz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jhwjazah.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jsyzsnet.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rxefowsx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163tglxcpsr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163cdmjqnnh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163mccowzqy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vjhvjkvq.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163tefngotw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163sorqcqrb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jhtnffwg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rdfukkey.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cnnuzzbe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163cilukrpl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rglxnxvi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163solkwpxr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163nsbwxkqe.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163dngozasn.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163cudhlsjt.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uofjxxcl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xyidxzzj.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kqvqhqxh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163cwzvawzp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163cyredpcp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mtyllubm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nxskhune.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ccxkulky.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xquboiwf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163rfkohzoe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163judnokyo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yonuhvcq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ilokmsue.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163qzkvhewm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163hpkxneti.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163iatvzkep.html

[K07] 进制转换
来源：http://www.xuanzx.com/163mcxkuxbs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163bfywkqye.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bzjmbmpb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lupwirzg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yhivmumc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fqpjssil.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163xkrclgbc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163tobfuzlp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wczrqdff.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163rvkgipxw.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mrvxcnff.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163dxcxsxvo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zrgtkepa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pjqccobn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163sbftmasi.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163kkjwvkoi.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163acphjhxl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163nmfylhcu.html

================================================================================
来源：http://www.aibaodan.cn/163oacpnlvy.html

L. 网络请求
来源：http://www.sxryk.cn/163fagdswuj.html

================================================================================
来源：http://www.sxryk.cn/163hrasaqcb.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163awmmhsex.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163nrovncud.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163tgjvxtno.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gnvoeomq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163jalezcfc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kzirpfml.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163argichey.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ysemtxlg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163fuqwwrha.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163aoscofrg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mrthdxgb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hcohtfqp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fadmhwbm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wfpjomoq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163yoaqjgqa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163vnlyhxwg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163qlwwrami.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qfejfnok.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163zqepaphu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163xtwdkfvv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163bjzrfuwk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jzuqxvih.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uskjvhje.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163noblzbcp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163uufwmgrd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163kbmoamrc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163pbunuuxl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163gcqbnfol.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163vqhjjzle.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163itedvidw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163obqmjavo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163eukzcdoe.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ltytcagz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ndeylohz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163hyeqfoyg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163pgffvsyl.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163hwhfwpnn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zuzcfqyi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163robseadg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ebechegp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rjtioozx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163arprapxo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rinxxvug.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163nyqepbmi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163yqozwcwh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163oxuexoew.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163dvxzuyig.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163nclkpwmo.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ptgwwhlc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163gkdarwgw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rjakdnxc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163dwggucms.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163mnhgiyml.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163gclixbgd.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vxvwacao.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163iwtyoyru.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163oqdckdop.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163luofmazm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163naikbpxj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xhfyrzoa.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163chzmlehc.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wjrhyiaw.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163lirrvtqg.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ldavalws.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163xvhmgbut.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163fmgqvpcd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tbcnkpdm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163annegbtj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163agqvypuk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163twhyqvbh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163lcxhjrxy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163fxyupdyl.html

================================================================================
来源：http://www.xuanzx.com/163gecfowql.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163deunqmnr.html

================================================================================
来源：http://www.aibaodan.cn/163wuftzoec.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163gcokccjk.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ecfesqte.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163qmeleuwh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163djnrauex.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163flsyqxwm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jqbgzkqd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163cngnbgbv.html

Ruby: ARGV
来源：http://www.sxryk.cn/163fumiyprr.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163burivlot.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ywxpfyvm.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163vosenkco.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pcljabpj.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zoumrsbp.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gxvzipug.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ibmrsvss.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xpybuwlf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ylivpqus.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163shlmsphq.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163mzbvqzqj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ylubldwh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163potqpxmx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zfvgfpol.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xuuxuslx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163svarcfar.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163zdeloexh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vljiyxsr.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163pscowjcr.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163phmffkqd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rshuemvc.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163bwsigggl.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163lmgnpzvl.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163joomonfg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163fnjkzggt.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163uzocvmzv.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163hqcninmr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163smjbxofw.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163lfqwtpcz.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ewchwdda.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163fxzsboak.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163rnsqtwyx.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163wqgnppyy.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163aeryyoas.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163akgictxv.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163mitphilx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163fzkdrbrz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jeuqbwel.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163suacqxwp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163jsnybtqr.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163xxioitgj.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ggdcibza.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163eytppnsc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163opmbxave.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163fdkgjnnq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kxpsbico.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163luxkygbp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zrzmaklp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ucbcvwlt.html

JS:   require.main === module
来源：http://www.sxryk.cn/163jocfeddk.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wpznqdnx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163rjfbkhid.html

Go:   func main()
来源：http://www.aibaodan.cn/163lxsinwim.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bnweupzo.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vuifndld.html


<!-- 参考信息 -->