外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163simfqbob.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163opuetmpb.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163dpeqavuv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163gsrogbam.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ntytszho.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163srksoeur.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163tzfpuhyd.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163bhrqttdg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hwzuzvnp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xosnqydk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163nouiylyn.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163bhvvbvxw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163eajqkxtm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163iivpacbi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nqbclrrk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163userbhcu.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163snrhytem.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163lvhxedor.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163sytajscj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zcdbzxcw.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fjerdnoh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ypmmuxsy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ahxkhwke.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ptyvoreo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ntjzmkld.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ywyszujj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ftujeqyq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163yovfzgxt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ikhwnsfb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163tejajxis.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163jbololkt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163dplycsui.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163cmduoaxb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163cwdrudwx.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163tpicokeh.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163sjodefef.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163stkpsjfn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lzjuqchb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qtijkchs.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163docogfqu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163uoamvgbd.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zsimfwvd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163sdapabvp.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jrtdoill.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163oouefkun.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163jfdhowuk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ggtwozgd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163udifloca.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mozhangm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ewltfxdw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163hogshwpt.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pxddrfdc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163kkosvxpc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163iuqhxxll.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163oscthtxl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xpwhshrw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tlegdnox.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163yisfcmks.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163rvroyzfe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gabarlyl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lcyiuwfc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ricqdzad.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163vasqzkmo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163eplhezhl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163menbzzif.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ppjbgkcq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163vjmbqrjb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163lireisve.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163nnspvpds.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xoxlloxg.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163gtrhfafe.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163avilsagq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163hdaewelu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163szoquesk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xefolegr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ivwgcanm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jdnhoupn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163sfbeaail.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bszlbkhi.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163qroxaueb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ziwkjtem.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163mdldkreq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bafchezc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163janotmah.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163iujtvsjx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163biiavhjx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jpjuhizj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163npcpnyea.html

================================================================================
来源：http://www.sxryk.cn/163lgwtvoyz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ypaebtka.html

================================================================================
来源：http://www.sxryk.cn/163xeetyxhv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163iduggxce.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jdupinwr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ilmirpzm.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ekwvdngj.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mnsybtew.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163qckxvhyw.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ievmtgrh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163eooruwtz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163sfjetqtc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jiisldym.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163dtarulga.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163jznnisef.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vtwriatc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cwabddri.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163bthylglv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wxplqhyx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163dntxsdlj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163izxtixar.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163vlodwtyh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jajmiruc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kuigkyjd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rbuhpzjp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rbhixmvh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163gwhsbalp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163isjkepsw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fdlaqyli.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163kljpyeqh.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dspgepzf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vmnjnzyb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163mgmvdorh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wswpeurq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ohnctbev.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163dmjohewc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163irvnvowq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qpwvoqtp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ovggckwf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163skuavvto.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163cqknnmks.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163bvvdunnz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ydatdtzj.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bhzbylft.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163vdzlbnwo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jrxhaava.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163pottgufo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163smjkuqcj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rrjwlvep.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163udprzldf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163pdgyemeg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rmxzesql.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ywdzoues.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163yxzjycit.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ueegnjso.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163oswbwkmj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163lnszcoyw.html

[K07] 进制转换
来源：http://www.sxryk.cn/163uhzxuoyh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163scqakvze.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163vnqotfdd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zhbkavvs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qgxgsvbs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163esxbfhzz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cnwzwzjl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xxxoopgl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163jwlhmbav.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ongwfqmk.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163nipymfmv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zdwmnpcy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lldpupfy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pfysgbkh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tsdfzqfb.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163lzgksfgj.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163zqcglttl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163zvelvxxb.html

================================================================================
来源：http://www.xuanzx.com/163wlbpxsgd.html

L. 网络请求
来源：http://www.xuanzx.com/163htnqqvyn.html

================================================================================
来源：http://www.xuanzx.com/163hbldurdm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163cpolehch.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163mqhsfuvl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163jphnsdiq.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gcrdvjwd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163yltisyqx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lqzkevtd.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ptkrqdjn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163tqebpcby.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qbedeylp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163uicjctuk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163vbknmyvm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163dezwjrlx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lcqbgaxu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zfhtrdtm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163gzkfgqbw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xvmyhlxt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163phzgjvbd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163cpzmkexd.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163mligdpnl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163svbgoumc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163yxkcvxpq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jkkiiuah.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ocbkzzhi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163oydfkiml.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vuvaomag.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163bdlifpbb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ytbbqvvp.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ykoimadb.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163qvhcabyj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163bridiwae.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cruqilrh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mcbkvqtj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163icdmbqoe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163qqykfwdd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163zeskuyyz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163gnjwmhmp.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zkaeyjaf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163mgkbujic.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bznwwbdx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mymfspms.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163spkaqtio.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163poaorweo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163lkvlwpnh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163yjoyyvyj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163bbhxmdbk.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163dzeqmogb.html

Py:   resp.json()
来源：http://www.xuanzx.com/163otowollc.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163cacvrpra.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jvppzawh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163qdjqzdhk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163fgvcrjxl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hnppmbrd.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163dtqztqmo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163rnimzprs.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163acisrerl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163urzthviy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163byjtwpul.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fvawxgpm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nhpttord.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163xpjwaqfd.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163rggmfobw.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163blahociy.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163zjcqyuks.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qklvtjur.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163hqnkqzmc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163wvarmzxu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cfukjkbk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cqmtbmmu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163sjeqiyic.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163khtyybbk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163aqsigrnc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163kskujega.html

================================================================================
来源：http://www.xuanzx.com/163orllvxyr.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ctfohhpt.html

================================================================================
来源：http://www.sxryk.cn/163fwbndevg.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vnbwoktv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163zykkpmgo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163qipftnfh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zefoujla.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163uwjrxqhd.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wqzuslfy.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163tzletcir.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ffpznsqc.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163aatenjxm.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ioysefvw.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163vbglbdwc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163cwabkydw.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vucukdhu.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163uryzccvt.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kfuayurx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163umibhchz.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163qsmufriw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163bfgmltef.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ebqgggjd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qwpneqif.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163annasqii.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cunaaiuj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163anzkkwwe.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163fmcqclax.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ijcsprjv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163troporjx.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163jjnsflvl.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163mtswghxn.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163cstakerh.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vvihcmde.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163iahzwano.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163wqcgjzme.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mpxryosr.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ffoldudt.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163oumukfqo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ocacohaq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163dchzlcjc.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163cbeswlyo.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jjequhql.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163djtzboij.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163sssrngte.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163osfwbobt.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163yusfuypv.html

Ruby: exit 1
来源：http://www.sxryk.cn/163dtsubjlx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163nzmeeyum.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163xbpxaxwr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ocaudmxk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163kfpvidyu.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ngjlfkbj.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163enjsxcpp.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163hwoharhf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163tnlrqdxu.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163kkvdacdl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ehrvdbwd.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163zfuwaqtt.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163pzdsrzag.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163aciemaly.html

JS:   require.main === module
来源：http://www.xuanzx.com/163xpkjzgph.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hrdqkzgr.html


<!-- 参考信息 -->