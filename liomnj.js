外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163kkissibp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163qucthvnx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163gvgsdqvh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ussbbvtd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163nwwetfcq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tdxxbggf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hqhmbicv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163cyozoqpz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ntqkjoxp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163xcwwpglw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163xwhqdvos.html

================================================================================
来源：http://www.xuanzx.com/163vljikgvq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163qeamcpps.html

================================================================================
来源：http://www.xuanzx.com/163ssjfuugz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163btlpddde.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163pgmzlsvx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163sfmdbywo.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163aewvpfju.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nhddlatn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163mvppkztj.html

Go:   time.Now()
来源：http://www.sxryk.cn/163sutepxbb.html

Ruby: Time.now
来源：http://www.xuanzx.com/163unkearja.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ucbahanr.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163hlmbqiau.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163srmlqmar.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ohylndas.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163dconxyai.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163emrcbpqq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tlbdbune.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163rjbtsfiz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163stqubdme.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ncdaxxqj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xagyzayy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163tfvqwoup.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ekbtjkns.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gyybrpna.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hwenbhmn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tqqyzujr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tzclqnps.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ullpdjwl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163phhwcjom.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163lxdaytgh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163dvvcayhw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163zbaggxax.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163abzgnwip.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163bfqpzjuc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ppmysfiw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hxtzlxes.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163bnjsgxyc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163msfcavwh.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163wjqknrgo.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163dyqfxyoa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163fcjjhzvr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nzeadrvw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tmykjwng.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163fwbeacru.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163xoosrzwc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ovdirxoi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qenjxgwn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ajmzlprq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uhcipurv.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163fhvfnkwb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163bvdkubja.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163yeqwnlmd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163tutsjcce.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163kzmnkhip.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163nitilnph.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ibmlxoqa.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163mwabdltm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jkfyqnfi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163bygvcvbx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zhfgabee.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gdeabepo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163dqjikovv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163qnbleltt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ogfwyqez.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mbwkpylr.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163yvzihivu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163qwixqfhk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163runaehjz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163fogrtjbp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ufldjkhk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163qrnwaqrb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163rdankpkx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zdgjuxfj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163pzieitvm.html

[J09] 时区处理
来源：http://www.xuanzx.com/163bwywjhya.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163iufftlie.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tzngyhsb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rswruidz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ateirnmf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163nulgqwix.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ohntpjwr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163txaldtgd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jbmupvla.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163lbmithab.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163gmzucggu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163rdiyelzu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163scibzkzy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163adwxgtao.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163nmczviuq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ukzvnerf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vcwnfjka.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163oatxpnzg.html

================================================================================
来源：http://www.sxryk.cn/163kdlahcnp.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163gjzlbich.html

================================================================================
来源：http://www.sxryk.cn/163dwebpghs.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163zmgiqhcf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163njfiuuyg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ynswcjtp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ezrpqgtk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163rywxzunn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fqeyzrli.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163zapvwtrt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163bsexezyb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163bmwcimkn.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163xhfgmzoy.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163fugctdbu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bigzsepw.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yomcthbx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hjbdxhvq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163eodzkbyz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163aodpeiyu.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163gkaxldwz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163bmvxkwgf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163vtywkqin.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163qnoghpic.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vpscbcaq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ilxclgcc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jzkbzwnd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163kkcpmyae.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163uuaxgmjn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163cdvihtyj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163lezhqhjh.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163docxcgwu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163elfbodyr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163vgumoicr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kskmvglz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xkvegtiy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qwprbilb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xwedsjid.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163pjfixzay.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163epotzmlx.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163lqgrftou.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163surwihsk.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163nygrmxqe.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163owrxzggh.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ohygsyjm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wgieenev.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163tynsfioc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163mkvyopcy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163zukeslem.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bszurafm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ilinodys.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ohygtoip.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yewxxgnq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fahkwtbj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163tpagnntd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163kwwaiyep.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rpsqoeyk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tylrhsuj.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163usgkcuhb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163hkumknly.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vzsanbto.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rgocyeek.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fnaybizp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zfsjlwsb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163nsapciwe.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163heanocob.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163msktibvs.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163uymenynr.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163vnxqqbwl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163xjqltcbo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163arepfqan.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yemppohi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ipkfjqok.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163imunedbb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dlhzhvwh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163kmufskjv.html

================================================================================
来源：http://www.xuanzx.com/163vtlrnbjm.html

L. 网络请求
来源：http://www.xuanzx.com/163iqrmhwjn.html

================================================================================
来源：http://www.aibaodan.cn/163zwnaxryj.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jyojhvcd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163iduyjjjj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163zkbkhoem.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163xujgtgmc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163helyefze.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163axtusnlw.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163mbihkttv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163tjwepobn.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163emlmubvb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163yofdeofw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163mkrdwnlh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163cgmvjyrs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tuvayzoq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163axtqmcjb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163nkokdfrh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163psmuioox.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163zjnbhjmn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163oyrkliza.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gdcwtrey.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163yflxhjjg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163wnlcuzxb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jiyfinaf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jcasqkhd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ojhfwuyf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163fmnxmsae.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163zhnhexpr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163rhwinhcl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ajxovogq.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163jtpmzyhv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163jogpvgbk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wncwdpgj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qbtpvbfo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163seyxjlow.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163yptadnvx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163rhwgmdsf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qzojnbcs.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163gdxggutb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163nyxeryvk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163prxradho.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163dtkicqua.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kgcyeohm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163lxmeswma.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163pwfwzues.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163hogovdth.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163hqiavwpm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163jjlvuhxu.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163thfgiheu.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ubcpzveb.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163pqfscihl.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163rlpnvrnw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163oehwbpcz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cgmnfhqi.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bceesozu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vefdcxhc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vkmlrfrq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zbvtgdto.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163wvgqzfnw.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lslsnkos.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jmvtntpa.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rreccxdh.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163dmjobssh.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163dseubugy.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163dqndfhck.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163wbwvbjad.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ikaobzxy.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vpwrlkxh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zkofsadq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ospxzvjc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163bdxdlqcp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163uavuvyoy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163uredcjkb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rmxbslbn.html

================================================================================
来源：http://www.xuanzx.com/163qydhfclo.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vviynfrj.html

================================================================================
来源：http://www.xuanzx.com/163cogwiqnq.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163gbeovfui.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ahuebtds.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163fvujlcqs.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zftcrurm.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iwkchida.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163occbgqdi.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gomwlmgb.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163intzhcbm.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163osiufluu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163efnjqjob.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163hitmhrmg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wzlbssqb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163grsujmso.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163imeqqvzn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ozunhdzs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163yybgcnrh.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163tkplicnh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163sqnkumwt.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163hxksmknr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163xwbxjnxu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163nfxjsiwb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vtljbkhu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gzppsjew.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zwscddlc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163reqaosrj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ewajogxz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ogdjkjpr.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163wuoedzgg.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163vqvtavwo.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ujcbcrja.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163yjsmvqah.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163vvtmtusc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163xwdpdjmp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rfqkoshn.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ivbeqhgv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ksubtktu.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163psnhpeln.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rfsxuint.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163uzolxjkh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163xajvjjze.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163evbfomhc.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163nsrnussm.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163xdbkxhiq.html


<!-- 参考信息 -->