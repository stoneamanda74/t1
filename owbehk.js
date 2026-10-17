外链999!wailian999！

Go:   time.Now()
来源：http://www.sxryk.cn/163xfysgtzu.html

Ruby: Time.now
来源：http://www.sxryk.cn/163yesakskh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163itiktdta.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ovsnimyh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hmezspyk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163oirrkzlt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163utdrxywa.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163fztinory.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163bbnuxcsk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ylyiaczd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gmuyekvb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163qjculiaa.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163gelehtmo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163yqbjuqzb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163bdjggpet.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163koipcxno.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ittmiiug.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163noqtyrwm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163nuqscphh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163olccyfai.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163vjllywzi.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163nowowxin.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163sasntyvq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163iyxeatxb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ngnumxly.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163tndwurqk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163guyaolmf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wffbisgf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xadswqtm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vvpjxcas.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163yumfnbkx.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ekgwzvam.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163zlpjlskp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163encexmwt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163eegkwwog.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163vrwmsapg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163fnzlctmd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163iksdsbbn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qmculefr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163plqynuni.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163hymmykje.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zfthumac.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163lfefashy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vhikmqxy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163kjgxzdjr.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163pmabaxdy.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163yweabtyl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163casjibdt.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vxbeysff.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kzbgkaxp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163igquttdb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pmcoenix.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yqiklfqi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163amfsdmzs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163azccbrwt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kgzwiber.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pafjchzb.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163xxlxgkdz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163iecdwoeb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163rxrqiznx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163kwmemalr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163rovyjhhj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163gkszkfju.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163auyjmkhj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163pzjkgezm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163octzzsad.html

[J09] 时区处理
来源：http://www.sxryk.cn/163axomgyjv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163eusotann.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ozquxvva.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163iwaxulnb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gxgmrbpv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163anqrcppq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kqsacvey.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163yojythqx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ryrgacad.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ojlpwqsn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163qxvcnjel.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163lavefpme.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163vtasogcp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163cckipjlz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tuytzqpl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lnnsloop.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163cydiuaju.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163rvmjtszy.html

================================================================================
来源：http://www.aibaodan.cn/163lxsbmkpm.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163krmefhnp.html

================================================================================
来源：http://www.xuanzx.com/163yqiugigv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ihhnpyok.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ulknucbn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rekzyqjt.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tatfrceb.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pxhosnqx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ynthdijk.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163hdkukvuv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163sggsqdeg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163moogosdz.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ekkcknfi.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163tqxiuwoq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163xoklnvvk.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xdoxmmcd.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163delhpwbc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163xhuyhtsn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wfvmespf.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ffaiskve.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163cllghuga.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163nktutfcv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163eaoftiia.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163izfrnnvs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163trijbimj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zzoahcis.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163lnpdigdp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163iuaqsgbv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xpovhkkx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163demsapdv.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163nzoapire.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163mrxcctev.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163twzuvahe.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163yajenfmz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dsbldblo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163dvnirdxf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163drpqkfyy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163khjlvicp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163uubfjdac.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163adbutsmn.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xwyaqjel.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163asayaazq.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kwdduyhx.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163easaaejo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xbgeyzhp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gmaxzsow.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jucaoxvb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163esembosa.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qbbdwrtu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jzvorpki.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163xujukjvx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163naxbdojo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xqeczlbz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163jocfukyr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163epouenbc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xgpzwlmy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163lrhkhtrt.html

[K07] 进制转换
来源：http://www.sxryk.cn/163qsmhiprl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163harhdumt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ckfktdsx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jmbhxpis.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lxyyncfi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163eqkueavj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163sfynfmtk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163yvvzovas.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163mcrfuvlg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163godexxsh.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ceptgrvt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163uevxzoos.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wonxlorr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wpdfvwvt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163axogrwux.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163kwcmriot.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163wszxzyty.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163evrlmbyn.html

================================================================================
来源：http://www.xuanzx.com/163ejfkaswj.html

L. 网络请求
来源：http://www.sxryk.cn/163rqsqfypc.html

================================================================================
来源：http://www.aibaodan.cn/163cfegbfzy.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163wkguxjbq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163xmxesnbj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163murfcvgi.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163vxobirbl.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163zyxslcuv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ggaudtuz.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163igloicjp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ohepipun.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163qchepkyn.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lvcnlolr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ougmgrkp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163sdfnlezt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hwdlvmrk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dvkkbnok.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163xmplykpo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163jmvwpfje.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163lgegtmeq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tsmemnaj.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wutaefdm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163lxwgudof.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ycrnkown.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xqmsynwd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pmrhhshm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163vkzzpfdb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163icpadqtz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163hhdomjhm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163glnudvqv.html

[L04] 设置超时
来源：http://www.xuanzx.com/163cqehffly.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163abtgdmjw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163aduvlsju.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bmfcbwdt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163khtdupoo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163oybciyuj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jfznjxku.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163awuxxhqc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163rtgtbrgk.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ixqjbhqj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163sjmmfvmt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xkeqhkdu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ntvgazxt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ohbqkbtd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ywuykdvr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163cnicsesm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163hwyfbyec.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ifeaygvw.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163qhgoicij.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ufnwunps.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163servwmhj.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163kdayznkl.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163sjnpansm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163vghjlgta.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ztndqbdz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163nvxmvwxg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163asduetyq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bphaojtb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163gccamflz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163fbzbyyam.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sxvlwayv.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wcuzxxug.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163kenbkaht.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163espcumbh.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ahxxdcwf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163vwkpsbak.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163lkhtqghs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dowwzvmw.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163uhfwzlat.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oijidcwg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jmqmiqnj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163owwmoaar.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163mtjfzwox.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163nohwbjgp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163pqfpixtj.html

================================================================================
来源：http://www.sxryk.cn/163kplzmwpg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163sgylvkhh.html

================================================================================
来源：http://www.sxryk.cn/163cellnzth.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xfsnmqru.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jllvrqiu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163rksexsts.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yaxjjvcg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ryuhcaxg.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163kuenpqif.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163dwdnjvcw.html

Ruby: ARGV
来源：http://www.sxryk.cn/163niiusanj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163txwzzsfe.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163derutayr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163sajybiml.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163cgnbaxre.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163dncrqtgp.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163xjmachcv.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ggreaajq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163suqnebrq.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163rcddxftf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163elmcvjcj.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163swvwzeoq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163upilecct.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163judnwajt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163flmanueg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xqvhmpxu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ikmfrbuv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163zbidqotj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163pzeuzmvj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163owgnawze.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163hjgkrfld.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163byyqttki.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163lqcjmvyp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163skrkqmpe.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163qzpyxorr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163weeqwdjo.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163eomidiky.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163tpoxumry.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163agukpfwh.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163erxjulvb.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163olifjurh.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163werjdyth.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163aocnfhjc.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163gepwajgq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uupvdwjv.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qujigrdf.html

Ruby: exit 1
来源：http://www.sxryk.cn/163zhhfmhkf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163sirpmsnj.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jrkvktej.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163diuwmfhr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163mpdxnrfz.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163merprcwt.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163msipeycy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163fzewcscy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163tjpebfrx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163cwiamciu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163aacmyqwk.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163bpikbqen.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163mgttdicl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qwagfsph.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163kmbshdia.html

TS:   require.main === module
来源：http://www.sxryk.cn/163huryptyi.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163zqbkzegc.html

Go:   func main()
来源：http://www.xuanzx.com/163rknakunx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163yrtyyhsi.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163mxwactod.html


<!-- 参考信息 -->