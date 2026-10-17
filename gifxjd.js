外链999!wailian999！

Go:   time.Now()
来源：http://www.sxryk.cn/163dqfesjup.html

Ruby: Time.now
来源：http://www.xuanzx.com/163wbqnvcuy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163pamfhdad.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ofvcshnl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pikwzpvb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zubqpwmq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163fqdkduql.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163sngusqfy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ctmyuhla.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163cuzhncxx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163htujawvx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163aelhugam.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ogurlrtd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163pfzwbntk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163igxbwcki.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zicaugso.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163aaitagaa.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163vlbxddxe.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163otxldels.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163zqikuoak.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163snkdzkai.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163fistgbrt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163nzbtyhhx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163gyuvlngr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dghdammm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163rocmyiyi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163hgbocmaj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ppkfhqmf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163kybxyuax.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163plmcozbk.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163hcwqivce.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163gqppppbq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163sppiiawl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zbjjrwry.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163svtcwcym.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ysroagse.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dhwsycza.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163aftwtcvg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zrwothyf.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163irapapjv.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163hdtlftof.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163fukyfnbx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163dkeutpmw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163unviilpp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163yxyvwobn.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163bxsqyasn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cuqeiuzp.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163tgeprjln.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ynsaixlr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wjunlbqf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zxcwrezk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163oiepxcjx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yatnyqtf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163lzdcsbzn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vixcvill.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fdtmjcsr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tmhcofmm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mznmqmez.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163yfxdgnvh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ikrhglnw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163okyjvfvx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qzxvfrkj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mvgcoptl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163uqzsonoq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163tjyhnsyw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163xxlgfprg.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ysssvpwk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qjgkcfkn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163wdfvcdmq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xxxctsjj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mvabhynl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163lkylinqg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ugzdzhbo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vuhelgoi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163lgdbwbkb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pidzduhg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ktgnxysm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163jekgrzzg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ebueswxj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163qpivtgfh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ajgwhoyj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163immrqbdo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163beugamua.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163phdigfzy.html

================================================================================
来源：http://www.sxryk.cn/163cifzggcj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ekpehkxs.html

================================================================================
来源：http://www.aibaodan.cn/163aotfejjy.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163qwsqvfzv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mbkajuny.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qbcaxodw.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pbwdftos.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mugadlkf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163yedulnrb.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163jkjmhrrf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163baprurbi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163aversyfh.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ieizdjmx.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163rcsvqysf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163kagrxjky.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163agbdjbhn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kxvdhlaj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163yieodqig.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ahuvqjmw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163shmxiozt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163asovchjr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163vegntjao.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ndxlygeo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zjyoqckl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163knusrgyn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kqlnzmfx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fmifehce.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163fylgnnkx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qnoevqkn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163kwlngsfn.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163xfboiayz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163lgfjcmgz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dscrzhjc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bwabzbiq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pmvgkmvn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rncrufho.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jzrykgeg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163yxrdybtv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163xmubhjto.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163nymigxuf.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163dklhnbvq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163lsqmxwob.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bjfrpmem.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163friieoab.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163cboravwi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163aslyqywr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163dbwnahph.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163imnwkpxj.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163uyxwdgyo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163xvxhapxf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163dqqclsyn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zvqffnmm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163luwgqvob.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163okwfbvnw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163hgfyfpkm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ehkpoewj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163hptpwtyo.html

[K07] 进制转换
来源：http://www.sxryk.cn/163dlpwieog.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ctegkupj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hribfxgj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dtdznxeg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fgmcrevy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163yruvlqxw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163lkkzfahw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163qokdljii.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ufonxzxf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163cylserpw.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163rzkuvbsg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163hfhdimrf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hdmnnxre.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nxerpode.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163catzbdcs.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163klwuvdiu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163haqvpvma.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pyqtvixq.html

================================================================================
来源：http://www.xuanzx.com/163jabyaefe.html

L. 网络请求
来源：http://www.aibaodan.cn/163efutrtwm.html

================================================================================
来源：http://www.aibaodan.cn/163vidkeidy.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163pnxfvedc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163eedflrzk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ysvnxyya.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163fwjcneru.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163nsnqjgwe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163umkjfjee.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163vvhmaduv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163zchrasva.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163yadoigbp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163xcffdsni.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163sqbgeyoq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163zrpoknfr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iitmyhig.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ppqzvuut.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163tbxwvocx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ljrjylzs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163znpdxwuw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163rgmgcoen.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163szrwjnts.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ejowhpww.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ldajykmi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kpammodl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qbjqazdf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vxqoqqjj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ftfoyvuq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163fkgxainh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163kthiftzt.html

[L04] 设置超时
来源：http://www.sxryk.cn/163gfrodlnv.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163uoxtyrky.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hhujhlrz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163moiznpla.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ffvgujsz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163wolvhuwv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163euirrejd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163dhzdcquo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163weujaipm.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163meumxrmf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wcypzcvb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163vhczilou.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gpdjipjh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bymmfdqp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163lirxyodi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163cmixupuy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163wlqwmwvz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163brankstz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163whpcfbxl.html

Py:   resp.json()
来源：http://www.sxryk.cn/163okjzsedy.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163mbnrxxnt.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163fzvvohaa.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163hcfrnqnz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163zrdhzoed.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163zrxcspkk.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163pxiabmao.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163fgkuuprw.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jfrcibqt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163oozcbwxn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vohhbkef.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bgfcircn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163oacpribp.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163odadsmwk.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163acgqdycn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bddrewzt.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163cjxxtxur.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163nsncvpqb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ccfkmocc.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163fuqdhegx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163aleonxsy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gcnfnpyk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163behpffpt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163zocbqqmd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163jfqfwwyd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ceeycohp.html

================================================================================
来源：http://www.xuanzx.com/163ofqxnhdl.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163unyrivjq.html

================================================================================
来源：http://www.aibaodan.cn/163lfhwoqum.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zxcwsatb.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163zysitraf.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163fjlvmioj.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163buzhfpeb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hcygvokc.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dqtkyzna.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163iwnvbujz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zmjvkpgh.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163valgszjp.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163mdmshzxs.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163maewgcbc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163tnrehpde.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wfkfbdhc.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163wxouotcc.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163fzqkzzog.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ycjbtgyc.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163hcrdfkej.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163jxqaeboz.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163vscscctp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163uyxyrehw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163kjmnvzvg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ohxuigeu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163waourcyl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163cgvdsnrl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163nahbdofy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jetdozti.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163cntfgdwn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ffdvkwca.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163kvgrcthp.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hienpoxp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163mmiwsjpn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163alfaxtgg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163zyzkbksz.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163yaqwjuga.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163martplwy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163tfqogoju.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163wkvbrirv.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ucoxkhlo.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163wqwqpcxf.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163lecavvsp.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163vraolawi.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163bsazpeid.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wxdsbzqc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163tpdnwffg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163lndcpsne.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jgosjdkl.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163skbudhxk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163hplnipgn.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163blzlhcab.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163xziikisz.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163jthhdvsi.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163headzejy.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163gxxzxobh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163fsxlxvth.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ewtijyum.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ostlcgxw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163wwjmdwmx.html

JS:   require.main === module
来源：http://www.sxryk.cn/163yipfmaax.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163crffqqgo.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163pmcxwcca.html

Go:   func main()
来源：http://www.sxryk.cn/163edldutge.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163kptaxrro.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163heotsnob.html


<!-- 参考信息 -->