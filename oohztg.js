外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163xrlaxfqq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ezdswyzr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163wvancdks.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163avxnmwzl.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tacurvgb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163epefetye.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163vzhyvsan.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zpsukdyu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163dugayywa.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163vfzvigmx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163kjntbxtw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163hmcmejws.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163iydxtdmi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hnhymlhj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163amxcrwjz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hydaukme.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163wdjylwvp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163izrvylle.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163iqdwgqqz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163eogkmvat.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vweortlx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163miuqrumi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163tepfdydv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163pgogflia.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163cqixkznd.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ydclrqxr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163jvffqvzr.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163bmqnsdew.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jjjmvjdp.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163jjvraijq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163sizzdntu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163tjphdelp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zvybjdxm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163aaxjrzhi.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163xxmsyoke.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ffieqasp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jzsbrara.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163younvmur.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163yomtibug.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tkhqpqzf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kjoqmmmy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163lmyjxmrj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ycjcrtua.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163erhesfys.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bkppipaz.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ckjzvscc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163qupikrsb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ecxagrwb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163wrtzelmd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163iiodgcxh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163tugtpyih.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ihooibkm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163egtjosoe.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163pmxfjfkm.html

[J09] 时区处理
来源：http://www.xuanzx.com/163hpqcbpqw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163nhfsnnub.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mdhtlwql.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ymsbyfuj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xzrjbmkl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163nwjdyfja.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163xnndjxqy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163istnbhon.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163yiqounzf.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163iplqxnbl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163gqgeljjz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163pfthminm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163lohisdpj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163drqlamkg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vltguszt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ugxfsrgk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163mbslhzdl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163qxpvcvog.html

================================================================================
来源：http://www.sxryk.cn/163occyokbq.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163zbtidsiu.html

================================================================================
来源：http://www.aibaodan.cn/163stcoysny.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ntioxfym.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nivodqjw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163irjdpesz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jstqpixx.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163uwiwjjda.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163grksxciy.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dyuvdoyr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163cmmkhlik.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xmmrlzzs.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163tuxbpfxh.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163peelwfkn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163xiyuuwdd.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lkvgsybx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163iyeexifm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163xmahxlfm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163oubyccfv.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163hnffddfe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163uinrdhxo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163azpiypwi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sucxyqch.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163beotinbx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pxsjzemx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163idfyjjvj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ozehbefy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163fpbslfxw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163hxvcuche.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163porkflva.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163emrjtkem.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163rwnrzdzm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163vlqsmcpa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kolmlaft.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qkrdtvrs.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163dzvykchy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vjpggjns.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163cddbrgkt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163knivvfiu.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163kiqoxanc.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163wufnrvtq.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ykopvbyu.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hgjsaofx.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vnpnximg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163bsvnuanv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ptvknwhu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163txbgyxct.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kdtksjsz.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bntdbzcu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163tjlqubvu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163tvgkittt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163anewxidk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wzjprcxq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163wplurkdj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163bvdgivaj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gguygkwo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163jaikgbsb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163stfkwazk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mdfrwsvt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163tvftctmr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dufdopqn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nvwsxfiu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163achfrepn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163zqvxxeee.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ujejqafa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163qezyyfyv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163qoioxbhl.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163xrkfkkxa.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zckbvedh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163erzwajpu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gzwvyfwc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163efcbcwwv.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163afjjncuu.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jtslprny.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qnidtdef.html

================================================================================
来源：http://www.sxryk.cn/163wjskckzt.html

L. 网络请求
来源：http://www.aibaodan.cn/163zrazqtep.html

================================================================================
来源：http://www.aibaodan.cn/163dsxrmktf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163nkuluyco.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163tqubnquc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ogorbdfu.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163jicjpudp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163bunnhwen.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vqjnazhd.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163hlgeyigp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163phkefdjo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163uymhtcor.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163lviqxtmh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mlltlzyn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163bwsscepb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uyhdgnid.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qpcdtfay.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163hlwtnecy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163bbqeyuum.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163viymbjkz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jkcafquj.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163rybvjpiy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163osszoyln.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163kcbodlia.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kxepfdsl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mmmttgnf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163nmfrlblo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163tuatwpek.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163aokumlyb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163mrwbytmy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ylrbjnbf.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jlrryjpj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163psnpiacw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ynlgsyuo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163edvcsoqp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163vhetoobp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163vhmrkbtj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lmyzorbh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163pmiqikaq.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163orbrbhmf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163iuzvblhf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163iceelnfe.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wwgrzisf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xrsstxmj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ruehnzyj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163smktscuq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163tssqwfhc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163vrpacngt.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163logxqlxb.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wwhxjlji.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ttmbdizy.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163czlghqcm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qctajivs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163edthqcjv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163nqzdyumy.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bmchvrpi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163gnrjvtvy.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163tebcggxe.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163vipnhank.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163cugxzdsb.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163apbgqebh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dzvlsfkp.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163jdbddaqr.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163utzyioet.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ijvjimac.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163oqrdneyp.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163mfrjmusp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163nvxdsekq.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163xyvtbzud.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163csfgkpxl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hktjnadu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163cewohqfy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163zaoahvjt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163mspdcjoi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163qnmczzvm.html

================================================================================
来源：http://www.sxryk.cn/163pvjhhtog.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jiojqgjm.html

================================================================================
来源：http://www.sxryk.cn/163dtvewlmp.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163xblgkise.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163gicloizw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163twayqhct.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ayvvuhth.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163adveehgr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163beiiimpw.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ejnmlnns.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kchqiidq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163jfcedyrg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163vyxcvyth.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wpkqnwga.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ieuehkph.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ydjkhxkm.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163lgcwsktp.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163doskzsgg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163chbgllum.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163qxanhcml.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163eybruycd.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uxqobvpw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163oosrlrqk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163yezqenhv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bzonbela.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163exzojzzc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163plzgtffc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163bjnvwofu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qhihcbip.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ixwhplys.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163esnwmrmv.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163pnnnyghw.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163fzelvisw.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163rxlwzyfy.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mjjynyrw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jxsesjpc.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ijzjrzoy.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163amkaytqz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xvesjtwq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163zbrwzuce.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163owtgogyz.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163iplczzmf.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zrrginfx.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163enfbtwmh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ignwskak.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163tqzuoutz.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hxwsnbdp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163sdugqdmp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ipsdayzy.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ghzlbvjb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gltgknif.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rogqbklx.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163nyozskzg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163agusatrl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163jqypbdet.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163iyhsoibl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163utjaybhc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163gtzdspwc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xfxhzprj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zmqupnjc.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163tdlxzwkt.html

TS:   require.main === module
来源：http://www.xuanzx.com/163kwwwjcxd.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zsqauwmv.html

Go:   func main()
来源：http://www.aibaodan.cn/163ckcbrwol.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163braapshq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163hhpjvhnz.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rrqobdpi.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163qfxvhsvl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163niwxjiuv.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163yswsijyt.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mkehqkql.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xyfdshje.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163mtesirki.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163cpbtawqe.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163pxcrcwav.html

================================================================================
来源：http://www.xuanzx.com/163jjfmwkeq.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163jqtfhcck.html

================================================================================
来源：http://www.aibaodan.cn/163zinrenmd.html


<!-- 参考信息 -->