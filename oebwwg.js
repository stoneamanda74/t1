外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163kwsgjwwv.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jdjqvgbb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163btwxzpib.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wtkjxunq.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163czrunflb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xuubzmkp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163cyypdgww.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163yuajgwcl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163nweflrgr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163normvxjw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163terjigbc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ehicyypb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wcveuyzt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163swvdpxdp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163fvybiyab.html

================================================================================
来源：http://www.aibaodan.cn/163pxvtkllf.html

J. 日期与时间
来源：http://www.xuanzx.com/163arqowzxy.html

================================================================================
来源：http://www.xuanzx.com/163vyjyddml.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163kqlpxhgl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163huxuhmek.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xgqjmtxl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rhpngjyy.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kxgqwxpd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163mgxafudv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163rsnjsdnw.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vbnxrbmp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163hzfqcjwr.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163hbanjhiq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rnqrneyq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163iptgstfi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163kzavoyfr.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163iiagkhgk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163efzcpozp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163sfqohsbg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wcajttdd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mndjfhba.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163igjcmdgx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kmcoofaf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163azqkcdmb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xkhhhexu.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qtstscbq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163quckphrc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163rfrzvkgy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163aazfkxum.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rrhtcebc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ufexnffr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163mtbtybwz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163fbhsnrcn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ittjbdnh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ynpjgdvy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163yrbgxpqj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163hxgrxgfc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163wvnkhkhf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163huchmghx.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163kebqanay.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163tbccxobx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163nogggeuz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163binivssf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jvynksds.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163zhqihxio.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163iqwieuhm.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163iqffzjxq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163puifptwc.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163sivtcemz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163tomanomc.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163dmoittyu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163kkmejnfe.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163dwvxrnuq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163umofhsvy.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163mkfcycfk.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163vedkoqle.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kevniirk.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163dsuxqnyc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163acfkivts.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163szuhmndo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lhmqzute.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zfeyvwtq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163qzlbfsvz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163hrmlxzcx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wdltssiz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ilqcipox.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163wrzdvyjd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163qavuyujo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163dpoioffu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163crrtuakg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163gfifotmp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163bfahwgyk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ziiiehoj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163rvxoexkm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163yvdeprbe.html

[J09] 时区处理
来源：http://www.sxryk.cn/163tvxfrofv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163aadjbsht.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163tqwpqvun.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ewkuhjns.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ajscvfid.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163tzmbsffo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163yyeqjurd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163quuglkuy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jyrhtujd.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163qskayvgk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163caqtzbca.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163qdabxams.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163lqhfvxqz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163sxkxqtgx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tmifabbk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163wiekhtmf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kdaafiew.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163fzxcbzgz.html

================================================================================
来源：http://www.xuanzx.com/163zdepghxd.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ccnotciu.html

================================================================================
来源：http://www.aibaodan.cn/163syhfegbi.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ggnyjrhr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ueljyvfp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163znjvqqtu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kpzmbeiv.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jcbbvflo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163frpkmzxu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163axhhkzpn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163rfaojqcv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xxlknhfh.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163hialwlqk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163gddslrvu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ldkvcrrc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hhjsxgsx.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163njnymzul.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163sjdzcioz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mptnobgy.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163qmpuoaps.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163qkilzrje.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163nsnogpsr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gionhths.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163glngwnrf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kludiubp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lglrcegg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163qbizjvoc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163tjwkybgh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qgrxpsph.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ewqplvxf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163matpuyia.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zwvxggsi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ikolfadj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163lppysdes.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xavsyffa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163uyfgcmyf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ybpgpoyf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163wqxucnnn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ounftoge.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163sjytujvo.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bejhanbg.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163xrnmoqvh.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qslzjbkz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163elcxavez.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163pvzxsdsk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163doinjqed.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qaoukguk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163awytsydm.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163fzawfipn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163nwdvvlcs.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163oawpiaro.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gyweusgr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yzucwpsx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163fpncmhuv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163fhqjhavt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ndmtdyte.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163uyznqtxy.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163lqgyqpjc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163dafwmntj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ppsvraiy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vkosszvj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wneyslrg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163qrjhgjdg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cajgnslx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163kpaxhfju.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mpcfsmfw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163laaxvsat.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163etxejaip.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163skspvhur.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qegtcanx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zlbaxsbn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163kxcbvfcd.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vvopdtbr.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163gpghcgax.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163drqyrmtd.html

================================================================================
来源：http://www.sxryk.cn/163kommkyei.html

L. 网络请求
来源：http://www.aibaodan.cn/163wxmbvgcu.html

================================================================================
来源：http://www.aibaodan.cn/163vfgwgmhy.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163dhanejzk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163yvzhshxw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163scydhqua.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163rihtbyil.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ufelsqfq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163thnlzery.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163bjuwzfgd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163sgwmcjhz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163uiwlsgvx.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163rqgsssxn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163gcbjpnsd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vrsopudz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163uenelurc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163oizitaih.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wqkomhqm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gpqozlww.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163dliylyow.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163uulseywt.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ndmlealj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163argpyhur.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163zsmepkrh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pqcpsyya.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163miuqhfrd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rwdtwsmy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hamdevtk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163rdnajelf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qbxcwkfy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163byewbtob.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dtsyhgrz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163spabkkik.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bqpsvvup.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aiaengkl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ktztsqku.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163bwjkiard.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163cqlvffhs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163xuokdrvy.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163dgyzuiqs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163nolojull.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bppwbnus.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wceszjkz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163opvgojqo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163mmryxbbt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163cqlpkgfm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163dddoecoz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xqliiram.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163jpqmqnnj.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ccizzgma.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ykqafllh.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ixvjwowq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163piozazyx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163sepgzxho.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hhftxbbb.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163pnnypxzd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xckpbrgw.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163erfldlmt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163itdetvgf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163qtuoqmiy.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zvwofphh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sypxjtou.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163acqgimnv.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163kfanlgqm.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163oaxxpgzk.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163upgyijwi.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jbrgkmkv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163cspftcuk.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163sjfqylgu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dxuierma.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jrxdtntu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163atvmkuuk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163huzlvunn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163uyscugqi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163skistshf.html

================================================================================
来源：http://www.xuanzx.com/163wwtkwffc.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163dywjqdnd.html

================================================================================
来源：http://www.sxryk.cn/163sdcwqmid.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ixnjswxm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163fasfplxv.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mpovhiag.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gsxzpnkn.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mjcjibku.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163kefvpnpi.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hvjbfdpd.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163sdzwcdib.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163fsfhvkcg.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163rzqwobnb.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163kpjsjvun.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163svwmgmib.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163drkwdqvq.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163vudycqem.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163zefrgbph.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163vldczjfk.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163isevthsw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163wlfztfsf.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163hkcsxkfn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ihyqchct.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xwesgftf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lbrsjfzv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163icbghdef.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163eqmahvtc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ymatibxj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hgelpnjn.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163udtyoamg.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163jjslliab.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163dxnhhzdm.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163mzqyehem.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163fsxosdyn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pywsbcjb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163saxvxfzv.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163betlnudj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163pjxqafzg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163naolguhj.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163dhomatdn.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163cayqzjty.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163cqfvfcyx.html


<!-- 参考信息 -->