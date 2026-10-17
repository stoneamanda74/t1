外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pvseqxdw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163trkugivo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163wvlwsmws.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163nijkaerk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vyappasr.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kazvpsxe.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163njbmgvbh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163kpuwbbpk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jpkeyacj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163whyodsqi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163rofyvikn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163kxmlbsgk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ibjqsons.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163byeewcqq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163vchmxmro.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163mdixpopx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xgihigoc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zspijacn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163borsuqtb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163vgvkhdtf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wkkfojab.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163dksxrthx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163iibowtws.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163wqhapnyx.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163aoerqnmy.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163spmygltl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163bvaiujgu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pulyqtfu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163plbjnthj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163bbmatvpd.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163orvlhfxl.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163dyjcqtsn.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163pwifolca.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dyxbbvms.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163wavjjbui.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uhfiltac.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163aphncumk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163lpzxatsn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163mcfeqcmv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mkhtqnwm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pvrlrlda.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163mugvrwsb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163tkrpaqsa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163igaqbvvk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163odldfuen.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163esnewkhv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163woxqlzig.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qszvdbes.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163omigojga.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163purxrdmf.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163amupaygf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163bviqxqxo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163loheszte.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qmzhlpfb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163iqlofdus.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163klowclad.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bxdpmvwf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vqpegzng.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163lrexcyva.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ysogreri.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ooaiauhu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163doasppxd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163igefqgle.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zsuuzyoy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kpazhlqy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163niuxgjlc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163qeswuxbg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163tpubcdhl.html

================================================================================
来源：http://www.xuanzx.com/163tdcgddjj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163qxfkxmix.html

================================================================================
来源：http://www.xuanzx.com/163mftdpdbx.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163lflekziv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163iftmwspk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kfhkkbwd.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qexwnprh.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fnkodqxg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tfuhotuc.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163gnkgsszx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163gkfobfrw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163eansnkud.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tvrcqmkh.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163uegyycpt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163fisjnrxx.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163meambzpy.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163uocnbsbc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163cvpfdvuq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zljjthvc.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163pgefhedu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163tilmtpdi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163greqncsq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163cadsuwjy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cxvgpvyo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vbqahdoa.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hfpthcng.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fxmqxrfh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163oluzqjex.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ujlqyqle.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163qxnzosjs.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163gzcxkikt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ssfinuvn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163gpzircqk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lognrhbx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zybbjvjp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163mkngcrgi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wcuuviev.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ulanwqhl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yhexmbvo.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163iysevlor.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163xnkqklvz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gawywbct.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dvwtumlk.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163uhbmnxhn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163yzasmtgn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163dfjhoycl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163innljapp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163iczaysup.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163bejavedj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ovmnjcib.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bghxxlfz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163osnbtktq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ipdaxbkf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163kvqufdxl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ejnpmwoj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163mroarsuw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ogcwxerf.html

[K07] 进制转换
来源：http://www.xuanzx.com/163kudcmckc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ygrjrcfm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tuxlckvj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163chxbukjz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163otelfnuc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lcbspehc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163kdqaefwt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163mzcwmxwg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163aunlcnml.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163lquiazqf.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163iusfkpgh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qyhaewyi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163temzkxnw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163bgibyczt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163zsgzekuu.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163iecfnqng.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163rlzgqtko.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163comcrilq.html

================================================================================
来源：http://www.aibaodan.cn/163dpsyclmc.html

L. 网络请求
来源：http://www.aibaodan.cn/163tzihmlbi.html

================================================================================
来源：http://www.aibaodan.cn/163kbazsrsy.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lkfgajim.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rtysbokf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163maobktah.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163smheuiwh.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163nsfnmzwv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163hqrjqpyk.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ylhiyeae.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163yhbqlwbz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163dkchoqgp.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163wyykqeiu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163lecvcxvj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ddogaqhb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dtuxfvhi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wgnmlhyg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163dohfbvkv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163jsejlpuu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163psejxnis.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163xvspsxzw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163hobvwkpl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163razxumff.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163tjqwxreq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fmgguthm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vejkxzgb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yjjrxpnp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163wpgwyrgy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ucrtqggl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163wvwgdxwn.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163osjajdte.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ppmdhxeh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163qxhhjtzp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qudbmqiy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163obznyofe.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163xeikfzmj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ycqyrktr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163zvpzcjfw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163afnbxpip.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163mjcafvzm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xgjkcniw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163mjklkaae.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vrviuzyl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163knnequry.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163paunedyy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163evhxeqoh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163gicxigzk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163qtxttlbr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163viuogafe.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tavljhgv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163xkkinlda.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163hyianzlj.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163zcrqyfvr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163emjqcogk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zgdvesdd.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163jgmtgfyb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163alhesixv.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163slyvruty.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yoiayifl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163yvwdmalu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mcxuvivi.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ioghbjnu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qgyubgvc.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163xcdmzlck.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ysqyxgek.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163pywjwmce.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163uczjotmz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vkjyuqnj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rzaegynb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dsnxosjb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jzlacahv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163syolbfzr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vujlgoss.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163idyfnjtp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163tjehrsoc.html

================================================================================
来源：http://www.xuanzx.com/163jxbjcgll.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163nqiiqifo.html

================================================================================
来源：http://www.aibaodan.cn/163ocirqimc.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163otchityc.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163oyeokluj.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163kouldazz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163oajprzpq.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nntkcjzz.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hedlnkto.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163wgvurfce.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163sysbkhyh.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163nrnzrrhr.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qvxetjvp.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163cqxmcvlj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163xrgfjfwn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163hpcoveoc.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ffukktwp.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ntkwndpp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ouloqpze.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163idisgthr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163tftzbspv.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163wqluykcc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163brlmfqvx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163hojwlyyq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163pcwjugae.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ypnnqywi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163uqyyajjk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163exblrjkg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163qnohrrnk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163wximbdko.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163xxtolpib.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163zklstkyl.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163fsmrdypz.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163idsexnch.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163tzvsqpdd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163fiyhhzrt.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163oaeaslii.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163pbpjxvum.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163honnpbtj.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163oeszjxln.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163hifxzjsg.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hvezggsv.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163wvgeofea.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163zwuklkkc.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163bsbdsqkk.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163huwnjpfm.html

Ruby: exit 1
来源：http://www.xuanzx.com/163mxitnbxe.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zyneioji.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163rkywyqxa.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rkddjlxq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163sutaztpe.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163lhkkyzub.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163pkmktrgm.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163isktgnaq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163speihjcx.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163miqgpzsh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163duakkorc.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163praygdnp.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163fhjvxbxf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ejfxmdql.html

JS:   require.main === module
来源：http://www.sxryk.cn/163jtnhperc.html

TS:   require.main === module
来源：http://www.xuanzx.com/163mweexyye.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ksihpgaf.html

Go:   func main()
来源：http://www.sxryk.cn/163zkqmlvru.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163laocuapc.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163fsjawmkz.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163boxpapcy.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163sucvyxwk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163uynklllb.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wvaftnhy.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ssrblswf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163vmigbcwx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163lmzsotki.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zxsrvzmg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ryhdzteh.html

================================================================================
来源：http://www.sxryk.cn/163uwdawxmm.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163aigunevl.html

================================================================================
来源：http://www.aibaodan.cn/163wkxphuqi.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163abziuclf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163nksppxhu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163bevdgxfm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zhrpzfvg.html


<!-- 参考信息 -->