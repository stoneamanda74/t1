外链999!wailian999！

J. 日期与时间
来源：http://www.aibaodan.cn/163nwuhxina.html

================================================================================
来源：http://www.xuanzx.com/163qszluylu.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xldymazx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163fkkdqzkn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wfahdiln.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xhzezjgh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jkolyaej.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163sngujjza.html

Go:   time.Now()
来源：http://www.sxryk.cn/163rvpqifae.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163szijmuti.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163kotqaurw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163aiedpisf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163uvzsyrbf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rzhwpzsz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163vzfrqoyu.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vvqttoem.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163qrruatgs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ubpqwobk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wqtofgzr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163aevpconz.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163pbgcguns.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163yfysdxxy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163aemihart.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qpdpxyzj.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163dwvyfsie.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rnghqkzo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163tuewqzew.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163soahzwmg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gbuvcbut.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163gihkaozp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163moeccebu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163scopegcy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163srwmoask.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tmmqntkh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kstxitpt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163phbgnprn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163qxzbetjs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163fagabdvx.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163bwxzbhle.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163lyqzltvp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163bowivokn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163caaifxcy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vfgaelrp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nohpflys.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wsqimqya.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mgoipnof.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163glmqfaxn.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dkvbnunp.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hbdvnwyj.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jbcqzkxm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ssudinsb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163iijzxiza.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jrnajrhu.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163dxkntpmv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wjnyzzsd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163pxnbasir.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163hexhktgw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vslbqrur.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163fjurkyfs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163btczrujv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hrmzcqrf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163vzqcyqdv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163qeuhsvrc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tuonmvfm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tdkeshvy.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163cxtcdxjd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163cnnlhnut.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163rxbwuvur.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163dorlrjey.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ipqmfrxe.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qdmtumjr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mzhhrlpn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mdyizhth.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163qepwinos.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fyosqylf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ucgsytzh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163pfzzclmq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163beaaymyo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hexjdmbf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163txrihjys.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ykxvyten.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163pktvrtmz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163yrnqhagr.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163cbakofic.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163drphtbie.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163epgvpdmb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163zxhvxrql.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ovnkrliq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163gzmyfmgt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163wxttmihi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jtalyzvc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163pufsevkj.html

================================================================================
来源：http://www.sxryk.cn/163ubgbakyv.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163aofsfony.html

================================================================================
来源：http://www.aibaodan.cn/163eedmlmjd.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ujenvgqh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163wbiolfcm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163avnruttn.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163znoroxyv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163prqfsrql.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163grnrzrdn.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163twimiafo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163wlnolwvs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163puoiqoqp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163zlughrfh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ixttnvrn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163anyasqfr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gaqzgqxj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ejwewdzx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gqlsbyet.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cuxvnkey.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163lijcrdzg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163rpnqiphu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163bvjygqla.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163yohwjzne.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pklsgpro.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163njoydqze.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kuabewsq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163mpzjvbeq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ljjjgnca.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xicwahcv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163kzymjyff.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163uypgnhcb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163gbmfybkb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dejrfdav.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163iboaiqqm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cfpcxrxq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163fcatjgey.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ycvuowmo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163vasqbofk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fyocuuyb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163raxdgmoo.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mxohhuif.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vovqzmql.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ognxzcrd.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fmjcrdob.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163tdfrljkf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163tidagveq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163yxdiixkk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ygwvtpug.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ftueveip.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163gccjcmcl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163sciufgmu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rxzqybqb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pgcjinnx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163pqekmoil.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163wgmuuelj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163qipllzyi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163paqcnfyc.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163pvdusjkb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ebmrzscm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ynkfmvzn.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163exkieuhy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163djtmgkas.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163wphmrtsz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163liurpuko.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163crjqedaa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ilewfbcc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163raomxgpp.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163xjxprjck.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163fbvpkqtb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cwhjqrhr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163sqjzxcob.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rbpljcbx.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ebkihcmy.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163axpcafda.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hzoudwjv.html

================================================================================
来源：http://www.xuanzx.com/163wmmpwsjd.html

L. 网络请求
来源：http://www.sxryk.cn/163okkhylih.html

================================================================================
来源：http://www.xuanzx.com/163prehqxec.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ajsdlpin.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163qmousuch.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ldkswtyc.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jkvdmtha.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163jwzyhurt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ubjalcoe.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163pmdffgvb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163fabbuhti.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163gyqmuppz.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163yzllqsmq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163phcqaest.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163aiuabdwf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ghgwgpqb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163sriuiyqd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qqusxqgc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163vdnqsdhv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163wxeeemhz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163azfhktqa.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163huzputda.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nyqvnsdl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zktouogw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fnrftacp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kwbjfjqh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163londadka.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163gkolyqoa.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163dibourke.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163hxruwqbj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nkmjflef.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163caeligkj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163xffbcypa.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wznkhbdv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jzmgsmab.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163isivwqhv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163quzbxkjo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ewawtbjr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ganxxirm.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163wpnansav.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163pdijweuq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gehounyj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ldqyrbyh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163deyaxejg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163eoaedqed.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qwlduokq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jetekwtv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163tvrxtfpr.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163nyecsfdz.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ofivfxna.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163pznzotte.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163omfzdhdo.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163bqzpmwuq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163pnztvslk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tpivyslz.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zimigski.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163piincnkn.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163rpfpbayl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163lngzntov.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ylbjwisc.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bbvgngbd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ioewtnml.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163soanrjfh.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163kqodrhgx.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163peydjquj.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163pnrfgamn.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163bhlrdrdm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163vigppxyz.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163tomnarnp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mmdcdzhy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xizpfmku.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rdldfdcg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163lmiziudd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163englyccn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163selfcvnm.html

================================================================================
来源：http://www.sxryk.cn/163lunadfhf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163srvzliww.html

================================================================================
来源：http://www.xuanzx.com/163qatqnyll.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163drbqhlii.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vzeqtlwq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163qjtrwzky.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163giemfsxd.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lyntofmi.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163iuojpoop.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xtktsdzr.html

Ruby: ARGV
来源：http://www.xuanzx.com/163huofsyvm.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bjhyrpyr.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163crhxhgqa.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163glcmzkik.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163uyaoycun.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vgowpeau.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163btuygaqq.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jsqqtnjs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xotduitp.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zkopduxx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163nhifokue.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163vltrsjot.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163hjvsttjq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163wmkuxqsh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ffgapxlx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rqfswbfu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163tjfwymxn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cafcydgv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163xocnkgho.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163lzikswqb.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163yhrzvgbe.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163zcvciciz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163rkbnercv.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163dyitdogp.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ksqwsxrd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163fjhqigsi.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163pduyjalw.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nbaxsqpc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163nnsqwfyu.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163aumqdese.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163qwglxtbr.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163cmhjhklw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163sxydjljr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ptwighkv.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163notfsydh.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fzosbeoj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163oemnqkva.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163mwuvtpsh.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163tfwbdqxt.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qselteuo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163hiqlfiel.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163enznbirp.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vvjdjmir.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163tatwgmzj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163nhbwjsel.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163zwsztoin.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163boblrdcs.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163tayhhgat.html


<!-- 参考信息 -->