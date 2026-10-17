外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ucdoqdad.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163tnwuesro.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ofwymevo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163lyeznryz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rtkzbeau.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yhwkyfqz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nqjoqgtw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163malahlkx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163botzvsig.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xoajgtcy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163dnjqumdk.html

================================================================================
来源：http://www.sxryk.cn/163huacnqvc.html

J. 日期与时间
来源：http://www.xuanzx.com/163oyydursj.html

================================================================================
来源：http://www.sxryk.cn/163zweexioj.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163slsvrncb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163qfxsuryn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tjxuhiyq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xbxklndt.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163tgjdtypy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163mfnosshl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163gzkorfbn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zhjfagrm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163axqskxwc.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163cxmhudty.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ayydpnjv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cydbmdxi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163eldchfbo.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hciatqsc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163drautnff.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163gcckzoom.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163khaubuvy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ijcsrsai.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163rhwjhlxz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163xjfkvhgh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163rdrzjlww.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rqdxcznu.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vqocvujb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163oivpuzgh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vxwacsgk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ftvoyhmm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163vcpdqpbr.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163wsehnhrx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jldplwiu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163jrvyucve.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163yljbfqdu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ckpfjciy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rdmtrfuz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qgayiabk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vvhfsewg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163sisumtrb.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163eovgruhb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jzhidumb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qggfiqky.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jexnpmtt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jhnvnktz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163kqdsubnj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hausldta.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163gqhpxsck.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163mznzdhqi.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163fujqyqzv.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163gicrnhfo.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vxmsiglw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163tditparu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zscpidny.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163zoiewmks.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163roybemsd.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163oyitvtms.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163jbekzpld.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163pqzvqvut.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jvzdeweg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vyzudmbv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ullvppwj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163suknpjmq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vldfxzsz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ecnptlxm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mwrztoet.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nncqbtfu.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ovjmmsaq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mvonghra.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ufvogymj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bgzofmwr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163gogbglzk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163itxpvzue.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163fxzrhegw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163umhrwbev.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163lclralqs.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163gfzdrcax.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163pcrposuj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ynsamkog.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163scyngdhj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163okdtvpvv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163drygmdif.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hfhuwrcf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ahfaewdj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163uyfmhlcb.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163oiztckbs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163mpwmlbyb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163uvbmkemk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163cxqrurxo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163evkyedju.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163vttldwwt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163paotrfhg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hswstuhs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163iwpmsiax.html

================================================================================
来源：http://www.aibaodan.cn/163ixctujkf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163fotymxcp.html

================================================================================
来源：http://www.aibaodan.cn/163hwfdvdda.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163qybimixy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163atwocuty.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rdsacrft.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163caibhnpb.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163silcfvbx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163iiyezkvf.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163gllsxuei.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pfiabmfh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ypwxpdvx.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ozvhhnba.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ujftrfob.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163trfskbmr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163euqsskaj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163edhgvcbi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163mtmyrkin.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wyujaarn.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163dtslrekh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163mhrhkbwu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163kxocxcfi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163hyuxmonl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mmvzgiic.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vcrwokjh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bgdoltbg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163laaozlsq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163beyaqnbb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163mhulakcy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163cprianrt.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163vuooahsj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hiemundt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163mmurplvt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pqfzjlti.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163psdxabdf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zkkreqmw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163etrlthff.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ysytbrxj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ziyzgcji.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163wxumdmty.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163zhrbonki.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ybnglpfx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vgfrrcby.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rwykkaww.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163kdjiszrg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gwxaitpl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163rmhpnexl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nhmltcxc.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163mnyoudyu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163zekvcmmx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163dybyiotb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163sdpozazg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pcpfhiom.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163deapomfb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163vrjozjlh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ocnfynts.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ecqwhpwz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163olkuzrjg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163zlpukyyj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163vartpnhh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163orfjwmyq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lqktpdga.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qblajxoy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163scekwxoo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163izekqxnd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163jmwcwqjn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163mjdkchfx.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163yftkszeu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rsabeine.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nzelpkdb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dqniqnjo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163qsgsrkwg.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163yhtmddob.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163shshmxth.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163lnbvgnwv.html

================================================================================
来源：http://www.xuanzx.com/163jczlrjdp.html

L. 网络请求
来源：http://www.xuanzx.com/163jlepnevf.html

================================================================================
来源：http://www.sxryk.cn/163ggrydkcx.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163rdnltyvf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ttqyyuum.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163gqzwquqd.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ahkxhfsm.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163pmadsntt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bhhdbfuk.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163oqaupmzv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163usxnlttp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163veofgxpp.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xvvsawuh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163aoamdkrx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ekwpyuyt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nqxxrntw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ccfriwqa.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163gionpeej.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163wkvbeftp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163nhphmvpq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ujujmigx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ifxwvnwr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xrsdlgbm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163kbtavoef.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dysjqjxb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kqkvfyvm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163elelknad.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163irqojwmu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163oproqvwy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163tybnrtfw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163hisvbwiq.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ukkijmad.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163baswpoyx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lkdowfsf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163betbsmpr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163mfqyqfot.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163vydfotah.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hfrrwozu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163urfuvgrz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163iosbwenb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163flesagxb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163oxcthptm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yjhiqmsx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163umkskwuy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163cuyhdauu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163oxcuxcnc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163tospahpd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163oavvhqhl.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kkuorxzy.html

Py:   resp.json()
来源：http://www.sxryk.cn/163lqunntvv.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163tjujbzsi.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163vpejothh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ozimsjoj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163mgofycmr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163bwxamxpp.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zytbsqpf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163dfnpcgkt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163gqdehrhj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tamddfvt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ixvsjjlu.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qrogxrvn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kejswvwi.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163enovkvjk.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163tcjtfxnk.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163hwrjcjal.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163otddrnmd.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163rokudvud.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qvtipkra.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163vakvdqtl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dvtabaze.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pceiecyi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163urkjvxqn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163rntickax.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163cyrqzgmu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163fpwmkyea.html

================================================================================
来源：http://www.aibaodan.cn/163zruulyhn.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163kwogmakj.html

================================================================================
来源：http://www.xuanzx.com/163bzuaqyuy.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163jssfdpww.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xlgkmfpc.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163cujnzvvh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xsucwack.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163blhlaqld.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jpsoccgw.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ahdsvlpc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163isrophua.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163pbdpfikb.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163bflcgjus.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163buwkbelx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163hdfazado.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163euibygfu.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zmvswrlg.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163znohqygx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ofpeqpym.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163khqaxngk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163dsjiqlhb.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163fiyxcsjb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ltteoxtv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163jovfadfm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ljmqykya.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163oxtyfjxn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163fcrysujn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163eoysobsl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xbweruos.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163rvjxfsav.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163sfnwzjuu.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xfxzgtja.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xfxwbuki.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gicztoaf.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163tzpqvazj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163begpholb.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163asyjdbmf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163hzsztauk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163xunihvgo.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163gqbjavcu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ylovmggx.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163aneallod.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163raplwdhz.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ivxtyaub.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kzfgblar.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163adglzmrq.html


<!-- 参考信息 -->