外链999!wailian999！

J. 日期与时间
来源：http://www.aibaodan.cn/163uhglaggr.html

================================================================================
来源：http://www.sxryk.cn/163wmkesiun.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xyaouumy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ouzpszgn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163whypswij.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fcejwqtf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qnebedje.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ohunwbqu.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163dlvlfkza.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mfsyrtot.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163gpoynaud.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163qhdfdlib.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163txjviita.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hztggmwb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bmajzdhc.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163mygzhpsq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wugltdcr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wnrweipv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rtjzeuch.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163rnughjhi.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163cmbirsfd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xulwwmsc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163nznmlhqt.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163sqiiecxo.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hwcpfnmn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jizwvilc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163hhqxtngx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163oydhvzbk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163pzkqbipv.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ankeyawa.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163tgohiujm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163jgoamcmd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163vfryprww.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163weiejapl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163cohcvlpz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163pmnscani.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163qilclotq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ejffgwaz.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163vivfpcnz.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jypixcnu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163xnwwqxso.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zbkndbki.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kryeqzgt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ejxihuqo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163anjsmpjy.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163zrrmypyd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ktknidkg.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163yxxslowz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vwkgdhag.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163qcwexonl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163abzmtmtu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163bobnrtlz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163slfrsrph.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163nyudkaiv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163nfirnejg.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163qezfdrhw.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lwrgoymj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dytjbnkp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ugunwakh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rabxtltu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163draasjan.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163hakgojci.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ndcrspug.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gwjneyrq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qfsgqxca.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hzetxrlx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163uvxbbglq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163pwtryfrw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ecnfpfuh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163dgqqjmpq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163trjvzoiy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163nprpgzwm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163xecrodjh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163wgxygotl.html

[J09] 时区处理
来源：http://www.sxryk.cn/163swuevefg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163bwwvzjnc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163uiwpfcea.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ybstcstt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nfarppdt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163cskcdxcb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163efryitxg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163gcczyzwv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163rxrovmuv.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163itxapvph.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wbhssdlm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163tpztcyar.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163tvxzntem.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163byllinxq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163vahmzssq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163pvftvlgu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hpzxuoek.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163vkvtcwpg.html

================================================================================
来源：http://www.sxryk.cn/163dsixtpzn.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dqtetsnq.html

================================================================================
来源：http://www.xuanzx.com/163lfzytydd.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163yidxbbqd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163zklvruag.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mkzqkuan.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163uootgmne.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163etcttsto.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163lyhgxqlt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163urczqryj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ywkmrklu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163chxwwveq.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mtsbmnbu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163qcqubwye.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hxkguusp.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ynharraj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yxaodhyv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163glvrgcjp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hjxrumih.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163atbsnovh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163wuafxpba.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163hishwagu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163aynrliod.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vfoxvlsl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163suifkxnn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163obclcgqn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fiqnytrj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163leuqekcf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163huosnibb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163fcwmjczx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163jzeoqfad.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163pdfdslsx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zdrofqnq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163akjzhzsm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xvjjavsh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163eeijkivn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rndqsndp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163mfurgbbd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163aupjflbf.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cwxurlbc.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ybtgndai.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163iqfnnwrv.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163euzggdkw.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qnehfcap.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163oaaexsxh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163cctyarzq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163knmjezlz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kpbyfpix.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163aqdvzmqe.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163noaivdkm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163mefnldki.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kxyvqjwm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jbfhyqvq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ytjkavhs.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163faujblbk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163sgbqptiu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rsjgyesk.html

[K07] 进制转换
来源：http://www.sxryk.cn/163afiqxcpa.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163itdiqiao.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163dqhxiyeg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163djtgoqkd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hegycsyx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zyxfatee.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ynydasyd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ybmgngih.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163hvatxjip.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bjnuqnlu.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163disiuobs.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163yseysqcr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fnxlxnvo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vfydikmk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163mvjkoiaw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ytevkwpn.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163juiuixvg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vbpjqkvi.html

================================================================================
来源：http://www.sxryk.cn/163gtwguiui.html

L. 网络请求
来源：http://www.aibaodan.cn/163xdgnvjta.html

================================================================================
来源：http://www.sxryk.cn/163nrxbapbm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pnwlhwgh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jhhjwdkc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163atjebgew.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163dkqiueda.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gbpsyvaf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163winoumvv.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zmxemjad.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163egqkmwpz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xgnpkmfg.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163wotdqncx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ayflytac.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vtbvbcvn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iysyoali.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163saajbmxb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163nblijdjh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163eywcxtoa.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163pdctrcyi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163bqqmiekw.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163kuikgfmn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163kneykxqj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163scenaaxn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jntkdlnb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qfcsznpb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163fdumfwrk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163alsqskuz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163pivwfcor.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163vmtkcled.html

[L04] 设置超时
来源：http://www.xuanzx.com/163hvpwbgul.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163uboembed.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163xusedvse.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yhczawkg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163yltsizfz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163sncnzcbo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163cgkgqvti.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ocxqmupk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mnpjyuxh.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163vgfqkcgq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163lufxfgfr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rqyyynsi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qgzgopxw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gnkkonoj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163jrpulxgq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tgjfspkr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163bspelygy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zbmiekvs.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163mneaevxw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fyruzlae.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xmndwdbi.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163hjhshjis.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163loevevsi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163zsbznpry.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163dphesqly.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163qpsqetrv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163rjhmbxan.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xxzamyjd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gnmrnmaw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163cjxefyom.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163znukbzma.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zoruztfb.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rtewqiol.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163qnqoigdp.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163mryztukj.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ajeslmcd.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jnzcxiez.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163haoefyot.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163fbqjafjq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ytmsnljx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vgqykofh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bqpsjouo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163memrbboz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163jmdmrnsm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163sqplyfoc.html

================================================================================
来源：http://www.aibaodan.cn/163zemwgxaw.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163rdmdnkcx.html

================================================================================
来源：http://www.sxryk.cn/163pqljhjjx.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163atgzpetb.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hxjytagj.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163cjqyqnvl.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bxabbqlz.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163baaxjerz.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ctjqzpkd.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cpqimzhh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ataqvosl.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163tbgypukz.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163kjvohiwx.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163zwcsexfz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163adpukcge.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lzkhyvne.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ufamjxks.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163eildgtyr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163aiifjfgo.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163dhojtoid.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163bcfpinfe.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zxozbcut.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163isdhhaim.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163plvdmamn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uhxsparw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163awdmtcmd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zdbjwvbg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ufkmeuao.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xwjjnsoh.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163yazamkok.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163krlotqqe.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tkrqycjd.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ljberrbu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163adbqmfut.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163etbjgwpq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163bjtmrptc.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qhrnhgkm.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tvzvsuki.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163biwzgajl.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163mbwmfmgw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163kuwhssfk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163myjfswzo.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163rralgbhz.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163cqqirfyt.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163oiaberet.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163xlfzrbuo.html

Ruby: exit 1
来源：http://www.sxryk.cn/163snsoshev.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163yzswxedp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163eofxnzve.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xmsjzisy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163zirxwzgz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163eocwpqne.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163dlneregl.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163obibuxys.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163bupypxvm.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163onywkdqy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163cjobuseh.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163nzsexwte.html


<!-- 参考信息 -->