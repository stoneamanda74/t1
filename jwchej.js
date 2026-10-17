外链999!wailian999！

J. 日期与时间
来源：http://www.aibaodan.cn/163umzkdwtf.html

================================================================================
来源：http://www.aibaodan.cn/163zwopvapl.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163sgrctljz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163tognteib.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zjcqpkco.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163khukfdfo.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ohsnconm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ackpjhhs.html

Go:   time.Now()
来源：http://www.xuanzx.com/163zhnejvrf.html

Ruby: Time.now
来源：http://www.xuanzx.com/163sunlnxpz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qkkgzlpo.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163vrrdtgvj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ucvjbmzh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xbhxoimr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163docdtdmq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163vkfrpslq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163wxbzirei.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163eyjxdfmw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ldxrvzhq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qrvyszsl.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hlzmcwyr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163eldrwbjw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163cyymtgny.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tvmkgjnx.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bhdigbyg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ddezepjm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ihumcsej.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163putetgvk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163uwdeesik.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163jbkgrged.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163qefcyhgz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163yiytcrqy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163wtwspfhp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hximyska.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163uregyfje.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163opywqijq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163lyfnosmf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163agqfziti.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hothohxd.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163wkxmmafn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vbqqatnq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163htykzmci.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hcrbqsmr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163zyuxgyfv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163kkhfsrjt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163vsmggcok.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163oaymktqh.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ywinykpw.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jftwgniu.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163cynfznwg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163qsgqfuwo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ftuiawpd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jxuanzrh.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163gzgmbvpj.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163xgszjbtd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163etjliacr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hiznctxa.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lrpcbfdu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163nbsmkcss.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163yxjlnkkc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wqbddxib.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163udjhlxio.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163tiucrpek.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yveyilzf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163alfrgjho.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yybxarjv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163dxillxvg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163eppkfvxn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163bdbgsojg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163eygmefgy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163dngvujct.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163bijanzeg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163hfqyxjgf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wdrdhcek.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lroryvbj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163anjjhwez.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163csdaanoi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tiifmmak.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pjwiwijs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163zlrgnkdd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163nnrrrfmf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163qhnnjftr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163avpphogi.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163qztxzted.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163kcspkjta.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163xpcibwfe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163vpeuicad.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163slznjjas.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wkfxewhu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qclnzxvq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163psujlfyi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163sahcmtwc.html

================================================================================
来源：http://www.sxryk.cn/163nrymodwa.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163lklshfpn.html

================================================================================
来源：http://www.aibaodan.cn/163yskbtptv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163kdkrlyve.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gzopbtrf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fnyodzhe.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163agtovnju.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jzqcrusu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163amkdxxfj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163azdaygcu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163peebsfgo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163aoggyowv.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rfuqmkww.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ijiqiczq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ulvhmdeg.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cxmgcyzi.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kuerutwr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163jiyklugu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zcipuaxo.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163vvrclqoe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163tusxxyne.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163jfbcayue.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163izcjqhta.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mcgouhul.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163udpvwnmt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cppykzju.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163bnzvpjim.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163pdppfawf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163vastcqlk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tfbptjql.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163dymbiqmz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163memkukom.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163mpxmyohh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163izfxfpbi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vrusjldl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163vvknhjxg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sfxqjkqz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163hbprqgww.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163kqpqnnai.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163dtihlxoh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163qmyyfman.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163puqyaorx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vnnbpwcm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mldnnwli.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163abciajdm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163nofnsokc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163pdxekrts.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163jwyybjhh.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rxqzypcc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zwotlifo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xzvkoxst.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163igssufgh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zjhamvim.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163pmreyatw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163hxwcremh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163wkiengkp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ddaztlfs.html

[K07] 进制转换
来源：http://www.xuanzx.com/163hefjnlbx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ljkbyjdy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hhtawqyr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ipiqgcky.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qnmydtha.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fyrhehir.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163jzofgmes.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163djpyocxb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163henehdxc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ortvktoh.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ublmpxow.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163uicreinf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163iuquirlb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163blysxgff.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163vynbuwjt.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163uikafadk.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wfvhxbwg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163fpntemhg.html

================================================================================
来源：http://www.xuanzx.com/163khrrepnz.html

L. 网络请求
来源：http://www.sxryk.cn/163ucwyjqnw.html

================================================================================
来源：http://www.xuanzx.com/163jhkkhirb.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tuhorojq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163kntdfnaf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163hwmwhomb.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163qhubqehw.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163aoeowbik.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163vobzomwy.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ncklqdot.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163fipnugjw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163zewwkqpz.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163lijrghdz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163soodafpf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vtcmnrao.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bdtdqhor.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pgartaxg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qbjzuarn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ygyznkwd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163eeedxgue.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163tpegubqt.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163yrlbmkud.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163jcnnjgbj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163llkdyury.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fsmhonxn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163efppuhst.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163djaltoqr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163mfggicrj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163pmtezbcy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163kfxlyufk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163bojufxth.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wtgtaufv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163uczcducj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vquovurt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163iwlamwdy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163mcdvxpwe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163nqrgnkst.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163sbledoke.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163vgzygnqz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163dhnuhquk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163qnijktit.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163jdrbotsj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vletlgas.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gfdbmccs.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ksgconla.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163uggbdddg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163batgbjoq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163livhpmpo.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163jkorsvqa.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hwzskwaf.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163dzufwnfp.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zmrcpjkl.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163dxwckqos.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163xylasvbz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163mnlygxim.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163arjlgwjr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qqqnjogk.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163yaaultfw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163xmngyodq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163abvgcfot.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vvzuvjle.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dummzikq.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163puyzzmgc.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163fbyttlso.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zroftcel.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ckdnyxkr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163hgyflpoq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163bwiygray.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163jsrstqtc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lbtkrjrk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yegxueml.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163twmyfmvd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163dgckljzt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163tzoghgka.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163wfzxoltb.html

================================================================================
来源：http://www.sxryk.cn/163pazzjlte.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ipoufmwh.html

================================================================================
来源：http://www.sxryk.cn/163sqeyptkn.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163berncnjh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163smdjjvpu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163rriwbisc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cfilmtxx.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kceajtse.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163wvtcxzbr.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163okattwrh.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qdziukxq.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163hntaemzp.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qqkbkghq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163apoqsctu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163crlvyygp.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ftgixcci.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gkhkjvvd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163epsbkfyz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163kkhuuccn.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163idlnsrxn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163mwlvbspb.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163umgjmsdf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163spzsywks.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163byzgqsth.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tmenxhxy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163evopijvs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163koxllhfi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wlfireqd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163nrrfgusr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163oqqdhihv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163mqgaiuhk.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ihjpwlgg.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163cxrfaylj.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163jvzgphef.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163gedlfjlu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ubengjpj.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fulfhrpm.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163hdvnxcqx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163lzxllhoe.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163eqvsnvdk.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163dcrfjkph.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163iunqdcnk.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163mkmqxtfm.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163xmfkolum.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163gtpqxmdf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ijgjchrl.html

Ruby: exit 1
来源：http://www.sxryk.cn/163mfxlmxul.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ykwruhar.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ughduzih.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hysdygfy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hczypdsi.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163cniiylyt.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163myrguxeo.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nnqtnrxw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163kqaelpmv.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163kvkvnoxl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163sypgibji.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163jyazgpzq.html


<!-- 参考信息 -->