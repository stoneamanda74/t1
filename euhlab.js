外链999!wailian999！

J. 日期与时间
来源：http://www.sxryk.cn/163ssizeqka.html

================================================================================
来源：http://www.aibaodan.cn/163qksilfzr.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163fbefcimi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qwtsmpcl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mcnbvdbx.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163abpkhrkw.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xszfetpg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vmovuymn.html

Go:   time.Now()
来源：http://www.xuanzx.com/163spbqumqe.html

Ruby: Time.now
来源：http://www.xuanzx.com/163eqkexdbz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qzpyyxhf.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163pxrxygna.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wrikpthv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qglydtkd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fzlrhngn.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ypmblepd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163sxwfkcgh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163krnakfja.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ayfoiywr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163aqqmqbym.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163fjeeowfh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163agrixqqs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163chxvxkta.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qowxoako.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163kmhbwxuw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163nsxnqqxr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163gaupthiw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ishgmhhq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163fykiajkl.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163qumieila.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163oapqaqph.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xtxnpkcp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163bnhxzbti.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163kfwfdehj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163twhyonil.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163wtorwqdw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163zrxlwbsu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163uktfpmim.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163dmtigiwg.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163poarijjs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163kdtebbua.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dwnpmcjn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jklrdihr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pefhhjvf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wjxvbmxm.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163txjgijhm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163blurkmsq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cbcgnnec.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163kakrlaqs.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ilyxrxpb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qukngdyl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ryrmgsrv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163cguuccwp.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163xnomkcsk.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163lctnqgmi.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pdqqbjcn.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163kxifpdvo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163aiafsbcr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163htargwgm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163urpajhih.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qguyogzq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163mbdpmoxq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ljszwesz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ohedtcqh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bkkhknws.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163pbwneuyf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163tgmdlktg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163olnlexwl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163nfpzmlgn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163cvvkjhsi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163uqosbkcm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163strucpbv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163wpehjaph.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163naugsvvg.html

[J09] 时区处理
来源：http://www.xuanzx.com/163rfalvxmy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163rzqhugkx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163poumoybh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oyddnbbu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163yyuvootf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163rpkudprf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ocjawlbo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163tcnawjud.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163qwozlngz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163jhrtpofr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jitheqlk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163hbrlikag.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163qlvgyugl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163hpuhmddx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163riewfzem.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163wvsmejzi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163weqmfhad.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163leshncvr.html

================================================================================
来源：http://www.xuanzx.com/163hrjflstj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163hogpbymi.html

================================================================================
来源：http://www.aibaodan.cn/163ertfpwth.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163rwatiurw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163luaonarl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163smdqlqtg.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gifiomcl.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dmzjskol.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163hninaith.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163wwctyaqg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163sppchyrc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163dypfmrfd.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163hhsuzsli.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163yfwbgspa.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qtxnoflq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jebjvrrb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163myxgeoxj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163twvaecrp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ktkdnifl.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163fqxbyhzj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163rnqlsdze.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163tmlxfbfl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ajitzszo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xilprexq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163byvbtmhe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mwbrotia.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163oohlgczi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mgklxmqw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tkoyhuzr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163idxevver.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163jtofkvla.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ztmewnjl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163rvyesbyn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xfkutbvv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hhugduvf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163uxzhslix.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xdrogzbg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163seggyizt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bszenadl.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163zzlaowkz.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163raulzuvx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163qyihnxvj.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wlthpfsh.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mrdrxqpq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163irkxmejl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163bugkgeeq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mjedhtfr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163eobaxpmx.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163kkvjgznn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163vsnbwaei.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163qqahtkkn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163drsdjrez.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hpqdpqps.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vyhvgist.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ubprclwf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ngdfklcb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163fruhcmwp.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163xzagrgqv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163xezbcdvf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tdnbtsef.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mxroawhx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163sbvxmere.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163arrwkwcx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163kiehmwdu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163bptexfin.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163umwagamu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163plehrmjp.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163pwescdbv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163kxocdeol.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jxwtgtdx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163trbihhmt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163upzhoiwv.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163epokkljq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163gemgsdmw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163bjtctrel.html

================================================================================
来源：http://www.sxryk.cn/163fqrnvjqb.html

L. 网络请求
来源：http://www.xuanzx.com/163vyofiobl.html

================================================================================
来源：http://www.aibaodan.cn/163yhndmxra.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xktcblxi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ttwovttg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jnybkmxy.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163wenmshmg.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163pazrhycw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163qkzvemiw.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jadoczkh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163kwbmphik.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163dxnjaoel.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163rjwcdlzj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163qxkjzivw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163bvscgdbx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nyaiyvyh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vemouiyg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wvlnzwqx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163utapgchl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xhkekijb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163byjjgekf.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163plxmrbbd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163iohsffbi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163lhbwaavr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mfgcoeen.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qmalhpwk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163jddjgkds.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ryxyyqec.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163kkdwjhvu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163gaxpjysc.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vtxubijq.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163digpznhv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163napoakvt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163buytvemo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vnasdhke.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163njtfejwd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jmpnycgh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163isabauao.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163vdlexwdc.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ndsaoctc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163xonorysr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163qiynrbqc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163arkzprhg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xckzklmg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kdpwmksr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163fbcsigvj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jnqshslt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ipfyggoh.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hbljohoi.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vpufksbb.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163pvewqlyu.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jtbogcve.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ewjmqfjt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qlevcqsr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163xhohdxbw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163mcmrxxsv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163avgdxbmv.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mzwqzaav.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ayievcwf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163euhfnrzx.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ttryyxik.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lvrlthcx.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ymulgwno.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163eebwwnaz.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163sxtzueic.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163qkewzzqj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163xjdmtyix.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kmrvdupz.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163stadwhhe.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hoqnlogk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fffljvxn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163npcsewwj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163yikjzkyu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163pyqpcmsd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163inottynl.html

================================================================================
来源：http://www.xuanzx.com/163hhloxvwt.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pnycwirm.html

================================================================================
来源：http://www.sxryk.cn/163cxbzbehr.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163oiqnhqsq.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163krswurtm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163nkzlhxdx.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hdrwubbh.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ixsvhxjn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163vtabngdz.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163psndcjxd.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163mjcoyfze.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163nvqdsvnt.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163axwlqbjk.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163evrwgyqs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163kznsqcoi.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163mqxaeilv.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bjmtmhes.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163xuwacgsc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163vqbltdpf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nstxayrs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163luiwjqtt.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163nhexhiux.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vapjwggk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xrehdtfc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qcrhdpea.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gzfiknil.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163fcukzexb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163sjpvkhny.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163yxephhhl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163fhhxgwax.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163gphmwpbc.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163lsfagpio.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163fddhbrwf.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163dzbffuzb.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ivetibpa.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163iacgtilu.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163oezehpao.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163gvosskdq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163btzynlsw.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163guzficud.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163jxkluwaw.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zdtvroky.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fwkzybgp.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163qbthhqcx.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wttxrdtf.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163mwhrgpqt.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163daspcqtt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163phxeijgu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163izqlrluz.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kapdrxeg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163icnggkkv.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163kjajgsyg.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163tndpscqb.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163sntshiec.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163lefvmoua.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ookycnzg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163germfyir.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163eewfaqzt.html


<!-- 参考信息 -->