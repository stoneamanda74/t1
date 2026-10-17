外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163mrtztpzz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163swnlafvy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163pvoqyhjh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lolxeuuz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163syigzmwg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163spvpcugy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mpsrifjm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163xrberleb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163owmgglbh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163lfrugaxy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163pfionnwl.html

================================================================================
来源：http://www.xuanzx.com/163dyqtkkva.html

J. 日期与时间
来源：http://www.aibaodan.cn/163dtchgmlh.html

================================================================================
来源：http://www.xuanzx.com/163wjwgaoep.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163nqbrkggk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163kehydvzg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xccoindn.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fvalvzgi.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qttoyfqf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163wbexafdr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163leuiuyrm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zknqwptg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163bwwxwjhk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163kkanthqd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163idjefmxk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wgojunqk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163bzkyeskh.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163wtnhvrtt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163guotvqik.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zloamrcb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ksyfjmql.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163agsjeryw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163bcamcgch.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dckualse.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163otrkgrlt.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uaawhyuh.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163dasviluw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163svsgsuhq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163lkevjapi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163evuztxht.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fgjduxgf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bapqtmbk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vkszfrtc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163avouewlr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163nqeikqki.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163libyqeor.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163sfktegtm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hgmutzjw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ksqfjmuo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ehjiqqlg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163uekdrhkq.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163litvxyzb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ybczavoj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lryybcki.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tixtqbfv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163vughasqt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163swiwxzfl.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xduvpvks.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163dynzmrll.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163mkirouon.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uspdtgpi.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163gvocjhuy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163tnbsywkz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163iabgliju.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163vipoqimx.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hgreniug.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163emmgafep.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kjyrgtca.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163yekoqrlw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163aqelfhga.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163nbtplkhr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163glnldudj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uuuwqlqm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xcztymjg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163bldlarga.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163slvdqeig.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163udjkkbnq.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163qcqhejjy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163lmizvugg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lwovfjel.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ctlxvter.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163wvaxigum.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163prwlnbay.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163yyhwuntv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163cjztfula.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163fdygrvct.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163srczivvd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163fnyzegng.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163uvohanap.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163apynbjyk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xueswmst.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163uqgciihi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ofipxrfi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163zpyvmcxp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163becdmizw.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163emlpoavk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163bccudepk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163cxsbdwli.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qtwzesjj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ichmermv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163dgiziuwz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163jfhtgjuz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pxeoexvk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163pxqpauoi.html

================================================================================
来源：http://www.xuanzx.com/163ilvucqyy.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hfudkzcv.html

================================================================================
来源：http://www.aibaodan.cn/163eeszgxdo.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ywqqspdj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ldndhvps.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163amoqizdd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163yxgurpse.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ijdvxtvi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163oxyxssyd.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163jltpexei.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163rrecuaaj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163oifenibh.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163xmyhvttk.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163wkpdnbxu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163mdjwdjwm.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vjrytcpu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bobceulv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163wocuiezp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vdywqosj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163kixrtlgj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163pucurcqo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ipkvnznr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wlawwihk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kfqebree.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mxqehxqr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fpxyvejl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xupaheuh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163pcilmysd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163jpignmtv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163dyfxxtwp.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163rjpqgeva.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163msiyxzed.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ogpnowzd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163sovyhwwd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qtvizwte.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163vbfklepd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sidfxhvc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163auwdcthh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163mvlzptdw.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163urmkceks.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163yfobvmsm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163svtmedps.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mqgbgotu.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163okklyhzg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163qyipjhoq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163xoyojcod.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163aqinnknr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163uwqrhwyz.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163gggotznh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zqtcwlrp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163pqppinyu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tvuctqiv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vwxechzm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qbwertus.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163hzyiqmcf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163eqtamfwn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ulzrcciw.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bujmdgdo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kfowozvz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163xdjhzlxk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rclsianj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163drigrqbb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mhtkdqxw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163yslfgnqu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163evyftelw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163bwcxgfoh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163aqfjvhhd.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163rinkenkc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wfytucfh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163alitoyks.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mobiyngv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163gwiwsjfa.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163yenhdvpf.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ropqrdno.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163paicbuop.html

================================================================================
来源：http://www.sxryk.cn/163eoqjtkiw.html

L. 网络请求
来源：http://www.xuanzx.com/163smbagsxh.html

================================================================================
来源：http://www.aibaodan.cn/163cqjbbukt.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163mhtysgyt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163pwddznlm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163xqfnlsln.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163pyodtoub.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163lpotlwul.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163uozsqnxw.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163jmqyjtcw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pkkgbwtj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163jhdahvud.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163pbjdkyqq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qycwoybl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163kftsttyd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ezvawayr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ylsyvyhx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wiobxxhw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163fidddaka.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163qvxtdzpj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163xkmnkckm.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163tmyzswkb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163gtasbafq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163osmutxiz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mwwtwnrc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uejjnkdp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163sthuzjiv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163wmffigkz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163gxwxpckd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163unhmcunh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163bkfwphwj.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163jaurqnxe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163spoipblx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ogfqwire.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kvfgxaxx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163dkzkxkwn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163snkuappn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ezoywrto.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163bzelgtgj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hqeqpfzd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163aewoqugx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ohotqyby.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ymzovswf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xjevfrdd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163llfaoiuv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163vqfjowhv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163xszyrsrw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ddosxnbu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ezcikzdj.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zpexiaby.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163gstltngc.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163fnkadwfi.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163szjzntnx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ydpblxwh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163zqfbvaks.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163hlvzibdj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163uzpwqyjx.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ghyzvkny.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gdlbnmmk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163epjguqcd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163crsryegj.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mqnxcdgr.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163fhuldrca.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ucfgigui.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163rsecyoej.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163pcikfdrq.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ytxutehm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163wwgqgfrs.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163mesrwlay.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jfjuhquc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zfshjclz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163qrbdkzec.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163odupdfot.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163sarqvjqi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dscttbsa.html

================================================================================
来源：http://www.sxryk.cn/163xbkddhjk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163lyvgsvpi.html

================================================================================
来源：http://www.sxryk.cn/163jflhxmtu.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163yhptngrt.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jepipfxn.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163gdvixczo.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jyoqodnn.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gtbqvtrn.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163smpgiuni.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163nlzueyyf.html

Ruby: ARGV
来源：http://www.xuanzx.com/163katlgzqr.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163vjsrhxqz.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163fgzplnbu.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ubfobpab.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163flzwlhlx.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ezghkzmd.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163hckzwosu.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163htnoafyg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hdimpzmf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163vtgvhqvm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163mbywarfk.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ndnczfiz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163kbltqxiy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163rkqulkeg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nrbmiull.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163kiwklgjl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163axusgdup.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163aegtkhkp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zrugmnqy.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kxephhkb.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163czrczkxg.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xgokrhsr.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163yxrdsigl.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163owumxoey.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ezsxomvg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kbrbqzgf.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163iyaqclcu.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nimzuqqw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163qesfgcyt.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163xbgyrunp.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wlzlaqjp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163yqfmyqlx.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163rznbqwmo.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163awisqozb.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163nqqfhoof.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163tehkzfnz.html


<!-- 参考信息 -->