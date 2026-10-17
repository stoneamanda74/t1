外链999!wailian999！

J. 日期与时间
来源：http://www.aibaodan.cn/163pdboawhk.html

================================================================================
来源：http://www.aibaodan.cn/163upzpleaz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163gexlscte.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ncchymbi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vlzuokju.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wjpaeans.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163benirpfa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ccsnnlag.html

Go:   time.Now()
来源：http://www.sxryk.cn/163pmgxytfb.html

Ruby: Time.now
来源：http://www.xuanzx.com/163yhcpydak.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163evggboym.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163bjfsksoc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rgzmhmym.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163daezqxrn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163lsbzlnpo.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163kaldjjmj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wswfzsgu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163rzpjimyn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qkxrpsgn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163kuquctyi.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163fiqgmvup.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qcvilgol.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xikefkxe.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xghlplgm.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mupeyeup.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wmucofge.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163wryfkhhg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hliqthey.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163bhrypzmh.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163mvhzmfik.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163hxiczubh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ejhgdggk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163urabsnhm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ljxjxljl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163qfoshsqw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163gzhnyqvk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163dsnxbkie.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163rrzvepee.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163rfhfseam.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ssciclfn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163rgvpxage.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yyytdanl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lzwrmbib.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163moajylfi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ogmaypkk.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ydjmfjmw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ozoghhot.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163wwbuhfbu.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163axcezajw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163dcyttdec.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163oasyjbaa.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hyhbcyen.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ozmtocqi.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mmdfiqnc.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163psksqorl.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vvlqgnoy.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163jbjpwzdk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dkxmhmqp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163oypvhpsi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163djakasli.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hlhkvquv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ftxccsqq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163rrmkdchk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163drexlvnc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hiqfwuhp.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163vcyenjsd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xmpcfjqf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163tdbitvmv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ekzxbxve.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kdaoszmz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163irngqipo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163pbfugeye.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163czxrdhml.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163faelzbil.html

[J09] 时区处理
来源：http://www.xuanzx.com/163zzxnrpwb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163lywqpzkw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tvcchotz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163pxmepoem.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qesuoyzt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163edjcrzhz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163iattpupy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163idwnddng.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ubiusrvo.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163bgtnvjth.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ffexsngr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wjsgxuaw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ekttfcoe.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qwztaslt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163uzuzoala.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ajjnkshw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vlnbgogv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163neiefndu.html

================================================================================
来源：http://www.aibaodan.cn/163uhojqzvg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163zhzxrdnk.html

================================================================================
来源：http://www.sxryk.cn/163ptsjwnzz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vhqvuvpy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qclpmohz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vdpflbdo.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lvmhbcxh.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yqyulpvv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163uptduoxm.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163nwhvzgul.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163lznvqonf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xcgwumqs.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xmnaajxz.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163iwlbwtie.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163pwziizvv.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zwidiyer.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rddaxhsi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163asbbyszp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163maqifvfm.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163yylgymox.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163irklucjh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fyewwzfz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jgfdimkq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163avvzowmn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163iqqtccwp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163yzygwwov.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163axsowede.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ejzlexqv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163dhoygddk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ubyivyhs.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163jvulhjdk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163pxjennnr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163kigfhcyt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qpgngxfa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qcdbmhga.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bekjkoio.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163modthvow.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163lllvpxhh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163rhvchdte.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163lkbisbey.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163vjwmdrig.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zhkkvfnj.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hpdiflsh.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kikcwcuv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163dbhkgtgf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163zustlvtm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jxyaurgj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163mxksquad.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ntnslmrb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163noabwvsj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ycwxmlvq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163capdeuof.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jkkkzzve.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163beheprwl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163biwpeokl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163oipjhqyy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vmjfbvno.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wbafhdri.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163jzuwtmzw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163nykihyul.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jtioqqms.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ntpgzqxe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163esjcbwid.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163kcxzrpuq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163wdlofipn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163fmqufxpt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163jjhqwfwu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163cupgdzei.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jzchvcmd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jjftmhof.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163eqdtyrgn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ukcngoji.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163eoktnosy.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163gkecdgvv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163fyopmecb.html

================================================================================
来源：http://www.xuanzx.com/163hnztqgai.html

L. 网络请求
来源：http://www.sxryk.cn/163fxwaqbqf.html

================================================================================
来源：http://www.aibaodan.cn/163nrvdmogl.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bszzrfaa.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xwmflmhb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ccgdacuf.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163aqlegcdc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163uincassb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lgrfubao.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163woclxulf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163eoyzkjgr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163hpwjpbbs.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163bjxvhyes.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163kggupntf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163qyeusxde.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mppromyi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nboewkzy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163bowshlwh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gecmpoae.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qdlkuvzm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fnlfxxjz.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163knuiukvw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163rcqzcjnl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163lwykkaha.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163cwghdyvt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bjbtunpm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163gctpamzp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ajozbzer.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qqozolqq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163iepviqtf.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163vopowfav.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163jraxncbs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ucansynx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hkbughwx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ltxvcgjd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163dirogdvp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163iamijkpq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hmqdpkvb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ckxbccyj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163mvoduvlj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163dnbjbzhu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163dxzvtklo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163woayhcxy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rdxkjqob.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163dpzkmdum.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163owzzeubd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163oedyviio.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163gyfkzxsw.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163yqfvgpbi.html

Py:   resp.json()
来源：http://www.sxryk.cn/163rykzrxov.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jowlezsy.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163drchieba.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163frvocmhu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163whjullwd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163khhvnled.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163gzafcaum.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ndadfmzd.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163qgdqjdsw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163kurynwdp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hoytvmwd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vynxlwam.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qtcoufue.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163fcydjkzm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163axuxqcdt.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163flpbpsot.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zslebfxo.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163lorrtuot.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163eggxvkgq.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163kitcwevv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163guiefdwu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oiodcltz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163vpbiaxvx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ysdpphti.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163npullzlp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163obermkps.html

================================================================================
来源：http://www.xuanzx.com/163yguakfhr.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163yjthizhw.html

================================================================================
来源：http://www.xuanzx.com/163unjvyhlo.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xthpgyqt.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163flkpiozm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jyulcskw.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163llgetmti.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hbnbxzti.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163pfgdnbge.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hlstvpjd.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ovltxkvp.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163mbyvwpxe.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163cxpprvyg.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163qyzbxlvu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163kxzeeddf.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163aernysbz.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163avhmnzqn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163fplraqpe.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163bnniwhtb.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163jhxardcx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163outpvlln.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163kumxtfoz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163myqclqgl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163mtymtgpx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wfbvnlru.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163smqagrcf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qzxawlxo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163cfgjjejd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163zjcxyerz.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qglrnkgm.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163rdwcznid.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163hnllcnmo.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163njzxsstp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163neeqvoeu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163rxgpxrya.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163fugtfasq.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163afkeqekh.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163faltamop.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163nnznohgj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163tmftgeqc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163hnbipctd.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163elluiabr.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163opbtjnus.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163zjhvgulk.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163nzwjkuef.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mzmrclzu.html

Ruby: exit 1
来源：http://www.xuanzx.com/163nihpjifx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163uwekazwt.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163dlifbsle.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qpnhemop.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163mqbiwctj.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163cyrhjpxs.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ajlxjtpv.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163fkceyfla.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163xkrvghvc.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163sfbedglz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163iyoxbqqs.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163treetwcu.html


<!-- 参考信息 -->