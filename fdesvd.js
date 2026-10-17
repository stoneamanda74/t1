外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163rkujnbel.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163jtogauiy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163zrcjiavn.html

================================================================================
来源：http://www.xuanzx.com/163yqicdfzm.html

J. 日期与时间
来源：http://www.xuanzx.com/163zdpotfig.html

================================================================================
来源：http://www.aibaodan.cn/163hznzdkha.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163xilttqws.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163yxxmyrih.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nxmliese.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pulxrutn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bwigfzbh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kfofneio.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ssftlnpt.html

Ruby: Time.now
来源：http://www.sxryk.cn/163bikhezdt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xikrnxek.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163lveypkvc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pgabvdww.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mfkquchj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163thxvtnpb.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163wkrqunbk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163agwdztwu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163xfmkusau.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xgvphbkb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163cuxqneqk.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163thyixlgl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xwheuunf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163orylquuz.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wxsayfuf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xeehuces.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pvidbezq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163eshbkylt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rhyzzofr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163pttbzqzu.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163zwjoumfe.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nwyldhqe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163gdnjtssk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ubwihhos.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163owyoicjj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163xqpamliz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163onejtzlb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163nyqpuqxe.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163japtungy.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163efpnvsmw.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163omxfkieb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163uwzxrtum.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ypqwqvzr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163exinmpwl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ewkuicuw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ocwarmra.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ewevofiv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nioxryax.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163qusaolxk.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163iydgpzhz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163chkigeir.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qbhdtmbn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qcsclajv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xcitomli.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163pbantvoc.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163kxupbfek.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163uoblgplr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163gxzwddwm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kxirsklf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163irntrtlv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wwejhxsm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gtcadcyd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163hvaturct.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163wpfghlfz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163guszmlaa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kkepzkfg.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163pvtxqmbp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zvjymjbz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163dflarbwt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bqfvcytt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pyjgndvq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163idihtfed.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163vbfbhart.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163qysthlwf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163rpqdlnhi.html

[J09] 时区处理
来源：http://www.sxryk.cn/163mkgbvcyh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ixfsjpid.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163dlfhfvmo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ntvhrqku.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163agwyxkfc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xdtyruap.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163wrckfpcb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163cnaiqbzb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163htsdrxdu.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163rdpoqdlv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163atmkwmru.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163yuinzpjs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163nllkgnfo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163koqmztpa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ngwjkonr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163vzbzacnw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163woaghnlc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dspbijuv.html

================================================================================
来源：http://www.aibaodan.cn/163ounhsqbq.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163tquzwydp.html

================================================================================
来源：http://www.aibaodan.cn/163dgchwgnv.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vtvbiiqb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163snphgytb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163plyddody.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163aelpsocm.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bucvpqnt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ohroijjv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163emprbmqo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163xxbiufvq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ypabaixt.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cvytcbmg.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163brlhwnhf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163dbjcfrvl.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mdlaluml.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yukyqciq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163lzoigjeg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qrfibwwf.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163sslynrai.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ozonuwxc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163mzkjizre.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163sgogvler.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hsjchlnh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vqynephe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163txoqqbbw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163vohtekdg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163nuujkwvh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163sywwkpmk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163utzragia.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qvoroxvj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zsbezrxs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163opmjautr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ncempcxs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xxvjtcco.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163epbiaiss.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fihfursx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163pgwgeyrl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163xihfmedx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163iyneheds.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xtefzncw.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cjhljaqa.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zrpgdpca.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rujitdyh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ghxwjyum.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163rsewjbcz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jwbsjtpw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vsybirit.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163fginthbx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rbonhmdl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163uoompvrf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hsxgjebl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vxjtqouk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163bfhmpaho.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163pwhlwegr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163encztyac.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163moewydrb.html

[K07] 进制转换
来源：http://www.xuanzx.com/163lenlewki.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163tlqdccze.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163pwgmtroi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163emmjwbxp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xtfdmzfy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ebabexra.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163xxqazqxx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163zrdszszx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163lhvqaqqk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163cayqgnlj.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qhtnrbvf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163qfdgwuwb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dapdbfmj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tgdsxgdn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tstyygnf.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163qjcxngxq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vwsdagcd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163wirahcjr.html

================================================================================
来源：http://www.xuanzx.com/163malylcwb.html

L. 网络请求
来源：http://www.aibaodan.cn/163fcvdalwq.html

================================================================================
来源：http://www.sxryk.cn/163nlbmrctt.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163juygfmtw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163nhoewgeb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163uuelfufx.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jocveisw.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163igwtgrnd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163tvrsmbin.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163rzdmaxpr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lsjcdjxa.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163fkrjspwk.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163bpzykmsk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dklysutl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163xmmuepgv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vlgsirgb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163aglpesex.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163attsyfdm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rogglqhx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xezsxozx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xrnsndqt.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ggkpuzks.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163tzwgqklt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163cqfciimw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tgtwoopq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ciamfsla.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163izajcmpc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163wbqnekji.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163wieyxwua.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163eutxxtfx.html

[L04] 设置超时
来源：http://www.xuanzx.com/163oeejkbwd.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xpnqleoz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qduqzfzh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cxdhfayn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wnoekaig.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ttseehvx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163wxmvgegh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hdrfgpca.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163bmwtqdod.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xwapcudu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163dnvymzdk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qzadegcg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163juekmnxv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mcycnmmt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bxihprzg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wowwamdq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pvcpyjqj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163syttxtrj.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rmymykqy.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gttimsov.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163tkvxzipn.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163iglldpsx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163frymqsek.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163jhcqobqh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163fzsiqkgc.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163jzyssadu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163kguvlwqt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163rhbyambl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hsgrtfxh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163asvfyogp.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rxskckzk.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cktubypr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qwoutizy.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163xkwjjmkb.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163vdymfrrz.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ziwtnivw.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163mzmpqyzv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163epdfllyu.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163kmrlaloy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rihfkrrv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pagceaar.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163oxpysssl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ylhincbn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bfeexwhr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163zmzofrki.html

================================================================================
来源：http://www.aibaodan.cn/163rhcorohw.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163hdglapou.html

================================================================================
来源：http://www.aibaodan.cn/163rkkzuclx.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ixrdwvuf.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163bzrsqcvv.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163qfgsrmph.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163njjzvzeb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163licrwgpg.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ajzdnyvy.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163bhpbxtkb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163yqzuhccv.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163jrggmzcr.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163idbykppt.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163vcutcwei.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163anligudv.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hmnetejp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163lrmxfjgl.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163qbdzapqr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wiwsvbvk.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zqodttit.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163lgggeaaw.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163fubvnnbs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ykyeetrn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163dufuavcq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163oqnxuweg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xegheojs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163buhfxmnr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163fjkqlfmh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163sdhjvtyw.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163bvjdrdih.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wdpfdylv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ftcaragc.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163udkvmijy.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xxtifvle.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163qaseiwym.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163uquebomy.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163uevbpvpf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163uuhqkmqp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163zzdhdqat.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163fhjaaeqf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wwugcxhe.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163cqgjoevd.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163tfinrydq.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163poazubwp.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163otkibtlz.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gvhavstw.html

Ruby: exit 1
来源：http://www.sxryk.cn/163spztiuof.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163jxhfdmjh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jsbmifrm.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jlackulh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163bkxdrxso.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163mmkazwvj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vcejfkpa.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163mynpfyzp.html


<!-- 参考信息 -->