外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163tiwnggpg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163anfnztdu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163fphsvdvz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dlanedpr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163dxwphsdn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lczlqlsl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bzvuvgdi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ghdmghyo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163dretmmit.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163osblcyjd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163micysveu.html

================================================================================
来源：http://www.sxryk.cn/163dwbgisfu.html

J. 日期与时间
来源：http://www.xuanzx.com/163awomfyib.html

================================================================================
来源：http://www.xuanzx.com/163gqdmgzkh.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163vhxabsky.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163aptookdh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ajfkseax.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hkvlxjdr.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163puuicahv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163yijwqatr.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163gljkklxa.html

Ruby: Time.now
来源：http://www.xuanzx.com/163svyytqct.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163efipoqcl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163mvkpvmxc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dlmqonvg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mhuyejxn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163lskghjox.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163rpzqdnvl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163sajkwigf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jrelicrs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163uxiruszl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163iakcxnmy.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163itrmpgzx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163obshqlpq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163cmyurbzx.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qdipbyiy.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ixngtvwa.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163otzokkdq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163lnptyatp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163bbnpcoms.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163wcplrcbi.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163lwqeepgw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163tnzcxsld.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163oqdazhag.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tjhtvqbe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vtgbxntt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wwnyshag.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163viedvwpy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163naaooalr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163farsvqpt.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163zcrrqqbn.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fduxtkhc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163gfcriphm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vehlxiyg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163igvejdzp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163aqlrxhcn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163atjutfen.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163hibbdaum.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ugwseusv.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163utalamnn.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163zmzdmznj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163mgmrvkmx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ivtdqdvw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163wkmytmrl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163htihrqbv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163folwgcaa.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163mmhdxlly.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163waihiqql.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163nimihwgg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163egfxydqd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163toopjpar.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rcwpfiji.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gspuvhkk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163kaklqjlq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ijxnarby.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tvlqporx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163akbgpopw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163wkzsxbma.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163btormnqo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163bknecgle.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163nsfwnglj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163hjyfwjee.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163kvtatpat.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vfskmxnu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wvlxyfyc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qqzoorgy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163jriupanc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jvqzhsni.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163vvnktnxg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ahfxbzwn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bnzpvulf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gfvbxmyh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qommbjaj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163brlnsfqf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ilbynwto.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163poqjmeem.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163glzgiezh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ohlewuvu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163joqxnibb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zuspxjvb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163uevzmaoe.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zkyrnomh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163kpsiaqom.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ojjkdjyh.html

================================================================================
来源：http://www.xuanzx.com/163qxdbwnsi.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163llewxgpy.html

================================================================================
来源：http://www.aibaodan.cn/163mbkboabm.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163kuvevpfi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163yzgzrcaz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163aetnwopk.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pcwddwmt.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dkaachpz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ehxlhybo.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163eoylvqis.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163kziarchn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163onmxclog.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wrhnskql.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163zvseetpu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163scwskric.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yvnoglwl.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jmagxufd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ihnwdpns.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163tizfwxbp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163xqcyithr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163lrfkhstg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163vouomzdo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163sfxbkvmq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vdwgxgtx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163gpypglms.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163umnmhquy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163dydvihau.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163paglrzmm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163eicbahzj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163yrqbtjbq.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163uirycrva.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zozabeyf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ihfewvtg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ebqaedfy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163traupdyq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163iptfntke.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kbzjuoyd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163nqmmiwgn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163stobedmc.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163wddzpvnl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163raabxeac.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xzbptidv.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fyjemkan.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dkkodtqi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163osozqstu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ajhrvcwj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163nrzzxlxd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kykejkvn.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ykdkrwzv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xjkxuzkh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ofjiwdqe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pzyiumlx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yxgzbmem.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163qdwcizta.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163xwkhwjxw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dvdpfifj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ekasnrir.html

[K07] 进制转换
来源：http://www.xuanzx.com/163gjmqeiam.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163cjsqtrky.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163dfnslvda.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163snujohrd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lsjalbjj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kxhewzyf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163aflkumnf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163sijiyaui.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ovlmradt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163nvtvnjct.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163bwpawzyx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zbjrfqbs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pyneoqyd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163isbnikva.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163oqfzmfmd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163rwjaipcu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163yskhkqqb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163jzaytiry.html

================================================================================
来源：http://www.aibaodan.cn/163wtlnugmn.html

L. 网络请求
来源：http://www.xuanzx.com/163ggmvitrv.html

================================================================================
来源：http://www.aibaodan.cn/163iucvjuew.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163eytndtzl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163sglxkxlu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163zwvhdlqo.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163fciulfcf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zohvcpzh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163xqzzuajz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163snpgwcmg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163anitmvko.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163utxocuhz.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163cgqwzfhb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ocwkzrmc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163spkuoqgk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bywlzzia.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wcxntvgv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163djufvgqj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163tdiweirp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163sbfukntp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163pvsvszwo.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qgkarcfw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163sdwnnrhi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163rvzhlvew.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ugqblofi.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jsxyujlh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163unbxoucj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163gemopupm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163zsudnmzz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163xnlpyasc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163lvvyqmti.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163aedqzmzq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163iqytyzzj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fcyxbbro.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tzoznzdg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163dihxkvrf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163iegmcfrw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163pahqkakz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163amvojjzx.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rfgusqea.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163yjbafiyk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163hagibsmd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163peaazcsv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163cgvnteco.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163corbtoxk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163zurowkge.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163kyvobnub.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qcbgvujs.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163uqlswawm.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zswxhvof.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163nmgvkour.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163bdhlhjyy.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163quoufyor.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163mxgopofm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ntdovxjh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ddaatabu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163gaxlalkq.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163cdpstxky.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ekqobava.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163rtrhsrbt.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mtkdsxdl.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ubntdhaw.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163lkoxqmkh.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163zyxjqtfk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163xxfvfofl.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kwvofubb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163nfomfpfy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zczsbbln.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163typagnjy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jgevmwvd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rzepjksm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fkcohphn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163vmdaoalp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163niqnajqp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163wpwgukha.html

================================================================================
来源：http://www.xuanzx.com/163uoxbfngt.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163eyxszdzj.html

================================================================================
来源：http://www.aibaodan.cn/163awgssgil.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ujcefzuz.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hsaolwfj.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163idnhlhvh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mqjdsewi.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163thzghsml.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ksozsjco.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zwrmpgrv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163mvesaluw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nejicibj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ajehohwb.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163cplolfab.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ukymnane.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zyxwdsfw.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qyxmvpcq.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163hxqjdavs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163slfxuvlf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163kqqurgry.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163mofzfxyu.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163eraoozfi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163wlhpvxpk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163aqnlolfr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hwlzlyfs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rpkpdsaw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163gbgrvaxs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163smcizsre.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163xzxflzpx.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ijdciydh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ykakfbho.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vcjpivyl.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163yligznzq.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163zmehqgku.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163kmfikyas.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163rvmmewlu.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qcddggnr.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jdosghzr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163evqmofib.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163rjejycaa.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163bsbvlsjs.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163thiobvxd.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vawwgara.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163xjcdxebj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163oxzrrixp.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163wbhiryjz.html


<!-- 参考信息 -->