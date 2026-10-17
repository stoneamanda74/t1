外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163mnbizvgo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163utggvnfy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163svjjcnum.html

================================================================================
来源：http://www.xuanzx.com/163bfejshdh.html

J. 日期与时间
来源：http://www.aibaodan.cn/163idtvcowk.html

================================================================================
来源：http://www.xuanzx.com/163wgvlhrpu.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163dgptuglr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ehvjdftw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ywzsezgo.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163uttfayld.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163esihozgf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163soojqqkm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ihoyoynp.html

Ruby: Time.now
来源：http://www.sxryk.cn/163wfciwate.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163bsqlxfaj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163yzrifvrw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vqproatd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tratryye.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xtsliatg.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163zgijevta.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tfxyymsg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wxdpwtqc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mxzcegpv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163yowzzgpc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163lrxfykgw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163shcnajxm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ddzkkpdm.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qauoyrmy.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163prxpvmgi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163szsbdbwt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tgcdmdae.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163annppiae.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163cqcviajn.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163kboconoc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163qizqalwn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163jyjjoqbi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163htodfnsq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ibvjftnr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163pvgrrhlf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163vjnxxuwz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163nauemnmm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163kgazlncn.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163stkmthjb.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ryyvydld.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163esjmarzq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fhzsaqdl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163obmtavzz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163wafkjspa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163usmlnhpu.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163awawfotz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163joizsnpw.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163etqzfuvm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163oschptdd.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163fsoiadhb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163bvqucgoi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ecconhkz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163brozeihb.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163jjqxbgbp.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163wheotgrg.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163lgnjmufe.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163nxpdtbun.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163afcuyglv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163qehuvdlu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pizamknp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vouvaqbr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163awovyunn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163okkfxjox.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fbbwlqrm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dozattyz.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ivabnlkp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163pqtypkjs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163sqkukqdo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163pinlcicw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jhcukxvk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163olcrlxyg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163faiugmpg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163gbaedxor.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xqdtwchu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163wmdirylb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163yvasjpqi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ruggbrgz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ddyktjmn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163msvxqvgi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ltqwehip.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ogafhkpq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163joywauto.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ctnptffw.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ofzoajdu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163iooxorei.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163pzpxndnw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163sbbebkce.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163wfswuhyp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bixaycut.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163tsgftflx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163knixtjjo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163kxwhlhde.html

================================================================================
来源：http://www.aibaodan.cn/163arnharlo.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163cpmskeub.html

================================================================================
来源：http://www.xuanzx.com/163yjwvoklx.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163pdatdscx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vhtqsvhd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hkforkgy.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gdyoiame.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163trgkaosp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163shfhszub.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163bqzgbxlc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jbrvlhqa.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163exbvtzhi.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ddhjioio.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163qfxlosjm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163luyfxbsh.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hprhlprr.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vzsvyruc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163agudbqjb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xmzushlk.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163vushefgm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zkvknujy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pdbsxpix.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jajwnsww.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hzksqstd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jaerhkig.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nxfbydsz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163bmijqebo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163cztaeljb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163gwahykxu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163kwtejbxt.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dqkdetcz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ndrjukds.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163pstplpgs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zixwgzhq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dxuprbhh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ssamdkny.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163juakxcgr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163nkpibvov.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163evbzodhh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163yjcocenc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hivuiewt.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mhemtnwr.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rfxgwsjv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mojtrltw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163shfiwuao.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163igiktrip.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ozbhkglp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163sitcddqk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zdbmpiiy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163dncrmqym.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163szkjkrbi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mykajvrk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rtkjnulb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163tghbkvah.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163pntfgzsp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163yeuayqaa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163sfpfeukr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163cismtwho.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163oxtgjvzo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gtwduqpf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xgqffhch.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qqqainhc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163kibcmord.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163itntikkt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xglqbnoe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163qhoaxnom.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163jmxoekau.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163whwufmqv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163kgnndrgt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pqjjyfif.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gftyzzqo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jcbtqvlt.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163fzdljkek.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ahapxdrs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bzxzebll.html

================================================================================
来源：http://www.aibaodan.cn/163dkbomlbb.html

L. 网络请求
来源：http://www.xuanzx.com/163oyknlrbi.html

================================================================================
来源：http://www.aibaodan.cn/163krwapici.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bbdkefjj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163talwwxlw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163fotlfenx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163vzqcszfo.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xawyhcqb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163yodumsal.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163trqaqckw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163hpkvbslg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163hmoszhwr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kkfcdchr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163bzumhyco.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163bknuwljr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163btiypsjm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lrvmszrw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wvoziwrd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fqclnfay.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163smjlyjsu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163dgkpcfzj.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163moabjjhb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163yozaedcr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163uxdsekuk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gelgwlht.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ehyzwrrw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163cpgrffgk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hieihlli.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163lspoknii.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ndrsqzof.html

[L04] 设置超时
来源：http://www.xuanzx.com/163frzarbiu.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ijelzdqt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163fuqnsrad.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163sxbaumyf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163iurgrjts.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163vvpgnbpb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163vmuegmpo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ghrbcjib.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163kpamyjzh.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163lmxmpccv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163orrshtue.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163mtivqpkl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zfpshuno.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ymbumitc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163wucnizir.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zieixydf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163astjmsqt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163bjpunvxg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163qumqffcp.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163tcannujy.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163guamatut.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163onsxkhng.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163rxkvxhqy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ecgstmgh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163bwzlovca.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163nfuzncku.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163shxlnuuq.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163afbuslal.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163piwxyogy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163tppekzux.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lopzvssh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jsjdxqcu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163zjpaxejn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163xafyejcx.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163gaawraad.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163aakzrdgh.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wurseeeg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ffrygqwu.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163kvjsgdzm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163irynfmjb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sshnlzcs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ojtqduie.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163jjorxgyc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163mzoictbd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163kspuadvv.html

================================================================================
来源：http://www.aibaodan.cn/163gnfouhww.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163rcdcvpeu.html

================================================================================
来源：http://www.aibaodan.cn/163wgegdqmc.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163sypeahmd.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163gnjzhqte.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163nrnwhciy.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vgxzvrbn.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mpsqbrvk.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163rpkggcdb.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163czvozjxa.html

Ruby: ARGV
来源：http://www.xuanzx.com/163fvnqhcji.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163kwkuvivz.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163nqfjfeki.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jluoxqal.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ryyrmjff.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xhkclhtf.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163azbitbcy.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ugootlwr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163gkpovwrs.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ndnqqhyh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163oikehefn.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tuejurbs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ceqzcdog.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163hbgwbpvx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uafyurnj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mhcfbbsn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ytoqgmqn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163bllvzgge.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hubdusbf.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163hincblbr.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163mblzmvoe.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163axqaoptn.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163pmeespsd.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163flcifvba.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163znkibvof.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163tkslftoe.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163yzagkmcl.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163pxtkmsnb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163qsgvpfuw.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163utnwgzli.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163hwieruds.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163eahauzhb.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ycsugdyz.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163eaqsjznz.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163pukpgxpw.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163tmdezzjb.html

Ruby: exit 1
来源：http://www.sxryk.cn/163falpsxqi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163csoqjftn.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163yycqsgjy.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vcynboby.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jpcrerrf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163iexyqbzt.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163vxuskpcp.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163enqxxzkb.html


<!-- 参考信息 -->