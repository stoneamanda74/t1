外链999!wailian999！

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163xjtssdxx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zgyyxbex.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zczlprbh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163fwxopoci.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163dgicsrbg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163rnazegsr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ychzdkrk.html

================================================================================
来源：http://www.xuanzx.com/163cuwiswpm.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ycnjrged.html

================================================================================
来源：http://www.sxryk.cn/163brodtrbo.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163hfqsiwlu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163mtflgpxs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ktbooqbh.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wzmfgzxn.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nipyrnhf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163obcucapa.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163yvjlgfdo.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rchsqpib.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ndhmlkhg.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163tkrpjtvs.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163whvyvvyl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ecgexsqk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163tocvmhfy.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ovgfpece.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163cxuascfm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163vlabwula.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wvusfjie.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163aedcizks.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163gjpbvgvk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163nevwigsb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163wouelzxs.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rmpoynqt.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mjkdnhom.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163acullrvx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163whhcfvhx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ladvjvdg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dimmrnjv.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163swqrtexn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163pzeeuwuo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163lxaoyank.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163zpzswoxq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ffhheokn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163hpyliojh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163nwjiupsg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163siakrhnm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163tomzoflt.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163yyrbkpzc.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163cbvbifes.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163jrpdoqad.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rlfnvdso.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qjfzbeug.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163owdmpgzu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163nwzvkzhf.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xibzbvns.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163rzstwccq.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163attblkyp.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163iyyaepwg.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163gebdrhfm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gaihurlo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163tdwgvdqn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pqetcktm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mpdlnouj.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163phgspimr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163nmgwfdnp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163yvnafskh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bxasesyj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ejvofici.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wiavmydq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ebfxqtua.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163dudyadlb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163okbwsncu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zslwegjj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bqxyqdeg.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163axjyznza.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163vuzzlmmo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nqcdbiwj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163rnwqzeon.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163lvagagcn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ubojqcir.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163zhjqzhkh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163isczcead.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163zefdqxck.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fwgiqguk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163reovqdbv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163kfklkhjz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wxjaxivh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163eekaodto.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qcjjvrdz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163nfeckult.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163umcyeozb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163icrmrmwe.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163sbdjyunz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163bkysmbpa.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mfwdqhlh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163jkhsjksa.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163jrtkbsoa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163rxokkrie.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163yxkjmdkl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qupvsmvx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163sjzeqyrb.html

================================================================================
来源：http://www.sxryk.cn/163pmiwrtvi.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163jctelxmp.html

================================================================================
来源：http://www.aibaodan.cn/163cieabcuc.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163gictrbhi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163dhfjpsbg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qwyepnxp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163dpizngpe.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jdmhepml.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pdiooyhs.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vlzqcnoh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163aeghvawk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163coffjvdr.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163oakahdds.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163zgbzozhv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163btuukgph.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ovqvxgdj.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jprwfske.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xnpmxqlo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kqwhitvd.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163azeujbue.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163uczscgos.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163wrsmfcrz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tsrtvewr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ksrcevbh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rfpkxuaj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zobgnktm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fubyyqot.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163mzzjagql.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163mtusuhyv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163zuspsimm.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163hzuyujuv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xiswsfwo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163lhsuitwj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pihfkgyp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vgzxzfoa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163fzyhapdy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lxgiuwsr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163riqreknw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vfdxuodu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163drfmynen.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163yozmhgcz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163aiqjhdvo.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mfcebmug.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xpjtdlue.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163syxccbue.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163psyztpzv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163dxikbwdn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163qeuqweab.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163laipjxpt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gcgwxhoy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163duugrdcf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xpiagzjl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bwasxjqm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dymyzxka.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163bocufqvv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163pceddkep.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dpwmlcrk.html

[K07] 进制转换
来源：http://www.sxryk.cn/163wxqjlhku.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163szthcmzg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jybmhwwx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wckcbwph.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qdrgmgnq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ekchdoha.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ibnwsqdx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163gxkcdcsx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163caesroyb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163yctirrzf.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163lnrrxday.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ejrwiuyj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163iccsfthx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wxikuyhl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vzutquhc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zoaouhaa.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163oduononi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163cabvzhpi.html

================================================================================
来源：http://www.aibaodan.cn/163rqkcgunt.html

L. 网络请求
来源：http://www.xuanzx.com/163mbgivtuz.html

================================================================================
来源：http://www.aibaodan.cn/163tdxybfbl.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hysifuue.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163qgnzfpip.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163chqfpicw.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163zmshpbdz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163erhfeqpy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nvfwbwva.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gmroycpa.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xxoldqoq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qsbfnngm.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hzshwpkd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163fdqdvcpv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163kwbgkayy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163rjgppweg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163sspqxcqx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163nynfgpqe.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163pvzoyjbn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163bgfvnjvl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163mpxzxvwa.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163sbbtkxvu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bpjdnerd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163syqyzpdm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lqafuzqh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rvabqhfq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yueyzfxn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ceoxsnia.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163xndwzklu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163nelvtgyg.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vqnwyxij.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163crbnegyd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163qfkgohba.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wbxhqxrb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163povsguxl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xswrwzjb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163nuryhulp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163vvmcuphd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163mbewernt.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xxzrdjdx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ryztjqbz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163gyfrqqsa.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vpntydne.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163eqpocvmo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163pbysmjfk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ikwslpia.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163hpmxnasa.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163oujfjbsb.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ivhxyvqs.html

Py:   resp.json()
来源：http://www.xuanzx.com/163guseqywi.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163exnogkja.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rktyihif.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fdlzfmwb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163fnnrhkqi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jzgoedex.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ikyuftqe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xhkoqmtt.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163gtnirjup.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xxrgbbht.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ytjxosnm.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163plqnbemt.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hlfhhjta.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163prppawmh.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163cdkspkfm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ycybqqoe.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163kyiwhvbv.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163tomraqla.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163spikcvuc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163twddzrke.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vbavcqxu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bgzgcksr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163nywtqeiu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163abluyhhh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ovqtfbyt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163fvpgbyrp.html

================================================================================
来源：http://www.sxryk.cn/163qpvciche.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pautxgyv.html

================================================================================
来源：http://www.xuanzx.com/163mmsncmci.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163rxnkikmj.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163kbcgfacw.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163gqntfvst.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vvqhpaqt.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163oeqjmvxc.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163arlreicz.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163tjuwzftv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163tzhxeqkf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ecwcozjg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qxooyjbo.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163tmuzzvzr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163xikbvepf.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163naubleey.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163lhkpepvi.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163hkchxewe.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ytthwqum.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163kajqfznl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vftckqnr.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163oxtuaqxa.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163dwtoehjp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163jbuqnkhq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mijuowxv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rkqaicrg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163pedixdch.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163apzcoukk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163wrooqnxt.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163cceiigms.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163trhtndgo.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163estssypi.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ixifubfg.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163zinjjkeg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163upfilxoj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163sjkubolp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jgomnrqc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163wpoopflm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163adhgvwtt.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163kcvjiafx.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vmmsrimd.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163xqliphlj.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163divqbnhj.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163smkldmjf.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163cngoflrs.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163hkmfdazw.html

Ruby: exit 1
来源：http://www.xuanzx.com/163cvhmqcjv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163sbsjfuho.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ufbqxqtn.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pefpehsa.html


<!-- 参考信息 -->