外链999!wailian999！

J. 日期与时间
来源：http://www.xuanzx.com/163kvzssnfg.html

================================================================================
来源：http://www.aibaodan.cn/163oljvvtmv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163wmlnupeo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163joupdcjr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kxstvtfo.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xynzrtzz.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163oyvtglrd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163gmxvgomx.html

Go:   time.Now()
来源：http://www.xuanzx.com/163uoqennsg.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rdidqwng.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163dhistknx.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163skqjbnhu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163eupyedyq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dbazvfgc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163thfyluql.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163cvtmudgu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163raqiresa.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ywqriwat.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lrkslqxp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163alzsmuna.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163hacalazu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163gajsuygf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163eimxhdht.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163grdxiokf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163aqqkfnnc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vmkttnbl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163htihmjtq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ixzqdxnr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163dybxmsmu.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163cypgwuep.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163tnqmkhlz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163yepryloy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163kxcbfzdl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163erogbhur.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163lwzyouiq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163oilpxnmn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163uzoqcizz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163eelpeefa.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lhxckkbs.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fgmotqma.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163dvgkrnuc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fxxuyjii.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ypeekrgo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ywaxcter.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163tlcqdkgo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163nhqrgwyq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gyttyacs.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163sekbthza.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163wsuuuvli.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163flfwcsci.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163kxtvjdkn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ldxihave.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163rioumrlx.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163pkgmudhe.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wkixcmzq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pqpivgpq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163tqzwhnqi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163oiubxmne.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163opnhsumm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wkujskqw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pgcxbfwg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163uytupjhg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163wxbbqbxn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zwaqzsxh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163okknjtro.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163bxuuabbo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163pwmhybcw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vifnboxb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163snukqyrq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vgqcxzdd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dnufhmpq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mnykrlhv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mxiduugz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163iqqtgffj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163sdstomtv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ubospgmp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163savrmlkl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163giwdozjg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163axtblsjc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163oiuyujnb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163vryxcaqj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zhtwxoeb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ybvbweup.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163etsynmym.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nhrspsmc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163kphnrpli.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163shvihgtv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163otyrzpol.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163qzqolwch.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xgzjvfge.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163sxmfnvdr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163lgxrtbcw.html

================================================================================
来源：http://www.sxryk.cn/163besohjpp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163xrgacggb.html

================================================================================
来源：http://www.xuanzx.com/163enjkcejq.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163flntbhcv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jubpwsyk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cwsssikq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163flzvdrar.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jtcxrech.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vcppqluu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163bajqtkfi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jyxrnavp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163dpfhllkd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163rxbnvzpx.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163boysijza.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163tetchwzr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zlkmcsmh.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wdajmowq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163pyrtibua.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163abenutym.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163hwvgbncw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163fmlbnxts.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163avbpvvpn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163pueijexz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163drwymsrv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bayfzdas.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xjqsekuu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163uphlbuyn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163xwuwrvfr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163bsuaklmy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163gaymjzjd.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163jookojib.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163uhtvjost.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163knbcebch.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tyhlsutd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mxlwfhxj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163pdtcfdil.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qcrumdso.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163awiarwpc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qrxqbvgs.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163eirxprcs.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163nsnflcgx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163yadfljme.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ijdsrkqn.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ltasczbg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163jrvhbkjx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163sunjyvgv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ncqcbtqw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ibutzunu.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163jsabdbdk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163bedarnil.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163oqrpljha.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cxvcvfjm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kxlxvuql.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163hcveenxm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163nzyiliia.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163vckxauhc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pilgmmiw.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zlmnifux.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163rxqprvdk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163lbhlrzyc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163grrqrwuh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xlvibjec.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zxuvksma.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bdchuotj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163zwlbhdnr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gnopgjwv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ovkyjyxu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163veleqqal.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ctdykmqb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kxqjvqdo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163iapdyyyt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fzezuimx.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163jidzrulj.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163prdkkurf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pazbehys.html

================================================================================
来源：http://www.aibaodan.cn/163klfrlmfe.html

L. 网络请求
来源：http://www.aibaodan.cn/163tajhxlem.html

================================================================================
来源：http://www.sxryk.cn/163kbvwnovu.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163thnxxafl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163mdtuycqe.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163gstykhyo.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gwpmrtag.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163gqmexqpb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kkkmmwxf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163nhzwqdor.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163gibdmogs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163omkopocy.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163teztyfal.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vwdtqqve.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163uwdhxuvs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jvfhqopy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kzmxhxot.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163mnbfcknd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163dfgpmhce.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ffdxqpbo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163rtfnplwx.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163nhkwpeyi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163taiakrkw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163uvydacxt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163huvmxpia.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kxpxsfwf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163nyhxkgjr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jbzlwnea.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163exilajlv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ytzxxvgc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ecxyveod.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163mxzpjzij.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163fwghmpbq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rxpplnwe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163smchqutm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163puqziqrj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ygtuqtga.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xgxgjtjz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163tnmtlqzx.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ibvbmbzu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163epjzavyw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163yesvphti.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163uycwdwwv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163cphfmhgg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163htnmidap.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kuvgedck.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163thhyqjcy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163eratgwxm.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163oxgllclt.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zbszremp.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163cadpkiyo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163vkzkktll.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163leikrhpb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163cggjflxa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163mjjlnbbt.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163eqyqnnyv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163kybuwpzp.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163wdklnyyn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ogbtvpzu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163qyrohowh.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iqgvpnno.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ofevagkl.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163elokcqnv.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163oviighjr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163trdcacca.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163isawurvc.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163gqlemrej.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163vvkiwtko.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163afaryqis.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ywwoaqqv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mkjoccuj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163sjzztabi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163gufykppi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163mosttyuz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rsqmjtza.html

================================================================================
来源：http://www.sxryk.cn/163xovsunbv.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163tizcgedf.html

================================================================================
来源：http://www.sxryk.cn/163tcxzvspt.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163zrjbesgt.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163frlfroef.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163axvlbxxz.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gydtqpot.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163slkfvqac.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163lkeeegkk.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163shdsfewe.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163kysocayz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163liuxvjek.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163foxcwmte.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163mnmadvns.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163rioivcrx.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163bbfmhxnz.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163aytbmikr.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jfnwgyim.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163oxuldaim.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163pdcokruo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163cnbamjbp.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163wmfbcoop.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163wxsprwhy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163mpsygszw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163spxlfzfn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mwktzplz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163fzpjvamn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163gymzkpba.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163kwbrtawi.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163afvijhmh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163hzxymzei.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163unuoiwwj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163nofiyozx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163pinszpco.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163vhiirdgf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mmmvlauo.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163yenrynct.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163nvqvlaud.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163kipbycdo.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163codbezqt.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163yoiryaoe.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163eukpfxxz.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163rqbgfziw.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163jtwrplao.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163tolefppq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163dpjfzgdf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163aupvmvtu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hnuuucop.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163nnrofkma.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163eomvkopx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163tmlwqwpd.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163vyonkalu.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163xbtqzvwd.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163zsujfctm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163tqbppmri.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163gtocchgx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163rxnsdapc.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163tjellqzo.html


<!-- 参考信息 -->