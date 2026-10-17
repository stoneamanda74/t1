外链999!wailian999！

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kcbebbsl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kghfvfsb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dzkmpubn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163gbzieipc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ommnichp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163djgtaxve.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163bkponerj.html

================================================================================
来源：http://www.xuanzx.com/163dbgrltnk.html

J. 日期与时间
来源：http://www.sxryk.cn/163roebgaor.html

================================================================================
来源：http://www.xuanzx.com/163rwzqnmtk.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163fnzzylle.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163inoyefhp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pudrzhae.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xcqeoxkg.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ecdgbdhq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163abhqyvyk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163rrfndbpm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163osspbzzp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163pxzvphwd.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zwhnjaic.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ujkidfec.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163oprvxhyl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163njyledbk.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nawcddwm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yoaqqrcu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bqsfcxml.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rgblgete.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163yfcjrjpy.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163klacgbdu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zvdsnmbd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ynfjghvq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wutflbyd.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ujlkzeew.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ypdvnbav.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ueepfqdf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163rjcutvlx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ygzactpx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163juqfbgrw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vyeyvouy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ysehuuqx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ffgcimpz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hvwyzvqb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vctraiaw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163cegfjdaw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163rmshiutf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163gvmgadmq.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vmfxniwq.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163hffqdpwf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lfvomney.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yltuuvqn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163trcxweoo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163anxecmoy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163dvvehfpv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163aqrpyldj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163adlvdlpf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163tdybmtuj.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163caupuwsk.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163akpxuqbo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163nsgdfmpa.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163tcaoambh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163fcevqwox.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163yuohpzeg.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ccwfxwfs.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ichjkgxp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163dsxcysfr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163llviwxtm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163trirgjrp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163poabmkbq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163txpjbzqz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163pnpuhhtc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163znxklgqx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yvpfxenv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dwtcgxiq.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163gmmuevzy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163pyvlngzu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nkywexqv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163svpqnmhp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163pdhlpram.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nbahyiix.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163zgpydzhx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163icwgvdth.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163fmwtffod.html

[J09] 时区处理
来源：http://www.sxryk.cn/163mxjuiamx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163abjwgqrt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zkhubacv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163flctyflm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ekednicp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163pndobexc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163cewssimg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vgxdqngz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qzredgvd.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163knsmmowk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163qggumcqd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163yixudiyo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163urjbvojc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163vcglshhb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163vwremdju.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163jweytlwj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163sngqahwu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163goexqlyp.html

================================================================================
来源：http://www.sxryk.cn/163gezvifva.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ykpoawru.html

================================================================================
来源：http://www.sxryk.cn/163ytqgrdbr.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163seotolyw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wxzinmae.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kslpzmha.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rpuxjqxe.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nauyfzom.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xenylwsz.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ujmjlcyo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163yjfgsour.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163totjifjr.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kfqntybv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163uzvxhdwq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ygemdzxq.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yhoalxfm.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163aefjpsxi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163pqcmqtdz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cklvqphp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163rnwrwlpc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163fhiebync.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163jhkbznwm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jxrsbnqm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wfhxdzjt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uwlhcgtl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pofnpyjv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163xacbatil.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jtiaalzv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163avccqfnz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163sltlofpc.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163gmqjjvfg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163wrmpsloa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163iwpirlyi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tiyrxpnc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qvlabvmq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163msjxhhpn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nqebfwdm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163rmbtbite.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163fydkrtqz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hnpuyjgl.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163unomixxc.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jwfchdgu.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bdkxuvwy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163putiznee.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jqdajwab.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163vnrkacxr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ujtodrun.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163kdsmsqcc.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163schzicga.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xsfdhfib.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163buykidgh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163obemxebn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xfvsmujg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163obicmmbc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mmaahnjn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163drqnklxl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163naxkhatb.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tznszzgx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163amucewkj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163nzcjeihl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pxlhqyhd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jaiejseq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163tzkfnrul.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163swhqvoiw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163axgnvdmz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xlheohip.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163lsucvuok.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dmanmsvt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ugleypyj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ebfloddb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ebdplnei.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ukkzfsdo.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163fygmgnbf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ygqqgoqw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163fijpbtoj.html

================================================================================
来源：http://www.xuanzx.com/163bjscsiio.html

L. 网络请求
来源：http://www.xuanzx.com/163wxqgkvzk.html

================================================================================
来源：http://www.aibaodan.cn/163fmkloqac.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163tsbyktik.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163czqlqniq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zztomlgy.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163cjjftkjq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163cvdrzcjy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pgwxgfst.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163mpcdogcz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163anedghmj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xcaoagfd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163dbujbftj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fqzswauy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163wucyynpb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jldfstqg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xsgsiayn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163istqwodj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163kbegwxzw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163pwhmkhby.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163nsodbdnl.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mhnajcqb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163pxxwpzac.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163kxxzpwva.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zjixcgxp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dregqare.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163gffhogaj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163xrqgqrvy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163mkwfoeal.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163lkdfazqy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163aezvvekh.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xvcmdwdp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dceuwktk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163panhqqtt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163telrhlsk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163tgikdomi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ygjemiwh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163bcqrlvuj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163enzsvtio.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163fsgfqhon.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163puzciwdt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rjxlijhz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fmzitadl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ozqefpop.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163sqyjqgrm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163gmsbgano.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lwnznkny.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fexjbulm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163cwyfihru.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163pkglubll.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163oxrztkfu.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163aydinpxm.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163tpkqirgf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163zctfcyvq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hcuzbnoj.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163sfugrgep.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163sxgeeziy.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163sapuvszq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ialjkfci.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163mxcphanl.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wjqlsjmj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lsykeswt.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163eaoqgrdf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163otfvdnqt.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163mpqrmaku.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ogphohcj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vbngwybb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163xrtodfbc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163nkyfbgno.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qlpuuorc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fskdzlhx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163clwufpoq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163xaaasjil.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nnzfyrxe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ybhuqvhf.html

================================================================================
来源：http://www.sxryk.cn/163yrfkssja.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vnpgemyx.html

================================================================================
来源：http://www.sxryk.cn/163tdxphaad.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ljpzwylp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163arlpbhew.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163clbrdwmt.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pxrkyyzf.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hyxsqwjo.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163xvpaxdqj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wvpbwdik.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hfixwanp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bdebkrdv.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qmmezfsb.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163dbqhdqes.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163daxbhmei.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xklfocig.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163tawgybew.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163xzcyugsc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ougfkusv.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163vxhkouoa.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dulecoei.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163aqyilhar.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163gnedwtnc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163wdxyrahs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fecujchx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nbraaqho.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163pbjsiemg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ykzzysij.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163yhmwqqys.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lddhqkcd.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163hegftvhs.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163thhshuxa.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163yahsmwpz.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163oauxjvhq.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163jnnifcoi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163xairpstm.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jffbkpau.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163hwpbdcvf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ubbphgia.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163wpufkswk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163uapduktn.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ljhvfjrz.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ahxdayzq.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163yzsnqrgm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163vgbcamkq.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163lsjhcrqj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163rqnfrydt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163uxkxxcut.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163djbbscqu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tenqctqr.html


<!-- 参考信息 -->