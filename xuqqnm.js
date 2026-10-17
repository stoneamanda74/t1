外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163rrnzxzcr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163atltpcro.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163jzcdalra.html

================================================================================
来源：http://www.sxryk.cn/163acczgeaq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163haurmrvz.html

================================================================================
来源：http://www.xuanzx.com/163jmqodhvw.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163eqvtvihp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ljfzuswn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163esoilrka.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fqojzxhn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163txkimfun.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fjnpersf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ozcfultn.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163smpnonwd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163bagqmgba.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ttuvajrj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pdvuogtq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ffykhwxc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163qpzlgcxd.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163yykpcrqg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ourbwwut.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ynfioumx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163odaczdup.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163pxvkpxot.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163qdcbopka.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163qdvonboe.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163xmxibiqc.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163njvjhwms.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163awlhiyda.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ztsrhfwu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163gqsynblu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rksnjvfo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163aflwhvmg.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163wsmyekuz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163sgmyqcxo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163akdkgpyw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163efurebda.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ohdfeksy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tevgnnyh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163srtjojrl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163lpujggsa.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163urubttzt.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163zhepyewj.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163hoygkooa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163otyvbnbe.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hbqdyoci.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163uanjueiv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163yqiavzho.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qcdzeozf.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163wcdnfkym.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zdplacdv.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163nljvxdzo.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163zqjygnvl.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163diqtbfsx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163vrqwxlmg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163eefrqyak.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163vziyevmq.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163kunvgxsn.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wojasfto.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163qtztotxq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163tnekvkvq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ubljcyyy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ezniogst.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ouaselbq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nwslecpx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163bpdkiiza.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dfhfiutc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dgeksojc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nfyssgaj.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163xmspuzlr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163xptyiqwq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163dwwnoghe.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163synbyqfh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163cznmmnrf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163uolxkyzb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ucjddcfd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163holkpyvo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163sdprabbl.html

[J09] 时区处理
来源：http://www.xuanzx.com/163brwbhrna.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xmrdjndt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163khvbfwhe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vgzfzvgz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163uuwgrfzk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163siadegxn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163dumjiyhp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zhkiinou.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mrvlpenv.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163hxxzfoly.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163xhzpbdlz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163adnoceka.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bbqamoze.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163rhrjvgdg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wblcvhdk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163thrpnctr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163gztekoaw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163gnwycerm.html

================================================================================
来源：http://www.aibaodan.cn/163oiolkhsh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163kgiaorux.html

================================================================================
来源：http://www.sxryk.cn/163eilzsrcr.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vmazolsx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163idokzoui.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pcaetwvm.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163dohfsgoq.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163sptcpgjr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ikdldaov.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163razdizpv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163genctqbn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163zilhwncl.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163hhrwsvrb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163kaaxksin.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kcvagiwk.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gcxlropb.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163orsxqglk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ejfxizkc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ltvlxytz.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163mvasezwd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163nxwtxkya.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163hssbbzyl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163cwuuqpis.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163qwjliixi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hqiyyqmu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ukgdicmq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163rdxqxguw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163hyqmpqmp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163gdfhnqhd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163drmmlkhz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163iqblpifu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163pquzxiem.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163lyrjdahq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163felynhho.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zzmlkxqe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163yobberqj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hfizxoyl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163mepukcsg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163spajkati.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163uycxogtz.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hujkfqvb.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163yxgadvlc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vrwlbefl.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iuxyzdjh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163fqrkciou.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rcemipdv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ehusmjib.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163xshdlaet.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wqjmsidj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163vzxjlbgl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163npcmsvsb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ttvfuwub.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163imjciifh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163bmiozfar.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163pmixzxls.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163vlxvxada.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163pjprrihx.html

[K07] 进制转换
来源：http://www.sxryk.cn/163sndsgamb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163wwizgmra.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163zfxowdgw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rviqfvps.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xzotcvkz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163togusjdg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163jmliyzeh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163zvjgxwvb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163jsjzuocp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ltcpvygh.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163tgsqycym.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qsqocdfv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163lucyogrv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xdgkbsuc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ebbkwiph.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163atduiydm.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163hxlwhkyv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rkwsrazp.html

================================================================================
来源：http://www.xuanzx.com/163yaeegtkg.html

L. 网络请求
来源：http://www.sxryk.cn/163dnlejmdc.html

================================================================================
来源：http://www.sxryk.cn/163pcsgeqiz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zocihzlk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ehqtarem.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163xilkeedw.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163hqgnualk.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163mxtytmbc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163hsnuecdb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163iwoqgiuc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xvoaynxf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163hivlpzbb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163rbvwwfgd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163cyywalrv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163lfajqbos.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163iywgltib.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ukvgduzr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163jwbidafn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ftiktmab.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163imtwovhk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163whoelsvk.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wajeykrm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163lzwjfvxl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163usinpdoq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163neidhxym.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hspfxkli.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163jsgcznyd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163zcmxvref.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163jbplniaf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163jtzblwvu.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bcamdxbq.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163pwsnwbwl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163axyixxqx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nuyruqvd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dfukkvdv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163jdcgwnjy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163maaqdawd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163atyesvcb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ltmdmbcl.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163nmvwmcfq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zvjcejle.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mlcafvvz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163spawhycg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163belmbewf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163oaxykfmm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mnkbfhow.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163smwlakvt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xorzhlyh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163cyzffblz.html

Py:   resp.json()
来源：http://www.xuanzx.com/163mynuyzmz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163bbyyxuhs.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163agdgesmk.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163tcegtorm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163tbyxrvan.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nealksjr.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ukcvjojv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163nblmadwt.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163aqusbfns.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163nkmphoxl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163yutrldnz.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163geoixtbt.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fixuygbw.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163qeyhuthu.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163cdnnuixm.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163cqgacgaw.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163nhochjqu.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vtcqnjfv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qsprdupe.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vndpeyao.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xjagnyof.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sfqeefkt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163olignsno.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ksucipiw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163robfctyx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163hujuhmwi.html

================================================================================
来源：http://www.aibaodan.cn/163qteaiasv.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zefoiode.html

================================================================================
来源：http://www.aibaodan.cn/163urnpukmf.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163cvnvojjq.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163bdlgoros.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163tvlbqojb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cfadfeon.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jwaftbqu.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163gpcdjqdj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163lmdehlxl.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nzeevdaj.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163mbezuayv.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163guzqocah.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wfanxyib.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ukxkorde.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163cbilacty.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163cohkngcc.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163etvvlovp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tqvwppbl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163zrpghgbn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163rihzkonx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163hzkpidcc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163tcmdwzti.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163onyfxyfh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zmkxkafk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ysruvaqo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qjmjppsn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163tfxhwgzm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ifacmpre.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163iuvfbedu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163vcazjtuu.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163wftwxfyl.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xvmzspzr.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ystwrpcm.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163rfemmmez.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163rohwwsid.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163jprrznfq.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hildcfxm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ypaofcag.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163urglkffz.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163aicyqznl.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ujhmtrlp.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163otzwhray.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163iztyvwvr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163yifnqilz.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163hyacoyvv.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163vpbijnqp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163bycjcliw.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wpmzwykg.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163cddthnii.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163qzgmszaw.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163wkdvnuzq.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163gilafaou.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163dzwlzmea.html


<!-- 参考信息 -->