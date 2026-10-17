外链999!wailian999！

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163mgmztopd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tgjdjwyf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ivzcmesk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163rvuafvhp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qtekixxq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163miespyyd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163zwjyfsnm.html

================================================================================
来源：http://www.xuanzx.com/163feurgdal.html

J. 日期与时间
来源：http://www.sxryk.cn/163akijcofp.html

================================================================================
来源：http://www.aibaodan.cn/163ymsmqhav.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ytqyyiwq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163dorvqzze.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bpzrrkdn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163huucvpgf.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gvyvazij.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163tnryogga.html

Go:   time.Now()
来源：http://www.xuanzx.com/163unfrhfse.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163pbpjopbw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163rfayuazp.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163xkfrfigr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fhuqnjiy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163urdlfafi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163yhsmghae.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163qofgbwle.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163opgnecrj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tdyihuyp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163eivdzloz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163sunsowwi.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163kcrlamuu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tnyklkca.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hddxhjdv.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hsqewoqy.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hoqcsvxk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163tgrtnllq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163huyqftpp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163mimgeqep.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163oujdhjuk.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163txkdlxce.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163jlbfxnxm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163skfjmlgj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163peyaolfr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ibgnwqbg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163dokhdbgm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163omafltrn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163cjwxyfrk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163aqizwqkh.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163umyxhrun.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163mikchzzb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163faxddckl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ymwswwdk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yvhebynd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163naxbwdtz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163orkkqoyk.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163puwkgofk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163itjyqppt.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bjsrapxe.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163eobanaqb.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163bybhygow.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163jzerskjf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qvtgpvdz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163flfgjuxr.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163katypxyz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163qwopjzte.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kxvlkmfx.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lqcfrlzi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gwfbdxeh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163dvdlqjdl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163iskplnrp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163aaxvqvqo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qedddeuy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163tnemmavb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jvpinmkv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hnyysgvm.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hwqkmjke.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163xfsbpmrt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163mamiwooi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163thbkekrk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163sffytblg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163krizkpkc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163nhnhwfec.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163uvnbcvnb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163nfsouljc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jdgvqbba.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163avaakuah.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fprvecki.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163yumhkycw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163irdcgtwc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ydqwffor.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ajkmxcmx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163wgudbirt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163bvyocvxd.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163gjybwgvj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163abcgjssy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163iehqxzvv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163hitrolpo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163vknqjanh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163rqvbrylc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163omtgbfoi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163dadgwteh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163hitcbssg.html

================================================================================
来源：http://www.sxryk.cn/163nlythlei.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163hspdzpkh.html

================================================================================
来源：http://www.aibaodan.cn/163auanxntg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163tzjgqqlf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ulaortfb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wqflujpz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bficrvam.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tkgeqssq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163anidofrm.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163nwnvtohj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163krxhgpbs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163gtcyfhvv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163rylgpthx.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163orjvskng.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tbvxruaf.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jjjcgtwx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163iyqyotsy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163axxqpmtw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pcrlexiy.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163vqwzpvsx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163kzxkzbyb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163oygcdsbb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zjssekqq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163teqrmihf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rzwwqmfb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rxwxzmss.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163yhfqeenj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163huczpmgh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163iguibing.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pwharwja.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163lmeirdbo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163mwosbfpr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163yhfrwxkl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163psmasxbt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ymmyhndf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qfcfukua.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rjjtqtdo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163oaggxiqq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qzgqcjbk.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163pqjugsmz.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163zjeuhzlx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dassynvt.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mcwoywfk.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163izkzgnbo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163whscwqii.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163kqwroshp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163rdkgtjvw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qjmsgsln.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163yjawxxqw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163gzcsfhcd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163sdwgmdvk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163liqkeqbs.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163blmsbdai.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163mtgnghlu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163sxpglkbc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163jvamezov.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163vilkikgu.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vxhxkvzo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163askvvdnc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qwivbaeb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xbxcncxl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lurpmwaz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zmjwdkhi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163hbudvetn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163bjfseoxh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163lejhccbb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163poncidyx.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163cgavlnao.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163bblbqhum.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cqhdngtl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rsyfeoul.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163zkgalaox.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163rbywrzvb.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ylieplbx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163rfdrjgec.html

================================================================================
来源：http://www.xuanzx.com/163ndehgpla.html

L. 网络请求
来源：http://www.sxryk.cn/163kynogtpe.html

================================================================================
来源：http://www.xuanzx.com/163cplhwdkh.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vhnnvzwn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163nbwhnawd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163bimxeazf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163yjeupshx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163roeztojs.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mdotpuje.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ryqywajc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163oqmwyipi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163exavjyui.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ofzutpzg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163uhwkzlff.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wvznhtjc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163grtayrnw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163elpieawo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163yovzcjkz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163pkkwnfee.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vsfptauj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lntuxzyu.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163zkynfjtq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163oxhnasks.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xxalwdvf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163cfunuksq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163cktzbmih.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163dvoelaaj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163wnefdclw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163llcrdlqd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163pvoxllbx.html

[L04] 设置超时
来源：http://www.sxryk.cn/163euesrbkr.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ymvhmwgg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163wdpydmyc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163twwdbkoe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ilkdkzmj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163slzwmhyv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163gemxeijc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ymeupefa.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163dczgazaj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qzodcode.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ujcabwkm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163hhvbmsyf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163umljgzdk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eoklqvqh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zwerzcgb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163iikdebph.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163reydjijj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163wvhkfeee.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163chqmygzq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163zcbtwghs.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163meffbswi.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163nbzlhkar.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163drperkks.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163wbtuinxz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hxmnvumx.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163nuyywprf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fknepmrd.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163plrtwovg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163aioyyddf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163metklhyz.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dnzkeukc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mgqddjrk.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hlrchhbh.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163zhmfhoep.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ugudmpgd.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ijojcioj.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163umwftwan.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163hqynkbyy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163komakstw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qqsroann.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dovrluoy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163kklzcgpe.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zjwqammb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qtajpezp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163dniyyngj.html

================================================================================
来源：http://www.xuanzx.com/163brehtunj.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163zqkotwgn.html

================================================================================
来源：http://www.sxryk.cn/163fhrqhwlh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ccyiuock.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163kmpdcxzw.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163hmdscwer.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gdmxmnhb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nnwflccr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163akrchcdv.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163mlnehjfw.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163dmmsczfx.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163hydjpjtu.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lxzkephk.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163tmtddnyw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ubvkildz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163eeiilbgo.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163fdktvbbf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163zqjcxiri.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163irdwufcg.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163looropnq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163hcgckunr.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163yaintfcm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jizqsocj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163gacqkwze.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bdzoqfhw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ffnmywty.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zubbwssb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163wknpvore.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163nqtculzm.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163knhfhnsi.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zxredtdy.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163yjsatdkf.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163boyvcsdl.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163faxocxel.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163kzwhpycs.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163iptipxkn.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163owfbiehg.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163luajdlpm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163cphxtrkv.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163oblbtwrf.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xyrjrpiy.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163axiipkpj.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qoagaslp.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163sxuxyzff.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xekyttbx.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163crubgatl.html

Ruby: exit 1
来源：http://www.xuanzx.com/163qgxjrbej.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163xayodzfu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163kpccclkl.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163clfbeslv.html


<!-- 参考信息 -->