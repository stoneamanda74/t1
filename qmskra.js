外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163vlntcbpg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163cuespjxw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163mryoqbls.html

================================================================================
来源：http://www.sxryk.cn/163zvfsvifp.html

J. 日期与时间
来源：http://www.sxryk.cn/163aprwadlp.html

================================================================================
来源：http://www.aibaodan.cn/163slyxfhtz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163aaoqjrtk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mxyggpza.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mjnkccul.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gxticgru.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jgfzisua.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163dbdvrwww.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ommbhmnr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163oaoxwcer.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163vxpvclxc.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163axoiibuq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wqlrwieu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lzooqjgl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163zvclhsqy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ftwlinlv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tcjmoqcw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163gxhqpvub.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ajtgmyny.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qqpudabp.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163pvpatwzm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163kwsiqipl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163dxjowlst.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163siqxjmed.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vepstyym.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163cauensya.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zropywvk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163tdtrcgwh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zklllbmi.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163brdywfoz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163huzmogwu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163cswbynqu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163omolnkxv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lzphhoia.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mdkvssgl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xrzrdwxc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163rbowpiqh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vuysvjgv.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163tqjcbtsh.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163imqepcsx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ksjjmdfu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163sjrmdqoe.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sorlslal.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163duemliyp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163pkfdpfyd.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mmolvcjh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zievnkum.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163lerwghad.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163arwrxlfd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163qqgjxjkg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163mpifzhva.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163viruxlpb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ebflpcyp.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163gmrwahbo.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163fetqjctc.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163hahqjqfh.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163cqgiwhwr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163edgsxlxc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163jaqtqxsi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163siceqxgn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zearkidc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ckhwumna.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xudrczur.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163exrcinnh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jofjrnvq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163eajxbuog.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hfdjbgrg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163fylhspoz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163iblnnvan.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163allhlsvq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163wbifghja.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163zbfgytpq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qapknolu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vucknlvy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163lhjlnkwm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xzgcxjln.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163uppqaqsr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dmmvmzmc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nlqinzuj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163drvslzaq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163tdlhcuyh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163bultkwrx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163tqqapqzt.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ckxxwsjb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rzardhad.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163kqyhcivi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163thuyvgab.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163sxwvrrml.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ykhiemii.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ykgkqjxf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163chbxcyyi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163qtbwgnku.html

================================================================================
来源：http://www.xuanzx.com/163wndbpcvp.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163uzpnpfcf.html

================================================================================
来源：http://www.xuanzx.com/163jypcxklh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163jqvfxjki.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nobkjwjv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163whefvast.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163umpjnklt.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wegqwyrz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163sgtbitmo.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163gzoniqca.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163rotsetnx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qzzoerdp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vxhqqavr.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163jwmenimk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hptwjrbr.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ofqxuufx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163uqvaojzi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163nfeogjnv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ykarbawy.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xaqcczwx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163micanizl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163sbqidjoz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163brzadfci.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pckblbkc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kyvbfmcx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ilvyedsm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163pytpgyay.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lcwxiown.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ctyiegga.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163hcyeiubz.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163cjkfpnio.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163decmamzt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163hvucvnrp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163eusoonrr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zaiwwfpz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163aliughjd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wpnftwhu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163kjybqlan.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163hubaomzx.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163utgtdamb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163vimipccj.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jrykjjxb.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163sbpkdhxg.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163njiourmi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163fhtcmcla.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163nklzokdk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163buvkhdiq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163cnjjuipp.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xpzfqqmv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xnjvihxe.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ythjfitf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xyawbhxo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ilqneddr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dtcswzop.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163zvawhhxe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ocaqsvvv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bwcunwax.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ivvdcbqm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gmdgopkb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163aqdbzpmt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tgsmotgb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nxtqkrtv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vdethkei.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163nasdnjmg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ulyfbvkg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163vyohqfni.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wttaqmfu.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163nusunrzt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gliursyf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ovcfqtdk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163heonacrw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zmxfouzu.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zxftzzgh.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tlbpkoif.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163xysgsxnu.html

================================================================================
来源：http://www.sxryk.cn/163nljqgkrr.html

L. 网络请求
来源：http://www.xuanzx.com/163wvinluem.html

================================================================================
来源：http://www.xuanzx.com/163hcuvhzsc.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163migzrazi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163yupjxpof.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163suriuwyc.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ixrbbskl.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163qxqwyimj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ijcnupva.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rlkwevbp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jwdkgcbh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163evpsjiqm.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163fqzwhrsb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dtsjkhil.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163evfjrwgv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163gbqfeqed.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yktmkupt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163brloucdn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163lsfurmvm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ngsdnzvy.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xifcspfx.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163buboaatu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163lrrzxzti.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163rvcjxzkn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xvlojgnd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ehqeicer.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163fddzxbnl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bcqiidgp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163tmydlqdi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163zckoathc.html

[L04] 设置超时
来源：http://www.sxryk.cn/163sndgrzqb.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163iiqfkoln.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163mghbdmon.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163oumhvyfz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lpeejqtj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163fyoqbify.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163dzfhxphj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ywcxwbnn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163yyuirbzn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163vidzxhbw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163yzcixbfo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wfskdxrd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pdapbmsv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dhqjtzcj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vnjaywve.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163rlqhhvuu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163odjqtcpp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163rjugztqw.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ofnhoqaq.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xaxhfrsn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163pfhvwkuu.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163lurkecsq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163uzvnvint.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rxkpdlka.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163zsrrnyfd.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163hgjbexyf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163zdploitk.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163quuahwnh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163mxuzppgp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163oszhlwjv.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pxawgbup.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163didqaciw.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163mcosaxpc.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qrzjjmrk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163uijqycau.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163akdltpde.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163izayadhx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163catcwfpr.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163uksgrhit.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cxflitku.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xencqijv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163vlomptbt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163npobytrw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163fbuodbpz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wtklzmtw.html

================================================================================
来源：http://www.sxryk.cn/163fcxvbrdu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163poepotwo.html

================================================================================
来源：http://www.xuanzx.com/163azdcgfxq.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xsfxplhk.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ledgpwxy.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163senkhepq.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jwqzxkqc.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fepiwthh.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163gtzoszqh.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pnthnkww.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xnmkmubj.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163cmzqtvkt.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163hsbumxig.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ghbslagc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163vnjgihnn.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ghlgqawx.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163vhvzowma.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163cnqotjzq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163dqqmwxmf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163hdwrlhyf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163czlswxdv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163gzjbchks.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163yvkfbtnm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163gjqjfbzw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tqhafpal.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ybkchatg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163nvjhimhm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163xzqggilz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163dcwzbndu.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163hvujdjaj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dvsboqsa.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163xtgoihgn.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ssmefoni.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163eihjkbcr.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163zeamxsts.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163oxtdvsav.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163zgwultxi.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wtqsntqd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163qaeeleuw.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163xpqywyvj.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163oojmtcwm.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163aryiuvlr.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163atklxgpt.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ojygoqzd.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163vwwesvkp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ylsbkgeg.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163xvesxgrr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163shwnakud.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163njjrvmxw.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xtbhpbzo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ldilbbtp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163plosibdj.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163didphlpg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ztwoojia.html


<!-- 参考信息 -->